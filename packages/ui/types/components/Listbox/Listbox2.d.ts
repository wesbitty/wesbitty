import React from 'react'
export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLButtonElement>, 'size'> {
  className?: string
  children: React.ReactNode
  descriptionText?: string
  error?: string
  icon?: any
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  value?: any
  reveal?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  defaultValue?: any
  borderless?: boolean
  validation?: (x: any) => void
  optionsWidth?: number
  onChange?: (x: any) => void
}
declare function Listbox({
  children,
  className,
  descriptionText,
  error,
  icon,
  id,
  name,
  label,
  labelOptional,
  layout,
  value,
  onChange,
  onFocus,
  onBlur,
  style,
  size,
  defaultValue,
  borderless,
  validation,
  disabled,
  optionsWidth,
}: Props): import('react/jsx-runtime').JSX.Element
declare namespace Listbox {
  var Option: typeof SelectOption
}
interface OptionProps {
  id?: string
  value: any
  label: string
  disabled?: boolean
  children?: any
  className?: string
  addOnBefore?: ({ active, selected }: any) => React.ReactNode
}
declare function SelectOption({
  id,
  value,
  label,
  disabled,
  children,
  className,
  addOnBefore,
}: OptionProps): import('react/jsx-runtime').JSX.Element
export default Listbox
