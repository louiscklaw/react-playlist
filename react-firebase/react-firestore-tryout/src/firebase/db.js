import firebase from 'firebase';
import firebase_app from './config';

import 'firebase/firestore';

const db = firebase_app.firestore();
const emulator_host = 'localhost';

if (process.env.NODE_ENV === 'development') {
  db.useEmulator(emulator_host, 8080);
}

if (process.env.NODE_ENV === 'development') {
  console.log('into develop firebase_auth');
  firebase.auth().useEmulator(`http://${emulator_host}/`);
}

if (process.env.NODE_ENV === 'development') {
  firebase.storage().useEmulator('localhost', 9199);
}

export default db;
