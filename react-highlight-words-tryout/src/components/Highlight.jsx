import React from 'react';
import ReactDOM from 'react-dom';
import Highlighter from 'react-highlight-words';
import { AppContext } from '../AppContext';

import { useDebounce } from 'use-debounce';

function Highlight() {
  let { word_to_highlight } = React.useContext(AppContext);

  return (
    <>
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={word_to_highlight ? word_to_highlight.split(' ') : []}
        autoEscape={true}
        textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
      />
    </>
  );
}

export default Highlight;
