/* eslint-disable @typescript-eslint/no-explicit-any */

import { geocodePlace } from "./geocode"

export async function addCoordinates(itinerary: any) {
  if (!itinerary?.days) return itinerary

  for (const day of itinerary.days) {
    if (!Array.isArray(day.places)) continue

    for (const place of day.places) {
      if (!place?.name) continue

      const coords = await geocodePlace(place.name)

      if (coords) {
        place.lat = coords.lat
        place.lng = coords.lng
      }
    }
  }

  return itinerary
}