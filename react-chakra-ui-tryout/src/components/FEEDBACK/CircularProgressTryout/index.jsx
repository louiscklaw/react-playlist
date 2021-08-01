import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

function Usage() {
  return (
    <>
      <CircularProgress value={80} />
    </>
  );
}
function ChangingTheSize() {
  return (
    <>
      <CircularProgress value={30} size="120px" />
    </>
  );
}
function ChangingTheThickness() {
  return (
    <>
      <CircularProgress value={59} size="100px" thickness="4px" />
    </>
  );
}
function ChangingTheColor() {
  return (
    <>
      <CircularProgress value={30} color="orange.400" thickness="12px" />
    </>
  );
}
function AddingLabel() {
  return (
    <>
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
    </>
  );
}
function IndeterminateProgress() {
  return (
    <>
      <CircularProgress isIndeterminate color="green.300" />
    </>
  );
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
