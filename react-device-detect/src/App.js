import React from 'react'
import { isMobile, isIPad13 } from 'react-device-detect'

import './App.css'

function App() {
  let [debug, setDebug] = React.useState(null)

  React.useEffect(() => {
    if (isMobile) {
      setDebug('this is mobile')
    }
    if (isIPad13) {
      setDebug('this is ipad13')
    }
  }, [isMobile])

  return (
    <div className="App">
      helloworld<pre>{JSON.stringify(debug, null, 2)}</pre>
    </div>
  )
}

export default App
