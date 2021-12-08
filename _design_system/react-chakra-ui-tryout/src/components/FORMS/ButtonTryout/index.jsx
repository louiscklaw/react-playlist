import React from 'react';
import { MdBuild, MdCall } from 'react-icons/md';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Stack,
  HStack,
  IconButton,
} from '@chakra-ui/react';

import { AddIcon, EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup } from '@chakra-ui/react';
import BeatLoader from 'react-spinners/ClipLoader';

export function ButtonTryout() {
  return (
    <div>
      ButtonTryout
      <div>
        <Button colorScheme="blue">Button</Button>
      </div>
      <div>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="teal" size="xs">
            Button
          </Button>
          <Button colorScheme="teal" size="sm">
            Button
          </Button>
          <Button colorScheme="teal" size="md">
            Button
          </Button>
          <Button colorScheme="teal" size="lg">
            Button
          </Button>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Button
          </Button>
          <Button colorScheme="teal" variant="link">
            Button
          </Button>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Email
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline">
            Call us
          </Button>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
            Settings
          </Button>
          <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
            Call us
          </Button>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={4}>
          <Button isLoading colorScheme="teal" variant="solid">
            Email
          </Button>
          <Button
            isLoading
            loadingText="Submitting"
            colorScheme="teal"
            variant="outline">
            Submit
          </Button>
        </Stack>
      </div>
      <div>
        <Button
          isLoading
          colorScheme="blue"
          spinner={<BeatLoader size={8} color="white" />}>
          Click me
        </Button>
      </div>
      <div>
        <Stack direction="row" spacing={4} align="center">
          <Button
            isLoading
            loadingText="Loading"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start">
            Submit
          </Button>
          <Button
            isLoading
            loadingText="Loading"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="end">
            Continue
          </Button>
        </Stack>
      </div>
      <div>
        <HStack>
          <Button colorScheme="facebook" leftIcon={<EmailIcon />}>
            Facebook
          </Button>
          <Button colorScheme="twitter" leftIcon={<EmailIcon />}>
            Twitter
          </Button>
        </HStack>
      </div>
      <div>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue">Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button mr="-px">Save</Button>
          <IconButton aria-label="Add to friends" icon={<AddIcon />} />
        </ButtonGroup>
      </div>
      <div>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500">
          Button
        </Button>
      </div>
      <div>
        <Box
          as="button"
          height="24px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          borderRadius="2px"
          fontSize="14px"
          fontWeight="semibold"
          bg="#f5f6f7"
          borderColor="#ccd0d5"
          color="#4b4f56"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}>
          Join Group
        </Box>
      </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  );
}
