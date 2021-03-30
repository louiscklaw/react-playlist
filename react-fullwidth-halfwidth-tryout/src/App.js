import React from 'react'
import { Formik, Form, Field } from 'formik'

let ASCII_0 = 48
let ASCII_9 = 57
let ASCII_FW_0 = 65296
let ASCII_FW_9 = 65305

function validateTableNumber(value) {
  let error
  if (value == '') {
    error = 'table number cannot be empty'
  } else {
    value.split('').forEach((_, idx) => {
      let char_code = value.charCodeAt(idx)
      if (char_code >= ASCII_0 && char_code <= ASCII_9) {
      } else if (char_code >= ASCII_FW_0 && char_code <= ASCII_FW_9) {
      } else {
        error = 'invalid table number'
      }
    })
  }

  return error
}

const FwToHwNumeric = fw_number_in => {
  return String.fromCharCode(fw_number_in - ASCII_FW_0 + ASCII_0)
}

export const FieldLevelValidationExample = () => (
  <div>
    <Formik
      initialValues={{
        table_number: '',
      }}
      onSubmit={values => {
        let temp = []
        temp = values.table_number
          .split('')
          .map((original_char, idx) => {
            let char_code = original_char.charCodeAt()
            if (char_code >= ASCII_FW_0 && char_code <= ASCII_FW_9) {
              return FwToHwNumeric(char_code)
            }
            return original_char
          })
          .join('')

        console.log(temp)
        alert(JSON.stringify(temp, null, 2))
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form>
          <Field name="table_number" validate={validateTableNumber} />
          {errors.table_number && touched.table_number && <div>{errors.table_number}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default FieldLevelValidationExample
