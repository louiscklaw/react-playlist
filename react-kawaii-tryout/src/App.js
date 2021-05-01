import React from 'react'
import { Planet } from 'react-kawaii'
const Example = () => <Planet size={200} mood="ko" color="#FDA7DC" />

function App() {
  return (
    <div className="App">
      react helloworld <Example />
    </div>
  )
}

export default App
