import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';

import { SearchIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';

import { MdPhone } from 'react-icons/md';

export function Usage() {
  return (
    <>
      <IconButton aria-label="Search database" icon={<SearchIcon />} />
    </>
  );
}
export function ButtonColors() {
  return (
    <>
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
      />
    </>
  );
}
export function ButtonSizes() {
  return (
    <>
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<PhoneIcon />}
      />
    </>
  );
}
export function ButtonVariants() {
  return (
    <>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        icon={<EmailIcon />}
      />
    </>
  );
}
export function WithCustomIcon() {
  return (
    <>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<MdPhone />}
      />
    </>
  );
}
export function TestHelloworld06() {
  return <>TestHelloworld06</>;
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

export function IconButtonTryout() {
  return (
    <div>
      IconButtonTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ButtonColors <ButtonColors />
      </div>
      <div>
        ButtonSizes <ButtonSizes />
      </div>
      <div>
        ButtonVariants <ButtonVariants />
      </div>
      <div>
        WithCustomIcon <WithCustomIcon />
      </div>
      <div>
        TestHelloworld06 <TestHelloworld06 />
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
