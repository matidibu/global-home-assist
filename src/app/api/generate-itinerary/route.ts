/* eslint-disable @typescript-eslint/no-explicit-any */
import OpenAI from "openai"
import type { Itinerary, DayPlan, Activity } from "@/types/itinerary"
import { searchImage } from "@/lib/imageSearch"
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
You are an expert travel planner who knows ${fullCityName} deeply.
Create a ${days}-day travel itinerary for ${fullCityName}.
IMPORTANT: Write ALL text fields (description, tip, accessNote) in ${languageLabel}.
Return ONLY valid JSON. No explanations, no markdown, no preamble.

TRIP TYPE: ${tripType || "general"}
TRIP TYPE INSTRUCTIONS: ${tripInstruction}
${interestsList}

=== CRITICAL GEOGRAPHIC CONSTRAINT ===
ALL places MUST be physically located within the city limits of ${city}${province ? ` (${province})` : ""}, ${country}.
This is NON-NEGOTIABLE. You MUST NOT include places from any other city, region, or province.
${province ? `For example: if the city is ${city} in ${province}, do NOT suggest places from other provinces or cities, even if they are famous or nearby.` : ""}
Before including any place, verify: "Is this place actually located in ${city}${province ? `, ${province}` : ""}?" If not, replace it with a place that IS in ${city}.
If ${city} has fewer iconic landmarks than needed, use local parks, neighborhoods, restaurants, cultural centers, or other genuine local attractions — but they MUST be in ${city}.
=== END GEOGRAPHIC CONSTRAINT ===

CRITICAL RULES FOR PLACE SELECTION:
1. ALWAYS include the most iconic landmarks actually located in ${city} (at least 1 per day).
2. Remaining places must match the trip type and traveler interests.
3. Do NOT repeat the same place across different days.
4. Optimize the order of places each day to minimize travel time.
5. Suggest the best time of day for each place.

Structure:
{
  "days": [
    {
      "day": 1,
      "theme": "Short theme for this day in ${languageLabel}",
      "places": [
        {
          "name": "Place Name",
          "description": "One short sentence.",
          "category": "Museum",
          "duration": "1 hour",
          "bestTime": "Morning",
          "price": "$10",
          "tip": "One useful insider tip.",
          "coordinates": { "lat": -32.946, "lng": -60.639 },
          "officialLink": "https://example.com",
          "transitType": "land",
          "islandName": "${city}",
          "accessNote": "",
          "mustSee": true
        }
      ]
    }
  ]
}

Rules:
- Exactly ${days} days, exactly 3 places per day.
- mustSee: true for iconic landmarks of ${city}, false for others.
- description: 1 sentence max.
- tip: 1 sentence max, genuine insider tip about this specific place in ${city}.
- coordinates: exactly 3 decimal places. Coordinates MUST match the actual location in ${city}.
- price: ALWAYS use USD ($) as currency. Convert approximate local prices to USD. Use "$10", "$25", "Free", etc. NEVER use €, £, ¥, ARS or any other currency symbol.
- officialLink: ONLY include if you are 100% certain the URL exists. Otherwise leave "".
- islandName: "${city}" for all places (or specific island name for archipelagos).
- transitType: "walk", "land", "water", or "air". First place of each day uses "land".
- accessNote: only if transitType is "water" or "air". Otherwise "".
- Return ONLY the JSON object.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
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

    for (const day of aiData.days) {
      const activities: Activity[] = [];
      const usedImages = new Set<string>();

      for (let i = 0; i < day.places.length; i++) {
        const p = day.places[i];

        let image_url = "";
        if (process.env.PEXELS_API_KEY) {
          try {
            let imgTry = await searchImage(`${p.name} ${city}`) || "";
            if (!imgTry || usedImages.has(imgTry)) imgTry = await searchImage(`${p.name}`) || "";
            if (!imgTry || usedImages.has(imgTry)) imgTry = await searchImage(`${p.category} ${city}`) || "";
            if (!imgTry || usedImages.has(imgTry)) imgTry = "";
            image_url = imgTry;
            if (image_url) usedImages.add(image_url);
          } catch (err) {
            console.error("Error buscando imagen para", p.name, err);
          }
        }

        const activity: Activity & { transport?: unknown; accessNote?: string; fromAccommodation?: boolean; mustSee?: boolean } = {
          ...mapPlaceToActivity(p, city, country),
          media: { image_url },
          accessNote: typeof p.accessNote === 'string' ? p.accessNote : '',
          mustSee: p.mustSee === true,
        };

        let fromCoords: { lat: number; lon: number } | null = null;
        if (i === 0) {
          if (hotelCoords) { fromCoords = hotelCoords; activity.fromAccommodation = true; }
        } else {
          const prevPlace = day.places[i - 1];
          if (prevPlace?.coordinates) fromCoords = { lat: prevPlace.coordinates.lat, lon: prevPlace.coordinates.lng };
        }

        const prevPlace = i > 0 ? day.places[i - 1] : null;
        const prevIsland = prevPlace?.islandName || null;
        const currIsland = typeof p.islandName === 'string' ? p.islandName : null;

        let transitType: "walk" | "land" | "water" | "air" =
          ["walk", "land", "water", "air"].includes(p.transitType) ? p.transitType : "land";

        if (prevIsland && currIsland && prevIsland.toLowerCase() !== currIsland.toLowerCase()) {
          transitType = "water";
          if (!activity.accessNote) activity.accessNote = `Ferry desde ${prevIsland} a ${currIsland}`;
        }

        if (fromCoords && p.coordinates) {
          try {
            const transport = await getTransportOptions(
              fromCoords,
              { lat: p.coordinates.lat, lon: p.coordinates.lng },
              transitType
            );
            if (transport) activity.transport = transport;
          } catch {}
        }

        activities.push(activity);
      }

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
