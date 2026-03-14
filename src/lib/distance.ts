export function haversineDistance(
  coord1: { lat: number; lon: number },
  coord2: { lat: number; lon: number }
) {

  const R = 6371

  const dLat = (coord2.lat - coord1.lat) * Math.PI / 180
  const dLon = (coord2.lon - coord1.lon) * Math.PI / 180

  const lat1 = coord1.lat * Math.PI / 180
  const lat2 = coord2.lat * Math.PI / 180

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) *
    Math.cos(lat1) * Math.cos(lat2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c

}