import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

function Usage() {
  return (
    <>
      <Spinner />
    </>
  );
}
function SpinnerWithColor() {
  return (
    <>
      <Spinner color="red.500" />
    </>
  );
}
function SpinnerWithDifferentSize() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </Stack>
    </>
  );
}
function SpinnerWithEmptyAreaColor() {
  return (
    <>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
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

export function SpinnerTryout() {
  return (
    <div>
      SpinnerTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        SpinnerWithColor <SpinnerWithColor />
      </div>
      <div>
        SpinnerWithDifferentSize <SpinnerWithDifferentSize />
      </div>
      <div>
        SpinnerWithEmptyAreaColor <SpinnerWithEmptyAreaColor />
      </div>
    </div>
  );
}
