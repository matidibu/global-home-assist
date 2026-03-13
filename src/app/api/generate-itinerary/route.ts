import { NextResponse } from "next/server"
import OpenAI from "openai"
import { searchImage } from "@/lib/imageSearch"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {

  try {

    const { destination, interests } = await req.json()

    const prompt = `
Create a realistic 3 day travel itinerary for ${destination}.

Traveler interests: ${interests?.join(", ") || "general tourism"}.

IMPORTANT RULES:

- Only include REAL and well known tourist places.
- Do NOT invent places.
- Use famous landmarks, museums, parks, historic sites or known restaurants.
- Each place must exist in real life.

Return ONLY valid JSON in this format:

{
  "days":[
    {
      "day":1,
      "places":[
        {
          "name":"Place name",
          "description":"short travel description",
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
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.6
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

      }

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