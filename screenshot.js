const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'http://localhost:8000';
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Desktop
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(6000);
  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: true });

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(6000);
  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });

  await browser.close();
  console.log('Screenshots saved: screenshot-desktop.png, screenshot-mobile.png');
})();
