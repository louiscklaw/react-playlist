import React from 'react'

function App() {
  return (
    <div className="App">
      <div
        style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center', alignItems: 'center' }}
      >
        <div style={{ height: '100vh', width: '50vw', backgroundColor: 'gold' }}>
          <div>frontend</div>
          <div></div>
        </div>
        <div style={{ height: '100vh', width: '50vw', backgroundColor: 'pink' }}>
          <div>backend</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default App
