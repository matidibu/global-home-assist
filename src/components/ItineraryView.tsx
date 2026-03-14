"use client"

type Place = {
  name: string
  description: string
  image?: string
  price?: string
  tips?: string
  walkingMinutes?: number
}

type Day = {
  day: number
  places: Place[]
}

type Props = {
  itinerary: {
    days: Day[]
  }
}

export default function ItineraryView({ itinerary }: Props) {

  if (!itinerary) return null

  return (

    <div className="max-w-4xl mx-auto mt-10 space-y-12">

      {itinerary.days.map((day) => (

        <div key={day.day}>

          <h2 className="text-2xl font-bold mb-6">
            Day {day.day}
          </h2>

          <div className="space-y-6">

            {day.places.map((place, index) => {

              const next = day.places[index + 1]

              return (

                <div key={index}>

                  {/* CARD */}

                  <div className="bg-white rounded-xl shadow-md overflow-hidden">

                    {place.image && (

                      <div className="w-full h-56 overflow-hidden">

                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover"
                        />

                      </div>

                    )}

                    <div className="p-5">

                      <h3 className="text-xl font-semibold">
                        {place.name}
                      </h3>

                      <p className="text-gray-600 mt-2 text-sm">
                        {place.description}
                      </p>

                      {/* DEBUG PARA VER SI LLEGA EL DATO */}

                      <p className="text-xs text-red-500 mt-1">
                        DEBUG walkingMinutes: {place.walkingMinutes ?? "undefined"}
                      </p>

                      {place.price && (

                        <p className="text-sm mt-3">
                          💰 {place.price}
                        </p>

                      )}

                      {place.tips && (

                        <p className="text-sm text-gray-500 mt-1">
                          💡 {place.tips}
                        </p>

                      )}

                    </div>

                  </div>

                  {/* WALKING ENTRE LUGARES */}

                  {next?.walkingMinutes !== undefined && (

                    <div className="text-center text-sm text-gray-500 py-3">

                      🚶 {next.walkingMinutes} min walk

                    </div>

                  )}

                </div>

              )

            })}

          </div>

        </div>

      ))}

    </div>

  )

}