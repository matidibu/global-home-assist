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

type Copy = {
  eyebrow: string;
  title: string;
  articlesCount: (n: number) => string;
  seeAll: string;
  categories: { destinos: string; guias: string; presupuesto: string; consejos: string };
  read: string;
  also: string;
  petsLink: string;
  conflictLink: string;
  baliLink: string;
  budgetLink: string;
};

// Wrapper chrome only (title/subtitle/labels) is translated here -- the
// actual post titles/categoryLabel/content come from blogPosts.ts, which is
// Spanish-only (a much bigger separate translation task, not done yet).
const T: Record<string, Copy> = {
  es: {
    eyebrow: "Blog de Viajes",
    title: "Guías para viajeros inteligentes",
    articlesCount: n => `${n} artículos originales · Actualizados en 2026`,
    seeAll: "Ver todas",
    categories: { destinos: "Destinos", guias: "Guías", presupuesto: "Presupuesto", consejos: "Consejos" },
    read: "Leer →",
    also: "También:",
    petsLink: "viajar con mascotas",
    conflictLink: "zonas de conflicto",
    baliLink: "Bali 2026",
    budgetLink: "presupuesto",
  },
  en: {
    eyebrow: "Travel Blog",
    title: "Guides for smart travelers",
    articlesCount: n => `${n} original articles · Updated in 2026`,
    seeAll: "See all",
    categories: { destinos: "Destinations", guias: "Guides", presupuesto: "Budget", consejos: "Tips" },
    read: "Read →",
    also: "Also:",
    petsLink: "traveling with pets",
    conflictLink: "conflict zones",
    baliLink: "Bali 2026",
    budgetLink: "budget",
  },
  fr: {
    eyebrow: "Blog Voyage",
    title: "Guides pour voyageurs avisés",
    articlesCount: n => `${n} articles originaux · Mis à jour en 2026`,
    seeAll: "Voir tout",
    categories: { destinos: "Destinations", guias: "Guides", presupuesto: "Budget", consejos: "Conseils" },
    read: "Lire →",
    also: "Aussi :",
    petsLink: "voyager avec des animaux",
    conflictLink: "zones de conflit",
    baliLink: "Bali 2026",
    budgetLink: "budget",
  },
  it: {
    eyebrow: "Blog di Viaggio",
    title: "Guide per viaggiatori intelligenti",
    articlesCount: n => `${n} articoli originali · Aggiornati nel 2026`,
    seeAll: "Vedi tutte",
    categories: { destinos: "Destinazioni", guias: "Guide", presupuesto: "Budget", consejos: "Consigli" },
    read: "Leggi →",
    also: "Anche:",
    petsLink: "viaggiare con animali",
    conflictLink: "zone di conflitto",
    baliLink: "Bali 2026",
    budgetLink: "budget",
  },
  de: {
    eyebrow: "Reiseblog",
    title: "Guides für clevere Reisende",
    articlesCount: n => `${n} Originalartikel · Aktualisiert 2026`,
    seeAll: "Alle ansehen",
    categories: { destinos: "Reiseziele", guias: "Guides", presupuesto: "Budget", consejos: "Tipps" },
    read: "Lesen →",
    also: "Außerdem:",
    petsLink: "Reisen mit Haustieren",
    conflictLink: "Konfliktgebiete",
    baliLink: "Bali 2026",
    budgetLink: "Budget",
  },
  pt: {
    eyebrow: "Blog de Viagens",
    title: "Guias para viajantes inteligentes",
    articlesCount: n => `${n} artigos originais · Atualizados em 2026`,
    seeAll: "Ver todos",
    categories: { destinos: "Destinos", guias: "Guias", presupuesto: "Orçamento", consejos: "Dicas" },
    read: "Ler →",
    also: "Também:",
    petsLink: "viajar com animais de estimação",
    conflictLink: "zonas de conflito",
    baliLink: "Bali 2026",
    budgetLink: "orçamento",
  },
};

interface Props {
  language?: string;
}

export function HomeBlogTeaser({ language = "es" }: Props) {
  const t = T[language] || T.es;
  const featured = FEATURED_SLUGS
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  const totalArticles = blogPosts.length;

  return (
    <div style={{
      marginTop: "40px",
      background: "rgba(8,16,54,0.87)",
      border: "1px solid rgba(255,255,255,0.13)",
      borderRadius: "28px",
      padding: "36px 32px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
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
              {t.eyebrow}
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
            {t.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "13px", margin: "6px 0 0 0" }}>
            {t.articlesCount(totalArticles)}
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
          {t.seeAll} <ArrowRight size={13} strokeWidth={2.5} />
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
          { label: t.categories.destinos, urlKey: "destinos", count: blogPosts.filter(p => p.category === "destinos").length },
          { label: t.categories.guias, urlKey: "guias", count: blogPosts.filter(p => p.category === "guias").length },
          { label: t.categories.presupuesto, urlKey: "presupuesto", count: blogPosts.filter(p => p.category === "presupuesto").length },
          { label: t.categories.consejos, urlKey: "consejos", count: blogPosts.filter(p => p.category === "consejos").length },
        ].map((cat) => (
          <Link key={cat.label} href={`/blog?categoria=${cat.urlKey}`} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 12px",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: 600,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.85)",
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
              <div
                className="blog-teaser-card"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "18px",
                  cursor: "pointer",
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
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.62)" }}>
                    {post.readTime} min
                  </span>
                  <span style={{ color: "#2ab5a0", fontSize: "12px", fontWeight: 700 }}>{t.read}</span>
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
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.68)", margin: 0 }}>
          {t.also} <Link href="/blog/viajar-con-mascotas-guia-completa" style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", fontWeight: 600 }}>{t.petsLink}</Link>
          {" · "}
          <Link href="/blog/viajar-en-tiempos-de-conflicto-belico" style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", fontWeight: 600 }}>{t.conflictLink}</Link>
          {" · "}
          <Link href="/blog/bali-guia-honesta-2026" style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", fontWeight: 600 }}>{t.baliLink}</Link>
          {" · "}
          <Link href="/blog?categoria=presupuesto" style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", fontWeight: 600 }}>{t.budgetLink}</Link>
        </p>
      </div>
    </div>
  );
}
