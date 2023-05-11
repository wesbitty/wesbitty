import { jsx } from 'react/jsx-runtime';
import styleHandler from '../../theme/handler.js';

function Title(_ref) {
  let {
    className,
    level = 1,
    children,
    style
  } = _ref;
  let __styles = styleHandler('typography');
  let classes = [__styles.title.base];
  if (className) {
    classes.push(className);
  }
  if (level) {
    classes.push(__styles.title.level[level]);
  }
  const CustomTag = `h${level}`;
  return jsx(CustomTag, Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
}

export { Title as default };
