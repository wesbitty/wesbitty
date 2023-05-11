var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import { jsx as _jsx } from 'react/jsx-runtime'
import { useReducer } from 'react'
import { useFormik } from 'formik'
import { FormContextProvider } from './FormContext'
function errorReducer(state, action) {
  if (!action.error) {
    const payload = state
    delete payload[action.key]
    return payload
  }
  if (action) {
    return Object.assign(Object.assign({}, state), {
      [action.key]: action.error,
    })
  } else {
    throw new Error()
  }
}
export default function Form(_a) {
  var { validate } = _a,
    props = __rest(_a, ['validate'])
  const [fieldLevelErrors, dispatchErrors] = useReducer(errorReducer, null)
  function handleFieldLevelValidation(key, error) {
    dispatchErrors({ key, error })
  }
  const formik = useFormik(
    Object.assign(Object.assign({ validateOnBlur: true }, props), {
      validationSchema: props.validationSchema,
      initialValues: props.initialValues,
      onSubmit: props.onSubmit,
      validate:
        validate ||
        function () {
          return fieldLevelErrors
        },
    })
  )
  // console.log('values', formik.values)
  // console.log('errors', formik.errors)
  // console.log('touched', formik.touched)
  return _jsx(
    'form',
    Object.assign(
      {
        id: props.id,
        name: props.name,
        onSubmit: formik.handleSubmit,
        className: props.className,
        style: props.style,
      },
      {
        children: _jsx(FormContextProvider, {
          values: formik.values,
          errors: formik.errors,
          formContextOnChange: formik.handleChange,
          handleBlur: formik.handleBlur,
          touched: formik.touched,
          fieldLevelValidation: handleFieldLevelValidation,
          // children={rest.children}
          children: props.children({
            /** map of field names to specific error for that field */
            errors: formik.errors,
            // /** map of field names to whether the field has been touched */
            touched: formik.touched,
            /** whether the form is currently submitting */
            isSubmitting: formik.isSubmitting,
            /** whether the form is currently validating (prior to submission) */
            isValidating: formik.isValidating,
            /** Number of times user tried to submit the form */
            submitCount: formik.submitCount,
            /** Initial values of form */
            initialValues: formik.initialValues,
            /** Current values of form */
            values: formik.values,
            /** Resets the form back to initialValues */
            handleReset: formik.handleReset,
            /** Resets the form with custom values */
            resetForm: formik.resetForm,
          }),
        }),
      }
    )
  )
}
