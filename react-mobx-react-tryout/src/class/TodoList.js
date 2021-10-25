import { makeObservable, observable, computed } from 'mobx';
import Todo from 'src/class/Todo';

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
    localStorage.setItem('temp', JSON.stringify(this.todos));
  }

  showValue() {
    this.show_value = true;
  }

  hideValue() {
    this.show_value = false;
  }
}

let ls_todo_list = JSON.parse(localStorage.getItem('temp'));
const store = new TodoList(ls_todo_list.map((x) => new Todo(x)));

export { store };

export default TodoList;
