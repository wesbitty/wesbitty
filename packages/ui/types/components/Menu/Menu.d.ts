import React from 'react'
interface MenuProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  type?: 'text' | 'pills' | 'border'
}
declare function Menu({
  children,
  className,
  style,
  type,
}: MenuProps): import('react/jsx-runtime').JSX.Element
declare namespace Menu {
  var Item: typeof import('./Menu').Item
  var Group: typeof import('./Menu').Group
  var Misc: typeof import('./Menu').Misc
}
interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  active?: boolean
  rounded?: boolean
  onClick?: any
  doNotCloseOverlay?: boolean
  showActiveBar?: boolean
  style?: React.CSSProperties
}
export declare function Item({
  children,
  icon,
  active,
  rounded,
  onClick,
  doNotCloseOverlay,
  showActiveBar,
  style,
}: ItemProps): import('react/jsx-runtime').JSX.Element
interface GroupProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  title: string
}
export declare function Group({
  children,
  icon,
  title,
}: GroupProps): import('react/jsx-runtime').JSX.Element
interface MiscProps {
  children: React.ReactNode
}
export declare function Misc({
  children,
}: MiscProps): import('react/jsx-runtime').JSX.Element
export default Menu
