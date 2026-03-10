"use client"

import { Place } from "@/types/itinerary"

export default function ActivityCard({ place }: { place: Place }) {

  return (

    <div className="bg-white rounded-xl shadow overflow-hidden">

      <div className="w-full h-48 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">

        <h3 className="font-semibold text-lg">
          {place.name}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          {place.description}
        </p>

      </div>

    </div>

  )
}