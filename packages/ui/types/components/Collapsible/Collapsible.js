var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import { jsx as _jsx } from 'react/jsx-runtime'
import * as RadixCollapsible from '@radix-ui/react-collapsible'
import styleHandler from '../../theme/handler'
export const Collapsible = (_a) => {
  //   const [_open, setOpen] = React.useState(open)
  var { open = undefined, children, className } = _a,
    props = __rest(_a, ['open', 'children', 'className'])
  // function handleOpenChange(e: boolean) {
  //   console.log(e)
  //   if (onChange) onChange(e)
  // }
  return _jsx(
    RadixCollapsible.Root,
    Object.assign(
      {
        defaultOpen: props.defaultOpen,
        open: open,
        onOpenChange: props.onOpenChange,
        disabled: props.disabled,
        className: className,
      },
      { children: children }
    )
  )
}
export function Trigger({ children, asChild }) {
  return _jsx(
    RadixCollapsible.Trigger,
    Object.assign({ asChild: asChild }, { children: children })
  )
}
export function Content({ children, className }) {
  const __styles = styleHandler('collapsible')
  return _jsx(
    RadixCollapsible.Content,
    Object.assign(
      { className: [__styles.content, className].join(' ') },
      { children: children }
    )
  )
}
Collapsible.Trigger = Trigger
Collapsible.Content = Content
export default Collapsible
