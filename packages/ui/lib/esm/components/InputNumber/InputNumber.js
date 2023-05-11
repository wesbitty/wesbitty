import { __rest } from '../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import InputErrorIcon from '../../lib/Layout/InputErrorIcon.js';
import InputIconContainer from '../../lib/Layout/InputIconContainer.js';
import { useFormContext } from '../Form/FormContext.js';
import styleHandler from '../../theme/handler.js';

function InputNumber(_a) {
  var {
      defaultValue,
      descriptionText,
      error,
      icon,
      inputRef,
      label,
      afterLabel,
      beforeLabel,
      labelOptional,
      layout,
      value = undefined,
      actions,
      size = 'medium',
      validation,
      id = '',
      name = ''
    } = _a,
    props = __rest(_a, ["defaultValue", "descriptionText", "error", "icon", "inputRef", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "value", "actions", "size", "validation", "id", "name"]);
  const __styles = styleHandler('inputNumber');
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = useFormContext();
  if (values && !value) value = values[id || name];
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e);
    if (props.onBlur) props.onBlur(e);
  }
  if (!error) {
    if (errors && !error) error = errors[id || name];
    error = touched && touched[id || name] ? error : undefined;
  }
  function onInputChange(e) {
    if (props.onChange) props.onChange(e);
    // update form
    if (formContextOnChange) formContextOnChange(e);
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value));
  }
  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value));
  }, []);
  // const inputClasses = [InputNumberStyles['wsb-inputnumber']]
  let inputClasses = [__styles.base];
  // const iconUpClasses = [
  //   InputNumberStyles['wsb-inputnumber-button'],
  //   InputNumberStyles['wsb-inputnumber-button-up'],
  // ]
  // const inputRefCurrent = inputRef
  //   ? inputRef
  //   : React.createRef<HTMLInputElement>()
  // const iconDownClasses = [
  //   InputNumberStyles['wsb-inputnumber-button'],
  //   InputNumberStyles['wsb-inputnumber-button-down'],
  // ]
  // const iconNavClasses = [InputNumberStyles['wsb-inputnumber-nav']]
  // if (size) {
  // inputClasses.push(InputNumberStyles[`wsb-inputnumber--${size}`])
  // iconNavClasses.push(InputNumberStyles[`wsb-inputnumber-nav--${size}`])
  // }
  if (error) inputClasses.push(__styles.variants.error);
  if (!error) inputClasses.push(__styles.variants.standard);
  if (icon) inputClasses.push(__styles.with_icon);
  if (size) inputClasses.push(__styles.size[size]);
  if (props.disabled) inputClasses.push(__styles.disabled);
  // if (borderless)
  //   inputClasses.push(InputNumberStyles['wsb-inputnumber--borderless'])
  // const onClickChevronUp = () => {
  //   inputRefCurrent.current?.stepUp()
  //   if (onChange) {
  //     inputRefCurrent.current?.dispatchEvent(
  //       new InputEvent('change', {
  //         view: window,
  //         bubbles: true,
  //         cancelable: false,
  //       })
  //     )
  //   }
  // }
  // const onClickChevronDown = () => {
  //   inputRefCurrent.current?.stepDown()
  //   if (onChange) {
  //     inputRefCurrent.current?.dispatchEvent(
  //       new InputEvent('change', {
  //         view: window,
  //         bubbles: true,
  //         cancelable: false,
  //       })
  //     )
  //   }
  // }
  return jsx("div", Object.assign({
    className: props.className
  }, {
    children: jsx(FormLayout, Object.assign({
      label: label,
      afterLabel: afterLabel,
      beforeLabel: beforeLabel,
      labelOptional: labelOptional,
      layout: layout,
      id: id,
      error: error,
      descriptionText: descriptionText,
      style: props.style,
      size: size
    }, {
      children: jsxs("div", Object.assign({
        className: __styles.container
      }, {
        children: [jsx("input", Object.assign({
          id: id,
          name: name,
          onChange: onInputChange,
          onBlur: handleBlurEvent,
          type: 'number',
          ref: inputRef,
          value: value,
          className: inputClasses.join(' ')
        }, props)), icon && jsx(InputIconContainer, {
          icon: icon
        }), error || actions ? jsxs("div", Object.assign({
          className: __styles.actions_container
        }, {
          children: [error && jsx(InputErrorIcon, {
            size: size
          }), actions && actions]
        })) : null]
      }))
    }))
  }));
}

export { InputNumber as default };
