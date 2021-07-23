import * as React from 'react';
import { StatefulTooltip } from 'baseui/tooltip';
import { Input } from 'baseui/input';
import { Block } from 'baseui/block';

export default () => {
  return (
    <StatefulTooltip
      content={() => (
        <Block padding={'20px'}>
          Hello, there! 👋
          <Input placeholder="Focusable Element" />
        </Block>
      )}
      returnFocus
      autoFocus>
      Hover me
    </StatefulTooltip>
  );
};
