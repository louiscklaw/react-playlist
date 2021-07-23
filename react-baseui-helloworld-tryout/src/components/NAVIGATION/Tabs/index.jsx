import * as React from 'react';
import { Tabs, Tab } from 'baseui/tabs';

export default () => {
  const [activeKey, setActiveKey] = React.useState('0');
  return (
    <Tabs
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
      activeKey={activeKey}>
      <Tab title="Tab Link 1">Content 1</Tab>
      <Tab title="Tab Link 2">Content 2</Tab>
      <Tab title="Tab Link 3">Content 3</Tab>
    </Tabs>
  );
};
