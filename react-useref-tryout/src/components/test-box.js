import React from 'react'

function TestBox({my_id, all_ref, test_value, pressButton}){
  const inputEl = React.useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }

  const helloworld = (e) => {
    pressButton(e)
  }

  return(
    <div id={my_id}>
      <input  ref={inputEl} type="text"></input>
      <button onClick={onButtonClick}>focus the input</button>

      <button onClick={(e) => helloworld(e)}> say helloworld</button>
      test_value: {test_value}
    </div>
  )
}

export default TestBox
