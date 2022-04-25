import React from 'react'
import ChatBox from './components/ChatBox/ChatBox'

function App({ test_branch = false }) {
  return (
    <div className="App">
      <ChatBox />
    </div>
  )
}

export default App
