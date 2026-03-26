
const PEXELS_KEY = process.env.PEXELS_API_KEY

const HEADERS = { "User-Agent": "GlobalHomeAssist/1.0 (travel planner)" };

/**
 * Reject URLs that are clearly not a photo of the place itself.
 */
function isValidImageUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  if (/\.(svg|gif)(\?|$)/i.test(url)) return false;
  // Reject flags, logos, coats of arms, maps, diagrams, seals
  if (/(coat_of_arms|flag_of|logo|icon|emblem|seal|mapa_|map_|_map\b|plano_|escudo|bandera|\.diagram)/i.test(url)) return false;
  // Reject portrait-style filenames
  const filename = decodeURIComponent(url.split('/').pop()?.split('?')[0] ?? '');
  if (/\b(portrait|headshot|perfil|ritratto|retrato|foto_oficial|official_photo|profile_pic|bio_photo)\b/i.test(filename)) return false;
  return true;
}

/**
 * After getting the image, do a secondary check on the filename/path
 * to reject maps, departmental divisions, provincial charts, etc.
 */
function isLikelyPlacePhoto(url: string): boolean {
  // Reject Wikipedia images that look like maps or administrative diagrams
  if (/(departamento|provincia|region|distrito|municipio|division|localizacion|location_map|relief_map|satelite|satellite|administrative|politico|division)/i.test(url)) return false;
  return true;
}

/**
 * Alt text patterns for Pexels that suggest a portrait or small group.
 */
const PERSON_ALT_PATTERN = /\b(portrait|headshot|selfie|close.?up of (a |the )?(man|woman|person|girl|boy|people)|smiling (man|woman|person|couple)|posing (man|woman|couple)|a (man|woman) (standing|sitting|holding|wearing|looking)|couple (standing|sitting|posing)|two people|three people|four people)\b/i;

async function fetchImageForTitle(pageTitle: string, lang = 'en'): Promise<string | null> {
  try {
    const res = await fetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&piprop=thumbnail|original&pithumbsize=900&format=json`,
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
    if (!isValidImageUrl(url)) return null;
    if (!isLikelyPlacePhoto(url)) return null;
    return url;
  } catch {
    return null;
  }
}

/**
 * Geo search on a Wikipedia language edition near given coordinates.
 * Returns the best matching image.
 */
async function fetchWikipediaImageByCoords(
  lat: number,
  lng: number,
  name: string,
  lang = 'en'
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=1000&gslimit=15&format=json`,
      { headers: HEADERS }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const results: { title: string; dist: number }[] = data?.query?.geosearch ?? [];
    if (!results.length) return null;

    const nameLower = name.toLowerCase();
    const nameParts = nameLower.split(/\s+/).filter(w => w.length > 2);

    const placeWords = /museum|park|tower|palace|temple|mosque|church|cathedral|square|market|garden|beach|reserve|fort|castle|bridge|mall|station|island|bay|lake|mountain|zoo|gallery|theatre|theater|opera|stadium|arena|university|library|monument|memorial|teatro|catedral|museo|plaza|mercado|parque|costanera|iglesia|basílica|basilica|puente|paseo/i;
    const badWords = /underground|subway|metro|línea|linea|railway|tram|bus route|departamento|provincia|municipio|distrito|map|mapa/i;

    function looksLikePerson(title: string): boolean {
      const words = title.trim().split(/\s+/);
      return words.length <= 4 &&
        words.every(w => /^[A-Z\u00C0-\u024F]/.test(w)) &&
        !placeWords.test(title);
    }

    function scoreResult(r: { title: string }): number {
      const t = r.title.toLowerCase();
      const matchCount = nameParts.filter(p => t.includes(p)).length;
      const badPenalty = badWords.test(r.title) ? -10 : 0;
      return matchCount + badPenalty;
    }

    const ranked = results
      .filter(r => !looksLikePerson(r.title))
      .sort((a, b) => scoreResult(b) - scoreResult(a));

    // Geo results must have ≥1 keyword match — avoids using images of unrelated
    // nearby articles (TC2000 races, tunnels, car dealerships near the place)
    for (const candidate of ranked.slice(0, 5)) {
      if (scoreResult(candidate) < 1) break; // sorted descending — no point continuing
      const img = await fetchImageForTitle(candidate.title, lang);
      if (img) return img;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Text search on a Wikipedia language edition.
 * Requires a minimum score match to avoid unrelated articles.
 */
async function fetchWikipediaImageByQuery(
  query: string,
  city: string,
  name: string,
  lang = 'en'
): Promise<string | null> {
  try {
    const searchRes = await fetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&srlimit=8`,
      { headers: HEADERS }
    );
    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();
    const results: { title: string }[] = searchData?.query?.search ?? [];
    if (!results.length) return null;

    const cityLower = city.toLowerCase();
    const nameLower = name.toLowerCase();
    const nameParts = nameLower.split(/\s+/).filter(w => w.length > 3);

    const placeWords = /museum|park|tower|palace|temple|mosque|church|cathedral|square|market|garden|beach|fort|castle|bridge|mall|station|island|zoo|gallery|theatre|theater|opera|stadium|arena|university|library|monument|memorial|teatro|catedral|museo|plaza|mercado|parque|costanera|iglesia|basílica|basilica|puente|paseo/i;
    const badWords = /underground|subway|metro|línea|railway|tram|bus route|departamento|provincia|municipio|map|mapa/i;

    function looksLikePerson(title: string): boolean {
      const words = title.trim().split(/\s+/);
      return words.length <= 4 &&
        words.every(w => /^[A-Z\u00C0-\u024F]/.test(w)) &&
        !placeWords.test(title);
    }

    function scoreResult(r: { title: string }): number {
      const t = r.title.toLowerCase();
      const matchCount = nameParts.filter(p => t.includes(p)).length;
      const cityBonus = t.includes(cityLower) ? 2 : 0;
      const badPenalty = badWords.test(r.title) ? -10 : 0;
      return matchCount + cityBonus + badPenalty;
    }

    const filtered = results.filter(r => !looksLikePerson(r.title));
    const ranked = (filtered.length > 0 ? filtered : results)
      .sort((a, b) => scoreResult(b) - scoreResult(a));

    // Only use result if it has a meaningful score — avoids totally unrelated articles
    const best = ranked[0];
    if (!best || scoreResult(best) < 1) return null;

    return await fetchImageForTitle(best.title, lang);
  } catch {
    return null;
  }
}

/**
 * Try Wikipedia in the given language first, then English as fallback.
 */
async function searchWikipediaImage(
  name: string,
  city: string,
  lang: string,
  lat?: number,
  lng?: number
): Promise<string | null> {
  const langs = lang !== 'en' ? [lang, 'en'] : ['en'];

  for (const l of langs) {
    // 1. Geo search (most accurate — finds real articles near the coordinates)
    if (lat != null && lng != null) {
      const geoImg = await fetchWikipediaImageByCoords(lat, lng, name, l);
      if (geoImg) return geoImg;
    }

    // 2. Text search: city + name
    const withCity = await fetchWikipediaImageByQuery(`${name} ${city}`, city, name, l);
    if (withCity) return withCity;
  }

  return null;
}

async function searchPexels(query: string): Promise<string | null> {
  try {
    if (!PEXELS_KEY) return null;
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10&orientation=landscape`,
      { headers: { Authorization: PEXELS_KEY } }
    );
    const data = await res.json();
    if (!data.photos || data.photos.length === 0) return null;

    // Prefer photos whose alt text does NOT suggest a portrait or people
    const safePhoto = data.photos.find(
      (p: { alt?: string; src: { medium: string } }) =>
        !PERSON_ALT_PATTERN.test(p.alt ?? "")
    ) ?? data.photos[0];

    return safePhoto.src.medium;
  } catch {
    return null;
  }
}

/**
 * Image strategy:
 * 1. Wikipedia in destination language + coordinates (most accurate)
 * 2. Wikipedia in English + coordinates
 * 3. Wikipedia text search
 * 4. Pexels: category + country (generic but safe — avoids cross-city confusion)
 */
export async function searchPlaceImage(
  name: string,
  city: string,
  category: string,
  lat?: number,
  lng?: number,
  lang = 'es'
): Promise<string | null> {
  const wikiImg = await searchWikipediaImage(name, city, lang, lat, lng);
  if (wikiImg) return wikiImg;

  if (!PEXELS_KEY) return null;

  // Pexels fallback chain: try specific place name first, then generic category
  return (
    (await searchPexels(`${name}`)) ??
    (await searchPexels(`${category} ${city}`)) ??
    (await searchPexels(`${category} architecture exterior`)) ??
    (await searchPexels(`${category} travel landmark`))
  );
}

// Legacy export kept for any direct callers
export async function searchImage(query: string): Promise<string | null> {
  return searchPexels(query);
}
