const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

const PINS_DIR = 'C:/Users/matia/Downloads/pinterest_pins';
const BASE_URL = 'https://global-home-assist.vercel.app/destino';
const BOARD_NAME = 'Itinerarios de Viaje con IA';
const USER_DATA_DIR = 'C:/Users/matia/.playwright-pinterest-session';
const STATE_FILE = path.join(__dirname, 'pinterest_destinos_state.json');

const destinos = [
  { slug: 'dubai',            title: 'Itinerario Dubai: planificá tu viaje con IA',                   description: 'Generá un itinerario personalizado para Dubai en segundos. Playas, desierto, gastronomía y rascacielos — todo en un plan a tu medida.' },
  { slug: 'paris',            title: 'Itinerario París: 5 días perfectos con IA',                     description: 'El Louvre, Montmartre, Notre-Dame y los mejores bistrós. Tu itinerario ideal para París, generado con inteligencia artificial.' },
  { slug: 'roma',             title: 'Itinerario Roma: 4 días que los romanos aprueban',               description: 'Coliseo, Vaticano, Trastevere y helado en cada esquina. Planificá Roma como un local con ayuda de IA.' },
  { slug: 'barcelona',        title: 'Itinerario Barcelona: lo mejor en 4 días',                      description: 'Gaudí, la Barceloneta, el Born y la mejor paella. Tu itinerario para Barcelona hecho a medida con IA.' },
  { slug: 'londres',          title: 'Itinerario Londres: 5 días sin perderte nada',                  description: 'Big Ben, museos gratis, mercados y pubs históricos. Planificá Londres con inteligencia artificial y aprovechá cada hora.' },
  { slug: 'nueva-york',       title: 'Itinerario Nueva York: 7 días que valen el vuelo',              description: 'Manhattan, Brooklyn, Central Park y los mejores bagels. Tu itinerario personalizado para Nueva York, generado con IA.' },
  { slug: 'tokio',            title: 'Itinerario Tokio: la guía que ojalá hubieras tenido',           description: 'Shibuya, Asakusa, ramen a medianoche y cerezos en flor. Planificá Tokio con IA y viví Asia como un local.' },
  { slug: 'cancun',           title: 'Itinerario Cancún: más allá del todo incluido',                 description: 'Cenotes, Chichén Itzá, Playa del Carmen y tequila al atardecer. Tu itinerario para Cancún y Riviera Maya con IA.' },
  { slug: 'miami',            title: 'Itinerario Miami: 4 días más allá de South Beach',              description: 'Wynwood, Little Havana, los Everglades y mojitos de autor. Planificá Miami a tu manera con inteligencia artificial.' },
  { slug: 'rio-de-janeiro',   title: 'Itinerario Río de Janeiro: la maravillosa en 5 días',          description: 'Cristo Redentor, Ipanema, caipirinha y samba. Tu itinerario completo para Río de Janeiro generado con IA.' },
  { slug: 'buenos-aires',     title: 'Itinerario Buenos Aires: la ciudad que enamora',               description: 'Palermo, San Telmo, asado y tango. Planificá Buenos Aires como un porteño con ayuda de inteligencia artificial.' },
  { slug: 'cartagena',        title: 'Itinerario Cartagena: 3 días en la ciudad amurallada',         description: 'Murallas coloniales, Islas del Rosario y ceviche de camarón. Tu itinerario para Cartagena de Indias con IA.' },
  { slug: 'lima',             title: 'Itinerario Lima: gastronomía y cultura en 4 días',             description: 'Miraflores, Barranco, ceviche y la mejor gastronomía de Latinoamérica. Planificá Lima con inteligencia artificial.' },
  { slug: 'cusco',            title: 'Itinerario Cusco y Machu Picchu: preparate bien',              description: 'Machu Picchu, Valle Sagrado, coca para la altura y mercados incas. Tu itinerario completo para Cusco con IA.' },
  { slug: 'amsterdam',        title: 'Itinerario Ámsterdam: canales, arte y bicicletas',             description: 'Van Gogh, Anne Frank, tulipanes y queso Gouda. Planificá Ámsterdam a tu ritmo con inteligencia artificial.' },
  { slug: 'lisboa',           title: 'Itinerario Lisboa: Portugal sin gastar una fortuna',           description: 'Alfama, pastéis de nata, tranvías históricos y el Tajo al atardecer. Tu itinerario para Lisboa con IA.' },
  { slug: 'praga',            title: 'Itinerario Praga: la ciudad de cuento en 4 días',              description: 'Castillo de Praga, Puente de Carlos, cerveza checa y barrios medievales. Planificá Praga con inteligencia artificial.' },
  { slug: 'bangkok',          title: 'Itinerario Bangkok: Asia al máximo en 5 días',                 description: 'Templos dorados, mercados flotantes, pad thai y masajes tailandeses. Tu itinerario para Bangkok con IA.' },
  { slug: 'bali',             title: 'Itinerario Bali: 7 días en la isla de los dioses',             description: 'Ubud, Uluwatu, arrozales en terrazas y puestas de sol épicas. Planificá Bali con inteligencia artificial.' },
  { slug: 'marrakech',        title: 'Itinerario Marrakech: 3 días en la ciudad roja',               description: 'Djemaa el Fna, souks, riads y té de menta con dátiles. Tu itinerario para Marrakech con IA.' },
  { slug: 'florencia',        title: 'Itinerario Florencia: arte y gastronomía en 3 días',           description: 'Los Uffizi, el David de Miguel Ángel, bistecca fiorentina y vino Chianti. Tu itinerario para Florencia con IA.' },
  { slug: 'estambul',         title: 'Itinerario Estambul: donde Europa se encuentra con Asia',      description: 'Hagia Sofía, el Gran Bazar, el Bósforo y baklava recién hecho. Planificá Estambul con inteligencia artificial.' },
  { slug: 'ciudad-de-mexico', title: 'Itinerario Ciudad de México: 5 días imperdibles',              description: 'Teotihuacán, Coyoacán, tacos al pastor y museos de clase mundial. Tu itinerario para CDMX con IA.' },
  { slug: 'singapur',         title: 'Itinerario Singapur: el futuro en 4 días',                     description: 'Gardens by the Bay, hawker centers, Marina Bay y el mejor chili crab del mundo. Planificá Singapur con IA.' },
  { slug: 'medellin',         title: 'Itinerario Medellín: la ciudad de la eterna primavera',        description: 'El Poblado, Guatapé, cable car y flores todo el año. Tu itinerario para Medellín con inteligencia artificial.' },
  { slug: 'viena',            title: 'Itinerario Viena: música, arte y café en 4 días',              description: 'Schönbrunn, la Ópera, Klimt y el mejor apfelstrudel de Europa. Planificá Viena con inteligencia artificial.' },
];

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  }
  return { uploaded: [] };
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function askConfirmation(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, answer => { rl.close(); resolve(answer); }));
}

async function uploadPin(page, destino) {
  const imagePath = path.resolve(PINS_DIR, `destino-${destino.slug}.png`);
  if (!fs.existsSync(imagePath)) {
    console.log(`   ⚠️  Imagen no encontrada: ${imagePath}`);
    return false;
  }

  await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  await page.locator('[data-test-id="storyboard-upload-input"]').setInputFiles(imagePath, { force: true });
  await page.waitForTimeout(5000);

  await page.locator('input[placeholder="Agregá un título"]').fill(destino.title.substring(0, 100));
  await page.waitForTimeout(500);

  const descDiv = page.locator('div[contenteditable="true"]').first();
  await descDiv.click();
  await descDiv.fill(destino.description);
  await page.waitForTimeout(500);

  await page.locator('input[placeholder="Agregá un enlace"]').fill(`${BASE_URL}/${destino.slug}`);
  await page.waitForTimeout(500);

  await page.locator('[data-test-id="board-dropdown-select-button"]').click();
  await page.waitForTimeout(2000);

  const boardSearch = page.locator('input[placeholder="Buscar"]').last();
  if (await boardSearch.isVisible({ timeout: 2000 }).catch(() => false)) {
    await boardSearch.fill(BOARD_NAME);
    await page.waitForTimeout(1000);
  }
  await page.locator(`text="${BOARD_NAME}"`).first().click({ timeout: 5000 });
  await page.waitForTimeout(1000);

  const publishBtn = page.locator('button[data-test-id="board-dropdown-save-button"], button:has-text("Publicar"), button:has-text("Guardar")').first();
  await publishBtn.click({ timeout: 8000 });

  // Wait for success: URL changes to /pin/... or a toast appears
  try {
    await page.waitForURL(/pinterest\.com\/pin\/\d+/, { timeout: 15000 });
    await page.waitForTimeout(3000);
    return true;
  } catch {
    // Fallback: check for a success toast
    const toastOk = await page.locator('[data-test-id="toast"], [role="status"]').isVisible({ timeout: 5000 }).catch(() => false);
    await page.waitForTimeout(3000);
    return toastOk;
  }
}

async function main() {
  const state = loadState();
  console.log(`\n📂 Estado local: ${state.uploaded.length} pin(s) ya subidos en sesiones anteriores.`);

  const pending = destinos.filter(d => !state.uploaded.includes(d.slug));

  if (pending.length === 0) {
    console.log('✅ Todos los pins ya fueron subidos. Nada que hacer.');
    return;
  }

  console.log(`\n📋 Se van a subir ${pending.length} pin(s):\n`);
  pending.forEach((d, i) => console.log(`  ${i + 1}. ${d.title}`));

  const answer = await askConfirmation('\n¿Confirmás? (ENTER para continuar, "n" para cancelar): ');
  if (answer.trim().toLowerCase() === 'n') {
    console.log('Cancelado.');
    return;
  }

  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    slowMo: 50,
    args: ['--disable-blink-features=AutomationControlled'],
  });
  const page = context.pages()[0] || await context.newPage();

  await page.goto('https://www.pinterest.com/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const isLoggedIn = await page.locator('[data-test-id="header-avatar"], [data-test-id="homefeed-component"]').count() > 0;

  if (!isLoggedIn) {
    await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });
    await askConfirmation('\n👋 Iniciá sesión en Pinterest y presioná ENTER acá para continuar...');
  } else {
    console.log('\n✅ Sesión de Pinterest activa (cookies guardadas).');
  }

  console.log(`\n🚀 Empezando subida...\n`);

  let ok = 0;
  let fail = 0;

  for (let i = 0; i < pending.length; i++) {
    const destino = pending[i];
    console.log(`[${i + 1}/${pending.length}] ${destino.title.substring(0, 65)}...`);
    try {
      const result = await uploadPin(page, destino);
      if (result) {
        ok++;
        state.uploaded.push(destino.slug);
        saveState(state);
        console.log('   ✅ Publicado y guardado en estado local');
      } else {
        fail++;
        console.log('   ⚠️  No se pudo confirmar el éxito — no se marca como subido');
      }
    } catch (err) {
      fail++;
      console.log(`   ❌ Error: ${err.message.split('\n')[0]}`);
    }
    // Pause between pins to avoid rate limiting
    await page.waitForTimeout(4000);
  }

  console.log(`\n🎉 Terminado! ✅ ${ok} publicados, ❌ ${fail} fallidos`);
  if (fail > 0) console.log('   → Volvé a correr el script para reintentar los fallidos (los exitosos se saltean automáticamente).');

  await context.close();
}

main().catch(console.error);
