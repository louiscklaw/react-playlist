// https://firebase.google.com/docs/firestore/quotas
// https://firebase.google.com/docs/firestore/quickstart
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBZ5IkKyebNRzt8dwlt8JY_41BENdakzxA',
  authDomain: 'react-tryout-e8aa2.firebaseapp.com',
  databaseURL: 'https://react-tryout-e8aa2.firebaseio.com',
  projectId: 'react-tryout-e8aa2',
  storageBucket: 'react-tryout-e8aa2.appspot.com',
  messagingSenderId: '665011834822',
  appId: '1:665011834822:web:7eddaca64f46f5bcc6ecc7',
};

const firebase_app = firebase.initializeApp(firebaseConfig);

export default firebase_app;
