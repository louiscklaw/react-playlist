const { broadcastMessage } = require('../broadcastMessage');
const { typesDef } = require('../typesDef');
const helloworldRoute = require('./helloworld');

const routes = (app, clients) => {
  helloworldRoute(app, clients);

  console.log('routes init done');
};

module.exports = routes;
