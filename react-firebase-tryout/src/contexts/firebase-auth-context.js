import React from 'react'

import firebase from "firebase/app"
import "firebase/auth"

import FirebaseContext from "./firebase-context"

const LOGGED_IN = 'logged in'
const LOGGED_OUT = 'logged out'

let init_user_info = {
  email: "",
  is_admin: false,
  status: LOGGED_OUT,
}

let default_context = {
  user_info: {}, setUserInfo: () => {},

  helloFirebaseAuthContext: () => {},

  firebaseLogin: () => {},
  firebaseLogout: () => {},

  githubLogin: () => {},
  facebookLogin: () => {},
  googleLogin: () => {},

}

let FirebaseAuthContext = React.createContext(default_context)

function FirebaseAuthContextProvider(props){
  let { firebase_app } = React.useContext(FirebaseContext)
  let firebase_auth = firebase_app.auth()
  let [user_info, setUserInfo] = React.useState(init_user_info)

  const helloFirebaseAuthContext = () => {
    console.log("findme", "hello firebaseDBContext")
  }

  const firebaseAuthChanged = () => {
    firebase_auth.onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then(idTokenResult => {
          setUserInfo({
            email: user.email,
            is_admin: idTokenResult.claims.admin,
            status: LOGGED_IN,
            raw_user: user,
            uid: user.uid,
          })
        })
      } else {
        // user logged out
        setUserInfo(init_user_info)
      }
    })
  }

  const firebaseLogin = (email, password) => {
    return firebase_auth.signInWithEmailAndPassword(email, password)
  }

  const firebaseLogout = () => {
    // alert('calling firebase auth context logout')
    console.log('firebase-auth-context.js','calling firebaseLogout')
    return firebase_auth.signOut()
  }

  const githubLogin = () => {
    var provider = new firebase.auth.GithubAuthProvider()

    provider.setCustomParameters({
      login_hint: "user@example.com",
    })

    firebase_auth
      .signInWithPopup(provider)
      .then(userdata => {
        console.log("github login ok")
      })
      .catch(err => {
        console.log("github login fail,", err.message)
      })
  }

  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ login_hint: "user@example.com" })
    firebase_auth
      .signInWithPopup(provider)
      .then(userdata => {
        console.log("google login ok")
      })
      .catch(err => {
        console.log("google login failed, ", err.message)
      })
  }

  const facebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider()

    provider.setCustomParameters({
      login_hint: "user@example.com",
    })

    firebase_auth
      .signInWithPopup(provider)
      .then(userdata => {
        console.log("facebook login ok")
      })
      .catch(err => {
        console.log("facebook login fail,", err.message)
      })
  }

  React.useEffect(() => {
    firebaseAuthChanged()

    return function cleanup() {
      firebaseLogout()
      setUserInfo(init_user_info)
    }
  },[])

  return(
    <FirebaseAuthContext.Provider value={{
      helloFirebaseAuthContext,
      firebaseLogin, firebaseLogout,
      user_info, setUserInfo,
      githubLogin, facebookLogin, googleLogin
    }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseAuthContext
export { FirebaseAuthContextProvider }
