const express_port = 3000;

const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static('client/dist'));
app.use('/test', express.static('test'))

app.post('/helloworld', (req, res) =>{
  console.log(req)
  res.send({hello: 'helloworld from server'})
})

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

//
// web socket
//

// I'm maintaining all active connections in this object
const clients = {};
// I'm maintaining all active users in this object
const users = {};
// The current editor content is maintained here.
let editorContent = null;
// User activity history.
let userActivity = [];

// Event types
const typesDef = {
  USER_EVENT: 'userevent',
  CONTENT_CHANGE: 'contentchange'
}

function broadcastMessage(json) {
  // We are sending the current data to all connected clients
  const data = JSON.stringify(json);
  for(let userId in clients) {
    let client = clients[userId];
    if(client.readyState === WebSocket.OPEN) {
      client.send(data);
      // console.log(`broadcastMessage done ${userId}`)
    }
  };
}

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
  broadcastMessage(json);
}

function handleHelloworldMessage(){
  try {
    broadcastMessage(
      {
        type: 'contentchange',
        data: {
          editorContent: 'aaaa',
          userActivity: [ 'aaa joined to edit the document' ]
        }
      },
    )
  } catch (error) {
    console.log('handleHelloworldMessage error found')
    throw(error)
  }
}


function handleDisconnect(userId) {
    console.log(`${userId} disconnected.`);
    const json = { type: typesDef.USER_EVENT };
    const username = users[userId]?.username || userId;
    userActivity.push(`${username} left the document`);
    json.data = { users, userActivity };
    delete clients[userId];
    delete users[userId];
    broadcastMessage(json);
}

// A new client connection request received
wsServer.on('connection', function(connection) {
  // Generate a unique code for every user
  const userId = uuidv4();
  console.log('Recieved a new connection');

  // Store the new connection and handle messages
  clients[userId] = connection;
  console.log(`${userId} connected.`);
  connection.on('message', (message) => handleMessage(message, userId));
  // User disconnected
  connection.on('close', () => handleDisconnect(userId));

  setTimeout(() => {
    handleHelloworldMessage()
  }, 3000);

});
