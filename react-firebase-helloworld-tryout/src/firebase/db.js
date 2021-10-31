import firebase from 'firebase/app';
import firebase_app from './config';

const db = firebase_app.firestore();
const emulator_host = 'localhost';

if (process.env.NODE_ENV == 'development') {
  db.useEmulator(emulator_host, 8080);
}

if (process.env.NODE_ENV == 'development') {
  console.log('into develop firebase_auth');
  firebase.auth().useEmulator(`http://${emulator_host}/`);
}

// db.settings({
//   timestampsInSnapshots: true,
// });

export default db;
