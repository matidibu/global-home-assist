import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { generateBreadcrumbSchema } from "@/lib/schemaMarkup";
import { getDestinationSlugForPost } from "@/data/blogDestinationLinks";
import { getDestinationPage } from "@/data/destinationPages";
import { BlogPostBody } from "@/components/BlogPostBody";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://global-home-assist.vercel.app";

// Always Spanish: the site has one URL per post (no locale routing), and
// metadata is generated server-side before the visitor's browser language
// is knowable -- same as every other page on the site.
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedDestSlug = getDestinationSlugForPost(post.slug);
  const relatedDestPage = relatedDestSlug ? getDestinationPage(relatedDestSlug) : undefined;
  const relatedDest = relatedDestPage
    ? { slug: relatedDestPage.slug, emoji: relatedDestPage.emoji, city: relatedDestPage.city, totalDays: relatedDestPage.totalDays }
    : undefined;

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostBody post={post} relatedPosts={relatedPosts} relatedDest={relatedDest} />
    </>
  );
}
