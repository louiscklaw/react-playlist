import React from 'react';

const PATH_TO_TEST = 'test/helloworld';

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

  const removeLocalStorage = (k) => localStorage.removeItem(k);

  const removeAllLocalStorage = () => localStorage.clear();

  // setter
  sessionStorage.setItem('myData', JSON.stringify({ hello: 'sessionStorage' }));
  sessionStorage.setItem(
    PATH_TO_TEST,
    JSON.stringify({ hello: 'sessionStorage' })
  );

  // getter
  sessionStorage.getItem('myData');

  // remove
  // localStorage.removeItem('myData')

  // remove all
  // localStorage.clear()

  storeToLocalStorage('myData', { hello: 'world' });
  storeToLocalStorage(PATH_TO_TEST, { hello: 'world' });

  alert(JSON.stringify(loadFromLocalStorage(PATH_TO_TEST)));
  alert(JSON.stringify(loadFromLocalStorage('not-existing')));
  alert(JSON.stringify(loadFromLocalStorage('myData')));

  return <div className="App">react helloworld</div>;
}

export default App;
