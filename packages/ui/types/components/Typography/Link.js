import { jsx as _jsx } from 'react/jsx-runtime'
import { styleHandler } from '../../theme'
function Link({
  children,
  target = '_blank',
  href,
  className,
  onClick,
  style,
}) {
  let __styles = styleHandler('typography')
  let classes = [__styles.link]
  if (className) {
    classes.push(className)
  }
  return _jsx(
    'a',
    Object.assign(
      {
        onClick: onClick,
        className: classes.join(' '),
        href: href,
        target: target,
        rel: 'noopener noreferrer',
        style: style,
      },
      { children: children }
    )
  )
}
export default Link
