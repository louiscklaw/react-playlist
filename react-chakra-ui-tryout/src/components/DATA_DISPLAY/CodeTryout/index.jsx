import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <Code>Hello world</Code>
    </>
  );
}
export function Colors() {
  return (
    <>
      <Stack direction="row">
        <Code children="console.log(welcome)" />
        <Code colorScheme="red" children="var chakra = 'awesome!'" />
        <Code colorScheme="yellow" children="npm install chakra" />
      </Stack>
    </>
  );
}

export function CodeTryout() {
  return (
    <div>
      CodeTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        Colors <Colors />
      </div>
    </div>
  );
}
