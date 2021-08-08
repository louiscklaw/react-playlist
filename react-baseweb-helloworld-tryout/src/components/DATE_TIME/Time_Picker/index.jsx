import * as React from 'react';
import { TimePicker } from 'baseui/timepicker';

export default () => {
  const [value, setValue] = React.useState(
    new Date('2021-08-07T18:29:57.899Z')
  );
  return (
    <TimePicker
      value={value}
      onChange={(date) => setValue(date)}
      minTime={new Date('2021-08-07T16:00:00.000Z')}
    />
  );
};
