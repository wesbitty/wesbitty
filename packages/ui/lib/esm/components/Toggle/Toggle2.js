import { __rest } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import { useFormContext } from '../Form/FormContext.js';
import styleHandler from '../../theme/handler.js';

function Toggle(_a) {
  var _b;
  var {
      disabled,
      id = '',
      name = '',
      layout = 'flex',
      error,
      descriptionText,
      label,
      afterLabel,
      beforeLabel,
      labelOptional,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      defaultChecked,
      checked,
      className,
      align = 'left',
      size = 'medium',
      validation,
      labelLayout
    } = _a,
    props = __rest(_a, ["disabled", "id", "name", "layout", "error", "descriptionText", "label", "afterLabel", "beforeLabel", "labelOptional", "onChange", "onBlur", "onFocus", "onKeyDown", "defaultChecked", "checked", "className", "align", "size", "validation", "labelLayout"]);
  const __styles = styleHandler('toggle');
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = useFormContext();
  if (values && !checked) checked = values[id || name];
  const [intChecked, setIntChecked] = useState((_b = defaultChecked || checked) !== null && _b !== void 0 ? _b : false);
  // check if toggle checked is true or false
  // if neither true or false the toggle will rely on component state internally
  const active = checked !== null && checked !== void 0 ? checked : intChecked;
  useEffect(() => {
    setIntChecked(active);
  }, []);
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e);
    if (onBlur) onBlur(e);
  }
  if (!error) {
    if (errors && !error) error = errors[id || name];
    error = touched && touched[id || name] ? error : undefined;
  }
  function onClick() {
    // '`onChange` callback for this component
    // @ts-ignore // issue with conflicting input/button tag being used
    if (onChange) onChange(!active);
    setIntChecked(!intChecked);
    /*
     * Create change event for formik
     * formik expects an input change event
     */
    let event = {};
    event.target = {
      type: 'checkbox',
      name: name,
      id: id,
      value: !active,
      checked: !active
      // outerHTML: undefined,
      // options: undefined,
      // multiple: undefined,
    };
    // update form
    if (formContextOnChange) formContextOnChange(event);
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(!intChecked));
  }
  let toggleClasses = [__styles.base, __styles.handle_container[size]];
  if (active) toggleClasses.push(__styles.active);
  let handleClasses = [__styles.handle['base'], __styles.handle[size]];
  if (active) handleClasses.push(__styles.handle_active[size]);
  return jsx(FormLayout, Object.assign({
    className: className,
    label: label,
    afterLabel: afterLabel,
    beforeLabel: beforeLabel,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    align: align,
    descriptionText: descriptionText,
    size: size,
    labelLayout: labelLayout,
    nonBoxInput: true
  }, {
    children: jsx("button", Object.assign({
      type: "button",
      id: id,
      name: name,
      className: toggleClasses.join(' '),
      onClick: onClick,
      disabled: disabled,
      onFocus: onFocus ? event => onFocus(event) : undefined,
      onBlur: handleBlurEvent,
      onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined
    }, props, {
      children: jsx("span", {
        "aria-hidden": "true",
        className: handleClasses.join(' ')
      })
    }))
  }));
}

export { Toggle as default };
