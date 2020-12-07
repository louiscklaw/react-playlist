import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  // https://firebase.google.com/docs/auth/web/google-signin?authuser=0
  googleProvider: new firebase.auth.GoogleAuthProvider(),

  // https://firebase.google.com/docs/auth/web/github-auth?authuser=0
  githubProvider:  new firebase.auth.GithubAuthProvider(),

  // https://firebase.google.com/docs/auth/web/facebook-login?authuser=0
  facebookProvider:  new firebase.auth.FacebookAuthProvider(),
};

class App extends Component {

  render(){
    const {
      user,
      signOut,
      signInWithGoogle,
      signInWithGithub,
      signInWithFacebook
    } = this.props;

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }

        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGithub}>Sign in with github</button>
        }

      {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithFacebook}>Sign in with facebook</button>
        }

      </header>
    </div>
    );
  }

}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
