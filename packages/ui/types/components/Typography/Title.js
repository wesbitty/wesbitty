import { jsx as _jsx } from 'react/jsx-runtime'
import styleHandler from '../../theme/handler'
function Title({ className, level = 1, children, style }) {
  let __styles = styleHandler('typography')
  let classes = [__styles.title.base]
  if (className) {
    classes.push(className)
  }
  if (level) {
    classes.push(__styles.title.level[level])
  }
  const CustomTag = `h${level}`
  return _jsx(
    CustomTag,
    Object.assign(
      { style: style, className: classes.join(' ') },
      { children: children }
    )
  )
}
export default Title
