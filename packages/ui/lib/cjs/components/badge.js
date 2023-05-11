'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var handler = require('../theme/handler.js');

function Badge(_ref) {
  let {
    color = 'brand',
    children,
    size,
    dot,
    className
  } = _ref;
  const __styles = handler["default"]('badge');
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
  return jsxRuntime.jsxs("span", Object.assign({
    className: classes.join(' ')
  }, {
    children: [dot && jsxRuntime.jsx("svg", Object.assign({
      className: `${__styles.dot} ${__styles.color[color]}`,
      fill: "currentColor",
      viewBox: "0 0 8 8"
    }, {
      children: jsxRuntime.jsx("circle", {
        cx: "4",
        cy: "4",
        r: "3"
      })
    })), children]
  }));
}

exports.Badge = Badge;
