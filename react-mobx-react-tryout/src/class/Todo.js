import { makeObservable, observable, action } from 'mobx';

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

export default Todo;
