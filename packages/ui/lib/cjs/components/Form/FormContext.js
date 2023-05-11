'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const FormContext = /*#__PURE__*/React.createContext({
  formContextOnChange: null,
  values: null,
  errors: null,
  handleBlur: null,
  touched: null,
  fieldLevelValidation: null
});
const FormContextProvider = props => {
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = props;
  const value = {
    formContextOnChange: formContextOnChange,
    values: values,
    errors: errors,
    handleBlur: handleBlur,
    touched: touched,
    fieldLevelValidation: fieldLevelValidation
  };
  return jsxRuntime.jsx(FormContext.Provider, Object.assign({
    value: value
  }, {
    children: props.children
  }));
};
// context helper to avoid using a consumer component
const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error(`useFormContextOnChange must be used within a FormContextProvider.`);
  }
  return context;
};

exports.FormContextProvider = FormContextProvider;
exports.useFormContext = useFormContext;
