import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useEffect, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import { RadioContext } from './RadioContext'
import { useFormContext } from '../Form/FormContext'
import styleHandler from '../../theme/handler'
import randomIdGenerator from '../../utils/generateUID'
function RadioGroup({
  id,
  layout,
  error,
  descriptionText,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  children,
  className,
  type = 'list',
  options,
  value,
  name,
  onChange,
  size = 'medium',
  validation,
  groupClassName,
  labelsLayout = 'vertical',
}) {
  const [activeId, setActiveId] = useState('')
  const __styles = styleHandler('radio')
  const {
    formContextOnChange,
    values,
    errors,
    // handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()
  if (values && !value) value = values[id || name]
  // console.log('errors in. radio group', errors)
  // console.log('values in radio group', values)
  if (!error) {
    if (errors && !error) error = errors[id || name]
    error = touched && touched[id || name] ? error : undefined
  }
  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value))
  }, [])
  useEffect(() => {
    setActiveId(value)
  }, [value])
  function parentCallback(e) {
    if (onChange) onChange(e)
    // update form
    if (formContextOnChange) {
      formContextOnChange(e)
    }
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value))
    setActiveId(e.target.id)
  }
  return _jsx(
    'fieldset',
    Object.assign(
      { name: name, className: className },
      {
        children: _jsx(
          FormLayout,
          Object.assign(
            {
              nonBoxInput: true,
              label: label,
              afterLabel: afterLabel,
              beforeLabel: beforeLabel,
              labelOptional: labelOptional,
              layout: layout,
              id: id,
              error: error,
              descriptionText: descriptionText,
              size: size,
              labelLayout: labelsLayout,
            },
            {
              children: _jsx(
                'div',
                Object.assign(
                  {
                    className: groupClassName || __styles.variants[type].group,
                  },
                  {
                    children: _jsx(
                      RadioContext.Provider,
                      Object.assign(
                        {
                          value: {
                            parentCallback,
                            type,
                            name,
                            activeId,
                            parentSize: size,
                          },
                        },
                        {
                          children: options
                            ? options.map((option) => {
                                return _jsx(Radio, {
                                  id: option.id,
                                  label: option.label,
                                  beforeLabel: option.beforeLabel,
                                  afterLabel: option.afterLabel,
                                  value: option.value,
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
        ),
      }
    )
  )
}
function Radio({
  id = randomIdGenerator(),
  disabled,
  value,
  label,
  afterLabel,
  beforeLabel,
  description,
  name,
  checked,
  onChange,
  onFocus,
  onBlur,
  hidden = false,
  size = 'medium',
  align = 'vertical',
  optionalLabel,
  addOnBefore,
}) {
  const __styles = styleHandler('radio')
  const inputName = name
  const { handleBlur } = useFormContext()
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e)
    if (onBlur) onBlur(e)
  }
  return _jsx(RadioContext.Consumer, {
    children: ({ parentCallback, type, name, activeId, parentSize }) => {
      // if id does not exist, use label
      const markupId = id
      // if name does not exist on Radio then use Context Name from Radio.Group
      const markupName = name || inputName
      // console.log('markupName', markupName)
      // @ts-ignore
      size = parentSize || size
      // check if radio id is via parent component
      // then check if radio checked prop is true or false
      // if no boolean exists the checkbox will rely on native control
      const active =
        activeId === markupId
          ? true
          : checked
          ? true
          : checked === false
          ? false
          : undefined
      let classes = [
        __styles.variants[type].container.base,
        // __styles.variants[type].container.align[align],
        type === 'list' &&
          !hidden &&
          __styles.variants[type].container.size[size],
      ]
      classes.push(__styles.variants[type].base)
      classes.push(__styles.variants[type].size[size])
      if (active) {
        classes.push(__styles.variants[type].active)
      } else {
        classes.push(__styles.variants[type].inactive)
      }
      if (disabled) {
        classes.push(__styles.disabled)
      }
      if (type !== 'list') hidden = true
      function onInputChange(e) {
        // '`onChange` callback for parent component
        if (parentCallback) {
          parentCallback(e)
        }
        // '`onChange` callback for this component
        if (onChange) onChange(e)
      }
      return _jsxs(
        'label',
        Object.assign(
          { htmlFor: markupId, className: classes.join(' ') },
          {
            children: [
              _jsx('input', {
                id: markupId,
                name: markupName,
                type: 'radio',
                className: [
                  __styles.base,
                  __styles.size[size],
                  hidden && __styles.hidden,
                  __styles.variants[type].radio_offset,
                  '',
                ].join(' '),
                checked: active,
                disabled: disabled,
                value: value ? value : markupId,
                onChange: (e) => onInputChange(e),
                onBlur: handleBlurEvent,
                onFocus: onFocus ? (event) => onFocus(event) : undefined,
              }),
              addOnBefore,
              _jsxs(
                'div',
                Object.assign(
                  {
                    className: [
                      __styles.label.base,
                      __styles.label[size],
                      __styles.variants[type].container.align[align],
                    ].join(' '),
                  },
                  {
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
                      _jsx('span', { children: label }),
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
              optionalLabel &&
                _jsx(
                  'div',
                  Object.assign(
                    {
                      className: [
                        __styles.optionalLabel.base,
                        __styles.optionalLabel[size],
                      ].join(' '),
                    },
                    { children: optionalLabel }
                  )
                ),
            ],
          }
        )
      )
    },
  })
}
Radio.Group = RadioGroup
export default Radio
