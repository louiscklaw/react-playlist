import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Stack,
  InputRightAddon,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Button,
  InputGroup,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons';

export function Usage() {
  return (
    <>
      <Input placeholder="Basic usage" />
    </>
  );
}
export function ChangingTheSizeOfInput() {
  return (
    <>
      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
      </Stack>
    </>
  );
}
export function ChangingTheAppearanceOfTheInput() {
  return (
    <>
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
    </>
  );
}
export function LeftAndRightAddons() {
  return (
    <>
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
    </>
  );
}
export function AddElementsInsideInput() {
  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
      </Stack>
    </>
  );
}

export function PasswordInputExample() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export function ControlledInput() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
}
export function ChangingTheFocusAndErrorBorderColors() {
  return (
    <>
      <Stack spacing={3}>
        <Input
          focusBorderColor="lime"
          placeholder="Here is a sample placeholder"
        />
        <Input
          focusBorderColor="pink.400"
          placeholder="Here is a sample placeholder"
        />
        <Input
          isInvalid
          errorBorderColor="red.300"
          placeholder="Here is a sample placeholder"
        />
        <Input
          isInvalid
          errorBorderColor="crimson"
          placeholder="Here is a sample placeholder"
        />
      </Stack>
    </>
  );
}
export function TestHelloworld09() {
  return <>TestHelloworld09</>;
}
export function TestHelloworld10() {
  return <>TestHelloworld10</>;
}
export function TestHelloworld11() {
  return <>TestHelloworld11</>;
}
export function TestHelloworld12() {
  return <>TestHelloworld12</>;
}
export function TestHelloworld13() {
  return <>TestHelloworld13</>;
}
export function TestHelloworld14() {
  return <>TestHelloworld14</>;
}
export function TestHelloworld15() {
  return <>TestHelloworld15</>;
}
export function TestHelloworld16() {
  return <>TestHelloworld16</>;
}
export function TestHelloworld17() {
  return <>TestHelloworld17</>;
}
export function TestHelloworld18() {
  return <>TestHelloworld18</>;
}
export function TestHelloworld19() {
  return <>TestHelloworld19</>;
}
export function TestHelloworld20() {
  return <>TestHelloworld20</>;
}

export function InputTryout() {
  return (
    <div>
      InputTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ChangingTheSizeOfInput <ChangingTheSizeOfInput />
      </div>
      <div>
        ChangingTheAppearanceOfTheInput <ChangingTheAppearanceOfTheInput />
      </div>
      <div>
        LeftAndRightAddons <LeftAndRightAddons />
      </div>
      <div>
        AddElementsInsideInput <AddElementsInsideInput />
      </div>
      <div>
        PasswordInputExample <PasswordInputExample />
      </div>
      <div>
        ControlledInput <ControlledInput />
      </div>
      <div>
        ChangingTheFocusAndErrorBorderColors
        <ChangingTheFocusAndErrorBorderColors />
      </div>
      <div>
        TestHelloworld09 <TestHelloworld09 />
      </div>
      <div>
        TestHelloworld10 <TestHelloworld10 />
      </div>
      <div>
        TestHelloworld11 <TestHelloworld11 />
      </div>
      <div>
        TestHelloworld12 <TestHelloworld12 />
      </div>
      <div>
        TestHelloworld13 <TestHelloworld13 />
      </div>
      <div>
        TestHelloworld14 <TestHelloworld14 />
      </div>
      <div>
        TestHelloworld15 <TestHelloworld15 />
      </div>
      <div>
        TestHelloworld16 <TestHelloworld16 />
      </div>
      <div>
        TestHelloworld17 <TestHelloworld17 />
      </div>
      <div>
        TestHelloworld18 <TestHelloworld18 />
      </div>
      <div>
        TestHelloworld19 <TestHelloworld19 />
      </div>
      <div>
        TestHelloworld20 <TestHelloworld20 />
      </div>
    </div>
  );
}
