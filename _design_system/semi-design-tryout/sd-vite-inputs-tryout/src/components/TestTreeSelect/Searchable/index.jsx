import React from 'react';
import { TreeSelect, Switch } from '@douyinfe/semi-ui';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      showFilteredOnly: false,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(showFilteredOnly) {
    this.setState({ showFilteredOnly });
  }
  render() {
    const treeData = [
      {
        label: 'Asia',
        value: 'Asia',
        key: '0',
        children: [
          {
            label: 'China',
            value: 'China',
            key: '0-0',
            children: [
              {
                label: 'Beijing',
                value: 'Beijing',
                key: '0-0-0',
              },
              {
                label: 'Shanghai',
                value: 'Shanghai',
                key: '0-0-1',
              },
            ],
          },
          {
            label: 'Japan',
            value: 'Japan',
            key: '0-1',
            children: [
              {
                label: 'Osaka',
                value: 'Osaka',
                key: '0-1-0',
              },
            ],
          },
        ],
      },
      {
        label: 'North America',
        value: 'North America',
        key: '1',
        children: [
          {
            label: 'United States',
            value: 'United States',
            key: '1-0',
          },
          {
            label: 'Canada',
            value: 'Canada',
            key: '1-1',
          },
        ],
      },
    ];
    const { showFilteredOnly } = this.state;
    return (
      <>
        <span>showFilteredOnly</span>
        <Switch
          checked={showFilteredOnly}
          onChange={this.onChange}
          size="small"
        />
        <br />
        <br />
        <TreeSelect
          style={{ width: 300 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          filterTreeNode
          showFilteredOnly={showFilteredOnly}
          placeholder="单选可搜索的"
        />
        <br />
        <br />
        <TreeSelect
          style={{ width: 300 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          multiple
          filterTreeNode
          maxTagCount={2}
          showFilteredOnly={showFilteredOnly}
          placeholder="多选可搜索的"
          searchPlaceholder="请输入关键字开始搜索"
        />
        <br />
        <br />
        <TreeSelect
          style={{ width: 300 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          multiple
          filterTreeNode
          maxTagCount={2}
          showFilteredOnly={showFilteredOnly}
          placeholder="搜索框autofocus"
          searchPlaceholder="autofocus"
          searchAutoFocus
        />
      </>
    );
  }
}

export default Demo;
