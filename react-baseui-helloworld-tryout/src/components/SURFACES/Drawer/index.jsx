import * as React from 'react';
import { Drawer } from 'baseui/drawer';

export default () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Drawer isOpen={isOpen} autoFocus onClose={() => setIsOpen(false)}>
      <div>drawer content</div>
    </Drawer>
  );
};
