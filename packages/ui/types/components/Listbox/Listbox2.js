import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useRef, useState } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import { IconCheck } from '../Icon/icons/IconCheck'
import { useFormContext } from '../Form/FormContext'
import { flatten } from 'lodash'
import { SelectContext } from './SelectContext'
import styleHandler from '../../theme/handler'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Listbox({
  children,
  className,
  descriptionText,
  error,
  icon,
  id = '',
  name = '',
  label,
  labelOptional,
  layout,
  value = undefined,
  onChange,
  onFocus,
  onBlur,
  style,
  size = 'medium',
  defaultValue,
  borderless = false,
  validation,
  disabled,
  optionsWidth,
}) {
  const [selected, setSelected] = useState(undefined)
  const [selectedNode, setSelectedNode] = useState({})
  const __styles = styleHandler('listbox')
  const triggerRef = useRef(null)
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()
  if (values && !value) {
    defaultValue = values[id || name]
  }
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e)
    if (onBlur) onBlur(e)
  }
  if (!error) {
    if (errors && !error) error = errors[id || name]
    error = touched && touched[id || name] ? error : undefined
  }
  useEffect(() => {
    if (value) {
      setSelected(value)
    }
  }, [value])
  useEffect(() => {
    // handle listbox options width size
    function handleResize() {
      // Set window width/height to state
      var _a
      document.documentElement.style.setProperty(
        '--width-listbox',
        `${
          optionsWidth
            ? optionsWidth
            : (_a = triggerRef.current) === null || _a === void 0
            ? void 0
            : _a.offsetWidth
        }px`
      )
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    const data = children
    const content = flatten(data)
    function findNode(_value) {
      return content.find((node) => node.props.value === _value)
    }
    /*
     * value prop overrides everything
     */
    if (value) {
      setSelected(value)
      const node = findNode(value)
      setSelectedNode(
        (node === null || node === void 0 ? void 0 : node.props)
          ? node.props
          : undefined
      )
      return
    }
    /*
     * if no value prop, then use selected state
     */
    if (selected) {
      const node = findNode(selected)
      setSelectedNode(
        (node === null || node === void 0 ? void 0 : node.props)
          ? node.props
          : undefined
      )
      return
    } else if (defaultValue) {
      setSelected(defaultValue)
      const node = findNode(selected)
      setSelectedNode(
        (node === null || node === void 0 ? void 0 : node.props)
          ? node.props
          : undefined
      )
      return
    } else {
      /*
       * if no selected value (including a `defaultvalue`), then use first child
       */
      setSelectedNode(content[0].props)
      return
    }
  }, [selected])
  function handleOnChange(value) {
    if (onChange) onChange(value)
    setSelected(value)
    /*
     * Create change event for formik
     * formik expects an input change event
     */
    let event = {}
    event.target = {
      type: 'select',
      name: name,
      id: id,
      value: value,
      checked: undefined,
      // outerHTML: undefined,
      // options: undefined,
      // multiple: undefined,
    }
    // update form
    // Create a new 'change' event
    if (formContextOnChange) formContextOnChange(event)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(value))
  }
  let selectClasses = [__styles.container, __styles.base]
  if (error) selectClasses.push(__styles.variants.error)
  if (!error) selectClasses.push(__styles.variants.standard)
  // if (icon) selectClasses.push(SelectStyles['wsb-listbox--with-icon'])
  if (icon) selectClasses.push(__styles.with_icon)
  // if (size) selectClasses.push(SelectStyles[`wsb-listbox--${size}`])
  if (size) selectClasses.push(__styles.size[size])
  // if (borderless) selectClasses.push(SelectStyles['wsb-listbox--borderless'])
  if (disabled) selectClasses.push(__styles.disabled)
  return _jsx(
    FormLayout,
    Object.assign(
      {
        label: label,
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
        children: _jsxs(DropdownMenuPrimitive.Root, {
          children: [
            _jsx(
              DropdownMenuPrimitive.Trigger,
              Object.assign(
                { asChild: true, disabled: disabled },
                {
                  children: _jsxs(
                    'button',
                    Object.assign(
                      {
                        ref: triggerRef,
                        className: selectClasses.join(' '),
                        onBlur: handleBlurEvent,
                        onFocus: onFocus,
                        name: name,
                        id: id,
                      },
                      {
                        children: [
                          _jsxs(
                            'span',
                            Object.assign(
                              { className: __styles.addOnBefore },
                              {
                                children: [
                                  icon &&
                                    _jsx(InputIconContainer, { icon: icon }),
                                  (selectedNode === null ||
                                  selectedNode === void 0
                                    ? void 0
                                    : selectedNode.addOnBefore) &&
                                    _jsx(selectedNode.addOnBefore, {}),
                                  _jsx(
                                    'span',
                                    Object.assign(
                                      { className: __styles.label },
                                      {
                                        children:
                                          selectedNode === null ||
                                          selectedNode === void 0
                                            ? void 0
                                            : selectedNode.label,
                                      }
                                    )
                                  ),
                                ],
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
                          error &&
                            _jsx(
                              'div',
                              Object.assign(
                                { className: __styles.actions_container },
                                {
                                  children:
                                    error &&
                                    _jsx(InputErrorIcon, { size: size }),
                                }
                              )
                            ),
                        ],
                      }
                    )
                  ),
                }
              )
            ),
            _jsx(
              DropdownMenuPrimitive.Content,
              Object.assign(
                {
                  sideOffset: 6,
                  loop: true,
                  side: 'bottom',
                  align: 'center',
                  className: __styles.options_container,
                },
                {
                  children: _jsx('div', {
                    children: _jsx(
                      SelectContext.Provider,
                      Object.assign(
                        { value: { onChange: handleOnChange, selected } },
                        { children: children }
                      )
                    ),
                  }),
                }
              )
            ),
          ],
        }),
      }
    )
  )
}
function SelectOption({
  id,
  value,
  label,
  disabled = false,
  children,
  className = '',
  addOnBefore,
}) {
  const __styles = styleHandler('listbox')
  return _jsx(SelectContext.Consumer, {
    children: ({ onChange, selected }) => {
      const active = selected === value ? true : false
      return _jsxs(
        DropdownMenuPrimitive.Item,
        Object.assign(
          {
            className: `${classNames(
              __styles.option,
              active ? __styles.option_active : ' ',
              disabled ? __styles.option_disabled : ' '
            )} ${className}`,
            onSelect: () => (!disabled ? onChange(value) : {}),
          },
          {
            children: [
              _jsxs(
                'div',
                Object.assign(
                  { className: __styles.option_inner },
                  {
                    children: [
                      addOnBefore && addOnBefore({ active, selected }),
                      _jsx('span', {
                        children:
                          typeof children === 'function'
                            ? children({ active, selected })
                            : children,
                      }),
                    ],
                  }
                )
              ),
              active
                ? _jsx(
                    'span',
                    Object.assign(
                      {
                        className: classNames(
                          __styles.option_check,
                          active ? __styles.option_check_active : ''
                        ),
                      },
                      {
                        children: _jsx(IconCheck, {
                          className: __styles.option_check_icon,
                          'aria-hidden': 'true',
                        }),
                      }
                    )
                  )
                : null,
            ],
          }
        ),
        id
      )
    },
  })
}
Listbox.Option = SelectOption
export default Listbox
