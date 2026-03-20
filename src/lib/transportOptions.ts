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

export async function getTransportOptions(
  from: { lat: number; lon: number },
  to: { lat: number; lon: number },
  transitType: "walk" | "land" | "water" | "air"
) {
  const distKm = haversineKm(from.lat, from.lon, to.lat, to.lon);

  // Trayecto a pie dentro del mismo sitio — no llamar a Geoapify
  if (transitType === "walk") {
    const walkMinutes = distKm < 0.1
      ? 10
      : Math.round((distKm / 5) * 60);
    return { walk: walkMinutes, bike: null, car: null };
  }

  // Trayecto aéreo
  if (transitType === "air") {
    const flightMinutes = Math.round((distKm / 700) * 60) + 60;
    return {
      walk: null,
      bike: null,
      car: null,
      ferry: null,
      flight: flightMinutes,
    };
  }

  // Trayecto acuático — ferry y vuelo si es muy largo
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

  // Trayecto terrestre — llamar a Geoapify
  const apiKey = process.env.GEOAPIFY_KEY;
  if (!apiKey) {
    console.error("Geoapify API key is missing");
    return { walk: null, bike: null, car: null };
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

  // Si todas las rutas terrestres fallan, intentar como agua
  if (walk === null && bike === null && car === null) {
    if (distKm < 0.5) return null;
    const ferryMinutes = Math.round((distKm / 40) * 60);
    return {
      walk: null,
      bike: null,
      car: null,
      ferry: ferryMinutes > 0 ? ferryMinutes : null,
      flight: null,
    };
  }

  return { walk, bike, car };
}