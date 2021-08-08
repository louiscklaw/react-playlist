// by index_file_template
import React from 'react';

import ControlledTreeView from "src/components/tree-view/ControlledTreeView/index.jsx"
import CustomizedTreeView from "src/components/tree-view/CustomizedTreeView/index.jsx"
import FileSystemNavigator from "src/components/tree-view/FileSystemNavigator/index.jsx"
import GmailTreeView from "src/components/tree-view/GmailTreeView/index.jsx"
import MultiSelectTreeView from "src/components/tree-view/MultiSelectTreeView/index.jsx"
import RecursiveTreeView from "src/components/tree-view/RecursiveTreeView/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ControlledTreeView />
<CustomizedTreeView />
<FileSystemNavigator />
<GmailTreeView />
<MultiSelectTreeView />
<RecursiveTreeView />
      </div>
    </>
  );
}
