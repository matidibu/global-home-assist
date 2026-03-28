import type { Metadata, Viewport } from "next";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import "./globals.css";

const META_PIXEL_ID = "939419192381738";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
        />
        {/* Travelpayouts site verification */}
        <script data-noptimize="1" data-cfasync="false" data-wpfc-render="false" dangerouslySetInnerHTML={{ __html: `(function(){var script=document.createElement("script");script.async=1;script.src='https://emrld.ltd/NTEwNjM3.js?t=510637';document.head.appendChild(script);})();` }} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WEN7PWJEWK" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-WEN7PWJEWK');` }} />
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:"none"}} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} /></noscript>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
