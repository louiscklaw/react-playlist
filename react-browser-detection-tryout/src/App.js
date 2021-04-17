import React from 'react'
import BrowserDetection from 'react-browser-detection'

import './App.css'

const browserHandler = {
  chrome: () => <div>Chrome is fantastic!</div>,
  googlebot: () => <div>Hi GoogleBot!</div>,
  default: browser => <div>Hi {browser}!</div>,
}

function App() {
  return (
    <div className="App">
      <BrowserDetection>{browserHandler}</BrowserDetection>
      <div>helloworld</div>
    </div>
  )
}

export default App
