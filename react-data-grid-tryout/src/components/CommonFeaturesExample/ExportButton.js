import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import faker from 'faker';

export default function ExportButton({ onExport, children }) {
  const [exporting, setExporting] = useState(false);
  return (
    <button
      disabled={exporting}
      onClick={async () => {
        setExporting(true);
        await onExport();
        setExporting(false);
      }}>
      {exporting ? 'Exporting' : children}
    </button>
  );
}
