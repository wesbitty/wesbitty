import React from 'react'
import type * as RadixContextMenuTypes from '@radix-ui/react-context-menu/'
interface RootProps {
  onOpenChange?(x: boolean): void
  alignOffset?: RadixContextMenuTypes.ContextMenuContentProps['alignOffset']
  overlay?: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
declare function ContextMenu({
  onOpenChange,
  alignOffset,
  overlay,
  children,
  className,
  style,
}: RootProps): import('react/jsx-runtime').JSX.Element
declare namespace ContextMenu {
  var Item: typeof import('./ContextMenu').Item
  var Misc: typeof import('./ContextMenu').Misc
  var Checkbox: typeof import('./ContextMenu').Checkbox
  var Radio: typeof import('./ContextMenu').Radio
  var RadioGroup: typeof import('./ContextMenu').RadioGroup
  var Label: typeof import('./ContextMenu').Label
}
interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: (event: Event) => void
}
export declare function Item({
  children,
  icon,
  disabled,
  onClick,
}: ItemProps): import('react/jsx-runtime').JSX.Element
export declare function Misc({
  children,
  icon,
}: ItemProps): import('react/jsx-runtime').JSX.Element
interface CheckboxProps {
  children: React.ReactNode
  checked?: boolean
  onChange?(x: boolean): void
  disabled?: boolean
  ItemIndicator?: React.ReactNode
}
export declare function Checkbox({
  children,
  checked: propsChecked,
  onChange,
  disabled,
  ItemIndicator,
}: CheckboxProps): import('react/jsx-runtime').JSX.Element
interface RadioProps {
  children: React.ReactNode
  value: string
  ItemIndicator?: React.ReactNode
}
export declare function Radio({
  children,
  value,
  ItemIndicator,
}: RadioProps): import('react/jsx-runtime').JSX.Element
interface RadioGroupProps {
  children: React.ReactNode
  value: string
  onChange?(x: string): void
}
export declare function RadioGroup({
  children,
  value: propsValue,
  onChange,
}: RadioGroupProps): import('react/jsx-runtime').JSX.Element
interface LabelProps {
  children: React.ReactNode
}
export declare function Label({
  children,
}: LabelProps): import('react/jsx-runtime').JSX.Element
export default ContextMenu
