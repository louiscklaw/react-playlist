// by index_file_template
import React from 'react';

import AutoGrid from "src/components/grid/AutoGrid/index.jsx"
import AutoGridNoWrap from "src/components/grid/AutoGridNoWrap/index.jsx"
import CSSGrid from "src/components/grid/CSSGrid/index.jsx"
import CenteredGrid from "src/components/grid/CenteredGrid/index.jsx"
import ComplexGrid from "src/components/grid/ComplexGrid/index.jsx"
import FullWidthGrid from "src/components/grid/FullWidthGrid/index.jsx"
import InteractiveGrid from "src/components/grid/InteractiveGrid/index.jsx"
import NestedGrid from "src/components/grid/NestedGrid/index.jsx"
import SpacingGrid from "src/components/grid/SpacingGrid/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <AutoGrid />
<AutoGridNoWrap />
<CSSGrid />
<CenteredGrid />
<ComplexGrid />
<FullWidthGrid />
<InteractiveGrid />
<NestedGrid />
<SpacingGrid />
      </div>
    </>
  );
}
