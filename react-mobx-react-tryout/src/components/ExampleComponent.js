import React from 'react';
import TodoListView from 'src/components/TodoListView';

export default function ExampleComponent({ todoList }) {
  return (
    <>
      ExampleComponent
      <TodoListView todoList={todoList} />
    </>
  );
}
