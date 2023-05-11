import { __rest } from '../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styleHandler from '../../theme/handler.js';
import { Space } from '../space.js';
import { Button } from '../button.js';

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
    props = __rest(_a, ["children", "customFooter", "closable", "description", "hideFooter", "alignFooter", "layout", "loading", "cancelText", "onConfirm", "onCancel", "confirmText", "showIcon", "title", "footerBackground", "icon", "variant", "visible", "size", "style", "overlayStyle", "contentStyle", "className", "overlayClassName", "triggerElement", "header"]);
  const [open, setOpen] = React.useState(visible ? visible : false);
  const __styles = styleHandler('modal');
  useEffect(() => {
    setOpen(visible);
  }, [visible]);
  [__styles.base
  // ModalStyles[`wsb-modal`],
  // ModalStyles[`wsb-modal--${size}`],
  ];
  // if (className) modalClasses.push(className)
  // let overlayClasses = [ModalStyles['wsb-modal-overlay']]
  // if (overlayClassName) overlayClasses.push(overlayClassName)
  const footerContent = customFooter ? customFooter : jsxs(Space, Object.assign({
    style: {
      width: '100%',
      justifyContent: layout === 'vertical' ? 'center' : alignFooter === 'right' ? 'flex-end' : 'flex-start'
    }
  }, {
    children: [jsx(Button, Object.assign({
      type: "secondary",
      onClick: onCancel,
      disabled: loading
    }, {
      children: cancelText
    })), jsx(Button, Object.assign({
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
  return jsxs(Dialog.Root, Object.assign({
    open: open,
    onOpenChange: handleOpenChange
  }, {
    children: [triggerElement && jsx(Dialog.Trigger
    // className={ModalStyles[`wsb-modal__trigger`]}
    , {
      children: triggerElement
    }), jsxs(Dialog.Portal, {
      children: [jsx(Dialog.Overlay, {
        className: __styles.overlay
      }), jsx(Dialog.Overlay, Object.assign({
        className: __styles.scroll_overlay
      }, {
        children: jsxs(Dialog.Content, Object.assign({
          className: [__styles.base, __styles.size[size]].join(' '),
          onInteractOutside: props.onInteractOutside
        }, {
          children: [header && jsx("div", Object.assign({
            className: __styles.header
          }, {
            children: header
          })), children, !hideFooter && jsx("div", Object.assign({
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
  const __styles = styleHandler('modal');
  return jsx("div", Object.assign({
    className: __styles.content
  }, {
    children: children
  }));
}
function Seperator() {
  const __styles = styleHandler('modal');
  return jsx("div", {
    className: __styles.seperator
  });
}
Modal.Content = Content;
Modal.Seperator = Seperator;

export { Seperator, Modal as default };
