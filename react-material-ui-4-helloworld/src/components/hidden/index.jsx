// by index_file_template
import React from 'react';

import BreakpointDown from "src/components/hidden/BreakpointDown/index.jsx"
import BreakpointOnly from "src/components/hidden/BreakpointOnly/index.jsx"
import BreakpointUp from "src/components/hidden/BreakpointUp/index.jsx"
import GridIntegration from "src/components/hidden/GridIntegration/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <BreakpointDown />
<BreakpointOnly />
<BreakpointUp />
<GridIntegration />
      </div>
    </>
  );
}
