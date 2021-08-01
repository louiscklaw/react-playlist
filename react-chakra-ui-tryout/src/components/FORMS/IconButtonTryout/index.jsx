import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';

import { SearchIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';

import { MdPhone } from 'react-icons/md';

function Usage() {
  return (
    <>
      <IconButton aria-label="Search database" icon={<SearchIcon />} />
    </>
  );
}
function ButtonColors() {
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
function ButtonSizes() {
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
function ButtonVariants() {
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
function WithCustomIcon() {
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
function TestHelloworld06() {
  return <>TestHelloworld06</>;
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
