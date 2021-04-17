import React from 'react'
import QRCode from 'qrcode.react'

import './App.css'

function App() {
  return (
    <div className="App">
      <QRCode
        value="http://facebook.github.io/react/"
        renderAs="svg"
        bgColor="#FFFFFF"
        fgColor="#000080"
        level="H"
        imageSettings={{
          src: './logo.jpg',
        }}
      />
    </div>
  )
}

export default App
