const faker = require('faker');
const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words(),
};

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();

    browser.close();
  });
});

describe('puppeteer-helloworld', function () {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
    });
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('puppeteer rendering test', async () => {
    await page.goto('http://localhost:12345');

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
