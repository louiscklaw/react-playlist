const { broadcastMessage } = require('../broadcastMessage');
const { typesDef } = require('../typesDef');

const helloworldRoute = (app, clients) => {
  app.post('/add_youtube_1', (req, res) => {
    try {
      console.log(req);
      broadcastMessage(
        {
          type: typesDef.PLAYLIST_CHANGE,
          data: {
            action: typesDef.ADD_URL,
            youtube_url: 'https://www.youtube.com/watch?v=cBkNtO86_mY',
          },
        },
        clients,
      );
      res.send({ hello: 'add_youtube_1 from server' });
    } catch (error) {
      console.log('add_youtube_1 error found');
      res.send({ result: 'add_youtube_1 error' });
      throw error;
    }
  });

  app.post('/add_youtube_2', (req, res) => {
    try {
      console.log(req);
      broadcastMessage(
        {
          type: typesDef.PLAYLIST_CHANGE,
          data: {
            action: typesDef.ADD_URL,
            youtube_url: 'https://www.youtube.com/watch?v=icPHcK_cCF4',
          },
        },
        clients,
      );
      res.send({ hello: 'add_youtube_2 from server' });
    } catch (error) {
      console.log('add_youtube_2 error found');
      res.send({ result: 'add_youtube_2 error' });
      throw error;
    }
  });


  app.post('/add_youtube_3', (req, res) => {
    try {
      console.log(req);
      broadcastMessage(
        {
          type: typesDef.PLAYLIST_CHANGE,
          data: {
            action: typesDef.ADD_URL,
            youtube_url: 'https://www.youtube.com/watch?v=s-MsZo02dos',
          },
        },
        clients,
      );
      res.send({ hello: 'add_youtube_2 from server' });
    } catch (error) {
      console.log('add_youtube_2 error found');
      res.send({ result: 'add_youtube_2 error' });
      throw error;
    }
  });

  app.post('/add_youtube_long_video', (req, res) => {
    try {
      broadcastMessage(
        {
          type: typesDef.PLAYLIST_CHANGE,
          data: {
            action: typesDef.ADD_URL,
            youtube_url: 'https://www.youtube.com/watch?v=RceMwkBu-Pg',
          },
        },
        clients,
      );
      res.send({ hello: 'add_youtube_2 from server' });
    } catch (error) {
      console.log('add_youtube_2 error found');
      res.send({ result: 'add_youtube_2 error' });
      throw error;
    }
  });

  app.get('/helloworld', (req, res) => {
    res.send('helloworld get reqest');
  });

  app.post('/helloworld', (req, res) => {
    res.send({ hello: 'helloworld post request from server' });
  });

  console.log('hellowlld routes');
};

module.exports = helloworldRoute;
