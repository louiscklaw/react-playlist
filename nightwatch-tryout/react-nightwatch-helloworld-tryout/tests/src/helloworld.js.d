module.exports = {
  // disabled: true,
  '@tags': ['website'],

  beforeEach: function (client, done) {
    client.url('http://localhost:3000', function () {
      done();
    });
  },

  'Demo test NightwatchJS.org': function (client) {
    client
      .waitForElementVisible('body', 1000)
      .resizeWindow(1024, 768)
      .assert.screenshotIdenticalToBaseline('html')
      .assert.screenshotIdenticalToBaseline('body')
      .assert.screenshotIdenticalToBaseline('button')
      .assert.screenshotIdenticalToBaseline('#hello_div')
      .click('button', () => {
        console.log('click button helloworld ');
      })
      .assert.screenshotIdenticalToBaseline(
        '#hello_div',
        'check_again_hello_div'
      );
  },

  Finished: function (client) {
    client
      .perform(() => {
        // eslint-disable-next-line no-console
        console.log('[perform]: Finished Test:', client.currentTest.name);
      })
      .end();
  },
};