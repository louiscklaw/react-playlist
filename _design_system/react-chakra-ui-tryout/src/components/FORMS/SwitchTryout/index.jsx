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
export function Usage() {
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
export function Sizes() {
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
export function SwitchBackgroundColor() {
  return (
    <>
      <Stack direction="row">
        <Switch colorScheme="red" />
        <Switch colorScheme="teal" size="lg" />
      </Stack>
    </>
  );
}
export function TestHelloworld04() {
  return <>TestHelloworld04</>;
}
export function TestHelloworld05() {
  return <>TestHelloworld05</>;
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
