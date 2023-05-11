import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import IconAlertTriangle from './Icon/icons/IconAlertTriangle/IconAlertTriangle2.js';
import IconInfo from './Icon/icons/IconInfo/IconInfo2.js';
import IconX from './Icon/icons/IconX/IconX2.js';
import styleHandler from '../theme/handler.js';
import IconAlertOctagon from './Icon/icons/IconAlertOctagon/IconAlertOctagon2.js';
import IconCheckCircle from './Icon/icons/IconCheckCircle/IconCheckCircle2.js';

const icons = {
  danger: jsx(IconAlertOctagon, {
    strokeWidth: 1.5,
    size: 18
  }),
  success: jsx(IconCheckCircle, {
    strokeWidth: 1.5,
    size: 18
  }),
  warning: jsx(IconAlertTriangle, {
    strokeWidth: 1.5,
    size: 18
  }),
  info: jsx(IconInfo, {
    strokeWidth: 1.5,
    size: 18
  }),
  neutral: jsx(Fragment, {})
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
  let __styles = styleHandler('alert');
  const [visible, setVisible] = useState(true);
  let containerClasses = [__styles.base];
  containerClasses.push(__styles.variant[variant].base);
  if (className) containerClasses.push(className);
  let descriptionClasses = [__styles.description, __styles.variant[variant].description];
  let closeButtonClasses = [__styles.close];
  return jsx(Fragment, {
    children: visible && jsxs("div", Object.assign({
      className: containerClasses.join(' ')
    }, {
      children: [withIcon ? jsx("div", Object.assign({
        className: __styles.variant[variant].icon
      }, {
        children: withIcon && icons[variant]
      })) : null, icon && icon, jsxs("div", Object.assign({
        className: "flex flex-1 items-center justify-between"
      }, {
        children: [jsxs("div", {
          children: [jsx("h3", Object.assign({
            className: [__styles.variant[variant].header, __styles.header].join(' ')
          }, {
            children: title
          })), jsx("div", Object.assign({
            className: descriptionClasses.join(' ')
          }, {
            children: children
          }))]
        }), actions]
      })), closable && jsx("button", Object.assign({
        "aria-label": "Close alert",
        onClick: () => setVisible(false),
        className: closeButtonClasses.join(' ')
      }, {
        children: jsx(IconX, {
          strokeWidth: 2,
          size: 16
        })
      }))]
    }))
  });
}

export { Alert };
