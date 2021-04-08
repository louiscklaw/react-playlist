import React from 'react'
import { subscribe } from 'on-screen-keyboard-detector'

import './App.css'

function App() {
  let [keyboard_visible, setKeyboardVisible] = React.useState('not-visible')
  let input_ref = React.useRef()

  React.useEffect(() => {
    // return unsubscribe
    if (input_ref) {
      input_ref.current.addEventListener('focusout', function (e) {
        window.scrollTo(0, 0)
      })
    }
  }, [input_ref])

  const handleButtonClick = () => {
    window.scroll({ top: 0, left: 0, behaviour: 'smooth' })
  }

  return (
    <div className="App">
      helloworld<>{JSON.stringify(keyboard_visible, null, 2)}</>
      <div style={{ height: '2000px', width: '100px', backgroundColor: 'gold' }}></div>
      <input value="hellworld" ref={input_ref} />
      <button onClick={handleButtonClick}>back to top</button>
    </div>
  )
}

export default App
