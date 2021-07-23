import * as React from 'react';
import { Breadcrumbs } from 'baseui/breadcrumbs';
import { StyledLink } from 'baseui/link';

export default function Demo() {
  return (
    <Breadcrumbs>
      <StyledLink href="#parent">Parent Page</StyledLink>
      <StyledLink href="#sub">Sub-Parent Page</StyledLink>
      <span>Current Page</span>
    </Breadcrumbs>
  );
}
