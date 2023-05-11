import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useState } from 'react'
import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { IconCheck } from '../Icon/icons/IconCheck'
import styleHandler from '../../theme/handler'
import { IconTarget } from '../..'
function Dropdown({
  open,
  onOpenChange,
  align = 'center', //Default value
  side = 'bottom', //Default value
  sideOffset = 6,
  overlay,
  children,
  size = 'medium',
  className,
  style,
  arrow,
  isNested,
}) {
  let __styles = styleHandler('dropdown')
  let classes = [__styles.content, __styles.size[size]]
  if (className) {
    classes.push(className)
  }
  return _jsxs(
    RadixDropdown.Root,
    Object.assign(
      { onOpenChange: onOpenChange, open: open },
      {
        children: [
          isNested
            ? _jsx(
                RadixDropdown.TriggerItem,
                Object.assign(
                  { className: [__styles.item_nested].join(' ') },
                  { children: children }
                )
              )
            : _jsx(
                RadixDropdown.Trigger,
                Object.assign(
                  { className: __styles.trigger },
                  { children: children }
                )
              ),
          _jsxs(
            RadixDropdown.Content,
            Object.assign(
              {
                portalled: true,
                sideOffset: sideOffset,
                side: side,
                align: align,
                className: classes.join(' '),
                style: style,
              },
              {
                children: [
                  arrow &&
                    _jsx(RadixDropdown.Arrow, {
                      className: __styles.arrow,
                      offset: 10,
                    }),
                  overlay,
                ],
              }
            )
          ),
        ],
      }
    )
  )
}
export function RightSlot({ children }) {
  let __styles = styleHandler('dropdown')
  return _jsx(
    'div',
    Object.assign({ className: __styles.right_slot }, { children: children })
  )
}
export function Item({ children, icon, disabled, onClick, rightSlot }) {
  let __styles = styleHandler('dropdown')
  return _jsxs(
    RadixDropdown.Item,
    Object.assign(
      { className: __styles.item, disabled: disabled, onSelect: onClick },
      { children: [icon && icon, _jsx('span', { children: children })] }
    )
  )
}
export function TriggerItem({ children, icon, disabled }) {
  let __styles = styleHandler('dropdown')
  return _jsxs(
    'div',
    Object.assign(
      { className: __styles.item },
      { children: [icon && icon, _jsx('span', { children: children })] }
    )
  )
}
export function Misc({ children, icon }) {
  let __styles = styleHandler('dropdown')
  return _jsxs(
    'div',
    Object.assign(
      { className: __styles.misc },
      { children: [icon && icon, children] }
    )
  )
}
export function Seperator() {
  let __styles = styleHandler('dropdown')
  return _jsx(RadixDropdown.Separator, { className: __styles.seperator })
}
export function Checkbox({
  children,
  checked: propsChecked,
  onChange,
  disabled,
  ItemIndicator,
}) {
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false)
  let __styles = styleHandler('dropdown')
  const handleChange = (e) => {
    if (onChange) onChange(e)
    setChecked(e)
  }
  return _jsxs(
    RadixDropdown.CheckboxItem,
    Object.assign(
      {
        checked: checked,
        onCheckedChange: handleChange,
        className: `${__styles.item} ${__styles.input}`,
        disabled: disabled,
      },
      {
        children: [
          _jsxs(
            RadixDropdown.ItemIndicator,
            Object.assign(
              { className: __styles.check },
              {
                children: [
                  ItemIndicator
                    ? ItemIndicator
                    : _jsx(IconCheck, { size: 'tiny', strokeWidth: 3 }),
                  _jsx(RadixDropdown.CheckboxItem, {}),
                ],
              }
            )
          ),
          _jsx('span', { children: children }),
        ],
      }
    )
  )
}
export function Radio({ children, value, ItemIndicator }) {
  let __styles = styleHandler('dropdown')
  return _jsxs(
    RadixDropdown.RadioItem,
    Object.assign(
      { value: value, className: `${__styles.item} ${__styles.input}` },
      {
        children: [
          _jsx(
            RadixDropdown.ItemIndicator,
            Object.assign(
              { className: __styles.check },
              {
                children: ItemIndicator
                  ? ItemIndicator
                  : _jsx(IconTarget, { strokeWidth: 6, size: 10 }),
              }
            )
          ),
          _jsx('span', { children: children }),
        ],
      }
    )
  )
}
export function RadioGroup({ children, value: propsValue, onChange }) {
  const [value, setValue] = useState(propsValue ? propsValue : '')
  const handleChange = (e) => {
    if (onChange) onChange(e)
    setValue(e)
  }
  return _jsx(
    RadixDropdown.RadioGroup,
    Object.assign(
      { value: value, onValueChange: handleChange },
      { children: children }
    )
  )
}
export function Label({ children }) {
  let __styles = styleHandler('dropdown')
  return _jsx(
    RadixDropdown.Label,
    Object.assign({ className: __styles.label }, { children: children })
  )
}
Dropdown.Item = Item
Dropdown.Misc = Misc
Dropdown.Checkbox = Checkbox
Dropdown.Radio = Radio
Dropdown.RadioGroup = RadioGroup
Dropdown.Label = Label
Dropdown.Seperator = Seperator
Dropdown.RightSlot = RightSlot
Dropdown.TriggerItem = TriggerItem
export default Dropdown
