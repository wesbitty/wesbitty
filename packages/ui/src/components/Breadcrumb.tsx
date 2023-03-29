import styleHandler from '../theme/handler'

interface BreadcrumProps {
  children?: [React.ReactNode]
  className?: string
  style?: React.CSSProperties
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

export const Breadcrumb = ({
  className,
  style,
  children,
  size = 'tiny',
}: BreadcrumProps) => {
  const __styles = styleHandler('breadcrumb')

  let classes = [__styles.container]

  let sep = [__styles.sep]

  if (className) {
    classes.push(className)
  }
  if (size) {
    sep.push(__styles.size[size])
  }

  return (
    <ol className={classes.join(' ')} style={style} aria-label="Breadcrumb">
      {children!.map((child: React.ReactNode, idx: number) => (
        <li className={__styles.item_container}>
          {child}
          {idx + 1 < children!.length && (
            <div className={sep.join('')} aria-hidden={true}>
              /
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

interface BreadcrumbItemProps {
  children: React.ReactNode
  active?: boolean
  onClick?: any
  style?: React.CSSProperties
}

export function Item({
  children,
  active,
  onClick,
  style,
}: BreadcrumbItemProps) {
  let __styles = styleHandler('breadcrumb')

  let classes = [__styles.item]

  if (active) classes.push(__styles.item_active)

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
