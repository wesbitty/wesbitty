import { jsx } from 'react/jsx-runtime';
import 'react';
import '../../theme/default.js';
import styleHandler from '../../theme/handler.js';

function Text(_ref) {
  let {
    className,
    children,
    style,
    type,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    strikethrough,
    strong,
    small
  } = _ref;
  let __styles = styleHandler('typography');
  let classes = [__styles.text.base];
  if (className) {
    classes.push(className);
  }
  if (type) {
    classes.push(__styles.text.type[type]);
  }
  if (disabled) {
    classes.push(__styles.text.disabled);
  }
  if (underline) {
    classes.push(__styles.text.underline);
  }
  if (strikethrough) {
    classes.push(__styles.text.strikethrough);
  }
  if (small) {
    classes.push(__styles.text.small);
  }
  if (code) return jsx("code", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  if (mark) return jsx("mark", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  if (keyboard) return jsx("kbd", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  if (strong) return jsx("strong", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
  return jsx("span", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }));
}

export { Text as default };
