// by index_file_template
import React from 'react';

import AlignItemsList from "src/components/lists/AlignItemsList/index.jsx"
import CheckboxList from "src/components/lists/CheckboxList/index.jsx"
import CheckboxListSecondary from "src/components/lists/CheckboxListSecondary/index.jsx"
import FolderList from "src/components/lists/FolderList/index.jsx"
import InsetList from "src/components/lists/InsetList/index.jsx"
import InteractiveList from "src/components/lists/InteractiveList/index.jsx"
import NestedList from "src/components/lists/NestedList/index.jsx"
import PinnedSubheaderList from "src/components/lists/PinnedSubheaderList/index.jsx"
import SelectedListItem from "src/components/lists/SelectedListItem/index.jsx"
import SimpleList from "src/components/lists/SimpleList/index.jsx"
import SwitchListSecondary from "src/components/lists/SwitchListSecondary/index.jsx"
import VirtualizedList from "src/components/lists/VirtualizedList/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <AlignItemsList />
<CheckboxList />
<CheckboxListSecondary />
<FolderList />
<InsetList />
<InteractiveList />
<NestedList />
<PinnedSubheaderList />
<SelectedListItem />
<SimpleList />
<SwitchListSecondary />
<VirtualizedList />
      </div>
    </>
  );
}
