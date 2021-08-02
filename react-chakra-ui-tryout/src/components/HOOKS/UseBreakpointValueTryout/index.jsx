import React from 'react';
import { Text, VStack, Button } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

function Usage() {
  const variant = useBreakpointValue({ base: 'outline', md: 'solid' });

  return (
    <VStack align="flex-start">
      <Text>Resize your window to see the button variant change</Text>
      <Button colorScheme="teal" variant={variant}>
        Button
      </Button>
    </VStack>
  );
}

export function UseBreakpointValueTryout() {
  return (
    <div>
      UseBreakpointValueTryout
      <div>
        Usage <Usage />
      </div>
    </div>
  );
}
