"use client"

import { Day } from "@/types/itinerary"
import ActivityCard from "./ActivityCard"

interface Props {
  days: Day[]
}

export default function ItineraryView({ days }: Props) {

  return (

    <div className="space-y-10">

      {days.map((day) => (

        <div key={day.day}>

          <h2 className="text-2xl font-bold mb-4">
            Day {day.day} — {day.city}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {day.places.map((place, index) => (
              <ActivityCard key={index} place={place} />
            ))}

          </div>

        </div>

      ))}

    </div>

  )
}