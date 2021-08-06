// by index_file_template
import React from 'react';

import ActiveLastBreadcrumb from "src/components/breadcrumbs/ActiveLastBreadcrumb/index.jsx"
import CollapsedBreadcrumbs from "src/components/breadcrumbs/CollapsedBreadcrumbs/index.jsx"
import CustomSeparator from "src/components/breadcrumbs/CustomSeparator/index.jsx"
import CustomizedBreadcrumbs from "src/components/breadcrumbs/CustomizedBreadcrumbs/index.jsx"
import IconBreadcrumbs from "src/components/breadcrumbs/IconBreadcrumbs/index.jsx"
import RouterBreadcrumbs from "src/components/breadcrumbs/RouterBreadcrumbs/index.jsx"
import SimpleBreadcrumbs from "src/components/breadcrumbs/SimpleBreadcrumbs/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ActiveLastBreadcrumb />
<CollapsedBreadcrumbs />
<CustomSeparator />
<CustomizedBreadcrumbs />
<IconBreadcrumbs />
<RouterBreadcrumbs />
<SimpleBreadcrumbs />
      </div>
    </>
  );
}
