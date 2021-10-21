import React from 'react';
import { TextField, Input } from '@material-ui/core';

const lineup_remarks_placeholder = 'lineup_remarks_placeholder\n1\n2\n3';

export default function App() {
  let [form_info, setFormInfo] = React.useState({ 'lineup-note': '' });

  function updateFormInfo(nv) {
    setFormInfo({ 'lineup-note': nv });
  }

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
      </div>
      <div style={{ padding: '2rem' }}>
        <TextField
          id="outlined-number"
          label="Number"
          type="text"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          placeholder="hello placeholder"
        />
      </div>
      <div style={{ padding: '2rem', width: '100vw' }}>
        <Input
          id="lineup-note"
          // disableUnderline={true}
          // className={classes.lineup_remarks_placeholder}
          style={
            form_info['lineup-note'] === ''
              ? { color: 'grey' }
              : { color: 'black' }
          }
          variant="outlined"
          onInput={updateFormInfo}
          onClick={(e) => {
            e.target.setSelectionRange(0, 0);
          }}
          onChange={(e) => {
            let temp = e.target.value;

            updateFormInfo(temp.replace(lineup_remarks_placeholder, ''));
          }}
          value={
            form_info['lineup-note'] || lineup_remarks_placeholder || '備考'
          }
          multiline
          rows={8}
          fullWidth
        />
      </div>
    </>
  );
}
