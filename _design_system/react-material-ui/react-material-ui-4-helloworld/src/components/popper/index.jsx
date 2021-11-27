// by index_file_template
import React from 'react';

import FakedReferencePopper from "src/components/popper/FakedReferencePopper/index.jsx"
import PopperPopupState from "src/components/popper/PopperPopupState/index.jsx"
import PositionedPopper from "src/components/popper/PositionedPopper/index.jsx"
import ScrollPlayground from "src/components/popper/ScrollPlayground/index.jsx"
import SimplePopper from "src/components/popper/SimplePopper/index.jsx"
import SpringPopper from "src/components/popper/SpringPopper/index.jsx"
import TransitionsPopper from "src/components/popper/TransitionsPopper/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <FakedReferencePopper />
<PopperPopupState />
<PositionedPopper />
<ScrollPlayground />
<SimplePopper />
<SpringPopper />
<TransitionsPopper />
      </div>
    </>
  );
}
