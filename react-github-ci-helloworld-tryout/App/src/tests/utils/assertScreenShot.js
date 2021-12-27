const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const SCREEN_SHOT_DIR = __dirname + '/actual';

const assertScreenShot = async (page, threshold) => {
  return expect(await page.screenshot()).toMatchImageSnapshot({
    failureThreshold: threshold,
  });
};

const assertScreenShotPct = async (page, percent = 0.01) => {
  let actual_screenshot_filename = `${SCREEN_SHOT_DIR}/${Date.now()}-actual.png`;
  let actual_screenshot = await page.screenshot({
    path: actual_screenshot_filename,
  });
  console.log(
    `checking with actual screenshot filename ${actual_screenshot_filename}`
  );
  return expect(actual_screenshot).toMatchImageSnapshot({
    failureThreshold: percent,
    failureThresholdType: 'percent',
  });
};

const assertElementScreenShotPct = async (element, percent = 0.01) => {
  return expect(await element.screenshot()).toMatchImageSnapshot({
    failureThreshold: percent,
    failureThresholdType: 'percent',
  });
};

module.exports = {
  assertScreenShot,
  assertScreenShotPct,
  assertElementScreenShotPct,
};
