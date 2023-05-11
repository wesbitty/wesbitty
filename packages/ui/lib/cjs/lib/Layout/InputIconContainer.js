'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var handler = require('../../theme/handler.js');

function InputIconContainer(_ref) {
  let {
    icon
  } = _ref;
  const __styles = handler["default"]('inputIconContainer');
  return jsxRuntime.jsx("div", Object.assign({
    className: __styles.base
  }, {
    children: icon
  }));
}

exports["default"] = InputIconContainer;
