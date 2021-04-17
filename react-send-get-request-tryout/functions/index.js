const functions = require("firebase-functions");

var admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("helloworld from firebase"));

exports.helloworld = functions.https.onRequest(app);

exports.hello_firebase = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
