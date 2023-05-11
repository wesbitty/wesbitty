'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Title = require('./Title.js');
var Text = require('./Text.js');
var Link = require('./Link.js');

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
  return jsxRuntime.jsx(CustomTag, Object.assign({
    style: style
  }, {
    children: children
  }));
}
Typography.Title = Title["default"];
Typography.Text = Text["default"];
Typography.Link = Link["default"];

exports["default"] = Typography;
