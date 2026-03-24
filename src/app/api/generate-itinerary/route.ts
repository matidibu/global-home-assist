/* eslint-disable @typescript-eslint/no-explicit-any */
import OpenAI from "openai"
import type { Itinerary, DayPlan, Activity } from "@/types/itinerary"
import { searchPlaceImage } from "@/lib/imageSearch"
import { getTransportOptions } from "@/lib/transportOptions"

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

    const prompt = `
You are a travel data expert. Your absolute priority is FACTUAL ACCURACY and GEOGRAPHIC PRECISION.
Write ALL text fields in ${languageLabel}. Return ONLY valid JSON. No markdown, no preamble.

TARGET CITY: ${city}${province ? `, ${province}` : ""}, ${country}
DISAMBIGUATION: This is ${city} in ${country}. Do NOT confuse with any other city, state, or country that shares a similar name.

=== NON-NEGOTIABLE GEOGRAPHIC RULES ===
Every place in this itinerary must pass ALL three checks:
  1. EXISTENCE: This place genuinely exists. It is not invented or hallucinated.
  2. LOCATION: It is physically located in ${city}${province ? `, ${province}` : ""}, ${country} — NOT in a nearby city, region, or province.
  3. CERTAINTY: You are 100% certain of both existence and location.

If any check fails → DO NOT include that place. Replace it with something you ARE certain about.

CRITICAL FOR SMALLER OR LESS-TOURISTIC CITIES:
- If ${city} is not a major international tourist destination, it likely does NOT have: famous waterfalls, mountain treks, world-class museums, or beaches — unless you are absolutely certain they are there.
- For these cities, the following are always valid options IF they genuinely exist in ${city}: main plaza or square, historic downtown area, regional or provincial museum, local food market, riverside or lakeside promenade, traditional restaurants serving local cuisine, cultural or civic center, neighborhood parks, local craft or artisan shops.
- A real local café that exists is infinitely better than a fabricated iconic landmark.
- NEVER suggest an attraction from another province or city, even if it is nearby or famous.

COORDINATE ACCURACY:
- Coordinates must reflect the ACTUAL location of the place within ${city}.
- Cross-check: if the coordinates would place the pin outside ${city}, they are wrong — fix them or omit the place.
=== END GEOGRAPHIC RULES ===

TRIP TYPE: ${tripType || "general"}
TRIP TYPE INSTRUCTIONS: ${tripInstruction}
${interestsList}

PLACE SELECTION RULES:
1. Start with places you are most certain about — well-known local landmarks first.
2. Do NOT repeat the same place across different days.
3. Optimize daily order to minimize travel time between places.
4. Suggest best time of day for each place based on crowds, light, or opening hours.
5. NEARBY PLACES: If two attractions share the same complex or are within ~200m (e.g. Burj Khalifa + Dubai Mall), combine into ONE activity. Never list two places that share the same entrance as separate activities.

JSON STRUCTURE:
{
  "days": [
    {
      "day": 1,
      "theme": "Short evocative theme for this day in ${languageLabel}",
      "places": [
        {
          "name": "Place Name",
          "description": "One sentence describing this specific place.",
          "category": "Museum",
          "duration": "1.5 hours",
          "bestTime": "Morning",
          "price": "$10",
          "tip": "One genuine, specific insider tip about this place.",
          "coordinates": { "lat": -31.633, "lng": -60.699 },
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
- mustSee: true only for genuinely iconic local landmarks; false for everything else.
- description: 1 sentence max, specific to this place.
- tip: 1 sentence, practical and specific to this place in ${city}. Not generic advice.
- coordinates: 3 decimal places, actual location within ${city}.
- price: USD only. Use "$10", "Free", "$5–15", etc. Never use local currency symbols.
- officialLink: only if you are 100% certain the URL is correct and active. Otherwise use "".
- islandName: "${city}" for all places, or specific island name only for genuine archipelago destinations.
- transitType: "walk", "land", "water", or "air". First place of each day: "land".
- accessNote: only for "water" or "air" transit. Otherwise "".
- Return ONLY the JSON object. Nothing else.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 4000,
      response_format: { type: "json_object" },
    });

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

    // Pre-compute all jobs (images + transport) before firing in parallel
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

    // Fire all image + transport fetches in parallel
    const jobResults = await Promise.all(
      jobs.map(async (job) => {
        const name = typeof job.place.name === 'string' ? job.place.name : '';
        const category = typeof job.place.category === 'string' ? job.place.category : 'landmark';
        const coords = job.place.coordinates as { lat?: number; lng?: number } | null;

        const [imageUrl, transport] = await Promise.all([
          searchPlaceImage(name, city, category, coords?.lat, coords?.lng).catch(() => null),
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

    // Deduplicate images: if two places share the same URL, clear the duplicate
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

    // Reassemble into itinerary days
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
