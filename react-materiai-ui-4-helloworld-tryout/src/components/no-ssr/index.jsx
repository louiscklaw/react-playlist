import React from 'react';

import FrameDeferring from "src/components/no-ssr/FrameDeferring/index.jsx"
import SimpleNoSsr from "src/components/no-ssr/SimpleNoSsr/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <FrameDeferring />
<SimpleNoSsr />
      </div>
    </>
  );
}
