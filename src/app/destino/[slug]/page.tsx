import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Coins, Globe, Backpack, Plane, Sparkles, ChevronRight, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map(d => ({ slug: d.slug }));
}

const BASE_URL = "https://global-home-assist.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  return {
    title: `Itinerario de viaje a ${dest.name} | Global Home Assist`,
    description: `Planificá tu viaje a ${dest.name}, ${dest.country} con inteligencia artificial. ${dest.description.slice(0, 120)}...`,
    openGraph: {
      type: "website",
      title: `Viaje a ${dest.name} — Itinerario personalizado con IA`,
      description: dest.description,
      url: `${BASE_URL}/destino/${dest.slug}`,
      images: [
        {
          url: `${BASE_URL}/sky.jpg`,
          width: 1200,
          height: 630,
          alt: `Viaje a ${dest.name} — Global Home Assist`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Viaje a ${dest.name} — Itinerario personalizado con IA`,
      description: `Planificá tu viaje a ${dest.name}, ${dest.country} con inteligencia artificial.`,
      images: [`${BASE_URL}/sky.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}/destino/${dest.slug}`,
    },
  };
}

export default async function DestinoPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const relatedPosts = blogPosts
    .filter(p =>
      p.slug.includes(slug) ||
      p.title.toLowerCase().includes(dest.name.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(dest.name.toLowerCase())
    )
    .slice(0, 3);

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
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <Link href="/" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <ArrowLeft size={16} strokeWidth={2.5} /> Global Home Assist
        </Link>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
          {dest.continent} · {dest.country}
        </span>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>{dest.emoji}</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 12px 0",
            lineHeight: 1.1,
          }}>
            {dest.name}
          </h1>
          <p style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            color: "#2ab5a0",
            fontWeight: 600,
            margin: "0 0 20px 0",
            fontStyle: "italic",
          }}>
            {dest.tagline}
          </p>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.75,
            maxWidth: "680px",
            margin: "0 auto",
          }}>
            {dest.description}
          </p>
        </div>

        {/* CTA principal */}
        <div style={{
          background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
          borderRadius: "20px",
          padding: "32px",
          textAlign: "center",
          marginBottom: "48px",
          boxShadow: "0 12px 40px rgba(42,181,160,0.35)",
        }}>
          <p style={{ color: "white", fontSize: "14px", margin: "0 0 8px 0", opacity: 0.85, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <Sparkles size={14} /> Planificador de viajes con inteligencia artificial
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            color: "white",
            fontWeight: 700,
            margin: "0 0 20px 0",
          }}>
            Generá tu itinerario personalizado para {dest.name}
          </h2>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "white",
            color: "#1a2a6c",
            padding: "14px 40px",
            borderRadius: "14px",
            fontSize: "15px",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            letterSpacing: "0.01em",
          }}>
            <Plane size={16} strokeWidth={2.5} /> Planificar mi viaje gratis <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: "12px 0 0 0" }}>
            Gratis · Sin registro · Listo en 30 segundos
          </p>
        </div>

        {/* Highlights */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "20px",
          }}>
            Lo mejor de {dest.name}
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            {dest.highlights.map((h, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "20px",
                backdropFilter: "blur(10px)",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{h.icon}</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "15px", margin: "0 0 6px 0" }}>
                  {h.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.55, margin: 0 }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Info práctica */}
        <div style={{
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "28px",
          marginBottom: "48px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: "20px",
          }}>
            Información práctica
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { icon: <Calendar size={18} strokeWidth={1.8} />, label: "Mejor época", value: dest.bestSeason },
              { icon: <Coins size={18} strokeWidth={1.8} />, label: "Moneda", value: dest.currency },
              { icon: <Globe size={18} strokeWidth={1.8} />, label: "Idioma", value: dest.language },
              { icon: <Backpack size={18} strokeWidth={1.8} />, label: "Presupuesto estimado", value: dest.avgBudget },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "#2ab5a0", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "3px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artículos relacionados del blog */}
        {relatedPosts.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <BookOpen size={18} color="#2ab5a0" strokeWidth={2} />
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                color: "white", fontSize: "1.4rem",
                fontWeight: 700, margin: 0,
              }}>
                Artículos sobre {dest.name}
              </h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "14px",
            }}>
              {relatedPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div className="destino-blog-card" style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "14px",
                    padding: "18px",
                    transition: "border-color 0.15s, background 0.15s",
                  }}>
                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>{post.heroEmoji}</div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.95rem", fontWeight: 700,
                      color: "white", margin: "0 0 8px 0", lineHeight: 1.3,
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      fontSize: "12px", color: "rgba(255,255,255,0.6)",
                      margin: "0 0 12px 0", lineHeight: 1.5,
                      display: "-webkit-box", WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical", overflow: "hidden",
                    } as React.CSSProperties}>
                      {post.excerpt}
                    </p>
                    <span style={{ color: "#2ab5a0", fontSize: "12px", fontWeight: 700 }}>
                      Leer artículo →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA final */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "16px" }}>
            ¿Listo para vivir {dest.name}?
          </p>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
            color: "white",
            padding: "14px 40px",
            borderRadius: "14px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(26,42,108,0.5)",
          }}>
            <Plane size={16} strokeWidth={2.5} /> Crear mi itinerario para {dest.name}
          </Link>
        </div>

      </div>
    </main>
  );
}
