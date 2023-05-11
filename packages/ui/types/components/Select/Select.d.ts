import React from 'react'
interface OptionProps {
  value: string
  children: React.ReactNode
  selected?: boolean
}
interface OptGroupProps {
  label: string
  children: React.ReactNode
}
export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  autofocus?: boolean
  children: React.ReactNode
  descriptionText?: string
  error?: string
  icon?: any
  inputRef?: string
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  reveal?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  borderless?: boolean
  validation?: (x: any) => void
}
export declare const ColLayout: (
  props: any
) => import('react/jsx-runtime').JSX.Element
declare function Select({
  autoComplete,
  autofocus,
  children,
  className,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  inputRef,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  required,
  value,
  defaultValue,
  style,
  size,
  borderless,
  validation,
  ...props
}: Props): import('react/jsx-runtime').JSX.Element
declare namespace Select {
  var Option: typeof import('./Select').Option
  var OptGroup: typeof import('./Select').OptGroup
}
export declare function Option({
  value,
  children,
  selected,
}: OptionProps): import('react/jsx-runtime').JSX.Element
export declare function OptGroup({
  label,
  children,
}: OptGroupProps): import('react/jsx-runtime').JSX.Element
export default Select
