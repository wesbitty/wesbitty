import { jsx as _jsx } from 'react/jsx-runtime'
import { styleHandler } from '../../theme'
function Text({
  className,
  children,
  style,
  type,
  disabled,
  mark,
  code,
  keyboard,
  underline,
  strikethrough,
  strong,
  small,
}) {
  let __styles = styleHandler('typography')
  let classes = [__styles.text.base]
  if (className) {
    classes.push(className)
  }
  if (type) {
    classes.push(__styles.text.type[type])
  }
  if (disabled) {
    classes.push(__styles.text.disabled)
  }
  if (underline) {
    classes.push(__styles.text.underline)
  }
  if (strikethrough) {
    classes.push(__styles.text.strikethrough)
  }
  if (small) {
    classes.push(__styles.text.small)
  }
  if (code)
    return _jsx(
      'code',
      Object.assign(
        { style: style, className: classes.join(' ') },
        { children: children }
      )
    )
  if (mark)
    return _jsx(
      'mark',
      Object.assign(
        { style: style, className: classes.join(' ') },
        { children: children }
      )
    )
  if (keyboard)
    return _jsx(
      'kbd',
      Object.assign(
        { style: style, className: classes.join(' ') },
        { children: children }
      )
    )
  if (strong)
    return _jsx(
      'strong',
      Object.assign(
        { style: style, className: classes.join(' ') },
        { children: children }
      )
    )
  return _jsx(
    'span',
    Object.assign(
      { style: style, className: classes.join(' ') },
      { children: children }
    )
  )
}
export default Text
