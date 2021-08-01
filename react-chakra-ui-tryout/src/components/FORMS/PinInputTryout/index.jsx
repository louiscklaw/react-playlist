import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';

function Usage() {
  return (
    <>
      <HStack>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
}
function AllowingAlphanumericValues() {
  return (
    <>
      <HStack>
        <PinInput type="alphanumeric">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
}
function UsingFieldsAsAOneTimePassword() {
  return (
    <>
      <PinInput otp>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </>
  );
}
function MaskingThePinInputsValue() {
  return (
    <>
      <HStack>
        <PinInput type="alphanumeric" mask>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
}
function ChangingTheSizeOfThePinInput() {
  return (
    <>
      <Stack>
        <HStack>
          <PinInput size="xs">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="sm">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="md">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="lg">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </Stack>
    </>
  );
}
function AddingADefaultValue() {
  return (
    <>
      <HStack>
        <PinInput defaultValue="234">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
}
function ChangingThePlaceholder() {
  return (
    <>
      <HStack>
        <PinInput placeholder="🥳">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
}
function DisableFocusManagement() {
  return (
    <>
      <HStack>
        <PinInput manageFocus={false}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
}
function AutoFillAndCopyPaste() {
  return (
    <>
      <HStack>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
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

export function PinInputTryout() {
  return (
    <div>
      PinInputTryout
      <div>
        {' '}
        Usage <Usage />{' '}
      </div>
      <div>
        {' '}
        AllowingAlphanumericValues <AllowingAlphanumericValues />{' '}
      </div>
      <div>
        {' '}
        UsingFieldsAsAOneTimePassword <UsingFieldsAsAOneTimePassword />{' '}
      </div>
      <div>
        {' '}
        MaskingThePinInputsValue <MaskingThePinInputsValue />{' '}
      </div>
      <div>
        {' '}
        ChangingTheSizeOfThePinInput <ChangingTheSizeOfThePinInput />{' '}
      </div>
      <div>
        {' '}
        AddingADefaultValue <AddingADefaultValue />{' '}
      </div>
      <div>
        {' '}
        ChangingThePlaceholder <ChangingThePlaceholder />{' '}
      </div>
      <div>
        {' '}
        DisableFocusManagement <DisableFocusManagement />{' '}
      </div>
      <div>
        {' '}
        AutoFillAndCopyPaste <AutoFillAndCopyPaste />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld10 <TestHelloworld10 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld11 <TestHelloworld11 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld12 <TestHelloworld12 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld13 <TestHelloworld13 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld14 <TestHelloworld14 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld15 <TestHelloworld15 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld16 <TestHelloworld16 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld17 <TestHelloworld17 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld18 <TestHelloworld18 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld19 <TestHelloworld19 />{' '}
      </div>
      <div>
        {' '}
        TestHelloworld20 <TestHelloworld20 />{' '}
      </div>
    </div>
  );
}
