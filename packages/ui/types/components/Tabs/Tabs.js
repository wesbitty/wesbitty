import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useState } from 'react'
import { TabsContext } from './TabsContext'
import * as TabsPrimitive from '@radix-ui/react-tabs'
// @ts-ignore
// import TabsStyles from './Tabs.module.css'
import styleHandler from '../../theme/handler'
function Tabs({
  children,
  defaultActiveId,
  activeId,
  type = 'pills',
  size = 'tiny',
  block,
  onChange,
  onClick,
  scrollable,
  addOnBefore,
  addOnAfter,
  listClassNames,
}) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveId
      ? defaultActiveId
      : // if no defaultActiveId is set use the first panel
      children && children[0].props
      ? children[0].props.id
      : ''
  )
  let __styles = styleHandler('tabs')
  // activeId state can be overriden externally with `active`
  // defaults to use activeTab
  const active = activeId ? activeId : activeTab
  function onTabClick(id) {
    const newTabSelected = id !== active
    setActiveTab(id)
    if (onClick) onClick(id)
    if (onChange && newTabSelected) onChange(id)
  }
  // for styling the tabs for underline style
  const underlined = type === 'underlined'
  // for styling the tabs for cards style
  const listClasses = [__styles[type].list]
  if (scrollable) listClasses.push(__styles.scrollable)
  if (listClassNames) listClasses.push(listClassNames)
  // if only 1 react child, it needs to be converted to a list/array
  // this is so 1 tab can be displayed
  if (children && !Array.isArray(children)) {
    children = [children]
  }
  return _jsxs(
    TabsPrimitive.Root,
    Object.assign(
      {
        defaultValue: defaultActiveId,
        value: active,
        className: __styles.base,
      },
      {
        children: [
          _jsxs(
            TabsPrimitive.List,
            Object.assign(
              { className: listClasses.join(' ') },
              {
                children: [
                  addOnBefore,
                  children.map((tab) => {
                    const activeMatch = active === tab.props.id
                    const triggerClasses = [
                      __styles[type].base,
                      __styles.size[size],
                    ]
                    if (activeMatch) {
                      triggerClasses.push(__styles[type].active)
                    } else {
                      triggerClasses.push(__styles[type].inactive)
                    }
                    if (block) {
                      triggerClasses.push(__styles.block)
                    }
                    return _jsxs(
                      TabsPrimitive.Trigger,
                      Object.assign(
                        {
                          onKeyDown: (e) => {
                            if (e.keyCode === 13) {
                              e.preventDefault()
                              onTabClick(tab.props.id)
                            }
                          },
                          onClick: () => onTabClick(tab.props.id),
                          value: tab.props.id,
                          className: triggerClasses.join(' '),
                        },
                        {
                          children: [
                            tab.props.icon,
                            _jsx('span', { children: tab.props.label }),
                          ],
                        }
                      ),
                      `${tab.props.id}-tab-button`
                    )
                  }),
                  addOnAfter,
                ],
              }
            )
          ),
          _jsx(
            TabsContext.Provider,
            Object.assign(
              { value: { activeId: active } },
              { children: children }
            )
          ),
        ],
      }
    )
  )
}
export function Panel({ children, id }) {
  let __styles = styleHandler('tabs')
  return _jsx(TabsContext.Consumer, {
    children: ({ activeId }) => {
      const active = activeId === id
      return _jsx(
        TabsPrimitive.Content,
        Object.assign(
          { value: id, className: __styles.content },
          { children: children }
        )
      )
    },
  })
}
Tabs.Panel = Panel
export default Tabs
