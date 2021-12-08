import React from 'react';
import { Box, Text, Link, VStack, Code } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

export function GridTryout() {
  return (
    <div>
      GridTryout
      <div>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
        </Grid>
      </div>
      <div>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}>
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </div>
      <div>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2} h="10" bg="tomato" />
          <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
        </Grid>
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
