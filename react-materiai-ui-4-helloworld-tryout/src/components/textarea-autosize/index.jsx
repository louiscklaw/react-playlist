import React from 'react';

import EmptyTextarea from "src/components/textarea-autosize/EmptyTextarea/index.jsx"
import MaxHeightTextarea from "src/components/textarea-autosize/MaxHeightTextarea/index.jsx"
import MinHeightTextarea from "src/components/textarea-autosize/MinHeightTextarea/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <EmptyTextarea />
<MaxHeightTextarea />
<MinHeightTextarea />
      </div>
    </>
  );
}
