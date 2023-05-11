import { jsx as _jsx } from 'react/jsx-runtime'
import { createContext, useContext } from 'react'
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const FormContext = createContext({
  formContextOnChange: null,
  values: null,
  errors: null,
  handleBlur: null,
  touched: null,
  fieldLevelValidation: null,
})
export const FormContextProvider = (props) => {
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = props
  const value = {
    formContextOnChange: formContextOnChange,
    values: values,
    errors: errors,
    handleBlur: handleBlur,
    touched: touched,
    fieldLevelValidation: fieldLevelValidation,
  }
  return _jsx(
    FormContext.Provider,
    Object.assign({ value: value }, { children: props.children })
  )
}
// context helper to avoid using a consumer component
export const useFormContext = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error(
      `useFormContextOnChange must be used within a FormContextProvider.`
    )
  }
  return context
}
