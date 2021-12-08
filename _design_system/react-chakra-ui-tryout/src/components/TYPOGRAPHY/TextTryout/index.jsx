import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';

export function TextTryout() {
  return (
    <div>
      TextTryout
      <div>
        <Stack spacing={3}>
          <Text fontSize="6xl">(6xl) In love with React & Next</Text>
          <Text fontSize="5xl">(5xl) In love with React & Next</Text>
          <Text fontSize="4xl">(4xl) In love with React & Next</Text>
          <Text fontSize="3xl">(3xl) In love with React & Next</Text>
          <Text fontSize="2xl">(2xl) In love with React & Next</Text>
          <Text fontSize="xl">(xl) In love with React & Next</Text>
          <Text fontSize="lg">(lg) In love with React & Next</Text>
          <Text fontSize="md">(md) In love with React & Next</Text>
          <Text fontSize="sm">(sm) In love with React & Next</Text>
          <Text fontSize="xs">(xs) In love with React & Next</Text>
        </Stack>
      </div>
      <div>
        <Text color="gray.500" isTruncated>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </div>
      <div>
        <Text noOfLines={2}>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the English
          alphabet. Owing to its existence, Chakra was created.
        </Text>
        <Text noOfLines={[1, 2, 3]}>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the English
          alphabet. Owing to its existence, Chakra was created.
        </Text>
      </div>
      <div>
        <Text fontSize="50px" color="tomato">
          I'm using a custom font-size value for this text
        </Text>
      </div>
      <div>
        <>
          <Text as="i">Italic</Text>
          <br />
          <Text as="u">Underline</Text>
          <br />
          <Text as="abbr">I18N</Text>
          <br />
          <Text as="cite">Citation</Text>
          <br />
          <Text as="del">Deleted</Text>
          <br />
          <Text as="em">Emphasis</Text>
          <br />
          <Text as="ins">Inserted</Text>
          <br />
          <Text as="kbd">Ctrl + C</Text>
          <br />
          <Text as="mark">Highlighted</Text>
          <br />
          <Text as="s">Strikethrough</Text>
          <br />
          <Text as="samp">Sample</Text>
          <br />
          <Text as="sub">sub</Text>
          <br />
          <Text as="sup">sup</Text>
        </>
      </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  );
}
