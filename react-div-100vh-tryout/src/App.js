import React from 'react'
import { use100vh } from 'react-div-100vh'

const MyHalfHeightExampleComponent = ({ children }) => {
  const pixel_100vh = use100vh()
  const halfHeight = pixel_100vh ? pixel_100vh / 2 : '50vh'
  return <div style={{ height: halfHeight }}>{children}</div>
}

function App({ test_branch = false }) {
  return (
    <div className="App">
      <MyHalfHeightExampleComponent>upper half</MyHalfHeightExampleComponent>
      <MyHalfHeightExampleComponent>lower half</MyHalfHeightExampleComponent>
    </div>
  )
}

export default App
