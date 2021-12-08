import React from 'react';
import { Box, Stack, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useRemoteData,
  Heading,
} from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </>
  );
}
export function Usage1() {
  return (
    <>
      <Skeleton>
        <div>contents wrapped</div>
        <div>won't be visible</div>
      </Skeleton>
    </>
  );
}
export function Usage2() {
  let [loading, setLoading] = React.useState(true);
  let [error, setError] = React.useState(false);
  let [data, setData] = React.useState({});
  if (error) return <Box children="error" />;
  return (
    <Box>
      <Skeleton isLoaded={!loading}>
        <Heading>{data.title}</Heading>
      </Skeleton>
    </Box>
  );
}
export function Usage3() {
  return (
    <>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </>
  );
}
export function SkeletonColor() {
  return (
    <>
      <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
    </>
  );
}
export function SkippingTheSkeletonWhenContentIsLoaded() {
  return (
    <>
      <Skeleton isLoaded>
        <span>Chakra ui is cool</span>
      </Skeleton>
    </>
  );
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

export function SkeletonTryout() {
  return (
    <div>
      SkeletonTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        Usage1 <Usage1 />
      </div>
      <div>
        Usage2 <Usage2 />
      </div>
      <div>
        Usage3 <Usage3 />
      </div>
      <div>
        SkeletonColor <SkeletonColor />
      </div>
      <div>
        SkippingTheSkeletonWhenContentIsLoaded{' '}
        <SkippingTheSkeletonWhenContentIsLoaded />
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
