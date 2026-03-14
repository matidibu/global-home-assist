type Place = {
  name: string
  description: string
  coords?: {
    lat: number
    lon: number
  }
  walkingDistanceKm?: number
  walkingMinutes?: number
}

function calculateDistance(a: Place, b: Place) {

  if (!a.coords || !b.coords) return 0

  const R = 6371

  const dLat = (b.coords.lat - a.coords.lat) * Math.PI / 180
  const dLon = (b.coords.lon - a.coords.lon) * Math.PI / 180

  const lat1 = a.coords.lat * Math.PI / 180
  const lat2 = b.coords.lat * Math.PI / 180

  const aVal =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) *
    Math.cos(lat1) *
    Math.cos(lat2)

  const c = 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal))

  return R * c
}

export function optimizeRoute(places: Place[]) {

  if (places.length <= 1) return places

  const optimized: Place[] = [places[0]]

  const remaining = places.slice(1)

  while (remaining.length > 0) {

    const last = optimized[optimized.length - 1]

    let closestIndex = 0
    let closestDistance = Infinity

    remaining.forEach((place, index) => {

      const distance = calculateDistance(last, place)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }

    })

    const nextPlace = remaining.splice(closestIndex, 1)[0]

    const walkingDistanceKm = closestDistance
    const walkingMinutes = Math.round((walkingDistanceKm / 5) * 60)

    nextPlace.walkingDistanceKm = walkingDistanceKm
    nextPlace.walkingMinutes = walkingMinutes

    optimized.push(nextPlace)

  }

  return optimized

}