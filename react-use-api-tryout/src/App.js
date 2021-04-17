import React from 'react'
import useApi from 'react-use-api'

import './App.css'

function App() {
  const [data, { loading, error }, request] = useApi({
    url: 'https://httpbin.org/get?hello=world',
  })

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error.response.data.errMsg}</div>}
      {data && (
        <>
          <div>Hello!</div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <button onClick={request}>Reload</button>
        </>
      )}
    </>
  )
}

export default App
