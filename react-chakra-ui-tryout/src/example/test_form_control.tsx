import React from 'react'
import { Stack } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

import { Input, RadioGroup, HStack, Radio, Select } from '@chakra-ui/react'

function ExampleTestHelloworld() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend">Favorite Naruto Character</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack spacing="24px">
              <Radio value="Sasuke">Sasuke</Radio>
              <Radio value="Nagato">Nagato</Radio>
              <Radio value="Itachi">Itachi</Radio>
              <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Select only if you're a fan.</FormHelperText>
        </FormControl>

        <FormControl id="country">
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
      </Stack>
    </>
  )
}

export default ExampleTestHelloworld
