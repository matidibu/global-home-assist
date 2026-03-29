const { chromium } = require('playwright');

const BOARD_URL = 'https://ar.pinterest.com/globalhomeassistapp/itinerarios-de-viaje-con-ia/';

async function main() {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const page = await browser.newPage();

  await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });
  console.log('\n👋 Iniciá sesión en Pinterest y presioná ENTER acá para continuar...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  console.log('\n🗑️  Borrando pins del tablero...\n');

  let deleted = 0;

  while (true) {
    await page.goto(BOARD_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    // Find all pins in the board
    const pins = page.locator('[data-test-id="pin"]');
    const count = await pins.count();
    if (count === 0) {
      console.log('✅ No quedan más pins en el tablero.');
      break;
    }
    console.log(`   Pins restantes en el tablero: ${count}`);

    const pin = pins.first();

    // Hover to reveal the edit pencil button
    await pin.hover();
    await page.waitForTimeout(800);

    // Try clicking the edit (pencil) button that appears on hover
    const editBtn = page.locator('[data-test-id="edit-pin-button"], [aria-label="Editar pin"], [aria-label="Edit pin"]').first();
    const editVisible = await editBtn.isVisible({ timeout: 2000 }).catch(() => false);

    if (editVisible) {
      await editBtn.click();
      await page.waitForTimeout(2000);

      // In the edit modal, find the delete button
      const deleteBtn = page.locator('button:has-text("Eliminar"), button:has-text("Delete"), [data-test-id="delete-pin-button"]').first();
      const deleteVisible = await deleteBtn.isVisible({ timeout: 3000 }).catch(() => false);

      if (deleteVisible) {
        await deleteBtn.click();
        await page.waitForTimeout(1000);

        // Confirm dialog
        const confirmBtn = page.locator('button:has-text("Eliminar"), button:has-text("Delete")').last();
        if (await confirmBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
          await confirmBtn.click();
          await page.waitForTimeout(2000);
        }

        deleted++;
        console.log(`🗑️  Pin #${deleted} eliminado`);
        continue;
      } else {
        console.log('   ⚠️  Modal abierto pero no encontré botón Eliminar');
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
      }
    }

    // Fallback: open the pin and try from there
    console.log('   Intentando desde la página del pin...');
    await pin.click();
    await page.waitForTimeout(2500);

    // Look for 3-dot / more options in pin page
    const moreOptions = page.locator('[data-test-id="pin-action-ellipsis-button"]').or(
      page.locator('button[aria-label="Más opciones"]')
    ).or(
      page.locator('button[aria-label="More options"]')
    ).first();

    if (await moreOptions.isVisible({ timeout: 3000 }).catch(() => false)) {
      await moreOptions.click();
      await page.waitForTimeout(1000);

      const delOpt = page.locator('text="Eliminar pin"').or(page.locator('text="Delete Pin"')).first();
      if (await delOpt.isVisible({ timeout: 2000 }).catch(() => false)) {
        await delOpt.click();
        await page.waitForTimeout(1000);
        const confirmBtn = page.locator('button:has-text("Eliminar"), button:has-text("Delete")').last();
        if (await confirmBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
          await confirmBtn.click();
          await page.waitForTimeout(2000);
        }
        deleted++;
        console.log(`🗑️  Pin #${deleted} eliminado`);
        continue;
      }
    }

    // If nothing worked, log current page selectors for debugging
    console.log('\n❌ No pude encontrar cómo eliminar este pin. Inspeccionando la página...');
    const buttons = await page.evaluate(() =>
      Array.from(document.querySelectorAll('button')).slice(0, 15).map(b => ({
        text: b.textContent.trim().substring(0, 40),
        ariaLabel: b.getAttribute('aria-label'),
        testId: b.getAttribute('data-test-id'),
      }))
    );
    console.log('Botones encontrados:', JSON.stringify(buttons, null, 2));
    console.log('\nPausando 10s para que puedas inspeccionar el browser...');
    await page.waitForTimeout(10000);
    break;
  }

  console.log(`\n🎉 Total eliminados: ${deleted}`);
  await browser.close();
}

main().catch(console.error);
