import React from 'react';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import Todo from './class/Todo';
import TodoList from './class/TodoList';
import ExampleComponent from 'src/components/ExampleComponent';
import TodoListView from 'src/components/TodoListView';

const store = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
  new Todo('Write simpler 1'),
  new Todo('Write simpler 2'),
  new Todo('Write simpler 3'),
  new Todo('Write simpler 4'),
]);

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <TodoListView todoList={store} />
        <TodoListView todoList={store} />
        <ExampleComponent todoList={store} />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
