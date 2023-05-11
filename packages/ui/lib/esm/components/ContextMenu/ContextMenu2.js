import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import IconCheck from '../Icon/icons/IconCheck/IconCheck2.js';
import * as RadixContextMenu from '@radix-ui/react-context-menu';

function ContextMenu(_ref) {
  let {
    onOpenChange,
    alignOffset = 6,
    overlay,
    children,
    className,
    style
  } = _ref;
  // let classes = [ContextMenuStyles['wsb-contextmenu__content']]
  // if (className) {
  //   classes.push(className)
  // }
  return jsxs(RadixContextMenu.Root, Object.assign({
    onOpenChange: onOpenChange
  }, {
    children: [jsx(RadixContextMenu.Trigger
    // className={ContextMenuStyles['wsb-contextmenu__trigger']}
    , {
      children: children
    }), jsx(RadixContextMenu.Content, Object.assign({
      sideOffset: alignOffset,
      // className={classes.join(' ')}
      style: style
    }, {
      children: overlay
    }))]
  }));
}
function Item(_ref2) {
  let {
    children,
    icon,
    disabled,
    onClick
  } = _ref2;
  return jsxs(RadixContextMenu.Item
  // className={ContextMenuStyles['wsb-contextmenu-item']}
  , Object.assign({
    // className={ContextMenuStyles['wsb-contextmenu-item']}
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsx("span", {
      children: children
    })]
  }));
}
function Misc(_ref3) {
  let {
    children,
    icon
  } = _ref3;
  return jsxs("div", {
    children: [icon && icon, children]
  });
}
function Checkbox(_ref4) {
  let {
    children,
    checked: propsChecked,
    onChange,
    disabled,
    ItemIndicator
  } = _ref4;
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false);
  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };
  return jsxs(RadixContextMenu.CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    // className={`${ContextMenuStyles['wsb-contextmenu-item']} ${ContextMenuStyles['wsb-contextmenu-input']}`}
    disabled: disabled
  }, {
    children: [jsxs(RadixContextMenu.ItemIndicator
    // className={ContextMenuStyles['wsb-contextmenu-input__check']}
    , {
      children: [ItemIndicator ? ItemIndicator : jsx(IconCheck, {
        size: "tiny"
      }), jsx(RadixContextMenu.CheckboxItem, {})]
    }), jsx("span", {
      children: children
    })]
  }));
}
function Radio(_ref5) {
  let {
    children,
    value,
    ItemIndicator
  } = _ref5;
  return jsxs(RadixContextMenu.RadioItem, Object.assign({
    value: value
  }, {
    children: [jsx(RadixContextMenu.ItemIndicator
    // className={ContextMenuStyles['wsb-contextmenu-input__check']}
    , {
      children: ItemIndicator ? ItemIndicator : jsx(IconCheck, {
        size: "tiny"
      })
    }), jsx("span", {
      children: children
    })]
  }));
}
function RadioGroup(_ref6) {
  let {
    children,
    value: propsValue,
    onChange
  } = _ref6;
  const [value, setValue] = useState(propsValue ? propsValue : '');
  const handleChange = e => {
    if (onChange) onChange(e);
    setValue(e);
  };
  return jsx(RadixContextMenu.RadioGroup, Object.assign({
    value: value,
    onValueChange: handleChange
  }, {
    children: children
  }));
}
function Label(_ref7) {
  let {
    children
  } = _ref7;
  return jsx(RadixContextMenu.Label
  // className={ContextMenuStyles['wsb-contextmenu-label']}
  , {
    children: children
  });
}
ContextMenu.Item = Item;
ContextMenu.Misc = Misc;
ContextMenu.Checkbox = Checkbox;
ContextMenu.Radio = Radio;
ContextMenu.RadioGroup = RadioGroup;
ContextMenu.Label = Label;

export { Checkbox, Item, Label, Misc, Radio, RadioGroup, ContextMenu as default };
