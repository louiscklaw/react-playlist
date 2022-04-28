import React from 'react'
import CurrencyFormat from 'react-currency-format'

function App({ test_branch = false }) {
  return (
    <div className="App">
      <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    </div>
  )
}

export default App
