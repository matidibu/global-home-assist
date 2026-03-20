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
  const bookingLink = typeof place.bookingLink === 'string' ? place.bookingLink : '';
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
    booking: {
      getyourguide: bookingLink,
      viator: '',
    },
    media: {
      image_url: '',
    },
    tips: tip ? [tip] : [],
  };
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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
    const { city, country, days, language } = body;

    const languageLabel =
      language === 'es' ? 'Spanish' :
      language === 'fr' ? 'French' :
      language === 'it' ? 'Italian' :
      language === 'de' ? 'German' :
      language === 'pt' ? 'Portuguese' :
      'English';

    const prompt = `
You are a professional travel planner.
Create a travel itinerary for ${city}, ${country} for ${days} days.
IMPORTANT: Write ALL text fields (description, tip, accessNote) in ${languageLabel}.
Return ONLY valid JSON. No explanations, no markdown, no preamble.

Structure:
{
  "days": [
    {
      "day": 1,
      "places": [
        {
          "name": "Place Name",
          "description": "One short sentence.",
          "category": "Museum",
          "duration": "1 hour",
          "bestTime": "Morning",
          "price": "€10",
          "tip": "One useful tip.",
          "coordinates": { "lat": 38.693, "lng": -9.213 },
          "officialLink": "https://example.com",
          "bookingLink": "https://getyourguide.com/example",
          "transitType": "land",
          "islandName": "main island name",
          "accessNote": ""
        }
      ]
    }
  ]
}

Rules:
- Exactly ${days} days, exactly 3 places per day.
- description: 1 sentence max.
- tip: 1 sentence max.
- coordinates: use exactly 3 decimal places (e.g. 38.693, not 38.69 or 38.6923).
- price: include currency symbol or "Free".
- islandName: MANDATORY. The name of the specific island or landmass where this place is located. For archipelagos, use the specific island name (e.g. "Koror", "Peleliu", "Babeldaob" for Palau). For mainland destinations use the city name.
- transitType: MANDATORY. How to get FROM THE PREVIOUS PLACE to this one:
  * "walk" — within the same site/complex reachable on foot
  * "land" — same island, reachable by car/bike/foot
  * "water" — requires ferry or boat crossing to a different island
  * "air" — requires a flight
  * First place of each day always uses "land".
- accessNote: if transitType is "water" or "air", write a short note in ${languageLabel} explaining how to get there. Otherwise leave "".
- Return ONLY the JSON object. Nothing else.
`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 4000,
      response_format: { type: "json_object" },
    });

    const finishReason = completion.choices[0].finish_reason;
    if (finishReason === "length") {
      return Response.json(
        { error: "El itinerario fue cortado por límite de tokens. Intentá con menos días." },
        { status: 500 }
      );
    }

    let text = completion.choices[0].message.content || "";
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd > jsonStart) {
      text = text.substring(jsonStart, jsonEnd + 1);
    }

    const aiData = JSON.parse(text);

    const itinerary: Itinerary = {
      destination: city,
      country,
      trip_duration_days: days,
      summary: `${days} days in ${city}, ${country}`,
      days: []
    };

    for (const day of aiData.days) {
      const activities: Activity[] = [];
      const usedImages = new Set<string>();

      for (let i = 0; i < day.places.length; i++) {
        const p = day.places[i];

        let image_url = "";
        if (process.env.PEXELS_API_KEY) {
          try {
            let imgTry = await searchImage(p.name) || "";
            if (imgTry && usedImages.has(imgTry)) {
              imgTry = await searchImage(`${p.name} ${city}`) || "";
            }
            if (imgTry && usedImages.has(imgTry)) {
              imgTry = await searchImage(`${p.category} ${city}`) || "";
            }
            if (imgTry && usedImages.has(imgTry)) {
              imgTry = "";
            }
            image_url = imgTry;
            if (image_url) usedImages.add(image_url);
          } catch (err) {
            console.error("Error buscando imagen para", p.name, err);
          }
        }

        const activity: Activity & { transport?: unknown; accessNote?: string } = {
          ...mapPlaceToActivity(p, city, country),
          media: { image_url },
          accessNote: typeof p.accessNote === 'string' ? p.accessNote : '',
        };

        const prevPlace = i > 0 ? day.places[i - 1] : null;
        const prevDayData = aiData.days[aiData.days.indexOf(day) - 1];
        const prevDayLastPlace = prevDayData?.places?.[prevDayData.places.length - 1];

        const fromCoords = prevPlace?.coordinates
          ? { lat: prevPlace.coordinates.lat, lon: prevPlace.coordinates.lng }
          : prevDayLastPlace?.coordinates
            ? { lat: prevDayLastPlace.coordinates.lat, lon: prevDayLastPlace.coordinates.lng }
            : null;

        const prevIsland = prevPlace?.islandName || prevDayLastPlace?.islandName || null;
        const currIsland = typeof p.islandName === 'string' ? p.islandName : null;

        let transitType: "walk" | "land" | "water" | "air" =
          ["walk", "land", "water", "air"].includes(p.transitType)
            ? p.transitType
            : "land";

        if (
          prevIsland &&
          currIsland &&
          prevIsland.toLowerCase() !== currIsland.toLowerCase()
        ) {
          transitType = "water";
          if (!activity.accessNote) {
            activity.accessNote = `Ferry desde ${prevIsland} a ${currIsland}`;
          }
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

      const dayPlan: DayPlan = {
        day: day.day,
        theme: day.theme || "",
        activities
      };

      itinerary.days.push(dayPlan);
    }

    return Response.json(itinerary);

  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Error generating itinerary", details: (error as Error).message || error },
      { status: 500 }
    );
  }
}