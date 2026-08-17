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

if (!destination) {
  console.error('Uso: node scripts/capture-itinerary-video.js "Nombre de la ciudad" [dias]');
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
  });
  const page = await context.newPage();

  console.log(`[1/6] Abriendo ${BASE_URL} ...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const acceptBtn = page.getByRole('button', { name: 'Aceptar todo' });
  if (await acceptBtn.isVisible().catch(() => false)) {
    await acceptBtn.click();
  }

  console.log(`[2/6] Buscando destino: ${destination} ...`);
  const input = page.locator('.geoapify-autocomplete-input').first();
  await input.scrollIntoViewIfNeeded();
  await input.click();
  await input.type(destination, { delay: 90 });
  await page.waitForSelector('.geoapify-autocomplete-items .geoapify-autocomplete-item', { timeout: 15000 });
  await page.waitForTimeout(500);
  await page.locator('.geoapify-autocomplete-items .geoapify-autocomplete-item').first().click();

  console.log(`[3/6] Seleccionando ${days} días ...`);
  await page.getByRole('button', { name: String(days), exact: true }).click().catch(() => {});
  await page.waitForTimeout(400);

  console.log('[4/6] Aceptando términos y generando itinerario ...');
  await page.locator('input[type="checkbox"]').first().check();
  await page.locator('button.btn-generate').click();

  console.log('[5/6] Esperando que se genere el itinerario (puede tardar 15-30s) ...');
  // .itinerary-quick-day-nav se oculta por CSS en mobile (el sticky nav de
  // secciones lo reemplaza ahi) -- #sec-itinerario si es visible siempre.
  await page.waitForSelector('#sec-itinerario', { timeout: 60000 });
  await page.waitForTimeout(1500);

  console.log('[6/6] Recorriendo el itinerario para la grabación ...');
  // Recorre las secciones reales de la página (mismos ids que usa el sticky
  // nav: Itinerario / Travel Hacks / Herramientas / Mapa / Destino) en vez
  // de depender del widget de días, que está oculto en mobile.
  const sectionIds = ['sec-itinerario', 'sec-hacks', 'sec-tools', 'sec-mapa', 'sec-destino'];
  for (const id of sectionIds) {
    const section = page.locator(`#${id}`);
    if (await section.count() > 0) {
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(2200);
    }
  }
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(2000);

  await context.close();
  await browser.close();

  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.webm'));
  const latest = files
    .map(f => ({ f, t: fs.statSync(path.join(OUTPUT_DIR, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t)[0];

  if (latest) {
    const dest = path.join(OUTPUT_DIR, `${slugify(destination)}-${Date.now()}.webm`);
    fs.renameSync(path.join(OUTPUT_DIR, latest.f), dest);
    console.log(`\n✅ Video guardado en: ${dest}`);
  } else {
    console.log('\n⚠️  No se encontró el archivo de video generado en ' + OUTPUT_DIR);
  }
})();
