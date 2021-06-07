import * as React from 'react';
import { Button } from 'baseui/button';

import { useStyletron } from 'baseui';

export default () => {
  const [css] = useStyletron();

  return (
    <>
      <Button className={css({ backgroundColor: '#27ae60' })}>OK</Button>
    </>
  );
};
