import React from 'react';

import './App.css';

function App() {

  const compareObj = (oA, oB) => JSON.stringify(oA)==JSON.stringify(oB)
  const testTheSameObjContent = (oExpected, oActual) => console.assert(compareObj(oExpected, oActual), oActual)

  const setLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value))
  const getLocalStorage = (name, value_if_not_exist) => {
    const test_value = localStorage.getItem(name)
    if (test_value == null){
      return value_if_not_exist
    }else{
      return JSON.parse(test_value)
    }
  }

  const test_data = {hello:'world'}
  const test_data_not_exist = {hello: 'another_world'}

  setLocalStorage('hello_local_storage', test_data)

  const test2 = getLocalStorage('hello_local_storage',test_data_not_exist)
  const test3 = getLocalStorage('not_exist_local_storage',test_data_not_exist)

  testTheSameObjContent(test2, test_data)
  testTheSameObjContent(test3, test_data_not_exist)



  return (
    <div className="App">
      helloworld


    </div>
  );
}

export default App;
