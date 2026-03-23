"use client";

import Link from "next/link";
import { blogPosts, categoryColors } from "@/data/blogPosts";
import { BookOpen, ArrowRight, TrendingUp } from "lucide-react";

// Artículos destacados para mostrar en homepage (los 3 más recientes o más relevantes)
const FEATURED_SLUGS = [
  "viajar-con-mascotas-guia-completa",
  "tokio-guia-primer-viaje",
  "vuelos-latinoamerica-europa-guia",
];

export function HomeBlogTeaser() {
  const featured = FEATURED_SLUGS
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  const totalArticles = blogPosts.length;

  return (
    <div style={{
      marginTop: "40px",
      background: "linear-gradient(135deg, rgba(26,42,108,0.6), rgba(26,42,108,0.4))",
      border: "1.5px solid rgba(255,255,255,0.12)",
      borderRadius: "28px",
      padding: "36px 32px",
      backdropFilter: "blur(10px)",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <BookOpen size={18} color="#2ab5a0" strokeWidth={2} />
            <span style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "#2ab5a0",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}>
              Blog de Viajes
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontWeight: 700,
            color: "white",
            margin: 0,
            lineHeight: 1.2,
          }}>
            Guías para viajeros inteligentes
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", margin: "6px 0 0 0" }}>
            {totalArticles} artículos originales · Actualizados en 2026
          </p>
        </div>
        <Link href="/blog" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(42,181,160,0.15)",
          border: "1px solid rgba(42,181,160,0.35)",
          borderRadius: "100px",
          padding: "8px 18px",
          fontSize: "13px",
          fontWeight: 700,
          color: "#2ab5a0",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}>
          Ver todas <ArrowRight size={13} strokeWidth={2.5} />
        </Link>
      </div>

      {/* Stats strip */}
      <div style={{
        display: "flex",
        gap: "16px",
        marginBottom: "24px",
        flexWrap: "wrap",
      }}>
        {[
          { label: "Destinos", count: blogPosts.filter(p => p.category === "destinos").length },
          { label: "Guías", count: blogPosts.filter(p => p.category === "guias").length },
          { label: "Presupuesto", count: blogPosts.filter(p => p.category === "presupuesto").length },
          { label: "Consejos", count: blogPosts.filter(p => p.category === "consejos").length },
        ].map((cat) => (
          <Link key={cat.label} href={`/blog?categoria=${cat.label.toLowerCase()}`} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 12px",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: 600,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
          }}>
            <span style={{ color: "#2ab5a0", fontWeight: 800 }}>{cat.count}</span>
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Article cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "14px",
      }}>
        {featured.map((post) => {
          const cat = categoryColors[post.category];
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "18px",
                cursor: "pointer",
                transition: "border-color 0.15s, background 0.15s",
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(42,181,160,0.4)";
                  el.style.background = "rgba(255,255,255,0.11)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.background = "rgba(255,255,255,0.07)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ fontSize: "28px" }}>{post.heroEmoji}</span>
                  <span style={{
                    padding: "2px 8px",
                    borderRadius: "100px",
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    background: cat?.bg,
                    color: cat?.text,
                    border: `1px solid ${cat?.border}`,
                  }}>
                    {post.categoryLabel}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "white",
                  margin: "0 0 8px 0",
                  lineHeight: 1.3,
                }}>
                  {post.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                    {post.readTime} min
                  </span>
                  <span style={{ color: "#2ab5a0", fontSize: "12px", fontWeight: 700 }}>Leer →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom teaser */}
      <div style={{
        marginTop: "20px",
        paddingTop: "16px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <TrendingUp size={14} color="#2ab5a0" strokeWidth={2} />
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
          También: <Link href="/blog/viajar-con-mascotas-guia-completa" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600 }}>viajar con mascotas</Link>
          {" · "}
          <Link href="/blog/viajar-en-tiempos-de-conflicto-belico" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600 }}>zonas de conflicto</Link>
          {" · "}
          <Link href="/blog/bali-guia-honesta-2026" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600 }}>Bali 2026</Link>
          {" · "}
          <Link href="/blog?categoria=presupuesto" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600 }}>presupuesto</Link>
        </p>
      </div>
    </div>
  );
}
