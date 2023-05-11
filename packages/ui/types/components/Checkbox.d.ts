import React from 'react'
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  afterLabel?: string
  beforeLabel?: string
  description?: string
  label?: string
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}
interface GroupProps {
  id?: string
  layout?: 'horizontal' | 'vertical'
  error?: any
  descriptionText?: any
  label?: any
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: any
  name?: any
  value?: any
  className?: string
  children?: React.ReactNode
  options?: Array<InputProps>
  defaultValue?: string
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}
export declare function Checkbox({
  className,
  id,
  name,
  label,
  afterLabel,
  beforeLabel,
  description,
  checked,
  value,
  onChange,
  onFocus,
  onBlur,
  size,
  disabled,
  ...props
}: InputProps): import('react/jsx-runtime').JSX.Element
export declare namespace Checkbox {
  var Group: ({
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
    options,
    onChange,
    size,
  }: GroupProps) => import('react/jsx-runtime').JSX.Element
}
export default Checkbox
