import React from 'react';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import ExampleComponent from 'src/components/ExampleComponent';
import TodoListView from 'src/components/TodoListView';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <TodoListView />
        <TodoListView />
        <ExampleComponent />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
