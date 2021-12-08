import React from 'react';
import {
  Stack,
  Button,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/react';

export function Usage() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>
      Show Toast
    </Button>
  );
}
export function CustomComponent() {
  function HelloworldButton() {
    return (
      <>
        <Box color="white" p={3} bg="blue.500">
          Hello World
        </Box>
      </>
    );
  }
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          position: 'bottom-left',
          render: HelloworldButton,
        })
      }>
      Show Toast
    </Button>
  );
}
export function ClosingToasts() {
  const toast = useToast();
  const toastIdRef = React.useRef();

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll() {
    // you may optionally pass an object of positions to exclusively close
    // keeping other positions opened
    // e.g. `{ positions: ['bottom'] }`
    toast.closeAll();
  }

  function addToast() {
    toastIdRef.current = toast({ description: 'some text' });
  }

  return (
    <Stack isInline spacing={2}>
      <Button onClick={addToast} type="button">
        Toast
      </Button>

      <Button onClick={close} type="button" variant="outline">
        Close last toast
      </Button>

      <Button onClick={closeAll} type="button" variant="outline">
        Close all toasts
      </Button>
    </Stack>
  );
}
export function UpdatingToasts() {
  const toast = useToast();
  const toastIdRef = React.useRef();

  function update() {
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, { description: 'new text' });
    }
  }

  function addToast() {
    toastIdRef.current = toast({ description: 'some text' });
  }

  return (
    <Stack isInline spacing={2}>
      <Button onClick={addToast} type="button">
        Toast
      </Button>

      <Button onClick={update} type="button" variant="outline">
        Update last toast
      </Button>
    </Stack>
  );
}
export function Status() {
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
              })
            }>
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}
export function Variants() {
  const toast = useToast();
  const variants = ['solid', 'subtle', 'left-accent', 'top-accent'];

  return (
    <Wrap>
      {variants.map((variant, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${variant} toast`,
                variant: variant,
                isClosable: true,
              })
            }>
            Show {variant} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}
export function ChangingTheToastPosition() {
  const toast = useToast();
  const positions = [
    'top',
    'top-right',
    'top-left',
    'bottom',
    'bottom-right',
    'bottom-left',
  ];

  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position,
                isClosable: true,
              })
            }>
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}
export function PreventingDuplicateToast() {
  const toast = useToast();
  const id = 'test-toast';
  return (
    <Button
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: 'Hey! You can create a duplicate toast',
          });
        }
      }}>
      Click me!
    </Button>
  );
}
export function StandaloneToasts() {
  const toast = createStandaloneToast();
  toast({
    title: 'An error occurred. and this is a test from StandaloneToasts',
    description: 'An error occurred. and this is a test from StandaloneToasts.',
    status: 'error',
    duration: 9000,
    isClosable: true,
  });

  return <>StandaloneToasts</>;
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

export function ToastTryout() {
  return (
    <div>
      ToastTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        CustomComponent <CustomComponent />
      </div>
      <div>
        ClosingToasts <ClosingToasts />
      </div>
      <div>
        UpdatingToasts <UpdatingToasts />
      </div>
      <div>
        Status <Status />
      </div>
      <div>
        Variants <Variants />
      </div>
      <div>
        ChangingTheToastPosition <ChangingTheToastPosition />
      </div>
      <div>
        PreventingDuplicateToast <PreventingDuplicateToast />
      </div>
      <div>
        StandaloneToasts <StandaloneToasts />
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
