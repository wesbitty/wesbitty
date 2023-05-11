import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
export type SidePanelProps = RadixProps & CustomProps
interface RadixProps
  extends Dialog.DialogProps,
    Pick<
      Dialog.DialogContentProps,
      | 'onOpenAutoFocus'
      | 'onCloseAutoFocus'
      | 'onEscapeKeyDown'
      | 'onPointerDownOutside'
      | 'onInteractOutside'
    > {}
interface CustomProps {
  id?: String | undefined
  className?: String
  children?: React.ReactNode
  header?: string | React.ReactNode
  visible: boolean
  size?: 'medium' | 'large'
  loading?: boolean
  align?: 'right' | 'left'
  hideFooter?: boolean
  customFooter?: React.ReactNode
  onCancel?: () => void
  cancelText?: String
  onConfirm?: () => void
  confirmText?: String
  triggerElement?: React.ReactNode
}
declare const SidePanel: {
  ({
    id,
    className,
    children,
    header,
    visible,
    open,
    size,
    loading,
    align,
    hideFooter,
    customFooter,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    triggerElement,
    defaultOpen,
    ...props
  }: SidePanelProps): import('react/jsx-runtime').JSX.Element
  Content: typeof Content
  Seperator: typeof Seperator
}
export declare function Seperator(): import('react/jsx-runtime').JSX.Element
export declare function Content({
  children,
}: {
  children: React.ReactNode
}): import('react/jsx-runtime').JSX.Element
export default SidePanel
