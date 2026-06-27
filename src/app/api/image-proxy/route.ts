/**
 * Image proxy: fetches external images server-side and serves them
 * as same-origin responses. Required for window.print() to render
 * images from Google Places, Wikipedia, and Pexels CDNs.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('URL parámetro faltante', { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return new Response('URL inválida', { status: 400 });
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
    return new Response('Dominio no autorizado', { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'GlobalHomeAssist/1.0' },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      console.warn(`[image-proxy] Fetch failed: ${url} → ${res.status}`);
      return new Response('No se pudo obtener la imagen', { status: 502 });
    }

    const contentType = res.headers.get('Content-Type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    if (buffer.byteLength === 0) {
      return new Response('Imagen vacía', { status: 502 });
    }

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Error desconocido';
    console.error('[image-proxy] Error:', msg);
    return new Response('Error al procesar imagen. Intenta de nuevo.', { status: 502 });
  }
}
