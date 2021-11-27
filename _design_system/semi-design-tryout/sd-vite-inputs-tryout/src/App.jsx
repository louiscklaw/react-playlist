import React from 'react';

import InputTests from './components/InputTests';
import TestRatings from './components/TestRatings';
import TestSelect from './components/TestSelect';
import TestLayuout from './components/TestLayuout';
import TestSwitches from './components/TestSwitches';
import TestTagInput from './components/TestTagInput';
import TestTimePicker from './components/TestTimePicker';
import TestTransfer from './components/TestTransfer';
import TestTransferDraggable from './components/TestTransfer/TestTransferDraggable';
import TestTransferDraggableCustomRender from './components/TestTransfer/TestTransferDraggableCustomRender';
import TestTransferFullCustomRender from './components/TestTransfer/TestTransferFullCustomRender';
import TestTreeSelect from './components/TestTreeSelect';
import TestTreeSelectMultiple from './components/TestTreeSelect/Multiple';
import TestTreeSelectSearchable from './components/TestTreeSelect/Searchable';
import TestTreeSelectSearchPosition from './components/TestTreeSelect/SearchPosition';
import TestTreeSelectLoadDataAsynchronously from './components/TestTreeSelect/LoadDataAsynchronously';

import TestUpload from './components/TestUpload';

export default () => {
  return (
    <>
      <TestUpload />

      {/* <TestTreeSelectLoadDataAsynchronously /> */}
      {/* <TestTreeSelectSearchPosition /> */}
      {/* <TestTreeSelectSearchable /> */}
      {/* <TestTreeSelectMultiple /> */}
      {/* <TestTreeSelect /> */}
      {/* <TestTransferFullCustomRender /> */}
      {/* <TestTransferDraggableCustomRender /> */}
      {/* <TestTransferDraggable /> */}
      {/* <TestTransfer /> */}
      {/* <TestTimePicker /> */}
      {/* <TestTagInput /> */}
      {/* <TestSwitches /> */}
      {/* <TestLayuout /> */}
      {/* <TestSelect /> */}
      {/* <TestRatings /> */}
      {/* <InputTests /> */}
    </>
  );
};
