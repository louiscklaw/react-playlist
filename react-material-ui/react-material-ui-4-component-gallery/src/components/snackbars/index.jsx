// by index_file_template
import React from 'react';

import ConsecutiveSnackbars from "src/components/snackbars/ConsecutiveSnackbars/index.jsx"
import CustomizedSnackbars from "src/components/snackbars/CustomizedSnackbars/index.jsx"
import DirectionSnackbar from "src/components/snackbars/DirectionSnackbar/index.jsx"
import FabIntegrationSnackbar from "src/components/snackbars/FabIntegrationSnackbar/index.jsx"
import IntegrationNotistack from "src/components/snackbars/IntegrationNotistack/index.jsx"
import LongTextSnackbar from "src/components/snackbars/LongTextSnackbar/index.jsx"
import PositionedSnackbar from "src/components/snackbars/PositionedSnackbar/index.jsx"
import SimpleSnackbar from "src/components/snackbars/SimpleSnackbar/index.jsx"
import TransitionsSnackbar from "src/components/snackbars/TransitionsSnackbar/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ConsecutiveSnackbars />
<CustomizedSnackbars />
<DirectionSnackbar />
<FabIntegrationSnackbar />
<IntegrationNotistack />
<LongTextSnackbar />
<PositionedSnackbar />
<SimpleSnackbar />
<TransitionsSnackbar />
      </div>
    </>
  );
}
