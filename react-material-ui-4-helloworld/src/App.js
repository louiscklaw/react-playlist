import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const inputProps = {
  step: 300,
};

const a_lot_of_space =
  '                                                                                                                                                      ';

const LYNKED_LIGHT_GREY = '#B3B3B3';
const LYNKED_BLACK = '#000000';

let lineup_remarks_placeholder = 'line 1 \n line 2\n line 3\n line 4\n line 5';

function App() {
  let [test_string, setTestString] = React.useState('');

  React.useEffect(() => {
    var textAreas = document.getElementsByTagName('textarea');

    Array.prototype.forEach.call(textAreas, function (elem) {
      elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
    });
  }, []);

  return (
    <div className="App">
      <div></div>
      <div>helloworld</div>
      <textarea
        name="address"
        placeholder="1313 Mockingbird Ln         Saginaw, MI 45100"></textarea>

      <textarea
        class="textAreaMultiline"
        placeholder={'line1\r\n\r\n\r\n\r\n\r\n\r\nline2\r\nline2\r\nline2\r\nline2\r\nline2\r\nline2\r\n'.replace(
          /\r\n/g,
          a_lot_of_space
        )}
        rows="5"
        cols="35"></textarea>

      <Input />
      <Input
        id="lineup-note"
        type="text"
        value={test_string}
        inputProps={inputProps}
        onKeyPress={(e) => {
          return false;
        }}
        onKeyDown={(k) => {
          console.log('key', k);

          if (test_string === '') {
            if (['PageDown', 'Delete', 'End'].includes(k.key)) {
              document.getElementById('lineup-note').setSelectionRange(0, 0);

              k.preventDefault();
              return false;
            }
          } else {
          }
        }}
        onClick={(e) => {
          if (test_string === '') {
            e.target.setSelectionRange(0, 0);
          }
        }}
        onChange={(e) => {
          if (e.target.value !== '') {
            e.target.value = e.target.value.replace(
              lineup_remarks_placeholder,
              ''
            );
          } else {
            setTimeout(() => {
              if (e.target === null) {
              } else {
                e.target.setSelectionRange(0, 0);
                document.getElementById('lineup-note').scrollTop = 0;
              }
            }, 1);
          }
          setTestString(e.target.value);
        }}
        style={
          test_string === undefined || test_string === ''
            ? { color: LYNKED_LIGHT_GREY }
            : { color: LYNKED_BLACK }
        }
        multiline
        rows={6}
        autocomplete="false"
        placeholder={'line1\r\n\r\n\r\n\r\n\r\n\r\nline2\r\nline2\r\nline2\r\nline2\r\nline2\r\nline2\r\n'.replace(
          /\r\n/g,
          a_lot_of_space
        )}
      />
      <div>
        <pre>{JSON.stringify(test_string, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
