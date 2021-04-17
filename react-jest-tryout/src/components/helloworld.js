import React from 'react'


function HelloComponent(props){
  let {test_input} = props
  return(
    <>
      helloworld{test_input}
    </>
  )
}

export default HelloComponent
