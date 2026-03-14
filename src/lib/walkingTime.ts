export function walkingMinutes(distanceKm: number) {

  const walkingSpeed = 5

  const hours = distanceKm / walkingSpeed

  const minutes = Math.round(hours * 60)

  return minutes

}