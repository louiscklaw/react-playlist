import * as React from 'react';
import { StatefulMenu } from 'baseui/menu';

export default () => {
  return (
    <StatefulMenu
      items={[
        { label: 'Item One' },
        { label: 'Item Two' },
        { label: 'Item Three' },
        { label: 'Item Four' },
      ]}
    />
  );
};
