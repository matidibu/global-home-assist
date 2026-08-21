import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { blogPosts } from "@/data/blogPosts";
import { FeaturedPostCard, PostCard } from "@/components/BlogCards";
import { BlogCategoryFilter } from "@/components/BlogCategoryFilter";
import { ArrowLeft } from "lucide-react";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";
import { BlogNavLabel, BlogHubHeader, BlogEmptyState, BlogBottomCta } from "@/components/BlogHubChrome";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Blog de Viajes | Global Home Assist",
  description: "Guías de viaje honestas, itinerarios reales y consejos que ninguna agencia te da. Contenido original para viajeros que quieren más que una lista de atracciones.",
  openGraph: {
    type: "website",
    title: "Blog de Viajes — Global Home Assist",
    description: "Guías honestas, itinerarios reales y los errores que nadie menciona. Para viajeros que piensan antes de reservar.",
    url: `${BASE_URL}/blog`,
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Blog de Viajes — Global Home Assist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Viajes — Global Home Assist",
    description: "Guías honestas, itinerarios reales y los errores que nadie menciona.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

interface Props {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { categoria } = await searchParams;
  const activeCategory = categoria || "todos";

  const filtered = activeCategory === "todos"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0f1f5c 0%, #1a2a6c 40%, #1e3a5f 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Nav */}
      <nav style={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <Link href="/" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <ArrowLeft size={16} strokeWidth={2.5} /> Global Home Assist
        </Link>
        <BlogNavLabel />
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 100px" }}>

        <BlogHubHeader />

        {/* Category filter — client component */}
        <Suspense fallback={null}>
          <BlogCategoryFilter active={activeCategory} />
        </Suspense>

        {/* Publicidad */}
        <div style={{ marginBottom: "48px" }}>
          <AdSenseUnit
            slot={ADSENSE_SLOTS.blogList}
            format="auto"
          />
        </div>

        {filtered.length === 0 ? (
          <BlogEmptyState />
        ) : (
          <>
            {/* Featured post */}
            {featured && <FeaturedPostCard post={featured} />}

            {/* Grid */}
            {rest.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
              }}>
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </>
        )}

        <BlogBottomCta />

      </div>
    </main>
  );
}
