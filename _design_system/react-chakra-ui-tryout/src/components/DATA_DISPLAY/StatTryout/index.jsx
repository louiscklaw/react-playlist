import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

export function BasicUsage() {
  return (
    <>
      <Stat>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </>
  );
}
export function StatWithIndicator() {
  return (
    <>
      <StatGroup>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </>
  );
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

export function StatTryout() {
  return (
    <div>
      StatTryout
      <div>
        BasicUsage <BasicUsage />
      </div>
      <div>
        StatWithIndicator <StatWithIndicator />
      </div>
    </div>
  );
}
