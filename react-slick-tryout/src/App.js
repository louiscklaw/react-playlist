import React from 'react'

import Backend from './Backend'
import Frontend from './Frontend'
import ShareContextProvider from './Backend/context/Share.js'

function App() {
  return (
    <>
      <ShareContextProvider>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ height: '75vh', width: '50vw', overflow: 'hidden' }}>
            <div>Frontend</div>
            <div style={{ width: '100%', height: '50%' }}>
              <Frontend />
            </div>
          </div>
          <div style={{ height: '75vh', width: '50vw' }}>
            <div>Backend</div>
            <div>
              <Backend />
            </div>
          </div>
        </div>
      </ShareContextProvider>
    </>
  )
}

export default App
