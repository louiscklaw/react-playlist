import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3fyaJVYzdjSViS8VLO6xkifPCn8lnf4c",
  authDomain: "react-firebase-auth-5aa56.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-5aa56.firebaseio.com",
  projectId: "react-firebase-auth-5aa56",
  storageBucket: "react-firebase-auth-5aa56.appspot.com",
  messagingSenderId: "311553691703",
  appId: "1:311553691703:web:cf427ed0b7c624de40efb2",
  measurementId: "G-DVBCE4N4GR"
};

// Initialize Firebase
firebase.initializeApp( firebaseConfig );
firebase.firestore().settings( {
  timestampsInSnapshots: true
} )

export default firebase