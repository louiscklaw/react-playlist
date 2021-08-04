import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <CloseButton />
    </>
  );
}

export function ButtonSize() {
  return (
    <>
      <Stack direction="row" spacing={6}>
        <CloseButton size="sm" />
        <CloseButton size="md" />
        <CloseButton size="lg" />
      </Stack>
    </>
  );
}

export function CloseButtonTryout() {
  return (
    <div>
      CloseButtonTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ButtonSize <ButtonSize />
      </div>
    </div>
  );
}
