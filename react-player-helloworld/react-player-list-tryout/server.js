// I'm maintaining all active connections in this object
const clients = {};
// I'm maintaining all active users in this object
const users = {};
// The current editor content is maintained here.
let editorContent = null;
// User activity history.
let userActivity = [];

const express_port = 3000;
const { typesDef } = require('./server/typesDef');

const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('client/dist'));
app.use('/endpoint_test', express.static('test/endpoint_test'));

app.listen(express_port, () => {
  console.log('Server is running at http://localhost:' + express_port);
});

const http = require('http');
const uuidv4 = require('uuid').v4;
const { WebSocket, WebSocketServer } = require('ws');
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;
server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});


const { broadcastMessage } = require('./server/broadcastMessage');

function handleMessage(message, userId) {
  const dataFromClient = JSON.parse(message.toString());
  const json = { type: dataFromClient.type };
  if (dataFromClient.type === typesDef.USER_EVENT) {
    users[userId] = dataFromClient;
    userActivity.push(`${dataFromClient.username} joined to edit the document`);
    json.data = { users, userActivity };
  } else if (dataFromClient.type === typesDef.CONTENT_CHANGE) {
    editorContent = dataFromClient.content;
    json.data = { editorContent, userActivity };
  }
  broadcastMessage(json, clients);
}

function handleDisconnect(userId) {
  console.log(`${userId} disconnected.`);
  const json = { type: typesDef.USER_EVENT };
  const username = users[userId]?.username || userId;
  userActivity.push(`${username} left the document`);
  json.data = { users, userActivity };
  delete clients[userId];
  delete users[userId];
  broadcastMessage(json, clients);
}

// A new client connection request received
wsServer.on('connection', function (connection) {
  // Generate a unique code for every user
  const userId = uuidv4();
  console.log('Recieved a new connection');

  // Store the new connection and handle messages
  clients[userId] = connection;
  console.log(`${userId} connected.`);
  connection.on('message', message => handleMessage(message, userId));
  // User disconnected
  connection.on('close', () => handleDisconnect(userId));
});

const { stopCurrentPlay } = require('./server/stopCurrentPlay');
const { skipCurrentPlay } = require('./server/skipCurrentPlay');
const { resumeCurrentPlay } = require('./server/resumeCurrentPlay');
const { addYoutubeVideoId } = require('./server/addYoutubeVideoId');
const { delYoutubeVideoId } = require('./server/delYoutubeVideoId');
const routes = require('./server/routes');

app.post('/add_youtube_video_id', (req, res) => {
  try {
    var temp = req.body;
    console.log(req.body);
    var { youtube_video_id } = temp;
    addYoutubeVideoId(youtube_video_id, clients);
    res.send({ result: `added ${youtube_video_id}` });
  } catch (error) {
    console.log(error);
    res.send({ result: 'error' });
  }
});

app.post('/del_youtube_video_id', (req, res) => {
  try {
    var temp = req.body;
    console.log(req.body);
    var { youtube_video_id } = temp;
    delYoutubeVideoId(youtube_video_id, clients);
    res.send({ result: `delete ${youtube_video_id}` });
  } catch (error) {
    console.log(error);
    res.send({ result: 'error' });
  }
});

app.get('/stopCurrentPlay', (req, res) => {
  try {
    stopCurrentPlay(req, clients);
    res.send({ result: 'done' });
  } catch (error) {
    console.log(error);
    res.send({ result: 'error' });
  }
});

app.get('/skipCurrentPlay', (req, res) => {
  try {
    skipCurrentPlay(req, clients);
    res.send({ result: 'done' });
  } catch (error) {
    console.log(error);
    res.send({ result: 'error' });
  }
});

app.get('/resumeCurrentPlay', (req, res) => {
  try {
    resumeCurrentPlay(req, clients);
    res.send({ result: 'done' });
  } catch (error) {
    console.log(error);
    res.send({ result: 'error' });
  }
});

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

routes(app, clients);

// overflow handler
app.get('/*', (req, res) => {
  try {
    console.log('request fallen to overflow handler');
    console.log(req.url);
    res.send({ result: 'done' });
  } catch (error) {}
});

app.post('/*', (req, res) => {
  try {
    console.log('request fallen to overflow handler');
    console.log(req.url);
    res.send({ result: 'done' });
  } catch (error) {}
});
