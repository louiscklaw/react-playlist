import React from "react"

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import firebaseConfig from "../firebase-config"

import { FirebaseAuthContextProvider } from "./firebase-auth-context"


let default_context = {
  firebase_app: {}, firebase_db: {},
}

let FirebaseContext = React.createContext(default_context)

function FirebaseContextProvider(props){
  let firebase_app = firebase.initializeApp(firebaseConfig)
  let firebase_db = firebase_app.firestore()

  return(
    <FirebaseContext.Provider value={{ firebase_app, firebase_db }} >
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext
export { FirebaseContextProvider }
