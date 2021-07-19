const testCommands = {
  fillAndSubmit: function (n1, n2, op) {
    return this.click('@submit');
  },

  helloCommand: function (n1, n2) {
    return this.fillAndSubmit(n1, n2, '+');
  },
};

module.exports = {
  url: 'http://localhost:3000',
  commands: [testCommands],
  elements: {
    searchBar: {
      selector: 'input[type=text]',
    },
    submit: {
      selector: '//*[@id="root"]/div/div/button',
      locateStrategy: 'xpath',
    },
  },
};
