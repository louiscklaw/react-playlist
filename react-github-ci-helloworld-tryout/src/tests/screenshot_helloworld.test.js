const puppeteer = require('puppeteer');

const {desktop_browser} = require('./puppeteer_browser')
const {INIT_CWD} = process.env

describe(``, () => {
  let manage_browser, manage_page;
  beforeAll(async () => {
    manage_browser = await desktop_browser()
    manage_page = await manage_browser.newPage();
  });

  afterAll(async () => {
    await manage_browser.close();
  });

  test('', async () => {
    await manage_page.goto('http://localhost:3000');
    await manage_page.screenshot({path: `${INIT_CWD}/docs/screenshot.png`,fullPage: true,});
  });
});

describe(`multiple browser helloworld`, () => {
  let cms_browser, client_browser, admin_browser, manage_page, client_page, admin_page;
  beforeAll(async () => {
    cms_browser = await desktop_browser()
    client_browser = await desktop_browser()
    admin_browser = await desktop_browser()

    manage_page = await cms_browser.newPage();
    client_page = await client_browser.newPage();
    admin_page = await admin_browser.newPage();
  });

  afterAll(async () => {
    await cms_browser.close();
    await client_browser.close();
    await admin_browser.close();
  });

  test('', async () => {
    await manage_page.goto('http://localhost:3000');
    await manage_page.screenshot({path: `${INIT_CWD}/docs/screenshot.png`,fullPage: true,});

    await client_page.goto('http://localhost:3000');
    await client_page.screenshot({path: `${INIT_CWD}/docs/client_screenshot.png`,fullPage: true,});

    await admin_page.goto('http://localhost:3000');
    await admin_page.screenshot({path: `${INIT_CWD}/docs/admin_screenshot.png`,fullPage: true,});
  });
});
