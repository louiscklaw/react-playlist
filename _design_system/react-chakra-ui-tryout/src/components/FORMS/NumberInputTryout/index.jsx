import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  HStack,
  Button,
  Input,
  useNumberInput,
} from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
export function SettingAMinimumAndMaximumValue() {
  return (
    <>
      <NumberInput defaultValue={15} min={10} max={20}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
export function SettingTheStepSize() {
  return (
    <>
      <NumberInput step={5} defaultValue={15} min={10} max={30}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      EDITABLE EXAMPLE
    </>
  );
}
export function AdjustingThePrecisionOfTheValue() {
  return (
    <>
      <NumberInput defaultValue={15} precision={2} step={0.2}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
export function ClampValueWhenUserBlursTheInput() {
  return (
    <>
      <div>
        In this example, try to type a value greater than the max. It won't
        reset the value on blur.
      </div>
      <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
export function AllowingOutOfRangeValues() {
  return (
    <>
      <NumberInput
        defaultValue={15}
        max={10}
        keepWithinRange={false}
        clampValueOnBlur={false}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
export function FormattingAndParsingTheValue() {
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, '');

  const [value, setValue] = React.useState('1.53');

  return (
    <NumberInput
      onChange={(valueString) => setValue(parse(valueString))}
      value={format(value)}
      max={50}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
export function ChangingTheSizeOfTheInput() {
  return (
    <>
      <Stack shouldWrapChildren direction="row">
        <NumberInput size="xs" maxW={16} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput size="sm" maxW={20} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput size="md" maxW={24} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput size="lg" maxW={32} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
    </>
  );
}
export function ChangingTheStyles() {
  return (
    <>
      <NumberInput size="sm" defaultValue={15} min={10}>
        <NumberInputField focusBorderColor="red.200" />
        <NumberInputStepper>
          <NumberIncrementStepper
            bg="green.200"
            _active={{ bg: 'green.300' }}
            children="+"
          />
          <NumberDecrementStepper
            bg="pink.200"
            _active={{ bg: 'pink.300' }}
            children="-"
          />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
export function CombiningItWithASlider() {
  const [value, setValue] = React.useState(0);
  const handleChange = (value) => setValue(value);

  return (
    <Flex>
      <NumberInput maxW="100px" mr="2rem" value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value} />
      </Slider>
    </Flex>
  );
}
export function CreateAMobileSpinner() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.01,
      defaultValue: 1.53,
      min: 1,
      max: 6,
      precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack maxW="320px">
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
}
export function IncrementValueUsingMouseWheel() {
  return (
    <>
      <NumberInput allowMouseWheel>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
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

export function NumberInputTryout() {
  return (
    <div>
      NumberInputTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        SettingAMinimumAndMaximumValue <SettingAMinimumAndMaximumValue />
      </div>
      <div>
        SettingTheStepSize <SettingTheStepSize />
      </div>
      <div>
        AdjustingThePrecisionOfTheValue <AdjustingThePrecisionOfTheValue />
      </div>
      <div>
        ClampValueWhenUserBlursTheInput <ClampValueWhenUserBlursTheInput />
      </div>
      <div>
        AllowingOutOfRangeValues <AllowingOutOfRangeValues />
      </div>
      <div>
        FormattingAndParsingTheValue <FormattingAndParsingTheValue />
      </div>
      <div>
        ChangingTheSizeOfTheInput <ChangingTheSizeOfTheInput />
      </div>
      <div>
        ChangingTheStyles <ChangingTheStyles />
      </div>
      <div>
        CombiningItWithASlider <CombiningItWithASlider />
      </div>
      <div>
        CreateAMobileSpinner <CreateAMobileSpinner />
      </div>
      <div>
        IncrementValueUsingMouseWheel <IncrementValueUsingMouseWheel />
      </div>
    </div>
  );
}
