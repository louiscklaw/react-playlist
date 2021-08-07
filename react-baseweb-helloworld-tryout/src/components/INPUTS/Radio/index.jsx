import * as React from 'react';
import { RadioGroup, Radio, ALIGN } from 'baseui/radio';

export default () => {
  const [value, setValue] = React.useState('2');
  return (
    <RadioGroup
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      name="number"
      align={ALIGN.vertical}>
      <Radio value="1">One</Radio>
      <Radio value="2" description="This is a radio description">
        Two
      </Radio>
      <Radio value="3">Three</Radio>
    </RadioGroup>
  );
};
