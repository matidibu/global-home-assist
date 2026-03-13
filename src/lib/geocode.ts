export async function getCoordinates(place: string, city: string) {
  try {

    const key = process.env.GEOAPIFY_KEY

    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      place + " " + city
    )}&limit=1&apiKey=${key}`

    const res = await fetch(url)

    const data = await res.json()

    if (!data.features || data.features.length === 0) {
      return null
    }

    const coords = data.features[0].geometry.coordinates

    return {
      lon: coords[0],
      lat: coords[1]
    }

  } catch {
    return null
  }
}