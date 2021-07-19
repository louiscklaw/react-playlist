module.exports = {
  Test: function (browser) {
    var google = browser.page.inner.google();

    google
      .navigate()
      // .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .helloCommand(1, 2)
      .saveScreenshot('./reports/homepage.png');

    browser.end();
  },
};
