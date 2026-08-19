// Graba en video (vertical, 9:16 — Reels/TikTok/Stories) el flujo real de
// generar un itinerario contra producción: escribir el destino, generar, y
// recorrer el resultado (mapa, fotos, días). Reemplaza la grabación manual
// que se hacía antes a mano (ver memoria del proyecto: solo se llegó a hacer
// un video así y quedó ahí por lo pesado de grabar/editar cada uno).
//
// El video queda RAW a propósito -- el paso de agregar voz/música/texto y
// subirlo sigue siendo manual.
//
// Uso:
//   node scripts/capture-itinerary-video.js "Barcelona"
//   node scripts/capture-itinerary-video.js "Tokio" 5
//   node scripts/capture-itinerary-video.js "Tokio" 5 en
//
// El 3er argumento opcional es el idioma (es|en|fr|it|de|pt, default "es").
// Setea el locale del browser context de Playwright, que es lo que el sitio
// usa (via useAutoLanguage/navigator.language) para decidir en qué idioma
// mostrar la UI y pedirle el itinerario a la IA -- así el video queda
// nativo en ese idioma (UI + contenido generado), no traducido después.
//
// Corre contra prod (no local) porque necesita las API keys reales
// (OpenAI, Geoapify) que solo existen en las env vars de Vercel. Cada
// corrida genera un itinerario real, es decir, consume una llamada real
// a la API de OpenAI -- mismo costo que un usuario común generando un
// itinerario desde la web.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://global-home-assist.vercel.app';
const OUTPUT_DIR = 'C:/Users/matia/Downloads/gha_videos';
const VIDEO_SIZE = { width: 480, height: 854 }; // ~9:16

const destination = process.argv[2];
const days = parseInt(process.argv[3] || '3', 10);
const lang = (process.argv[4] || 'es').toLowerCase();

const LOCALE_BY_LANG = { es: 'es-AR', en: 'en-US', fr: 'fr-FR', it: 'it-IT', de: 'de-DE', pt: 'pt-PT' };

if (!destination) {
  console.error('Uso: node scripts/capture-itinerary-video.js "Nombre de la ciudad" [dias] [idioma]');
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIDEO_SIZE,
    recordVideo: { dir: OUTPUT_DIR, size: VIDEO_SIZE },
    locale: LOCALE_BY_LANG[lang] || LOCALE_BY_LANG.es,
  });
  // t0 anchors to context creation, same as when Playwright's video recording
  // starts -- so these timestamps line up with the recorded video's own
  // timeline (used later to speed up the loading-screen segment in post).
  const t0 = Date.now();
  const page = await context.newPage();

  console.log(`[1/6] Abriendo ${BASE_URL} ...`);
  // domcontentloaded (not networkidle) -- networkidle waits on every
  // analytics/ads/script request to go quiet, which was eating several
  // seconds of "dead" intro time before we'd even touch the page. The
  // explicit waitForSelector calls below already guarantee the elements
  // we need are actually ready before we interact with them.
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

  // Actively wait (don't just isVisible()-check-once) -- with
  // domcontentloaded the banner's own React mount can still be a beat away,
  // and an instant isVisible() check missed it, leaving the cookie banner
  // visible on-screen for the rest of the recording.
  await page.getByRole('button', { name: 'Aceptar todo' }).click({ timeout: 8000 }).catch(() => {
    console.warn('   ⚠️  No se pudo cerrar el banner de cookies (puede quedar visible en el video)');
  });

  console.log(`[2/6] Buscando destino: ${destination} ...`);
  const input = page.locator('.geoapify-autocomplete-input').first();
  await input.scrollIntoViewIfNeeded();
  await input.click();
  await input.type(destination, { delay: 55 });
  await page.waitForSelector('.geoapify-autocomplete-items .geoapify-autocomplete-item', { timeout: 15000 });
  await page.waitForTimeout(250);
  await page.locator('.geoapify-autocomplete-items .geoapify-autocomplete-item').first().click();

  console.log(`[3/6] Seleccionando ${days} días ...`);
  await page.getByRole('button', { name: String(days), exact: true }).click().catch(() => {});
  await page.waitForTimeout(200);

  console.log('[4/6] Aceptando términos y generando itinerario ...');
  await page.locator('input[type="checkbox"]').first().check();
  const loadingStart = (Date.now() - t0) / 1000;
  await page.locator('button.btn-generate').click();

  console.log('[5/6] Esperando que se genere el itinerario (puede tardar 15-30s) ...');
  // .itinerary-quick-day-nav se oculta por CSS en mobile (el sticky nav de
  // secciones lo reemplaza ahi) -- #sec-itinerario si es visible siempre.
  await page.waitForSelector('#sec-itinerario', { timeout: 60000 });
  const loadingEnd = (Date.now() - t0) / 1000;
  await page.waitForTimeout(1500);

  console.log('[6/6] Recorriendo el itinerario para la grabación ...');
  // Scroll continuo y suave (no saltos de sección a sección) con más tiempo
  // de permanencia dentro de #sec-itinerario (las actividades día a día, lo
  // más interesante) y menos en el resto -- pedido explícito 2026-08-19
  // tras ver que el formato anterior (saltar de sección en sección con
  // scrollIntoViewIfNeeded) se sentía cortado.
  await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const itin = document.querySelector('#sec-itinerario');
    const itinTop = itin ? window.scrollY + itin.getBoundingClientRect().top : 0;
    const itinBottom = itin ? itinTop + itin.offsetHeight : 0;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const stepPx = 90;
    for (let y = 0; y < maxScroll; y += stepPx) {
      window.scrollTo({ top: y, behavior: 'smooth' });
      const dwelling = y >= itinTop - 150 && y <= itinBottom;
      await sleep(dwelling ? 170 : 45);
    }
    window.scrollTo({ top: maxScroll, behavior: 'smooth' });
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
    const dest = path.join(OUTPUT_DIR, `${slugify(destination)}-${lang}-${stamp}.webm`);
    fs.renameSync(path.join(OUTPUT_DIR, latest.f), dest);
    const metaPath = dest.replace(/\.webm$/, '.meta.json');
    fs.writeFileSync(metaPath, JSON.stringify({ destination, lang, days, loadingStart, loadingEnd }, null, 2));
    console.log(`\n✅ Video guardado en: ${dest}`);
    console.log(`   Loading segment: ${loadingStart.toFixed(1)}s -> ${loadingEnd.toFixed(1)}s (meta: ${metaPath})`);
  } else {
    console.log('\n⚠️  No se encontró el archivo de video generado en ' + OUTPUT_DIR);
  }
})();
