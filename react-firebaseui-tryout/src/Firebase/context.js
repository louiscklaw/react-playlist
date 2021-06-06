//1.
import React, { useEffect, useState } from 'react'
import app from './config'

import firebase from 'firebase'
firebase.auth().useEmulator('http://192.168.88.254:9099/')

//2.
export const AuthContext = React.createContext()

//3.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser)
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}
