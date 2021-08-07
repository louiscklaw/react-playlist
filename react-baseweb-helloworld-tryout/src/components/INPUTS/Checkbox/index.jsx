import * as React from 'react';
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox';

export default () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      labelPlacement={LABEL_PLACEMENT.right}>
      Sign up for the newsletter
    </Checkbox>
  );
};
