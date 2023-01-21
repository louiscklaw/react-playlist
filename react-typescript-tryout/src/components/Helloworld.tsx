import React from "react"

interface TestInterface {
  test_function(s: string): void
}

function Helloworld(props: TestInterface) {

  let { test_function } = props

  React.useEffect(() => {
    test_function('hello from child')
  })
  return (
    <>Helloworld</>
  )
}

export default Helloworld