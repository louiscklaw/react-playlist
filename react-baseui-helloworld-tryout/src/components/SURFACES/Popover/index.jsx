import * as React from 'react';
import { Popover } from 'baseui/popover';
import { Block } from 'baseui/block';

import { StatefulPopover } from 'baseui/popover';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';

export default () => {
  return (
    <Popover
      content={() => (
        <Block padding={'20px'}>
          Hello, there! 👋
          <Input placeholder="Focusable Element" />
        </Block>
      )}
      returnFocus
      autoFocus>
      <Button>Click me</Button>
    </Popover>
  );
};
