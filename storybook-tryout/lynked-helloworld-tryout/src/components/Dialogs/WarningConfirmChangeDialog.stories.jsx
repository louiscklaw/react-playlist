import React from 'react';
import '@fontsource/roboto';

import WarningConfirmChangeDialog from './WarningConfirmChangeDialog';

export default {
  title: 'Dialogs/WarningConfirmChangeDialog',
  component: WarningConfirmChangeDialog,
  argTypes: { backgroundColor: { control: 'color' } },
};

const Template = (args) => <WarningConfirmChangeDialog {...args} />;

export const Helloworld = Template.bind({});
Helloworld.args = {
  color: 'primary',
  label: 'Button',
  variant: 'contained',
  title: '注意事項',
  body: 'お客様は「準備中」の間はご注文頂けません。',
  explain: '※次の指定した営業開始時間から注文することができます。',
  cancel_text: 'cancel',
  ok_text: 'ok',
};
