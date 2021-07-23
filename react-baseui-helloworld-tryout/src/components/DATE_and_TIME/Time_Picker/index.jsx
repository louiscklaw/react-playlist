import * as React from 'react';
import { TimePicker } from 'baseui/timepicker';

export default () => {
  const [value, setValue] = React.useState(
    new Date('2021-07-23T13:28:47.970Z')
  );
  return (
    <TimePicker
      value={value}
      onChange={(date) => setValue(date)}
      minTime={new Date('2021-07-22T16:00:00.000Z')}
    />
  );
};
