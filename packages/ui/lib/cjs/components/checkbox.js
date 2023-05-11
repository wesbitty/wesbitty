'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var FormLayout = require('../lib/Layout/FormLayout/FormLayout.js');
var Checkbox$1 = require('./Shared/Context/Checkbox.js');
var FormContext = require('./Form/FormContext.js');
var handler = require('../theme/handler.js');

function Group(_ref) {
  let {
    id,
    layout = 'vertical',
    error,
    descriptionText,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    children,
    className,
    options,
    onChange,
    size = 'medium'
  } = _ref;
  const parentCallback = e => {
    if (onChange) onChange(e);
  };
  const __styles = handler["default"]('checkbox');
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
    size: size
  }, {
    children: jsxRuntime.jsx(Checkbox$1.CheckboxContext.Provider, Object.assign({
      value: {
        parentCallback,
        parentSize: size
      }
    }, {
      children: jsxRuntime.jsx("div", Object.assign({
        className: __styles.group
      }, {
        children: options ? options.map(option => {
          return jsxRuntime.jsx(Checkbox, {
            id: option.id,
            value: option.value,
            label: option.label,
            beforeLabel: option.beforeLabel,
            afterLabel: option.afterLabel,
            checked: option.checked,
            name: option.name,
            description: option.description
          });
        }) : children
      }))
    }))
  }));
}
function Checkbox(_a) {
  var {
      className,
      id = '',
      name = '',
      label,
      afterLabel,
      beforeLabel,
      description,
      checked,
      value,
      onChange,
      onFocus,
      onBlur,
      size = 'medium',
      disabled = false
    } = _a,
    props = _tslib.__rest(_a, ["className", "id", "name", "label", "afterLabel", "beforeLabel", "description", "checked", "value", "onChange", "onFocus", "onBlur", "size", "disabled"]);
  const {
    formContextOnChange,
    values,
    handleBlur
  } = FormContext.useFormContext();
  const __styles = handler["default"]('checkbox');
  return jsxRuntime.jsx(Checkbox$1.CheckboxContext.Consumer, {
    children: _ref2 => {
      let {
        parentCallback,
        parentSize
      } = _ref2;
      // if id does not exist, use label
      const markupId = id ? id : name ? name : label ? label.toLowerCase().replace(/^[^A-Z0-9]+/gi, '').replace(/ /g, '-') : undefined;
      // @ts-ignore
      size = parentSize ? parentSize : size;
      // if name does not exist on Radio then use Context Name from Radio.Group
      // if that fails, use the id
      const markupName = name ? name : markupId;
      // check if checkbox checked is true or false
      // if neither true or false the checkbox will rely on native control
      let active = checked !== null && checked !== void 0 ? checked : undefined;
      // if (values && !value) value = values[id || name]
      let containerClasses = [__styles.container];
      function onInputChange(e) {
        // '`onChange` callback for parent component
        if (parentCallback) parentCallback(e);
        // '`onChange` callback for this component
        if (onChange) onChange(e);
        // update form
        if (formContextOnChange) formContextOnChange(e);
      }
      if (className) containerClasses.push(className);
      if (values && checked === undefined) active = values[id || name];
      function handleBlurEvent(e) {
        if (handleBlur) handleBlur(e);
        if (onBlur) onBlur(e);
      }
      return jsxRuntime.jsxs("div", Object.assign({
        className: containerClasses.join(' ')
      }, {
        children: [jsxRuntime.jsx("input", Object.assign({
          id: markupId,
          name: markupName,
          type: "checkbox",
          // className={CheckboxStyles['wsb-checkbox']}
          className: [__styles.base, __styles.size[size]].join(' '),
          onChange: onInputChange,
          onFocus: onFocus ? event => onFocus(event) : undefined,
          onBlur: handleBlurEvent,
          checked: active,
          value: value ? value : markupId,
          disabled: disabled
        }, props)), jsxRuntime.jsxs("label", Object.assign({
          className: [__styles.label.base, __styles.label[size]].join(' '),
          htmlFor: markupId
        }, {
          children: [jsxRuntime.jsxs("span", {
            children: [beforeLabel && jsxRuntime.jsx("span", Object.assign({
              className: [__styles.label_before.base, __styles.label_before[size]].join(' ')
            }, {
              children: beforeLabel
            })), label, afterLabel && jsxRuntime.jsx("span", Object.assign({
              className: [__styles.label_after.base, __styles.label_after[size]].join(' ')
            }, {
              children: afterLabel
            }))]
          }), description && jsxRuntime.jsx("p", Object.assign({
            className: [__styles.description.base, __styles.description[size]].join(' ')
          }, {
            children: description
          }))]
        }))]
      }));
    }
  });
}
Checkbox.Group = Group;

exports.Checkbox = Checkbox;
exports["default"] = Checkbox;
