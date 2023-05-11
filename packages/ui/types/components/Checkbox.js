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
import { FormLayout } from '../lib/Layout/FormLayout'
import { CheckboxContext } from './Shared/Context/Checkbox'
import { useFormContext } from './Form/FormContext'
import styleHandler from '../theme/handler'
function Group({
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
  size = 'medium',
}) {
  const parentCallback = (e) => {
    if (onChange) onChange(e)
  }
  const __styles = styleHandler('checkbox')
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
        size: size,
      },
      {
        children: _jsx(
          CheckboxContext.Provider,
          Object.assign(
            { value: { parentCallback, parentSize: size } },
            {
              children: _jsx(
                'div',
                Object.assign(
                  { className: __styles.group },
                  {
                    children: options
                      ? options.map((option) => {
                          return _jsx(Checkbox, {
                            id: option.id,
                            value: option.value,
                            label: option.label,
                            beforeLabel: option.beforeLabel,
                            afterLabel: option.afterLabel,
                            checked: option.checked,
                            name: option.name,
                            description: option.description,
                          })
                        })
                      : children,
                  }
                )
              ),
            }
          )
        ),
      }
    )
  )
}
export function Checkbox(_a) {
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
      disabled = false,
    } = _a,
    props = __rest(_a, [
      'className',
      'id',
      'name',
      'label',
      'afterLabel',
      'beforeLabel',
      'description',
      'checked',
      'value',
      'onChange',
      'onFocus',
      'onBlur',
      'size',
      'disabled',
    ])
  const { formContextOnChange, values, handleBlur } = useFormContext()
  const __styles = styleHandler('checkbox')
  return _jsx(CheckboxContext.Consumer, {
    children: ({ parentCallback, parentSize }) => {
      // if id does not exist, use label
      const markupId = id
        ? id
        : name
        ? name
        : label
        ? label
            .toLowerCase()
            .replace(/^[^A-Z0-9]+/gi, '')
            .replace(/ /g, '-')
        : undefined
      // @ts-ignore
      size = parentSize ? parentSize : size
      // if name does not exist on Radio then use Context Name from Radio.Group
      // if that fails, use the id
      const markupName = name ? name : markupId
      // check if checkbox checked is true or false
      // if neither true or false the checkbox will rely on native control
      let active = checked !== null && checked !== void 0 ? checked : undefined
      // if (values && !value) value = values[id || name]
      let containerClasses = [__styles.container]
      function onInputChange(e) {
        // '`onChange` callback for parent component
        if (parentCallback) parentCallback(e)
        // '`onChange` callback for this component
        if (onChange) onChange(e)
        // update form
        if (formContextOnChange) formContextOnChange(e)
      }
      if (className) containerClasses.push(className)
      if (values && checked === undefined) active = values[id || name]
      function handleBlurEvent(e) {
        if (handleBlur) handleBlur(e)
        if (onBlur) onBlur(e)
      }
      return _jsxs(
        'div',
        Object.assign(
          { className: containerClasses.join(' ') },
          {
            children: [
              _jsx(
                'input',
                Object.assign(
                  {
                    id: markupId,
                    name: markupName,
                    type: 'checkbox',
                    // className={CheckboxStyles['wsb-checkbox']}
                    className: [__styles.base, __styles.size[size]].join(' '),
                    onChange: onInputChange,
                    onFocus: onFocus ? (event) => onFocus(event) : undefined,
                    onBlur: handleBlurEvent,
                    checked: active,
                    value: value ? value : markupId,
                    disabled: disabled,
                  },
                  props
                )
              ),
              _jsxs(
                'label',
                Object.assign(
                  {
                    className: [__styles.label.base, __styles.label[size]].join(
                      ' '
                    ),
                    htmlFor: markupId,
                  },
                  {
                    children: [
                      _jsxs('span', {
                        children: [
                          beforeLabel &&
                            _jsx(
                              'span',
                              Object.assign(
                                {
                                  className: [
                                    __styles.label_before.base,
                                    __styles.label_before[size],
                                  ].join(' '),
                                },
                                { children: beforeLabel }
                              )
                            ),
                          label,
                          afterLabel &&
                            _jsx(
                              'span',
                              Object.assign(
                                {
                                  className: [
                                    __styles.label_after.base,
                                    __styles.label_after[size],
                                  ].join(' '),
                                },
                                { children: afterLabel }
                              )
                            ),
                        ],
                      }),
                      description &&
                        _jsx(
                          'p',
                          Object.assign(
                            {
                              className: [
                                __styles.description.base,
                                __styles.description[size],
                              ].join(' '),
                            },
                            { children: description }
                          )
                        ),
                    ],
                  }
                )
              ),
            ],
          }
        )
      )
    },
  })
}
Checkbox.Group = Group
export default Checkbox
