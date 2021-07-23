import * as React from 'react';
import { Combobox } from 'baseui/combobox';

export default () => {
  const [value, setValue] = React.useState('');
  return (
    <Combobox
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      options={[
        { label: 'AliceBlue', id: '#F0F8FF' },
        { label: 'AntiqueWhite', id: '#FAEBD7' },
        { label: 'Aqua', id: '#00FFFF' },
        { label: 'Aquamarine', id: '#7FFFD4' },
        { label: 'Azure', id: '#F0FFFF' },
        { label: 'Beige', id: '#F5F5DC' },
      ]}
      mapOptionToString={(option) => option.label}
    />
  );
};
