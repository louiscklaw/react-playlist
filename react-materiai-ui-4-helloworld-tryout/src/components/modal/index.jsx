import React from 'react';

import ServerModal from "src/components/modal/ServerModal/index.jsx"
import SimpleModal from "src/components/modal/SimpleModal/index.jsx"
import SpringModal from "src/components/modal/SpringModal/index.jsx"
import TransitionsModal from "src/components/modal/TransitionsModal/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ServerModal />
<SimpleModal />
<SpringModal />
<TransitionsModal />
      </div>
    </>
  );
}
