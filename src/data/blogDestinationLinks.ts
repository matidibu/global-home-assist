// Explicit blog-post <-> curated-destination-guide cross links.
// Only pairs where the blog post is clearly about that single city — used to
// strengthen internal linking between /blog and /itinerario so Google's crawler
// discovers both from each other instead of relying only on the sitemap.
export const BLOG_TO_DESTINATION: Record<string, string> = {
  "dubai-guia-honesta-viajero": "dubai",
  "roma-48-horas-itinerario": "roma",
  "barcelona-vs-madrid-cual-elegir": "barcelona",
  "tokio-guia-primer-viaje": "tokio",
  "buenos-aires-guia-viajero-extranjero": "buenos-aires",
  "paris-guia-completa-2026": "paris",
  "nueva-york-primera-vez": "nueva-york",
  "cancun-riviera-maya-guia": "cancun",
  "cusco-machu-picchu-guia": "cusco",
  "lisboa-portugal-guia-2026": "lisboa",
  "miami-guia-viajero-2026": "miami",
  "bangkok-guia-viajero-2026": "bangkok",
  "marrakech-medina-guia-2026": "marrakech",
  "amsterdam-canales-guia-2026": "amsterdam",
  "bali-guia-honesta-2026": "bali",
};

export function getDestinationSlugForPost(postSlug: string): string | undefined {
  return BLOG_TO_DESTINATION[postSlug];
}

export function getBlogSlugsForDestination(destSlug: string): string[] {
  return Object.entries(BLOG_TO_DESTINATION)
    .filter(([, dest]) => dest === destSlug)
    .map(([blogSlug]) => blogSlug);
}
