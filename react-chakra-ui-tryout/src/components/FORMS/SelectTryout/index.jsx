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

function Usage() {
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
function ChangingTheSizeOfTheSelect() {
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
function ChangingTheAppearanceOfTheSelect() {
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
function ChangingTheIconInTheSelect() {
  return (
    <>
      <Select icon={<MdArrowDropDown />} placeholder="Woohoo! A new icon" />
    </>
  );
}
function OverridingTheStylesOfTheSelect() {
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
function TestHelloworld06() {
  return <>TestHelloworld06</>;
}
function TestHelloworld07() {
  return <>TestHelloworld07</>;
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
      <div>
        TestHelloworld06 <TestHelloworld06 />
      </div>
      <div>
        TestHelloworld07 <TestHelloworld07 />
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
