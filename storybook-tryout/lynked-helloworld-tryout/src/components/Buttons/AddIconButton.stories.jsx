import React from 'react';
import '@fontsource/roboto';

import AddIconButton from './AddIconButton';

export default {
  title: 'Input/Buttons/StartIconButton',
  component: AddIconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AddIconButton {...args} />;

export const TestSimpleButton = Template.bind({});
TestSimpleButton.args = {
  color: 'primary',
  label: 'Button',
  variant: 'contained',
};

export const TestChineseLabel = Template.bind({});
TestChineseLabel.args = {
  color: 'primary',
  label: '中文字',
  variant: 'contained',
};
