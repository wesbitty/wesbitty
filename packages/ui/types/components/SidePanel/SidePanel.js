var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../../index'
import * as Dialog from '@radix-ui/react-dialog'
import styleHandler from '../../theme/handler'
const SidePanel = (_a) => {
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
      defaultOpen,
    } = _a,
    props = __rest(_a, [
      'id',
      'className',
      'children',
      'header',
      'visible',
      'open',
      'size',
      'loading',
      'align',
      'hideFooter',
      'customFooter',
      'onConfirm',
      'onCancel',
      'confirmText',
      'cancelText',
      'triggerElement',
      'defaultOpen',
    ])
  const __styles = styleHandler('sidepanel')
  // function stopPropagation(e: React.MouseEvent) {
  //   e.stopPropagation()
  // }
  const footerContent = customFooter
    ? customFooter
    : _jsxs(
        'div',
        Object.assign(
          { className: __styles.footer },
          {
            children: [
              _jsx(
                Button,
                Object.assign(
                  {
                    disabled: loading,
                    type: 'default',
                    onClick: () => (onCancel ? onCancel() : null),
                  },
                  { children: cancelText }
                )
              ),
              _jsx(
                Button,
                Object.assign(
                  {
                    loading: loading,
                    onClick: () => (onConfirm ? onConfirm() : null),
                  },
                  { children: confirmText }
                )
              ),
            ],
          }
        )
      )
  function handleOpenChange(open) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      if (onCancel) onCancel()
    } else {
      // un-controlled component behaviour
      // setOpen(open)
    }
  }
  open = open || visible
  return _jsxs(
    Dialog.Root,
    Object.assign(
      { open: open, onOpenChange: handleOpenChange, defaultOpen: defaultOpen },
      {
        children: [
          triggerElement &&
            _jsx(
              Dialog.Trigger,
              Object.assign(
                { className: __styles.trigger },
                { children: triggerElement }
              )
            ),
          _jsxs(Dialog.Portal, {
            children: [
              _jsx(Dialog.Overlay, { className: __styles.overlay }),
              _jsxs(
                Dialog.Content,
                Object.assign(
                  {
                    className: [
                      __styles.base,
                      __styles.size[size],
                      __styles.align[align],
                      className && className,
                    ].join(' '),
                    onOpenAutoFocus: props.onOpenAutoFocus,
                    onCloseAutoFocus: props.onCloseAutoFocus,
                    onEscapeKeyDown: props.onEscapeKeyDown,
                    onPointerDownOutside: props.onPointerDownOutside,
                    onInteractOutside: props.onInteractOutside,
                  },
                  {
                    children: [
                      header &&
                        _jsx(
                          'header',
                          Object.assign(
                            { className: __styles.header },
                            { children: header }
                          )
                        ),
                      _jsx(
                        'div',
                        Object.assign(
                          { className: __styles.contents },
                          { children: children }
                        )
                      ),
                      !hideFooter && footerContent,
                    ],
                  }
                )
              ),
            ],
          }),
        ],
      }
    )
  )
}
export function Seperator() {
  let __styles = styleHandler('sidepanel')
  return _jsx('div', { className: __styles.seperator })
}
export function Content({ children }) {
  let __styles = styleHandler('sidepanel')
  return _jsx(
    'div',
    Object.assign({ className: __styles.content }, { children: children })
  )
}
SidePanel.Content = Content
SidePanel.Seperator = Seperator
export default SidePanel
