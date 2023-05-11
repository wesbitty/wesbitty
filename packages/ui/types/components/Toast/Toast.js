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
import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from 'react/jsx-runtime'
import {
  Toaster as HotToaster,
  toast as hotToast,
  resolveValue,
} from 'react-hot-toast'
import * as Portal from '@radix-ui/react-portal'
import { IconCheck } from '../Icon/icons/IconCheck'
import { IconLoader } from '../Icon/icons/IconLoader'
import { IconX } from '../Icon/icons/IconX'
import { IconAlertCircle } from '../Icon/icons/IconAlertCircle'
// @ts-ignore
import ToastStyles from './Toast.module.css'
import Typography from '../Typography'
const icons = {
  error: _jsx(IconAlertCircle, { size: 'medium', strokeWidth: 2 }),
  success: _jsx(IconCheck, { size: 'medium', strokeWidth: 2 }),
}
function Message(_a) {
  var { children } = _a,
    props = __rest(_a, ['children'])
  return _jsx(
    Typography.Text,
    Object.assign({ className: ToastStyles['wsb-toast-message'] }, props, {
      children: children,
    })
  )
}
function Description(_a) {
  var { children } = _a,
    props = __rest(_a, ['children'])
  return _jsx(
    Typography.Text,
    Object.assign({ className: ToastStyles['wsb-toast-description'] }, props, {
      children: children,
    })
  )
}
/**
 * react-hot-toast is used under-the-hood and is a required dependency.
 *
 * Add `<Toast.Toaster />` to your app or wrap it around your components `<Toast.Toaster><Components /></Toast.Toaster>`
 *
 * You can also just use react-hot-toast's `toast` for basic toasts:
 *
 * `toast.success('Complete!')`
 *
 *  For the extra features you need to use the `Toast.toast` wrapper:
 *
 * `Toast.toast('Message', { description: 'Description', actions: [<SomeButton />] })`
 */
function Toast(_a) {
  var {
      id,
      visible,
      type,
      icon,
      description,
      closable = true,
      actions,
      actionsPosition = 'inline',
      message,
      width,
    } = _a,
    rest = __rest(_a, [
      'id',
      'visible',
      'type',
      'icon',
      'description',
      'closable',
      'actions',
      'actionsPosition',
      'message',
      'width',
    ])
  let containerClasses = [ToastStyles['wsb-toast-container']]
  if (type) {
    containerClasses.push(ToastStyles[`wsb-toast-container--${type}`])
  }
  if (width === 'sm' || width === 'md') {
    containerClasses.push(ToastStyles[`wsb-toast-container--${width}`])
  }
  let closeButtonClasses = [ToastStyles['wsb-toast-close-button']]
  if (type) {
    closeButtonClasses.push(ToastStyles[`wsb-toast-close-button--${type}`])
  }
  let detailsClasses = [ToastStyles['wsb-toast-details']]
  if (actionsPosition === 'bottom') {
    detailsClasses.push(ToastStyles[`wsb-toast-details--actions-bottom`])
  }
  const _message =
    typeof message === 'string'
      ? _jsx(Message, { children: message })
      : resolveValue(message, rest)
  return _jsx(
    'div',
    Object.assign(
      {
        className: `${containerClasses.join(' ')} ${
          visible ? 'animate-enter' : 'animate-leave'
        }`,
      },
      {
        children: _jsxs('div', {
          children: [
            _jsx(
              Typography.Text,
              Object.assign(
                { className: ToastStyles['wsb-toast-icon-container'] },
                {
                  children:
                    type === 'loading'
                      ? _jsx(IconLoader, {
                          size: 'medium',
                          strokeWidth: 2,
                          className: ToastStyles['wsb-alert--anim--spin'],
                        })
                      : icon || icons[type],
                }
              )
            ),
            _jsxs(
              'div',
              Object.assign(
                { className: detailsClasses.join(' ') },
                {
                  children: [
                    _jsxs(
                      'div',
                      Object.assign(
                        {
                          className: ToastStyles['wsb-toast-details__content'],
                        },
                        {
                          children: [
                            _message,
                            description &&
                              _jsx(Description, { children: description }),
                          ],
                        }
                      )
                    ),
                    actions &&
                      _jsx(
                        'div',
                        Object.assign(
                          {
                            className:
                              ToastStyles['wsb-toast-details__actions'],
                          },
                          { children: actions }
                        )
                      ),
                  ],
                }
              )
            ),
            closable &&
              _jsx(
                'div',
                Object.assign(
                  { className: ToastStyles['wsb-toast-close-container'] },
                  {
                    children: _jsxs(
                      'button',
                      Object.assign(
                        {
                          'aria-label': 'Close alert',
                          className: closeButtonClasses.join(' '),
                          onClick: () => {
                            hotToast.dismiss(id)
                          },
                        },
                        {
                          children: [
                            _jsx(
                              'span',
                              Object.assign(
                                { className: 'sr-only' },
                                { children: 'Close' }
                              )
                            ),
                            _jsx(IconX, {
                              className: 'h-5 w-5',
                              'aria-hidden': 'true',
                              size: 'small',
                              strokeWidth: 2,
                            }),
                          ],
                        }
                      )
                    ),
                  }
                )
              ),
          ],
        }),
      }
    )
  )
}
function Toaster({ children }) {
  return _jsxs(
    Portal.Root,
    Object.assign(
      { className: 'portal--toast' },
      {
        children: [
          _jsx(
            HotToaster,
            Object.assign(
              { position: 'bottom-right' },
              {
                children: (_a) => {
                  var { message } = _a,
                    t = __rest(_a, ['message'])
                  return typeof message === 'string'
                    ? _jsx(Toast, Object.assign({ message: message }, t))
                    : _jsx(_Fragment, { children: resolveValue(message, t) })
                },
              }
            )
          ),
          children,
        ],
      }
    )
  )
}
export function toast(message, opts) {
  const _a = opts || {},
    { description, closable, actions, actionsPosition, type } = _a,
    rest = __rest(_a, [
      'description',
      'closable',
      'actions',
      'actionsPosition',
      'type',
    ])
  return hotToast((_a) => {
    var { message: _m, type: _t } = _a,
      t = __rest(_a, ['message', 'type'])
    return _jsx(
      Toast,
      Object.assign(
        {
          message: message,
          description: description,
          closable: closable,
          actions: actions,
          actionsPosition: actionsPosition,
          type: type,
        },
        t
      )
    )
  }, rest)
}
const createToastType = (type) => (message, opts) =>
  toast(message, Object.assign(Object.assign({}, opts), { type }))
toast.success = createToastType('success')
toast.error = createToastType('error')
toast.loading = createToastType('loading')
toast.promise = (...args) => hotToast.promise(...args)
Toast.Toaster = Toaster
Toast.toast = toast
export default Toast
