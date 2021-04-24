import React from 'react'
import { Stack } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

function ExampleTestNumberInput() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <NumberInput step={5} defaultValue={15} min={10} max={30}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
    </>
  )
}

export default ExampleTestNumberInput
