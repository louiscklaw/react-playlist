import React from 'react';

import CustomizedDividers from "src/components/toggle-button/CustomizedDividers/index.jsx"
import StandaloneToggleButton from "src/components/toggle-button/StandaloneToggleButton/index.jsx"
import ToggleButtonNotEmpty from "src/components/toggle-button/ToggleButtonNotEmpty/index.jsx"
import ToggleButtonSizes from "src/components/toggle-button/ToggleButtonSizes/index.jsx"
import ToggleButtons from "src/components/toggle-button/ToggleButtons/index.jsx"
import ToggleButtonsMultiple from "src/components/toggle-button/ToggleButtonsMultiple/index.jsx"
import VerticalToggleButtons from "src/components/toggle-button/VerticalToggleButtons/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <CustomizedDividers />
<StandaloneToggleButton />
<ToggleButtonNotEmpty />
<ToggleButtonSizes />
<ToggleButtons />
<ToggleButtonsMultiple />
<VerticalToggleButtons />
      </div>
    </>
  );
}
