import { destinations } from "@/data/destinations";

// Coordenadas aproximadas (centro turístico) de los 24 destinos curados del
// sitio -- necesarias para poder arrancar el flujo normal de generación de
// itinerario apenas se elige uno desde el buscador, sin depender de una
// segunda llamada a Geoapify (que para Bali fallaría igual, ver abajo).
const CURATED_COORDS: Record<string, { lat: number; lon: number }> = {
  dubai: { lat: 25.2048, lon: 55.2708 },
  paris: { lat: 48.8566, lon: 2.3522 },
  roma: { lat: 41.9028, lon: 12.4964 },
  barcelona: { lat: 41.3874, lon: 2.1686 },
  londres: { lat: 51.5074, lon: -0.1278 },
  "nueva-york": { lat: 40.7128, lon: -74.006 },
  tokio: { lat: 35.6762, lon: 139.6503 },
  cancun: { lat: 21.1619, lon: -86.8515 },
  miami: { lat: 25.7617, lon: -80.1918 },
  "rio-de-janeiro": { lat: -22.9068, lon: -43.1729 },
  "buenos-aires": { lat: -34.6037, lon: -58.3816 },
  cartagena: { lat: 10.391, lon: -75.4794 },
  lima: { lat: -12.0464, lon: -77.0428 },
  cusco: { lat: -13.5319, lon: -71.9675 },
  amsterdam: { lat: 52.3676, lon: 4.9041 },
  lisboa: { lat: 38.7223, lon: -9.1393 },
  praga: { lat: 50.0755, lon: 14.4378 },
  bangkok: { lat: 13.7563, lon: 100.5018 },
  bali: { lat: -8.5069, lon: 115.2625 }, // Ubud, el centro cultural/turístico de la isla
  marrakech: { lat: 31.6295, lon: -7.9811 },
  florencia: { lat: 43.7696, lon: 11.2558 },
  estambul: { lat: 41.0082, lon: 28.9784 },
  "ciudad-de-mexico": { lat: 19.4326, lon: -99.1332 },
  singapur: { lat: 1.3521, lon: 103.8198 },
  medellin: { lat: 6.2442, lon: -75.5812 },
  viena: { lat: 48.2082, lon: 16.3738 },
};

// Alias en inglés para los nombres que difieren bastante del español --
// destinations.ts solo tiene el nombre en español, pero el sitio sirve 6
// idiomas. Sin esto, un visitante en inglés escribiendo "Rome" o "Vienna"
// nunca matchearía "Roma"/"Viena". Cobertura solo es/en a propósito (mismo
// criterio que el resto del sitio: fr/it/de/pt quedan afuera salvo pedido
// explícito).
const EN_ALIASES: Record<string, string> = {
  roma: "rome",
  londres: "london",
  "nueva-york": "new york",
  viena: "vienna",
  florencia: "florence",
  praga: "prague",
  "ciudad-de-mexico": "mexico city",
  lisboa: "lisbon",
};

// Evita depender de rangos Unicode de marcas combinantes (frágiles de
// escribir/editar) -- los nombres en juego son español + unos pocos alias
// en inglés, así que alcanza con mapear las vocales acentuadas usadas.
const ACCENT_MAP: Record<string, string> = {
  á: "a", à: "a", ä: "a", â: "a",
  é: "e", è: "e", ë: "e", ê: "e",
  í: "i", ì: "i", ï: "i", î: "i",
  ó: "o", ò: "o", ö: "o", ô: "o",
  ú: "u", ù: "u", ü: "u", û: "u",
  ñ: "n",
};

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .split("")
    .map(ch => ACCENT_MAP[ch] || ch)
    .join("")
    .trim();
}

export interface CuratedMatch {
  slug: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
}

// Empareja lo que el usuario va tipeando contra los 24 destinos curados del
// sitio (los mismos que ya tienen página propia en /itinerario/<slug>).
// Resuelve dos problemas reales confirmados en vivo 2026-08-25:
// 1) Bali: Geoapify nunca la devuelve bajo `type=city` (es una isla/
//    provincia, no una ciudad puntual) -- "Bali" siempre resultaba en
//    Turquía/pueblos random, nunca la isla real.
// 2) Homónimos: ciudades turísticas conocidas (ej. "San Francisco, EEUU")
//    a veces no ganan por sobre homónimos menores (ej. "San Francisco,
//    Córdoba") en el ranking propio de Geoapify -- pedido explícito del
//    usuario de priorizar destinos turísticos reales sobre resultados
//    random.
export function matchCuratedDestinations(query: string, limit = 2): CuratedMatch[] {
  const q = normalize(query);
  if (q.length < 2) return [];
  const matches: CuratedMatch[] = [];
  for (const dest of destinations) {
    const coords = CURATED_COORDS[dest.slug];
    if (!coords) continue; // salvaguarda si se agrega un destino sin coords cargadas
    const name = normalize(dest.name);
    const aliasRaw = EN_ALIASES[dest.slug];
    const alias = aliasRaw ? normalize(aliasRaw) : null;
    if (name.startsWith(q) || (alias && alias.startsWith(q))) {
      matches.push({ slug: dest.slug, name: dest.name, country: dest.country, lat: coords.lat, lon: coords.lon });
      if (matches.length >= limit) break;
    }
  }
  return matches;
}
