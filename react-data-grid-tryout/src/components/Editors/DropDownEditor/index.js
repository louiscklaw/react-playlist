import React from 'react';
import { textEditorClassname } from './TextEditor';

const titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'];

export default function DropDownEditor({ row, onRowChange }) {
  return (
    <>
      <select
        className={textEditorClassname}
        value={row.title}
        onChange={(event) =>
          onRowChange({ ...row, title: event.target.value }, true)
        }
        autoFocus>
        {titles.map((title) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    </>
  );
}
