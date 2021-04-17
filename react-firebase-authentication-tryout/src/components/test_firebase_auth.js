import React, { Component } from 'react'


import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';



// const providers = {
//   // https://firebase.google.com/docs/auth/web/google-signin?authuser=0
//   googleProvider: new firebase.auth.GoogleAuthProvider(),

//   // https://firebase.google.com/docs/auth/web/github-auth?authuser=0
//   githubProvider:  new firebase.auth.GithubAuthProvider(),

//   // https://firebase.google.com/docs/auth/web/facebook-login?authuser=0
//   facebookProvider:  new firebase.auth.FacebookAuthProvider(),
// };



function TestFirebaseAuth(props){
const {
  user,
  signOut,
  signInWithGoogle,
  signInWithGithub,
  firebaseApp
  } = props;

  const firebaseAppAuth = firebaseApp.auth();

  return(
    <>
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
    </>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(TestFirebaseAuth);
