import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { InputAdornment, TextField } from '@mui/material';

import './App.css';
import { AttachMoney } from '@mui/icons-material';

function App({ test_branch = false }) {
  let [field_width, setFieldWidth] = useState(200);
  return (
    <div className="App">
      <Button>helloworld</Button>
      <TextField
        size="small"
        sx={{ width: field_width }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoney />
            </InputAdornment>
          ),
        }}
        onFocus={() => {
          setFieldWidth(400);
        }}
        onBlur={() => {
          setFieldWidth(200);
        }}
      ></TextField>
    </div>
  );
}

export default App;
