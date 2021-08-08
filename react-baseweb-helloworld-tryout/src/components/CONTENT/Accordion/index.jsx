import * as React from 'react';
import { Accordion, Panel } from 'baseui/accordion';

export default () => {
  return (
    <Accordion onChange={({ expanded }) => console.log(expanded)}>
      <Panel title="Panel 1">Content 1</Panel>
      <Panel title="Panel 2">Content 2</Panel>
      <Panel title="Panel 3">Content 3</Panel>
    </Accordion>
  );
};
