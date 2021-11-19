import * as React from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';

export default function SimpleUncontrolledExample() {
  const panes = [0, 1, 2].map((key) => (
    <Pane key={key} defaultSize={{ width: '100%', height: 120 }}>
      00{key}
    </Pane>
  ));
  return (
    <div>
      <SortablePane
        direction="vertical"
        margin={20}
        defaultOrder={['0', '1', '2']}>
        {panes}
      </SortablePane>
    </div>
  );
}
