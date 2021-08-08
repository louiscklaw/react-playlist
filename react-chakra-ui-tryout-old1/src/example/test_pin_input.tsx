import React from 'react'
import { Stack } from '@chakra-ui/react'
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'

function ExampleTestPinInput() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </Stack>
    </>
  )
}

export default ExampleTestPinInput
