import * as React from 'react';
import { TimezonePicker } from 'baseui/timezonepicker';

export default () => {
  const [value, setValue] = React.useState('Europe/London');
  return (
    <TimezonePicker
      value={value}
      onChange={({ id }) => setValue(id)}
      date={new Date('2021-08-07T18:29:58.059Z')}
    />
  );
};
