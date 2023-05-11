import { __rest } from '../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import InputErrorIcon from '../../lib/Layout/InputErrorIcon.js';
import InputIconContainer from '../../lib/Layout/InputIconContainer.js';
import { useFormContext } from '../Form/FormContext.js';
import styleHandler from '../../theme/handler.js';

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
    props = __rest(_a, ["autoComplete", "autofocus", "children", "className", "descriptionText", "disabled", "error", "icon", "id", "inputRef", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "name", "onChange", "onFocus", "onBlur", "placeholder", "required", "value", "defaultValue", "style", "size", "borderless", "validation"]);
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = useFormContext();
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
  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value));
  }, []);
  const __styles = styleHandler('select');
  [__styles.container];
  let classes = [__styles.base];
  if (error) classes.push(__styles.variants.error);
  if (!error) classes.push(__styles.variants.standard);
  if (icon) classes.push(__styles.with_icon);
  if (size) classes.push(__styles.size[size]);
  if (disabled) classes.push(__styles.disabled);
  return jsx(FormLayout, Object.assign({
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
    children: jsxs("div", Object.assign({
      className: __styles.container
    }, {
      children: [jsx("select", Object.assign({
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
      })), icon && jsx(InputIconContainer, {
        icon: icon
      }), error && jsx("div", Object.assign({
        className: __styles.actions_container
      }, {
        children: error && jsx(InputErrorIcon, {
          size: size
        })
      })), jsx("span", Object.assign({
        className: __styles.chevron_container
      }, {
        children: jsx("svg", Object.assign({
          className: __styles.chevron,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true"
        }, {
          children: jsx("path", {
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
  return jsx("option", Object.assign({
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
  return jsx("optgroup", Object.assign({
    label: label
  }, {
    children: children
  }));
}
Select.Option = Option;
Select.OptGroup = OptGroup;

export { OptGroup, Option, Select as default };
