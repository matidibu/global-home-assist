function haversineKm(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function estimateBike(distKm: number): number | null {
  if (distKm < 0.3) return null;
  return Math.round((distKm * 1.35 / 15) * 60);
}

function estimateCar(distKm: number): number | null {
  if (distKm < 0.5) return null;
  return Math.round((distKm * 1.35 / 30) * 60);
}

export async function getTransportOptions(
  from: { lat: number; lon: number },
  to: { lat: number; lon: number },
  transitType: "walk" | "land" | "water" | "air"
) {
  const distKm = haversineKm(from.lat, from.lon, to.lat, to.lon);

  if (distKm < 0.05) return null;

  if (transitType === "walk") {
    const walkMinutes = distKm < 0.1
      ? 10
      : Math.round((distKm * 1.35 / 5) * 60);
    return { walk: walkMinutes, bike: null, car: null };
  }

  if (transitType === "air") {
    const flightMinutes = Math.round((distKm / 700) * 60) + 60;
    return { walk: null, bike: null, car: null, ferry: null, flight: flightMinutes };
  }

  if (transitType === "water") {
    if (distKm < 0.5) return null;
    const ferryMinutes = Math.round((distKm / 40) * 60);
    const flightMinutes = distKm > 200
      ? Math.round((distKm / 700) * 60) + 60
      : null;
    return {
      walk: null,
      bike: null,
      car: null,
      ferry: ferryMinutes > 0 ? ferryMinutes : null,
      flight: flightMinutes,
    };
  }

  const apiKey = process.env.GEOAPIFY_KEY;
  if (!apiKey) {
    const walkMin = Math.round((distKm * 1.35 / 5) * 60);
    return {
      walk: walkMin,
      bike: estimateBike(distKm),
      car: estimateCar(distKm),
    };
  }

  const baseUrl = "https://api.geoapify.com/v1/routing";

  async function getRoute(mode: string): Promise<number | null> {
    const url =
      `${baseUrl}?waypoints=${from.lat},${from.lon}|${to.lat},${to.lon}` +
      `&mode=${mode}` +
      `&apiKey=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const seconds = data?.features?.[0]?.properties?.time;
      if (!seconds) return null;
      return Math.round(seconds / 60);
    } catch (error) {
      console.error("Transport route error:", error);
      return null;
    }
  }

  const [walk, bike, car] = await Promise.all([
    getRoute("walk"),
    getRoute("bicycle"),
    getRoute("drive"),
  ]);

  if (walk === null && bike === null && car === null) {
    if (distKm < 0.5) return null;
    const ferryMinutes = Math.round((distKm / 40) * 60);
    return { walk: null, bike: null, car: null, ferry: ferryMinutes > 0 ? ferryMinutes : null, flight: null };
  }

  return {
    walk,
    bike: bike ?? estimateBike(distKm),
    car: car ?? estimateCar(distKm),
  };
}