/**
 * One-off data-build script: geocodes and finds a real photo for the named
 * places mentioned in each day of every curated destination itinerary, using
 * only free/keyless APIs (Wikipedia primarily, OpenStreetMap Nominatim as a
 * fallback geocoder — see strategy note below).
 *
 * Output: src/data/itineraryPlaces.ts
 *
 * NOTE ON DATA SOURCE: the task brief describes src/data/itineraries.ts as
 * the prose source rendered by src/app/itinerario/[slug]/page.tsx. That is
 * no longer true in this checkout — itineraries.ts is dead code (nothing
 * imports it; grep confirms zero references outside its own file). The
 * live [slug]/page.tsx actually renders src/data/destinationPages.ts, which
 * already has PRE-STRUCTURED per-activity data (DestActivity.name is a
 * clean-ish headline per activity, e.g. "Museo del Louvre",
 * "Torre Eiffel — primer turno"). This script sources places from
 * destinationPages.ts instead, since that's what actually feeds the pages
 * this task needs to add photos/maps to. destinationPages.ts covers exactly
 * the 24 curated destinations (bali has its own custom page, and
 * "cartagena" — present in itineraries.ts/destinations.ts — has no
 * corresponding [slug] page at all, so it's correctly excluded here too).
 *
 * NOTE ON GEOCODING STRATEGY: this site's activity names are in Spanish.
 * OpenStreetMap Nominatim mostly indexes native-language/English names, so
 * Spanish translations of foreign landmarks routinely fail to geocode
 * ("Palacio de Versalles" -> 0 results; "Château de Versailles" -> works;
 * "Jardín de Luxemburgo" -> 0 results). Wikipedia's Spanish-language search
 * already resolves these translations to the correct article, and that
 * article's own `coordinates` field gives a reliable lat/lng directly — so
 * Wikipedia (via the new searchPlaceCoordsAndImage export) is tried FIRST
 * for both coordinates and photo in one shot. Nominatim is used only as a
 * fallback: (a) when Wikipedia found an article with a photo but no
 * coordinates, or (b) when Wikipedia found nothing at all (small local
 * places that are on OSM but have no Wikipedia article).
 *
 * NOTE ON RESUMABILITY: this environment has killed the background process
 * running this script twice (once a transient network error, once an
 * unexplained external kill after ~65 min with no signal/reason visible to
 * the script). A single-shot in-memory run that only writes output at the
 * very end loses everything when that happens. To make that survivable:
 *  - On startup, the existing src/data/itineraryPlaces.ts (if present) is
 *    loaded and used as a starting point.
 *  - A destination/day already present in that loaded data is SKIPPED
 *    entirely (not re-fetched) — this is what makes reruns cheap.
 *  - The full output file is rewritten after every single day completes
 *    (not just at the very end), so at most ~1 day's worth of work
 *    (typically under a couple minutes) is ever at risk.
 *  - SIGTERM/SIGINT are handled to flush a final write before exiting, in
 *    case a future kill is a graceful signal rather than a hard kill.
 * If this run is interrupted again, simply re-run the exact same command —
 * it resumes automatically from the last checkpointed day.
 *
 * Run with:  node --experimental-strip-types scripts/build-itinerary-places.mts
 */

import { DESTINATIONS } from "../src/data/destinationPages.ts";
import { searchPlaceImage, searchPlaceCoordsAndImage } from "../src/lib/imageSearch.ts";
import { writeFileSync, existsSync, readFileSync } from "node:fs";

const OUTPUT_PATH = "src/data/itineraryPlaces.ts";

const NOMINATIM_HEADERS = {
  "User-Agent": "GlobalHomeAssist-DataBuild/1.0 (contact: globalhomeassist.app@gmail.com)",
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Clean an activity headline down to something geocodable / Wikipedia-searchable.
 */
function cleanPlaceName(raw: string): string {
  let name = raw.split("—")[0].trim(); // em-dash suffix is usually a descriptor
  name = name.split(":")[0].trim(); // "Williamsburg: brunch y cultura" -> "Williamsburg"
  name = name.replace(/\s*\([^)]*\)\s*$/, "").trim(); // trailing "(The Met)" etc.
  name = name.replace(
    /\s+(al amanecer|al atardecer|al anochecer|de d[ií]a|de noche|por la ma[ñn]ana(?: temprano)?|por la tarde|por la noche|temprano|de madrugada)$/i,
    ""
  ).trim();

  // "Trocadéro y vistas panorámicas" -> "Trocadéro" (second clause is a
  // lowercase descriptor). "Museos Vaticanos y Capilla Sixtina" is left
  // whole since both halves are proper nouns.
  const conj = name.match(/^(.*?)\s+(?:y|o)\s+(.*)$/i);
  if (conj) {
    const [, first, second] = conj;
    if (/^[a-zà-öø-ÿ]/.test(second.trim())) {
      name = first.trim();
    }
  }
  return name.trim();
}

interface NominatimResult {
  lat: string;
  lon: string;
}

async function geocodeOnce(query: string): Promise<{ lat: number; lon: number } | null> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
      { headers: NOMINATIM_HEADERS }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as NominatimResult[];
    if (!data.length) return null;
    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);
    if (Number.isNaN(lat) || Number.isNaN(lon)) return null;
    return { lat, lon };
  } catch {
    return null;
  }
}

// Nominatim requires max 1 req/sec, sequential. lastNominatimCall tracks the
// last call time globally so we only pay the wait when actually needed
// (most places now resolve via Wikipedia and never touch Nominatim at all).
let lastNominatimCall = 0;
async function geocode(query: string): Promise<{ lat: number; lon: number } | null> {
  const wait = 1100 - (Date.now() - lastNominatimCall);
  if (wait > 0) await sleep(wait);
  lastNominatimCall = Date.now();

  const first = await geocodeOnce(query);
  if (first) return first;

  lastNominatimCall = Date.now();
  await sleep(1100);
  return geocodeOnce(query);
}

interface PlaceEntry {
  name: string; // original (uncleaned) activity headline, for text matching in the page
  lat: number;
  lon: number;
  imageUrl: string | null;
}

type CacheEntry = { lat: number; lon: number; imageUrl: string } | null; // null = tried and failed
type ResultShape = Record<string, Record<number, PlaceEntry[]>>;

/**
 * Resolve a single place to { lat, lon, imageUrl }, or null if no confident
 * match was found. Wikipedia-first (handles Spanish-translated landmark
 * names), Nominatim as fallback geocoder.
 */
async function resolvePlace(
  cleanName: string,
  city: string,
  country: string,
  category: string
): Promise<{ lat: number; lon: number; imageUrl: string } | null> {
  // 1. Wikipedia: coordinates + photo from the same resolved article.
  const wiki = await searchPlaceCoordsAndImage(cleanName, city, "es");

  if (wiki.lat != null && wiki.lng != null && wiki.imageUrl) {
    return { lat: wiki.lat, lon: wiki.lng, imageUrl: wiki.imageUrl };
  }

  if (wiki.lat != null && wiki.lng != null && !wiki.imageUrl) {
    // Article found with coords but no usable pageimage — try a geo-based
    // Wikipedia image search around those coords (may surface a different,
    // still-relevant nearby article with a photo) before giving up on the photo.
    const geoImg = await searchPlaceImage(cleanName, city, category, wiki.lat, wiki.lng, "es").catch(() => null);
    if (geoImg) return { lat: wiki.lat, lon: wiki.lng, imageUrl: geoImg };
    return null; // coords but genuinely no confident photo -> drop per policy
  }

  if (wiki.imageUrl) {
    // Photo found but the article had no coordinates field — geocode the
    // clean name via Nominatim to get a lat/lon to pair with it.
    const geo = await geocode(`${cleanName}, ${city}, ${country}`);
    if (geo) return { lat: geo.lat, lon: geo.lon, imageUrl: wiki.imageUrl };
    return null;
  }

  // 2. Nothing from Wikipedia at all — fall back to the original
  // Nominatim-first pipeline (small local places with no Wikipedia article
  // but present in OSM).
  const geo = await geocode(`${cleanName}, ${city}, ${country}`);
  if (!geo) return null;
  const img = await searchPlaceImage(cleanName, city, category, geo.lat, geo.lon, "es").catch(() => null);
  if (!img) return null;
  return { lat: geo.lat, lon: geo.lon, imageUrl: img };
}

function fileContent(result: ResultShape): string {
  const header = `// AUTO-GENERATED by scripts/build-itinerary-places.mts — do not hand-edit.
// Places are keyed by destination slug -> day number -> array of named places
// that were successfully resolved to coordinates AND matched to a confident
// real photo (Wikipedia-first, OpenStreetMap Nominatim as fallback geocoder;
// see src/lib/imageSearch.ts for the matching/scoring logic). Places with no
// confident match were dropped silently rather than shown with wrong/missing
// photos.
//
// Written incrementally (checkpointed after every day) by the build script
// so an interrupted run can resume instead of restarting from zero.

export interface ItineraryPlace {
  name: string;
  lat: number;
  lon: number;
  imageUrl: string | null;
}

export const itineraryPlaces: Record<string, Record<number, ItineraryPlace[]>> = `;

  const body = JSON.stringify(result, null, 2);
  return header + body + ";\n";
}

function loadExisting(): ResultShape {
  if (!existsSync(OUTPUT_PATH)) return {};
  try {
    const text = readFileSync(OUTPUT_PATH, "utf-8");
    const marker = "itineraryPlaces: Record<string, Record<number, ItineraryPlace[]>> = ";
    const idx = text.indexOf(marker);
    if (idx === -1) return {};
    let jsonText = text.slice(idx + marker.length).trim();
    if (jsonText.endsWith(";")) jsonText = jsonText.slice(0, -1);
    const parsed = JSON.parse(jsonText);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

async function main() {
  const result: ResultShape = loadExisting();
  const resumedSlugs = Object.keys(result);
  if (resumedSlugs.length) {
    console.log(`Resuming from checkpoint — already have data for: ${resumedSlugs.join(", ")}`);
  }

  function checkpoint() {
    writeFileSync(OUTPUT_PATH, fileContent(result), "utf-8");
  }

  // Flush on graceful termination signals, in case a future kill sends one
  // instead of a hard SIGKILL (which cannot be intercepted at all).
  process.on("SIGTERM", () => { checkpoint(); process.exit(0); });
  process.on("SIGINT", () => { checkpoint(); process.exit(0); });

  const cache = new Map<string, CacheEntry>();
  let totalPlaces = 0;
  let kept = 0;
  let dropped = 0;
  let cacheHits = 0;
  let skippedDays = 0;

  for (const dest of DESTINATIONS) {
    if (!result[dest.slug]) result[dest.slug] = {};
    console.log(`\n=== ${dest.slug} (${dest.city}, ${dest.country}) ===`);

    for (const day of dest.days) {
      if (result[dest.slug][day.day]) {
        skippedDays++;
        console.log(`  Día ${day.day}: already checkpointed, skipping (${result[dest.slug][day.day].length} places)`);
        continue;
      }

      const places: PlaceEntry[] = [];
      console.log(`  Día ${day.day}: ${day.activities.length} actividades`);

      for (const activity of day.activities) {
        totalPlaces++;
        const cleanName = cleanPlaceName(activity.name);
        const cacheKey = `${cleanName}|${dest.city}`;

        if (cache.has(cacheKey)) {
          cacheHits++;
          const cached = cache.get(cacheKey)!;
          if (cached) {
            places.push({ name: activity.name, lat: cached.lat, lon: cached.lon, imageUrl: cached.imageUrl });
            kept++;
            console.log(`    [cache] ${activity.name} -> OK`);
          } else {
            console.log(`    [cache] ${activity.name} -> skip (cached failure)`);
          }
          continue;
        }

        let resolved = await resolvePlace(cleanName, dest.city, dest.country, activity.category).catch(() => null);
        if (!resolved) {
          // One retry after a beat — absorbs transient network/API blips
          // rather than dropping a real place because of a hiccup.
          await sleep(1200);
          resolved = await resolvePlace(cleanName, dest.city, dest.country, activity.category).catch(() => null);
        }

        if (!resolved) {
          dropped++;
          cache.set(cacheKey, null);
          console.log(`    ✗ ${activity.name} -> no confident match`);
          await sleep(400);
          continue;
        }

        cache.set(cacheKey, resolved);
        places.push({ name: activity.name, lat: resolved.lat, lon: resolved.lon, imageUrl: resolved.imageUrl });
        kept++;
        console.log(`    ✓ ${activity.name} -> ${resolved.imageUrl.slice(0, 70)}...`);

        await sleep(400); // light pacing on Wikipedia even when Nominatim isn't involved
      }

      if (places.length) {
        result[dest.slug][day.day] = places;
      }

      // Checkpoint after EVERY day — worst-case loss on interruption is
      // whatever's in-flight for the current day, typically well under 2 min.
      checkpoint();
    }
  }

  console.log(`\n\n=== SUMMARY ===`);
  console.log(`Days skipped (already checkpointed from a previous run): ${skippedDays}`);
  console.log(`Total activities considered (this run): ${totalPlaces}`);
  console.log(`Cache hits (deduped, no network): ${cacheHits}`);
  console.log(`Kept (coords + photo found): ${kept}`);
  console.log(`Dropped — no confident match: ${dropped}`);

  checkpoint();
  console.log(`\nWrote ${OUTPUT_PATH}`);
}

main().catch((e) => {
  console.error("FATAL:", e);
  process.exit(1);
});
