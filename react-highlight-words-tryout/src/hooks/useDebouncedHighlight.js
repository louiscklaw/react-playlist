import React from 'react';
import { useDebounce } from 'use-debounce';

export default () => {
  let [word_to_highlight, setWordToHighlight] = React.useState();
  const [value] = useDebounce(word_to_highlight, 500);

  return [value, word_to_highlight, setWordToHighlight];
};
