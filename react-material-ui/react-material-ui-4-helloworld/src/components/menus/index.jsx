// by index_file_template
import React from 'react';

import ContextMenu from "src/components/menus/ContextMenu/index.jsx"
import CustomizedMenus from "src/components/menus/CustomizedMenus/index.jsx"
import FadeMenu from "src/components/menus/FadeMenu/index.jsx"
import LongMenu from "src/components/menus/LongMenu/index.jsx"
import MenuListComposition from "src/components/menus/MenuListComposition/index.jsx"
import MenuPopupState from "src/components/menus/MenuPopupState/index.jsx"
import SimpleListMenu from "src/components/menus/SimpleListMenu/index.jsx"
import SimpleMenu from "src/components/menus/SimpleMenu/index.jsx"
import TypographyMenu from "src/components/menus/TypographyMenu/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ContextMenu />
<CustomizedMenus />
<FadeMenu />
<LongMenu />
<MenuListComposition />
<MenuPopupState />
<SimpleListMenu />
<SimpleMenu />
<TypographyMenu />
      </div>
    </>
  );
}
