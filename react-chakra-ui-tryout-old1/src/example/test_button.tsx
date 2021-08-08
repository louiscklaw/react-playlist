import React from 'react'

import { Button, Stack } from '@chakra-ui/react'

function ExampleTestButton() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button isLoading loadingText="Submitting" colorScheme="teal" variant="outline">
          Submit
        </Button>
        <Button colorScheme="blue">Button</Button>
      </Stack>
    </>
  )
}

export default ExampleTestButton
