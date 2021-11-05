const puppeteer = require('puppeteer');

describe('puppeteer-helloworld', function () {
  const url = 'http://localhost:3000/';
  let browser, page;

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  async function setupLocalStorage(browser, ls_o) {
    let set_ls_page = await browser.newPage();
    await set_ls_page.setRequestInterception(true);

    set_ls_page.on('request', (r) => {
      r.respond({
        status: 200,
        contentType: 'text/plain',
        body: 'tweaking local storage',
      });
    });
    await set_ls_page.goto(url);
    await set_ls_page.evaluate((ls_o) => {
      // running inside browser
      Object.keys(ls_o).forEach((k) => {
        localStorage.setItem(k, ls_o[k]);
      });
    }, ls_o);
    await set_ls_page.waitForTimeout(1 * 1000);

    await set_ls_page.close();
  }

  it(
    'puppeteer rendering test',
    async () => {
      browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
      });

      await setupLocalStorage(browser, { storageKey: 'ls_world' });

      page = await browser.newPage();
      await page.goto(url);
      await page.waitForTimeout(5 * 1000);
      await page.close();
    },
    60 * 1000
  );
});
