// by index_file_template
import React from 'react';

import AlertDialog from "src/components/dialogs/AlertDialog/index.jsx"
import AlertDialogSlide from "src/components/dialogs/AlertDialogSlide/index.jsx"
import ConfirmationDialog from "src/components/dialogs/ConfirmationDialog/index.jsx"
import CustomizedDialogs from "src/components/dialogs/CustomizedDialogs/index.jsx"
import DraggableDialog from "src/components/dialogs/DraggableDialog/index.jsx"
import FormDialog from "src/components/dialogs/FormDialog/index.jsx"
import FullScreenDialog from "src/components/dialogs/FullScreenDialog/index.jsx"
import MaxWidthDialog from "src/components/dialogs/MaxWidthDialog/index.jsx"
import ResponsiveDialog from "src/components/dialogs/ResponsiveDialog/index.jsx"
import ScrollDialog from "src/components/dialogs/ScrollDialog/index.jsx"
import SimpleDialog from "src/components/dialogs/SimpleDialog/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <AlertDialog />
<AlertDialogSlide />
<ConfirmationDialog />
<CustomizedDialogs />
<DraggableDialog />
<FormDialog />
<FullScreenDialog />
<MaxWidthDialog />
<ResponsiveDialog />
<ScrollDialog />
<SimpleDialog />
      </div>
    </>
  );
}
