import * as React from 'react';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

export default () => {
  return (
    <FormControl label={() => 'label'} caption={() => 'caption'}>
      <Input />
    </FormControl>
  );
};
