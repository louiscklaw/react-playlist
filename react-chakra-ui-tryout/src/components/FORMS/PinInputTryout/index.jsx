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

export function Usage() {
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
export function AllowingAlphanumericValues() {
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
export function UsingFieldsAsAOneTimePassword() {
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
export function MaskingThePinInputsValue() {
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
export function ChangingTheSizeOfThePinInput() {
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
export function AddingADefaultValue() {
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
export function ChangingThePlaceholder() {
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
export function DisableFocusManagement() {
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
export function AutoFillAndCopyPaste() {
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

export function PinInputTryout() {
  return (
    <div>
      PinInputTryout
      <div>

        Usage <Usage />
      </div>
      <div>

        AllowingAlphanumericValues <AllowingAlphanumericValues />
      </div>
      <div>

        UsingFieldsAsAOneTimePassword <UsingFieldsAsAOneTimePassword />
      </div>
      <div>

        MaskingThePinInputsValue <MaskingThePinInputsValue />
      </div>
      <div>

        ChangingTheSizeOfThePinInput <ChangingTheSizeOfThePinInput />
      </div>
      <div>

        AddingADefaultValue <AddingADefaultValue />
      </div>
      <div>

        ChangingThePlaceholder <ChangingThePlaceholder />
      </div>
      <div>

        DisableFocusManagement <DisableFocusManagement />
      </div>
      <div>

        AutoFillAndCopyPaste <AutoFillAndCopyPaste />
      </div>
    </div>
  );
}
