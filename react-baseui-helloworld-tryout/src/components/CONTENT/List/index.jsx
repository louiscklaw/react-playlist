import * as React from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Check } from 'baseui/icon';

export default () => {
  return (
    <ListItem
      artwork={(props) => <Check {...props} />}
      endEnhancer={() => <ListItemLabel>End Enhancer</ListItemLabel>}>
      <ListItemLabel>Label</ListItemLabel>
    </ListItem>
  );
};
