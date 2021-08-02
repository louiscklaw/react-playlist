import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

function Usage() {
  return (
    <>
      <Box boxSize="sm">
        <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
      </Box>
    </>
  );
}
function Size() {
  return (
    <>
      <Stack direction="row">
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Stack>
    </>
  );
}
function ImageWithBorderRadius() {
  return (
    <>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/sage-adebayo"
        alt="Segun Adebayo"
      />
    </>
  );
}
function FallbackSupport() {
  return (
    <>
      <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
    </>
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

export function ImageTryout() {
  return (
    <div>
      ImageTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        Size <Size />
      </div>
      <div>
        ImageWithBorderRadius <ImageWithBorderRadius />
      </div>
      <div>
        FallbackSupport <FallbackSupport />
      </div>
      <div>
        TestHelloworld05 <TestHelloworld05 />
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
