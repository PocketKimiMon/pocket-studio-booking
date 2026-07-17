const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:8000', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(5000);

  const iframes = await page.locator('iframe').count();
  console.log('iframe count:', iframes);

  const calFrames = await page.locator('iframe[src*="cal.com"]').count();
  console.log('cal.com iframe count:', calFrames);

  const embedDiv = await page.locator('#cal-embed');
  console.log('embed div exists:', await embedDiv.count());
  console.log('embed div html:', await embedDiv.evaluate(el => el.innerHTML.substring(0, 500)));

  await page.screenshot({ path: 'embed-debug.png' });
  await browser.close();
})();
