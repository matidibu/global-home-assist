/* eslint-disable @typescript-eslint/no-explicit-any */
import OpenAI from "openai"
import { searchImage } from "@/lib/imageSearch"
import { getCoordinates } from "@/lib/geocode"
import { optimizeRoute } from "@/lib/optimizeRoute"
import { getTransportOptions } from "@/lib/transportOptions"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const { destination, days, interests } = body

    const interestsText = interests && interests.length
      ? `Traveler interests: ${interests.join(", ")}`
      : ""

    const prompt = `
Create a ${days}-day travel itinerary for ${destination}.

${interestsText}

Return ONLY valid JSON.

Structure:

{
 "days":[
  {
   "day":1,
   "places":[
    {
     "name":"Place name",
     "description":"Short description",
     "price":"Approximate ticket price"
    }
   ]
  }
 ]
}

Rules:
- 3 places per day
- real tourist attractions
- varied experiences
- concise descriptions
- include ticket prices when relevant
`

    const completion = await openai.chat.completions.create({

      model: "gpt-4o-mini",

      messages: [
        { role: "user", content: prompt }
      ],

      temperature: 0.7

    })

    let text = completion.choices[0].message.content || ""

    text = text.replace(/```json/g, "").replace(/```/g, "").trim()

    const itinerary = JSON.parse(text)

    for (const day of itinerary.days) {

      // IMAGENES Y COORDENADAS
      for (const place of day.places) {

        place.image = await searchImage(place.name)

        const coords = await getCoordinates(
          `${place.name} ${destination} tourist attraction`,
          destination
        )

        place.coords = coords

      }

      // OPTIMIZAR ORDEN
      const optimized = optimizeRoute(day.places)

      day.places = optimized.map((p: any) => ({
        ...p
      }))

      // TRANSPORT LAYER
      for (let i = 1; i < day.places.length; i++) {

        const prev = day.places[i - 1]
        const current = day.places[i]

        if (prev.coords && current.coords) {

          const transport = await getTransportOptions(
            prev.coords,
            current.coords
          )

          current.transport = transport

        }

      }

    }

    return Response.json(itinerary)

  } catch (error) {

    console.error(error)

    return new Response("Error generating itinerary", { status: 500 })

  }

}