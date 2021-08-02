import React from 'react';
import { Box, Collapse } from '@chakra-ui/react';
import {
  Fade,
  ScaleFade,
  SlideFade,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import { Lorem } from 'react-lorem-component';

import TestSlideEx from './SlideEx';

function FadeEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md">
          Fade
        </Box>
      </Fade>
    </>
  );
}
function ScaleFadeTransition() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md">
          Fade
        </Box>
      </ScaleFade>
    </>
  );
}

function SlideFadeTransition() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <SlideFade in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md">
          <Lorem count={1} />
        </Box>
      </SlideFade>
    </>
  );
}
function CollapseTransition() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md">
          <Lorem count={1} />
        </Box>
      </Collapse>
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

export function TransitionsTryout() {
  return (
    <div>
      TransitionsTryout
      <div>
        FadeEx
        <FadeEx />
      </div>
      <div>{/* ScaleFadeTransition <ScaleFadeTransition /> */}</div>
      <div>SlideEx not done</div>
      <div> SlideFadeTransition not done </div>
      <div>CollapseTransition not done</div>
    </div>
  );
}
