import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import IconCheck from '../Icon/icons/IconCheck/IconCheck2.js';
import styleHandler from '../../theme/handler.js';
import IconTarget from '../Icon/icons/IconTarget/IconTarget2.js';

function Dropdown(_ref) {
  let {
    open,
    onOpenChange,
    align = 'center',
    //Default value
    side = 'bottom',
    //Default value
    sideOffset = 6,
    overlay,
    children,
    size = 'medium',
    className,
    style,
    arrow,
    isNested
  } = _ref;
  let __styles = styleHandler('dropdown');
  let classes = [__styles.content, __styles.size[size]];
  if (className) {
    classes.push(className);
  }
  return jsxs(RadixDropdown.Root, Object.assign({
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [isNested ? jsx(RadixDropdown.TriggerItem, Object.assign({
      className: [__styles.item_nested].join(' ')
    }, {
      children: children
    })) : jsx(RadixDropdown.Trigger, Object.assign({
      className: __styles.trigger
    }, {
      children: children
    })), jsxs(RadixDropdown.Content, Object.assign({
      portalled: true,
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style
    }, {
      children: [arrow && jsx(RadixDropdown.Arrow, {
        className: __styles.arrow,
        offset: 10
      }), overlay]
    }))]
  }));
}
function RightSlot(_ref2) {
  let {
    children
  } = _ref2;
  let __styles = styleHandler('dropdown');
  return jsx("div", Object.assign({
    className: __styles.right_slot
  }, {
    children: children
  }));
}
function Item(_ref3) {
  let {
    children,
    icon,
    disabled,
    onClick,
    rightSlot
  } = _ref3;
  let __styles = styleHandler('dropdown');
  return jsxs(RadixDropdown.Item, Object.assign({
    className: __styles.item,
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsx("span", {
      children: children
    })]
  }));
}
function TriggerItem(_ref4) {
  let {
    children,
    icon,
    disabled
  } = _ref4;
  let __styles = styleHandler('dropdown');
  return jsxs("div", Object.assign({
    className: __styles.item
  }, {
    children: [icon && icon, jsx("span", {
      children: children
    })]
  }));
}
function Misc(_ref5) {
  let {
    children,
    icon
  } = _ref5;
  let __styles = styleHandler('dropdown');
  return jsxs("div", Object.assign({
    className: __styles.misc
  }, {
    children: [icon && icon, children]
  }));
}
function Seperator() {
  let __styles = styleHandler('dropdown');
  return jsx(RadixDropdown.Separator, {
    className: __styles.seperator
  });
}
function Checkbox(_ref6) {
  let {
    children,
    checked: propsChecked,
    onChange,
    disabled,
    ItemIndicator
  } = _ref6;
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false);
  let __styles = styleHandler('dropdown');
  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };
  return jsxs(RadixDropdown.CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    className: `${__styles.item} ${__styles.input}`,
    disabled: disabled
  }, {
    children: [jsxs(RadixDropdown.ItemIndicator, Object.assign({
      className: __styles.check
    }, {
      children: [ItemIndicator ? ItemIndicator : jsx(IconCheck, {
        size: "tiny",
        strokeWidth: 3
      }), jsx(RadixDropdown.CheckboxItem, {})]
    })), jsx("span", {
      children: children
    })]
  }));
}
function Radio(_ref7) {
  let {
    children,
    value,
    ItemIndicator
  } = _ref7;
  let __styles = styleHandler('dropdown');
  return jsxs(RadixDropdown.RadioItem, Object.assign({
    value: value,
    className: `${__styles.item} ${__styles.input}`
  }, {
    children: [jsx(RadixDropdown.ItemIndicator, Object.assign({
      className: __styles.check
    }, {
      children: ItemIndicator ? ItemIndicator : jsx(IconTarget, {
        strokeWidth: 6,
        size: 10
      })
    })), jsx("span", {
      children: children
    })]
  }));
}
function RadioGroup(_ref8) {
  let {
    children,
    value: propsValue,
    onChange
  } = _ref8;
  const [value, setValue] = useState(propsValue ? propsValue : '');
  const handleChange = e => {
    if (onChange) onChange(e);
    setValue(e);
  };
  return jsx(RadixDropdown.RadioGroup, Object.assign({
    value: value,
    onValueChange: handleChange
  }, {
    children: children
  }));
}
function Label(_ref9) {
  let {
    children
  } = _ref9;
  let __styles = styleHandler('dropdown');
  return jsx(RadixDropdown.Label, Object.assign({
    className: __styles.label
  }, {
    children: children
  }));
}
Dropdown.Item = Item;
Dropdown.Misc = Misc;
Dropdown.Checkbox = Checkbox;
Dropdown.Radio = Radio;
Dropdown.RadioGroup = RadioGroup;
Dropdown.Label = Label;
Dropdown.Seperator = Seperator;
Dropdown.RightSlot = RightSlot;
Dropdown.TriggerItem = TriggerItem;

export { Checkbox, Item, Label, Misc, Radio, RadioGroup, RightSlot, Seperator, TriggerItem, Dropdown as default };
