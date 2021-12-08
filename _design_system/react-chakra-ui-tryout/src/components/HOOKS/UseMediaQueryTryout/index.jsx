import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

export function Usage() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <Text>
      {isLargerThan1280 ? 'larger than 1280px' : 'smaller than 1280px'}
    </Text>
  );
}
export function Example() {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 1920px)',
    '(display-mode: browser)',
  ]);

  function determineText() {
    if (isLargerThanHD) {
      return `high resolution you got there ${
        isDisplayingInBrowser ? 'in your browser' : 'on your screen'
      }`;
    }

    return isDisplayingInBrowser
      ? 'rendering in a browser'
      : 'rendering on something else, e.g. PWA';
  }

  return <Text>{determineText()}</Text>;
}
export function TestHelloworld03() {
  return <>TestHelloworld03</>;
}
export function TestHelloworld04() {
  return <>TestHelloworld04</>;
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

export function UseMediaQueryTryout() {
  return (
    <div>
      UseMediaQueryTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        Example <Example />
      </div>
    </div>
  );
}
