const { WebSocket } = require('ws');

function broadcastMessage(json, clients) {
  const data = JSON.stringify(json);
  for (let userId in clients) {
    let client = clients[userId];
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  }
}

module.exports = {
  broadcastMessage,
};
