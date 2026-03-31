import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  },
  async redirects() {
    return [
      { source: "/blog/viajar-europa-700-euros",      destination: "/blog/viaje-europa-presupuesto-real",          permanent: true },
      { source: "/blog/dubai-sin-filtros",            destination: "/blog/dubai-guia-honesta-viajero",             permanent: true },
      { source: "/blog/roma-48-horas",                destination: "/blog/roma-48-horas-itinerario",               permanent: true },
      { source: "/blog/barcelona-vs-madrid",          destination: "/blog/barcelona-vs-madrid-cual-elegir",        permanent: true },
      { source: "/blog/errores-que-arruinan-viaje",   destination: "/blog/errores-comunes-al-viajar",              permanent: true },
      { source: "/blog/tokio-primera-vez",            destination: "/blog/tokio-guia-primer-viaje",                permanent: true },
      { source: "/blog/bali-2026",                    destination: "/blog/bali-guia-honesta-2026",                 permanent: true },
      { source: "/blog/buenos-aires-guia",            destination: "/blog/buenos-aires-guia-viajero-extranjero",   permanent: true },
      { source: "/blog/vuelos-latinoamerica-europa",  destination: "/blog/vuelos-latinoamerica-europa-guia",       permanent: true },
      { source: "/blog/viajar-mascotas",              destination: "/blog/viajar-con-mascotas-guia-completa",      permanent: true },
      { source: "/blog/viajar-mundo-en-conflicto",    destination: "/blog/viajar-en-tiempos-de-conflicto-belico",  permanent: true },
      { source: "/blog/viajar-hijos-chicos",          destination: "/blog/viajar-con-hijos-chicos",               permanent: true },
      { source: "/blog/viajar-adolescentes",          destination: "/blog/viajar-con-adolescentes",               permanent: true },
      { source: "/blog/viajes-parejas-50",            destination: "/blog/viaje-para-parejas-mayores-50",          permanent: true },
      { source: "/blog/viajar-solo-65",               destination: "/blog/viaje-solo-tercera-edad",               permanent: true },
      { source: "/blog/viajar-hijos-adultos",         destination: "/blog/viajar-con-hijos-adultos",              permanent: true },
      { source: "/blog/paris-2026",                   destination: "/blog/paris-guia-completa-2026",              permanent: true },
      { source: "/blog/cancun-riviera-maya",          destination: "/blog/cancun-riviera-maya-guia",              permanent: true },
      { source: "/blog/cusco-machu-picchu",           destination: "/blog/cusco-machu-picchu-guia",               permanent: true },
      { source: "/blog/lisboa-2026",                  destination: "/blog/lisboa-portugal-guia-2026",             permanent: true },
      { source: "/blog/miami-2026",                   destination: "/blog/miami-guia-viajero-2026",               permanent: true },
      { source: "/blog/visa-schengen",                destination: "/blog/visa-schengen-latinoamerica",           permanent: true },
      { source: "/blog/equipaje-de-mano",             destination: "/blog/viajar-solo-equipaje-de-mano",          permanent: true },
    ]
  },
}

export default nextConfig