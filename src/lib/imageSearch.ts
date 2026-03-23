
const PEXELS_KEY = process.env.PEXELS_API_KEY;
const HEADERS = { "User-Agent": "GlobalHomeAssist/1.0 (travel planner)" };

// ─── Filters ─────────────────────────────────────────────────────────────────

const PORTRAIT_FILENAME_PATTERN =
  /\b(portrait|headshot|perfil|ritratto|retrato|foto_oficial|official_photo|profile_pic|bio_photo)\b/i;

const PERSON_ALT_PATTERN =
  /\b(portrait|headshot|selfie|close.?up of (a |the )?(man|woman|person|girl|boy|people)|smiling (man|woman|person|couple)|posing (man|woman|couple)|a (man|woman) (standing|sitting|holding|wearing|looking)|couple (standing|sitting|posing)|two people|three people|four people)\b/i;

// Articles about transit infrastructure — never good landmark photos
const TRANSIT_PATTERN =
  /\b(underground|subway|subte|metro|línea|linea|railway|rail|tram line|bus route|bus line|tube line|station)\b/i;

// Articles about streets / roads — not landmarks
const STREET_PATTERN =
  /\b(street|avenue|boulevard|road|highway|avenida|calle|ruta|carretera|paseo)\b/i;

// Spanish/English stop words to exclude from keyword matching
const STOP_WORDS = new Set([
  "de", "la", "el", "los", "las", "the", "of", "in", "del", "al", "en",
  "y", "e", "a", "an", "and", "or", "le", "les", "du", "des", "di", "il",
]);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isValidImageUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  if (/\.(svg|gif)(\?|$)/i.test(url)) return false;
  if (/(coat_of_arms|flag|logo|map|icon|emblem|seal)/i.test(url)) return false;
  const filename = decodeURIComponent(url.split("/").pop()?.split("?")[0] ?? "");
  if (PORTRAIT_FILENAME_PATTERN.test(filename)) return false;
  return true;
}

/** Returns meaningful keywords: length > 2, not a stop word */
function keywords(name: string): string[] {
  return name
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

/**
 * How many of `kws` appear in `title` (case-insensitive).
 * Returns -1 if the title is a transit or street article and the place name isn't.
 */
function titleScore(title: string, kws: string[], nameLower: string): number {
  const t = title.toLowerCase();
  if (TRANSIT_PATTERN.test(title) && !TRANSIT_PATTERN.test(nameLower)) return -1;
  if (STREET_PATTERN.test(title) && !STREET_PATTERN.test(nameLower)) return -1;
  return kws.filter((k) => t.includes(k)).length;
}

/** Minimum keyword matches required: at least 60% of keywords, min 1 */
function minRequired(kws: string[]): number {
  return Math.max(1, Math.ceil(kws.length * 0.6));
}

// ─── Wikipedia fetch ──────────────────────────────────────────────────────────

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
      missing?: string;
      thumbnail?: { source: string };
      original?: { source: string };
    };
    if (page.missing !== undefined) return null;
    const url = page?.thumbnail?.source ?? page?.original?.source ?? null;
    return isValidImageUrl(url) ? url : null;
  } catch {
    return null;
  }
}

// ─── Strategy 1: direct title lookup ─────────────────────────────────────────
// Try the exact place name and common Wikipedia disambiguation formats.
// Most reliable when Wikipedia has an article titled exactly like the place.

async function fetchByDirectTitle(name: string, city: string): Promise<string | null> {
  const variants = [
    name,
    `${name}, ${city}`,
    `${name} (${city})`,
  ];
  for (const v of variants) {
    const img = await fetchImageForTitle(v);
    if (img) return img;
  }
  return null;
}

// ─── Strategy 2: text search with strict threshold ───────────────────────────
// Search Wikipedia by name+city, then name only. Only accept an article if its
// title meets the minimum keyword match threshold — avoids unrelated articles.

async function fetchByTextSearch(name: string, city: string): Promise<string | null> {
  const kws = keywords(name);
  const nameLower = name.toLowerCase();
  const required = minRequired(kws);

  for (const query of [`${name} ${city}`, name]) {
    try {
      const res = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&srlimit=8`,
        { headers: HEADERS }
      );
      if (!res.ok) continue;
      const data = await res.json();
      const results: { title: string }[] = data?.query?.search ?? [];
      if (!results.length) continue;

      // Score and filter — only keep articles that meet the threshold
      const scored = results
        .map((r) => ({ ...r, score: titleScore(r.title, kws, nameLower) }))
        .filter((r) => r.score >= required)
        .sort((a, b) => b.score - a.score);

      for (const candidate of scored) {
        const img = await fetchImageForTitle(candidate.title);
        if (img) return img;
      }
    } catch {
      continue;
    }
  }
  return null;
}

// ─── Strategy 3: geo search with strict minimum ───────────────────────────────
// Only used as fallback. Requires score ≥ 2 to prevent "nearby but unrelated"
// articles (subway entrances, bronze plaques, adjacent streets, etc.).

async function fetchByGeoSearch(lat: number, lng: number, name: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=300&gslimit=10&format=json`,
      { headers: HEADERS }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const results: { title: string; dist: number }[] = data?.query?.geosearch ?? [];
    if (!results.length) return null;

    const kws = keywords(name);
    const nameLower = name.toLowerCase();

    const scored = results
      .map((r) => ({ ...r, score: titleScore(r.title, kws, nameLower) }))
      .filter((r) => r.score >= 2) // strict: must match at least 2 keywords
      .sort((a, b) => b.score - a.score);

    for (const candidate of scored) {
      const img = await fetchImageForTitle(candidate.title);
      if (img) return img;
    }
    return null;
  } catch {
    return null;
  }
}

// ─── Strategy 4: Pexels ───────────────────────────────────────────────────────

async function fetchFromPexels(query: string): Promise<string | null> {
  if (!PEXELS_KEY) return null;
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=8`,
      { headers: { Authorization: PEXELS_KEY } }
    );
    const data = await res.json();
    if (!data.photos?.length) return null;
    const safe =
      data.photos.find(
        (p: { alt?: string; src: { medium: string } }) =>
          !PERSON_ALT_PATTERN.test(p.alt ?? "")
      ) ?? data.photos[0];
    return safe.src.medium;
  } catch {
    return null;
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Used by destination pages for generic city-level images */
export async function searchImage(query: string): Promise<string | null> {
  return fetchFromPexels(query);
}

/**
 * Main image lookup for itinerary activities.
 *
 * Order (most → least reliable):
 * 1. Direct Wikipedia title lookup  (exact name / "Name, City" / "Name (City)")
 * 2. Wikipedia text search          (strict keyword threshold — rejects unrelated)
 * 3. Wikipedia geo search           (strict minimum score ≥ 2 — no stray articles)
 * 4. Pexels                         (landmark-biased queries, alt-text filtered)
 */
export async function searchPlaceImage(
  name: string,
  city: string,
  category: string,
  lat?: number,
  lng?: number
): Promise<string | null> {
  // 1. Direct title
  const direct = await fetchByDirectTitle(name, city);
  if (direct) return direct;

  // 2. Text search (strict)
  const text = await fetchByTextSearch(name, city);
  if (text) return text;

  // 3. Geo search (strict, only if coords available)
  if (lat != null && lng != null) {
    const geo = await fetchByGeoSearch(lat, lng, name);
    if (geo) return geo;
  }

  // 4. Pexels fallback
  if (!PEXELS_KEY) return null;
  return (
    (await fetchFromPexels(`${name} ${city} landmark exterior`)) ??
    (await fetchFromPexels(`${name} ${city}`)) ??
    (await fetchFromPexels(`${category} ${city} architecture`))
  );
}
