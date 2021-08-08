import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'

function ExampleTestKbd() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <span>
          <Kbd>shift</Kbd> + <Kbd>H</Kbd>
        </span>

        <span>
          <Kbd>shift</Kbd> then <Kbd>H</Kbd>
        </span>
      </Stack>
    </>
  )
}

export default ExampleTestKbd
