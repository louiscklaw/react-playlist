import React from 'react';

import SimpleCollapse from "src/components/transitions/SimpleCollapse/index.jsx"
import SimpleFade from "src/components/transitions/SimpleFade/index.jsx"
import SimpleGrow from "src/components/transitions/SimpleGrow/index.jsx"
import SimpleSlide from "src/components/transitions/SimpleSlide/index.jsx"
import SimpleZoom from "src/components/transitions/SimpleZoom/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <SimpleCollapse />
<SimpleFade />
<SimpleGrow />
<SimpleSlide />
<SimpleZoom />
      </div>
    </>
  );
}
