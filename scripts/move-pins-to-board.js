const { chromium } = require('playwright');

const PINS_URL = 'https://ar.pinterest.com/globalhomeassistapp/_pins/';

async function main() {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const page = await browser.newPage();

  await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });
  console.log('\n👋 Iniciá sesión en Pinterest y presioná ENTER acá para continuar...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  let moved = 0;

  while (true) {
    await page.goto(PINS_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    const pins = page.locator('[data-test-id="pin"]');
    const count = await pins.count();
    if (count === 0) {
      console.log('✅ No quedan más pins sin tablero.');
      break;
    }
    console.log(`   Pins sin tablero: ${count}`);

    // Click first pin
    await pins.first().click();
    await page.waitForTimeout(2500);

    // Click edit (pencil) button
    const editBtn = page.locator('[data-test-id="edit-pin-button"], [aria-label="Editar pin"], [aria-label="Edit pin"]').first();
    if (!(await editBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
      // Try 3-dot menu
      const moreBtn = page.locator('[data-test-id="pin-action-ellipsis-button"]').first();
      if (await moreBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await moreBtn.click();
        await page.waitForTimeout(1000);
        const editOpt = page.locator('text="Editar pin"').or(page.locator('text="Edit pin"')).first();
        if (await editOpt.isVisible({ timeout: 2000 }).catch(() => false)) {
          await editOpt.click();
          await page.waitForTimeout(2000);
        }
      } else {
        console.log('   ⚠️  No encontré botón de edición, saltando...');
        await page.goBack();
        await page.waitForTimeout(1500);
        continue;
      }
    } else {
      await editBtn.click();
      await page.waitForTimeout(2000);
    }

    // Open board dropdown
    const boardBtn = page.locator('[data-test-id="board-dropdown-select-button"]').first();
    if (!(await boardBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
      console.log('   ⚠️  No encontré selector de tablero');
      await page.keyboard.press('Escape');
      await page.goBack();
      await page.waitForTimeout(1500);
      continue;
    }
    await boardBtn.click();
    await page.waitForTimeout(2500);

    // Select first board in list
    const boardSelectors = [
      '[data-test-id="board-row"]',
      '[data-test-id="boardRow"]',
      '[role="option"]',
      'li:has-text("Itinerarios")',
    ];

    let selected = false;
    for (const sel of boardSelectors) {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 2000 }).catch(() => false)) {
        await el.click({ timeout: 5000 });
        selected = true;
        break;
      }
    }

    if (!selected) {
      await page.screenshot({ path: 'C:/Users/matia/Downloads/board-debug.png' });
      console.log('   ❌ No pude seleccionar el tablero — screenshot guardado en Downloads/board-debug.png');
      await page.keyboard.press('Escape');
      await page.goBack();
      await page.waitForTimeout(1500);
      continue;
    }

    await page.waitForTimeout(1500);

    // Save
    const saveBtn = page.locator('button:has-text("Guardar"), button:has-text("Save"), [data-test-id="save-pin-button"]').first();
    if (await saveBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await saveBtn.click({ timeout: 8000 });
      await page.waitForTimeout(3000);
      moved++;
      console.log(`✅ Pin #${moved} movido al tablero`);
    } else {
      console.log('   ⚠️  No encontré botón Guardar');
      await page.keyboard.press('Escape');
      await page.goBack();
      await page.waitForTimeout(1500);
    }
  }

  console.log(`\n🎉 Total movidos: ${moved}`);
  await browser.close();
}

main().catch(console.error);
