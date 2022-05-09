import React from 'react'
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext'

import './style.css'

function App({ test_branch = false }) {
  let helloworld = 'helloworld'
  let helloanotherworld = '123'

  let helloEmpty

  if (test_branch) {
    console.log('find true')
  } else {
    console.log('find false')
  }

  console.log('helloEmpty', helloEmpty)

  return (
    <div className="App">
      <GlobalContextProvider>
        <div id="example1">example1</div>
        <div>seperator</div>
        <div id="example2">example2</div>
        <div>seperator</div>
        <div id="example3">example3</div>

        <div id="example4">
          example4
          <div id="example4_div1">linear</div>
          <div id="example4_div2">ease</div>
          <div id="example4_div3">ease-in</div>
          <div id="example4_div4">ease-out</div>
          <div id="example4_div5">ease-in-out</div>
        </div>

        <div id="example5">
          example5
          <div id="example5_div1">example5_div1</div>
        </div>

        <div id="example6">
          example6
          <div id="example6_div1">example6_div1</div>
        </div>
      </GlobalContextProvider>
    </div>
  )
}

export default App
