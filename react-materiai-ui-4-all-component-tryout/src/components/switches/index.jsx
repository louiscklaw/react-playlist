// by index_file_template
import React from 'react';

import CustomizedSwitches from "src/components/switches/CustomizedSwitches/index.jsx"
import FormControlLabelPosition from "src/components/switches/FormControlLabelPosition/index.jsx"
import SwitchLabels from "src/components/switches/SwitchLabels/index.jsx"
import Switches from "src/components/switches/Switches/index.jsx"
import SwitchesGroup from "src/components/switches/SwitchesGroup/index.jsx"
import SwitchesSize from "src/components/switches/SwitchesSize/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <CustomizedSwitches />
<FormControlLabelPosition />
<SwitchLabels />
<Switches />
<SwitchesGroup />
<SwitchesSize />
      </div>
    </>
  );
}
