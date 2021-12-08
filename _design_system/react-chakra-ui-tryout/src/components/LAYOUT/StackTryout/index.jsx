import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  StackDivider,
} from '@chakra-ui/react';
import { Stack, HStack } from '@chakra-ui/react';

export function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export function StackEx() {
  return (
    <Stack spacing={8}>
      <Feature
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Feature
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
    </Stack>
  );
}

export function StackTryout() {
  return (
    <div>
      StackTryout
      <div>
        <HStack spacing="24px">
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </HStack>
      </div>
      <div>
        <Stack direction={['column', 'row']} spacing="24px">
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </Stack>
      </div>
      <div>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch">
          <Box h="40px" bg="yellow.200">
            1
          </Box>
          <Box h="40px" bg="tomato">
            2
          </Box>
          <Box h="40px" bg="pink.100">
            3
          </Box>
        </VStack>
      </div>
      <div>
        <StackEx />
      </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  );
}
