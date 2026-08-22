import type { Metadata } from "next";
import { searchPlaceImage } from "@/lib/imageSearch";
import { getBlogPost } from "@/data/blogPosts";
import { generateBreadcrumbSchema } from "@/lib/schemaMarkup";
import { baliItinerary } from "@/data/baliItinerary";
import { BaliGuideBody } from "@/components/BaliGuideBody";

export const revalidate = 86400; // revalidar imágenes 1 vez por día

const BASE_URL = "https://global-home-assist.vercel.app";

// Always Spanish: the site has one URL per destination (no locale routing),
// and metadata is generated server-side before the visitor's browser
// language is knowable — same as every other page on the site.
export const metadata: Metadata = {
  title: "Itinerario de 5 días en Bali, Indonesia",
  description:
    "Descubrí Bali en 5 días: terrazas de arroz de Tegallalang, templo de Tanah Lot, Ubud, Seminyak, Uluwatu y el volcán Batur. Itinerario completo generado con inteligencia artificial, con rutas, horarios, precios y consejos de viaje.",
  keywords: [
    "itinerario bali",
    "que hacer en bali",
    "bali 5 dias",
    "viaje bali indonesia",
    "bali guia de viaje",
    "bali itinerario completo",
    "bali lugares para visitar",
    "templos bali",
    "playas bali",
    "ubud bali",
    "bali desde españa",
    "vuelos españa bali",
    "bali para españoles",
  ],
  openGraph: {
    type: "article",
    title: "Itinerario de 5 días en Bali, Indonesia — Generado con IA",
    description:
      "Terrazas de arroz, templos hindúes, playas de surf y volcanes. El itinerario perfecto para descubrir Bali en 5 días.",
    url: `${BASE_URL}/itinerario/bali`,
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Itinerario de 5 días en Bali, Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Itinerario de 5 días en Bali, Indonesia — Generado con IA",
    description:
      "Terrazas de arroz, templos hindúes, playas de surf y volcanes. El itinerario perfecto para descubrir Bali en 5 días.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/itinerario/bali`,
  },
};

export default async function BaliItineraryPage() {
  const spainGuidePost = getBlogPost("bali-desde-espana-guia-vuelos-presupuesto-visado");
  const spainGuide = spainGuidePost
    ? { slug: spainGuidePost.slug, title: spainGuidePost.title, excerpt: spainGuidePost.excerpt }
    : undefined;

  // Buscar todas las imágenes en paralelo (siempre sobre los nombres en
  // español, que son la clave estable independientemente del idioma mostrado)
  const allActivities = baliItinerary.days.flatMap((d) => d.activities);
  const imageUrls = await Promise.all(
    allActivities.map((a) =>
      searchPlaceImage(a.name, "Bali", a.category, a.lat, a.lng).catch(() => null)
    )
  );

  const imageMap: Record<string, string> = {};
  allActivities.forEach((a, i) => {
    if (imageUrls[i]) imageMap[a.name] = imageUrls[i] as string;
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Itinerario de 5 días en Bali, Indonesia",
    description:
      "Descubrí Bali en 5 días: terrazas de arroz de Tegallalang, templo de Tanah Lot, Ubud, Seminyak, Uluwatu y el volcán Batur. Itinerario completo con rutas, horarios, precios y consejos de viaje.",
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/sky.jpg`,
      width: 1200,
      height: 630,
    },
    author: { "@type": "Organization", name: "Global Home Assist" },
    publisher: {
      "@type": "Organization",
      name: "Global Home Assist",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 512, height: 512 },
    },
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
    inLanguage: "es",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/itinerario/bali`,
    },
    about: {
      "@type": "TouristDestination",
      name: "Bali",
      address: { "@type": "PostalAddress", addressCountry: "Indonesia" },
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Itinerarios", url: `${BASE_URL}/itinerario` },
    { name: "Bali", url: `${BASE_URL}/itinerario/bali` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BaliGuideBody imageMap={imageMap} spainGuide={spainGuide} />
    </>
  );
}
