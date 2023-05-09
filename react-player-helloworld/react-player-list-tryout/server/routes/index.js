const { broadcastMessage } = require('../broadcastMessage');
const { typesDef } = require('../typesDef');
const helloworldRoute = require('./helloworld');
const playerRoute = require('./player');

const routes = (app, clients) => {
  playerRoute(app, clients);
  helloworldRoute(app, clients);

  console.log('routes init done');
};

module.exports = routes;
