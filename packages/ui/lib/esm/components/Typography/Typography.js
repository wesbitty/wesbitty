import { jsx } from 'react/jsx-runtime';
import Title from './Title.js';
import Text from './Text.js';
import Link from './Link.js';

function Typography(_ref) {
  let {
    children,
    className,
    tag = 'div',
    style
  } = _ref;
  // let classes = [
  //   TypographyStyles['wsb-typography'],
  //   TypographyStyles['wsb-typography-container'],
  // ]
  // if (className) {
  //   classes.push(className)
  // }
  let CustomTag = `${tag}`;
  return jsx(CustomTag, Object.assign({
    style: style
  }, {
    children: children
  }));
}
Typography.Title = Title;
Typography.Text = Text;
Typography.Link = Link;

export { Typography as default };
