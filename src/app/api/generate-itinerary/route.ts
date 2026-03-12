console.log("KEY:", process.env.OPENAI_API_KEY)
import { NextResponse } from "next/server"
import OpenAI from "openai"
import { buildPrompt } from "@/lib/travelBrainPrompt"
import { searchImage } from "@/lib/imageSearch"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {

  try {

    const { destination } = await req.json()

    const prompt = buildPrompt(destination)

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })

    const text = completion.choices[0].message.content || ""

    const itinerary = JSON.parse(text)

    for (const day of itinerary.days) {

      for (const place of day.places) {

        // IMAGE
        const img = await searchImage(place.name + " " + destination)
        place.image = img

        // DEFAULT VALUES (if AI didn't return them)

        if (!place.price) place.price = "Check official site"
        if (!place.rating) place.rating = "4.5"
        if (!place.crowdLevel) place.crowdLevel = "Medium"
        if (!place.tip) place.tip = "Try visiting early to avoid crowds"
        if (!place.officialLink) place.officialLink = ""
        if (!place.bookingLink) place.bookingLink = ""

      }

    }

    return NextResponse.json(itinerary)

  } catch (error) {

    console.error("API ERROR:", error)

    return NextResponse.json(
      { error: "Failed to generate itinerary" },
      { status: 500 }
    )

  }

}