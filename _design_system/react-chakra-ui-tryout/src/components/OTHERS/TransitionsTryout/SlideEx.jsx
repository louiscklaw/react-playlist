import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Collapse,
} from '@chakra-ui/react';
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import { Lorem } from 'react-lorem-component';

function TestSlideEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <Button onClick={onToggle}>Click Me</Button>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md">
            <Lorem count={2} />
          </Box>
        </Slide>
      </Box>
    </>
  );
}

export default function TransitionsTryout() {
  return (
    <div>
      TransitionsTryout
      <div>
        FadeEx <TestSlideEx />
      </div>
    </div>
  );
}
