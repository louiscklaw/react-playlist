// by index_file_template
import React from 'react';

import ControlledOpenSelect from "src/components/selects/ControlledOpenSelect/index.jsx"
import CustomizedSelects from "src/components/selects/CustomizedSelects/index.jsx"
import DialogSelect from "src/components/selects/DialogSelect/index.jsx"
import GroupedSelect from "src/components/selects/GroupedSelect/index.jsx"
import MultipleSelect from "src/components/selects/MultipleSelect/index.jsx"
import NativeSelects from "src/components/selects/NativeSelects/index.jsx"
import SimpleSelect from "src/components/selects/SimpleSelect/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ControlledOpenSelect />
<CustomizedSelects />
<DialogSelect />
<GroupedSelect />
<MultipleSelect />
<NativeSelects />
<SimpleSelect />
      </div>
    </>
  );
}
