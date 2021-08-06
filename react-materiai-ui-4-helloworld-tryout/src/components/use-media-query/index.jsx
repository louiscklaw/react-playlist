// by index_file_template
import React from 'react';

import JavaScriptMedia from "src/components/use-media-query/JavaScriptMedia/index.jsx"
import ServerSide from "src/components/use-media-query/ServerSide/index.jsx"
import SimpleMediaQuery from "src/components/use-media-query/SimpleMediaQuery/index.jsx"
import ThemeHelper from "src/components/use-media-query/ThemeHelper/index.jsx"
import UseWidth from "src/components/use-media-query/UseWidth/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <JavaScriptMedia />
<ServerSide />
<SimpleMediaQuery />
<ThemeHelper />
<UseWidth />
      </div>
    </>
  );
}
