'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var provider = require('./provider.js');
var _default = require('./default.js');

function styleHandler(target) {
  let {
    theme: {
      [target]: __styles
    }
  } = React.useContext(provider.ThemeContext);
  if (!__styles) __styles = _default["default"].button;
  __styles = JSON.stringify(__styles).replace(/\\n/g, '').replace(/\s\s+/g, ' ');
  __styles = JSON.parse(__styles);
  return __styles;
}

exports["default"] = styleHandler;
