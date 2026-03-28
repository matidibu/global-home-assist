import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { blogPosts } from "@/data/blogPosts";
import { FeaturedPostCard, PostCard } from "@/components/BlogCards";
import { BlogCategoryFilter } from "@/components/BlogCategoryFilter";
import { ArrowLeft, Plane } from "lucide-react";

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
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Blog de Viajes
        </span>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 100px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(42,181,160,0.15)",
            border: "1px solid rgba(42,181,160,0.3)",
            borderRadius: "100px",
            padding: "4px 16px",
            fontSize: "11px",
            fontWeight: 700,
            color: "#2ab5a0",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "16px",
          }}>
            Contenido original · Actualizado regularmente
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 12px 0",
            lineHeight: 1.1,
          }}>
            La revista del viajero inteligente
          </h1>
          <p style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "600px",
            lineHeight: 1.65,
            margin: 0,
          }}>
            Guías honestas, itinerarios reales y los errores que nadie menciona.
            Sin listas genéricas. Sin información de 2019. Sin filtros de Instagram.
          </p>
        </div>

        {/* Category filter — client component */}
        <Suspense fallback={null}>
          <BlogCategoryFilter active={activeCategory} />
        </Suspense>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.4)", fontSize: "15px" }}>
            No hay artículos en esta categoría todavía.
          </div>
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

        {/* Bottom CTA */}
        <div style={{
          marginTop: "64px",
          background: "linear-gradient(135deg, rgba(42,181,160,0.15), rgba(26,42,108,0.3))",
          border: "1.5px solid rgba(42,181,160,0.25)",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
        }}>
          <p style={{ color: "#2ab5a0", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 0" }}>
            ¿Listo para planificar?
          </p>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            color: "white",
            fontWeight: 700,
            margin: "0 0 16px 0",
          }}>
            De la lectura al itinerario en 30 segundos
          </h3>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", margin: "0 0 24px 0" }}>
            Usá la IA de Global Home Assist para convertir cualquier destino en un itinerario personalizado con mapas, fotos y rutas optimizadas.
          </p>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
            color: "white",
            padding: "14px 40px",
            borderRadius: "14px",
            fontSize: "15px",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(42,181,160,0.35)",
          }}>
            <Plane size={16} strokeWidth={2.5} /> Planificar mi viaje gratis
          </Link>
        </div>

      </div>
    </main>
  );
}
