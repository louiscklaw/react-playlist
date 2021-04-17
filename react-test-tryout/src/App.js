import React from 'react'

import './App.css'

function App() {
  const [test_value, setTestValue] = React.useState('1')
  const handleOnClick = () => {
    setTestValue('2')
  }
  return (
    <div className="App">
      helloworld
      {test_value}
      <button onClick={handleOnClick}> test </button>
    </div>
  )
}

export default App
