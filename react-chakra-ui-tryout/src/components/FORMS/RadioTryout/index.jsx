import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Stack,
  HStack,
  useRadioGroup,
} from '@chakra-ui/react';
import { Radio, RadioGroup, useRadio } from '@chakra-ui/react';

function Usage() {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
}
function RadioWithCustomColor() {
  return (
    <>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Radio
          </Radio>
          <Radio colorScheme="green" value="2">
            Radio
          </Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}
function RadioSizes() {
  return (
    <>
      <Stack>
        <Radio size="sm" name="1" colorScheme="red">
          Radio
        </Radio>
        <Radio size="md" name="1" colorScheme="green">
          Radio
        </Radio>
        <Radio size="lg" name="1" colorScheme="orange" defaultChecked>
          Radio
        </Radio>
      </Stack>
    </>
  );
}
function DisabledRadios() {
  return (
    <>
      <RadioGroup defaultValue="1">
        <Stack>
          <Radio value="1" isDisabled>
            Checked
          </Radio>
          <Radio value="2">Unchecked</Radio>
          <Radio value="3">Unchecked</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}
function HorizontalAlignment() {
  return (
    <>
      <RadioGroup defaultValue="1">
        <Stack spacing={4} direction="row">
          <Radio value="1" isDisabled>
            Radio 1
          </Radio>
          <Radio value="2">Radio 2</Radio>
          <Radio value="3">Radio 3</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}
function InvalidRadio() {
  return (
    <>
      <Radio isInvalid>Radio</Radio>
    </>
  );
}
function CustomRadioButtons() {
  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}>
          {props.children}
        </Box>
      </Box>
    );
  }

  const options = ['react', 'vue', 'svelte'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

function TestHelloworld08() {
  return <>TestHelloworld08</>;
}
function TestHelloworld09() {
  return <>TestHelloworld09</>;
}
function TestHelloworld10() {
  return <>TestHelloworld10</>;
}
function TestHelloworld11() {
  return <>TestHelloworld11</>;
}
function TestHelloworld12() {
  return <>TestHelloworld12</>;
}
function TestHelloworld13() {
  return <>TestHelloworld13</>;
}
function TestHelloworld14() {
  return <>TestHelloworld14</>;
}
function TestHelloworld15() {
  return <>TestHelloworld15</>;
}
function TestHelloworld16() {
  return <>TestHelloworld16</>;
}
function TestHelloworld17() {
  return <>TestHelloworld17</>;
}
function TestHelloworld18() {
  return <>TestHelloworld18</>;
}
function TestHelloworld19() {
  return <>TestHelloworld19</>;
}
function TestHelloworld20() {
  return <>TestHelloworld20</>;
}

export function RadioTryout() {
  return (
    <div>
      RadioTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        RadioWithCustomColor <RadioWithCustomColor />
      </div>
      <div>
        RadioSizes <RadioSizes />
      </div>
      <div>
        DisabledRadios <DisabledRadios />
      </div>
      <div>
        HorizontalAlignment <HorizontalAlignment />
      </div>
      <div>
        InvalidRadio <InvalidRadio />
      </div>
      <div>
        CustomRadioButtons <CustomRadioButtons />
      </div>
      <div>
        TestHelloworld08 <TestHelloworld08 />
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
