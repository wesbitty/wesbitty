'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography.js');
var MenuContext = require('./MenuContext.js');
var handler = require('../../theme/handler.js');

function Menu(_ref) {
  let {
    children,
    className,
    style,
    type = 'text'
  } = _ref;
  return jsxRuntime.jsx("nav", Object.assign({
    role: "menu",
    "aria-label": "Sidebar",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
    className: className,
    style: style
  }, {
    children: jsxRuntime.jsx(MenuContext.MenuContextProvider, Object.assign({
      type: type
    }, {
      children: jsxRuntime.jsx("ul", {
        children: children
      })
    }))
  }));
}
function Item(_ref2) {
  let {
    children,
    icon,
    active,
    rounded,
    onClick,
    doNotCloseOverlay = false,
    showActiveBar = false,
    style
  } = _ref2;
  const __styles = handler["default"]('menu');
  const {
    type
  } = MenuContext.useMenuContext();
  let classes = [__styles.item.base];
  classes.push(__styles.item.variants[type].base);
  if (active) {
    classes.push(__styles.item.variants[type].active);
  } else {
    classes.push(__styles.item.variants[type].normal);
  }
  let contentClasses = [__styles.item.content.base];
  if (active) {
    contentClasses.push(__styles.item.content.active);
  } else {
    contentClasses.push(__styles.item.content.normal);
  }
  let iconClasses = [__styles.item.icon.base];
  if (active) {
    iconClasses.push(__styles.item.icon.active);
  } else {
    iconClasses.push(__styles.item.icon.normal);
  }
  return jsxRuntime.jsx("li", Object.assign({
    role: "menuitem",
    className: "outline-none"
  }, {
    children: jsxRuntime.jsxs("a", Object.assign({
      style: style,
      className: classes.join(' '),
      onClick: onClick,
      "aria-current": active ? 'page' : undefined
    }, {
      children: [icon && jsxRuntime.jsx("span", Object.assign({
        className: iconClasses.join(' ')
      }, {
        children: icon
      })), jsxRuntime.jsx("span", Object.assign({
        className: contentClasses.join(' ')
      }, {
        children: children
      }))]
    }))
  }));
}
function Group(_ref3) {
  let {
    children,
    icon,
    title
  } = _ref3;
  const __styles = handler["default"]('menu');
  const {
    type
  } = MenuContext.useMenuContext();
  return jsxRuntime.jsxs("div", Object.assign({
    className: [__styles.group.base, __styles.group.variants[type]].join(' ')
  }, {
    children: [icon && jsxRuntime.jsx("span", Object.assign({
      className: __styles.group.icon
    }, {
      children: icon
    })), jsxRuntime.jsx("span", Object.assign({
      className: __styles.group.content
    }, {
      children: title
    })), children]
  }));
}
function Misc(_ref4) {
  let {
    children
  } = _ref4;
  return jsxRuntime.jsx("div", {
    children: jsxRuntime.jsx(Typography["default"].Text, {
      children: jsxRuntime.jsx("span", {
        children: children
      })
    })
  });
}
Menu.Item = Item;
Menu.Group = Group;
Menu.Misc = Misc;

exports.Group = Group;
exports.Item = Item;
exports.Misc = Misc;
exports["default"] = Menu;
