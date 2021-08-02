import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';

function Usage() {
  return (
    <>
      <Link>Chakra UI</Link>
    </>
  );
}
function ExternalLink() {
  return (
    <>
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </Link>
    </>
  );
}
function LinkInlineWithText() {
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
function UsageWithRoutingLibrary() {
  return (
    <>
      <Link as={ReactRouterLink} to="/home">
        Home
      </Link>
    </>
  );
}
function TestHelloworld05() {
  return <>TestHelloworld05</>;
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
