import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, categoryColors, ContentSection } from "@/data/blogPosts";
import { RelatedPostCard } from "@/components/BlogCards";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://global-home-assist.vercel.app/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      tags: post.tags,
    },
    alternates: {
      canonical: `https://global-home-assist.vercel.app/blog/${post.slug}`,
    },
  };
}

function renderSection(section: ContentSection, index: number) {
  switch (section.type) {
    case "intro":
      return (
        <p key={index} style={{
          fontSize: "clamp(15px, 2.5vw, 17px)",
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.8,
          marginBottom: "32px",
          borderLeft: "3px solid #2ab5a0",
          paddingLeft: "20px",
          fontStyle: "italic",
        }}>
          {section.text}
        </p>
      );

    case "h2":
      return (
        <h2 key={index} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "white",
          margin: "40px 0 16px 0",
          lineHeight: 1.25,
        }}>
          {section.text}
        </h2>
      );

    case "h3":
      return (
        <h3 key={index} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.9)",
          margin: "28px 0 12px 0",
        }}>
          {section.text}
        </h3>
      );

    case "p":
      return (
        <p key={index} style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.8,
          marginBottom: "16px",
        }}>
          {section.text}
        </p>
      );

    case "list":
      return (
        <div key={index} style={{ margin: "20px 0 24px 0" }}>
          {section.heading && (
            <p style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px",
            }}>
              {section.heading}
            </p>
          )}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {section.items.map((item, i) => (
              <li key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "10px",
                fontSize: "14px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
              }}>
                <span style={{ color: "#2ab5a0", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "callout":
      return (
        <div key={index} style={{
          background: "rgba(42,181,160,0.1)",
          border: "1.5px solid rgba(42,181,160,0.25)",
          borderRadius: "16px",
          padding: "20px 24px",
          margin: "24px 0",
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>{section.emoji}</span>
          <p style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
            margin: 0,
          }}>
            {section.text}
          </p>
        </div>
      );

    case "tip":
      return (
        <div key={index} style={{
          background: "rgba(255,255,255,0.05)",
          border: "1.5px solid rgba(255,255,255,0.12)",
          borderRadius: "16px",
          padding: "20px 24px",
          margin: "24px 0",
        }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#2ab5a0",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: "0 0 8px 0",
          }}>
            💡 {section.title}
          </p>
          <p style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            margin: 0,
          }}>
            {section.text}
          </p>
        </div>
      );

    case "cta":
      return (
        <div key={index} style={{
          background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
          borderRadius: "20px",
          padding: "32px",
          textAlign: "center",
          margin: "40px 0",
          boxShadow: "0 12px 40px rgba(42,181,160,0.3)",
        }}>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", margin: "0 0 16px 0" }}>
            ✨ Planificador de viajes con inteligencia artificial
          </p>
          <Link
            href={section.destination ? `/?destino=${section.destination}` : "/"}
            style={{
              display: "inline-block",
              background: "white",
              color: "#1a2a6c",
              padding: "14px 40px",
              borderRadius: "14px",
              fontSize: "15px",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            }}
          >
            ✈️ {section.text}
          </Link>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: "12px 0 0 0" }}>
            Gratis · Sin registro · Listo en 30 segundos
          </p>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const catColor = categoryColors[post.category];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metaTitle,
    description: post.metaDescription,
    author: { "@type": "Organization", name: "Global Home Assist" },
    publisher: { "@type": "Organization", name: "Global Home Assist", url: "https://global-home-assist.vercel.app" },
    datePublished: post.publishDate,
    inLanguage: "es",
    keywords: post.tags.join(", "),
    url: `https://global-home-assist.vercel.app/blog/${post.slug}`,
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0f1f5c 0%, #1a2a6c 40%, #1e3a5f 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Nav */}
      <nav style={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        maxWidth: "820px",
        margin: "0 auto",
      }}>
        <Link href="/blog" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          ← Blog
        </Link>
        <Link href="/" style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 600 }}>
          Global Home Assist
        </Link>
      </nav>

      {/* Hero */}
      <div style={{
        maxWidth: "820px",
        margin: "0 auto",
        padding: "48px 24px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          <span style={{
            padding: "4px 14px",
            borderRadius: "100px",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            background: catColor?.bg,
            color: catColor?.text,
            border: `1px solid ${catColor?.border}`,
          }}>
            {post.categoryLabel}
          </span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            {post.readTime} min de lectura
          </span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>·</span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            {new Date(post.publishDate).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </span>
        </div>

        <div style={{ fontSize: "56px", marginBottom: "20px" }}>{post.heroEmoji}</div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 16px 0",
          lineHeight: 1.15,
        }}>
          {post.title}
        </h1>

        <p style={{
          fontSize: "16px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.65,
          margin: 0,
          maxWidth: "700px",
        }}>
          {post.excerpt}
        </p>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "20px" }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{
              padding: "3px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.45)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article body */}
      <article style={{ maxWidth: "820px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {post.sections.map((section, i) => renderSection(section, i))}
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div style={{
          maxWidth: "820px",
          margin: "0 auto",
          padding: "0 24px 80px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "48px",
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: "24px",
          }}>
            Seguí leyendo
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px",
          }}>
            {relatedPosts.map((related) => (
              <RelatedPostCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
