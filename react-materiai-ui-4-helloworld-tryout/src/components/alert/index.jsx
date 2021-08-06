// by index_file_template
import React from 'react';

import ActionAlerts from "src/components/alert/ActionAlerts/index.jsx"
import ColorAlerts from "src/components/alert/ColorAlerts/index.jsx"
import DescriptionAlerts from "src/components/alert/DescriptionAlerts/index.jsx"
import FilledAlerts from "src/components/alert/FilledAlerts/index.jsx"
import IconAlerts from "src/components/alert/IconAlerts/index.jsx"
import OutlinedAlerts from "src/components/alert/OutlinedAlerts/index.jsx"
import SimpleAlerts from "src/components/alert/SimpleAlerts/index.jsx"
import TransitionAlerts from "src/components/alert/TransitionAlerts/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ActionAlerts />
<ColorAlerts />
<DescriptionAlerts />
<FilledAlerts />
<IconAlerts />
<OutlinedAlerts />
<SimpleAlerts />
<TransitionAlerts />
      </div>
    </>
  );
}
