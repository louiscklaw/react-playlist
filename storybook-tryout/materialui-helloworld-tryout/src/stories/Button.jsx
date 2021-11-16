import React from 'react';

import Button from '@mui/material/Button';

export function MuiButton({
  disabled,
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) {
  return (
    <>
      <div>
        <Button variant="text" disabled={disabled}>
          {label}
        </Button>
      </div>
      <div>
        <Button variant="contained" disabled={disabled}>
          {label}
        </Button>
      </div>
      <div>
        <Button variant="outlined" disabled={disabled}>
          {label}
        </Button>
      </div>
    </>
  );
}
