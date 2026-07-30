import type { Metadata, Viewport } from "next";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schemaMarkup";
import "./globals.css";

const BASE_URL = "https://global-home-assist.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2a6c",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: {
    google: "1_SkdVqmc1FEl4VCd45_gz4KI3eNTi1kUkUixBGjGfI",
  },
  title: {
    default: "Global Home Assist | Planificador de Viajes con IA",
    template: "%s | Global Home Assist",
  },
  description:
    "Creá tu itinerario de viaje personalizado con inteligencia artificial en segundos. Incluye fotos reales, mapas interactivos, rutas optimizadas, alertas de seguridad y servicios de viaje. Gratis.",
  keywords: [
    "planificador de viaje",
    "itinerario de viaje",
    "viaje con inteligencia artificial",
    "travel planner AI",
    "itinerario personalizado",
    "planear viaje gratis",
    "organizador de viajes",
    "mapa de viaje",
    "guía de viaje",
    "trip planner",
    "AI travel planner",
    "itinerary generator",
  ],
  authors: [{ name: "Global Home Assist", url: BASE_URL }],
  creator: "Global Home Assist",
  publisher: "Global Home Assist",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US", "fr_FR", "it_IT", "de_DE", "pt_BR"],
    url: BASE_URL,
    siteName: "Global Home Assist",
    title: "Global Home Assist | Planificador de Viajes con IA",
    description:
      "Creá tu itinerario de viaje personalizado con IA en segundos. Fotos reales, mapas interactivos, alertas de seguridad y todo lo que necesitás para tu próximo viaje.",
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Global Home Assist — Planificador de Viajes con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Home Assist | Planificador de Viajes con IA",
    description:
      "Creá tu itinerario de viaje personalizado con IA en segundos. Gratis.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "travel",
  icons: {
    icon: "/logo-icon.svg",
    apple: "/logo.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Global Home Assist",
  url: BASE_URL,
  description:
    "Planificador de viajes con inteligencia artificial. Genera itinerarios personalizados con fotos reales, mapas, rutas y alertas de seguridad.",
  applicationCategory: "TravelApplication",
  operatingSystem: "Web",
  inLanguage: ["es", "en", "fr", "it", "de", "pt"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Itinerarios generados con IA",
    "Fotos reales de cada atracción",
    "Mapas interactivos con rutas",
    "Alertas de seguridad y salud",
    "Información de emergencias locales",
    "Búsqueda de vuelos y hoteles",
    "Seguros de viaje",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Global Home Assist — Blog de viajes" href="/blog/rss.xml" />
        {/* Map library preload */}
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@geoapify/geocoder-autocomplete@2/styles/minimal.css"
        />
        {/* Font optimization for mobile LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Reduced font weights for mobile LCP — only critical weights */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Playfair+Display:wght@700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Playfair+Display:wght@700&display=swap"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
        />
      </head>
      <body>
        <SiteNav />
        {children}
        <Footer />
        <CookieBanner />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
