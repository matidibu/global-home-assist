
const PEXELS_KEY = process.env.PEXELS_API_KEY

const HEADERS = { "User-Agent": "GlobalHomeAssist/1.0 (travel planner)" };

const DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

/**
 * Diacritic-insensitive lowercase, so "Trocadéro" (query) matches a title
 * like "Plaza del Trocadero" (no accent) — Wikipedia titles are not
 * consistently accented across languages/editors.
 */
function foldAccents(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(DIACRITICS, "");
}

/**
 * fetch() wrapper for Wikipedia API calls that backs off and retries once on
 * HTTP 429 (rate limited) instead of silently giving up. A flaky/throttled
 * response shouldn't cause a real place to be dropped as "no match".
 *
 * Kept deliberately short (single ~1.5s retry): this function is shared with
 * the live itinerario/bali page, which fires many concurrent searchPlaceImage
 * calls during Next.js static generation under a hard 60s-per-page budget. A
 * longer multi-step backoff chain here (previously up to 26s) is exactly what
 * caused that page to blow the SSG timeout under real rate-limit pressure —
 * caught by running the production build after adding this, not by inspection.
 * The offline batch script (scripts/build-itinerary-places.mts) has no such
 * time budget and layers its own outer retry on top of this one anyway.
 */
async function wikiFetch(url: string): Promise<Response> {
  const res = await fetch(url, { headers: HEADERS });
  if (res.status !== 429) return res;
  await new Promise((r) => setTimeout(r, 1500));
  return fetch(url, { headers: HEADERS });
}

/**
 * Reject URLs that are clearly not a photo of the place itself.
 */
function isValidImageUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  if (/\.(gif)(\?|$)/i.test(url)) return false;
  // Reject anything SVG-sourced, not just a literal trailing ".svg" — Wikipedia
  // serves SVG thumbnails as rendered rasters with the original extension kept
  // in the path (".../thumb/x/xx/Name.svg/960px-Name.svg.png"), so ".svg"
  // shows up mid-URL, not at the end. SVG on Wikipedia is essentially always a
  // diagram/map/chart/logo, never a real camera photo of a place — this caught
  // a real miss in production data (an OpenStreetMap-rendered map graphic,
  // "...Jardins_des_Champs-Elysees...-_OSM_2021.svg/960px-....svg.png",
  // returned as the "photo" for an unrelated place).
  if (/\.svg/i.test(url)) return false;
  // Reject flags, logos, coats of arms, maps, diagrams, seals
  if (/(coat_of_arms|flag_of|logo|icon|emblem|seal|mapa_|map_|_map\b|plano_|escudo|bandera|\.diagram|\bosm\b)/i.test(url)) return false;
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
    const res = await wikiFetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&piprop=thumbnail|original&pithumbsize=900&format=json`
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
    const res = await wikiFetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=1000&gslimit=15&format=json`
    );
    if (!res.ok) return null;
    const data = await res.json();
    const results: { title: string; dist: number }[] = data?.query?.geosearch ?? [];
    if (!results.length) return null;

    const nameParts = foldAccents(name).split(/\s+/).filter(w => w.length > 2);

    const placeWords = /museum|park|tower|palace|temple|mosque|church|cathedral|square|market|garden|beach|reserve|fort|castle|bridge|mall|station|island|bay|lake|mountain|zoo|gallery|theatre|theater|opera|stadium|arena|university|library|monument|memorial|teatro|catedral|museo|plaza|mercado|parque|costanera|iglesia|basílica|basilica|puente|paseo|torre|templo|palacio|capilla|castillo|jardín|jardines|mezquita|convento|monasterio|fuente|pirámide|piramide|ruinas|acueducto|fortaleza|mirador|muralla|murallas|cementerio|estadio/i;
    const badWords = /underground|subway|metro|línea|linea|railway|tram|bus route|departamento|provincia|municipio|distrito|map|mapa/i;

    function looksLikePerson(title: string): boolean {
      const words = title.trim().split(/\s+/);
      // A single word can't structurally resemble a "Firstname Lastname"
      // pattern (it's far more likely a one-word landmark/neighborhood name
      // like "Trocadero", "Montmartre", "Akihabara") that simply isn't in
      // the placeWords list. Require >=2 words before treating a title as
      // a plausible person's name.
      return words.length >= 2 && words.length <= 4 &&
        words.every(w => /^[A-Z\u00C0-\u024F]/.test(w)) &&
        !placeWords.test(title);
    }

    function scoreResult(r: { title: string }): number {
      const t = foldAccents(r.title);
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
 * Text search on a Wikipedia language edition — finds the best-matching
 * article title for a place. Requires a minimum score match to avoid
 * unrelated articles. Shared by fetchWikipediaImageByQuery (photo lookup)
 * and searchPlaceCoordsAndImage (photo + coordinates lookup).
 */
async function findBestWikipediaTitle(
  query: string,
  city: string,
  name: string,
  lang = 'en'
): Promise<string | null> {
  try {
    const searchRes = await wikiFetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&srlimit=8`
    );
    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();
    const results: { title: string }[] = searchData?.query?.search ?? [];
    if (!results.length) return null;

    const cityLower = foldAccents(city);
    const nameParts = foldAccents(name).split(/\s+/).filter(w => w.length > 3);

    const placeWords = /museum|park|tower|palace|temple|mosque|church|cathedral|square|market|garden|beach|fort|castle|bridge|mall|station|island|zoo|gallery|theatre|theater|opera|stadium|arena|university|library|monument|memorial|teatro|catedral|museo|plaza|mercado|parque|costanera|iglesia|basílica|basilica|puente|paseo|torre|templo|palacio|capilla|castillo|jardín|jardines|mezquita|convento|monasterio|fuente|pirámide|piramide|ruinas|acueducto|fortaleza|mirador|muralla|murallas|cementerio|estadio/i;
    // "estación de X" / "estación X" = the train/metro/bus stop named after
    // the landmark, not the landmark itself — almost never the desired photo
    // subject (caught a real miss: "Musée d'Orsay" search matched "Estación
    // de Musée d'Orsay" ahead of the actual "Museo de Orsay" article and
    // returned a photo of an RER commuter train).
    const badWords = /underground|subway|metro|línea|linea|railway|tram|bus route|departamento|provincia|municipio|map|mapa|estaci[oó]n de|estaci[oó]n del/i;

    function looksLikePerson(title: string): boolean {
      const words = title.trim().split(/\s+/);
      // A single word can't structurally resemble a "Firstname Lastname"
      // pattern (it's far more likely a one-word landmark/neighborhood name
      // like "Trocadero", "Montmartre", "Akihabara") that simply isn't in
      // the placeWords list. Require >=2 words before treating a title as
      // a plausible person's name.
      return words.length >= 2 && words.length <= 4 &&
        words.every(w => /^[A-Z\u00C0-\u024F]/.test(w)) &&
        !placeWords.test(title);
    }

    function scoreResult(r: { title: string }): { score: number; matchCount: number; cityMatch: boolean } {
      const t = foldAccents(r.title);
      const matchCount = nameParts.filter(p => t.includes(p)).length;
      const cityMatch = t.includes(cityLower);
      const badPenalty = badWords.test(r.title) ? -10 : 0;
      // Small tie-breaking bonus for titles that read as an actual landmark
      // ("Plaza del Trocadero") over an incidental same-name article with
      // equal name-match ("Estación de Trocadéro", the train station).
      const placeBonus = placeWords.test(r.title) ? 0.5 : 0;
      return { score: matchCount + (cityMatch ? 2 : 0) + badPenalty + placeBonus, matchCount, cityMatch };
    }

    const filtered = results.filter(r => !looksLikePerson(r.title));
    const ranked = (filtered.length > 0 ? filtered : results)
      .sort((a, b) => scoreResult(b).score - scoreResult(a).score);

    // A result is only trustworthy if the place NAME actually matched (not just
    // the city — a title like "Alexander Nevsky Cathedral, Tbilisi" would pass a
    // city-only bonus with zero relation to the actual place being searched for).
    // Require either city confirmation on top of a name match, or ≥2 distinctive
    // name words matching (a single generic word like "nacional"/"central" isn't
    // enough evidence on its own) — UNLESS the query itself only ever had one
    // distinctive word to begin with (e.g. "Trocadéro", "Montmartre",
    // "Akihabara"): a 2-word requirement is impossible to satisfy in that case,
    // so a single confirmed match on the only available word is already the
    // strongest possible same-name evidence.
    //
    // The sort above ranks by combined score (name match + city bonus), so a
    // city-only match with zero name relation can outrank the real place —
    // walk the ranked list rather than only checking the #1 result, so that
    // real candidate isn't missed just because an irrelevant one scored higher.
    for (const candidate of ranked.slice(0, 5)) {
      // badWords was previously only a scoring penalty, which affects sort
      // order but NOT eligibility — a badWords title with a high matchCount
      // (e.g. "Estación de Musée d'Orsay" matching both "musée" and
      // "d'orsay") could still pass the threshold below and get accepted.
      // Treat it as a hard exclusion instead.
      if (badWords.test(candidate.title)) continue;
      const s = scoreResult(candidate);
      if (s.matchCount < 1) continue;
      if (!s.cityMatch && s.matchCount < 2 && nameParts.length > 1) continue;
      return candidate.title;
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchWikipediaImageByQuery(
  query: string,
  city: string,
  name: string,
  lang = 'en'
): Promise<string | null> {
  const title = await findBestWikipediaTitle(query, city, name, lang);
  if (!title) return null;
  return await fetchImageForTitle(title, lang);
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
 * 4. Pexels: specific place name, then category + city
 *
 * Deliberately no fully-generic Pexels fallback (bare category with no city/
 * country signal, e.g. "mercado"): for an unfamiliar destination that returns
 * whatever stock photo ranks top worldwide for that word, which produced real
 * wrong-place photos (a Latin American market gate standing in for a bazaar in
 * Tbilisi, a random seaside park for a landlocked city). No photo is better
 * than a wrong one.
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

  return (
    (await searchPexels(`${name}`)) ??
    (await searchPexels(`${category} ${city}`))
  );
}

// Legacy export kept for any direct callers
export async function searchImage(query: string): Promise<string | null> {
  return searchPexels(query);
}

/**
 * Fetch an article's coordinates + pageimage in a single request.
 */
async function fetchArticleCoordsAndImage(
  title: string,
  lang: string
): Promise<{ lat: number | null; lng: number | null; imageUrl: string | null }> {
  try {
    const res = await wikiFetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=coordinates|pageimages&piprop=thumbnail|original&pithumbsize=900&format=json`
    );
    if (!res.ok) return { lat: null, lng: null, imageUrl: null };
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return { lat: null, lng: null, imageUrl: null };
    const page = Object.values(pages)[0] as {
      coordinates?: { lat: number; lon: number }[];
      thumbnail?: { source: string };
      original?: { source: string };
    };
    const coord = page?.coordinates?.[0];
    const url = page?.thumbnail?.source ?? page?.original?.source ?? null;
    const imageUrl = isValidImageUrl(url) && isLikelyPlacePhoto(url) ? url : null;
    return {
      lat: coord?.lat ?? null,
      lng: coord?.lon ?? null,
      imageUrl,
    };
  } catch {
    return { lat: null, lng: null, imageUrl: null };
  }
}

/**
 * Find both coordinates AND a confident photo for a named place via
 * Wikipedia text search alone (no coordinates required as input).
 *
 * This exists because this site's content is in Spanish, and translated
 * Spanish names for foreign landmarks (e.g. "Palacio de Versalles",
 * "Jardín de Luxemburgo") frequently fail to geocode against OpenStreetMap
 * Nominatim, which mostly indexes native-language/English names. Wikipedia's
 * Spanish-language search already resolves these translations to the right
 * article, and that article's own `coordinates` field (when present) gives
 * a reliable lat/lng without needing a separate geocoder at all.
 *
 * Same conservatism as searchPlaceImage: an article is only used if it
 * clears findBestWikipediaTitle's scoring bar, and only a genuinely-valid
 * place photo (per isValidImageUrl/isLikelyPlacePhoto) is ever returned.
 */
export async function searchPlaceCoordsAndImage(
  name: string,
  city: string,
  lang = 'es'
): Promise<{ lat: number | null; lng: number | null; imageUrl: string | null }> {
  const langs = lang !== 'en' ? [lang, 'en'] : ['en'];

  for (const l of langs) {
    const title = await findBestWikipediaTitle(`${name} ${city}`, city, name, l);
    if (!title) continue;
    const result = await fetchArticleCoordsAndImage(title, l);
    if (result.lat != null || result.imageUrl) return result;
  }

  return { lat: null, lng: null, imageUrl: null };
}
