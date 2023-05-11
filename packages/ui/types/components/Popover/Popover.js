import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import * as RadixPopover from '@radix-ui/react-popover'
import { IconX } from '../Icon/icons/IconX'
import styleHandler from '../../theme/handler'
function Popover({
  align = 'center',
  ariaLabel,
  arrow = false,
  children,
  className,
  defaultOpen = false,
  modal,
  onOpenChange,
  open,
  overlay,
  portalled,
  side = 'bottom',
  sideOffset = 6,
  style,
  header,
  footer,
  size = 'content',
}) {
  const __styles = styleHandler('popover')
  let classes = [__styles.content, __styles.size[size]]
  if (className) {
    classes.push(className)
  }
  return _jsxs(
    RadixPopover.Root,
    Object.assign(
      {
        defaultOpen: defaultOpen,
        modal: modal,
        onOpenChange: onOpenChange,
        open: open,
      },
      {
        children: [
          _jsx(
            RadixPopover.Trigger,
            // className={DropdownStyles['wsb-popover__trigger']}
            Object.assign(
              {
                // className={DropdownStyles['wsb-popover__trigger']}
                className: __styles.trigger,
                'aria-label': ariaLabel,
              },
              { children: children }
            )
          ),
          _jsxs(
            RadixPopover.Content,
            Object.assign(
              {
                sideOffset: sideOffset,
                side: side,
                align: align,
                className: classes.join(' '),
                style: style,
                portalled: portalled,
              },
              {
                children: [
                  arrow &&
                    _jsx(
                      RadixPopover.Arrow,
                      // className={DropdownStyles['wsb-popover__arrow']}
                      {
                        // className={DropdownStyles['wsb-popover__arrow']}
                        offset: 10,
                      }
                    ),
                  header &&
                    _jsx(
                      'div',
                      Object.assign(
                        { className: __styles.header },
                        { children: header }
                      )
                    ),
                  overlay,
                  footer &&
                    _jsx(
                      'div',
                      Object.assign(
                        { className: __styles.footer },
                        { children: footer }
                      )
                    ),
                ],
              }
            )
          ),
        ],
      }
    )
  )
}
function Close() {
  const __styles = styleHandler('popover')
  return _jsx(
    RadixPopover.Close,
    Object.assign(
      { className: __styles.close },
      { children: _jsx(IconX, { size: 14, strokeWidth: 2 }) }
    )
  )
}
function Seperator() {
  const __styles = styleHandler('popover')
  return _jsx('div', { className: __styles.seperator })
}
Popover.Seperator = Seperator
Popover.Close = Close
export default Popover
