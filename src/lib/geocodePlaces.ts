/**
 * Geocodes place names using Geoapify to get accurate coordinates.
 * Replaces AI-estimated coordinates with real geocoded positions.
 */

const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY || process.env.NEXT_PUBLIC_GEOAPIFY_KEY;

interface Coords {
  lat: number;
  lng: number;
}

/**
 * Geocodes a single place biased towards the city center.
 * Uses city center coordinates as a proximity bias to avoid
 * returning results from other cities or wrong streets.
 * Only accepts results with confidence >= 0.4.
 */
async function geocodePlace(
  name: string,
  city: string,
  country: string,
  cityCenter: { lat: number; lng: number } | null
): Promise<Coords | null> {
  if (!GEOAPIFY_KEY) return null;
  try {
    const query = encodeURIComponent(`${name}, ${city}, ${country}`);
    // bias=proximity biases results towards the city center coordinates
    const bias = cityCenter
      ? `&bias=proximity:${cityCenter.lng},${cityCenter.lat}`
      : '';
    const url = `https://api.geoapify.com/v1/geocode/search?text=${query}&limit=3&lang=es${bias}&apiKey=${GEOAPIFY_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const features = data.features;
    if (!features?.length) return null;

    // Pick the most confident result that isn't just the city itself
    for (const feature of features) {
      const confidence: number = feature.properties?.rank?.confidence ?? 0;
      const resultType: string = feature.properties?.result_type ?? '';
      // Skip pure city/country matches — we need a specific place
      if (resultType === 'city' || resultType === 'country' || resultType === 'state') continue;
      // Require moderate confidence
      if (confidence < 0.4) continue;
      const [lng, lat] = feature.geometry.coordinates;
      return { lat, lng };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Geocodes all places in the AI-generated days array in parallel.
 * Updates coordinates in-place for each place that is successfully geocoded.
 * Falls back to original AI coordinates if geocoding fails or confidence is low.
 */
export async function geocodeAllPlaces(
  days: Array<{ places: Array<Record<string, unknown>> }>,
  city: string,
  country: string,
  cityCenter: { lat: number; lng: number } | null = null
): Promise<void> {
  const tasks: Array<{ place: Record<string, unknown>; promise: Promise<Coords | null> }> = [];

  for (const day of days) {
    for (const place of day.places) {
      const name = typeof place.name === 'string' ? place.name : '';
      if (!name) continue;
      tasks.push({ place, promise: geocodePlace(name, city, country, cityCenter) });
    }
  }

  const results = await Promise.all(tasks.map(t => t.promise));

  for (let i = 0; i < tasks.length; i++) {
    const coords = results[i];
    if (coords) {
      tasks[i].place.coordinates = { lat: coords.lat, lng: coords.lng };
    }
    // If geocoding fails, keep original AI coordinates (already set on the place object)
  }
}
