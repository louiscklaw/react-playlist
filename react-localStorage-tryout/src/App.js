import React from 'react';

function App() {
  // SET
  const storeToLocalStorage = (k, data_o) => {
    localStorage.setItem(k, JSON.stringify(data_o));
  };

  // GET
  const loadFromLocalStorage = (k) => {
    if (localStorage.getItem(k) === null) {
      return null;
    }
    return JSON.parse(localStorage.getItem(k));
  };

  const removeLocalStorage = (k) => {
    localStorage.removeItem(k);
  };

  const removeAllLocalStorage = () => {
    localStorage.clear();
  };

  // setter
  sessionStorage.setItem('myData', JSON.stringify({ hello: 'sessionStorage' }));

  // getter
  sessionStorage.getItem('myData');

  // remove
  // localStorage.removeItem('myData')

  // remove all
  // localStorage.clear()

  storeToLocalStorage('myData', { hello: 'world' });
  alert(loadFromLocalStorage('1'));
  alert(loadFromLocalStorage('myData'));

  return <div className="App">react helloworld</div>;
}

export default App;
