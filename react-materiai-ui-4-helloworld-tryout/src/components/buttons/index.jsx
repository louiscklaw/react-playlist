// by index_file_template
import React from 'react';

import ButtonBase from "src/components/buttons/ButtonBase/index.jsx"
import ButtonSizes from "src/components/buttons/ButtonSizes/index.jsx"
import ContainedButtons from "src/components/buttons/ContainedButtons/index.jsx"
import CustomizedButtons from "src/components/buttons/CustomizedButtons/index.jsx"
import DisableElevation from "src/components/buttons/DisableElevation/index.jsx"
import IconButtons from "src/components/buttons/IconButtons/index.jsx"
import IconLabelButtons from "src/components/buttons/IconLabelButtons/index.jsx"
import OutlinedButtons from "src/components/buttons/OutlinedButtons/index.jsx"
import TextButtons from "src/components/buttons/TextButtons/index.jsx"
import UploadButtons from "src/components/buttons/UploadButtons/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ButtonBase />
<ButtonSizes />
<ContainedButtons />
<CustomizedButtons />
<DisableElevation />
<IconButtons />
<IconLabelButtons />
<OutlinedButtons />
<TextButtons />
<UploadButtons />
      </div>
    </>
  );
}
