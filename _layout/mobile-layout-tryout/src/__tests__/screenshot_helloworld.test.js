const puppeteer = require('puppeteer');
const device_iPhonex = puppeteer.devices['iPhone X'];

const headless = true;
const ignoreHTTPSErrors = true;

describe(``, () => {
  let manage_browser, manage_page;
  beforeAll(async () => {
    manage_browser = await puppeteer.launch({
      defaultViewport: { width: 1920, height: 1080 },
      ignoreHTTPSErrors,
      headless,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-font-subpixel-positioning',
      ],
    });
    manage_page = await manage_browser.newPage();
    await manage_page.emulate(device_iPhonex);
  });

  afterAll(async () => {
    await manage_browser.close();
  });

  test('helloworld1', async () => {
    await manage_page.goto('http://localhost:3000');

    await manage_page.screenshot({
      path: './docs/helloworld1.png',
      fullPage: true,
    });
  });
  test('helloworld2', async () => {
    await manage_page.goto('http://localhost:3000/zh/helloworld2');

    await manage_page.screenshot({
      path: './docs/helloworld2.png',
      fullPage: true,
    });
  });
  test('search', async () => {
    await manage_page.goto('http://localhost:3000/zh/search');

    await manage_page.screenshot({
      path: './docs/search.png',
      fullPage: true,
    });
  });
  test('settings', async () => {
    await manage_page.goto('http://localhost:3000/zh/settings');

    await manage_page.screenshot({
      path: './docs/settings.png',
      fullPage: true,
    });
  });
  test('MapSearch', async () => {
    await manage_page.goto('http://localhost:3000/zh/MapSearch');

    await manage_page.screenshot({
      path: './docs/MapSearch.png',
      fullPage: true,
    });
  });
});
