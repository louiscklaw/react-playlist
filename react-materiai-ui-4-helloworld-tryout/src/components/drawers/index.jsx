// by index_file_template
import React from 'react';

import ClippedDrawer from "src/components/drawers/ClippedDrawer/index.jsx"
import MiniDrawer from "src/components/drawers/MiniDrawer/index.jsx"
import PermanentDrawerLeft from "src/components/drawers/PermanentDrawerLeft/index.jsx"
import PermanentDrawerRight from "src/components/drawers/PermanentDrawerRight/index.jsx"
import PersistentDrawerLeft from "src/components/drawers/PersistentDrawerLeft/index.jsx"
import PersistentDrawerRight from "src/components/drawers/PersistentDrawerRight/index.jsx"
import ResponsiveDrawer from "src/components/drawers/ResponsiveDrawer/index.jsx"
import SwipeableTemporaryDrawer from "src/components/drawers/SwipeableTemporaryDrawer/index.jsx"
import TemporaryDrawer from "src/components/drawers/TemporaryDrawer/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ClippedDrawer />
<MiniDrawer />
<PermanentDrawerLeft />
<PermanentDrawerRight />
<PersistentDrawerLeft />
<PersistentDrawerRight />
<ResponsiveDrawer />
<SwipeableTemporaryDrawer />
<TemporaryDrawer />
      </div>
    </>
  );
}
