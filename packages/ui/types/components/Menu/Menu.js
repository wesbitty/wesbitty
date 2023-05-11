import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Typography from '../Typography'
import { MenuContextProvider, useMenuContext } from './MenuContext'
import styleHandler from '../../theme/handler'
function Menu({ children, className, style, type = 'text' }) {
  return _jsx(
    'nav',
    Object.assign(
      {
        role: 'menu',
        'aria-label': 'Sidebar',
        'aria-orientation': 'vertical',
        'aria-labelledby': 'options-menu',
        className: className,
        style: style,
      },
      {
        children: _jsx(
          MenuContextProvider,
          Object.assign(
            { type: type },
            { children: _jsx('ul', { children: children }) }
          )
        ),
      }
    )
  )
}
export function Item({
  children,
  icon,
  active,
  rounded,
  onClick,
  doNotCloseOverlay = false,
  showActiveBar = false,
  style,
}) {
  const __styles = styleHandler('menu')
  const { type } = useMenuContext()
  let classes = [__styles.item.base]
  classes.push(__styles.item.variants[type].base)
  if (active) {
    classes.push(__styles.item.variants[type].active)
  } else {
    classes.push(__styles.item.variants[type].normal)
  }
  let contentClasses = [__styles.item.content.base]
  if (active) {
    contentClasses.push(__styles.item.content.active)
  } else {
    contentClasses.push(__styles.item.content.normal)
  }
  let iconClasses = [__styles.item.icon.base]
  if (active) {
    iconClasses.push(__styles.item.icon.active)
  } else {
    iconClasses.push(__styles.item.icon.normal)
  }
  return _jsx(
    'li',
    Object.assign(
      { role: 'menuitem', className: 'outline-none' },
      {
        children: _jsxs(
          'a',
          Object.assign(
            {
              style: style,
              className: classes.join(' '),
              onClick: onClick,
              'aria-current': active ? 'page' : undefined,
            },
            {
              children: [
                icon &&
                  _jsx(
                    'span',
                    Object.assign(
                      { className: iconClasses.join(' ') },
                      { children: icon }
                    )
                  ),
                _jsx(
                  'span',
                  Object.assign(
                    { className: contentClasses.join(' ') },
                    { children: children }
                  )
                ),
              ],
            }
          )
        ),
      }
    )
  )
}
export function Group({ children, icon, title }) {
  const __styles = styleHandler('menu')
  const { type } = useMenuContext()
  return _jsxs(
    'div',
    Object.assign(
      {
        className: [__styles.group.base, __styles.group.variants[type]].join(
          ' '
        ),
      },
      {
        children: [
          icon &&
            _jsx(
              'span',
              Object.assign(
                { className: __styles.group.icon },
                { children: icon }
              )
            ),
          _jsx(
            'span',
            Object.assign(
              { className: __styles.group.content },
              { children: title }
            )
          ),
          children,
        ],
      }
    )
  )
}
export function Misc({ children }) {
  return _jsx('div', {
    children: _jsx(Typography.Text, {
      children: _jsx('span', { children: children }),
    }),
  })
}
Menu.Item = Item
Menu.Group = Group
Menu.Misc = Misc
export default Menu
