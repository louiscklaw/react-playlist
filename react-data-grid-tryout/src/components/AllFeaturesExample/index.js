import faker from 'faker';
import { useState } from 'react';
import DataGrid, { SelectColumn, TextEditor } from 'react-data-grid';

import DropDownEditor from 'src/components/Editors/DropDownEditor';
import { ImageFormatter } from 'src/components/Formatters';

import createRows from './createRows';

const rows = createRows(100);

export default function AllFeaturesExample() {
  const [rows, setRows] = useState(createRows);
  const [selectedRows, setSelectedRows] = useState(() => new Set());

  return (
    <>
      <DataGrid
        columns={columns}
        rows={rows}
        // rowKeyGetter={rowKeyGetter}
        onRowsChange={setRows}
        // onFill={handleFill}
        // onPaste={handlePaste}
        rowHeight={30}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        className="fill-grid"
        // rowClass={(row) =>
        //   row.id.includes('7') ? highlightClassname : undefined
        // }
      />
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </>
  );
}

const columns = [
  SelectColumn,
  {
    key: 'id',
    name: 'ID',
    width: 80,
    resizable: true,
    frozen: true,
  },
  {
    key: 'avatar',
    name: 'Avatar',
    width: 40,
    resizable: true,
    headerRenderer: () => <ImageFormatter value={faker.image.cats()} />,
    formatter: ({ row }) => <ImageFormatter value={row.avatar} />,
  },
  {
    key: 'title',
    name: 'Title',
    width: 200,
    resizable: true,
    formatter(props) {
      return <>{props.row.title}</>;
    },
    editor: DropDownEditor,
    editorOptions: {
      editOnClick: true,
    },
  },
  {
    key: 'firstName',
    name: 'First Name',
    width: 200,
    resizable: true,
    frozen: true,
    editor: TextEditor,
  },
  {
    key: 'lastName',
    name: 'Last Name',
    width: 200,
    resizable: true,
    frozen: true,
    editor: TextEditor,
  },
  {
    key: 'email',
    name: 'Email',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
  {
    key: 'street',
    name: 'Street',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
  {
    key: 'zipCode',
    name: 'ZipCode',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
  {
    key: 'date',
    name: 'Date',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
  {
    key: 'bs',
    name: 'bs',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
  {
    key: 'catchPhrase',
    name: 'Catch Phrase',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
  {
    key: 'companyName',
    name: 'Company Name',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
  {
    key: 'sentence',
    name: 'Sentence',
    width: 200,
    resizable: true,
    editor: TextEditor,
  },
];
