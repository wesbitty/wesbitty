'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const MenuContext = /*#__PURE__*/React.createContext({
  type: 'text'
});
const MenuContextProvider = props => {
  const {
    type
  } = props;
  const value = {
    type: type
  };
  return jsxRuntime.jsx(MenuContext.Provider, Object.assign({
    value: value
  }, {
    children: props.children
  }));
};
// context helper to avoid using a consumer component
const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error(`MenuContext must be used within a MenuContextProvider.`);
  }
  return context;
};

exports.MenuContextProvider = MenuContextProvider;
exports.useMenuContext = useMenuContext;
