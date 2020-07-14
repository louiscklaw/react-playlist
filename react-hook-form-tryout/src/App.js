import React from 'react';
import Example from './components/hook-form'
import UseFieldArrayHelloworld from './components/use-field-array-helloworld';
import FieldArrayHelloworld from './components/field-array-helloworld';

function App() {
  return (
    <div className="App">
      <div>
        react-hook-form
        <Example />
      </div>

      <div>
        useFieldArray helloworld
        <UseFieldArrayHelloworld />
      </div>

      <div>
        field-array-helloworld
        <FieldArrayHelloworld />
      </div>
    </div>
  );
}

export default App;
