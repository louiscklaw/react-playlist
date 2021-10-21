import React from 'react'
import Box from '@material-ui/core/Box'

import { debounce } from 'lodash-es'

export default function App() {
  let [test_height, setTestHeight] = React.useState(window.innerHeight)

  const debouncedSetHeight = debounce(() => {
    setTestHeight(window.innerHeight)
  }, 100)

  React.useEffect(() => {
    window.addEventListener('resize', debouncedSetHeight)

    return () => {
      window.removeEventListener('resize', debouncedSetHeight)
    }
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
