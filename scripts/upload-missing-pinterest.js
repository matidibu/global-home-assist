const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const PINS_DIR = 'C:/Users/matia/Downloads/pinterest_pins';
const BASE_URL = 'https://global-home-assist.vercel.app/blog';
const BOARD_URL = 'https://ar.pinterest.com/globalhomeassistapp/itinerarios-de-viaje-con-ia/';
const BOARD_NAME = 'Itinerarios de Viaje con IA';

const posts = [
  { slug: 'planificar-viaje-con-ia', title: 'El algoritmo que planifica viajes mejor que cualquier agencia (y es gratis)', description: 'Durante décadas planificar un viaje significó horas en Google. La IA cambió las reglas del juego — y es gratis. Generá tu itinerario personalizado en segundos.' },
  { slug: 'viajar-europa-700-euros', title: 'Cómo viajar 7 días en Europa con 700€ sin mentirte', description: '7 días en Europa con 700€ es posible. Sin trucos de gurú, sin mentiras. Esta guía te muestra exactamente cómo hacerlo, destino por destino.' },
  { slug: 'dubai-sin-filtros', title: 'Dubai sin filtros: lo que Instagram no te muestra', description: 'Dubai es más que rascacielos y lujo. Lo que los influencers no te muestran puede hacerte ahorrar dinero y disfrutar más el viaje.' },
  { slug: 'roma-48-horas', title: 'Roma en 48 horas: el itinerario que los romanos aprueban', description: '48 horas en Roma bien usadas valen más que una semana mal planificada. Este itinerario fue validado por quien vive allá.' },
  { slug: 'barcelona-vs-madrid', title: 'Barcelona vs Madrid: la guía sin drama para elegir bien', description: '¿Barcelona o Madrid? Dependiendo de lo que buscás, la respuesta cambia. Esta guía te ayuda a elegir sin sesgos.' },
  { slug: 'errores-que-arruinan-viaje', title: 'Los 7 errores que arruinan un viaje (y cómo evitarlos)', description: 'Errores de planificación que casi todos cometen al menos una vez. Conocerlos antes de viajar puede salvar tu viaje.' },
  { slug: 'tokio-primera-vez', title: 'Tokio para el viajero que nunca fue a Asia', description: 'Primera vez en Tokio? Esta guía es lo que ojalá todo viajero tuviera antes de ir a Asia por primera vez.' },
  { slug: 'bali-2026', title: 'Bali en 2026: lo que los influencers no te muestran', description: 'Bali cambió. Lo que los influencers muestran no es lo que vas a encontrar. Esta es la guía honesta de Bali en 2026.' },
  { slug: 'buenos-aires-guia', title: 'Buenos Aires para el viajero del resto del mundo', description: 'Buenos Aires desde adentro. No la Buenos Aires de las guías turísticas, sino la que conoce quien vive allá.' },
  { slug: 'vuelos-latinoamerica-europa', title: 'Vuelos desde Latinoamérica a Europa: pagá menos', description: 'Los vuelos desde Latinoamérica a Europa no tienen por qué arruinarte el presupuesto. Esta guía te muestra cómo encontrar los mejores precios.' },
  { slug: 'viajar-mascotas', title: 'Viajar con mascotas: la guía completa', description: 'Viajar con mascotas requiere preparación. Esta guía cubre todo lo que necesitás saber para que el viaje sea cómodo.' },
  { slug: 'viajar-mundo-en-conflicto', title: 'Viajar cuando el mundo no está en paz', description: 'Cómo viajar con información real y decisiones inteligentes, sin que el miedo te paralice.' },
  { slug: 'viajar-hijos-chicos', title: 'Viajar con hijos chicos (0-6 años): lo que funciona y lo que no', description: 'Viajar con hijos pequeños es posible y puede ser hermoso. Pero requiere saber qué funciona antes de salir.' },
  { slug: 'viajar-adolescentes', title: 'Viajar con adolescentes: un viaje que quieran recordar', description: 'Los adolescentes pueden ser los mejores compañeros de viaje, si el plan los incluye de verdad.' },
  { slug: 'viajes-parejas-50', title: 'Viajes para parejas 50+: viajar bien cuando ya saben lo que quieren', description: 'Cuando ya sabés lo que querés de un viaje, el mundo se abre diferente. Guía para parejas que viajan con criterio.' },
  { slug: 'viajar-solo-65', title: 'Viajar solo después de los 65: más posible de lo que te dijeron', description: 'La edad no es un límite para viajar solo. Es una nueva libertad. Todo lo que necesitás saber para empezar.' },
  { slug: 'viajar-hijos-adultos', title: 'Viajar con hijos adultos sin que nadie quede resentido', description: 'Viajar con hijos adultos requiere negociación, respeto mutuo y un buen plan. Esta guía lo hace más fácil.' },
  { slug: 'paris-2026', title: 'París 2026: guía completa para tu primer viaje (o el de siempre)', description: 'París nunca pasa de moda, pero sí cambia. Guía actualizada 2026 para aprovechar París al máximo.' },
  { slug: 'nueva-york-primera-vez', title: 'Nueva York por primera vez: lo que nadie te cuenta antes de ir', description: 'Nueva York es única, abrumadora y adictiva. Hay cosas que nadie te cuenta que pueden cambiar tu experiencia.' },
  { slug: 'cancun-riviera-maya', title: 'Cancún y Riviera Maya: más allá del todo incluido', description: 'El Caribe mexicano tiene mucho más que el lobby del hotel. Esta guía te saca del todo incluido.' },
  { slug: 'cusco-machu-picchu', title: 'Cusco y Machu Picchu: la guía que ojalá hubiera tenido antes de ir', description: 'Machu Picchu es uno de los destinos más impresionantes del mundo. Esta guía te prepara para lo que ningún tour te dice.' },
  { slug: 'lisboa-2026', title: 'Lisboa 2026: enamorarse de Portugal sin gastar una fortuna', description: 'Lisboa es Europa sin pretensiones. Cultura, gastronomía y belleza a precios razonables. Guía completa 2026.' },
  { slug: 'miami-2026', title: 'Miami 2026: ir más allá de South Beach', description: 'Miami es mucho más que South Beach. Esta guía te lleva a los barrios y experiencias que lo hacen realmente especial.' },
  { slug: 'visa-schengen', title: 'Visa Schengen para latinoamericanos: guía paso a paso 2026', description: 'La visa Schengen puede parecer complicada. Esta guía paso a paso lo hace manejable para cualquier latinoamericano.' },
  { slug: 'equipaje-de-mano', title: 'Viajar solo con equipaje de mano: no facturar nunca más', description: 'Facturar equipaje es perder tiempo, dinero y libertad. Esta guía te enseña a empacar todo en una mochila de cabina.' },
];

async function getExistingPinTitles(page) {
  console.log('🔍 Revisando tablero para detectar pins existentes...');
  await page.goto(BOARD_URL, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  // Scroll down to load all pins
  let prevCount = 0;
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);
    const count = await page.locator('[data-test-id="pin"]').count();
    if (count === prevCount) break;
    prevCount = count;
  }

  // Collect all pin titles visible on the board
  const titles = await page.evaluate(() => {
    const pins = document.querySelectorAll('[data-test-id="pin"]');
    return Array.from(pins).map(pin => {
      const titleEl = pin.querySelector('div[title], [data-test-id="pin-visual-title"], span');
      return titleEl ? titleEl.textContent.trim() : '';
    }).filter(Boolean);
  });

  return titles;
}

async function uploadPin(page, post) {
  const imagePath = path.resolve(PINS_DIR, `${post.slug}.png`);
  if (!fs.existsSync(imagePath)) {
    console.log(`   ⚠️  Imagen no encontrada: ${imagePath}`);
    return false;
  }

  await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  await page.locator('[data-test-id="storyboard-upload-input"]').setInputFiles(imagePath, { force: true });
  await page.waitForTimeout(4000);

  await page.locator('input[placeholder="Agregá un título"]').fill(post.title.substring(0, 100));
  await page.waitForTimeout(300);

  const descDiv = page.locator('div[contenteditable="true"]').first();
  await descDiv.click();
  await descDiv.fill(post.description);
  await page.waitForTimeout(300);

  await page.locator('input[placeholder="Agregá un enlace"]').fill(`${BASE_URL}/${post.slug}`);
  await page.waitForTimeout(300);

  await page.locator('[data-test-id="board-dropdown-select-button"]').click();
  await page.waitForTimeout(1500);

  const boardSearch = page.locator('input[placeholder="Buscar"]').last();
  if (await boardSearch.isVisible({ timeout: 2000 }).catch(() => false)) {
    await boardSearch.fill(BOARD_NAME);
    await page.waitForTimeout(1000);
  }
  await page.locator(`text="${BOARD_NAME}"`).first().click({ timeout: 5000 });
  await page.waitForTimeout(1000);

  const publishBtn = page.locator('button[data-test-id="board-dropdown-save-button"], button:has-text("Publicar"), button:has-text("Guardar")').first();
  await publishBtn.click({ timeout: 8000 });
  await page.waitForTimeout(5000);

  return true;
}

async function main() {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });
  console.log('\n👋 Iniciá sesión en Pinterest y presioná ENTER acá para continuar...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  // Check which pins already exist
  const existingTitles = await getExistingPinTitles(page);
  console.log(`\n📋 Pins encontrados en el tablero: ${existingTitles.length}`);

  // Find missing posts by checking if their title (first 50 chars) appears in existing titles
  const missing = posts.filter(post => {
    const shortTitle = post.title.substring(0, 50).toLowerCase();
    return !existingTitles.some(t => t.toLowerCase().includes(shortTitle.substring(0, 30)));
  });

  if (missing.length === 0) {
    console.log('✅ Todos los pins ya están en el tablero. Nada que subir.');
    await browser.close();
    return;
  }

  console.log(`\n🚀 Subiendo ${missing.length} pin(s) faltante(s):\n`);
  missing.forEach((p, i) => console.log(`  ${i + 1}. ${p.title.substring(0, 70)}`));
  console.log('');

  let ok = 0;
  let fail = 0;

  for (let i = 0; i < missing.length; i++) {
    const post = missing[i];
    console.log(`[${i + 1}/${missing.length}] ${post.title.substring(0, 60)}...`);
    try {
      const result = await uploadPin(page, post);
      if (result) { ok++; console.log('   ✅ Publicado'); }
    } catch (err) {
      fail++;
      console.log(`   ❌ ${err.message.split('\n')[0]}`);
    }
    await page.waitForTimeout(2000);
  }

  console.log(`\n🎉 Terminado! ✅ ${ok} publicados, ❌ ${fail} fallidos`);
  await browser.close();
}

main().catch(console.error);
