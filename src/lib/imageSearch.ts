
const PEXELS_KEY = process.env.PEXELS_API_KEY

const HEADERS = { "User-Agent": "GlobalHomeAssist/1.0 (travel planner)" };

/**
 * Pattern to detect person-portrait filenames in Wikipedia image URLs.
 * Matches "FirstName_LastName.jpg", "Portrait_of_X.jpg", etc.
 */
const PORTRAIT_FILENAME_PATTERN = /\b(portrait|headshot|perfil|ritratto|retrato|foto_oficial|official_photo|profile_pic|bio_photo)\b/i;

/**
 * Pattern to reject Pexels photo alt text that suggests a close-up portrait
 * or a small group (2–4 people) as the main subject.
 * Crowds (multitudes at landmarks) are explicitly allowed.
 */
const PERSON_ALT_PATTERN = /\b(portrait|headshot|selfie|close.?up of (a |the )?(man|woman|person|girl|boy|people)|smiling (man|woman|person|couple)|posing (man|woman|couple)|a (man|woman) (standing|sitting|holding|wearing|looking)|couple (standing|sitting|posing)|two people|three people|four people)\b/i;

function isValidImageUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  if (/\.(svg|gif)(\?|$)/i.test(url)) return false;
  if (/(coat_of_arms|flag|logo|map|icon|emblem|seal)/i.test(url)) return false;
  // Reject obvious portrait filenames
  const filename = decodeURIComponent(url.split('/').pop()?.split('?')[0] ?? '');
  if (PORTRAIT_FILENAME_PATTERN.test(filename)) return false;
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

    const placeWords = /museum|park|tower|palace|temple|mosque|church|cathedral|square|market|garden|beach|desert|reserve|district|quarter|fort|castle|bridge|mall|center|centre|station|airport|port|harbor|island|bay|lake|mountain|hill|valley|forest|zoo|gallery|theatre|theater|opera|stadium|arena|university|library|monument|memorial|landmark/i;

    // Transit/infrastructure articles to deprioritize when place name doesn't mention them
    const transitWords = /underground|subway|subte|metro|línea|linea|railway|rail|tram|bus route|bus line|tube line/i;

    function looksLikePerson(title: string): boolean {
      const words = title.trim().split(/\s+/);
      return words.length <= 4 &&
        words.every(w => /^[A-Z\u00C0-\u024F]/.test(w)) &&
        !placeWords.test(title);
    }

    function isTransitArticle(title: string): boolean {
      return transitWords.test(title) && !transitWords.test(nameLower);
    }

    // Score each result: more keyword matches = higher score; transit articles penalized
    function scoreResult(r: { title: string }): number {
      const t = r.title.toLowerCase();
      const matchCount = nameParts.filter(p => t.includes(p)).length;
      const transitPenalty = isTransitArticle(r.title) ? -10 : 0;
      return matchCount + transitPenalty;
    }

    const ranked = [...results]
      .filter(r => !looksLikePerson(r.title))
      .sort((a, b) => scoreResult(b) - scoreResult(a));

    const candidates = ranked.length > 0 ? ranked : results.filter(r => !looksLikePerson(r.title));

    for (const candidate of candidates) {
      const img = await fetchImageForTitle(candidate.title);
      if (img) return img;
    }
    return null;
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
    const transitWords = /underground|subway|subte|metro|línea|linea|railway|rail|tram|bus route|bus line|tube line/i;

    function looksLikePerson(title: string): boolean {
      const words = title.trim().split(/\s+/);
      return words.length <= 4 &&
        words.every(w => /^[A-Z\u00C0-\u024F]/.test(w)) &&
        !placeWords.test(title);
    }

    function scoreResult(r: { title: string }): number {
      const t = r.title.toLowerCase();
      const matchCount = nameParts.filter(p => t.includes(p)).length;
      const cityBonus = t.includes(cityLower) ? 1 : 0;
      const transitPenalty = (transitWords.test(r.title) && !transitWords.test(nameLower)) ? -10 : 0;
      return matchCount + cityBonus + transitPenalty;
    }

    const filtered = results.filter(r => !looksLikePerson(r.title));
    const candidates = filtered.length > 0 ? filtered : results;
    const ranked = [...candidates].sort((a, b) => scoreResult(b) - scoreResult(a));

    return await fetchImageForTitle(ranked[0].title);
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
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=8`,
      { headers: { Authorization: PEXELS_KEY } }
    );
    const data = await res.json();
    if (!data.photos || data.photos.length === 0) return null;

    // Prefer photos whose alt text does NOT describe a portrait or small group of people
    const safePhoto = data.photos.find(
      (p: { alt?: string; src: { medium: string } }) =>
        !PERSON_ALT_PATTERN.test(p.alt ?? "")
    ) ?? data.photos[0];

    return safePhoto.src.medium;
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
  // Bias queries towards architecture/landscape to avoid portrait results
  return (
    (await searchImage(`${name} ${city} landmark`)) ??
    (await searchImage(`${name} ${city}`)) ??
    (await searchImage(`${category} ${city} architecture`))
  );
}
