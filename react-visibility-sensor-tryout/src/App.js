import React from 'react'

// const VisibilitySensor = require('react-visibility-sensr');
import VisibilitySensor from 'react-visibility-sensor'

function onChange(isVisible) {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden')
}

function MyComponent(_props) {
  return (
    <VisibilitySensor onChange={onChange}>
      <div>...content goes here...</div>
    </VisibilitySensor>
  )
}

function App() {
  let [hello_hide_state, setHelloHideState] = React.useState(true)
  const toggleHelloHide = () => {
    setHelloHideState(!hello_hide_state)
  }

  function HelloHide() {
    if (hello_hide_state) {
      return (
        <>
          <MyComponent />
        </>
      )
    } else {
      return <>hello hide</>
    }
  }

  return (
    <div className="App">
      helloworld
      <pre>yarn add react-visibility-sensor scroll and check the log in browser console</pre>
      <div style={{ height: '200vh' }}></div>
      <HelloHide />
      <button onClick={toggleHelloHide}>toggleHelloHide</button>
    </div>
  )
}

export default App
