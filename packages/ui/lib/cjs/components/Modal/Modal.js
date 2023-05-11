'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Dialog = require('@radix-ui/react-dialog');
var handler = require('../../theme/handler.js');
var space = require('../space.js');
var button = require('../button.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Dialog__namespace = /*#__PURE__*/_interopNamespace(Dialog);

const Modal = _a => {
  var {
      children,
      customFooter = undefined,
      closable,
      description,
      hideFooter = false,
      alignFooter = 'left',
      layout = 'horizontal',
      loading = false,
      cancelText = 'Cancel',
      onConfirm = () => {},
      onCancel = () => {},
      confirmText = 'Confirm',
      showIcon = false,
      title,
      footerBackground,
      icon,
      variant = 'success',
      visible = false,
      size = 'large',
      style,
      overlayStyle,
      contentStyle,
      className = '',
      overlayClassName,
      triggerElement,
      header
    } = _a,
    props = _tslib.__rest(_a, ["children", "customFooter", "closable", "description", "hideFooter", "alignFooter", "layout", "loading", "cancelText", "onConfirm", "onCancel", "confirmText", "showIcon", "title", "footerBackground", "icon", "variant", "visible", "size", "style", "overlayStyle", "contentStyle", "className", "overlayClassName", "triggerElement", "header"]);
  const [open, setOpen] = React__default["default"].useState(visible ? visible : false);
  const __styles = handler["default"]('modal');
  React.useEffect(() => {
    setOpen(visible);
  }, [visible]);
  [__styles.base
  // ModalStyles[`wsb-modal`],
  // ModalStyles[`wsb-modal--${size}`],
  ];
  // if (className) modalClasses.push(className)
  // let overlayClasses = [ModalStyles['wsb-modal-overlay']]
  // if (overlayClassName) overlayClasses.push(overlayClassName)
  const footerContent = customFooter ? customFooter : jsxRuntime.jsxs(space.Space, Object.assign({
    style: {
      width: '100%',
      justifyContent: layout === 'vertical' ? 'center' : alignFooter === 'right' ? 'flex-end' : 'flex-start'
    }
  }, {
    children: [jsxRuntime.jsx(button.Button, Object.assign({
      type: "secondary",
      onClick: onCancel,
      disabled: loading
    }, {
      children: cancelText
    })), jsxRuntime.jsx(button.Button, Object.assign({
      onClick: onConfirm,
      loading: loading,
      danger: variant === 'danger'
    }, {
      children: confirmText
    }))]
  }));
  function handleOpenChange(open) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      onCancel();
    } else {
      // un-controlled component behaviour
      setOpen(open);
    }
  }
  return jsxRuntime.jsxs(Dialog__namespace.Root, Object.assign({
    open: open,
    onOpenChange: handleOpenChange
  }, {
    children: [triggerElement && jsxRuntime.jsx(Dialog__namespace.Trigger
    // className={ModalStyles[`wsb-modal__trigger`]}
    , {
      children: triggerElement
    }), jsxRuntime.jsxs(Dialog__namespace.Portal, {
      children: [jsxRuntime.jsx(Dialog__namespace.Overlay, {
        className: __styles.overlay
      }), jsxRuntime.jsx(Dialog__namespace.Overlay, Object.assign({
        className: __styles.scroll_overlay
      }, {
        children: jsxRuntime.jsxs(Dialog__namespace.Content, Object.assign({
          className: [__styles.base, __styles.size[size]].join(' '),
          onInteractOutside: props.onInteractOutside
        }, {
          children: [header && jsxRuntime.jsx("div", Object.assign({
            className: __styles.header
          }, {
            children: header
          })), children, !hideFooter && jsxRuntime.jsx("div", Object.assign({
            className: __styles.footer
          }, {
            children: footerContent
          }))]
        }))
      }))]
    })]
  }));
};
function Content(_ref) {
  let {
    children
  } = _ref;
  const __styles = handler["default"]('modal');
  return jsxRuntime.jsx("div", Object.assign({
    className: __styles.content
  }, {
    children: children
  }));
}
function Seperator() {
  const __styles = handler["default"]('modal');
  return jsxRuntime.jsx("div", {
    className: __styles.seperator
  });
}
Modal.Content = Content;
Modal.Seperator = Seperator;

exports.Seperator = Seperator;
exports["default"] = Modal;
