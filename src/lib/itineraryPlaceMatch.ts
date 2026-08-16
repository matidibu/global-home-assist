import type { ItineraryPlace } from "@/data/itineraryPlaces";

const COMBINING_MARKS = new RegExp("[\\u0300-\\u036f]", "g");

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(COMBINING_MARKS, "");
}

/**
 * Find the itineraryPlaces entry (if any) that corresponds to a given
 * activity headline. Places are generated 1:1 from the same activity.name
 * values in destinationPages.ts, so an exact match covers the vast
 * majority of cases; the substring fallback is just a safety net.
 */
export function matchItineraryPlace(
  activityName: string,
  places: ItineraryPlace[] | undefined
): ItineraryPlace | undefined {
  if (!places || places.length === 0) return undefined;

  const exact = places.find((p) => p.name === activityName);
  if (exact) return exact;

  const a = normalize(activityName);
  return places.find((p) => {
    const n = normalize(p.name);
    return a.includes(n) || n.includes(a);
  });
}
