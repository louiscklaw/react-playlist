import { makeObservable, observable, action } from 'mobx';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor({ id, title }) {
    if (id) {
      this.id = id;
    }
    this.title = title;

    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
  }

  toggle() {
    this.finished = !this.finished;
    let temp = JSON.parse(localStorage.getItem('temp'));
    temp.forEach((x) => {
      if (x.id === this.id) {
        x.finished = this.finished;
      }
    });
    localStorage.setItem('temp', JSON.stringify(temp));
  }
}

export default Todo;
