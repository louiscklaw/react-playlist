const assertScreenShot = async (page, threshold) => {
  return expect(await page.screenshot()).toMatchImageSnapshot({
    failureThreshold: threshold,
  });
};

module.exports = {
  assertScreenShot,
};
