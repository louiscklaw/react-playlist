import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

import ExampleTestBox from './example/test_box'

function App() {
  return (
    <ChakraProvider>
      <div className="App">react helloworld</div>
      <Button>I just consumed some ⚡️Chakra!</Button>
      <div>
        <Badge>Default</Badge>
      </div>
      <div>
        <Stack direction="row" spacing={4}>
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </Stack>
      </div>

      <ExampleTestBox />
    </ChakraProvider>
  )
}

export default App
