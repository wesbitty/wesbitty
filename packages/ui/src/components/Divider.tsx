import { styleHandler } from '../theme/handler'
import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
  light?: boolean
  orientation?: 'left' | 'right' | 'center'
  style?: React.CSSProperties
  type?: 'vertical' | 'horizontal'
}

export function Divider({
  children,
  className,
  light = false,
  orientation = 'center',
  style,
  type = 'horizontal',
}: Props) {
  let __styles = styleHandler('divider')

  let classes = [type === 'horizontal' ? __styles.base : __styles.vertical]
  if (light) classes.push(__styles.light)

  if (children) {
    classes.push(__styles.orientation[orientation])
  } else if (!children && type === 'horizontal') {
    classes.push(__styles.no_text)
  }

  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')} role="seperator" style={style}>
      {children && <span className={__styles.span}>{children}</span>}
    </div>
  )
}
