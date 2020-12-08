import firebase from "firebase";
import "firebase/auth";

const fb_config = {
  apiKey: "AIzaSyBZ5IkKyebNRzt8dwlt8JY_41BENdakzxA",
  authDomain: "react-tryout-e8aa2.firebaseapp.com",
  databaseURL: "https://react-tryout-e8aa2.firebaseio.com",
  projectId: "react-tryout-e8aa2",
  storageBucket: "react-tryout-e8aa2.appspot.com",
  messagingSenderId: "665011834822",
  appId: "1:665011834822:web:7eddaca64f46f5bcc6ecc7"
};

const app = firebase.initializeApp(fb_config)

export default app;
