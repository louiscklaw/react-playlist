import React from 'react';
import { Field, useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const SignupForm = () => {
  const classes = useStyles();

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
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Age</InputLabel>
              <Select
                native
                value={values.age}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>

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
