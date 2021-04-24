import React from 'react'
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'

import ExampleTestBox from './example/test_box'

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <ExampleTestBox></ExampleTestBox>
    </Box>
  )
}

export default App
