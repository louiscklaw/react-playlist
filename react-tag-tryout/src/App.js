import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

function App({ test_branch = false }) {
  const [tags, setTags] = React.useState([
    { id: 'Thailand', text: 'Thailand' },
    { id: 'India', text: 'India' },
  ]);

  const suggestions = [
    { id: 'USA', text: 'USA' },
    { id: 'Germany', text: 'Germany' },
    { id: 'Austria', text: 'Austria' },
    { id: 'Costa Rica', text: 'Costa Rica' },
    { id: 'Sri Lanka', text: 'Sri Lanka' },
    { id: 'Thailand', text: 'Thailand' },
  ];

  const handleDelete = (i) => {
    setTags({
      tags: tags.filter((tag, index) => index !== i),
    });
  };

  const handleAddition = (tag) => {
    setTags(tags);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  };

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          delimiters={delimiters}
        />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
