export async function getPexelsImage(query: string): Promise<string> {

  try {

    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY as string
        }
      }
    )

    const data = await res.json()

    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.large
    }

    return ""

  } catch (error) {

    console.error("Pexels error:", error)

    return ""

  }

}