import React from 'react'

import * as yup from 'yup'

import './App.css'

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date()
  }),
})

function App() {
  React.useEffect(() => {
    schema.isValid({ name: 'jimmy', age: 24 }).then(function (valid) {})

    schema.cast({
      name: 'jimmy',
      age: '24',
      createdOn: '2014-09-23T19:25:25Z',
    })
  }, [])

  return <div className="App">helloworld</div>
}

export default App
