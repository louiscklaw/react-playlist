import * as React from 'react';
import { Table } from 'baseui/table-semantic';

export default () => {
  return (
    <Table
      columns={['Name', 'Age', 'Address']}
      data={[
        ['Sarah Brown', 31, '100 Broadway St., New York City, New York'],
        ['Jane Smith', 32, '100 Market St., San Francisco, California'],
      ]}
    />
  );
};
