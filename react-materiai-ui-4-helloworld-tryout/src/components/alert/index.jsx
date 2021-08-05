import React from 'react';

import ActionsInAccordionSummary from "src/components/accordion/ActionsInAccordionSummary/index.jsx"
import ControlledAccordions from "src/components/accordion/ControlledAccordions/index.jsx"
import CustomizedAccordions from "src/components/accordion/CustomizedAccordions/index.jsx"
import DetailedAccordion from "src/components/accordion/DetailedAccordion/index.jsx"
import SimpleAccordion from "src/components/accordion/SimpleAccordion/index.jsx"
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
        <ActionsInAccordionSummary />
<ControlledAccordions />
<CustomizedAccordions />
<DetailedAccordion />
<SimpleAccordion />
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
