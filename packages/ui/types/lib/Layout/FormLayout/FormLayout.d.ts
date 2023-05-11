import React from 'react'
type Props = {
  align?: 'left' | 'right'
  children?: any
  className?: string
  descriptionText?: string | React.ReactNode
  error?: string | React.ReactNode
  id?: string
  label?: string | React.ReactNode
  labelOptional?: string | React.ReactNode
  layout?: 'horizontal' | 'vertical' | 'flex'
  style?: React.CSSProperties
  responsive?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  beforeLabel?: string
  afterLabel?: string
  nonBoxInput?: boolean
  labelLayout?: 'horizontal' | 'vertical'
}
export declare function FormLayout({
  align,
  children,
  className,
  descriptionText,
  error,
  id,
  label,
  labelOptional,
  layout,
  style,
  labelLayout,
  responsive,
  size,
  beforeLabel,
  afterLabel,
  nonBoxInput,
}: Props): import('react/jsx-runtime').JSX.Element
export {}
