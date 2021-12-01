import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import faker from 'faker';

import DataGrid, {
  SelectColumn,
  TextEditor,
  SelectCellFormatter,
} from 'react-data-grid';

import createRows from './createRows';
import ExportButton from './ExportButton';
import getColumns from './getColumns';
import dialogContainerClassname from './dialogContainerClassname';
import toolbarClassname from './toolbarClassname';
import getComparator from './getComparator';

// import { exportToCsv, exportToXlsx, exportToPdf } from './exportUtils';
const exportToCsv = () => {};
const exportToXlsx = () => {};
const exportToPdf = () => {};

function rowKeyGetter(row) {
  return row.id;
}

export default function CommonFeatures() {
  const [rows, setRows] = useState(createRows);
  const [sortColumns, setSortColumns] = useState([]);
  const [selectedRows, setSelectedRows] = useState(() => new Set());

  const countries = useMemo(() => {
    return [...new Set(rows.map((r) => r.country))].sort(
      new Intl.Collator().compare
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns = useMemo(() => getColumns(countries), [countries]);

  const summaryRows = useMemo(() => {
    const summaryRow = {
      id: 'total_0',
      totalCount: rows.length,
      yesCount: rows.filter((r) => r.available).length,
    };
    return [summaryRow];
  }, [rows]);

  const sortedRows = useMemo(() => {
    if (sortColumns.length === 0) return rows;

    const sortedRows = [...rows];
    sortedRows.sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey);
        const compResult = comparator(a, b);
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
    return sortedRows;
  }, [rows, sortColumns]);

  const gridElement = (
    <DataGrid
      rowKeyGetter={rowKeyGetter}
      columns={columns}
      rows={sortedRows}
      defaultColumnOptions={{ sortable: true, resizable: true }}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      onRowsChange={setRows}
      sortColumns={sortColumns}
      onSortColumnsChange={setSortColumns}
      summaryRows={summaryRows}
      className="fill-grid"
    />
  );

  return (
    <>
      <div className={toolbarClassname}>
        <ExportButton
          onExport={() => exportToCsv(gridElement, 'CommonFeatures.csv')}>
          Export to CSV
        </ExportButton>
        <ExportButton
          onExport={() => exportToXlsx(gridElement, 'CommonFeatures.xlsx')}>
          Export to XSLX
        </ExportButton>
        <ExportButton
          onExport={() => exportToPdf(gridElement, 'CommonFeatures.pdf')}>
          Export to PDF
        </ExportButton>
      </div>
      {gridElement}
    </>
  );
}
