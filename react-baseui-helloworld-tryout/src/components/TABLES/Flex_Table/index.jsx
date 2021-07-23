import * as React from 'react';
import { Table } from 'baseui/table';

export default () => {
  return (
    <Table
      columns={['Name', 'Age', 'Address']}
      data={[
        ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
        ['Jane Smith', 32, '100 Market st. San Francisco, California'],
      ]}
    />
  );
};
