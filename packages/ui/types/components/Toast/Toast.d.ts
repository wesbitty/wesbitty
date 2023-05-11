import React from 'react'
import { Toast as HotToastProps } from 'react-hot-toast/dist/index'
export interface ToastProps extends Partial<HotToastProps> {
  description?: string
  closable?: boolean
  actions?: React.ReactNode
  actionsPosition?: 'inline' | 'bottom'
  width?: 'xs' | 'sm' | 'md'
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
declare function Toast({
  id,
  visible,
  type,
  icon,
  description,
  closable,
  actions,
  actionsPosition,
  message,
  width,
  ...rest
}: ToastProps): import('react/jsx-runtime').JSX.Element
declare namespace Toast {
  var Toaster: ({
    children,
  }: ToasterProps) => import('react/jsx-runtime').JSX.Element
  var toast: typeof import('./Toast').toast
}
interface ToasterProps {
  children?: React.ReactNode
}
type ToastOptions = Partial<
  Pick<
    ToastProps,
    | 'id'
    | 'icon'
    | 'duration'
    | 'position'
    | 'ariaProps'
    | 'style'
    | 'className'
    | 'iconTheme'
    | 'type'
    | 'description'
    | 'closable'
    | 'actions'
    | 'actionsPosition'
  >
>
export declare function toast(message: string, opts?: ToastOptions): string
export declare namespace toast {
  var success: (
    message: string,
    opts?: Omit<
      Partial<
        Pick<
          ToastProps,
          | 'style'
          | 'className'
          | 'type'
          | 'icon'
          | 'id'
          | 'description'
          | 'closable'
          | 'actions'
          | 'duration'
          | 'position'
          | 'ariaProps'
          | 'iconTheme'
          | 'actionsPosition'
        >
      >,
      'type'
    >
  ) => string
  var error: (
    message: string,
    opts?: Omit<
      Partial<
        Pick<
          ToastProps,
          | 'style'
          | 'className'
          | 'type'
          | 'icon'
          | 'id'
          | 'description'
          | 'closable'
          | 'actions'
          | 'duration'
          | 'position'
          | 'ariaProps'
          | 'iconTheme'
          | 'actionsPosition'
        >
      >,
      'type'
    >
  ) => string
  var loading: (
    message: string,
    opts?: Omit<
      Partial<
        Pick<
          ToastProps,
          | 'style'
          | 'className'
          | 'type'
          | 'icon'
          | 'id'
          | 'description'
          | 'closable'
          | 'actions'
          | 'duration'
          | 'position'
          | 'ariaProps'
          | 'iconTheme'
          | 'actionsPosition'
        >
      >,
      'type'
    >
  ) => string
  var promise: (
    promise: Promise<unknown>,
    msgs: {
      loading: import('react-hot-toast').Renderable
      success: import('react-hot-toast').ValueOrFunction<
        import('react-hot-toast').Renderable,
        unknown
      >
      error: import('react-hot-toast').ValueOrFunction<
        import('react-hot-toast').Renderable,
        any
      >
    },
    opts?: import('react-hot-toast').DefaultToastOptions
  ) => Promise<unknown>
}
export default Toast
