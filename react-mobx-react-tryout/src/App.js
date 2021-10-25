import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { makeObservable, observable, action, computed } from 'mobx';
import { observer } from 'mobx-react-lite';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title) {
    this.title = title;

    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos = [];

  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }
}

const TodoListView = observer(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
  </div>
));

const TodoView = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.toggle()}
    />
    {todo.title}
  </li>
));

const store = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
  new Todo('Write simpler 1'),
  new Todo('Write simpler 2'),
  new Todo('Write simpler 3'),
  new Todo('Write simpler 4'),
]);

function App({ test_branch = false }) {
  return (
    <div className="App">
      <GlobalContextProvider>
        <TodoListView todoList={store} />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
