import React from 'react'

function TestBox(){
  const inputEl = React.useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }
  return(
    <>
      <input ref={inputEl} type="text"></input>
      <button onClick={onButtonClick}>focus the input</button>
    </>
  )
}

export default TestBox
