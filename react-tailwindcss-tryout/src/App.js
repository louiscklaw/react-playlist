import React from 'react'
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext'

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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="grid grid-cols-8 gap-4">
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>09</div>
      </div>
    </div>
  )
}

export default App
