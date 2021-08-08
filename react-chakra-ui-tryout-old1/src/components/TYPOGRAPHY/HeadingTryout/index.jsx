import React from 'react'
import { Heading, Stack, Box, Text, Button } from '@chakra-ui/react'

export function HeadingTryout() {
  return (
    <div>
      HeadingTryout
      <div>
        {' '}
        <Heading>I'm a Heading</Heading>{' '}
      </div>
      <div>
        {' '}
        <Stack spacing={6}>
          <Heading as="h1" size="4xl" isTruncated>
            (4xl) In love with React & Next
          </Heading>
          <Heading as="h2" size="3xl" isTruncated>
            (3xl) In love with React & Next
          </Heading>
          <Heading as="h2" size="2xl">
            (2xl) In love with React & Next
          </Heading>
          <Heading as="h2" size="xl">
            (xl) In love with React & Next
          </Heading>
          <Heading as="h3" size="lg">
            (lg) In love with React & Next
          </Heading>
          <Heading as="h4" size="md">
            (md) In love with React & Next
          </Heading>
          <Heading as="h5" size="sm">
            (sm) In love with React & Next
          </Heading>
          <Heading as="h6" size="xs">
            (xs) In love with React & Next
          </Heading>
        </Stack>
      </div>
      <div>
        {' '}
        <Heading isTruncated>
          Basic text writing, including headings, body text, lists, and more.
        </Heading>{' '}
      </div>
      <div>
        {' '}
        <Heading size="lg" fontSize="50px">
          I'm overriding this heading
        </Heading>{' '}
      </div>
      <div>
        {' '}
        // Example from paystack.com
        <Box maxW="32rem">
          <Heading mb={4}>Modern online and offline payments for Africa</Heading>
          <Text fontSize="xl">
            Paystack helps businesses in Africa get paid by anyone, anywhere in the world
          </Text>
          <Button size="lg" colorScheme="green" mt="24px">
            Create a free account
          </Button>
        </Box>{' '}
      </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  )
}
