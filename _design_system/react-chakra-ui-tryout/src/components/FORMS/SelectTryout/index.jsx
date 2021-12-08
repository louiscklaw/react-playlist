import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Select,
  Stack,
} from '@chakra-ui/react';

import { MdArrowDropDown } from 'react-icons/md';

export function Usage() {
  return (
    <>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </>
  );
}
export function ChangingTheSizeOfTheSelect() {
  return (
    <>
      <Stack spacing={3}>
        <Select placeholder="extra small size" size="xs" />
        <Select placeholder="small size" size="sm" />
        <Select placeholder="medium size" size="md" />
        <Select placeholder="large size" size="lg" />
      </Stack>
    </>
  );
}
export function ChangingTheAppearanceOfTheSelect() {
  return (
    <>
      <Stack spacing={3}>
        <Select variant="outline" placeholder="Outline" />
        <Select variant="filled" placeholder="Filled" />
        <Select variant="flushed" placeholder="Flushed" />
        <Select variant="unstyled" placeholder="Unstyled" />
      </Stack>
    </>
  );
}
export function ChangingTheIconInTheSelect() {
  return (
    <>
      <Select icon={<MdArrowDropDown />} placeholder="Woohoo! A new icon" />
    </>
  );
}
export function OverridingTheStylesOfTheSelect() {
  return (
    <>
      <Select
        bg="tomato"
        borderColor="tomato"
        color="white"
        placeholder="Woohoo! A new background color!"
      />
    </>
  );
}
export function TestHelloworld06() {
  return <>TestHelloworld06</>;
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

export function SelectTryout() {
  return (
    <div>
      SelectTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ChangingTheSizeOfTheSelect <ChangingTheSizeOfTheSelect />
      </div>
      <div>
        ChangingTheAppearanceOfTheSelect <ChangingTheAppearanceOfTheSelect />
      </div>
      <div>
        ChangingTheIconInTheSelect <ChangingTheIconInTheSelect />
      </div>
      <div>
        OverridingTheStylesOfTheSelect <OverridingTheStylesOfTheSelect />
      </div>
    </div>
  );
}
