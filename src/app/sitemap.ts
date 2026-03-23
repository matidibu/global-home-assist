import { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";

const BASE = "https://global-home-assist.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const destinationPages = destinations.map(d => ({
    url: `${BASE}/destino/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...destinationPages,
  ];
}
