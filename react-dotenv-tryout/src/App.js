import React from 'react'

function App() {
  return (
    <div className="App">
      <div style={{ height: '100%', width: '100%', backgroundColor: 'gold' }}>
        <pre>{JSON.stringify(process.env.REACT_APP_HELLOWORLD)}</pre>
      </div>
    </div>
  )
}

export default App
