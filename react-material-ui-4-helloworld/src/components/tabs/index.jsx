// by index_file_template
import React from 'react';

import AccessibleTabs from "src/components/tabs/AccessibleTabs/index.jsx"
import CenteredTabs from "src/components/tabs/CenteredTabs/index.jsx"
import CustomizedTabs from "src/components/tabs/CustomizedTabs/index.jsx"
import DisabledTabs from "src/components/tabs/DisabledTabs/index.jsx"
import FullWidthTabs from "src/components/tabs/FullWidthTabs/index.jsx"
import IconLabelTabs from "src/components/tabs/IconLabelTabs/index.jsx"
import IconTabs from "src/components/tabs/IconTabs/index.jsx"
import LabTabs from "src/components/tabs/LabTabs/index.jsx"
import NavTabs from "src/components/tabs/NavTabs/index.jsx"
import ScrollableTabsButtonAuto from "src/components/tabs/ScrollableTabsButtonAuto/index.jsx"
import ScrollableTabsButtonForce from "src/components/tabs/ScrollableTabsButtonForce/index.jsx"
import ScrollableTabsButtonPrevent from "src/components/tabs/ScrollableTabsButtonPrevent/index.jsx"
import SimpleTabs from "src/components/tabs/SimpleTabs/index.jsx"
import TabsWrappedLabel from "src/components/tabs/TabsWrappedLabel/index.jsx"
import VerticalTabs from "src/components/tabs/VerticalTabs/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <AccessibleTabs />
<CenteredTabs />
<CustomizedTabs />
<DisabledTabs />
<FullWidthTabs />
<IconLabelTabs />
<IconTabs />
<LabTabs />
<NavTabs />
<ScrollableTabsButtonAuto />
<ScrollableTabsButtonForce />
<ScrollableTabsButtonPrevent />
<SimpleTabs />
<TabsWrappedLabel />
<VerticalTabs />
      </div>
    </>
  );
}
