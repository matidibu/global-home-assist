import { blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://global-home-assist.vercel.app";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const items = sorted
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.publishDate).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.categoryLabel)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Global Home Assist — Blog de viajes</title>
    <link>${BASE_URL}/blog</link>
    <description>Guías de viaje honestas, presupuestos reales y consejos prácticos para planificar tu próximo destino.</description>
    <language>es</language>
    <atom:link href="${BASE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
