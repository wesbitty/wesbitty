import { jsx } from 'react/jsx-runtime';
import styleHandler from '../theme/handler.js';

function Space(_ref) {
  let {
    direction,
    size = 2,
    className,
    block,
    style,
    minus,
    children
  } = _ref;
  const __styles = styleHandler('space');
  const classes = [__styles.base];
  classes.push(direction === 'vertical' ? __styles.col : __styles.row);
  classes.push(__styles['wsb-' + (minus ? 'minus-' : '') + 'space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size]);
  if (block) {
    classes.push(__styles.block);
  }
  if (className) {
    classes.push(className);
  }
  return jsx("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: children
  }));
}

export { Space };
