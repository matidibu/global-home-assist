  try {
    const apiKey = process.env.PEXELS_API_KEY as string;
    if (!apiKey) {
      console.error("Pexels API key is missing");
      return "";
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
    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.large;
    }
    return "";
  } catch (error) {
    console.error("Pexels error:", error);
    return "";
  }
}