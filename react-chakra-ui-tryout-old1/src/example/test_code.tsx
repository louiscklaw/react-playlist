import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'

function ExampleTestCode() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <Code>Hello world</Code>
      </Stack>
    </>
  )
}

export default ExampleTestCode
