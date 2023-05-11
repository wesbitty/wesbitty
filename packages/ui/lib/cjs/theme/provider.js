'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var mergeDeep = require('../utils/mergeDeep.js');
var _default = require('./default.js');

const ThemeContext = /*#__PURE__*/React.createContext({
  theme: _default["default"]
});
const ThemeProvider = _ref => {
  let {
    children,
    theme: customTheme
  } = _ref;
  const mergedTheme = mergeDeep.mergeDeep(_default["default"], customTheme);
  const value = React.useMemo(() => ({
    theme: mergedTheme
  }), []);
  return jsxRuntime.jsx(ThemeContext.Provider, Object.assign({
    value: value
  }, {
    children: children
  }));
};

exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
