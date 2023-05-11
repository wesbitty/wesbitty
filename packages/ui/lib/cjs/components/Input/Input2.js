'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var InputErrorIcon = require('../../lib/Layout/InputErrorIcon.js');
var InputIconContainer = require('../../lib/Layout/InputIconContainer.js');
var constants = require('../../lib/constants.js');
var FormContext = require('../Form/FormContext.js');
var handler = require('../../theme/handler.js');
var button = require('../button.js');
var IconCopy = require('../Icon/icons/IconCopy/IconCopy2.js');

function Input(_a) {
  var {
      autoComplete,
      autoFocus,
      className,
      copy,
      defaultValue,
      descriptionText,
      disabled,
      error,
      icon,
      id = '',
      name = '',
      inputRef,
      label,
      afterLabel,
      beforeLabel,
      labelOptional,
      layout,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      placeholder,
      type = 'text',
      value = undefined,
      style,
      reveal = false,
      actions,
      size = 'medium',
      borderless = false,
      validation
    } = _a,
    props = _tslib.__rest(_a, ["autoComplete", "autoFocus", "className", "copy", "defaultValue", "descriptionText", "disabled", "error", "icon", "id", "name", "inputRef", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "onChange", "onBlur", "onFocus", "onKeyDown", "placeholder", "type", "value", "style", "reveal", "actions", "size", "borderless", "validation"]);
  const [copyLabel, setCopyLabel] = React.useState('Copy');
  const [hidden, setHidden] = React.useState(true);
  const __styles = handler["default"]('input');
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = FormContext.useFormContext();
  if (values && !value) value = values[id || name];
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e);
    if (onBlur) onBlur(e);
  }
  if (!error) {
    if (errors && !error) error = errors[id || name];
    error = touched && touched[id] ? error : undefined;
  }
  function onInputChange(e) {
    // console.log('input event', e)
    if (onChange) onChange(e);
    // update form
    if (formContextOnChange) formContextOnChange(e);
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value));
  }
  React.useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value));
  }, []);
  // useEffect(() => {
  //   error = touched && touched[id] ? error : undefined
  // }, [errors, touched])
  function onCopy(value) {
    navigator.clipboard.writeText(value).then(function () {
      /* clipboard successfully set */
      setCopyLabel('Copied');
      setTimeout(function () {
        setCopyLabel('Copy');
      }, 3000);
    }, function () {
      /* clipboard write failed */
      setCopyLabel('Failed to copy');
    });
  }
  function onReveal() {
    setHidden(false);
  }
  let inputClasses = [__styles.base];
  if (error) inputClasses.push(__styles.variants.error);
  if (!error) inputClasses.push(__styles.variants.standard);
  if (icon) inputClasses.push(__styles.with_icon);
  if (size) inputClasses.push(__styles.size[size]);
  if (disabled) inputClasses.push(__styles.disabled);
  return jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
    label: label,
    afterLabel: afterLabel,
    beforeLabel: beforeLabel,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    descriptionText: descriptionText,
    style: style,
    size: size,
    className: className
  }, {
    children: jsxRuntime.jsxs("div", Object.assign({
      className: __styles.container
    }, {
      children: [jsxRuntime.jsx("input", Object.assign({
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        defaultValue: defaultValue,
        disabled: disabled,
        id: id,
        name: name,
        onChange: onInputChange,
        onFocus: onFocus ? event => onFocus(event) : undefined,
        onBlur: handleBlurEvent,
        onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
        placeholder: placeholder,
        ref: inputRef,
        type: type,
        value: reveal && hidden ? constants.HIDDEN_PLACEHOLDER : value,
        className: inputClasses.join(' ')
      }, props)), icon && jsxRuntime.jsx(InputIconContainer["default"], {
        icon: icon
      }), copy || error || actions ? jsxRuntime.jsxs("div", Object.assign({
        className: __styles.actions_container
      }, {
        children: [error && jsxRuntime.jsx(InputErrorIcon["default"], {
          size: size
        }), copy && !(reveal && hidden) ? jsxRuntime.jsx(button.Button, Object.assign({
          size: "tiny",
          type: "default",
          icon: jsxRuntime.jsx(IconCopy["default"], {}),
          onClick: () => onCopy(value)
        }, {
          children: copyLabel
        })) : null, reveal && hidden ? jsxRuntime.jsx(button.Button, Object.assign({
          size: "tiny",
          type: "default",
          onClick: onReveal
        }, {
          children: "Reveal"
        })) : null, actions && actions]
      })) : null]
    }))
  }));
}
function TextArea(_a) {
  var {
      className,
      descriptionText,
      disabled,
      error,
      icon,
      id = '',
      name = '',
      label,
      afterLabel,
      beforeLabel,
      labelOptional,
      layout,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      placeholder,
      value,
      style,
      rows = 4,
      limit,
      size,
      borderless = false,
      validation,
      copy = false,
      actions
    } = _a,
    props = _tslib.__rest(_a, ["className", "descriptionText", "disabled", "error", "icon", "id", "name", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "onChange", "onFocus", "onBlur", "onKeyDown", "placeholder", "value", "style", "rows", "limit", "size", "borderless", "validation", "copy", "actions"]);
  const [charLength, setCharLength] = React.useState(0);
  const [copyLabel, setCopyLabel] = React.useState('Copy');
  function onCopy(value) {
    navigator.clipboard.writeText(value).then(function () {
      /* clipboard successfully set */
      setCopyLabel('Copied');
      setTimeout(function () {
        setCopyLabel('Copy');
      }, 3000);
    }, function () {
      /* clipboard write failed */
      setCopyLabel('Failed to copy');
    });
  }
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = FormContext.useFormContext();
  if (values && !value) value = values[id || name];
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e);
    if (onBlur) onBlur(e);
  }
  if (!error) {
    if (errors && !error) error = errors[id || name];
    error = touched && touched[id || name] ? error : undefined;
  }
  function onInputChange(e) {
    setCharLength(e.target.value.length);
    if (onChange) onChange(e);
    // update form
    if (formContextOnChange) formContextOnChange(e);
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value));
  }
  React.useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value));
  }, []);
  const __styles = handler["default"]('input');
  let classes = [__styles.base];
  if (error) classes.push(__styles.variants.error);
  if (!error) classes.push(__styles.variants.standard);
  if (icon) classes.push(__styles.with_icon);
  if (size) classes.push(__styles.size[size]);
  if (disabled) classes.push(__styles.disabled);
  return jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
    className: className,
    label: label,
    afterLabel: afterLabel,
    beforeLabel: beforeLabel,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    descriptionText: descriptionText,
    style: style,
    size: size
  }, {
    children: jsxRuntime.jsxs("div", Object.assign({
      className: __styles.container
    }, {
      children: [jsxRuntime.jsx("textarea", Object.assign({
        disabled: disabled,
        id: id,
        name: name,
        rows: rows,
        cols: 100,
        placeholder: placeholder,
        onChange: onInputChange,
        onFocus: onFocus ? event => onFocus(event) : undefined,
        onBlur: handleBlurEvent,
        onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
        value: value,
        className: classes.join(' '),
        maxLength: limit
      }, props, {
        children: value
      })), copy || error || actions ? jsxRuntime.jsx("div", Object.assign({
        className: __styles['textarea_actions_container']
      }, {
        children: jsxRuntime.jsxs("div", Object.assign({
          className: __styles['textarea_actions_container_items']
        }, {
          children: [error && jsxRuntime.jsx(InputErrorIcon["default"], {
            size: size
          }), copy && jsxRuntime.jsx(button.Button, Object.assign({
            size: "tiny",
            type: "default",
            onClick: () => onCopy(value),
            icon: jsxRuntime.jsx(IconCopy["default"], {})
          }, {
            children: copyLabel
          })), actions && actions]
        }))
      })) : null]
    }))
  }));
}
Input.TextArea = TextArea;

exports["default"] = Input;
