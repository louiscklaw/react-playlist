import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

export function ContainerTryout() {
  return (
    <div>
      ContainerTryout
      <div>
        <Container>
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production
        </Container>
      </div>
      <div>
        <VStack>
          <Container maxW="container.xl">Extra-Large Container</Container>
          <Container maxW="container.lg">Large Container</Container>
          <Container maxW="container.md">Medium Container</Container>
          <Container maxW="container.sm">Small Container</Container>
        </VStack>
      </div>
      <div>
        <Container maxW="xl" centerContent>
          <Box padding="4" bg="gray.100" maxW="3xl">
            There are many benefits to a joint design and development system.
            Not only does it bring benefits to the design team.
          </Box>
        </Container>
      </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  );
}
