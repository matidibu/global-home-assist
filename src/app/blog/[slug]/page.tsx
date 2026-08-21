import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, categoryColors, ContentSection } from "@/data/blogPosts";
import { RelatedPostCard } from "@/components/BlogCards";
import { Lightbulb } from "lucide-react";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";
import { generateBreadcrumbSchema } from "@/lib/schemaMarkup";
import { getDestinationSlugForPost } from "@/data/blogDestinationLinks";
import { getDestinationPage } from "@/data/destinationPages";
import { BlogPostNav, BlogPostMeta, BlogPostCtaSection, RelatedDestinationBox, BlogPostAffiliateBanners, KeepReadingHeading } from "@/components/BlogPostChrome";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://global-home-assist.vercel.app";

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
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      tags: post.tags,
      images: [
        {
          url: `${BASE_URL}/sky.jpg`,
          width: 1200,
          height: 630,
          alt: post.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${BASE_URL}/sky.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
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
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}>
            <Lightbulb size={13} strokeWidth={2.2} /> {section.title}
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
        <BlogPostCtaSection
          key={index}
          href={section.city ? `/?city=${encodeURIComponent(section.city)}&country=${encodeURIComponent(section.country ?? '')}` : section.destination ? `/?destino=${section.destination}` : "/"}
          text={section.text}
        />
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
  const relatedDestSlug = getDestinationSlugForPost(post.slug);
  const relatedDest = relatedDestSlug ? getDestinationPage(relatedDestSlug) : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metaTitle,
    description: post.metaDescription,
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
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    inLanguage: "es",
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    isPartOf: { "@type": "Blog", name: "Global Home Assist Blog", url: `${BASE_URL}/blog` },
    wordCount: post.sections.reduce((sum, s) => sum + (s.text?.split(" ").length || 0) + (s.items?.reduce((itemSum, item) => itemSum + item.split(" ").length, 0) || 0), 0),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
  ]);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BlogPostNav />

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
          <BlogPostMeta readTime={post.readTime} publishDate={post.publishDate} />
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
      <article style={{ maxWidth: "820px", margin: "0 auto", padding: "40px 24px 0" }}>
        {post.sections.map((section, i) => renderSection(section, i))}
      </article>

      {/* Related destination guide */}
      {relatedDest && (
        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 24px" }}>
          <RelatedDestinationBox slug={relatedDest.slug} emoji={relatedDest.emoji} city={relatedDest.city} totalDays={relatedDest.totalDays} />
        </div>
      )}

      {/* AdSense - In-article ad */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px 0" }}>
        <AdSenseUnit
          slot={ADSENSE_SLOTS.blogPost}
          format="auto"
        />
      </div>

      {/* Affiliate banners */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "32px 24px 48px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <BlogPostAffiliateBanners tourQuery={post.tags[0] ?? "travel"} />
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div style={{
          maxWidth: "820px",
          margin: "0 auto",
          padding: "0 24px 80px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "48px",
        }}>
          <KeepReadingHeading />
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
