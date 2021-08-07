import * as React from 'react';
import { Textarea } from 'baseui/textarea';

export default () => {
  const [value, setValue] = React.useState('Hello');
  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Controlled Input"
      clearOnEscape
    />
  );
};
