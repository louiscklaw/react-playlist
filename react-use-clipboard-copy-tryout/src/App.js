import React from 'react'
import { useClipboard } from 'use-clipboard-copy'

function PublicUrl({ url }) {
  const clipboard = useClipboard()
  return (
    <div>
      <input ref={clipboard.target} value={url} readOnly />
      <button onClick={clipboard.copy}>Copy Link</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      react helloworld
      <PublicUrl url={'https://www.facebook.com'} />
    </div>
  )
}

export default App
