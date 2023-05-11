import { jsx as _jsx } from 'react/jsx-runtime'
import Title from './Title'
import Text from './Text'
import Link from './Link'
function Typography({ children, className, tag = 'div', style }) {
  // let classes = [
  //   TypographyStyles['wsb-typography'],
  //   TypographyStyles['wsb-typography-container'],
  // ]
  // if (className) {
  //   classes.push(className)
  // }
  let CustomTag = `${tag}`
  return _jsx(
    CustomTag,
    Object.assign({ style: style }, { children: children })
  )
}
Typography.Title = Title
Typography.Text = Text
Typography.Link = Link
export default Typography
