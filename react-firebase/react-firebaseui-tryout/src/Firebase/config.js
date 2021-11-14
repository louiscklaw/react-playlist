import firebase from 'firebase'
import 'firebase/auth'

const fb_config = {
  apiKey: 'AIzaSyDK21LG5IV2ajFzVa1V0jZhAxR4ar37mrk',
  appId: '1:335675372584:web:ab02b5849ff52bb5f1711d',
  authDomain: 'lynked-demo-tryout.firebaseapp.com',
  measurementId: 'G-E4KY2LRKDF',
  messagingSenderId: '335675372584',
  projectId: 'lynked-demo-tryout',
  storageBucket: 'lynked-demo-tryout.appspot.com',
}

const app = firebase.initializeApp(fb_config)

export default app
