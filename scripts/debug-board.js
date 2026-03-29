const { chromium } = require('playwright');
const path = require('path');

async function main() {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const page = await browser.newPage();

  await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });
  console.log('\n👋 Iniciá sesión y presioná ENTER...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  const imagePath = path.resolve('C:/Users/matia/Downloads/pinterest_pins/bali-2026.png');
  await page.locator('[data-test-id="storyboard-upload-input"]').setInputFiles(imagePath, { force: true });
  await page.waitForTimeout(5000);
  await page.locator('input[placeholder="Agregá un título"]').fill('Test');
  await page.waitForTimeout(500);

  // Open dropdown
  await page.locator('[data-test-id="board-dropdown-select-button"]').click();
  await page.waitForTimeout(3000);

  // Screenshot
  await page.screenshot({ path: 'C:/Users/matia/Downloads/dropdown-open.png', fullPage: false });
  console.log('📸 Screenshot guardado en Downloads/dropdown-open.png');

  // Dump ALL elements that might be the board option
  const elements = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => el.children.length === 0 && el.textContent.trim().length > 3 && el.textContent.trim().length < 100)
      .filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && rect.top > 200;
      })
      .slice(0, 30)
      .map(el => ({
        tag: el.tagName,
        text: el.textContent.trim(),
        testId: el.getAttribute('data-test-id'),
        role: el.getAttribute('role'),
        class: el.className?.toString().substring(0, 60),
      }));
  });
  console.log('\nElementos visibles:\n', JSON.stringify(elements, null, 2));

  await browser.close();
}

main().catch(console.error);
