import * as React from 'react';
import { StatefulPopover } from 'baseui/popover';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';

// import { Popover } from 'baseui';

export default () => {
  return (
    <StatefulPopover
      content={() => (
        <Block padding={'20px'}>
          Hello, there! 👋
          <Input placeholder="Focusable Element" />
        </Block>
      )}
      returnFocus
      autoFocus
    >
      <Button>Click me</Button>
    </StatefulPopover>
  );
};
