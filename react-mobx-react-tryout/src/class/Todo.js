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

export default Todo;
