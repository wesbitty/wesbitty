import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useState } from 'react'
// import * as RadixContextMenu from '@radix-ui/react-dropdown-menu'
import { IconCheck } from '../Icon/icons/IconCheck'
import * as RadixContextMenu from '@radix-ui/react-context-menu'
const ContextMenuStyles = {}
function ContextMenu({
  onOpenChange,
  alignOffset = 6,
  overlay,
  children,
  className,
  style,
}) {
  // let classes = [ContextMenuStyles['wsb-contextmenu__content']]
  // if (className) {
  //   classes.push(className)
  // }
  return _jsxs(
    RadixContextMenu.Root,
    Object.assign(
      { onOpenChange: onOpenChange },
      {
        children: [
          _jsx(
            RadixContextMenu.Trigger,
            // className={ContextMenuStyles['wsb-contextmenu__trigger']}
            { children: children }
          ),
          _jsx(
            RadixContextMenu.Content,
            Object.assign(
              {
                sideOffset: alignOffset,
                // className={classes.join(' ')}
                style: style,
              },
              { children: overlay }
            )
          ),
        ],
      }
    )
  )
}
export function Item({ children, icon, disabled, onClick }) {
  return _jsxs(
    RadixContextMenu.Item,
    // className={ContextMenuStyles['wsb-contextmenu-item']}
    Object.assign(
      {
        // className={ContextMenuStyles['wsb-contextmenu-item']}
        disabled: disabled,
        onSelect: onClick,
      },
      { children: [icon && icon, _jsx('span', { children: children })] }
    )
  )
}
export function Misc({ children, icon }) {
  return _jsxs('div', { children: [icon && icon, children] })
}
export function Checkbox({
  children,
  checked: propsChecked,
  onChange,
  disabled,
  ItemIndicator,
}) {
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false)
  const handleChange = (e) => {
    if (onChange) onChange(e)
    setChecked(e)
  }
  return _jsxs(
    RadixContextMenu.CheckboxItem,
    Object.assign(
      {
        checked: checked,
        onCheckedChange: handleChange,
        // className={`${ContextMenuStyles['wsb-contextmenu-item']} ${ContextMenuStyles['wsb-contextmenu-input']}`}
        disabled: disabled,
      },
      {
        children: [
          _jsxs(
            RadixContextMenu.ItemIndicator,
            // className={ContextMenuStyles['wsb-contextmenu-input__check']}
            {
              children: [
                ItemIndicator
                  ? ItemIndicator
                  : _jsx(IconCheck, { size: 'tiny' }),
                _jsx(RadixContextMenu.CheckboxItem, {}),
              ],
            }
          ),
          _jsx('span', { children: children }),
        ],
      }
    )
  )
}
export function Radio({ children, value, ItemIndicator }) {
  return _jsxs(
    RadixContextMenu.RadioItem,
    Object.assign(
      { value: value },
      {
        children: [
          _jsx(
            RadixContextMenu.ItemIndicator,
            // className={ContextMenuStyles['wsb-contextmenu-input__check']}
            {
              children: ItemIndicator
                ? ItemIndicator
                : _jsx(IconCheck, { size: 'tiny' }),
            }
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
    RadixContextMenu.RadioGroup,
    Object.assign(
      { value: value, onValueChange: handleChange },
      { children: children }
    )
  )
}
export function Label({ children }) {
  return _jsx(
    RadixContextMenu.Label,
    // className={ContextMenuStyles['wsb-contextmenu-label']}
    { children: children }
  )
}
ContextMenu.Item = Item
ContextMenu.Misc = Misc
ContextMenu.Checkbox = Checkbox
ContextMenu.Radio = Radio
ContextMenu.RadioGroup = RadioGroup
ContextMenu.Label = Label
export default ContextMenu
