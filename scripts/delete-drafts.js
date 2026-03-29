const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const page = await browser.newPage();

  await page.goto('https://www.pinterest.com/login/', { waitUntil: 'domcontentloaded' });
  console.log('\n👋 Iniciá sesión en Pinterest y presioná ENTER acá para continuar...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  let totalDeleted = 0;

  while (true) {
    // Click "Seleccionar todos"
    const selectAll = page.locator('text="Seleccionar todos"').first();
    if (!(await selectAll.isVisible({ timeout: 5000 }).catch(() => false))) {
      console.log('✅ No hay más borradores.');
      break;
    }

    await selectAll.click();
    await page.waitForTimeout(1500);

    await page.waitForTimeout(1000);

    // The trash button appears just before "Publicar" in the action bar
    // Click the button immediately to the left of "Publicar"
    const publishBtn = page.locator('button:has-text("Publicar"), button:has-text("Publish")').first();
    await publishBtn.waitFor({ timeout: 5000 });

    // Trash is the button before Publicar — use evaluate to find and click it
    const trashClicked = await page.evaluate(() => {
      const publishBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Publicar' || b.textContent.trim() === 'Publish');
      if (!publishBtn) return false;
      // Get parent container and find sibling buttons
      const container = publishBtn.closest('div');
      if (!container) return false;
      const buttons = Array.from(container.querySelectorAll('button'));
      // Trash is the first button (before publish)
      if (buttons.length > 0 && buttons[0] !== publishBtn) {
        buttons[0].click();
        return true;
      }
      return false;
    });

    if (!trashClicked) {
      // Last resort: click at the coordinates of the trash icon from the screenshot
      await page.mouse.click(949, 683);
    }

    await page.waitForTimeout(2000);

    // Confirm dialog if appears
    const confirmBtn = page.locator('button:has-text("Eliminar"), button:has-text("Delete"), button:has-text("Sí")').last();
    if (await confirmBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await confirmBtn.click();
      await page.waitForTimeout(3000);
    }

    await page.screenshot({ path: 'C:/Users/matia/Downloads/after-delete.png' });
    totalDeleted += 50;
    console.log(`🗑️  Borradores eliminados`);
  }

  console.log(`\n🎉 Listo! Total eliminados: ${totalDeleted}`);
  await browser.close();
}

main().catch(console.error);
