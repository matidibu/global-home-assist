/**
 * Google Places API integration.
 * Fetches real coordinates + actual place photos for each attraction.
 * Single API call per place covers both needs simultaneously.
 */

const GOOGLE_KEY = process.env.GOOGLE_PLACES_API_KEY;

export interface PlaceData {
  lat: number;
  lng: number;
  photoUrl: string | null;
}

/**
 * Fetches exact coordinates and a real photo for a place using Google Places API.
 * Uses "Find Place from Text" + "Place Photo" endpoints.
 * Returns null if API key is missing or place is not found.
 */
export async function getGooglePlaceData(
  name: string,
  city: string,
  country: string
): Promise<PlaceData | null> {
  if (!GOOGLE_KEY) return null;

  try {
    const query = `${name} ${city} ${country}`;
    const fields = 'geometry,photos';
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=${fields}&key=${GOOGLE_KEY}`;

    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();

    const candidate = data.candidates?.[0];
    if (!candidate) return null;

    const lat: number | undefined = candidate.geometry?.location?.lat;
    const lng: number | undefined = candidate.geometry?.location?.lng;
    if (typeof lat !== 'number' || typeof lng !== 'number') return null;

    // Fetch photo if available
    let photoUrl: string | null = null;
    const photoRef: string | undefined = candidate.photos?.[0]?.photo_reference;
    if (photoRef) {
      const photoApiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${encodeURIComponent(photoRef)}&key=${GOOGLE_KEY}`;
      // Follow redirect to get the actual CDN image URL
      const photoRes = await fetch(photoApiUrl, { redirect: 'follow' });
      if (photoRes.ok) {
        photoUrl = photoRes.url;
      }
    }

    return { lat, lng, photoUrl };
  } catch {
    return null;
  }
}

/**
 * Batch-fetches Google Place data for all places in an itinerary in parallel.
 * Returns a map of place name → PlaceData.
 */
export async function batchGetPlaceData(
  places: Array<{ name: string }>,
  city: string,
  country: string
): Promise<Map<string, PlaceData>> {
  const results = new Map<string, PlaceData>();
  if (!GOOGLE_KEY) return results;

  await Promise.all(
    places.map(async (p) => {
      const data = await getGooglePlaceData(p.name, city, country).catch(() => null);
      if (data) results.set(p.name, data);
    })
  );

  return results;
}
