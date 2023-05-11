import React from 'react'
import type * as RadixPopoverTypes from '@radix-ui/react-popover/'
interface RootProps {
  align?: RadixPopoverTypes.PopoverContentProps['align']
  ariaLabel?: string
  arrow?: boolean
  children?: React.ReactNode
  className?: string
  defaultOpen?: boolean
  modal?: boolean
  onOpenChange?: RadixPopoverTypes.PopoverProps['onOpenChange']
  open?: boolean
  overlay?: React.ReactNode
  portalled?: boolean
  showClose?: boolean
  side?: RadixPopoverTypes.PopoverContentProps['side']
  sideOffset?: RadixPopoverTypes.PopoverContentProps['sideOffset']
  style?: React.CSSProperties
  header?: React.ReactNode
  footer?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'content'
}
declare function Popover({
  align,
  ariaLabel,
  arrow,
  children,
  className,
  defaultOpen,
  modal,
  onOpenChange,
  open,
  overlay,
  portalled,
  side,
  sideOffset,
  style,
  header,
  footer,
  size,
}: RootProps): import('react/jsx-runtime').JSX.Element
declare namespace Popover {
  var Seperator: () => import('react/jsx-runtime').JSX.Element
  var Close: () => import('react/jsx-runtime').JSX.Element
}
export default Popover
