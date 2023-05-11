'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const TabsContext = /*#__PURE__*/React.createContext({
  activeId: ''
});

exports.TabsContext = TabsContext;
