import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, HStack } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export function FlexTryout() {
  return (
    <div>
      FlexTryout
      <div>
        <Flex color="white">
          <Center w="100px" bg="green.500">
            <Text>Box 1</Text>
          </Center>
          <Square bg="blue.500" size="150px">
            <Text>Box 2</Text>
          </Square>
          <Box flex="1" bg="tomato">
            <Text>Box 3</Text>
          </Box>
        </Flex>
      </div>
      <div>
        <Flex>
          <Box p="4" bg="red.400">
            Box 1
          </Box>
          <Spacer />
          <Box p="4" bg="green.400">
            Box 2
          </Box>
        </Flex>
      </div>
      <div>
        <Box>
          <Text>Flex and Spacer: Full width, equal Spacing</Text>
          <Flex>
            <Box w="70px" h="10" bg="red.500" />
            <Spacer />
            <Box w="170px" h="10" bg="red.500" />
            <Spacer />
            <Box w="180px" h="10" bg="red.500" />
          </Flex>

          <Text>
            Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box w="70px" h="10" bg="blue.500" />
            <Box w="170px" h="10" bg="blue.500" />
            <Box w="180px" h="10" bg="blue.500" />
          </Grid>

          <Text>
            HStack: The children have equal spacing but don't span the whole
            container
          </Text>
          <HStack spacing="24px">
            <Box w="70px" h="10" bg="teal.500" />
            <Box w="170px" h="10" bg="teal.500" />
            <Box w="180px" h="10" bg="teal.500" />
          </HStack>
        </Box>
      </div>
      <div>
        <Flex>
          <Box p="2">
            <Heading size="md">Chakra App</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="teal" mr="4">
              Sign Up
            </Button>
            <Button colorScheme="teal">Log in</Button>
          </Box>
        </Flex>
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
