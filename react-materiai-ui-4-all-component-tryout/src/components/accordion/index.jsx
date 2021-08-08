// by index_file_template
import React from 'react';

import ActionsInAccordionSummary from "src/components/accordion/ActionsInAccordionSummary/index.jsx"
import ControlledAccordions from "src/components/accordion/ControlledAccordions/index.jsx"
import CustomizedAccordions from "src/components/accordion/CustomizedAccordions/index.jsx"
import DetailedAccordion from "src/components/accordion/DetailedAccordion/index.jsx"
import SimpleAccordion from "src/components/accordion/SimpleAccordion/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ActionsInAccordionSummary />
<ControlledAccordions />
<CustomizedAccordions />
<DetailedAccordion />
<SimpleAccordion />
      </div>
    </>
  );
}
