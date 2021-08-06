import React from 'react';

import Chips from "src/components/chips/Chips/index.jsx"
import ChipsArray from "src/components/chips/ChipsArray/index.jsx"
import ChipsPlayground from "src/components/chips/ChipsPlayground/index.jsx"
import OutlinedChips from "src/components/chips/OutlinedChips/index.jsx"
import SmallChips from "src/components/chips/SmallChips/index.jsx"
import SmallOutlinedChips from "src/components/chips/SmallOutlinedChips/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <Chips />
<ChipsArray />
<ChipsPlayground />
<OutlinedChips />
<SmallChips />
<SmallOutlinedChips />
      </div>
    </>
  );
}
