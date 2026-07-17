const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));

  await page.goto('http://localhost:8000', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(8000);

  // scroll to booking section
  await page.locator('#book').scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);

  const iframe = page.locator('iframe[src*="cal.com"]').first();
  console.log('first iframe exists:', await iframe.count());

  const frame = await iframe.contentFrame();
  if (frame) {
    const bodyText = await frame.locator('body').innerText().catch(() => 'no body text');
    console.log('iframe body text (first 300):', bodyText.substring(0, 300));
    const headings = await frame.locator('h1, h2, h3').count();
    console.log('headings in iframe:', headings);
    const btns = await frame.locator('button').count();
    console.log('buttons in iframe:', btns);
  } else {
    console.log('could not access iframe content');
  }

  await page.screenshot({ path: 'embed-focus.png' });
  await browser.close();
})();
