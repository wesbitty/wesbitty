'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var handler = require('../../theme/handler.js');
var IconAlertCircle = require('../../components/Icon/icons/IconAlertCircle/IconAlertCircle2.js');

function InputErrorIcon(_ref) {
  let {
    style,
    size
  } = _ref;
  const __styles = handler["default"]('inputErrorIcon');
  return jsxRuntime.jsx("div", Object.assign({
    className: __styles.base,
    style: style
  }, {
    children: jsxRuntime.jsx(IconAlertCircle["default"], {
      size: size,
      strokeWidth: 2,
      // stroke={'#f56565'}
      className: ""
    })
  }));
}

exports["default"] = InputErrorIcon;
