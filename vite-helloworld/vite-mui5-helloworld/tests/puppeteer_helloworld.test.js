import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import { preview } from 'vite'
import vite from 'vite'
import puppeteer from 'puppeteer'

describe('basic', async () => {
  let server
  let browser
  let page

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } })
    browser = await puppeteer.launch()
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
    await new Promise((resolve, reject) => {
      server.httpServer.close(error => (error ? reject(error) : resolve()))
    })
  })

  test('should have the correct title', async () => {
    try {
      await page.goto('http://localhost:3000')
      const button = await page.$('button')
      expect(button).toBeDefined()

      let text = await page.evaluate(btn => btn.textContent, button)
      expect(text).toBe('count is: 0')

      await button.click()
      text = await page.evaluate(btn => btn.textContent, button)
      expect(text).toBe('count is: 1')
    } catch (e) {
      console.error(e)
      expect(e).toBeUndefined()
    }
  }, 60_000)
})
