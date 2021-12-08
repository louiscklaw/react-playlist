import React from 'react';
import ReactDOM from 'react-dom';
import Highlighter from 'react-highlight-words';
import { AppContext } from '../AppContext';

import { useDebounce } from 'use-debounce';

function Highlight() {
  let { word_to_highlight } = React.useContext(AppContext);
  const [value] = useDebounce(word_to_highlight, 500);

  return (
    <>
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={value ? value.split(' ') : []}
        autoEscape={true}
        textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
      />
    </>
  );
}

export default Highlight;
