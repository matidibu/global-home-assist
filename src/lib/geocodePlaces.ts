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
 * Geocodes a single place within a city context.
 * Returns accurate coordinates or null if not found.
 */
async function geocodePlace(
  name: string,
  city: string,
  country: string
): Promise<Coords | null> {
  if (!GEOAPIFY_KEY) return null;
  try {
    // Try specific: "Place Name, City, Country"
    const query = encodeURIComponent(`${name}, ${city}, ${country}`);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${query}&limit=1&lang=es&apiKey=${GEOAPIFY_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const feature = data.features?.[0];
    if (!feature) return null;
    const [lng, lat] = feature.geometry.coordinates;
    return { lat, lng };
  } catch {
    return null;
  }
}

/**
 * Geocodes all places in the AI-generated days array in parallel.
 * Updates coordinates in-place for each place that is successfully geocoded.
 * Falls back to AI coordinates if geocoding fails.
 */
export async function geocodeAllPlaces(
  days: Array<{ places: Array<Record<string, unknown>> }>,
  city: string,
  country: string
): Promise<void> {
  const tasks: Array<{ place: Record<string, unknown>; promise: Promise<Coords | null> }> = [];

  for (const day of days) {
    for (const place of day.places) {
      const name = typeof place.name === 'string' ? place.name : '';
      if (!name) continue;
      tasks.push({ place, promise: geocodePlace(name, city, country) });
    }
  }

  const results = await Promise.all(tasks.map(t => t.promise));

  for (let i = 0; i < tasks.length; i++) {
    const coords = results[i];
    if (coords) {
      tasks[i].place.coordinates = { lat: coords.lat, lng: coords.lng };
    }
  }
}
