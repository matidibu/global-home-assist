/* eslint-disable @typescript-eslint/no-explicit-any */
export async function searchImagePexels(query: string) {

  try {
    const apiKey = process.env.PEXELS_API_KEY || "";
    if (!apiKey) {
      console.error("Pexels API key is missing");
      return "/placeholder.jpg";
    }
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: apiKey
        }
      }
    );
    const data = await res.json();
    if (!data.photos || data.photos.length === 0) {
      return "/placeholder.jpg";
    }
    return data.photos[0].src.medium;
  } catch {
    return "/placeholder.jpg";
  }

}