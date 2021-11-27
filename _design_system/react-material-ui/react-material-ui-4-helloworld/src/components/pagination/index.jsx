// by index_file_template
import React from 'react';

import BasicPagination from "src/components/pagination/BasicPagination/index.jsx"
import PaginationButtons from "src/components/pagination/PaginationButtons/index.jsx"
import PaginationControlled from "src/components/pagination/PaginationControlled/index.jsx"
import PaginationLink from "src/components/pagination/PaginationLink/index.jsx"
import PaginationOutlined from "src/components/pagination/PaginationOutlined/index.jsx"
import PaginationRanges from "src/components/pagination/PaginationRanges/index.jsx"
import PaginationRounded from "src/components/pagination/PaginationRounded/index.jsx"
import PaginationSize from "src/components/pagination/PaginationSize/index.jsx"
import TablePagination from "src/components/pagination/TablePagination/index.jsx"
import UsePagination from "src/components/pagination/UsePagination/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <BasicPagination />
<PaginationButtons />
<PaginationControlled />
<PaginationLink />
<PaginationOutlined />
<PaginationRanges />
<PaginationRounded />
<PaginationSize />
<TablePagination />
<UsePagination />
      </div>
    </>
  );
}
