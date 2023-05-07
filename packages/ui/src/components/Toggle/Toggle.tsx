import React, { useEffect, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import { useFormContext } from '../Form/FormContext'

import defaultTheme from '../../theme/globalTheme'
import styleHandler from '../../theme/handler'

interface Props extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'size'> {
  name?: string
  disabled?: boolean
  layout?: 'horizontal' | 'vertical' | 'flex'
  error?: string
  descriptionText?: string
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  className?: any
  defaultChecked?: boolean
  checked?: boolean
  align?: 'right' | 'left'
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  labelLayout?: 'horizontal' | 'vertical'
  validation?: (x: any) => void
}

function Toggle({
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
  labelLayout,
  ...props
}: Props) {
  const __styles = styleHandler('toggle')

  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()

  if (values && !checked) checked = values[id || name]

  const [intChecked, setIntChecked] = useState(
    (defaultChecked || checked) ?? false
  )

  // check if toggle checked is true or false
  // if neither true or false the toggle will rely on component state internally
  const active = checked ?? intChecked

  useEffect(() => {
    setIntChecked(active)
  }, [])

  function handleBlurEvent(e: React.FocusEvent<HTMLButtonElement>) {
    if (handleBlur) handleBlur(e)
    if (onBlur) onBlur(e)
  }

  if (!error) {
    if (errors && !error) error = errors[id || name]
    error = touched && touched[id || name] ? error : undefined
  }

  function onClick() {
    // '`onChange` callback for this component

    // @ts-ignore // issue with conflicting input/button tag being used
    if (onChange) onChange(!active)

    setIntChecked(!intChecked)

    /*
     * Create change event for formik
     * formik expects an input change event
     */
    let event: any = {}
    event.target = {
      type: 'checkbox',
      name: name,
      id: id,
      value: !active,
      checked: !active,
      // outerHTML: undefined,
      // options: undefined,
      // multiple: undefined,
    }

    // update form
    if (formContextOnChange) formContextOnChange(event)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(!intChecked))
  }

  let toggleClasses = [__styles.base, __styles.handle_container[size]]
  if (active) toggleClasses.push(__styles.active)

  let handleClasses = [__styles.handle['base'], __styles.handle[size]]
  if (active) handleClasses.push(__styles.handle_active[size])

  return (
    <FormLayout
      className={className}
      label={label}
      afterLabel={afterLabel}
      beforeLabel={beforeLabel}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      align={align}
      descriptionText={descriptionText}
      size={size}
      labelLayout={labelLayout}
      nonBoxInput
    >
      <button
        type="button"
        id={id}
        name={name}
        className={toggleClasses.join(' ')}
        onClick={onClick}
        disabled={disabled}
        onFocus={onFocus ? (event) => onFocus(event) : undefined}
        onBlur={handleBlurEvent}
        onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
        {...props}
      >
        <span aria-hidden="true" className={handleClasses.join(' ')}></span>
      </button>
    </FormLayout>
  )
}

export default Toggle
