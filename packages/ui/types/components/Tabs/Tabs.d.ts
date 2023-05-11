import React from 'react'
interface TabsProps {
  type?: 'pills' | 'underlined' | 'cards'
  children: any
  defaultActiveId?: string
  activeId?: string
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  block?: boolean
  tabBarGutter?: number
  tabBarStyle?: React.CSSProperties
  onChange?: any
  onClick?: any
  scrollable?: boolean
  addOnBefore?: React.ReactNode
  addOnAfter?: React.ReactNode
  listClassNames?: string
}
declare function Tabs({
  children,
  defaultActiveId,
  activeId,
  type,
  size,
  block,
  onChange,
  onClick,
  scrollable,
  addOnBefore,
  addOnAfter,
  listClassNames,
}: TabsProps): import('react/jsx-runtime').JSX.Element
declare namespace Tabs {
  var Panel: typeof import('./Tabs').Panel
}
interface PanelProps {
  children?: React.ReactNode
  id: string
  label?: string
  icon?: React.ReactNode
}
export declare function Panel({
  children,
  id,
}: PanelProps): import('react/jsx-runtime').JSX.Element
export default Tabs
