import * as React from 'react';
import { TreeView, toggleIsExpanded } from 'baseui/tree-view';

export default () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      label: 'The Two Gentlemen of Verona',
      isExpanded: true,
      children: [
        { id: 11, label: 'Duke of Milan' },
        {
          id: 12,
          label: 'Two Gentleman',
          isExpanded: true,
          children: [
            { id: 121, label: 'Valentine' },
            { id: 122, label: 'Proteus' },
          ],
        },
        { id: 13, label: 'Silvia' },
        { id: 14, label: 'Julia' },
      ],
    },
    {
      id: 2,
      label: 'The Tempest',
      isExpanded: false,
      children: [
        { id: 21, label: 'Alonso' },
        { id: 22, label: 'Sebastian' },
        { id: 23, label: 'Prospero' },
        { id: 24, label: 'Antonio' },
      ],
    },
  ]);
  return (
    <TreeView
      data={data}
      onToggle={(node) => {
        setData((prevData) => toggleIsExpanded(prevData, node));
      }}
    />
  );
};
