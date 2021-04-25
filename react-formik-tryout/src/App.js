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

let ASCII_MINUS = 45;
let ASCII_0 = 48;
let ASCII_9 = 57;
let ASCII_FW_0 = 65296;
let ASCII_FW_9 = 65305;

let REGEX_TEST_NUMBER_POS_NEG = /^[ \u{3000}\u{2D}\u{FF0D}]*[ \u{3000}\u{30}-\u{39}\u{FF10}-\u{FF19}]+$/u;
let REGEX_TEST_NUMBER_WITH_DECIMAL_POINT = /.*[\u{30}-\u{39}\u{FF10}-\u{FF19}]*[\.\u{3002}][\u{30}-\u{39}\u{FF10}-\u{FF19}]*.*/u;
let REGEX_TEST_NUMBER_WITHOUT_MINUS = /^[ \u{3000}\u{30}-\u{39}\u{FF10}-\u{FF19}]+$/u;
let REGEX_TEST_NUMBER_WITHOUT_MINUS_WITH_DECIMAL_POINT = /.*[ \u{3000}\u{30}-\u{39}\u{FF10}-\u{FF19}]*\.[ \u{3000}\u{30}-\u{39}\u{FF10}-\u{FF19}]*.*/u;

const FwToHwNumeric = fw_number_in => {
  let char_code = fw_number_in.charCodeAt();
  return String.fromCharCode(char_code - ASCII_FW_0 + ASCII_0);
};

const sanitizeFullWidthNumber = test_input => {
  return test_input
    .split('')
    .map((original_char, idx) => {
      let char_code = original_char.charCodeAt();
      if (char_code >= ASCII_FW_0 && char_code <= ASCII_FW_9) {
        return FwToHwNumeric(original_char);
      }
      if (char_code >= ASCII_0 && char_code <= ASCII_9) {
        return original_char;
      }
      if (char_code == ASCII_MINUS) return original_char;
      return original_char.trim();
    })
    .join('');
};

const SignupForm = () => {
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      unit_price: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      unit_price: Yup.string()
        .matches(REGEX_TEST_NUMBER_WITHOUT_MINUS, o => {
          if (o.value.match(REGEX_TEST_NUMBER_WITHOUT_MINUS_WITH_DECIMAL_POINT))
            // 数字が正確ではありません。再度、入力してください。
            return PRICE_IS_NOT_A_INTEGER;

          // 数字を入力してください。
          return PRICE_IS_NOT_A_NUMBER;
        })
        .required(PRICE_IS_MISSING_ERROR),
    }),
    onSubmit: (values, actions) => {
      actions.validateForm(values).then(() => {
        console.log('validate ok');
        alert(JSON.stringify(values, null, 2));
      });
      // console.log('validate(values)', Object.keys(actions));
      //
    },
  });

  const checkUnitPriceValidWhenSubmit = value_in => {
    return REGEX_TEST_NUMBER_WITHOUT_MINUS.test(value_in);
  };

  const convertFunction = value_in => {
    if (value_in.trim() != '') {
      let temp = sanitizeFullWidthNumber(value_in);
      return parseInt(temp);
    } else {
      return value_in;
    }
  };

  return (
    <>
      <form
        onSubmit={e => {
          // let name_value = formik.getFieldProps('unit_price').value;
          // if (checkUnitPriceValidWhenSubmit(name_value)) {
          //   formik.setFieldValue('unit_price', convertFunction(name_value));
          // }
          console.log('helloworld', formik.getFieldProps('aaa').value);
          // formik.handleSubmit(e);
        }}
      >
        <label htmlFor="unit_price">unit_price</label>
        <input id="unit_price" type="text" {...formik.getFieldProps('unit_price')} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

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
