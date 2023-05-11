import { jsx as _jsx } from 'react/jsx-runtime'
import styleHandler from '../theme/handler'
export function Divider({
  children,
  className,
  light = false,
  orientation = 'center',
  style,
  type = 'horizontal',
}) {
  let __styles = styleHandler('divider')
  let classes = [type === 'horizontal' ? __styles.base : __styles.vertical]
  if (light) classes.push(__styles.light)
  if (children) {
    classes.push(__styles.orientation[orientation])
  } else if (!children && type === 'horizontal') {
    classes.push(__styles.no_text)
  }
  if (className) classes.push(className)
  return _jsx(
    'div',
    Object.assign(
      { className: classes.join(' '), role: 'seperator', style: style },
      {
        children:
          children &&
          _jsx(
            'span',
            Object.assign({ className: __styles.span }, { children: children })
          ),
      }
    )
  )
}
