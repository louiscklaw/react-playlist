import React from 'react';
import {
  CloseButton,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Stack,
} from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    </>
  );
}
export function Status() {
  return (
    <>
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>

        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="warning">
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status="info">
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
    </>
  );
}
export function Variant() {
  return (
    <>
      <Stack spacing={3}>
        <Alert status="success" variant="subtle">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="success" variant="solid">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="success" variant="left-accent">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="success" variant="top-accent">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      </Stack>
    </>
  );
}
export function Composition() {
  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px">
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
    </>
  );
}
export function Alert1() {
  return (
    <>
      <Alert status="success">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription display="block">
            Your application has been received. We will review your application
            and respond within the next 48 hours.
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
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

export function AlertTryout() {
  return (
    <div>
      AlertTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        Status <Status />
      </div>
      <div>
        Variant <Variant />
      </div>
      <div>
        Composition <Composition />
      </div>
      <div>
        Alert1 <Alert1 />
      </div>
    </div>
  );
}
