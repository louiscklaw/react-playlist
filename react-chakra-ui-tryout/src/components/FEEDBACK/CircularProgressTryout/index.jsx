import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <CircularProgress value={80} />
    </>
  );
}
export function ChangingTheSize() {
  return (
    <>
      <CircularProgress value={30} size="120px" />
    </>
  );
}
export function ChangingTheThickness() {
  return (
    <>
      <CircularProgress value={59} size="100px" thickness="4px" />
    </>
  );
}
export function ChangingTheColor() {
  return (
    <>
      <CircularProgress value={30} color="orange.400" thickness="12px" />
    </>
  );
}
export function AddingLabel() {
  return (
    <>
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
    </>
  );
}
export function IndeterminateProgress() {
  return (
    <>
      <CircularProgress isIndeterminate color="green.300" />
    </>
  );
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

export function CircularProgressTryout() {
  return (
    <div>
      CircularProgressTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ChangingTheSize <ChangingTheSize />
      </div>
      <div>
        ChangingTheThickness <ChangingTheThickness />
      </div>
      <div>
        ChangingTheColor <ChangingTheColor />
      </div>
      <div>
        AddingLabel <AddingLabel />
      </div>
      <div>
        IndeterminateProgress <IndeterminateProgress />
      </div>
    </div>
  );
}
