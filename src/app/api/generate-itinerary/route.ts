/* eslint-disable @typescript-eslint/no-explicit-any */
import OpenAI from "openai"
import type { Itinerary, DayPlan, Activity } from "@/types/itinerary"
import { searchPlaceImage } from "@/lib/imageSearch"
import { getTransportOptions } from "@/lib/transportOptions"
import { geocodeAllPlaces } from "@/lib/geocodePlaces"
import { batchGetPlaceData } from "@/lib/googlePlaces"

function mapPlaceToActivity(place: Record<string, unknown>, city: string, country: string): Activity {
  const name = typeof place.name === 'string' ? place.name : '';
  const description = typeof place.description === 'string' ? place.description : '';
  const category = typeof place.category === 'string' ? place.category : 'General';
  const coordinates = typeof place.coordinates === 'object' && place.coordinates !== null
    ? place.coordinates as { lat?: number, lng?: number }
    : {};
  const duration = typeof place.duration === 'string' ? place.duration : '1 hour';
  const bestTime = typeof place.bestTime === 'string' ? place.bestTime : 'Anytime';
  const price = typeof place.price === 'string' ? place.price : '';
  const officialLink = typeof place.officialLink === 'string' ? place.officialLink : '';
  const tip = typeof place.tip === 'string' ? place.tip : '';

  return {
    place_name: name,
    short_description: description,
    category,
    location: {
      address: `${name}, ${city}, ${country}`,
      latitude: typeof coordinates.lat === 'number' ? coordinates.lat : 0,
      longitude: typeof coordinates.lng === 'number' ? coordinates.lng : 0,
    },
    visit: {
      recommended_duration: duration,
      best_time_to_visit: bestTime,
      time_slot_type: 'morning',
    },
    tickets: {
      required: !!price && price !== 'Free',
      price_estimate: price,
      official_website: officialLink,
    },
    booking: { getyourguide: '', viator: '' },
    media: { image_url: '' },
    tips: tip ? [tip] : [],
  };
}

const tripTypeInstructions: Record<string, string> = {
  placer: "Mix iconic landmarks with leisure activities, beaches, parks, and entertainment. Balance sightseeing with relaxation.",
  negocios: "Focus on business-friendly areas, co-working spaces, business districts, top restaurants for meetings, and efficient transport hubs. Include some iconic spots for after-work.",
  aventura: "Prioritize outdoor activities, extreme sports, hiking, climbing, water sports, and nature experiences. Include iconic landmarks only if they are adventurous or scenic.",
  familiar: "Choose family-friendly attractions: theme parks, zoos, aquariums, interactive museums, parks, and child-safe activities. Include iconic landmarks that kids enjoy.",
  romántico: "Select romantic settings: rooftop bars, scenic viewpoints at sunset, candlelit restaurants, gardens, boat rides, and art venues. Iconic spots should be visited at golden hour.",
  gastronómico: "Prioritize food markets, Michelin-starred restaurants, local street food, wine and cheese tastings, cooking classes, and culinary neighborhoods. Include iconic spots near food hubs.",
  cultural: "Focus on museums, art galleries, historical sites, theaters, local festivals, and cultural neighborhoods. Iconic landmarks are essential.",
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Fetch the geographic bounding box for a city from Geoapify
async function getCityBbox(city: string, country: string): Promise<[number, number, number, number] | null> {
  const apiKey = process.env.GEOAPIFY_KEY || process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
  if (!apiKey) return null;
  try {
    const q = encodeURIComponent(`${city}, ${country}`);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${q}&type=city&limit=1&apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    const feature = data.features?.[0];
    if (feature?.bbox) return feature.bbox as [number, number, number, number]; // [lon_min, lat_min, lon_max, lat_max]
    // Fallback: build bbox from point with ~20km radius
    if (feature?.geometry?.coordinates) {
      const [lng, lat] = feature.geometry.coordinates;
      const d = 0.18; // ~20km in degrees
      return [lng - d, lat - d, lng + d, lat + d];
    }
  } catch { /* ignore */ }
  return null;
}

// Check if a coordinate is within a bbox, with a generous 15km buffer for city edges
function isWithinBbox(lat: number, lng: number, bbox: [number, number, number, number]): boolean {
  const buf = 0.14; // ~15km buffer
  return lat >= bbox[1] - buf && lat <= bbox[3] + buf &&
         lng >= bbox[0] - buf && lng <= bbox[2] + buf;
}

export async function POST(req: Request) {
  const missingKeys: string[] = [];
  if (!process.env.OPENAI_API_KEY) missingKeys.push('OPENAI_API_KEY');
  if (!process.env.PEXELS_API_KEY) missingKeys.push('PEXELS_API_KEY');
  if (!process.env.GEOAPIFY_KEY && !process.env.NEXT_PUBLIC_GEOAPIFY_KEY) missingKeys.push('GEOAPIFY_KEY');
  if (missingKeys.length > 0) {
    return Response.json({ error: 'Faltan claves API', missing: missingKeys }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { city, country, province, days, language, tripType, interests, accommodationCoords, accommodationName, accommodationMode } = body;

    const languageLabel =
      language === 'es' ? 'Spanish' :
      language === 'fr' ? 'French' :
      language === 'it' ? 'Italian' :
      language === 'de' ? 'German' :
      language === 'pt' ? 'Portuguese' : 'English';

    const tripInstruction = tripType && tripTypeInstructions[tripType]
      ? tripTypeInstructions[tripType]
      : "Create a balanced itinerary mixing iconic landmarks with local experiences.";

    const interestsList = Array.isArray(interests) && interests.length > 0
      ? `The traveler is especially interested in: ${interests.join(", ")}.`
      : "";

    const fullCityName = province
      ? `${city}, ${province}, ${country}`
      : `${city}, ${country}`;

    // Fetch city bbox in parallel with AI call (used later for validation)
    const bboxPromise = getCityBbox(city, country);

    const prompt = `
You are a travel data expert. Your ONLY job is FACTUAL ACCURACY and GEOGRAPHIC PRECISION.
Write ALL text fields in ${languageLabel}. Return ONLY valid JSON. No markdown, no preamble.

════════════════════════════════════════
TARGET: ${city}${province ? `, ${province}` : ""}, ${country}
════════════════════════════════════════

CRITICAL — READ THIS FIRST:
"${city}" refers to THE CITY OF ${city.toUpperCase()} ITSELF — not its province, department, state, or metropolitan area.
${province ? `"${province}" is the PROVINCE/STATE. "${city}" is one city within it. They are NOT the same.` : ''}

FORBIDDEN CONFUSION EXAMPLES (never do this):
- If the target is "Santa Fe" (city in Argentina) → do NOT suggest Rosario, Paraná, or anything outside the city of Santa Fe itself. The Monumento a la Bandera is in ROSARIO, not Santa Fe city.
- If the target is a city, do NOT include attractions from other cities in the same province/state, even if they are famous.
- Do NOT include attractions from the capital of the province unless the TARGET CITY IS the capital.

════════════════════════════════════════
NON-NEGOTIABLE RULES — every place must pass ALL THREE:
  1. EXISTENCE: This exact place genuinely exists and is open to visitors.
  2. LOCATION: It is physically inside the urban area of ${city}, ${country}. Not in a nearby city. Not in the province. Not in the region. IN THE CITY.
  3. CERTAINTY: You are 100% certain. If there is any doubt → do NOT include it.

If a place fails any rule → REMOVE IT. Do not replace it with something equally uncertain.
It is better to have 2 real places than 3 where one is wrong.
════════════════════════════════════════

FOR SMALLER / LESS-TOURISTIC CITIES:
${city} may not have famous landmarks. That is fine. Use only what genuinely exists there:
✓ Main city plaza or square (plaza central, plaza mayor)
✓ City's own cathedral or main church (if it exists IN the city)
✓ Local municipal market or food market
✓ Riverside, lakeside, or coastal promenade IF the city actually has one
✓ Local/regional museum IF one exists in the city
✓ Recognized neighborhood for gastronomy or nightlife
✓ City park or urban green space
✓ Historic downtown (casco histórico) of that specific city
✗ NEVER: waterfalls, mountains, beaches, or natural parks unless you are 100% certain they are within the city limits
✗ NEVER: attractions from other cities, even if 10 km away

TRIP TYPE: ${tripType || "general"}
TRIP TYPE INSTRUCTIONS: ${tripInstruction}
${interestsList}

PLACE SELECTION RULES:
1. Start with what you are MOST certain about. Certainty > prestige.
2. No repeated places across days.
3. Optimize daily order to minimize travel time.
4. NEARBY PLACES: If two attractions are within ~200m or share an entrance, combine into ONE.

JSON STRUCTURE:
{
  "days": [
    {
      "day": 1,
      "theme": "Short evocative theme in ${languageLabel}",
      "places": [
        {
          "name": "Exact official name of the place",
          "description": "One sentence about this specific place in ${city}.",
          "category": "Museum",
          "duration": "1.5 hours",
          "bestTime": "Morning",
          "price": "Free",
          "tip": "One specific, practical tip for this place in ${city}.",
          "coordinates": { "lat": 0.000, "lng": 0.000 },
          "officialLink": "",
          "transitType": "land",
          "islandName": "${city}",
          "accessNote": "",
          "mustSee": true
        }
      ]
    }
  ]
}

OUTPUT RULES:
- Exactly ${days} days, exactly 3 places per day.
- coordinates: must be the actual GPS location of that place inside ${city}. Wrong coordinates = wrong place.
- mustSee: true only for places iconic to ${city} specifically.
- price: USD. "Free", "$5", "$10–20". Never local currency.
- officialLink: only if 100% certain the URL is live. Otherwise "".
- transitType: "walk", "land", "water", "air". First place of each day: "land".
- accessNote: only for water/air transit. Otherwise "".
- Return ONLY the JSON object. Nothing else.
`;

    const [completion, cityBbox] = await Promise.all([
      openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
        max_tokens: 4000,
        response_format: { type: "json_object" },
      }),
      bboxPromise,
    ]);

    const finishReason = completion.choices[0].finish_reason;
    if (finishReason === "length") {
      return Response.json({ error: "El itinerario fue cortado. Intentá con menos días." }, { status: 500 });
    }

    let text = completion.choices[0].message.content || "";
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd > jsonStart) text = text.substring(jsonStart, jsonEnd + 1);

    const aiData = JSON.parse(text);

    // === GOOGLE PLACES: fetch real coords + photos for all places in parallel ===
    // Collect all place names across all days
    const allPlaceNames: Array<{ name: string }> = [];
    for (const day of aiData.days) {
      for (const p of day.places) {
        if (typeof p.name === 'string' && p.name) allPlaceNames.push({ name: p.name });
      }
    }
    const googleData = await batchGetPlaceData(allPlaceNames, city, country);

    // Apply Google Places data (coords + photo) to each place
    for (const day of aiData.days) {
      for (const p of day.places) {
        const gp = typeof p.name === 'string' ? googleData.get(p.name) : null;
        if (gp) {
          p.coordinates = { lat: gp.lat, lng: gp.lng };
          p._googlePhotoUrl = gp.photoUrl; // stash for job assembly below
        }
      }
    }

    // Fallback geocoding via Geoapify for places Google Places didn't find
    const missingCoords = allPlaceNames.filter(({ name }) => !googleData.has(name));
    if (missingCoords.length > 0) {
      const cityCenter = cityBbox
        ? { lat: (cityBbox[1] + cityBbox[3]) / 2, lng: (cityBbox[0] + cityBbox[2]) / 2 }
        : null;
      await geocodeAllPlaces(aiData.days, city, country, cityCenter);
    }

    // === COORDINATE VALIDATION: remove places outside city bbox ===
    if (cityBbox) {
      for (const day of aiData.days) {
        day.places = day.places.filter((p: any) => {
          const lat = p.coordinates?.lat;
          const lng = p.coordinates?.lng;
          if (typeof lat !== 'number' || typeof lng !== 'number') return false;
          const valid = isWithinBbox(lat, lng, cityBbox);
          if (!valid) {
            console.warn(`[geo-filter] Removed "${p.name}" — coords (${lat}, ${lng}) outside ${city} bbox`);
          }
          return valid;
        });
      }
    }

    const itinerary: Itinerary = {
      destination: city,
      country,
      trip_duration_days: days,
      summary: `${days} days in ${fullCityName}`,
      days: []
    };

    const hotelCoords: { lat: number; lon: number } | null = accommodationCoords
      ? { lat: accommodationCoords.lat, lon: accommodationCoords.lon }
      : null;

    interface PlaceJob {
      dayDay: number;
      placeIndex: number;
      place: Record<string, unknown>;
      fromCoords: { lat: number; lon: number } | null;
      isFromAccommodation: boolean;
      transitType: "walk" | "land" | "water" | "air";
      accessNote: string;
    }

    const jobs: PlaceJob[] = [];
    for (const day of aiData.days) {
      for (let i = 0; i < day.places.length; i++) {
        const p = day.places[i];
        let fromCoords: { lat: number; lon: number } | null = null;
        let isFromAccommodation = false;

        if (i === 0 && hotelCoords) {
          fromCoords = hotelCoords;
          isFromAccommodation = true;
        } else if (i > 0) {
          const prev = day.places[i - 1];
          if (prev?.coordinates) fromCoords = { lat: prev.coordinates.lat, lon: prev.coordinates.lng };
        }

        const prevPlace = i > 0 ? day.places[i - 1] : null;
        const prevIsland = prevPlace?.islandName || null;
        const currIsland = typeof p.islandName === 'string' ? p.islandName : null;

        let transitType: "walk" | "land" | "water" | "air" =
          ["walk", "land", "water", "air"].includes(p.transitType as string) ? p.transitType as "walk" | "land" | "water" | "air" : "land";

        let accessNote = typeof p.accessNote === 'string' ? p.accessNote : '';
        if (prevIsland && currIsland && (prevIsland as string).toLowerCase() !== (currIsland as string).toLowerCase()) {
          transitType = "water";
          if (!accessNote) accessNote = `Ferry desde ${prevIsland} a ${currIsland}`;
        }

        jobs.push({ dayDay: day.day, placeIndex: i, place: p, fromCoords, isFromAccommodation, transitType, accessNote });
      }
    }

    const jobResults = await Promise.all(
      jobs.map(async (job) => {
        const name = typeof job.place.name === 'string' ? job.place.name : '';
        const category = typeof job.place.category === 'string' ? job.place.category : 'landmark';
        const coords = job.place.coordinates as { lat?: number; lng?: number } | null;
        const googlePhotoUrl = typeof job.place._googlePhotoUrl === 'string' ? job.place._googlePhotoUrl : null;

        const [imageUrl, transport] = await Promise.all([
          // Use Google photo directly if available; otherwise fall back to Wikipedia/Pexels
          googlePhotoUrl
            ? Promise.resolve(googlePhotoUrl)
            : searchPlaceImage(name, city, category, coords?.lat, coords?.lng, language || 'es').catch(() => null),
          job.fromCoords && coords?.lat != null && coords?.lng != null
            ? getTransportOptions(
                job.fromCoords,
                { lat: coords.lat as number, lon: coords.lng as number },
                job.transitType
              ).catch(() => null)
            : Promise.resolve(null),
        ]);

        return { ...job, imageUrl: imageUrl || '', transport };
      })
    );

    // Deduplicate images
    const seenImages = new Set<string>();
    for (const r of jobResults) {
      if (r.imageUrl) {
        if (seenImages.has(r.imageUrl)) {
          r.imageUrl = '';
        } else {
          seenImages.add(r.imageUrl);
        }
      }
    }

    for (const day of aiData.days) {
      const dayJobs = jobResults
        .filter(r => r.dayDay === day.day)
        .sort((a, b) => a.placeIndex - b.placeIndex);

      const activities: Activity[] = dayJobs.map(job => {
        const activity: Activity & { transport?: unknown; accessNote?: string; fromAccommodation?: boolean; mustSee?: boolean } = {
          ...mapPlaceToActivity(job.place, city, country),
          media: { image_url: job.imageUrl },
          accessNote: job.accessNote,
          mustSee: job.place.mustSee === true,
        };
        if (job.isFromAccommodation) activity.fromAccommodation = true;
        if (job.transport) activity.transport = job.transport;
        return activity;
      });

      const dayPlan: DayPlan = { day: day.day, theme: day.theme || "", activities };
      itinerary.days.push(dayPlan);
    }

    if (hotelCoords && accommodationName) {
      (itinerary as any).accommodation = { name: accommodationName, coordinates: hotelCoords, mode: accommodationMode || "search" };
    }

    return Response.json(itinerary);

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error generating itinerary", details: (error as Error).message || error }, { status: 500 });
  }
}
