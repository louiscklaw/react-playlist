// import React from 'react';
// import renderer from 'react-test-renderer';
// import Link from '../Link.react';


const puppeteer = require('puppeteer');
// const {HELLO, forceExit} = require('./config-helloworld')

describe('jest-image-snapshot usage with an image received from puppeteer', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('works', async () => {
    // forceExit()
    // expect(true).toBe(false)

    const page = await browser.newPage();
    await page.goto('https://example.com');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});