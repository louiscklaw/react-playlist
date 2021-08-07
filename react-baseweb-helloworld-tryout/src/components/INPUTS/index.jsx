import React from 'react';
import Button from 'src/components/INPUTS/Button/index.jsx';
import Button_Group from 'src/components/INPUTS/Button_Group/index.jsx';
import Checkbox from 'src/components/INPUTS/Checkbox';
import Combobox from 'src/components/INPUTS/Combobox';
import Form_Control from 'src/components/INPUTS/Form_Control';
import Input from 'src/components/INPUTS/Input';
import Payment_Card from 'src/components/INPUTS/Payment_Card';
import Phone_Input from 'src/components/INPUTS/Phone_Input';
import Pin_Code from 'src/components/INPUTS/Pin_Code';
import Radio from 'src/components/INPUTS/Radio';
import Slider from 'src/components/INPUTS/Slider';
import Textarea from 'src/components/INPUTS/Textarea';

export default function HelloworldInput() {
  return (
    <>
      <Button />
      <Button_Group />
      <Checkbox />
      <Combobox />
      <Form_Control />
      <Input />
      <Payment_Card />
      <Phone_Input />
      <Pin_Code />
      <Radio />
      <Slider />
      <Textarea />
    </>
  );
}
