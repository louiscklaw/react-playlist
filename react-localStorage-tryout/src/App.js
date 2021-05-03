import React from 'react'

function App() {
  // setter
  localStorage.setItem('myData', JSON.stringify({ hello: 'localStorage' }))

  // getter
  localStorage.getItem('myData')

  // setter
  sessionStorage.setItem('myData', JSON.stringify({ hello: 'sessionStorage' }))

  // getter
  sessionStorage.getItem('myData')

  // remove
  // localStorage.removeItem('myData')

  // remove all
  // localStorage.clear()

  return <div className="App">react helloworld</div>
}

export default App
