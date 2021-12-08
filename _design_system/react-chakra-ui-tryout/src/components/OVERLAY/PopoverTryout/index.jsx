import React from 'react';
import {
  ButtonGroup,
  Button,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  useDisclosure,
  FormControl,
  FormLabel,
  Portal,
  z,
} from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';

export function BasicUsage() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export function RenderingThePopoverInAPortal() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export function WalkthroughPopover() {
  const initialFocusRef = React.useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Manage Your Channels
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
        <PopoverFooter
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}>
          <Box fontSize="sm">Step 2 of 4</Box>
          <ButtonGroup size="sm">
            <Button colorScheme="green">Setup Email</Button>
            <Button colorScheme="blue" ref={initialFocusRef}>
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export function ControlledUsage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return (
    <>
      <Button mr={5} onClick={open}>
        Trigger
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        placement="right"
        closeOnBlur={false}>
        <PopoverTrigger>
          <Button colorScheme="pink">Popover Target</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter d="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline">Cancel</Button>
              <Button colorScheme="red">Apply</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}

export function InternalStateEx() {
  const initRef = React.useRef();
  return (
    <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button>Click to {isOpen ? 'close' : 'open'}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader>This is the header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  Hello. Nice to meet you! This is the body of the popover
                </Box>
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={onClose}
                  ref={initRef}>
                  Close
                </Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

export function CustomizingThePopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          tabIndex="0"
          role="button"
          aria-label="Some box"
          p={5}
          w="120px"
          bg="gray.300"
          children="Click"
        />
      </PopoverTrigger>
      <PopoverContent bg="tomato" color="white">
        <PopoverHeader fontWeight="semibold">Customization</PopoverHeader>
        <PopoverArrow bg="pink.500" />
        <PopoverCloseButton bg="purple.500" />
        <PopoverBody>
          Tadaa!! The arrow color and background color is customized. Check the
          props for each component.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverPlacements() {
  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">Popover placement</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export function LazilyMountingPopover() {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">Popover placement</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverTryout() {
  return (
    <div>
      PopoverTryout
      <div>
        BasicUsage <BasicUsage />
      </div>
      <div>
        RenderingThePopoverInAPortal <RenderingThePopoverInAPortal />
      </div>
      <div> WalkthroughPopover TODO</div>
      <div>
        Controlled Usage <ControlledUsage />
      </div>
      <div>
        Accessing Internal state <InternalStateEx />
      </div>
      <div>
        Customizing the Popover <CustomizingThePopover />
      </div>
      <div>
        Popover Placements <PopoverPlacements />
      </div>
      <div>
        Lazily mounting Popover <LazilyMountingPopover />
      </div>
      <div> </div>
      <div> </div>
    </div>
  );
}
