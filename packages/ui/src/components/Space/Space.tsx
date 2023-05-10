import React from 'react'
import SpaceStyles from './style'

function Space({
  direction,
  size = 2,
  className,
  block,
  style,
  minus,
  children,
}: any) {
  const classes = []
  classes.push(direction === 'vertical' ? 'style-space-col' : 'style-space-row')
  classes.push(
    SpaceStyles[
      'style-' +
        (minus ? 'minus-' : '') +
        'space-' +
        (direction === 'vertical' ? 'y' : 'x') +
        '-' +
        size
    ]
  )
  if (block) {
    classes.push(SpaceStyles['style-space--block'])
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

export default Space
