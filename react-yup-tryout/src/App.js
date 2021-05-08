import React from 'react'

import * as yup from 'yup'

import './App.css'

let schema = yup
  .array()
  .test('test-name', 'error_message0', (value, context) => {
    if (value[0] == '0') {
      return context
    }
    return false
  })
  .test('test-name', 'error_message1', (value, context) => {
    if (value[1] == '1') {
      return context
    }
    return false
  })

function App() {
  React.useEffect(() => {
    schema.isValid(['0', '1', '2']).then(function (valid) {
      if (valid) {
        console.log(`hello valid`)
      } else {
        console.log('hello invalid')
      }
    })

    // schema.cast({
    //   age: '24',
    //   createdOn: '2014-09-23T19:25:25Z',
    // })
  }, [])

  return <div className="App">helloworld</div>
}

export default App
