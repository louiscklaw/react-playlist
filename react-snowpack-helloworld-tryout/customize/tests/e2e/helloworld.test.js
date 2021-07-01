// import React from 'react';
// import renderer from 'react-test-renderer';
// import Link from '../Link.react';
const puppeteer = require('puppeteer');

// console.log(puppeteer.devices);

// const {HELLO, forceExit} = require('./config-helloworld')

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('e2e meny client reservation page', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  test(
    `screen_render helloworld`,
    async () => {
      let page = await browser.newPage({});

      await page.goto('https://www.example.com');

      const image2 = await page.screenshot();
      expect(image2).toMatchImageSnapshot();
      await page.close();
    },
    10 * 1000,
  );
});
