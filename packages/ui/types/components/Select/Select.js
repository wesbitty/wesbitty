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
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useEffect } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import { useFormContext } from '../Form/FormContext'
import styleHandler from '../../theme/handler'
export const ColLayout = (props) =>
  _jsx('div', Object.assign({ className: '' }, { children: props.children }))
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
      validation,
    } = _a,
    props = __rest(_a, [
      'autoComplete',
      'autofocus',
      'children',
      'className',
      'descriptionText',
      'disabled',
      'error',
      'icon',
      'id',
      'inputRef',
      'label',
      'afterLabel',
      'beforeLabel',
      'labelOptional',
      'layout',
      'name',
      'onChange',
      'onFocus',
      'onBlur',
      'placeholder',
      'required',
      'value',
      'defaultValue',
      'style',
      'size',
      'borderless',
      'validation',
    ])
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()
  if (values && !value) value = values[id]
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e)
    if (onBlur) onBlur(e)
  }
  if (!error) {
    if (errors && !error) error = errors[id || name]
    error = touched && touched[id || name] ? error : undefined
  }
  function onInputChange(e) {
    if (onChange) onChange(e)
    // update form
    if (formContextOnChange) formContextOnChange(e)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value))
  }
  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value))
  }, [])
  const __styles = styleHandler('select')
  let classesContainer = [__styles.container]
  if (className) classesContainer.push(className)
  let classes = [__styles.base]
  if (error) classes.push(__styles.variants.error)
  if (!error) classes.push(__styles.variants.standard)
  if (icon) classes.push(__styles.with_icon)
  if (size) classes.push(__styles.size[size])
  if (disabled) classes.push(__styles.disabled)
  return _jsx(
    FormLayout,
    Object.assign(
      {
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
        size: size,
      },
      {
        children: _jsxs(
          'div',
          Object.assign(
            { className: __styles.container },
            {
              children: [
                _jsx(
                  'select',
                  Object.assign(
                    {
                      id: id,
                      name: name,
                      autoComplete: autoComplete,
                      autoFocus: autofocus,
                      className: classes.join(' '),
                      onChange: onInputChange,
                      onFocus: onFocus ? (event) => onFocus(event) : undefined,
                      onBlur: handleBlurEvent,
                      ref: inputRef,
                      value: value,
                      disabled: disabled,
                      required: required,
                      placeholder: placeholder,
                    },
                    props,
                    { children: children }
                  )
                ),
                icon && _jsx(InputIconContainer, { icon: icon }),
                error &&
                  _jsx(
                    'div',
                    Object.assign(
                      { className: __styles.actions_container },
                      {
                        children: error && _jsx(InputErrorIcon, { size: size }),
                      }
                    )
                  ),
                _jsx(
                  'span',
                  Object.assign(
                    { className: __styles.chevron_container },
                    {
                      children: _jsx(
                        'svg',
                        Object.assign(
                          {
                            className: __styles.chevron,
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 20 20',
                            fill: 'currentColor',
                            'aria-hidden': 'true',
                          },
                          {
                            children: _jsx('path', {
                              fillRule: 'evenodd',
                              d: 'M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z',
                              clipRule: 'evenodd',
                            }),
                          }
                        )
                      ),
                    }
                  )
                ),
              ],
            }
          )
        ),
      }
    )
  )
}
export function Option({ value, children, selected }) {
  return _jsx(
    'option',
    Object.assign({ value: value, selected: selected }, { children: children })
  )
}
export function OptGroup({ label, children }) {
  return _jsx(
    'optgroup',
    Object.assign({ label: label }, { children: children })
  )
}
Select.Option = Option
Select.OptGroup = OptGroup
export default Select
