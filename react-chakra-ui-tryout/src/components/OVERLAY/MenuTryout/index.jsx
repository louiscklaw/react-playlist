import React from 'react';
import { Box, Text, Link, VStack, Code, Button, Grid } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Image,
  IconButton,
  Portal,
} from '@chakra-ui/react';

import {
  ChevronDownIcon,
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';

export function Usage() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function AccessingTheInternalState() {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}>
            {isOpen ? 'Close' : 'Open'}
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem onClick={() => alert('Kagebunshin')}>
              Create a Copy
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export function LetterNavigation() {
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}>
        File <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuDivider />
        <MenuItem>Open...</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function JustAnotherExample() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Your Cats
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/100/100"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span>Fluffybuns the Destroyer</span>
        </MenuItem>
        <MenuItem minH="40px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/120/120"
            alt="Simon the pensive"
            mr="12px"
          />
          <span>Simon the pensive</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function AddingIconsAndCommands() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<AddIcon />} command="⌘T">
          New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function LazilyMountingMenuItem() {
  return (
    <Menu isLazy>
      <MenuButton>Open menu</MenuButton>
      <MenuList>
        {/* MenuItems are not rendered unless Menu is open */}
        <MenuItem>New Window</MenuItem>
        <MenuItem>Open Closed Tab</MenuItem>
        <MenuItem>Open File</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function RenderingMenuInAPortal() {
  return (
    <>
      <div>RenderingMenuInAPortal</div>
      <Menu>
        <MenuButton>Open menu</MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
}

export function MenuGroupExample() {
  return (
    <>
      <div>MenuGroupExample</div>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}

export function MenuOptionGroups() {
  return (
    <>
      MenuOptionGroups
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          MenuItem
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Country" type="checkbox">
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Phone</MenuItemOption>
            <MenuItemOption value="country">Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
}

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

// function AddingIconsAndCommands(){
//   return(

//   )
// }

export function MenuTryout() {
  return (
    <div>
      MenuTryout
      <div>
        <Usage />
      </div>
      <div>
        <AccessingTheInternalState />
      </div>
      <div>
        <LetterNavigation />
      </div>
      <div>
        <JustAnotherExample />
      </div>
      <div>
        <LazilyMountingMenuItem />
      </div>
      <div>
        <RenderingMenuInAPortal />
      </div>
      <div>
        <MenuGroupExample />
      </div>
      <div>
        <MenuOptionGroups />
      </div>
      <div> </div>
      <div> </div>
    </div>
  );
}
