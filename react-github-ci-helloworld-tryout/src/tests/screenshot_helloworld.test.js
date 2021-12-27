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
