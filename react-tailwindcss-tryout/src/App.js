import React from 'react'
import TestBottomNavBar from './pages/TestBottomNavBar'
import TestMobileFullScreen from './pages/TestMobileFullScreen'

function App({ test_branch = false }) {
  return (
    <div className="App">
      {/* <TestMobileFullScreen /> */}
      <TestBottomNavBar />
    </div>
  )
}

export default App
