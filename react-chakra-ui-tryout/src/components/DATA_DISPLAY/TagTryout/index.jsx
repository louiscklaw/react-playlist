import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, HStack } from '@chakra-ui/react';
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Avatar,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md';

function Usage() {
  return (
    <>
      <Tag>Sample Tag</Tag>
    </>
  );
}
function TestHelloworld02() {
  return (
    <>
      <HStack spacing={4}>
        {['sm', 'md', 'lg'].map((size) => (
          <Tag size={size} key={size} variant="solid" colorScheme="teal">
            Teal
          </Tag>
        ))}
      </HStack>
    </>
  );
}
function WithLeftIcon() {
  return (
    <>
      <HStack spacing={4}>
        {['sm', 'md', 'lg'].map((size) => (
          <Tag size={size} key={size} variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={AddIcon} />
            <TagLabel>Cyan</TagLabel>
          </Tag>
        ))}
      </HStack>
    </>
  );
}
function WithRightIcon() {
  return (
    <>
      <HStack spacing={4}>
        {['sm', 'md', 'lg'].map((size) => (
          <Tag size={size} key={size} variant="outline" colorScheme="blue">
            <TagLabel>Blue</TagLabel>
            <TagRightIcon as={MdSettings} />
          </Tag>
        ))}
      </HStack>
    </>
  );
}
function WithCloseButton() {
  return (
    <>
      <HStack spacing={4}>
        {['sm', 'md', 'lg'].map((size) => (
          <Tag
            size={size}
            key={size}
            borderRadius="full"
            variant="solid"
            colorScheme="green">
            <TagLabel>Green</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
      </HStack>
    </>
  );
}
function WithCustomElement() {
  return (
    <>
      <Tag size="lg" colorScheme="red" borderRadius="full">
        <Avatar
          src="https://bit.ly/sage-adebayo"
          size="xs"
          name="Segun Adebayo"
          ml={-1}
          mr={2}
        />
        <TagLabel>Segun</TagLabel>
      </Tag>
    </>
  );
}
function TestHelloworld07() {
  return <>TestHelloworld07</>;
}
function TestHelloworld08() {
  return <>TestHelloworld08</>;
}
function TestHelloworld09() {
  return <>TestHelloworld09</>;
}
function TestHelloworld10() {
  return <>TestHelloworld10</>;
}
function TestHelloworld11() {
  return <>TestHelloworld11</>;
}
function TestHelloworld12() {
  return <>TestHelloworld12</>;
}
function TestHelloworld13() {
  return <>TestHelloworld13</>;
}
function TestHelloworld14() {
  return <>TestHelloworld14</>;
}
function TestHelloworld15() {
  return <>TestHelloworld15</>;
}
function TestHelloworld16() {
  return <>TestHelloworld16</>;
}
function TestHelloworld17() {
  return <>TestHelloworld17</>;
}
function TestHelloworld18() {
  return <>TestHelloworld18</>;
}
function TestHelloworld19() {
  return <>TestHelloworld19</>;
}
function TestHelloworld20() {
  return <>TestHelloworld20</>;
}

export function TagTryout() {
  return (
    <div>
      TagTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        TestHelloworld02 <TestHelloworld02 />
      </div>
      <div>
        WithLeftIcon <WithLeftIcon />
      </div>
      <div>
        WithRightIcon <WithRightIcon />
      </div>
      <div>
        WithCloseButton <WithCloseButton />
      </div>
      <div>
        WithCustomElement <WithCustomElement />
      </div>
      <div>
        TestHelloworld07 <TestHelloworld07 />
      </div>
      <div>
        TestHelloworld08 <TestHelloworld08 />
      </div>
      <div>
        TestHelloworld09 <TestHelloworld09 />
      </div>
      <div>
        TestHelloworld10 <TestHelloworld10 />
      </div>
      <div>
        TestHelloworld11 <TestHelloworld11 />
      </div>
      <div>
        TestHelloworld12 <TestHelloworld12 />
      </div>
      <div>
        TestHelloworld13 <TestHelloworld13 />
      </div>
      <div>
        TestHelloworld14 <TestHelloworld14 />
      </div>
      <div>
        TestHelloworld15 <TestHelloworld15 />
      </div>
      <div>
        TestHelloworld16 <TestHelloworld16 />
      </div>
      <div>
        TestHelloworld17 <TestHelloworld17 />
      </div>
      <div>
        TestHelloworld18 <TestHelloworld18 />
      </div>
      <div>
        TestHelloworld19 <TestHelloworld19 />
      </div>
      <div>
        TestHelloworld20 <TestHelloworld20 />
      </div>
    </div>
  );
}
