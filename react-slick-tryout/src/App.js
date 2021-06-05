import React from 'react'

import Backend from './Backend'
import Frontend from './Frontend'

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ height: '100vh', width: '50vw' }}>
          <div>Frontend</div>
          <div style={{ width: '100%', height: '50%' }}>
            <Frontend />
          </div>
        </div>
        <div style={{ height: '100vh', width: '50vw' }}>
          <div>Backend</div>
          <div>
            <Backend />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
