// by index_file_template
import React from 'react';

import AnchorPlayground from "src/components/popover/AnchorPlayground/index.jsx"
import MouseOverPopover from "src/components/popover/MouseOverPopover/index.jsx"
import PopoverPopupState from "src/components/popover/PopoverPopupState/index.jsx"
import SimplePopover from "src/components/popover/SimplePopover/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <AnchorPlayground />
<MouseOverPopover />
<PopoverPopupState />
<SimplePopover />
      </div>
    </>
  );
}
