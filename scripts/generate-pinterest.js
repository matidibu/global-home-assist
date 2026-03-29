const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = 'C:/Users/matia/Downloads/pinterest_pins';
const PEXELS_KEY = 'aHXrcSFbITumyVM8gA84eUlX5FI5ckOMCdTOsLSaVrcYcQ9Vp0Bl0s8R';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const posts = [
  { slug: 'planificar-viaje-con-ia',      title: 'El algoritmo que planifica viajes mejor que cualquier agencia (y es gratis)', emoji: '🤖', query: 'travel planning map adventure' },
  { slug: 'viajar-europa-700-euros',       title: 'Cómo viajar 7 días en Europa con 700€ sin mentirte',                         emoji: '💶', query: 'europe travel backpacker city' },
  { slug: 'dubai-sin-filtros',             title: 'Dubai sin filtros: lo que Instagram no te muestra',                           emoji: '🏙️', query: 'dubai skyline burj khalifa' },
  { slug: 'roma-48-horas',                 title: 'Roma en 48 horas: el itinerario que los romanos aprueban',                    emoji: '🏛️', query: 'rome colosseum italy' },
  { slug: 'barcelona-vs-madrid',           title: 'Barcelona vs Madrid: la guía sin drama para elegir bien',                    emoji: '🇪🇸', query: 'barcelona sagrada familia spain' },
  { slug: 'errores-que-arruinan-viaje',    title: 'Los 7 errores que arruinan un viaje (y cómo evitarlos)',                     emoji: '⚠️', query: 'airport luggage travel suitcase' },
  { slug: 'tokio-primera-vez',             title: 'Tokio para el viajero que nunca fue a Asia',                                  emoji: '🗼', query: 'tokyo japan shibuya night' },
  { slug: 'bali-2026',                     title: 'Bali en 2026: lo que los influencers no te muestran',                        emoji: '🌴', query: 'bali indonesia temple rice field' },
  { slug: 'buenos-aires-guia',             title: 'Buenos Aires para el viajero del resto del mundo',                           emoji: '🥩', query: 'buenos aires argentina street' },
  { slug: 'vuelos-latinoamerica-europa',   title: 'Vuelos desde Latinoamérica a Europa: pagá menos',                            emoji: '✈️', query: 'airplane flight clouds sky' },
  { slug: 'viajar-mascotas',               title: 'Viajar con mascotas: la guía completa',                                      emoji: '🐾', query: 'travel dog pet adventure' },
  { slug: 'viajar-mundo-en-conflicto',     title: 'Viajar cuando el mundo no está en paz',                                      emoji: '🌐', query: 'world map globe travel' },
  { slug: 'viajar-hijos-chicos',           title: 'Viajar con hijos chicos (0-6 años): lo que funciona y lo que no',            emoji: '👶', query: 'family travel kids beach' },
  { slug: 'viajar-adolescentes',           title: 'Viajar con adolescentes: un viaje que quieran recordar',                     emoji: '🎧', query: 'teenagers travel adventure hiking' },
  { slug: 'viajes-parejas-50',             title: 'Viajes para parejas 50+: viajar bien cuando ya saben lo que quieren',        emoji: '❤️', query: 'couple travel mature romantic' },
  { slug: 'viajar-solo-65',               title: 'Viajar solo después de los 65: más posible de lo que te dijeron',             emoji: '🧳', query: 'senior travel solo sightseeing' },
  { slug: 'viajar-hijos-adultos',          title: 'Viajar con hijos adultos sin que nadie quede resentido',                     emoji: '👨‍👩‍👧‍👦', query: 'adult children parents dinner restaurant travel' },
  { slug: 'paris-2026',                    title: 'París 2026: guía completa para tu primer viaje (o el de siempre)',            emoji: '🗼', query: 'paris eiffel tower france' },
  { slug: 'nueva-york-primera-vez',        title: 'Nueva York por primera vez: lo que nadie te cuenta antes de ir',             emoji: '🗽', query: 'new york city manhattan skyline' },
  { slug: 'cancun-riviera-maya',           title: 'Cancún y Riviera Maya: más allá del todo incluido',                          emoji: '🏖️', query: 'cancun mexico caribbean beach turquoise' },
  { slug: 'cusco-machu-picchu',            title: 'Cusco y Machu Picchu: la guía que ojalá hubiera tenido antes de ir',         emoji: '🏔️', query: 'machu picchu peru inca mountains' },
  { slug: 'lisboa-2026',                   title: 'Lisboa 2026: enamorarse de Portugal sin gastar una fortuna',                 emoji: '🐟', query: 'lisbon portugal tram street' },
  { slug: 'miami-2026',                    title: 'Miami 2026: ir más allá de South Beach',                                     emoji: '🌴', query: 'miami beach art deco south beach' },
  { slug: 'visa-schengen',                 title: 'Visa Schengen para latinoamericanos: guía paso a paso 2026',                 emoji: '🛂', query: 'passport visa travel document europe' },
  { slug: 'equipaje-de-mano',              title: 'Viajar solo con equipaje de mano: no facturar nunca más',                    emoji: '🎒', query: 'backpack carry on luggage travel light' },
];

function fetchJson(url, headers) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const get = (u, redirects = 0) => {
      https.get(u, res => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 5) {
          return get(res.headers.location, redirects + 1);
        }
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      }).on('error', reject);
    };
    get(url);
  });
}

async function fetchPhoto(query) {
  const encoded = encodeURIComponent(query);
  const data = await fetchJson(
    `https://api.pexels.com/v1/search?query=${encoded}&per_page=3&orientation=portrait`,
    { Authorization: PEXELS_KEY }
  );
  if (!data.photos || data.photos.length === 0) return null;
  // Pick highest resolution portrait photo available
  const photo = data.photos[0];
  const url = photo.src.large2x || photo.src.large || photo.src.original;
  return downloadBuffer(url);
}

function wrapText(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length <= maxChars) {
      current = (current + ' ' + word).trim();
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function makeOverlaySVG() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1500" width="1000" height="1500">
  <defs>
    <linearGradient id="ov" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stop-color="#0a0f1e" stop-opacity="0.55"/>
      <stop offset="35%"  stop-color="#0a0f1e" stop-opacity="0.25"/>
      <stop offset="55%"  stop-color="#0a0f1e" stop-opacity="0.65"/>
      <stop offset="100%" stop-color="#0a0f1e" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1500" fill="url(#ov)"/>
</svg>`);
}

function makeTextSVG(post) {
  const lines = wrapText(post.title, 26);
  const lineHeight = 74;
  const startY = 750 - (lines.length * lineHeight) / 2;

  const textLines = lines.map((line, i) =>
    `<text x="500" y="${startY + i * lineHeight}" text-anchor="middle" font-family="Georgia, serif" font-size="60" font-weight="700" fill="white" filter="url(#shadow)">${line}</text>`
  ).join('\n  ');

  const dividerY = startY + lines.length * lineHeight + 35;

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1500" width="1000" height="1500">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="5" flood-color="rgba(0,0,0,0.8)"/>
    </filter>
  </defs>

  <!-- Top bar -->
  <rect x="0" y="0" width="1000" height="8" fill="#2ab5a0"/>

  <!-- Title -->
  ${textLines}

  <!-- Divider -->
  <line x1="200" y1="${dividerY}" x2="800" y2="${dividerY}" stroke="#2ab5a0" stroke-width="2" opacity="0.8"/>

  <!-- URL -->
  <text x="500" y="${dividerY + 55}" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#2ab5a0" letter-spacing="2" filter="url(#shadow)">global-home-assist.vercel.app</text>

  <!-- Bottom logo -->
  <rect x="0" y="1380" width="1000" height="120" fill="rgba(0,0,0,0.5)"/>
  <text x="500" y="1450" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="700" fill="white" letter-spacing="3">GLOBAL HOME</text>
  <text x="500" y="1490" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#2ab5a0" letter-spacing="6">ASSIST</text>

  <!-- Bottom bar -->
  <rect x="0" y="1492" width="1000" height="8" fill="#2ab5a0"/>
</svg>`);
}

async function generatePin(post) {
  const outPath = path.join(OUTPUT_DIR, `${post.slug}.png`);

  const photoBuffer = await fetchPhoto(post.query);
  if (!photoBuffer) {
    console.log(`  ⚠️  Sin foto para "${post.query}" — usando fondo sólido`);
    // Fallback: solid dark background
    await sharp({
      create: { width: 1000, height: 1500, channels: 4, background: { r: 26, g: 42, b: 108, alpha: 1 } }
    })
      .composite([
        { input: makeTextSVG(post), blend: 'over' }
      ])
      .png()
      .toFile(outPath);
    return;
  }

  await sharp(photoBuffer)
    .resize(1000, 1500, { fit: 'cover', position: 'centre' })
    .composite([
      { input: makeOverlaySVG(), blend: 'over' },
      { input: makeTextSVG(post), blend: 'over' },
    ])
    .png()
    .toFile(outPath);
}

async function generateAll(filter = null) {
  const targets = filter ? posts.filter(p => filter.includes(p.slug)) : posts;
  console.log(`Generando ${targets.length} pins con fotos de fondo...\n`);
  for (let i = 0; i < targets.length; i++) {
    const post = targets[i];
    process.stdout.write(`[${i + 1}/${posts.length}] ${post.slug}... `);
    try {
      await generatePin(post);
      console.log('✅');
    } catch (err) {
      console.log(`❌ ${err.message}`);
    }
    // Small delay to respect Pexels rate limits
    await new Promise(r => setTimeout(r, 300));
  }
  console.log(`\nDone! Imágenes en ${OUTPUT_DIR}`);
}

const slugFilter = process.argv[2] ? process.argv[2].split(',') : null;
generateAll(slugFilter).catch(console.error);
