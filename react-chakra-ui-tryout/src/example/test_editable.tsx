import React from 'react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

function ExampleTestHelloworld() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultIsChecked>
          Checkbox
        </Checkbox>
        <Checkbox defaultIsChecked>Checkbox</Checkbox>
      </Stack>
    </>
  )
}

export default ExampleTestHelloworld
