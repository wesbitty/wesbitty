import { __rest } from '../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as Dialog from '@radix-ui/react-dialog';
import styleHandler from '../../theme/handler.js';
import { Button } from '../button.js';

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
    props = __rest(_a, ["id", "className", "children", "header", "visible", "open", "size", "loading", "align", "hideFooter", "customFooter", "onConfirm", "onCancel", "confirmText", "cancelText", "triggerElement", "defaultOpen"]);
  const __styles = styleHandler('sidepanel');
  // function stopPropagation(e: React.MouseEvent) {
  //   e.stopPropagation()
  // }
  const footerContent = customFooter ? customFooter : jsxs("div", Object.assign({
    className: __styles.footer
  }, {
    children: [jsx(Button, Object.assign({
      disabled: loading,
      type: "default",
      onClick: () => onCancel ? onCancel() : null
    }, {
      children: cancelText
    })), jsx(Button, Object.assign({
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
  return jsxs(Dialog.Root, Object.assign({
    open: open,
    onOpenChange: handleOpenChange,
    defaultOpen: defaultOpen
  }, {
    children: [triggerElement && jsx(Dialog.Trigger, Object.assign({
      className: __styles.trigger
    }, {
      children: triggerElement
    })), jsxs(Dialog.Portal, {
      children: [jsx(Dialog.Overlay, {
        className: __styles.overlay
      }), jsxs(Dialog.Content, Object.assign({
        className: [__styles.base, __styles.size[size], __styles.align[align], className && className].join(' '),
        onOpenAutoFocus: props.onOpenAutoFocus,
        onCloseAutoFocus: props.onCloseAutoFocus,
        onEscapeKeyDown: props.onEscapeKeyDown,
        onPointerDownOutside: props.onPointerDownOutside,
        onInteractOutside: props.onInteractOutside
      }, {
        children: [header && jsx("header", Object.assign({
          className: __styles.header
        }, {
          children: header
        })), jsx("div", Object.assign({
          className: __styles.contents
        }, {
          children: children
        })), !hideFooter && footerContent]
      }))]
    })]
  }));
};
function Seperator() {
  let __styles = styleHandler('sidepanel');
  return jsx("div", {
    className: __styles.seperator
  });
}
function Content(_ref) {
  let {
    children
  } = _ref;
  let __styles = styleHandler('sidepanel');
  return jsx("div", Object.assign({
    className: __styles.content
  }, {
    children: children
  }));
}
SidePanel.Content = Content;
SidePanel.Seperator = Seperator;

export { Content, Seperator, SidePanel as default };
