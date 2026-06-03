const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = 'C:/Users/matia/Downloads/pinterest_pins';
const PEXELS_KEY = 'aHXrcSFbITumyVM8gA84eUlX5FI5ckOMCdTOsLSaVrcYcQ9Vp0Bl0s8R';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const destinos = [
  { slug: 'dubai',            title: 'Itinerario Dubai: planificá tu viaje con IA',                   emoji: '🏙️', query: 'dubai skyline burj khalifa desert' },
  { slug: 'paris',            title: 'Itinerario París: 5 días perfectos con IA',                     emoji: '🗼', query: 'paris eiffel tower france romantic' },
  { slug: 'roma',             title: 'Itinerario Roma: 4 días que los romanos aprueban',               emoji: '🏛️', query: 'rome colosseum italy ancient' },
  { slug: 'barcelona',        title: 'Itinerario Barcelona: lo mejor en 4 días',                      emoji: '🌊', query: 'barcelona sagrada familia gaudi spain' },
  { slug: 'londres',          title: 'Itinerario Londres: 5 días sin perderte nada',                  emoji: '🎡', query: 'london big ben thames bridge' },
  { slug: 'nueva-york',       title: 'Itinerario Nueva York: 7 días que valen el vuelo',              emoji: '🗽', query: 'new york city manhattan skyline central park' },
  { slug: 'tokio',            title: 'Itinerario Tokio: la guía que ojalá hubieras tenido',           emoji: '🗾', query: 'tokyo japan cherry blossom temple' },
  { slug: 'cancun',           title: 'Itinerario Cancún: más allá del todo incluido',                 emoji: '🏖️', query: 'cancun mexico caribbean turquoise beach' },
  { slug: 'miami',            title: 'Itinerario Miami: 4 días más allá de South Beach',              emoji: '🌴', query: 'miami beach art deco ocean drive' },
  { slug: 'rio-de-janeiro',   title: 'Itinerario Río de Janeiro: la maravillosa en 5 días',          emoji: '🌆', query: 'rio de janeiro christ redeemer carnival brazil' },
  { slug: 'buenos-aires',     title: 'Itinerario Buenos Aires: la ciudad que enamora',               emoji: '🥩', query: 'buenos aires argentina tango street cafe' },
  { slug: 'cartagena',        title: 'Itinerario Cartagena: 3 días en la ciudad amurallada',         emoji: '🌺', query: 'cartagena colombia colonial architecture caribbean' },
  { slug: 'lima',             title: 'Itinerario Lima: gastronomía y cultura en 4 días',             emoji: '🍽️', query: 'lima peru miraflores gastronomy coast' },
  { slug: 'cusco',            title: 'Itinerario Cusco y Machu Picchu: prepará el viaje bien',       emoji: '🏔️', query: 'machu picchu peru inca ruins mountains fog' },
  { slug: 'amsterdam',        title: 'Itinerario Ámsterdam: canales, arte y bicicletas',             emoji: '🚲', query: 'amsterdam netherlands canal tulips bicycle' },
  { slug: 'lisboa',           title: 'Itinerario Lisboa: Portugal sin gastar una fortuna',           emoji: '🐟', query: 'lisbon portugal tram alfama viewpoint' },
  { slug: 'praga',            title: 'Itinerario Praga: la ciudad de cuento en 4 días',              emoji: '🏰', query: 'prague castle charles bridge bohemia' },
  { slug: 'bangkok',          title: 'Itinerario Bangkok: Asia al máximo en 5 días',                 emoji: '🛕', query: 'bangkok thailand temple golden palace' },
  { slug: 'bali',             title: 'Itinerario Bali: 7 días en la isla de los dioses',             emoji: '🌴', query: 'bali indonesia rice terraces temple sunset' },
  { slug: 'marrakech',        title: 'Itinerario Marrakech: 3 días en la ciudad roja',               emoji: '🕌', query: 'marrakech morocco medina souk riad' },
  { slug: 'florencia',        title: 'Itinerario Florencia: arte y gastronomía en 3 días',           emoji: '🎨', query: 'florence italy duomo renaissance art' },
  { slug: 'estambul',         title: 'Itinerario Estambul: donde Europa se encuentra con Asia',      emoji: '🕌', query: 'istanbul turkey hagia sophia bosphorus' },
  { slug: 'ciudad-de-mexico', title: 'Itinerario Ciudad de México: 5 días imperdibles',              emoji: '🌮', query: 'mexico city zocalo teotihuacan colorful' },
  { slug: 'singapur',         title: 'Itinerario Singapur: el futuro en 4 días',                     emoji: '🌃', query: 'singapore gardens bay skyline marina' },
  { slug: 'medellin',         title: 'Itinerario Medellín: la ciudad de la eterna primavera',        emoji: '🌸', query: 'medellin colombia cable car city flowers' },
  { slug: 'viena',            title: 'Itinerario Viena: música, arte y café en 4 días',              emoji: '🎼', query: 'vienna austria schoenbrunn palace opera' },
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

function makeTextSVG(destino) {
  const lines = wrapText(destino.title, 26);
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

  <rect x="0" y="0" width="1000" height="8" fill="#2ab5a0"/>

  ${textLines}

  <line x1="200" y1="${dividerY}" x2="800" y2="${dividerY}" stroke="#2ab5a0" stroke-width="2" opacity="0.8"/>

  <text x="500" y="${dividerY + 55}" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#2ab5a0" letter-spacing="2" filter="url(#shadow)">global-home-assist.vercel.app</text>

  <rect x="0" y="1380" width="1000" height="120" fill="rgba(0,0,0,0.5)"/>
  <text x="500" y="1450" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="700" fill="white" letter-spacing="3">GLOBAL HOME</text>
  <text x="500" y="1490" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#2ab5a0" letter-spacing="6">ASSIST</text>

  <rect x="0" y="1492" width="1000" height="8" fill="#2ab5a0"/>
</svg>`);
}

async function generatePin(destino) {
  const outPath = path.join(OUTPUT_DIR, `destino-${destino.slug}.png`);

  const photoBuffer = await fetchPhoto(destino.query);
  if (!photoBuffer) {
    console.log(`  ⚠️  Sin foto para "${destino.query}" — usando fondo sólido`);
    await sharp({
      create: { width: 1000, height: 1500, channels: 4, background: { r: 26, g: 42, b: 108, alpha: 1 } }
    })
      .composite([{ input: makeTextSVG(destino), blend: 'over' }])
      .png()
      .toFile(outPath);
    return;
  }

  await sharp(photoBuffer)
    .resize(1000, 1500, { fit: 'cover', position: 'centre' })
    .composite([
      { input: makeOverlaySVG(), blend: 'over' },
      { input: makeTextSVG(destino), blend: 'over' },
    ])
    .png()
    .toFile(outPath);
}

async function generateAll() {
  const slugFilter = process.argv[2] ? process.argv[2].split(',') : null;
  const targets = slugFilter ? destinos.filter(d => slugFilter.includes(d.slug)) : destinos;
  console.log(`Generando ${targets.length} pins de destino con fotos de fondo...\n`);
  for (let i = 0; i < targets.length; i++) {
    const destino = targets[i];
    process.stdout.write(`[${i + 1}/${targets.length}] ${destino.slug}... `);
    try {
      await generatePin(destino);
      console.log('✅');
    } catch (err) {
      console.log(`❌ ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 300));
  }
  console.log(`\nDone! Imágenes en ${OUTPUT_DIR}`);
}

generateAll().catch(console.error);
