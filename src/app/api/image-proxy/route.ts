/**
 * Image proxy: fetches external images server-side and serves them
 * as same-origin responses. Required for window.print() to render
 * images from Google Places, Wikipedia, and Pexels CDNs.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('Missing url parameter', { status: 400 });
  }

  // Only allow known image CDN domains
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return new Response('Invalid URL', { status: 400 });
  }

  const allowed = [
    'lh3.googleusercontent.com',
    'lh4.googleusercontent.com',
    'lh5.googleusercontent.com',
    'maps.googleapis.com',
    'upload.wikimedia.org',
    'images.pexels.com',
    'images.unsplash.com',
    'maps.geoapify.com',
  ];

  if (!allowed.some(domain => parsed.hostname.endsWith(domain))) {
    return new Response('Domain not allowed', { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'GlobalHomeAssist/1.0' },
    });

    if (!res.ok) {
      return new Response('Failed to fetch image', { status: res.status });
    }

    const contentType = res.headers.get('Content-Type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch {
    return new Response('Proxy error', { status: 502 });
  }
}
