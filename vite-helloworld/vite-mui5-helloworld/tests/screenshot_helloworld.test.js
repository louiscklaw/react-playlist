import { afterAll, beforeAll, describe, test } from 'vitest'
import puppeteer from 'puppeteer'

const headless = true
const ignoreHTTPSErrors = true

describe(`screenshot helloworld`, () => {
  let manage_browser, manage_page
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
    })
    manage_page = await manage_browser.newPage()
  })

  afterAll(async () => {
    await manage_browser.close()
  })

  test('', async () => {
    await manage_page.goto('http://localhost:3000')

    await manage_page.screenshot({
      path: './docs/screenshot.png',
      fullPage: true,
    })
  })
})
