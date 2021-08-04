import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';

export function Usage() {
  return (
    <>
      <Link>Chakra UI</Link>
    </>
  );
}
export function ExternalLink() {
  return (
    <>
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </Link>
    </>
  );
}
export function LinkInlineWithText() {
  return (
    <>
      <Text>
        Did you know that{' '}
        <Link color="teal.500" href="#">
          links can live inline with text
        </Link>
      </Text>
    </>
  );
}
export function UsageWithRoutingLibrary() {
  return (
    <>
      <Link as={ReactRouterLink} to="/home">
        Home
      </Link>
    </>
  );
}
export function TestHelloworld05() {
  return <>TestHelloworld05</>;
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

export function LinkTryout() {
  return (
    <div>
      LinkTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ExternalLink <ExternalLink />
      </div>
      <div>
        LinkInlineWithText <LinkInlineWithText />
      </div>
      <div>
        UsageWithRoutingLibrary <UsageWithRoutingLibrary />
      </div>
    </div>
  );
}
