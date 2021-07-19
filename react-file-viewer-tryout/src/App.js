import React from 'react';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

import './style.css';

const file = './demo.docx';
const type = 'docx';

function App({}) {
  const onError = () => {};

  return (
    <div className="App">
      <GlobalContextProvider>
        <FileViewer
          fileType={type}
          filePath={file}
          errorComponent={CustomErrorComponent}
          onError={onError}
        />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
