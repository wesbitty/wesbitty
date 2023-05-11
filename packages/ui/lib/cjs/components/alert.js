'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var IconAlertTriangle = require('./Icon/icons/IconAlertTriangle/IconAlertTriangle2.js');
var IconInfo = require('./Icon/icons/IconInfo/IconInfo2.js');
var IconX = require('./Icon/icons/IconX/IconX2.js');
var handler = require('../theme/handler.js');
var IconAlertOctagon = require('./Icon/icons/IconAlertOctagon/IconAlertOctagon2.js');
var IconCheckCircle = require('./Icon/icons/IconCheckCircle/IconCheckCircle2.js');

const icons = {
  danger: jsxRuntime.jsx(IconAlertOctagon["default"], {
    strokeWidth: 1.5,
    size: 18
  }),
  success: jsxRuntime.jsx(IconCheckCircle["default"], {
    strokeWidth: 1.5,
    size: 18
  }),
  warning: jsxRuntime.jsx(IconAlertTriangle["default"], {
    strokeWidth: 1.5,
    size: 18
  }),
  info: jsxRuntime.jsx(IconInfo["default"], {
    strokeWidth: 1.5,
    size: 18
  }),
  neutral: jsxRuntime.jsx(jsxRuntime.Fragment, {})
};
function Alert(_ref) {
  let {
    variant = 'neutral',
    className,
    title,
    withIcon,
    closable,
    children,
    icon,
    actions
  } = _ref;
  let __styles = handler["default"]('alert');
  const [visible, setVisible] = React.useState(true);
  let containerClasses = [__styles.base];
  containerClasses.push(__styles.variant[variant].base);
  if (className) containerClasses.push(className);
  let descriptionClasses = [__styles.description, __styles.variant[variant].description];
  let closeButtonClasses = [__styles.close];
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: visible && jsxRuntime.jsxs("div", Object.assign({
      className: containerClasses.join(' ')
    }, {
      children: [withIcon ? jsxRuntime.jsx("div", Object.assign({
        className: __styles.variant[variant].icon
      }, {
        children: withIcon && icons[variant]
      })) : null, icon && icon, jsxRuntime.jsxs("div", Object.assign({
        className: "flex flex-1 items-center justify-between"
      }, {
        children: [jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsx("h3", Object.assign({
            className: [__styles.variant[variant].header, __styles.header].join(' ')
          }, {
            children: title
          })), jsxRuntime.jsx("div", Object.assign({
            className: descriptionClasses.join(' ')
          }, {
            children: children
          }))]
        }), actions]
      })), closable && jsxRuntime.jsx("button", Object.assign({
        "aria-label": "Close alert",
        onClick: () => setVisible(false),
        className: closeButtonClasses.join(' ')
      }, {
        children: jsxRuntime.jsx(IconX["default"], {
          strokeWidth: 2,
          size: 16
        })
      }))]
    }))
  });
}

exports.Alert = Alert;
