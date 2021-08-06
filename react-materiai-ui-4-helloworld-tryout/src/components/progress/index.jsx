import React from 'react';

import CircularDeterminate from "src/components/progress/CircularDeterminate/index.jsx"
import CircularIndeterminate from "src/components/progress/CircularIndeterminate/index.jsx"
import CircularIntegration from "src/components/progress/CircularIntegration/index.jsx"
import CircularUnderLoad from "src/components/progress/CircularUnderLoad/index.jsx"
import CircularWithValueLabel from "src/components/progress/CircularWithValueLabel/index.jsx"
import CustomizedProgressBars from "src/components/progress/CustomizedProgressBars/index.jsx"
import DelayingAppearance from "src/components/progress/DelayingAppearance/index.jsx"
import LinearBuffer from "src/components/progress/LinearBuffer/index.jsx"
import LinearDeterminate from "src/components/progress/LinearDeterminate/index.jsx"
import LinearIndeterminate from "src/components/progress/LinearIndeterminate/index.jsx"
import LinearWithValueLabel from "src/components/progress/LinearWithValueLabel/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <CircularDeterminate />
<CircularIndeterminate />
<CircularIntegration />
<CircularUnderLoad />
<CircularWithValueLabel />
<CustomizedProgressBars />
<DelayingAppearance />
<LinearBuffer />
<LinearDeterminate />
<LinearIndeterminate />
<LinearWithValueLabel />
      </div>
    </>
  );
}
