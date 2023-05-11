import { jsx } from 'react/jsx-runtime';
import 'react';
import '../../theme/default.js';
import styleHandler from '../../theme/handler.js';

function Link(_ref) {
  let {
    children,
    target = '_blank',
    href,
    className,
    onClick,
    style
  } = _ref;
  let __styles = styleHandler('typography');
  let classes = [__styles.link];
  if (className) {
    classes.push(className);
  }
  return jsx("a", Object.assign({
    onClick: onClick,
    className: classes.join(' '),
    href: href,
    target: target,
    rel: "noopener noreferrer",
    style: style
  }, {
    children: children
  }));
}

export { Link as default };
