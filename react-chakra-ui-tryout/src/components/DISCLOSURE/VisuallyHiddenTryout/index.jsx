import React from 'react';
import {
  Heading,
  Button,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { VisuallyHidden } from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

export function Usage() {
  return (
    <>
      {' '}
      <Button>
        <VisuallyHidden>Checkmark</VisuallyHidden>
        <CheckIcon />
      </Button>
    </>
  );
}
export function TestHelloworld02() {
  return (
    <>
      <Box>
        <Heading>Title and description</Heading>
        <VisuallyHidden>This will be hidden</VisuallyHidden>
      </Box>
    </>
  );
}
export function TestHelloworld03() {
  return <>TestHelloworld03</>;
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

export function VisuallyHiddenTryout() {
  return (
    <div>
      VisuallyHiddenTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        Title and description <TestHelloworld02 />
      </div>
    </div>
  );
}
