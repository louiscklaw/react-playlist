import React from 'react';
import ReactDOM from 'react-dom';
import { AutoSizer, List } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// List data as an array of strings
const list = [
  'Brian Vaughn',
  // And so on...
];

function rowRenderer({ key, index, style }) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

export default () => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          rowCount={list.length}
          rowHeight={20}
          rowRenderer={rowRenderer}
          width={width}
        />
      )}
    </AutoSizer>
  );
};
