'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var RadixDropdown = require('@radix-ui/react-dropdown-menu');
var IconCheck = require('../Icon/icons/IconCheck/IconCheck2.js');
var handler = require('../../theme/handler.js');
var IconTarget = require('../Icon/icons/IconTarget/IconTarget2.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var RadixDropdown__namespace = /*#__PURE__*/_interopNamespace(RadixDropdown);

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
  let __styles = handler["default"]('dropdown');
  let classes = [__styles.content, __styles.size[size]];
  if (className) {
    classes.push(className);
  }
  return jsxRuntime.jsxs(RadixDropdown__namespace.Root, Object.assign({
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [isNested ? jsxRuntime.jsx(RadixDropdown__namespace.TriggerItem, Object.assign({
      className: [__styles.item_nested].join(' ')
    }, {
      children: children
    })) : jsxRuntime.jsx(RadixDropdown__namespace.Trigger, Object.assign({
      className: __styles.trigger
    }, {
      children: children
    })), jsxRuntime.jsxs(RadixDropdown__namespace.Content, Object.assign({
      portalled: true,
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style
    }, {
      children: [arrow && jsxRuntime.jsx(RadixDropdown__namespace.Arrow, {
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
  let __styles = handler["default"]('dropdown');
  return jsxRuntime.jsx("div", Object.assign({
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
  let __styles = handler["default"]('dropdown');
  return jsxRuntime.jsxs(RadixDropdown__namespace.Item, Object.assign({
    className: __styles.item,
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsxRuntime.jsx("span", {
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
  let __styles = handler["default"]('dropdown');
  return jsxRuntime.jsxs("div", Object.assign({
    className: __styles.item
  }, {
    children: [icon && icon, jsxRuntime.jsx("span", {
      children: children
    })]
  }));
}
function Misc(_ref5) {
  let {
    children,
    icon
  } = _ref5;
  let __styles = handler["default"]('dropdown');
  return jsxRuntime.jsxs("div", Object.assign({
    className: __styles.misc
  }, {
    children: [icon && icon, children]
  }));
}
function Seperator() {
  let __styles = handler["default"]('dropdown');
  return jsxRuntime.jsx(RadixDropdown__namespace.Separator, {
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
  const [checked, setChecked] = React.useState(propsChecked ? propsChecked : false);
  let __styles = handler["default"]('dropdown');
  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };
  return jsxRuntime.jsxs(RadixDropdown__namespace.CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    className: `${__styles.item} ${__styles.input}`,
    disabled: disabled
  }, {
    children: [jsxRuntime.jsxs(RadixDropdown__namespace.ItemIndicator, Object.assign({
      className: __styles.check
    }, {
      children: [ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconCheck["default"], {
        size: "tiny",
        strokeWidth: 3
      }), jsxRuntime.jsx(RadixDropdown__namespace.CheckboxItem, {})]
    })), jsxRuntime.jsx("span", {
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
  let __styles = handler["default"]('dropdown');
  return jsxRuntime.jsxs(RadixDropdown__namespace.RadioItem, Object.assign({
    value: value,
    className: `${__styles.item} ${__styles.input}`
  }, {
    children: [jsxRuntime.jsx(RadixDropdown__namespace.ItemIndicator, Object.assign({
      className: __styles.check
    }, {
      children: ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconTarget["default"], {
        strokeWidth: 6,
        size: 10
      })
    })), jsxRuntime.jsx("span", {
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
  const [value, setValue] = React.useState(propsValue ? propsValue : '');
  const handleChange = e => {
    if (onChange) onChange(e);
    setValue(e);
  };
  return jsxRuntime.jsx(RadixDropdown__namespace.RadioGroup, Object.assign({
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
  let __styles = handler["default"]('dropdown');
  return jsxRuntime.jsx(RadixDropdown__namespace.Label, Object.assign({
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

exports.Checkbox = Checkbox;
exports.Item = Item;
exports.Label = Label;
exports.Misc = Misc;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.RightSlot = RightSlot;
exports.Seperator = Seperator;
exports.TriggerItem = TriggerItem;
exports["default"] = Dropdown;
