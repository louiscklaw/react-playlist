import React from 'react';
import { TreeSelect } from '@douyinfe/semi-ui';

export default () => {
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
            {
              label: 'Chengdu',
              value: 'Chengdu',
              key: '0-0-2',
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
  return (
    <div>
      <TreeSelect
        style={{ width: 300 }}
        multiple
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="请选择"
      />
      <br />
      <br />
      <TreeSelect
        style={{ width: 300 }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        multiple
        maxTagCount={2}
        placeholder="当选中标签超过两个将折叠"
      />
      <br />
      <br />
      <TreeSelect
        style={{ width: 300 }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        multiple
        leafOnly
        placeholder="只渲染叶子节点"
      />
    </div>
  );
};
