import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { destinations } from "@/data/destinations";

const BASE_URL = "https://global-home-assist.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const destinationEntries: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${BASE_URL}/destino/${dest.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
    ...destinationEntries,
  ];
}
