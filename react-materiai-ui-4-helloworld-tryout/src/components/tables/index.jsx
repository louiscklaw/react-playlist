// by index_file_template
import React from 'react';

import AcccessibleTable from "src/components/tables/AcccessibleTable/index.jsx"
import BasicTable from "src/components/tables/BasicTable/index.jsx"
import CollapsibleTable from "src/components/tables/CollapsibleTable/index.jsx"
import CustomPaginationActionsTable from "src/components/tables/CustomPaginationActionsTable/index.jsx"
import CustomizedTables from "src/components/tables/CustomizedTables/index.jsx"
import DataTable from "src/components/tables/DataTable/index.jsx"
import DenseTable from "src/components/tables/DenseTable/index.jsx"
import EnhancedTable from "src/components/tables/EnhancedTable/index.jsx"
import ReactVirtualizedTable from "src/components/tables/ReactVirtualizedTable/index.jsx"
import SpanningTable from "src/components/tables/SpanningTable/index.jsx"
import StickyHeadTable from "src/components/tables/StickyHeadTable/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <AcccessibleTable />
<BasicTable />
<CollapsibleTable />
<CustomPaginationActionsTable />
<CustomizedTables />
<DataTable />
<DenseTable />
<EnhancedTable />
<ReactVirtualizedTable />
<SpanningTable />
<StickyHeadTable />
      </div>
    </>
  );
}
