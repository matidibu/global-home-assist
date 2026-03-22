
const PEXELS_KEY = process.env.PEXELS_API_KEY

const HEADERS = { "User-Agent": "GlobalHomeAssist/1.0 (travel planner)" };

function isValidImageUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  if (/\.(svg|gif)(\?|$)/i.test(url)) return false;
  if (/(coat_of_arms|flag|logo|map|icon|emblem|seal)/i.test(url)) return false;
  return true;
}

async function fetchImageForTitle(pageTitle: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&piprop=thumbnail|original&pithumbsize=900&format=json`,
      { headers: HEADERS }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;
    const page = Object.values(pages)[0] as {
      thumbnail?: { source: string };
      original?: { source: string };
    };
    const url = page?.thumbnail?.source ?? page?.original?.source ?? null;
    return isValidImageUrl(url) ? url : null;
  } catch {
    return null;
  }
}

/**
 * Geo search: finds Wikipedia articles near given coordinates and picks
 * the one whose title best matches the place name.
 * Much more accurate than text search for specific locations.
 */
async function fetchWikipediaImageByCoords(
  lat: number,
  lng: number,
  name: string
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=500&gslimit=10&format=json`,
      { headers: HEADERS }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const results: { title: string; dist: number }[] = data?.query?.geosearch ?? [];
    if (!results.length) return null;

    const nameLower = name.toLowerCase();
    const nameParts = nameLower.split(/\s+/).filter(w => w.length > 2);

    // Prefer articles whose title shares keywords with the place name
    const byNameMatch = results.find(r =>
      nameParts.some(p => r.title.toLowerCase().includes(p))
    );
    const best = byNameMatch ?? results[0]; // fallback: closest article

    // Skip if the title looks like a person name (2 capitalized words, no place indicators)
    const placeWords = /museum|park|tower|palace|temple|mosque|church|cathedral|square|market|garden|beach|desert|reserve|district|quarter|fort|castle|bridge|mall|center|centre|station|airport|port|harbor|island|bay|lake|mountain|hill|valley|forest|zoo|gallery|theatre|theater|opera|stadium|arena|university|library|monument|memorial|landmark/i;
    const titleWords = best.title.trim().split(/\s+/);
    const looksLikePerson = titleWords.length <= 3 &&
      titleWords.every(w => /^[A-Z]/.test(w)) &&
      !placeWords.test(best.title);
    if (looksLikePerson) {
      // Try second best
      const fallback = results.find(r => r !== best);
      if (!fallback) return null;
      return await fetchImageForTitle(fallback.title);
    }

    return await fetchImageForTitle(best.title);
  } catch {
    return null;
  }
}

/**
 * Text search fallback: query Wikipedia by name+city, then name only.
 */
async function fetchWikipediaImageByQuery(
  query: string,
  city: string,
  name: string
): Promise<string | null> {
  try {
    const searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&srlimit=5`,
      { headers: HEADERS }
    );
    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();
    const results: { title: string }[] = searchData?.query?.search ?? [];
    if (!results.length) return null;

    const cityLower = city.toLowerCase();
    const nameLower = name.toLowerCase();
    const nameParts = nameLower.split(/\s+/).filter(w => w.length > 3);

    const placeWords = /museum|park|tower|palace|temple|mosque|church|cathedral|square|market|garden|beach|desert|reserve|district|quarter|fort|castle|bridge|mall|center|centre|station|airport|port|harbor|island|bay|lake|mountain|hill|valley|forest|zoo|gallery|theatre|theater|opera|stadium|arena|university|library|monument|memorial|landmark/i;

    // Filter out articles that look like person names
    const filtered = results.filter(r => {
      const words = r.title.trim().split(/\s+/);
      const looksLikePerson = words.length <= 3 &&
        words.every(w => /^[A-Z]/.test(w)) &&
        !placeWords.test(r.title);
      return !looksLikePerson;
    });
    const candidates = filtered.length > 0 ? filtered : results;

    // Pick the most relevant result:
    // 1. Title matches place name keywords (most specific)
    // 2. Title matches both city and any name part
    // 3. Wikipedia's own ranking (candidates[0])
    const byNameMatch = candidates.find(r => nameParts.some(p => r.title.toLowerCase().includes(p)));
    const byCityAndName = candidates.find(r => {
      const t = r.title.toLowerCase();
      return t.includes(cityLower) && nameParts.some(p => t.includes(p));
    });
    const best = byNameMatch ?? byCityAndName ?? candidates[0];

    return await fetchImageForTitle(best.title);
  } catch {
    return null;
  }
}

async function searchWikipediaImage(
  name: string,
  city: string,
  lat?: number,
  lng?: number
): Promise<string | null> {
  // Geo search is most accurate when we have coordinates
  if (lat != null && lng != null) {
    const geoImg = await fetchWikipediaImageByCoords(lat, lng, name);
    if (geoImg) return geoImg;
  }

  // Text search fallback: city first, then name only
  const withCity = await fetchWikipediaImageByQuery(`${city} ${name}`, city, name);
  if (withCity) return withCity;

  return await fetchWikipediaImageByQuery(name, city, name);
}

export async function searchImage(query: string): Promise<string | null> {
  try {
    if (!PEXELS_KEY) return null;
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      { headers: { Authorization: PEXELS_KEY } }
    );
    const data = await res.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.medium;
    }
    return null;
  } catch (error) {
    console.error("PEXELS ERROR:", error);
    return null;
  }
}

/**
 * Image strategy:
 * 1. Wikipedia geo search near place coordinates (most accurate)
 * 2. Wikipedia text search with city+name
 * 3. Wikipedia text search with name only
 * 4. Pexels as last resort
 */
export async function searchPlaceImage(
  name: string,
  city: string,
  category: string,
  lat?: number,
  lng?: number
): Promise<string | null> {
  const wikiImg = await searchWikipediaImage(name, city, lat, lng);
  if (wikiImg) return wikiImg;

  if (!PEXELS_KEY) return null;
  return (
    (await searchImage(`${name} ${city}`)) ??
    (await searchImage(`${category} ${city}`))
  );
}
