import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'

function App({ test_branch = false }) {
  let [test, setTest] = useState(
    '<img src="http://www.example.com/test.png" onClick="alert("alert")" />',
  )
  let [clean_dom, setCleanDom] = useState()

  useEffect(() => {
    setCleanDom(DOMPurify.sanitize(test))
  }, [test])
  return (
    <div className="App">
      hellocomponents
      <div>test</div>
      {test}
      <input type="text" onChange={e => setTest(e.target.value)} />
      <div>clean_dom</div>
      {clean_dom}
    </div>
  )
}

export default App
