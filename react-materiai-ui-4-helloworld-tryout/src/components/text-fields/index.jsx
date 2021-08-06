// by index_file_template
import React from 'react';

import BasicTextFields from "src/components/text-fields/BasicTextFields/index.jsx"
import ColorTextFields from "src/components/text-fields/ColorTextFields/index.jsx"
import ComposedTextField from "src/components/text-fields/ComposedTextField/index.jsx"
import CustomizedInputBase from "src/components/text-fields/CustomizedInputBase/index.jsx"
import CustomizedInputs from "src/components/text-fields/CustomizedInputs/index.jsx"
import FormPropsTextFields from "src/components/text-fields/FormPropsTextFields/index.jsx"
import FormattedInputs from "src/components/text-fields/FormattedInputs/index.jsx"
import InputAdornments from "src/components/text-fields/InputAdornments/index.jsx"
import InputWithIcon from "src/components/text-fields/InputWithIcon/index.jsx"
import Inputs from "src/components/text-fields/Inputs/index.jsx"
import LayoutTextFields from "src/components/text-fields/LayoutTextFields/index.jsx"
import MultilineTextFields from "src/components/text-fields/MultilineTextFields/index.jsx"
import SelectTextFields from "src/components/text-fields/SelectTextFields/index.jsx"
import StateTextFields from "src/components/text-fields/StateTextFields/index.jsx"
import TextFieldSizes from "src/components/text-fields/TextFieldSizes/index.jsx"
import ValidationTextFields from "src/components/text-fields/ValidationTextFields/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <BasicTextFields />
<ColorTextFields />
<ComposedTextField />
<CustomizedInputBase />
<CustomizedInputs />
<FormPropsTextFields />
<FormattedInputs />
<InputAdornments />
<InputWithIcon />
<Inputs />
<LayoutTextFields />
<MultilineTextFields />
<SelectTextFields />
<StateTextFields />
<TextFieldSizes />
<ValidationTextFields />
      </div>
    </>
  );
}
