import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <Spinner />
    </>
  );
}
export function SpinnerWithColor() {
  return (
    <>
      <Spinner color="red.500" />
    </>
  );
}
export function SpinnerWithDifferentSize() {
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
export function SpinnerWithEmptyAreaColor() {
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
