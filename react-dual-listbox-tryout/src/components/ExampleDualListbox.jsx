import React from 'react';
import DualListBox from 'react-dual-listbox';

import 'react-dual-listbox/lib/react-dual-listbox.css';

const options = [
  {
    label: 'Mars',
    disabled: true,
    options: [
      { value: 'phobos', label: 'Phobos' },
      { value: 'deimos', label: 'Deimos' },
    ],
  },
  {
    label: 'Jupiter',
    options: [
      { value: 'io', label: 'Io' },
      { value: 'europa', label: 'Europa', disabled: true },
      { value: 'ganymede', label: 'Ganymede' },
      { value: 'callisto', label: 'Callisto' },
    ],
  },
];

export default function ExampleDualListbox() {
  let [state, setState] = React.useState(['Mars']);
  let onChange = (selected) => {
    setState(selected);
  };

  return (
    <>
      <DualListBox
        canFilter
        options={options}
        selected={state}
        onChange={onChange}
      />
    </>
  );
}
