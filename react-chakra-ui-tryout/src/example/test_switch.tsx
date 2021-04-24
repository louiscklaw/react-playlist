import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Switch, FormControl, FormLabel } from '@chakra-ui/react'

function ExampleTestSwitch() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Enable email alerts?
          </FormLabel>
          <Switch id="email-alerts" />
        </FormControl>
      </Stack>
    </>
  )
}

export default ExampleTestSwitch
