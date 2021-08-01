import React from 'react';
import { Box, Stack, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useRemoteData,
  Heading,
} from '@chakra-ui/react';

function Usage() {
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
function Usage1() {
  return (
    <>
      <Skeleton>
        <div>contents wrapped</div>
        <div>won't be visible</div>
      </Skeleton>
    </>
  );
}
function Usage2() {
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
function Usage3() {
  return (
    <>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </>
  );
}
function SkeletonColor() {
  return (
    <>
      <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
    </>
  );
}
function SkippingTheSkeletonWhenContentIsLoaded() {
  return (
    <>
      <Skeleton isLoaded>
        <span>Chakra ui is cool</span>
      </Skeleton>
    </>
  );
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
