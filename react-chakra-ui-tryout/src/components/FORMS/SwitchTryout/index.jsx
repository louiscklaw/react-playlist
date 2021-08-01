import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react';
function Usage() {
  return (
    <>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
    </>
  );
}
function Sizes() {
  return (
    <>
      <Stack align="center" direction="row">
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </Stack>
    </>
  );
}
function SwitchBackgroundColor() {
  return (
    <>
      <Stack direction="row">
        <Switch colorScheme="red" />
        <Switch colorScheme="teal" size="lg" />
      </Stack>
    </>
  );
}
function TestHelloworld04() {
  return <>TestHelloworld04</>;
}
function TestHelloworld05() {
  return <>TestHelloworld05</>;
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

export function SwitchTryout() {
  return (
    <div>
      SwitchTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        Sizes <Sizes />
      </div>
      <div>
        SwitchBackgroundColor <SwitchBackgroundColor />
      </div>
    </div>
  );
}
