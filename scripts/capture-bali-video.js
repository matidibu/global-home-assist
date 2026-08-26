// Bali tiene su propia página curada con contenido fijo (/itinerario/bali,
// ver memoria del proyecto: itinerary-photos-maps) -- nunca pasa por el
// flujo genérico de búsqueda+IA que usa capture-itinerary-video.js. Ese
// script tipea el destino en el buscador de Geoapify, que para "Bali" solo
// devuelve Balıkesir (Turquía) y pueblos homónimos, nunca la isla real
// (confirmado 2026-08-24) -- por eso este script separado navega directo a
// la URL fija en vez de reusar ese flujo, que reproduciría el mismo bug.
//
// Uso:
//   node scripts/capture-bali-video.js
//   node scripts/capture-bali-video.js en
//
// Único argumento opcional: idioma (es|en|fr|it|de, default "es") -- ver
// src/data/baliI18n.ts para los idiomas soportados (no incluye pt). No hay
// selector de días (el itinerario de Bali es fijo, 5 días) ni paso de
// "generando": el contenido, incluidas las imágenes, ya viene resuelto
// server-side en itinerario/bali/page.tsx antes de que el browser reciba la
// página -- no existe una pantalla de carga de IA que grabar ni comprimir
// después (build-social-video.js corre sin meta.json y trata todo el clip
// como "browsing" cuando no lo encuentra).

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://global-home-assist.vercel.app';
const OUTPUT_DIR = 'C:/Users/matia/Downloads/gha_videos';
const VIDEO_SIZE = { width: 480, height: 854 }; // ~9:16

const lang = (process.argv[2] || 'es').toLowerCase();
const LOCALE_BY_LANG = { es: 'es-AR', en: 'en-US', fr: 'fr-FR', it: 'it-IT', de: 'de-DE' };
// Mirrors CookieBanner.tsx's own T[lang].acceptAll -- found while capturing
// bali-en 2026-08-25: CookieBanner has full i18n, so the hardcoded Spanish
// "Aceptar todo" lookup silently failed on this locale and the banner
// stayed visible/overlapping content for the whole recording.
const ACCEPT_ALL_BY_LANG = { es: 'Aceptar todo', en: 'Accept all', fr: 'Tout accepter', it: 'Accetta tutto', de: 'Alle akzeptieren' };

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIDEO_SIZE,
    recordVideo: { dir: OUTPUT_DIR, size: VIDEO_SIZE },
    locale: LOCALE_BY_LANG[lang] || LOCALE_BY_LANG.es,
  });
  // t0 anchors to context creation, same as when Playwright's video
  // recording starts -- used below to timestamp contentReady.
  const t0 = Date.now();
  const page = await context.newPage();

  console.log(`[1/3] Abriendo ${BASE_URL}/itinerario/bali (${lang}) ...`);
  await page.goto(`${BASE_URL}/itinerario/bali`, { waitUntil: 'domcontentloaded' });

  await page.getByRole('button', { name: ACCEPT_ALL_BY_LANG[lang] || ACCEPT_ALL_BY_LANG.es }).click({ timeout: 8000 }).catch(() => {
    console.warn('   ⚠️  No se pudo cerrar el banner de cookies (puede quedar visible en el video)');
  });

  console.log('[2/3] Esperando que asiente el contenido (imágenes, mapa) ...');
  // itinerario/bali/page.tsx es un Server Component async que espera 24
  // búsquedas de imagen (Promise.all) antes de mandar el HTML -- con la
  // cache ISR de 24h (revalidate=86400) fría, el TTFB puede tardar varios
  // segundos reales de pantalla en blanco (confirmado 2026-08-25: ~3-5s en
  // una corrida). contentReady marca el momento real en que el contenido
  // aparece, para que build-social-video.js pueda descartar ese tramo en
  // blanco por completo (mismo mecanismo que usa capture-itinerary-video.js
  // para el mismo problema en el flujo genérico).
  await page.waitForSelector('.day-badge', { timeout: 30000 });
  const contentReady = (Date.now() - t0) / 1000;
  await page.waitForTimeout(2500);

  console.log('[3/3] Recorriendo la página para la grabación ...');
  // Mismo scroll continuo (no saltos) que capture-itinerary-video.js, con
  // más tiempo de permanencia sobre las actividades día a día. Esta página
  // no tiene el id #sec-itinerario del flujo genérico -- se usan las clases
  // reales del layout de BaliGuideBody (.day-badge / .activity-card) para
  // ubicar el mismo rango a "dwell".
  await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const badges = document.querySelectorAll('.day-badge');
    const cards = document.querySelectorAll('.activity-card');
    const itinTop = badges.length ? window.scrollY + badges[0].getBoundingClientRect().top : 0;
    const lastCard = cards.length ? cards[cards.length - 1] : null;
    const itinBottom = lastCard ? window.scrollY + lastCard.getBoundingClientRect().bottom : document.body.scrollHeight;
    const stepPx = 90;
    let y = 0;
    while (y < document.body.scrollHeight - window.innerHeight) {
      window.scrollTo({ top: y, behavior: 'auto' });
      const dwelling = y >= itinTop - 150 && y <= itinBottom;
      await sleep(dwelling ? 170 : 45);
      y += stepPx;
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
    await sleep(1000);
  });

  await context.close();
  await browser.close();

  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.webm'));
  const latest = files
    .map(f => ({ f, t: fs.statSync(path.join(OUTPUT_DIR, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t)[0];

  if (latest) {
    const stamp = Date.now();
    const dest = path.join(OUTPUT_DIR, `bali-${lang}-${stamp}.webm`);
    fs.renameSync(path.join(OUTPUT_DIR, latest.f), dest);
    // No hay pantalla de "generando IA" que comprimir aquí (a diferencia del
    // flujo genérico) -- loadingStart/loadingEnd quedan pegados a
    // contentReady a propósito, solo para activar la rama "hasPreContent"
    // de prepRawVideo() en build-social-video.js y descartar el tramo en
    // blanco previo. hasLoading da false (loadingEnd-loadingStart < 2), así
    // que todo lo posterior a contentReady entra como "browsing" (scroll a
    // ritmo casi real, ver [[video-production-pipeline]]).
    const metaPath = dest.replace(/\.webm$/, '.meta.json');
    fs.writeFileSync(metaPath, JSON.stringify({
      destination: 'Bali', lang, days: 5,
      contentReady, loadingStart: contentReady + 0.01, loadingEnd: contentReady + 0.02,
    }, null, 2));
    console.log(`\n✅ Video guardado en: ${dest}`);
    console.log(`   contentReady=${contentReady.toFixed(1)}s (meta: ${metaPath})`);
  } else {
    console.log('\n⚠️  No se encontró el archivo de video generado en ' + OUTPUT_DIR);
  }
})();
