import React from 'react';
import { Formik, Form } from 'formik';

import Switch from '@material-ui/core/Switch';

import './App.css';

const SignupForm = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          age: '10',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Switch
              checked={values.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Switch
              checked={values.checkedB}
              onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
            <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
            <Switch
              defaultChecked
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />

            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      helloworld
      <SignupForm />
    </div>
  );
}

export default App;
