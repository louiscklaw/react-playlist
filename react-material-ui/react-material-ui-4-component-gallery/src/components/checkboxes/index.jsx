// by index_file_template
import React from 'react';

import CheckboxLabels from "src/components/checkboxes/CheckboxLabels/index.jsx"
import Checkboxes from "src/components/checkboxes/Checkboxes/index.jsx"
import CheckboxesGroup from "src/components/checkboxes/CheckboxesGroup/index.jsx"
import CustomizedCheckbox from "src/components/checkboxes/CustomizedCheckbox/index.jsx"
import FormControlLabelPosition from "src/components/checkboxes/FormControlLabelPosition/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <CheckboxLabels />
<Checkboxes />
<CheckboxesGroup />
<CustomizedCheckbox />
<FormControlLabelPosition />
      </div>
    </>
  );
}
