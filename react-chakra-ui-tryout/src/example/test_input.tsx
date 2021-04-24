import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Button,
} from '@chakra-ui/react'

function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

function ExampleTestInput() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <Input placeholder="Basic usage" />
      </Stack>

      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>

      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" />
          <InputRightAddon children=".com" />
        </InputGroup>
      </Stack>

      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children="$" />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>

        <PasswordInput />
      </Stack>
    </>
  )
}

export default ExampleTestInput
