'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var formik = require('formik');
var FormContext = require('./FormContext.js');

function errorReducer(state, action) {
  if (!action.error) {
    const payload = state;
    delete payload[action.key];
    return payload;
  }
  if (action) {
    return Object.assign(Object.assign({}, state), {
      [action.key]: action.error
    });
  } else {
    throw new Error();
  }
}
function Form(_a) {
  var {
      validate
    } = _a,
    props = _tslib.__rest(_a, ["validate"]);
  const [fieldLevelErrors, dispatchErrors] = React.useReducer(errorReducer, null);
  function handleFieldLevelValidation(key, error) {
    dispatchErrors({
      key,
      error
    });
  }
  const formik$1 = formik.useFormik(Object.assign(Object.assign({
    validateOnBlur: true
  }, props), {
    validationSchema: props.validationSchema,
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validate: validate || function () {
      return fieldLevelErrors;
    }
  }));
  // console.log('values', formik.values)
  // console.log('errors', formik.errors)
  // console.log('touched', formik.touched)
  return jsxRuntime.jsx("form", Object.assign({
    id: props.id,
    name: props.name,
    onSubmit: formik$1.handleSubmit,
    className: props.className,
    style: props.style
  }, {
    children: jsxRuntime.jsx(FormContext.FormContextProvider, {
      values: formik$1.values,
      errors: formik$1.errors,
      formContextOnChange: formik$1.handleChange,
      handleBlur: formik$1.handleBlur,
      touched: formik$1.touched,
      fieldLevelValidation: handleFieldLevelValidation,
      // children={rest.children}
      children: props.children({
        /** map of field names to specific error for that field */
        errors: formik$1.errors,
        // /** map of field names to whether the field has been touched */
        touched: formik$1.touched,
        /** whether the form is currently submitting */
        isSubmitting: formik$1.isSubmitting,
        /** whether the form is currently validating (prior to submission) */
        isValidating: formik$1.isValidating,
        /** Number of times user tried to submit the form */
        submitCount: formik$1.submitCount,
        /** Initial values of form */
        initialValues: formik$1.initialValues,
        /** Current values of form */
        values: formik$1.values,
        /** Resets the form back to initialValues */
        handleReset: formik$1.handleReset,
        /** Resets the form with custom values */
        resetForm: formik$1.resetForm
      })
    })
  }));
}

exports["default"] = Form;
