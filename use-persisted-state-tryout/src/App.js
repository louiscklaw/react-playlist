import React from 'react'

import useCounter from './hooks/useCounter'

function App({ test_branch = false }) {
  let { count, increment, decrement } = useCounter(1)
  return (
    <div className="App">
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
