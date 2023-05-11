'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var handler = require('../../theme/handler.js');

function Title(_ref) {
  let {
    className,
    level = 1,
    children,
    style
  } = _ref;
  let __styles = handler["default"]('typography');
  let classes = [__styles.title.base];
  if (className) {
    classes.push(className);
  }
  if (level) {
    classes.push(__styles.title.level[level]);
  }
  const CustomTag = `h${level}`;
  return jsxRuntime.jsx(CustomTag, Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
}

exports["default"] = Title;
