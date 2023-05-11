import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { IconChevronRight } from '../Icon/icons/IconChevronRight'
// @ts-ignore
import BreadcrumbStyle from './Breadcrumb.module.css'
const Breadcrumb = ({ className, style, children, spacing = 'small' }) => {
  let classes = [BreadcrumbStyle['wsb-breadcrumb--container']]
  let seperatorClasses = [BreadcrumbStyle['wsb-breadcrumb--separator']]
  if (className) {
    classes.push(className)
  }
  if (spacing) {
    seperatorClasses.push(`wsb-breadcrumb--separator-${spacing}`)
  }
  return _jsx(
    'ol',
    Object.assign(
      {
        className: classes.join(' '),
        style: style,
        'aria-label': 'Breadcrumb',
      },
      {
        children: children.map((child, idx) =>
          _jsxs(
            'li',
            Object.assign(
              { className: BreadcrumbStyle['wsb-breadcrumb--item-container'] },
              {
                children: [
                  child,
                  idx + 1 < children.length &&
                    _jsx(IconChevronRight, {
                      size: 12,
                      className: seperatorClasses.join(' '),
                      'aria-hidden': 'true',
                    }),
                ],
              }
            )
          )
        ),
      }
    )
  )
}
export function Item({ children, active, onClick, style }) {
  let classes = [BreadcrumbStyle['wsb-breadcrumb--item']]
  if (active) classes.push(BreadcrumbStyle['wsb-breadcrumb--item__active'])
  return _jsx(
    'span',
    Object.assign(
      {
        className: classes.join(' '),
        onClick: onClick,
        style: style,
        'aria-current': active ? 'page' : false,
      },
      { children: children }
    )
  )
}
Breadcrumb.Item = Item
export default Breadcrumb
