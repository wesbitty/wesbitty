import { IconChevronRight } from '../Icon/icons/IconChevronRight'
// @ts-ignore
import BreadcrumbStyle from './Breadcrumb.module.css'

type Props = {
  children?: [React.ReactNode]
  className?: string
  style?: React.CSSProperties
  spacing?: 'small' | 'medium' | 'large'
}

const Breadcrumb = ({
  className,
  style,
  children,
  spacing = 'small',
}: Props) => {
  let classes = [BreadcrumbStyle['wsb-breadcrumb--container']]
  let seperatorClasses = [BreadcrumbStyle['wsb-breadcrumb--separator']]

  if (className) {
    classes.push(className)
  }

  if (spacing) {
    seperatorClasses.push(`wsb-breadcrumb--separator-${spacing}`)
  }

  return (
    <ol className={classes.join(' ')} style={style} aria-label="Breadcrumb">
      {children!.map((child: React.ReactNode, idx: number) => (
        <li className={BreadcrumbStyle['wsb-breadcrumb--item-container']}>
          {child}
          {idx + 1 < children!.length && (
            <IconChevronRight
              size={12}
              className={seperatorClasses.join(' ')}
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ol>
  )
}

interface ItemProps {
  children: React.ReactNode
  active?: boolean
  onClick?: any
  style?: React.CSSProperties
}

export function Item({ children, active, onClick, style }: ItemProps) {
  let classes = [BreadcrumbStyle['wsb-breadcrumb--item']]
  if (active) classes.push(BreadcrumbStyle['wsb-breadcrumb--item__active'])
  return (
    <span
      className={classes.join(' ')}
      onClick={onClick}
      style={style}
      aria-current={active ? 'page' : false}
    >
      {children}
    </span>
  )
}

Breadcrumb.Item = Item

export default Breadcrumb
