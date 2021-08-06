// by index_file_template
import React from 'react';

import CustomizedSteppers from "src/components/steppers/CustomizedSteppers/index.jsx"
import DotsMobileStepper from "src/components/steppers/DotsMobileStepper/index.jsx"
import HorizontalLinearAlternativeLabelStepper from "src/components/steppers/HorizontalLinearAlternativeLabelStepper/index.jsx"
import HorizontalLinearStepper from "src/components/steppers/HorizontalLinearStepper/index.jsx"
import HorizontalNonLinearAlternativeLabelStepper from "src/components/steppers/HorizontalNonLinearAlternativeLabelStepper/index.jsx"
import HorizontalNonLinearStepper from "src/components/steppers/HorizontalNonLinearStepper/index.jsx"
import HorizontalNonLinearStepperWithError from "src/components/steppers/HorizontalNonLinearStepperWithError/index.jsx"
import ProgressMobileStepper from "src/components/steppers/ProgressMobileStepper/index.jsx"
import SwipeableTextMobileStepper from "src/components/steppers/SwipeableTextMobileStepper/index.jsx"
import TextMobileStepper from "src/components/steppers/TextMobileStepper/index.jsx"
import VerticalLinearStepper from "src/components/steppers/VerticalLinearStepper/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <CustomizedSteppers />
<DotsMobileStepper />
<HorizontalLinearAlternativeLabelStepper />
<HorizontalLinearStepper />
<HorizontalNonLinearAlternativeLabelStepper />
<HorizontalNonLinearStepper />
<HorizontalNonLinearStepperWithError />
<ProgressMobileStepper />
<SwipeableTextMobileStepper />
<TextMobileStepper />
<VerticalLinearStepper />
      </div>
    </>
  );
}
