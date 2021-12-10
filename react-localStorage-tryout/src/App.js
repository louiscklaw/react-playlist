import React from 'react';

const PATH_TO_TEST = 'test/helloworld';

function App() {
  const dumpLocalStorage = () => {
    var archive = {};
    Object.keys(localStorage).forEach((ls_key) => {
      let temp_json = JSON.parse(localStorage.getItem(ls_key));
      archive = { ...archive, ...temp_json };
    });

    console.log('dumpLocalStorage:', archive);
    return archive;
  };

  // SET
  const storeToLocalStorage = (k, data_o) => {
    localStorage.setItem(k, JSON.stringify(data_o));
  };

  // GET
  const loadFromLocalStorage = (k) => {
    let result = localStorage.getItem(k);
    if (result) {
      return result;
    } else {
      return null;
    }
  };

  const removeLocalStorage = (k) => localStorage.removeItem(k);

  const removeAllLocalStorage = () => localStorage.clear();

  const tryLoad = (k) => {
    setDebug(loadFromLocalStorage(k));
  };

  // setter
  // sessionStorage.setItem('myData', { hello: 'sessionStorage' });

  // getter
  // sessionStorage.getItem('myData');

  // storeToLocalStorage('myData', { hello: 'world' });
  // storeToLocalStorage(PATH_TO_TEST, { hello: 'world' });

  let [debug, setDebug] = React.useState('');
  React.useEffect(() => {
    setDebug(loadFromLocalStorage('storageKey'));
  }, []);

  return (
    <div className="App">
      <div>react helloworld</div>
      <div>debug</div>
      <pre>{debug}</pre>

      <button>test</button>
      <button>clear</button>
      <button onClick={(e) => tryLoad('hello', e)}>get</button>
      <button
        onClick={(e) =>
          storeToLocalStorage(
            'hello',
            { hello: Date.now(), apple: 'orange' },
            e
          )
        }>
        set
      </button>
      <button onClick={(e) => dumpLocalStorage(e)}>dumpLocalStorage</button>
    </div>
  );
}

export default App;
