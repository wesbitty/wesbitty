'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography.js');
var handler = require('../../theme/handler.js');

function Card(_ref) {
  let {
    children,
    className,
    cover,
    hoverable,
    style,
    title,
    titleExtra
  } = _ref;
  let __styles = handler["default"]('card');
  let classes = [__styles.base];
  if (hoverable) classes.push(__styles.hoverable);
  if (className) classes.push(className);
  return jsxRuntime.jsxs("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: [title && jsxRuntime.jsxs("div", Object.assign({
      className: __styles.head
    }, {
      children: [jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: title
      })), jsxRuntime.jsx(Typography["default"].Link, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: titleExtra
      }))]
    })), cover, jsxRuntime.jsx("div", Object.assign({
      className: __styles.content
    }, {
      children: children
    }))]
  }));
}
function Meta(_ref2) {
  let {
    title,
    description,
    style,
    className
  } = _ref2;
  return jsxRuntime.jsxs("div", Object.assign({
    style: style,
    className: className
  }, {
    children: [jsxRuntime.jsx(Typography["default"].Title, Object.assign({
      style: {
        margin: '0'
      },
      level: 5
    }, {
      children: title
    })), jsxRuntime.jsx("div", {
      children: jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        type: "secondary"
      }, {
        children: description
      }))
    })]
  }));
}
Card.Meta = Meta;

exports["default"] = Card;
