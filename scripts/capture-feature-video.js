// Records raw footage for a FEATURE-highlight Reel (not a destination
// overview) -- generates a real itinerary against prod, then instead of a
// generic top-to-bottom scroll, navigates straight to and lingers/
// interacts with the one UI element the feature video is actually about.
// Companion to capture-itinerary-video.js (which does the generic
// destination-overview scroll) -- built 2026-08-19 after the user pointed
// out the feature videos need to actually show the feature (e.g. clicking
// the real SOS button), not just scroll past wherever it happens to be.
//
// Uso:
//   node scripts/capture-feature-video.js <feature> "<ciudad>" [dias] [idioma]
//   feature: traslados | seguridad | mapa | excursiones
//
// Corre contra prod -- ver capture-itinerary-video.js para el porqué.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://global-home-assist.vercel.app';
const OUTPUT_DIR = 'C:/Users/matia/Downloads/gha_videos';
const VIDEO_SIZE = { width: 480, height: 854 };
const LOCALE_BY_LANG = { es: 'es-AR', en: 'en-US', fr: 'fr-FR', it: 'it-IT', de: 'de-DE', pt: 'pt-PT' };

const feature = process.argv[2];
const destination = process.argv[3];
const days = parseInt(process.argv[4] || '3', 10);
const lang = (process.argv[5] || 'es').toLowerCase();

const VALID_FEATURES = ['traslados', 'seguridad', 'mapa', 'excursiones'];
// A real, globally-recognizable hotel -- picked deliberately (2026-08-19,
// user request) so the traslados demo shows a concrete, legible "starts
// from your actual hotel" example instead of a generic/empty accommodation.
const ACCOMMODATION_QUERY = 'The Plaza Hotel New York';
// Must match ServicesSection.tsx's T[lang].groups.actividades exactly --
// the 'excursiones' capture locates this section by its translated
// heading text. Bug found 2026-08-20: this used to be a single hardcoded
// Spanish string ('Actividades y tours'), which silently stopped matching
// once ServicesSection got real i18n and started rendering "Activities
// and tours" in English -- the capture fell back to #sec-mapa instead,
// so the "excursiones" video ended up showing the map, not the booking
// links it's supposed to demo.
const ACTIVITIES_HEADING = {
  es: 'Actividades y tours',
  en: 'Activities and tours',
  fr: 'Activités et visites',
  it: 'Attività e tour',
  de: 'Aktivitäten und Touren',
  pt: 'Atividades e passeios',
};
if (!VALID_FEATURES.includes(feature) || !destination) {
  console.error('Uso: node scripts/capture-feature-video.js <traslados|seguridad|mapa|excursiones> "<ciudad>" [dias] [idioma]');
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function slugify(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function smoothScrollTo(page, y) {
  await page.evaluate((targetY) => window.scrollTo({ top: targetY, behavior: 'smooth' }), y);
  await page.waitForTimeout(700);
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIDEO_SIZE,
    recordVideo: { dir: OUTPUT_DIR, size: VIDEO_SIZE },
    locale: LOCALE_BY_LANG[lang] || LOCALE_BY_LANG.es,
    ...(feature === 'seguridad' ? { geolocation: { latitude: 41.3874, longitude: 2.1686 }, permissions: ['geolocation'] } : {}),
  });
  const t0 = Date.now();
  const page = await context.newPage();

  console.log(`[1/6] Abriendo ${BASE_URL} ...`);
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Aceptar todo' }).click({ timeout: 8000 }).catch(() => {
    console.warn('   ⚠️  No se pudo cerrar el banner de cookies');
  });

  console.log(`[2/6] Buscando destino: ${destination} ...`);
  // Same pre-content tracking as capture-itinerary-video.js -- the blank
  // page-load sliver before this point varies run to run and build-social-
  // video.js hard-caps it once it knows where it ends.
  const contentReady = (Date.now() - t0) / 1000;
  const input = page.locator('.geoapify-autocomplete-input').first();
  await input.scrollIntoViewIfNeeded();
  await input.click();
  await input.type(destination, { delay: 55 });
  await page.waitForSelector('.geoapify-autocomplete-items .geoapify-autocomplete-item', { timeout: 15000 });
  await page.waitForTimeout(250);
  await page.locator('.geoapify-autocomplete-items .geoapify-autocomplete-item').first().click();

  if (feature === 'traslados') {
    // A real, recognizable hotel name (not left blank) so the 🏨 badge
    // TransportDivider renders next to each day's first transfer actually
    // shows something -- confirmed 2026-08-19 that without this, the badge
    // never renders at all (fromAccommodation stays false), which is why
    // the earlier capture couldn't clearly demonstrate the accommodation-
    // as-origin point no matter how the scroll/timing was tuned.
    console.log(`[2b/6] Buscando alojamiento: ${ACCOMMODATION_QUERY} ...`);
    const accInput = page.locator('#accommodation-search .geoapify-autocomplete-input');
    await accInput.click();
    await accInput.type(ACCOMMODATION_QUERY, { delay: 55 });
    await page.waitForSelector('#accommodation-search .geoapify-autocomplete-items .geoapify-autocomplete-item', { timeout: 15000 });
    await page.waitForTimeout(300);
    const accItems = page.locator('#accommodation-search .geoapify-autocomplete-items .geoapify-autocomplete-item');
    const accTexts = await accItems.allTextContents();
    const hotelIdx = accTexts.findIndex(t => t.includes('Hotel')); // prefer the literal "...Hotel" suggestion over a bare landmark/address entry with the same name
    await accItems.nth(hotelIdx >= 0 ? hotelIdx : 0).click();
  }

  console.log(`[3/6] Seleccionando ${days} días ...`);
  await page.getByRole('button', { name: String(days), exact: true }).click().catch(() => {});
  await page.waitForTimeout(200);

  console.log('[4/6] Generando itinerario ...');
  await page.locator('input[type="checkbox"]').first().check();
  const loadingStart = (Date.now() - t0) / 1000;
  await page.locator('button.btn-generate').click();
  await page.waitForSelector('#sec-itinerario', { timeout: 60000 });
  const loadingEnd = (Date.now() - t0) / 1000;
  await page.waitForTimeout(3000);

  console.log(`[5/6] Enfocando la funcionalidad: ${feature} ...`);
  if (feature === 'traslados') {
    // Every day's FIRST transport-pill carries a preceding 🏨 badge (that
    // transfer is calculated from the chosen accommodation) -- collect all
    // of them, not just the first, so we can show Day 1's opener and Day
    // 2's opener specifically. Confirmed 2026-08-19 via user feedback: the
    // old version jumped between two adjacent pills with no visible
    // scrolling and didn't clearly land on a second day, which read as
    // "doesn't show the accommodation is the real origin."
    const pills = page.locator('.transport-pill');
    const count = await pills.count();
    const hotelOriginIdx = [];
    for (let i = 0; i < count; i++) {
      const hasHotelBadge = await pills.nth(i).locator('xpath=preceding-sibling::span[contains(text(),"🏨")]').count().catch(() => 0);
      if (hasHotelBadge > 0) hotelOriginIdx.push(i);
    }
    const day1Idx = hotelOriginIdx[0] ?? 0;
    const day2Idx = hotelOriginIdx[1] ?? Math.min(count - 1, day1Idx + 3);

    await pills.nth(day1Idx).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollBy(0, -140)); // leave room to see the 🏨 badge + pill together, not pinned to the very top
    await page.waitForTimeout(3000);

    // Real, visible scroll down to Day 2's opener (not an instant jump) --
    // this is what actually demonstrates it's a later day with the same
    // accommodation origin, by showing the itinerary content pass by.
    const day2Y = await pills.nth(day2Idx).evaluate(el => window.scrollY + el.getBoundingClientRect().top - 140);
    const startY = await page.evaluate(() => window.scrollY);
    const distance = day2Y - startY;
    const steps = 18;
    for (let s = 1; s <= steps; s++) {
      await page.evaluate(y => window.scrollTo({ top: y, behavior: 'auto' }), startY + (distance * s) / steps);
      await page.waitForTimeout(90);
    }
    await page.waitForTimeout(3000);
  } else if (feature === 'seguridad') {
    await page.locator('#sec-destino').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    const sosBtn = page.locator('.sos-button');
    await sosBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await sosBtn.click();
    await page.waitForTimeout(1200);
    // let the GPS location resolve on-screen (we granted geolocation permission above)
    await page.waitForTimeout(2500);
    await page.waitForTimeout(2500); // hold on the emergency numbers grid
  } else if (feature === 'mapa') {
    await page.locator('#sec-mapa').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollBy(0, 80));
    await page.waitForTimeout(2000);
    // Zoom in centered on one of the actual itinerary pins, not the map's
    // current center -- found 2026-08-25 via user video review that the
    // old `.leaflet-control-zoom-in` click zoomed into an empty stretch of
    // the map (Boulogne-Billancourt) with NO pins visible at all. Root
    // cause: the generic zoom control zooms toward the map's current
    // center, which after TravelMap's fitBounds() is just the bbox's
    // geometric center -- not guaranteed to be near any marker when the
    // pins are spread in a non-uniform shape (confirmed live against prod:
    // Paris's pins line up diagonally, well off the bbox center). Fix:
    // double-click directly on one of the numbered pins instead --
    // Leaflet's default doubleClickZoom handler zooms in centered on the
    // click point, so that pin (and its near neighbors) stays in frame.
    // Verified live against prod before shipping: pins 1/4/7 still visible
    // after one dblclick, pins 1/7 still visible after a second.
    const pin = page.locator('.leaflet-marker-icon').first();
    if (await pin.count() > 0) {
      await pin.dblclick({ force: true }).catch(() => {});
      await page.waitForTimeout(1500);
      await pin.dblclick({ force: true }).catch(() => {});
    } else {
      // fallback for the unlikely case of a map with no markers rendered
      const zoomIn = page.locator('.leaflet-control-zoom-in');
      if (await zoomIn.count() > 0) {
        await zoomIn.click().catch(() => {});
        await page.waitForTimeout(1500);
        await zoomIn.click().catch(() => {});
      }
    }
    await page.waitForTimeout(3000);
  } else if (feature === 'excursiones') {
    const headingText = ACTIVITIES_HEADING[lang] || ACTIVITIES_HEADING.es;
    const servicesHeading = page.getByText(headingText).first();
    if (await servicesHeading.count() > 0) {
      await servicesHeading.scrollIntoViewIfNeeded();
    } else {
      await page.locator('#sec-mapa').scrollIntoViewIfNeeded(); // fallback, roughly the right area
    }
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollBy(0, 60));
    await page.waitForTimeout(4500);
  }

  console.log('[6/6] Cerrando grabación ...');
  await page.waitForTimeout(500);
  await context.close();
  await browser.close();

  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.webm'));
  const latest = files.map(f => ({ f, t: fs.statSync(path.join(OUTPUT_DIR, f)).mtimeMs })).sort((a, b) => b.t - a.t)[0];

  if (latest) {
    const stamp = Date.now();
    const dest = path.join(OUTPUT_DIR, `feat-${feature}-${slugify(destination)}-${lang}-${stamp}.webm`);
    fs.renameSync(path.join(OUTPUT_DIR, latest.f), dest);
    const metaPath = dest.replace(/\.webm$/, '.meta.json');
    fs.writeFileSync(metaPath, JSON.stringify({ feature, destination, lang, days, contentReady, loadingStart, loadingEnd }, null, 2));
    console.log(`\n✅ Video guardado en: ${dest}`);
  } else {
    console.log('\n⚠️  No se encontró el archivo de video generado en ' + OUTPUT_DIR);
  }
})();
