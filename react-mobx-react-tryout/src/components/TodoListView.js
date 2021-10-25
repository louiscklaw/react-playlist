import React from 'react';
import { observer } from 'mobx-react-lite';

import { store } from 'src/class/TodoList';

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

const TodoListView = observer(({ todoList = store }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
    <pre>{JSON.stringify(todoList.show_value, null, 2)}</pre>
  </div>
));

export default TodoListView;
