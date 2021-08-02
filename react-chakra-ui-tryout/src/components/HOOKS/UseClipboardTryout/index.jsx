import React from 'react';
import {
  Flex,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
  Input,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { useClipboard } from '@chakra-ui/react';

function Usage() {
  const [value, setValue] = React.useState('Hello world');
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <>
      <Flex mb={2}>
        <Input value={value} isReadOnly placeholder="Welcome" />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable>
    </>
  );
}
function TestHelloworld02() {
  return <>TestHelloworld02</>;
}
function TestHelloworld03() {
  return <>TestHelloworld03</>;
}
function TestHelloworld04() {
  return <>TestHelloworld04</>;
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

export function UseClipboardTryout() {
  return (
    <div>
      UseClipboardTryout
      <div>
        Usage <Usage />
      </div>
    </div>
  );
}
