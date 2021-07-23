import * as React from 'react';
import { TimezonePicker } from 'baseui/timezonepicker';

export default () => {
  const [value, setValue] = React.useState('Europe/London');
  return (
    <TimezonePicker
      value={value}
      onChange={({ id }) => setValue(id)}
      date={new Date('2021-07-23T13:28:47.923Z')}
    />
  );
};
