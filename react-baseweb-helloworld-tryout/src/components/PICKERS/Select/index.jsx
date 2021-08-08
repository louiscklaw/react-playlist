import * as React from 'react';
import { Select } from 'baseui/select';

export default () => {
  const [value, setValue] = React.useState([]);
  return (
    <Select
      options={[
        { label: 'AliceBlue', id: '#F0F8FF' },
        { label: 'AntiqueWhite', id: '#FAEBD7' },
        { label: 'Aqua', id: '#00FFFF' },
        { label: 'Aquamarine', id: '#7FFFD4' },
        { label: 'Azure', id: '#F0FFFF' },
        { label: 'Beige', id: '#F5F5DC' },
      ]}
      value={value}
      placeholder="Select color"
      onChange={(params) => setValue(params.value)}
    />
  );
};
