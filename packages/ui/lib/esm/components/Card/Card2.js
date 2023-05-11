import { jsxs, jsx } from 'react/jsx-runtime';
import Typography from '../Typography/Typography.js';
import styleHandler from '../../theme/handler.js';

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
  let __styles = styleHandler('card');
  let classes = [__styles.base];
  if (hoverable) classes.push(__styles.hoverable);
  if (className) classes.push(className);
  return jsxs("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: [title && jsxs("div", Object.assign({
      className: __styles.head
    }, {
      children: [jsx(Typography.Text, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: title
      })), jsx(Typography.Link, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: titleExtra
      }))]
    })), cover, jsx("div", Object.assign({
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
  return jsxs("div", Object.assign({
    style: style,
    className: className
  }, {
    children: [jsx(Typography.Title, Object.assign({
      style: {
        margin: '0'
      },
      level: 5
    }, {
      children: title
    })), jsx("div", {
      children: jsx(Typography.Text, Object.assign({
        type: "secondary"
      }, {
        children: description
      }))
    })]
  }));
}
Card.Meta = Meta;

export { Card as default };
