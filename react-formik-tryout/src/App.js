import React from 'react';
import { Field, useFormik } from 'formik';

import * as Yup from 'yup';

import './App.css';

let FOOD_NAME_IS_MISSING_ERROR = '入力が必須な項目です。商品名をご入力ください。';
let PRICE_IS_MISSING_ERROR = '入力が必須な項目です。値段をご入力ください。';
let PRICE_IS_NOT_A_NUMBER = '数字を入力してください。';
let PRICE_IS_NOT_A_INTEGER = '数字が正確ではありません。再度、入力してください。';
let CATEGORY_IS_MISSING_ERROR = '入力が必須な項目です。カテゴリー名をご入力ください。';
let OPTION_NAME_IS_MISSING_ERROR = '入力が必須な項目です。名称をご入力ください。';
let OPTION_PRICE_IS_MISSING_ERROR = '入力が必須な項目です。値段をご入力ください。';
let FOOD_DETAIL_IS_LOADING = 'food detail is loading';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('food name is missing error'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      number_only: Yup.string()
        .matches(/^\d+$/, o => {
          if (o.value.match(/\d*\.\d*/)) return PRICE_IS_NOT_A_INTEGER;
          return PRICE_IS_NOT_A_NUMBER;
        })
        .required({ message: PRICE_IS_MISSING_ERROR }),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">First Name</label>
        <input id="name" type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

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

        <div>
          <input
            id="number_only"
            onChange={formik.handleChange}
            value={formik.values.number_only}
          />
          {formik.errors.number_only}
        </div>

        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
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
