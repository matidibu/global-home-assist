/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"
import OpenAI from "openai"
import { searchImage } from "@/lib/imageSearch"
import { getCoordinates } from "@/lib/geocode"
import { optimizeRoute } from "@/lib/optimizeRoute"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {

  try {

    const { destination, interests } = await req.json()

    const prompt = `
Create a realistic 3-day travel itinerary for ${destination}.

Traveler interests: ${interests?.join(", ") || "general tourism"}.

IMPORTANT RULES:

1. Only include REAL well-known places.
2. Do NOT invent places.
3. Group places by nearby areas or neighborhoods.
4. Each day should follow a logical flow: morning → afternoon → evening.
5. Include landmarks, food, culture, and local experiences.
6. Restaurants and food places must also be real.

Return ONLY valid JSON.

FORMAT:

{
 "days":[
   {
     "day":1,
     "area":"name of the neighborhood or area",
     "places":[
       {
         "name":"place name",
         "description":"short tourist description",
         "category":"landmark | museum | food | nature | culture",
         "duration":"estimated visit duration",
         "bestTime":"morning | afternoon | evening",
         "price":"approximate ticket price or free",
         "tip":"useful visitor tip"
       }
     ]
   }
 ]
}
`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.6,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })

    const text = completion.choices[0].message.content || ""

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim()

    const itinerary = JSON.parse(cleaned)

    for (const day of itinerary.days) {

      for (const place of day.places) {

        try {

          place.image = await searchImage(
            `${place.name} ${destination} travel`
          )

        } catch {

          place.image = ""

        }

        try {

          const coords = await getCoordinates(
            place.name,
            destination
          )

          place.coords = coords

        } catch {

          place.coords = null

        }

      }

      const validPlaces = day.places.filter(
        (p: any) => p.coords !== null
      )

      const optimized = optimizeRoute(validPlaces)

      const others = day.places.filter(
        (p: any) => p.coords === null
      )

      day.places = [...optimized, ...others]

    }

    return NextResponse.json(itinerary)

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: "Failed to generate itinerary" },
      { status: 500 }
    )

  }

}