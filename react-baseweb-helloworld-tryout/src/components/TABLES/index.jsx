import React from 'react';
import Data_Table from 'src/components/TABLES/Data_Table';
import Flex_Table from 'src/components/TABLES/Flex_Table';
import Grid_Table from 'src/components/TABLES/Grid_Table';
import Table from 'src/components/TABLES/Table';

export default function HelloworldTables() {
  return (
    <>
      <Table />
      <Data_Table />
      <Grid_Table />
      <Flex_Table />
    </>
  );
}
