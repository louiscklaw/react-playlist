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

function Usage() {
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
function TestHelloworld02() {
  return (
    <>
      <Box>
        <Heading>Title and description</Heading>
        <VisuallyHidden>This will be hidden</VisuallyHidden>
      </Box>
    </>
  );
}
function TestHelloworld03() {
  return <>TestHelloworld03</>;
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
