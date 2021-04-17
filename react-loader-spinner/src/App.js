import React from 'react'
import logo from './logo.svg'
import './App.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

function App() {
  return (
    <div className="App">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={100000} //3 secs
      />
    </div>
  )
}

export default App
