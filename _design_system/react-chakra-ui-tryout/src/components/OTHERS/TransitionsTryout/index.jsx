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

export function FadeEx() {
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
export function ScaleFadeTransition() {
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

export function SlideFadeTransition() {
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
export function CollapseTransition() {
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
