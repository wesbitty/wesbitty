'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var handler = require('../../theme/handler.js');
var IconLoader = require('../Icon/icons/IconLoader/IconLoader2.js');

function Loading(_ref) {
  let {
    children,
    active
  } = _ref;
  const __styles = handler["default"]('loading');
  let classNames = [__styles.base];
  let contentClasses = [__styles.content.base];
  if (active) {
    contentClasses.push(__styles.content.active);
  }
  let spinnerClasses = [__styles.spinner];
  return jsxRuntime.jsxs("div", Object.assign({
    className: classNames.join(' ')
  }, {
    children: [jsxRuntime.jsx("div", Object.assign({
      className: contentClasses.join(' ')
    }, {
      children: children
    })), active && jsxRuntime.jsx(IconLoader["default"], {
      size: "xlarge",
      className: spinnerClasses
    })]
  }));
}

exports["default"] = Loading;
