import React from 'react';

import BasicButtonGroup from "src/components/button-group/BasicButtonGroup/index.jsx"
import DisableElevation from "src/components/button-group/DisableElevation/index.jsx"
import GroupOrientation from "src/components/button-group/GroupOrientation/index.jsx"
import GroupSizesColors from "src/components/button-group/GroupSizesColors/index.jsx"
import SplitButton from "src/components/button-group/SplitButton/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <BasicButtonGroup />
<DisableElevation />
<GroupOrientation />
<GroupSizesColors />
<SplitButton />
      </div>
    </>
  );
}
