const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// https://firebase.google.com/docs/functions/http-events
const app = express();
app.use(cors());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true });
//   response.send('Hello from Firebase!');
// });
// exports.helloworld_json = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true });
//   response.send({ hello: 'world' });
// });

class Widgets {
  constructor() {}

  helloWorldText() {
    return 'helloworld';
  }

  helloWorldJson() {
    return { hello: 'world' };
  }
}

const widgets = new Widgets();

app.get('/helloWorld', (req, res) => res.send(widgets.helloWorldText()));
app.get('/helloworld_json', (req, res) => res.send(widgets.helloWorldJson()));
app.get('/helloworld_unstable_status_json', (req, res) => {
  if (Math.random() > 0.66) {
    res.send(widgets.helloWorldJson());
  } else {
    res.sendStatus(400);
  }
});

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
