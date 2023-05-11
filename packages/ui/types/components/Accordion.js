import {
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs,
} from 'react/jsx-runtime'
import { createContext, useContext } from 'react'
import { IconChevronUp } from './Icon/icons/IconChevronUp'
import styleHandler from '../theme/handler'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { IconChevronDown } from '..'
const AccordionContext = createContext({
  chevronAlign: 'left',
  justified: true,
  type: 'default',
  // currentItems: [],
})
export function Accordion({
  children,
  className,
  defaultActiveId = [],
  icon = _jsx(IconChevronUp, { strokeWidth: 2 }),
  iconPosition = 'right',
  onChange,
  openBehaviour = 'multiple',
  type = 'default',
  // size, // TO DO
  defaultValue = undefined,
  justified = true,
  chevronAlign,
}) {
  // const [currentItems, setCurrentItems] = useState(defaultValue || [])
  const __styles = styleHandler('accordion')
  let containerClasses = [__styles.variants[type].base]
  if (className) {
    containerClasses.push(className)
  }
  // let currentItems = defaultValue || []
  const contextValue = {
    chevronAlign,
    justified,
    type,
    defaultValue,
  }
  function handleOnChange(e) {
    if (onChange) onChange(e)
    const value = e == typeof String ? e.split(' ') : e
    // setCurrentItems(e)
    console.log('about to change state')
    // currentItems = e
    // console.log('currentItems', currentItems)
  }
  return _jsx(_Fragment, {
    children: _jsx(RadixAccordion.Root, {
      type: openBehaviour,
      onValueChange: handleOnChange,
      defaultValue: defaultValue,
      className: containerClasses.join(' '),
      children: _jsx(
        AccordionContext.Provider,
        Object.assign(
          { value: Object.assign({}, contextValue) },
          {
            children: _jsx(
              'div',
              Object.assign(
                { className: containerClasses.join(' ') },
                { children: children }
              )
            ),
          }
        )
      ),
    }),
  })
}
export function Item({ children, className, header, id, icon }) {
  const __styles = styleHandler('accordion')
  // const [open, setOpen] = useState(false)
  const {
    type,
    justified,
    chevronAlign,
    // currentItems,
    // defaultActiveId, iconPosition, onChange
  } = useContext(AccordionContext)
  let triggerClasses = [__styles.variants[type].trigger]
  if (justified) triggerClasses.push(__styles.justified)
  if (className) triggerClasses.push(className)
  let chevronClasses = [
    __styles.chevron.base,
    __styles.chevron.align[chevronAlign],
  ]
  // console.log('currentItems', currentItems)
  return _jsxs(
    RadixAccordion.Item,
    Object.assign(
      { value: id, className: __styles.variants[type].container },
      {
        children: [
          _jsxs(
            RadixAccordion.Trigger,
            Object.assign(
              { className: triggerClasses.join(' ') },
              {
                children: [
                  header,
                  _jsx(IconChevronDown, {
                    'aria-hidden': true,
                    className: chevronClasses.join(' '),
                    strokeWidth: 2,
                  }),
                ],
              }
            )
          ),
          _jsx(
            RadixAccordion.Content,
            Object.assign(
              { className: __styles.variants[type].content },
              {
                children: _jsx(
                  'div',
                  Object.assign(
                    { className: __styles.variants[type].panel },
                    { children: children }
                  )
                ),
              }
            )
          ),
        ],
      }
    )
  )
}
Accordion.Item = Item
