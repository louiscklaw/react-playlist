// by index_file_template
import React from 'react';

import Animations from "src/components/skeleton/Animations/index.jsx"
import Facebook from "src/components/skeleton/Facebook/index.jsx"
import SkeletonChildren from "src/components/skeleton/SkeletonChildren/index.jsx"
import SkeletonTypography from "src/components/skeleton/SkeletonTypography/index.jsx"
import Variants from "src/components/skeleton/Variants/index.jsx"
import YouTube from "src/components/skeleton/YouTube/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <Animations />
<Facebook />
<SkeletonChildren />
<SkeletonTypography />
<Variants />
<YouTube />
      </div>
    </>
  );
}
