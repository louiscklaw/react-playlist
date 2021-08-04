import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      {' '}
      <Box bg="red.400" color="white">
        I'm here,
        <Portal>This text is portaled at the end of document.body!</Portal>
      </Box>
    </>
  );
}
export function UsingACustomContainer() {
  const ref = React.useRef();
  return (
    <Box bg="red.400" color="white">
      I'm here,
      <Portal containerRef={ref}>
        Portal: This text is portaled to the yellow box!
      </Portal>
      <Box ref={ref} bg="yellow.500">
        <div>Container: Hey,</div>
      </Box>
    </Box>
  );
}
export function NestingPortals() {
  const ref = React.useRef();
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hey welcome,
          <Portal>Child: I'm attached to my parent portal</Portal>
        </Box>
      </Portal>
      <Box bg="red.400" color="white" ref={ref} />
    </div>
  );
}
export function OptingOutOfPortalNesting() {
  const ref = React.useRef();
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hey welcome,
          <Portal appendToParentPortal={false}>
            Child: I'm going to document.body
          </Portal>
        </Box>
      </Portal>
      <div style={{ background: 'red' }} ref={ref} />
    </div>
  );
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

export function PortalTryout() {
  return (
    <div>
      PortalTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        UsingACustomContainer <UsingACustomContainer />
      </div>
      <div>
        NestingPortals <NestingPortals />
      </div>
      <div>
        OptingOutOfPortalNesting <OptingOutOfPortalNesting />
      </div>
    </div>
  );
}
