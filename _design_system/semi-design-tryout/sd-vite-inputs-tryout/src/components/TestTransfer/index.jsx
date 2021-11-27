import React from 'react';

import { Transfer, Checkbox, Avatar } from '@douyinfe/semi-ui';
import { IconClose } from '@douyinfe/semi-icons';

import './style.scss';

export default () => {
  return (
    <>
      <TestCustomRender />
      <TestGroupList />
      <TestBasic />
    </>
  );
};

const TestCustomRender = () => {
  const renderSourceItem = (item) => {
    return (
      <div className="components-transfer-demo-source-item" key={item.label}>
        <Checkbox
          onChange={() => {
            item.onChange();
          }}
          key={item.label}
          checked={item.checked}
          style={{ height: 52 }}>
          <Avatar color={item.color} size="small">
            {item.abbr}
          </Avatar>
          <div className="info">
            <div className="name">{item.label}</div>
            <div className="email">{item.value}</div>
          </div>
        </Checkbox>
      </div>
    );
  };

  const renderSelectedItem = (item) => {
    return (
      <div className="components-transfer-demo-selected-item" key={item.label}>
        <Avatar color={item.color} size="small">
          {item.abbr}
        </Avatar>
        <div className="info">
          <div className="name">{item.label}</div>
          <div className="email">{item.value}</div>
        </div>
        <IconClose onClick={item.onRemove} />
      </div>
    );
  };

  const customFilter = (sugInput, item) => {
    return item.value.includes(sugInput) || item.label.includes(sugInput);
  };

  const data = [
    {
      label: '夏可漫',
      value: 'xiakeman@example.com',
      abbr: '夏',
      color: 'amber',
      area: 'US',
      key: 1,
    },
    {
      label: '申悦',
      value: 'shenyue@example.com',
      abbr: '申',
      color: 'indigo',
      area: 'UK',
      key: 2,
    },
    {
      label: '文嘉茂',
      value: 'wenjiamao@example.com',
      abbr: '文',
      color: 'cyan',
      area: 'HK',
      key: 3,
    },
    {
      label: '曲晨一',
      value: 'quchenyi@example.com',
      abbr: '曲',
      color: 'blue',
      area: 'India',
      key: 4,
    },
    {
      label: '曲晨二',
      value: 'quchener@example.com',
      abbr: '二',
      color: 'blue',
      area: 'India',
      key: 5,
    },
    {
      label: '曲晨三',
      value: 'quchensan@example.com',
      abbr: '三',
      color: 'blue',
      area: 'India',
      key: 6,
    },
  ];

  return (
    <Transfer
      style={{ width: 568 }}
      dataSource={data}
      filter={customFilter}
      defaultValue={['xiakeman@example.com', 'shenyue@example.com']}
      renderSelectedItem={renderSelectedItem}
      renderSourceItem={renderSourceItem}
      inputProps={{ placeholder: '搜索姓名或邮箱' }}
      onChange={(values, items) => console.log(values, items)}
    />
  );
};

const TestBasic = () => {
  const data = Array.from({ length: 100 }, (v, i) => {
    return {
      label: `选项名称 ${i}`,
      value: i,
      disabled: false,
      key: i,
    };
  });
  return (
    <>
      <div>TestBasic</div>
      <Transfer
        style={{ width: 568, height: 416 }}
        dataSource={data}
        onChange={(values, items) => console.log(values, items)}
      />
    </>
  );
};

const TestGroupList = () => {
  const dataWithGroup = [
    {
      title: '类别A',
      children: [
        { label: 'A-1', value: 1, disabled: false, key: 1 },
        { label: 'A-2', value: 2, disabled: false, key: 2 },
        { label: 'A-3', value: 3, disabled: false, key: 3 },
      ],
    },
    {
      title: '类别B',
      children: [
        { label: 'B-1', value: 4, disabled: false, key: 4 },
        { label: 'B-2', value: 5, disabled: false, key: 5 },
        { label: 'B-3（disabled）', value: 6, disabled: true, key: 6 },
      ],
    },
    {
      title: '类别C',
      children: [
        { label: 'C-1', value: 7, disabled: false, key: 7 },
        { label: 'C-2', value: 8, disabled: false, key: 8 },
        { label: 'C-3', value: 9, disabled: false, key: 9 },
        { label: 'C-4', value: 10, disabled: false, key: 10 },
        { label: 'C-5', value: 11, disabled: false, key: 11 },
        { label: 'C-6', value: 12, disabled: false, key: 12 },
        { label: 'C-7', value: 13, disabled: false, key: 13 },
      ],
    },
  ];
  return (
    <>
      <div>TestGroupList</div>
      <Transfer
        type="groupList"
        defaultValue={[6]}
        style={{ width: 568 }}
        dataSource={dataWithGroup}
        onChange={(values, items) => console.log(values, items)}
      />
    </>
  );
};
