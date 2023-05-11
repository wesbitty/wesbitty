'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var Dialog = require('@radix-ui/react-dialog');
var handler = require('../../theme/handler.js');
var button = require('../button.js');

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

var Dialog__namespace = /*#__PURE__*/_interopNamespace(Dialog);

const SidePanel = _a => {
  var {
      id,
      className,
      children,
      header,
      visible,
      open,
      size = 'medium',
      loading,
      align = 'right',
      hideFooter = false,
      customFooter = undefined,
      onConfirm,
      onCancel,
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      triggerElement,
      defaultOpen
    } = _a,
    props = _tslib.__rest(_a, ["id", "className", "children", "header", "visible", "open", "size", "loading", "align", "hideFooter", "customFooter", "onConfirm", "onCancel", "confirmText", "cancelText", "triggerElement", "defaultOpen"]);
  const __styles = handler["default"]('sidepanel');
  // function stopPropagation(e: React.MouseEvent) {
  //   e.stopPropagation()
  // }
  const footerContent = customFooter ? customFooter : jsxRuntime.jsxs("div", Object.assign({
    className: __styles.footer
  }, {
    children: [jsxRuntime.jsx(button.Button, Object.assign({
      disabled: loading,
      type: "default",
      onClick: () => onCancel ? onCancel() : null
    }, {
      children: cancelText
    })), jsxRuntime.jsx(button.Button, Object.assign({
      loading: loading,
      onClick: () => onConfirm ? onConfirm() : null
    }, {
      children: confirmText
    }))]
  }));
  function handleOpenChange(open) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      if (onCancel) onCancel();
    }
  }
  open = open || visible;
  return jsxRuntime.jsxs(Dialog__namespace.Root, Object.assign({
    open: open,
    onOpenChange: handleOpenChange,
    defaultOpen: defaultOpen
  }, {
    children: [triggerElement && jsxRuntime.jsx(Dialog__namespace.Trigger, Object.assign({
      className: __styles.trigger
    }, {
      children: triggerElement
    })), jsxRuntime.jsxs(Dialog__namespace.Portal, {
      children: [jsxRuntime.jsx(Dialog__namespace.Overlay, {
        className: __styles.overlay
      }), jsxRuntime.jsxs(Dialog__namespace.Content, Object.assign({
        className: [__styles.base, __styles.size[size], __styles.align[align], className && className].join(' '),
        onOpenAutoFocus: props.onOpenAutoFocus,
        onCloseAutoFocus: props.onCloseAutoFocus,
        onEscapeKeyDown: props.onEscapeKeyDown,
        onPointerDownOutside: props.onPointerDownOutside,
        onInteractOutside: props.onInteractOutside
      }, {
        children: [header && jsxRuntime.jsx("header", Object.assign({
          className: __styles.header
        }, {
          children: header
        })), jsxRuntime.jsx("div", Object.assign({
          className: __styles.contents
        }, {
          children: children
        })), !hideFooter && footerContent]
      }))]
    })]
  }));
};
function Seperator() {
  let __styles = handler["default"]('sidepanel');
  return jsxRuntime.jsx("div", {
    className: __styles.seperator
  });
}
function Content(_ref) {
  let {
    children
  } = _ref;
  let __styles = handler["default"]('sidepanel');
  return jsxRuntime.jsx("div", Object.assign({
    className: __styles.content
  }, {
    children: children
  }));
}
SidePanel.Content = Content;
SidePanel.Seperator = Seperator;

exports.Content = Content;
exports.Seperator = Seperator;
exports["default"] = SidePanel;
