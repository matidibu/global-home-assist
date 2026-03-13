/* eslint-disable @typescript-eslint/no-explicit-any */
export function haversineDistance(a: any, b: any) {

  const R = 6371

  const dLat = (b.lat - a.lat) * Math.PI / 180
  const dLon = (b.lon - a.lon) * Math.PI / 180

  const lat1 = a.lat * Math.PI / 180
  const lat2 = b.lat * Math.PI / 180

  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1) *
      Math.cos(lat2)

  const y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))

  return R * y
}