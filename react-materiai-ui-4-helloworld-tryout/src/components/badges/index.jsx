import React from 'react';

import BadgeAlignment from "src/components/badges/BadgeAlignment/index.jsx"
import BadgeMax from "src/components/badges/BadgeMax/index.jsx"
import BadgeOverlap from "src/components/badges/BadgeOverlap/index.jsx"
import BadgeVisibility from "src/components/badges/BadgeVisibility/index.jsx"
import CustomizedBadges from "src/components/badges/CustomizedBadges/index.jsx"
import DotBadge from "src/components/badges/DotBadge/index.jsx"
import ShowZeroBadge from "src/components/badges/ShowZeroBadge/index.jsx"
import SimpleBadge from "src/components/badges/SimpleBadge/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <BadgeAlignment />
<BadgeMax />
<BadgeOverlap />
<BadgeVisibility />
<CustomizedBadges />
<DotBadge />
<ShowZeroBadge />
<SimpleBadge />
      </div>
    </>
  );
}
