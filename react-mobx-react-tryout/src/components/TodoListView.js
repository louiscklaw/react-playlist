import React from 'react';

import { observer } from 'mobx-react-lite';

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

export default TodoListView;
