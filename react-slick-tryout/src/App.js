import React from 'react'

import Backend from './Backend'
import ShareContextProvider from './context/Share'

import FrontEnd from './FrontEnd'

const saveJson = () => {
  alert('save json')
}

const reloadJson = () => {
  alert('reload json')
}

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
          <div>frontend</div>
          <div style={{ width: '100%', height: '50%' }}>
            <FrontEnd />
          </div>
        </div>
        <div style={{ height: '100vh', width: '50vw' }}>
          <div>backend</div>
          <div>
            <ShareContextProvider saveJson={saveJson} reloadJson={reloadJson}>
              <Backend />
            </ShareContextProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
