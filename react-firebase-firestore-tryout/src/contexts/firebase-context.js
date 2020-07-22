import React from "react"

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

import firebaseConfig from "../firebase-config"

import { FirebaseAuthContextProvider } from "./firebase-auth-context"
import {StorageContextProvider} from "./storage-context"


let default_context = {
  firebase_app: {}, firebase_db: {},
  helloworldFirebaseContext: () => {}
}

let FirebaseContext = React.createContext(default_context)

function FirebaseContextProvider(props){
  let firebase_app = firebase.initializeApp(firebaseConfig)
  let firebase_db = firebase_app.firestore()
  let fb_storage = firebase_app.storage()

  const helloworldFirebaseContext = () => {
    console.log('firebase-context.js','helloworldFirebaseContext')
  }

  return(
    <FirebaseContext.Provider value={{
      firebase_app, firebase_db, fb_storage,
      helloworldFirebaseContext
      }} >
        <FirebaseAuthContextProvider>
          <StorageContextProvider>
            {props.children}
          </StorageContextProvider>
        </FirebaseAuthContextProvider>
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext
export { FirebaseContextProvider }
