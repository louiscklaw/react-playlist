import React from 'react';

import DateAndTimePickers from 'src/components/pickers/DateAndTimePickers/index.jsx';
import DatePickers from 'src/components/pickers/DatePickers/index.jsx';
import MaterialUIPickers from 'src/components/pickers/MaterialUIPickers/index.jsx';
import TimePickers from 'src/components/pickers/TimePickers/index.jsx';

export default function HelloworldMaterialUiComponents() {
  return (
    <>
      <div>
        {/* <DateAndTimePickers /> */}
        {/* <DatePickers /> */}
        {/* <TimePickers /> */}
        <MaterialUIPickers />
      </div>
    </>
  );
}
