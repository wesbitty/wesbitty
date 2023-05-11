'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('../../theme/default.js');
var handler = require('../../theme/handler.js');

function Link(_ref) {
  let {
    children,
    target = '_blank',
    href,
    className,
    onClick,
    style
  } = _ref;
  let __styles = handler["default"]('typography');
  let classes = [__styles.link];
  if (className) {
    classes.push(className);
  }
  return jsxRuntime.jsx("a", Object.assign({
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

exports["default"] = Link;
