'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const IconContext = /*#__PURE__*/React.createContext({
  contextSize: '',
  className: ''
});

exports.IconContext = IconContext;
