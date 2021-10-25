import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { makeObservable, observable, action, computed } from 'mobx';
import { observer } from 'mobx-react-lite';

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

export default TodoList;
