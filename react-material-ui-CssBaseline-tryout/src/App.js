import React from 'react'
import Box from '@material-ui/core/Box'

import { debounce } from 'lodash-es'

export default function App() {
  let [test_height, setTestHeight] = React.useState(window.innerHeight)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        setTestHeight(window.innerHeight)
      }, 100),
    )
  }, [])

  return (
    <Box
      style={{
        height: test_height,
        width: '100%',
        backgroundColor: 'gold',
      }}
    >
      helloworld
    </Box>
  )
}
