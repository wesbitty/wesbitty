import { __rest } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import styleHandler from '../../theme/handler.js';

const Collapsible = _a => {
  //   const [_open, setOpen] = React.useState(open)
  var {
      open = undefined,
      children,
      className
    } = _a,
    props = __rest(_a, ["open", "children", "className"]);
  // function handleOpenChange(e: boolean) {
  //   console.log(e)
  //   if (onChange) onChange(e)
  // }
  return jsx(RadixCollapsible.Root, Object.assign({
    defaultOpen: props.defaultOpen,
    open: open,
    onOpenChange: props.onOpenChange,
    disabled: props.disabled,
    className: className
  }, {
    children: children
  }));
};
function Trigger(_ref) {
  let {
    children,
    asChild
  } = _ref;
  return jsx(RadixCollapsible.Trigger, Object.assign({
    asChild: asChild
  }, {
    children: children
  }));
}
function Content(_ref2) {
  let {
    children,
    className
  } = _ref2;
  const __styles = styleHandler('collapsible');
  return jsx(RadixCollapsible.Content, Object.assign({
    className: [__styles.content, className].join(' ')
  }, {
    children: children
  }));
}
Collapsible.Trigger = Trigger;
Collapsible.Content = Content;

export { Collapsible, Content, Trigger, Collapsible as default };
