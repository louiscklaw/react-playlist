import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

function ExampleTestSelect() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Stack spacing={3}>
          <Select variant="outline" placeholder="Outline" />
          <Select variant="filled" placeholder="Filled" />
          <Select variant="flushed" placeholder="Flushed" />
          <Select variant="unstyled" placeholder="Unstyled" />
        </Stack>
      </Stack>
    </>
  )
}

export default ExampleTestSelect
