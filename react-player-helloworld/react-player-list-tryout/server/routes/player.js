const { broadcastMessage } = require('../broadcastMessage');
const { typesDef } = require('../typesDef');
const helloworldRoute = require('./helloworld');

const playerRoute = (app, clients) => {
  console.log('routes init done');
};

module.exports = playerRoute;
