export async function getCoordinates(place: string, city: string) {
  const key = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
  if (!key) {
    console.error("Geoapify API key is missing");
    return null;
  }
  const url =
    `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(place + " " + city)}&apiKey=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!data.features.length) return null;
  const { lat, lon } = data.features[0].properties;
  return { lat, lon };
}