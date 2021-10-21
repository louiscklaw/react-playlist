// by index_file_template
import React from 'react';

import AlternateTimeline from "src/components/timeline/AlternateTimeline/index.jsx"
import BasicTimeline from "src/components/timeline/BasicTimeline/index.jsx"
import ColorsTimeline from "src/components/timeline/ColorsTimeline/index.jsx"
import CustomizedTimeline from "src/components/timeline/CustomizedTimeline/index.jsx"
import OppositeContentTimeline from "src/components/timeline/OppositeContentTimeline/index.jsx"
import OutlinedTimeline from "src/components/timeline/OutlinedTimeline/index.jsx"
import RightAlignedTimeline from "src/components/timeline/RightAlignedTimeline/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <AlternateTimeline />
<BasicTimeline />
<ColorsTimeline />
<CustomizedTimeline />
<OppositeContentTimeline />
<OutlinedTimeline />
<RightAlignedTimeline />
      </div>
    </>
  );
}
