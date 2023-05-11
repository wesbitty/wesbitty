import React from 'react'
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
declare function Toggle({
  disabled,
  id,
  name,
  layout,
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
  align,
  size,
  validation,
  labelLayout,
  ...props
}: Props): import('react/jsx-runtime').JSX.Element
export default Toggle
