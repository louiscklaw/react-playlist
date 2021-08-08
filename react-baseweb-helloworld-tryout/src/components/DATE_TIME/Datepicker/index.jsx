import * as React from 'react';
import { DatePicker } from 'baseui/datepicker';

export default () => {
  const [value, setValue] = React.useState([new Date()]);
  return (
    <DatePicker
      value={value}
      onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])}
    />
  );
};
