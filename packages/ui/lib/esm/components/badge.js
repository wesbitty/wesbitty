import { jsxs, jsx } from 'react/jsx-runtime';
import styleHandler from '../theme/handler.js';

function Badge(_ref) {
  let {
    color = 'brand',
    children,
    size,
    dot,
    className
  } = _ref;
  const __styles = styleHandler('badge');
  let classes = [__styles.base];
  if (color) {
    classes.push(__styles.color[color]);
  }
  if (size === 'large') {
    classes.push(__styles.size.large);
  }
  if (className) {
    classes.push(className);
  }
  return jsxs("span", Object.assign({
    className: classes.join(' ')
  }, {
    children: [dot && jsx("svg", Object.assign({
      className: `${__styles.dot} ${__styles.color[color]}`,
      fill: "currentColor",
      viewBox: "0 0 8 8"
    }, {
      children: jsx("circle", {
        cx: "4",
        cy: "4",
        r: "3"
      })
    })), children]
  }));
}

export { Badge };
