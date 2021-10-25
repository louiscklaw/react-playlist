import React from 'react';
import TodoListView from 'src/components/TodoListView';

import Todo from 'src/class/Todo';
import { store } from 'src/class/TodoList';

export default function ExampleComponent() {
  return (
    <>
      ExampleComponent
      <TodoListView todoList={store} />
      <button
        onClick={() => {
          store.add(new Todo('Get Coffee'));
        }}>
        add
      </button>
      <button
        onClick={() => {
          store.showValue();
        }}>
        show
      </button>
      <button
        onClick={() => {
          store.hideValue();
        }}>
        hide
      </button>
    </>
  );
}
