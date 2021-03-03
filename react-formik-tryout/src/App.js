import React from 'react';
import { Field, useFormik } from 'formik';
import * as Yup from 'yup';

import './App.css';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" {...formik.getFieldProps('firstName')} />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <div>
          <input type="radio" id="male" onChange={formik.handleChange} value={formik.values.male} />
          <label for="male">Male</label>
          <br />
          <input type="radio" id="female" {...formik.getFieldProps('female')} />
          <label for="female">Female</label>
          <br />
          <input type="radio" id="other" {...formik.getFieldProps('other')} />
          <label for="other">Other</label>
        </div>

        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
    </>
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
