export async function getTransportOptions(
  from: { lat: number; lon: number },
  to: { lat: number; lon: number }
) {

  const apiKey = process.env.GEOAPIFY_KEY

  const baseUrl = "https://api.geoapify.com/v1/routing"

  async function getRoute(mode: string) {

    const url =
      `${baseUrl}?waypoints=${from.lat},${from.lon}|${to.lat},${to.lon}` +
      `&mode=${mode}` +
      `&apiKey=${apiKey}`

    try {

      const res = await fetch(url)

      const data = await res.json()

      const seconds = data?.features?.[0]?.properties?.time

      if (!seconds) return null

      return Math.round(seconds / 60)

    } catch (error) {

      console.error("Transport route error:", error)

      return null

    }

  }

  const walk = await getRoute("walk")
  const bike = await getRoute("bicycle")
  const car = await getRoute("drive")

  return {
    walk,
    bike,
    car
  }

}