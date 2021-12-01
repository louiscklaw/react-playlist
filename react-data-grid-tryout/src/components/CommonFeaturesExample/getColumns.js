import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import faker from 'faker';

import DataGrid, {
  SelectColumn,
  TextEditor,
  SelectCellFormatter,
} from 'react-data-grid';

import { textEditorClassname } from './textEditorClassname';
import dialogContainerClassname from './dialogContainerClassname';
import TimestampFormatter from './TimestampFormatter';
import dateFormatter from './dateFormatter';
import CurrencyFormatter from './CurrencyFormatter';

import { stopPropagation } from './stopPropagation';

export default function getColumns(countries) {
  return [
    SelectColumn,
    {
      key: 'id',
      name: 'ID',
      width: 60,
      frozen: true,
      resizable: false,
      summaryFormatter() {
        return <strong>Total</strong>;
      },
    },
    {
      key: 'title',
      name: 'Task',
      width: 120,
      frozen: true,
      editor: TextEditor,
      summaryFormatter({ row }) {
        return <>{row.totalCount} records</>;
      },
    },
    {
      key: 'client',
      name: 'Client',
      width: 220,
      editor: TextEditor,
    },
    {
      key: 'area',
      name: 'Area',
      width: 120,
      editor: TextEditor,
    },
    {
      key: 'country',
      name: 'Country',
      width: 180,
      editor: (p) => (
        <select
          autoFocus
          className={textEditorClassname}
          value={p.row.country}
          onChange={(e) =>
            p.onRowChange({ ...p.row, country: e.target.value }, true)
          }>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      ),
      editorOptions: {
        editOnClick: true,
      },
    },
    {
      key: 'contact',
      name: 'Contact',
      width: 160,
      editor: TextEditor,
    },
    {
      key: 'assignee',
      name: 'Assignee',
      width: 150,
      editor: TextEditor,
    },
    {
      key: 'progress',
      name: 'Completion',
      width: 110,
      formatter(props) {
        const value = props.row.progress;
        return (
          <>
            <progress max={100} value={value} style={{ width: 50 }} />{' '}
            {Math.round(value)}%
          </>
        );
      },
      editor({ row, onRowChange, onClose }) {
        return createPortal(
          <div
            className={dialogContainerClassname}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                onClose();
              }
            }}>
            <dialog open>
              <input
                autoFocus
                type="range"
                min="0"
                max="100"
                value={row.progress}
                onChange={(e) =>
                  onRowChange({ ...row, progress: e.target.valueAsNumber })
                }
              />
              <menu>
                <button onClick={() => onClose()}>Cancel</button>
                <button onClick={() => onClose(true)}>Save</button>
              </menu>
            </dialog>
          </div>,
          document.body
        );
      },
      editorOptions: {
        renderFormatter: true,
      },
    },
    {
      key: 'startTimestamp',
      name: 'Start date',
      width: 100,
      formatter(props) {
        return <TimestampFormatter timestamp={props.row.startTimestamp} />;
      },
    },
    {
      key: 'endTimestamp',
      name: 'Deadline',
      width: 100,
      formatter(props) {
        return <TimestampFormatter timestamp={props.row.endTimestamp} />;
      },
    },
    {
      key: 'budget',
      name: 'Budget',
      width: 100,
      formatter(props) {
        return <CurrencyFormatter value={props.row.budget} />;
      },
    },
    {
      key: 'transaction',
      name: 'Transaction type',
    },
    {
      key: 'account',
      name: 'Account',
      width: 150,
    },
    {
      key: 'version',
      name: 'Version',
      editor: TextEditor,
    },
    {
      key: 'available',
      name: 'Available',
      width: 80,
      formatter({ row, onRowChange, isCellSelected }) {
        return (
          <SelectCellFormatter
            value={row.available}
            onChange={() => {
              onRowChange({ ...row, available: !row.available });
            }}
            onClick={stopPropagation}
            isCellSelected={isCellSelected}
          />
        );
      },
      summaryFormatter({ row: { yesCount, totalCount } }) {
        return <>{`${Math.floor((100 * yesCount) / totalCount)}% ✔️`}</>;
      },
    },
  ];
}
