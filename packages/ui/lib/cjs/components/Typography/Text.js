'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('../../theme/default.js');
var handler = require('../../theme/handler.js');

function Text(_ref) {
  let {
    className,
    children,
    style,
    type,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    strikethrough,
    strong,
    small
  } = _ref;
  let __styles = handler["default"]('typography');
  let classes = [__styles.text.base];
  if (className) {
    classes.push(className);
  }
  if (type) {
    classes.push(__styles.text.type[type]);
  }
  if (disabled) {
    classes.push(__styles.text.disabled);
  }
  if (underline) {
    classes.push(__styles.text.underline);
  }
  if (strikethrough) {
    classes.push(__styles.text.strikethrough);
  }
  if (small) {
    classes.push(__styles.text.small);
  }
  if (code) return jsxRuntime.jsx("code", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  if (mark) return jsxRuntime.jsx("mark", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  if (keyboard) return jsxRuntime.jsx("kbd", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  if (strong) return jsxRuntime.jsx("strong", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  return jsxRuntime.jsx("span", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
}

exports["default"] = Text;
