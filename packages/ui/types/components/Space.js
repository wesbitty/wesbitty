import { jsx as _jsx } from 'react/jsx-runtime'
import styleHandler from '../theme/handler'
export function Space({
  direction,
  size = 2,
  className,
  block,
  style,
  minus,
  children,
}) {
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
  return _jsx(
    'div',
    Object.assign(
      { className: classes.join(' '), style: style },
      { children: children }
    )
  )
}
