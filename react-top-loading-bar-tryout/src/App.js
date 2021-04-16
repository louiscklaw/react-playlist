import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

import './App.css'

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
      <div className="App">helloworld</div>
    </>
  )
}

export default App
