/// <reference types="react" />
type Props = {
  children?: [React.ReactNode]
  className?: string
  style?: React.CSSProperties
  spacing?: 'small' | 'medium' | 'large'
}
declare const Breadcrumb: {
  ({
    className,
    style,
    children,
    spacing,
  }: Props): import('react/jsx-runtime').JSX.Element
  Item: typeof Item
}
interface ItemProps {
  children: React.ReactNode
  active?: boolean
  onClick?: any
  style?: React.CSSProperties
}
export declare function Item({
  children,
  active,
  onClick,
  style,
}: ItemProps): import('react/jsx-runtime').JSX.Element
export default Breadcrumb
