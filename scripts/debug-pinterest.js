const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  console.log('Abriendo Pinterest login...');
  await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });

  console.log('Iniciá sesión en Pinterest. Cuando estés logueado, presioná ENTER acá...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  console.log('Navegando al pin builder...');
  await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(4000);

  await page.screenshot({ path: 'C:/Users/matia/Downloads/pinterest-debug.png', fullPage: true });
  console.log('Screenshot guardado en Downloads/pinterest-debug.png');

  const elements = await page.locator('button, input, textarea, [role="button"]').all();
  console.log(`\nElementos encontrados: ${elements.length}`);
  for (const el of elements.slice(0, 30)) {
    const tag = await el.evaluate(e => e.tagName).catch(() => '');
    const text = (await el.innerText().catch(() => '')).substring(0, 30).replace(/\n/g, ' ');
    const aria = await el.getAttribute('aria-label').catch(() => '');
    const ph = await el.getAttribute('placeholder').catch(() => '');
    const testId = await el.getAttribute('data-test-id').catch(() => '');
    const type = await el.getAttribute('type').catch(() => '');
    console.log(`  ${tag} type="${type}" | aria="${aria}" | ph="${ph}" | testId="${testId}" | text="${text}"`);
  }

  await browser.close();
})().catch(console.error);
