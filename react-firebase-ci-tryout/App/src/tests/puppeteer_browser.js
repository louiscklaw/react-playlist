const puppeteer = require('puppeteer');

function createBrowser ()  {
  return  puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',"--disabled-setupid-sandbox",
      '--disable-dev-shm-usage',
      '--disable-font-subpixel-positioning',
    ],
  });
}

let desktop_browser = createBrowser

export {desktop_browser}