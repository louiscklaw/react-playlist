import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'

function ExampleTestTextarea() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <Textarea placeholder="Here is a sample placeholder" />
      </Stack>
    </>
  )
}

export default ExampleTestTextarea
