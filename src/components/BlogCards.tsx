"use client";

import Link from "next/link";
import { BlogPost, categoryColors } from "@/data/blogPosts";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

type Copy = { featuredReadTime: (min: number) => string; readTimeMin: (min: number) => string; readArticle: string; read: string };

const T: Record<string, Copy> = {
  es: { featuredReadTime: min => `Destacado · ${min} min de lectura`, readTimeMin: min => `${min} min`, readArticle: "Leer artículo →", read: "Leer →" },
  en: { featuredReadTime: min => `Featured · ${min} min read`, readTimeMin: min => `${min} min`, readArticle: "Read article →", read: "Read →" },
  fr: { featuredReadTime: min => `À la une · ${min} min de lecture`, readTimeMin: min => `${min} min`, readArticle: "Lire l'article →", read: "Lire →" },
  it: { featuredReadTime: min => `In evidenza · ${min} min di lettura`, readTimeMin: min => `${min} min`, readArticle: "Leggi l'articolo →", read: "Leggi →" },
  de: { featuredReadTime: min => `Empfohlen · ${min} Min. Lesezeit`, readTimeMin: min => `${min} Min.`, readArticle: "Artikel lesen →", read: "Lesen →" },
  pt: { featuredReadTime: min => `Destaque · ${min} min de leitura`, readTimeMin: min => `${min} min`, readArticle: "Ler artigo →", read: "Ler →" },
};

export function FeaturedPostCard({ post }: { post: BlogPost }) {
  const catColor = categoryColors[post.category];
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "40px" }}>
      <article
        className="blog-featured-card"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(255,255,255,0.12)",
          borderRadius: "24px",
          padding: "40px",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "32px", flexWrap: "wrap" }}>
          <div style={{
            fontSize: "72px",
            lineHeight: 1,
            flexShrink: 0,
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "20px 24px",
            minWidth: "120px",
            textAlign: "center",
          }}>
            <span aria-hidden="true">{post.heroEmoji}</span>
          </div>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
              <span style={{
                padding: "3px 12px",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                background: catColor?.bg,
                color: catColor?.text,
                border: `1px solid ${catColor?.border}`,
              }}>
                {post.categoryLabel}
              </span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                {t.featuredReadTime(post.readTime)}
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: 700,
              color: "white",
              margin: "0 0 12px 0",
              lineHeight: 1.25,
            }}>
              {post.title}
            </h2>
            <p style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.65,
              margin: "0 0 20px 0",
            }}>
              {post.excerpt}
            </p>
            <span style={{ color: "#2ab5a0", fontWeight: 700, fontSize: "14px" }}>
              {t.readArticle}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function PostCard({ post }: { post: BlogPost }) {
  const catColor = categoryColors[post.category];
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <article
        className="blog-post-card"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "28px",
          height: "100%",
          boxSizing: "border-box" as const,
          display: "flex",
          flexDirection: "column" as const,
          cursor: "pointer",
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "16px" }} aria-hidden="true">{post.heroEmoji}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
          <span style={{
            padding: "2px 10px",
            borderRadius: "100px",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase" as const,
            letterSpacing: "0.08em",
            background: catColor?.bg,
            color: catColor?.text,
            border: `1px solid ${catColor?.border}`,
          }}>
            {post.categoryLabel}
          </span>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
            {t.readTimeMin(post.readTime)}
          </span>
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "white",
          margin: "0 0 10px 0",
          lineHeight: 1.3,
          flex: 1,
        }}>
          {post.title}
        </h2>
        <p style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.6,
          margin: "0 0 16px 0",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>
          {post.excerpt}
        </p>
        <span style={{ color: "#2ab5a0", fontWeight: 700, fontSize: "13px", marginTop: "auto" }}>
          {t.read}
        </span>
      </article>
    </Link>
  );
}

export function RelatedPostCard({ post }: { post: BlogPost }) {
  const rc = categoryColors[post.category];
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <div
        className="blog-related-card"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1.5px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <div style={{ fontSize: "28px", marginBottom: "10px" }} aria-hidden="true">{post.heroEmoji}</div>
        <span style={{
          padding: "2px 8px",
          borderRadius: "100px",
          fontSize: "10px",
          fontWeight: 700,
          textTransform: "uppercase" as const,
          letterSpacing: "0.07em",
          background: rc?.bg,
          color: rc?.text,
          border: `1px solid ${rc?.border}`,
          display: "inline-block",
          marginBottom: "8px",
        }}>
          {post.categoryLabel}
        </span>
        <h4 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "0.95rem",
          color: "white",
          fontWeight: 700,
          margin: "0 0 8px 0",
          lineHeight: 1.3,
        }}>
          {post.title}
        </h4>
        <span style={{ color: "#2ab5a0", fontSize: "12px", fontWeight: 700 }}>{t.read}</span>
      </div>
    </Link>
  );
}
