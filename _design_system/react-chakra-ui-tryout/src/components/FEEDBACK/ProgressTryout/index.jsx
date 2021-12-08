import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <Progress value={80} />
    </>
  );
}
export function ProgressWithStripe() {
  return (
    <>
      <Progress hasStripe value={64} />
    </>
  );
}
export function ProgressSizes() {
  return (
    <>
      <Stack spacing={5}>
        <Progress colorScheme="green" size="sm" value={20} />
        <Progress colorScheme="green" size="md" value={20} />
        <Progress colorScheme="green" size="lg" value={20} />
        <Progress colorScheme="green" height="32px" value={20} />
      </Stack>
    </>
  );
}
export function ProgressColorScheme() {
  return (
    <>
      <Progress value={20} size="xs" colorScheme="pink" />
    </>
  );
}
export function AnimatedProgress() {
  return (
    <>
      <Progress size="xs" isIndeterminate />
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

export function ProgressTryout() {
  return (
    <div>
      ProgressTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ProgressWithStripe <ProgressWithStripe />
      </div>
      <div>
        ProgressSizes <ProgressSizes />
      </div>
      <div>
        ProgressColorScheme <ProgressColorScheme />
      </div>
      <div>
        AnimatedProgress <AnimatedProgress />
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
