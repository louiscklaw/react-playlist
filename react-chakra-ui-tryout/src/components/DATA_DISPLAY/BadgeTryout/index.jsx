import React from 'react';
import { Box, Text, Stack, Flex, Avatar } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';

function Usage() {
  return (
    <>
      <Badge>Default</Badge>
    </>
  );
}

function BadgeColor() {
  return (
    <>
      <Stack direction="row">
        <Badge>Default</Badge>
        <Badge colorScheme="green">Success</Badge>
        <Badge colorScheme="red">Removed</Badge>
        <Badge colorScheme="purple">New</Badge>
      </Stack>
    </>
  );
}
function BadgeVariants() {
  return (
    <>
      <Stack direction="row">
        <Badge variant="outline" colorScheme="green">
          Default
        </Badge>
        <Badge variant="solid" colorScheme="green">
          Success
        </Badge>
        <Badge variant="subtle" colorScheme="green">
          Removed
        </Badge>
      </Stack>
    </>
  );
}

function Composition() {
  return (
    <>
      <Flex>
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">
            Segun Adebayo
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        Segun Adebayo
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          New
        </Badge>
      </Text>
    </>
  );
}

export function BadgeTryout() {
  return (
    <div>
      BadgeTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        BadgeColor <BadgeColor />
      </div>
      <div>
        BadgeVariants <BadgeVariants />
      </div>
      <div>
        Composition <Composition />
      </div>
    </div>
  );
}
