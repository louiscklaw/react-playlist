import React from 'react';
import { Transfer } from '@douyinfe/semi-ui';

export default () => {
  const data = Array.from({ length: 30 }, (v, i) => {
    return {
      label: `选项名称 ${i}`,
      value: i,
      disabled: false,
      key: i,
    };
  });
  return (
    <Transfer
      style={{ width: 568, height: 416 }}
      dataSource={data}
      defaultValue={[2, 4]}
      draggable
      onChange={(values, items) => console.log(values, items)}
    />
  );
};
