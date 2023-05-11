'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var handler = require('../theme/handler.js');

function Space(_ref) {
  let {
    direction,
    size = 2,
    className,
    block,
    style,
    minus,
    children
  } = _ref;
  const __styles = handler["default"]('space');
  const classes = [__styles.base];
  classes.push(direction === 'vertical' ? __styles.col : __styles.row);
  classes.push(__styles['wsb-' + (minus ? 'minus-' : '') + 'space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size]);
  if (block) {
    classes.push(__styles.block);
  }
  if (className) {
    classes.push(className);
  }
  return jsxRuntime.jsx("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: children
  }));
}

exports.Space = Space;
