import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
function Usage() {
  return (
    <>
      <Textarea placeholder="Here is a sample placeholder" />
    </>
  );
}
function ControlledTextarea() {
  let [value, setValue] = React.useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
}
function ResizeBehavior() {
  const [resize, setResize] = React.useState('horizontal');

  return (
    <>
      <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
          <Radio value="none">None</Radio>
        </Stack>
      </RadioGroup>

      <Textarea
        placeholder="Here is a sample placeholder"
        size="sm"
        resize={resize}
      />
    </>
  );
}
function DisabledTextarea() {
  return (
    <>
      <Textarea isDisabled placeholder="Here is a sample placeholder" />
    </>
  );
}
function InvalidTextarea() {
  return (
    <>
      <Textarea isInvalid placeholder="Here is a sample placeholder" />
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

export function TextareaTryout() {
  return (
    <div>
      TextareaTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ControlledTextarea <ControlledTextarea />
      </div>
      <div>
        ResizeBehavior <ResizeBehavior />
      </div>
      <div>
        DisabledTextarea <DisabledTextarea />
      </div>
      <div>
        InvalidTextarea <InvalidTextarea />
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
