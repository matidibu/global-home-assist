const PEXELS_KEY = process.env.PEXELS_API_KEY

export async function searchImage(query: string) {

  try {

    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: PEXELS_KEY || ""
        }
      }
    )

    const data = await res.json()

    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.medium
    }

    return null

  } catch (error) {

    console.error("PEXELS ERROR:", error)

    return null
  }
}