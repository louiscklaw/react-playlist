import React, { useEffect } from 'react'
import { getFirestore, collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

export default function AuthTryout({ firebaseApp, user, setUser }) {
  const auth = getAuth(firebaseApp)
  const [auth_user, loading, error] = useAuthState(auth)

  useEffect(() => {
    setUser(auth_user)
  }, [auth_user])

  const login = () => {
    signInWithEmailAndPassword(auth, 'test@test.com', 'password')
  }
  const logout = () => {
    signOut(auth)
  }

  return (
    <>
      <div>AuthTryout</div>
      <div>
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
      </div>
    </>
  )
}
