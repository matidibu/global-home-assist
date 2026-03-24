import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/?s=",   // shared itinerary URLs — dynamic, no indexar
          "/api/",  // API routes
        ],
      },
    ],
    sitemap: "https://global-home-assist.vercel.app/sitemap.xml",
  };
}
