const routes = app => {
  app.get('/helloworld', (req, res) => {
    res.send('helloworld get reqest');
  });

  app.post('/helloworld', (req, res) => {
    res.send({ hello: 'helloworld post request from server' });
  });

  console.log('hellowlld routes');
};

module.exports = routes;
