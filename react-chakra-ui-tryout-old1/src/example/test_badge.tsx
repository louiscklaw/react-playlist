import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Badge, Flex, Box, Avatar, Text } from '@chakra-ui/react'

function ExampleTestBadge() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <Badge>Default</Badge>

        <Stack direction="row">
          <Badge>Default</Badge>
          <Badge colorScheme="green">Success</Badge>
          <Badge colorScheme="red">Removed</Badge>
          <Badge colorScheme="purple">New</Badge>
        </Stack>

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
      </Stack>

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
    </>
  )
}

export default ExampleTestBadge
