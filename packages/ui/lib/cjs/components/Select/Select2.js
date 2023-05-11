'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var InputErrorIcon = require('../../lib/Layout/InputErrorIcon.js');
var InputIconContainer = require('../../lib/Layout/InputIconContainer.js');
var FormContext = require('../Form/FormContext.js');
var handler = require('../../theme/handler.js');

function Select(_a) {
  var {
      autoComplete,
      autofocus,
      children,
      className,
      descriptionText,
      disabled,
      error,
      icon,
      id = '',
      inputRef,
      label,
      afterLabel,
      beforeLabel,
      labelOptional,
      layout,
      name = '',
      onChange,
      onFocus,
      onBlur,
      placeholder,
      required,
      value = undefined,
      defaultValue = undefined,
      style,
      size = 'medium',
      borderless = false,
      validation
    } = _a,
    props = _tslib.__rest(_a, ["autoComplete", "autofocus", "children", "className", "descriptionText", "disabled", "error", "icon", "id", "inputRef", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "name", "onChange", "onFocus", "onBlur", "placeholder", "required", "value", "defaultValue", "style", "size", "borderless", "validation"]);
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = FormContext.useFormContext();
  if (values && !value) value = values[id];
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e);
    if (onBlur) onBlur(e);
  }
  if (!error) {
    if (errors && !error) error = errors[id || name];
    error = touched && touched[id || name] ? error : undefined;
  }
  function onInputChange(e) {
    if (onChange) onChange(e);
    // update form
    if (formContextOnChange) formContextOnChange(e);
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value));
  }
  React.useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value));
  }, []);
  const __styles = handler["default"]('select');
  [__styles.container];
  let classes = [__styles.base];
  if (error) classes.push(__styles.variants.error);
  if (!error) classes.push(__styles.variants.standard);
  if (icon) classes.push(__styles.with_icon);
  if (size) classes.push(__styles.size[size]);
  if (disabled) classes.push(__styles.disabled);
  return jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
    label: label,
    afterLabel: afterLabel,
    beforeLabel: beforeLabel,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    descriptionText: descriptionText,
    className: className,
    style: style,
    size: size
  }, {
    children: jsxRuntime.jsxs("div", Object.assign({
      className: __styles.container
    }, {
      children: [jsxRuntime.jsx("select", Object.assign({
        id: id,
        name: name,
        autoComplete: autoComplete,
        autoFocus: autofocus,
        className: classes.join(' '),
        onChange: onInputChange,
        onFocus: onFocus ? event => onFocus(event) : undefined,
        onBlur: handleBlurEvent,
        ref: inputRef,
        value: value,
        disabled: disabled,
        required: required,
        placeholder: placeholder
      }, props, {
        children: children
      })), icon && jsxRuntime.jsx(InputIconContainer["default"], {
        icon: icon
      }), error && jsxRuntime.jsx("div", Object.assign({
        className: __styles.actions_container
      }, {
        children: error && jsxRuntime.jsx(InputErrorIcon["default"], {
          size: size
        })
      })), jsxRuntime.jsx("span", Object.assign({
        className: __styles.chevron_container
      }, {
        children: jsxRuntime.jsx("svg", Object.assign({
          className: __styles.chevron,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true"
        }, {
          children: jsxRuntime.jsx("path", {
            fillRule: "evenodd",
            d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
            clipRule: "evenodd"
          })
        }))
      }))]
    }))
  }));
}
function Option(_ref) {
  let {
    value,
    children,
    selected
  } = _ref;
  return jsxRuntime.jsx("option", Object.assign({
    value: value,
    selected: selected
  }, {
    children: children
  }));
}
function OptGroup(_ref2) {
  let {
    label,
    children
  } = _ref2;
  return jsxRuntime.jsx("optgroup", Object.assign({
    label: label
  }, {
    children: children
  }));
}
Select.Option = Option;
Select.OptGroup = OptGroup;

exports.OptGroup = OptGroup;
exports.Option = Option;
exports["default"] = Select;
