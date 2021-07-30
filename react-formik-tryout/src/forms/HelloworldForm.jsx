// myForm.js
import React from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';

const sleep = ms => new Promise(r => setTimeout(r, ms));

export const HelloworldForm = ({ onSubmit }) => {
  let formik = useFormik({
    enableReinitialize: true,
    initialValues: { firstName: '', username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string().required(),
    }),
    onSubmit: values => {
      onSubmit(values);
    },
  });

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" {...formik.getFieldProps('firstName')} />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" data-testid="username" {...formik.getFieldProps('username')} />
          <div>{formik.errors && formik.errors.username ? <>username cannot empty</> : <></>}</div>
        </div>
        <div>
          <label htmlFor="password">password</label>

          <input id="password" data-testid="password" {...formik.getFieldProps('password')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
