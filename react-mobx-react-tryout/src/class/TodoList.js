import { makeObservable, observable, computed } from 'mobx';

class TodoList {
  todos = [];
  show_value = false;

  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      show_value: observable,
    });
    this.todos = todos;
  }

  add(value) {
    this.todos.push(value);
  }

  showValue() {
    this.show_value = true;
  }
  hideValue() {
    this.show_value = false;
  }
}

const store = new TodoList([]);

export { store };

export default TodoList;
