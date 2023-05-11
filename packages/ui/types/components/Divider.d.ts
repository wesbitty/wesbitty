import React from 'react'
interface Props {
  children?: React.ReactNode
  className?: string
  light?: boolean
  orientation?: 'left' | 'right' | 'center'
  style?: React.CSSProperties
  type?: 'vertical' | 'horizontal'
}
export declare function Divider({
  children,
  className,
  light,
  orientation,
  style,
  type,
}: Props): import('react/jsx-runtime').JSX.Element
export {}
