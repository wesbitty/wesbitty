'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var RadixPopover = require('@radix-ui/react-popover');
var IconX = require('../Icon/icons/IconX/IconX2.js');
var handler = require('../../theme/handler.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var RadixPopover__namespace = /*#__PURE__*/_interopNamespace(RadixPopover);

function Popover(_ref) {
  let {
    align = 'center',
    ariaLabel,
    arrow = false,
    children,
    className,
    defaultOpen = false,
    modal,
    onOpenChange,
    open,
    overlay,
    portalled,
    side = 'bottom',
    sideOffset = 6,
    style,
    header,
    footer,
    size = 'content'
  } = _ref;
  const __styles = handler["default"]('popover');
  let classes = [__styles.content, __styles.size[size]];
  if (className) {
    classes.push(className);
  }
  return jsxRuntime.jsxs(RadixPopover__namespace.Root, Object.assign({
    defaultOpen: defaultOpen,
    modal: modal,
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [jsxRuntime.jsx(RadixPopover__namespace.Trigger
    // className={DropdownStyles['wsb-popover__trigger']}
    , Object.assign({
      // className={DropdownStyles['wsb-popover__trigger']}
      className: __styles.trigger,
      "aria-label": ariaLabel
    }, {
      children: children
    })), jsxRuntime.jsxs(RadixPopover__namespace.Content, Object.assign({
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style,
      portalled: portalled
    }, {
      children: [arrow && jsxRuntime.jsx(RadixPopover__namespace.Arrow
      // className={DropdownStyles['wsb-popover__arrow']}
      , {
        // className={DropdownStyles['wsb-popover__arrow']}
        offset: 10
      }), header && jsxRuntime.jsx("div", Object.assign({
        className: __styles.header
      }, {
        children: header
      })), overlay, footer && jsxRuntime.jsx("div", Object.assign({
        className: __styles.footer
      }, {
        children: footer
      }))]
    }))]
  }));
}
function Close() {
  const __styles = handler["default"]('popover');
  return jsxRuntime.jsx(RadixPopover__namespace.Close, Object.assign({
    className: __styles.close
  }, {
    children: jsxRuntime.jsx(IconX["default"], {
      size: 14,
      strokeWidth: 2
    })
  }));
}
function Seperator() {
  const __styles = handler["default"]('popover');
  return jsxRuntime.jsx("div", {
    className: __styles.seperator
  });
}
Popover.Seperator = Seperator;
Popover.Close = Close;

exports["default"] = Popover;
