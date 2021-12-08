import React from 'react';
import Formik from 'formik';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  Radio,
  HStack,
  Select,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  Form,
  Field,
  Button,
} from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </>
  );
}
export function SampleUsageForARadioOrCheckboxGroup() {
  return (
    <>
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
    </>
  );
}
export function MakingAFieldRequired() {
  return (
    <>
      <FormControl id="first-name" isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
    </>
  );
}
export function SelectExample() {
  return (
    <>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select country">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
    </>
  );
}
export function NumberInputExample() {
  return (
    <>
      <FormControl id="amount">
        <FormLabel>Amount</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </>
  );
}

export function UsageWithFormLibraries() {
  return (
    <>
      <div style={{ backgroundColor: 'red' }}>
        formik example not yet tested
      </div>
    </>
  );
}
export function TestHelloworld07() {
  return <>TestHelloworld07</>;
}
export function TestHelloworld08() {
  return <>TestHelloworld08</>;
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

export function FormControlTryout() {
  return (
    <div>
      FormControlTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        SampleUsageForARadioOrCheckboxGroup
        <SampleUsageForARadioOrCheckboxGroup />
      </div>
      <div>
        MakingAFieldRequired <MakingAFieldRequired />
      </div>
      <div>
        SelectExample <SelectExample />
      </div>
      <div>
        NumberInputExample <NumberInputExample />
      </div>
      <div>
        UsageWithFormLibraries <UsageWithFormLibraries />
      </div>
    </div>
  );
}
