import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';

function Usage() {
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
function UsingACustomContainer() {
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
function NestingPortals() {
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
function OptingOutOfPortalNesting() {
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
