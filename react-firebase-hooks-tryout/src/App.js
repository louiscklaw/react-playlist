import React, { useState } from 'react'
import RealTimeDbTryout from './components/RealTimeDbTryout'

import { initializeApp } from 'firebase/app'
import FireStoreTryout from './components/FireStoreTryout'
import AuthTryout from './components/AuthTryout'
import CloudStorage from './components/CloudStorage'

const firebaseConfig = {
  apiKey: 'AIzaSyBnmrMAfoQvVRgXCIPG2wLiGO15s7u4bRY',
  authDomain: 'fir-tryout-f4e7a.firebaseapp.com',
  databaseURL: 'https://fir-tryout-f4e7a.firebaseio.com',
  projectId: 'fir-tryout-f4e7a',
  storageBucket: 'fir-tryout-f4e7a.appspot.com',
  messagingSenderId: '859668436628',
  appId: '1:859668436628:web:32fcc829845132db900681',
}

const app = initializeApp(firebaseConfig)

function App({ test_branch = false }) {
  let [user, setUser] = useState()
  return (
    <div className="App">
      <div>hellocomponents</div>
      <AuthTryout firebaseApp={app} setUser={setUser} />
      {user ? (
        <>
          <FireStoreTryout firebaseApp={app} />
          {/* <RealTimeDbTryout firebaseApp={app} /> */}
          <CloudStorage firebaseApp={app} />
        </>
      ) : (
        <>not logged in</>
      )}
    </div>
  )
}

export default App
