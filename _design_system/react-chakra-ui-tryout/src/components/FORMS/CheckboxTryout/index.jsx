import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Icon } from '@chakra-ui/react';
import { Button, ButtonGroup, Stack, HStack } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export function Usage() {
  return <Checkbox defaultIsChecked>Checkbox</Checkbox>;
}

export function DisabledCheckbox() {
  return (
    <Stack spacing={10} direction="row">
      <Checkbox isDisabled>Checkbox</Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        Checkbox
      </Checkbox>
    </Stack>
  );
}

export function CheckboxWithCustomColor() {
  return (
    <Stack spacing={10} direction="row">
      <Checkbox colorScheme="red" defaultIsChecked>
        Checkbox
      </Checkbox>
      <Checkbox colorScheme="green" defaultIsChecked>
        Checkbox
      </Checkbox>
    </Stack>
  );
}

export function CheckBoxSizes() {
  return (
    <HStack spacing={10} direction="row">
      <Checkbox size="sm" colorScheme="red">
        Checkbox
      </Checkbox>
      <Checkbox size="md" colorScheme="green" defaultIsChecked>
        Checkbox
      </Checkbox>
      <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
        Checkbox
      </Checkbox>
    </HStack>
  );
}

export function InvalidCheckbox() {
  return <Checkbox isInvalid>Checkbox</Checkbox>;
}

export function ChangingTheSpacing() {
  return <Checkbox spacing="1rem">Option</Checkbox>;
}

export function ChangingTheIconColorAndSize() {
  return (
    <Checkbox iconColor="blue.400" iconSize="1rem">
      Option
    </Checkbox>
  );
}

export function IndeterminateExample() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}>
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) =>
            setCheckedItems([e.target.checked, checkedItems[1]])
          }>
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.target.checked])
          }>
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  );
}

/**
 * 1. Create a custom icon that accepts 2 props: `isIndeterminate` and `isChecked`
 */
export function CustomIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props;

  const d = isIndeterminate
    ? 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z'
    : 'M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z';

  return (
    <Icon viewBox="0 0 24 24" {...rest}>
      <path fill="currentColor" d={d} />
    </Icon>
  );
}

export function CustomCheckbox() {
  return (
    <Checkbox icon={<CustomIcon />} colorScheme="cyan">
      Hello world
    </Checkbox>
  );
}

export function TestCheckboxGroup() {
  return (
    <CheckboxGroup colorScheme="green" defaultValue={['naruto', 'kakashi']}>
      <HStack>
        <Checkbox value="naruto">Naruto</Checkbox>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">kakashi</Checkbox>
      </HStack>
    </CheckboxGroup>
  );
}

export function CheckboxTryout() {
  return (
    <div>
      CheckboxTryout
      <div>
        <Usage />
      </div>
      <div>
        <DisabledCheckbox />
      </div>
      <div>
        <CheckboxWithCustomColor />
      </div>
      <div>
        <CheckBoxSizes />
      </div>
      <div>
        <InvalidCheckbox />
      </div>
      <div>
        <ChangingTheSpacing />
      </div>
      <div>
        <ChangingTheIconColorAndSize />
      </div>
      <div>
        <IndeterminateExample />
      </div>
      <div>
        CustomCheckbox
        <CustomCheckbox />
      </div>
      <div>
        <TestCheckboxGroup />
      </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  );
}
