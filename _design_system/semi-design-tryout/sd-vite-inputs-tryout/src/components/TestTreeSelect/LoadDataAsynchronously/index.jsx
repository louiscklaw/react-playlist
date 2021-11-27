import React, { useState } from 'react';
import { TreeSelect } from '@douyinfe/semi-ui';

export default () => {
  const initialData = [
    { label: 'Expand to load', value: '0', key: '0' },
    { label: 'Expand to load', value: '1', key: '1' },
    { label: 'Leaf Node', value: '2', key: '2', isLeaf: true },
  ];
  const [treeData, setTreeData] = useState(initialData);

  function updateTreeData(list, key, children) {
    return list.map((node) => {
      if (node.key === key) {
        return { ...node, children };
      }
      if (node.children) {
        return {
          ...node,
          children: updateTreeData(node.children, key, children),
        };
      }
      return node;
    });
  }

  function onLoadData({ key, children }) {
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            { label: 'Child Node', key: `${key}-0` },
            { label: 'Child Node', key: `${key}-1` },
          ])
        );
        resolve();
      }, 1000);
    });
  }
  return (
    <TreeSelect
      loadData={onLoadData}
      treeData={treeData}
      style={{ width: 300 }}
      placeholder="Please select"
    />
  );
};
