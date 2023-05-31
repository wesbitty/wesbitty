import { styleHandler } from '../theme/handler'
import React from 'react'

export function Space({
  direction,
  size = 2,
  className,
  block,
  style,
  minus,
  children,
}: any) {
  const __styles = styleHandler('space')
  const classes = [__styles.base]
  classes.push(direction === 'vertical' ? __styles.col : __styles.row)
  classes.push(
    __styles[
      'wsb-' +
        (minus ? 'minus-' : '') +
        'space-' +
        (direction === 'vertical' ? 'y' : 'x') +
        '-' +
        size
    ]
  )
  if (block) {
    classes.push(__styles.block)
  }
  if (className) {
    classes.push(className)
  }
  return (
    <div className={classes.join(' ')} style={style}>
      {children}
    </div>
  )
}
