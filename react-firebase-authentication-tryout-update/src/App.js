import * as React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

/** See the signature above to find out the available providers */
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider:  new firebase.auth.GithubAuthProvider(),
  facebookProvider:  new firebase.auth.FacebookAuthProvider(),
};

// /** providers can be customised as per the Firebase documentation on auth providers **/
// providers.googleProvider.setCustomParameters({
//   hd: 'mycompany.com',
// });

/** Create the FirebaseAuth component wrapper */
const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth,
});

const App = ({
  /** These props are provided by withFirebaseAuth HOC */
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  signInWithTwitter,
  signInAnonymously,
  signOut,
  setError,
  user,
  error,
  loading,
}: WrappedComponentProps) => (
  <React.Fragment>
    {
      loading && "Loading.."
    }
    {
      user
        ? <h1>Hello, {user.displayName}</h1>
        : <h1>Log in</h1>
    }

    {
      user
        ? <button onClick={signOut}>Sign out</button>
        : <button onClick={signInWithGoogle}>Sign in with Google</button>
    }

    {
      user
        ? <button onClick={signOut}>Sign out</button>
        : <button onClick={signInWithGithub}>Sign in with Github</button>
    }
    {
      user
        ? <button onClick={signOut}>Sign out</button>
        : <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    }


    {
      loading && <h2>Loading..</h2>
    }
  </React.Fragment>
);

/** Wrap it */
export default createComponentWithAuth(App);
