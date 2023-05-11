import React from 'react'
type Props = {
  source?: string
  style?: React.CSSProperties
  className?: string
  type?: 'rounded' | 'circle'
  alt?: string
  responsive?: boolean
}
export default function Image({
  source,
  style,
  className,
  type,
  alt,
  responsive,
}: Props): import('react/jsx-runtime').JSX.Element
export {}
