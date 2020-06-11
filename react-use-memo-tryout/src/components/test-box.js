import React, { memo } from 'react'

const a = 1
const b = 1

const testHelloworldCalling = (a,b) =>{
  console.log("helloworld calling with", a, b)
  return 1
}

function TestBox(){
  const [testC, setTestC] = React.useState(0)
  const memoizedValue = React.useMemo(() => testHelloworldCalling(a, b), [a, b, testC]);

  return(
    <>
      not finish yet
      <div>{memoizedValue}</div>
      <button onClick={(e)=>{setTestC(testC+1)}}>+</button>
    </>
  )
}

export default TestBox
