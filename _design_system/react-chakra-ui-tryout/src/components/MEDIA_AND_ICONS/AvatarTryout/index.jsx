import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Wrap,
  WrapItem,
  Stack,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';

import { AiOutlineUser } from 'react-icons/ai';

export function Usage() {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
        </WrapItem>
        <WrapItem>
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </WrapItem>
      </Wrap>
    </>
  );
}
export function AvatarSizes() {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xs"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            size="xs"
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="md"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="lg"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />{' '}
        </WrapItem>
      </Wrap>
    </>
  );
}
export function AvatarFallbacks() {
  return (
    <>
      <Stack direction="row">
        <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
        <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
        <Avatar src="https://bit.ly/broken-link" />
      </Stack>
    </>
  );
}
export function CustomizeTheFallbackAvatar() {
  return (
    <>
      <AvatarGroup spacing="1rem">
        <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
        <Avatar bg="teal.500" />
      </AvatarGroup>
    </>
  );
}
export function AvatarWithBadge() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>

        {/* You can also change the borderColor and bg of the badge */}
        <Avatar>
          <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />
        </Avatar>
      </Stack>
    </>
  );
}
export function TestAvatarGroup() {
  return (
    <>
      <AvatarGroup size="md" max={2}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
    </>
  );
}
export function TestHelloworld07() {
  return <>TestHelloworld07</>;
}
export function TestHelloworld08() {
  return <>TestHelloworld08</>;
}
export function TestHelloworld09() {
  return <>TestHelloworld09</>;
}
export function TestHelloworld10() {
  return <>TestHelloworld10</>;
}
export function TestHelloworld11() {
  return <>TestHelloworld11</>;
}
export function TestHelloworld12() {
  return <>TestHelloworld12</>;
}
export function TestHelloworld13() {
  return <>TestHelloworld13</>;
}
export function TestHelloworld14() {
  return <>TestHelloworld14</>;
}
export function TestHelloworld15() {
  return <>TestHelloworld15</>;
}
export function TestHelloworld16() {
  return <>TestHelloworld16</>;
}
export function TestHelloworld17() {
  return <>TestHelloworld17</>;
}
export function TestHelloworld18() {
  return <>TestHelloworld18</>;
}
export function TestHelloworld19() {
  return <>TestHelloworld19</>;
}
export function TestHelloworld20() {
  return <>TestHelloworld20</>;
}

export function AvatarTryout() {
  return (
    <div>
      AvatarTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        AvatarSizes <AvatarSizes />
      </div>
      <div>
        AvatarFallbacks <AvatarFallbacks />
      </div>
      <div>
        CustomizeTheFallbackAvatar <CustomizeTheFallbackAvatar />
      </div>
      <div>
        AvatarWithBadge <AvatarWithBadge />
      </div>
      <div>
        TestAvatarGroup <TestAvatarGroup />
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
