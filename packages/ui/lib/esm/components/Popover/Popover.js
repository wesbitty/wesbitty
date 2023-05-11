import { jsxs, jsx } from 'react/jsx-runtime';
import * as RadixPopover from '@radix-ui/react-popover';
import IconX from '../Icon/icons/IconX/IconX2.js';
import styleHandler from '../../theme/handler.js';

function Popover(_ref) {
  let {
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
    size = 'content'
  } = _ref;
  const __styles = styleHandler('popover');
  let classes = [__styles.content, __styles.size[size]];
  if (className) {
    classes.push(className);
  }
  return jsxs(RadixPopover.Root, Object.assign({
    defaultOpen: defaultOpen,
    modal: modal,
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [jsx(RadixPopover.Trigger
    // className={DropdownStyles['wsb-popover__trigger']}
    , Object.assign({
      // className={DropdownStyles['wsb-popover__trigger']}
      className: __styles.trigger,
      "aria-label": ariaLabel
    }, {
      children: children
    })), jsxs(RadixPopover.Content, Object.assign({
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style,
      portalled: portalled
    }, {
      children: [arrow && jsx(RadixPopover.Arrow
      // className={DropdownStyles['wsb-popover__arrow']}
      , {
        // className={DropdownStyles['wsb-popover__arrow']}
        offset: 10
      }), header && jsx("div", Object.assign({
        className: __styles.header
      }, {
        children: header
      })), overlay, footer && jsx("div", Object.assign({
        className: __styles.footer
      }, {
        children: footer
      }))]
    }))]
  }));
}
function Close() {
  const __styles = styleHandler('popover');
  return jsx(RadixPopover.Close, Object.assign({
    className: __styles.close
  }, {
    children: jsx(IconX, {
      size: 14,
      strokeWidth: 2
    })
  }));
}
function Seperator() {
  const __styles = styleHandler('popover');
  return jsx("div", {
    className: __styles.seperator
  });
}
Popover.Seperator = Seperator;
Popover.Close = Close;

export { Popover as default };
