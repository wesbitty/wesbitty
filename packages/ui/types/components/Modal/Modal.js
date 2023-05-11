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
import React, { useEffect } from 'react'
import { Button, Space } from './../../index'
import * as Dialog from '@radix-ui/react-dialog'
import styleHandler from '../../theme/handler'
const Modal = (_a) => {
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
      header,
    } = _a,
    props = __rest(_a, [
      'children',
      'customFooter',
      'closable',
      'description',
      'hideFooter',
      'alignFooter',
      'layout',
      'loading',
      'cancelText',
      'onConfirm',
      'onCancel',
      'confirmText',
      'showIcon',
      'title',
      'footerBackground',
      'icon',
      'variant',
      'visible',
      'size',
      'style',
      'overlayStyle',
      'contentStyle',
      'className',
      'overlayClassName',
      'triggerElement',
      'header',
    ])
  const [open, setOpen] = React.useState(visible ? visible : false)
  const __styles = styleHandler('modal')
  useEffect(() => {
    setOpen(visible)
  }, [visible])
  function stopPropagation(e) {
    e.stopPropagation()
  }
  // let footerClasses = [ModalStyles['wsb-modal-footer']]
  if (footerBackground) {
    // footerClasses.push(ModalStyles['wsb-modal-footer--with-bg'])
  }
  let modalClasses = [
    __styles.base,
    // ModalStyles[`wsb-modal`],
    // ModalStyles[`wsb-modal--${size}`],
  ]
  // if (className) modalClasses.push(className)
  // let overlayClasses = [ModalStyles['wsb-modal-overlay']]
  // if (overlayClassName) overlayClasses.push(overlayClassName)
  const footerContent = customFooter
    ? customFooter
    : _jsxs(
        Space,
        Object.assign(
          {
            style: {
              width: '100%',
              justifyContent:
                layout === 'vertical'
                  ? 'center'
                  : alignFooter === 'right'
                  ? 'flex-end'
                  : 'flex-start',
            },
          },
          {
            children: [
              _jsx(
                Button,
                Object.assign(
                  { type: 'secondary', onClick: onCancel, disabled: loading },
                  { children: cancelText }
                )
              ),
              _jsx(
                Button,
                Object.assign(
                  {
                    onClick: onConfirm,
                    loading: loading,
                    danger: variant === 'danger',
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
      onCancel()
    } else {
      // un-controlled component behaviour
      setOpen(open)
    }
  }
  return _jsxs(
    Dialog.Root,
    Object.assign(
      { open: open, onOpenChange: handleOpenChange },
      {
        children: [
          triggerElement &&
            _jsx(
              Dialog.Trigger,
              // className={ModalStyles[`wsb-modal__trigger`]}
              { children: triggerElement }
            ),
          _jsxs(Dialog.Portal, {
            children: [
              _jsx(Dialog.Overlay, { className: __styles.overlay }),
              _jsx(
                Dialog.Overlay,
                Object.assign(
                  { className: __styles.scroll_overlay },
                  {
                    children: _jsxs(
                      Dialog.Content,
                      Object.assign(
                        {
                          className: [__styles.base, __styles.size[size]].join(
                            ' '
                          ),
                          onInteractOutside: props.onInteractOutside,
                        },
                        {
                          children: [
                            header &&
                              _jsx(
                                'div',
                                Object.assign(
                                  { className: __styles.header },
                                  { children: header }
                                )
                              ),
                            children,
                            !hideFooter &&
                              _jsx(
                                'div',
                                Object.assign(
                                  { className: __styles.footer },
                                  { children: footerContent }
                                )
                              ),
                          ],
                        }
                      )
                    ),
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
function Content({ children }) {
  const __styles = styleHandler('modal')
  return _jsx(
    'div',
    Object.assign({ className: __styles.content }, { children: children })
  )
}
export function Seperator() {
  const __styles = styleHandler('modal')
  return _jsx('div', { className: __styles.seperator })
}
Modal.Content = Content
Modal.Seperator = Seperator
export default Modal
