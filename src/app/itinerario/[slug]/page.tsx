import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateBreadcrumbSchema } from "@/lib/schemaMarkup";
import { getDestinationPage, getAllDestinationSlugs } from "@/data/destinationPages";
import { getBlogSlugsForDestination } from "@/data/blogDestinationLinks";
import { getBlogPost } from "@/data/blogPosts";
import { itineraryPlaces } from "@/data/itineraryPlaces";
import FloatingCTA from "@/components/FloatingCTA";
import { DestinationGuideBody } from "@/components/DestinationGuideBody";

const BASE_URL = "https://global-home-assist.vercel.app";

// ─── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────
// Always Spanish: the site has one URL per destination (no locale routing),
// and metadata is generated server-side where the visitor's browser language
// isn't known yet -- same as every other page on the site.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationPage(slug);
  if (!dest) return {};
  return {
    title: dest.metaTitle,
    description: dest.metaDescription,
    keywords: dest.keywords,
    openGraph: {
      title: `${dest.emoji} ${dest.metaTitle}`,
      description: dest.metaDescription,
      url: `${BASE_URL}/itinerario/${dest.slug}`,
      type: "article",
      images: [
        {
          url: `${BASE_URL}/sky.jpg`,
          width: 1200,
          height: 630,
          alt: dest.heroTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dest.metaTitle,
      description: dest.metaDescription,
      images: [`${BASE_URL}/sky.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}/itinerario/${dest.slug}`,
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function DestinationItineraryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestinationPage(slug);
  if (!dest) notFound();

  const generatorUrl = `/?city=${encodeURIComponent(dest.city)}&country=${encodeURIComponent(dest.countryCode)}`;

  // Named-place photos + coordinates for this destination, keyed by day number.
  const placesByDay = itineraryPlaces[dest.slug] ?? {};

  const relatedBlogPost = getBlogSlugsForDestination(dest.slug)
    .map((s) => getBlogPost(s))
    .find(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dest.metaTitle,
    description: dest.metaDescription,
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
    datePublished: dest.publishDate,
    dateModified: dest.publishDate,
    inLanguage: "es",
    keywords: dest.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/itinerario/${dest.slug}`,
    },
    about: {
      "@type": "TouristDestination",
      name: dest.city,
      address: { "@type": "PostalAddress", addressCountry: dest.country },
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Itinerarios", url: `${BASE_URL}/itinerario` },
    { name: dest.city, url: `${BASE_URL}/itinerario/${dest.slug}` },
  ]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f4ff 0%, #e8f7f5 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Floating CTA — appears after scrolling */}
      <FloatingCTA generatorUrl={generatorUrl} city={dest.city} />

      <DestinationGuideBody
        dest={dest}
        generatorUrl={generatorUrl}
        placesByDay={placesByDay}
        relatedBlogPost={relatedBlogPost}
      />
    </div>
  );
}
