import React from 'react'
import { Box, Text, Link, VStack, Code, Grid, HStack, StackDivider } from '@chakra-ui/react'

import { Center, Square, Circle } from '@chakra-ui/react'

export function CenterTryout() {
  return (
    <div>
      CenterTryout
      <div>
        <Center bg="tomato" h="100px" color="white">
          This is the Center
        </Center>
      </div>
      <div>
        <HStack>
          <Center w="40px" h="40px" bg="tomato" color="white">
            {/* <PhoneIcon /> */}
          </Center>
          <Center w="40px" h="40px" bg="tomato" color="white">
            <Box as="span" fontWeight="bold" fontSize="lg">
              1
            </Box>
          </Center>
        </HStack>
      </div>
      <div>
        <HStack>
          <Circle size="40px" bg="tomato" color="white">
            {/* <PhoneIcon /> */}
          </Circle>
          <Square size="40px" bg="purple.700" color="white">
            {/* <PhoneIcon /> */}
          </Square>
        </HStack>
      </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  )
}
