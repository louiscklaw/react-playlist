import React from 'react';
import '@fontsource/roboto';

import EndIconButton from './EndIconButton';

export default {
  title: 'Input/Buttons/EndIconButton',
  component: EndIconButton,
  argTypes: { backgroundColor: { control: 'color' } },
};

const Template = (args) => <EndIconButton {...args} />;

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
