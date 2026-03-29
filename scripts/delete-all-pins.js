const { chromium } = require('playwright');

const PINS_URL = 'https://ar.pinterest.com/globalhomeassistapp/_pins/';

async function main() {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const page = await browser.newPage();

  await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });
  console.log('\n👋 Iniciá sesión en Pinterest y presioná ENTER acá para continuar...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  let deleted = 0;

  while (true) {
    await page.goto(PINS_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    const pins = page.locator('[data-test-id="pin"]');
    const count = await pins.count();
    if (count === 0) {
      console.log('✅ No quedan más pins.');
      break;
    }
    console.log(`   Pins restantes: ${count}`);

    // Click first pin to open it
    await pins.first().click();
    await page.waitForTimeout(2500);

    // Try 3-dot menu button
    const moreBtn = page.locator('[data-test-id="pin-action-ellipsis-button"]')
      .or(page.locator('button[aria-label="Más opciones"]'))
      .or(page.locator('button[aria-label="More options"]'))
      .first();

    if (await moreBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await moreBtn.click();
      await page.waitForTimeout(1000);

      const deleteOpt = page.locator('text="Eliminar pin"')
        .or(page.locator('text="Delete Pin"'))
        .or(page.locator('text="Eliminar"'))
        .first();

      if (await deleteOpt.isVisible({ timeout: 2000 }).catch(() => false)) {
        await deleteOpt.click();
        await page.waitForTimeout(1000);

        // Confirm
        const confirmBtn = page.locator('button:has-text("Eliminar"), button:has-text("Delete")').last();
        if (await confirmBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
          await confirmBtn.click();
          await page.waitForTimeout(2500);
        }
        deleted++;
        console.log(`🗑️  Pin #${deleted} eliminado`);
        continue;
      }
    }

    // If 3-dot didn't work, take screenshot and log buttons
    await page.screenshot({ path: 'C:/Users/matia/Downloads/pin-debug.png' });
    const buttons = await page.evaluate(() =>
      Array.from(document.querySelectorAll('button')).slice(0, 20).map(b => ({
        text: b.textContent.trim().substring(0, 40),
        ariaLabel: b.getAttribute('aria-label'),
        testId: b.getAttribute('data-test-id'),
      })).filter(b => b.text || b.ariaLabel)
    );
    console.log('❌ No encontré el menú. Botones en la página:');
    console.log(JSON.stringify(buttons, null, 2));
    console.log('Screenshot guardado en Downloads/pin-debug.png');
    break;
  }

  console.log(`\n🎉 Total eliminados: ${deleted}`);
  await browser.close();
}

main().catch(console.error);
