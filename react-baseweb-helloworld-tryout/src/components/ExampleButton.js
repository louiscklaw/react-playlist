import * as React from 'react';
import { Button } from 'baseui/button';

import { useStyletron } from 'baseui';

export default () => {
  const [css, theme] = useStyletron();

  // return (
  //   <div
  //     className={css({
  //       color: theme.colors.accent,
  //     })}
  //   >
  //     Hello
  //   </div>
  // );

  return <Button>保存する</Button>;
};
