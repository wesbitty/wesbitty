'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var IconCheck = require('../Icon/icons/IconCheck/IconCheck2.js');
var RadixContextMenu = require('@radix-ui/react-context-menu');

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

var RadixContextMenu__namespace = /*#__PURE__*/_interopNamespace(RadixContextMenu);

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
  return jsxRuntime.jsxs(RadixContextMenu__namespace.Root, Object.assign({
    onOpenChange: onOpenChange
  }, {
    children: [jsxRuntime.jsx(RadixContextMenu__namespace.Trigger
    // className={ContextMenuStyles['wsb-contextmenu__trigger']}
    , {
      children: children
    }), jsxRuntime.jsx(RadixContextMenu__namespace.Content, Object.assign({
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
  return jsxRuntime.jsxs(RadixContextMenu__namespace.Item
  // className={ContextMenuStyles['wsb-contextmenu-item']}
  , Object.assign({
    // className={ContextMenuStyles['wsb-contextmenu-item']}
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsxRuntime.jsx("span", {
      children: children
    })]
  }));
}
function Misc(_ref3) {
  let {
    children,
    icon
  } = _ref3;
  return jsxRuntime.jsxs("div", {
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
  const [checked, setChecked] = React.useState(propsChecked ? propsChecked : false);
  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };
  return jsxRuntime.jsxs(RadixContextMenu__namespace.CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    // className={`${ContextMenuStyles['wsb-contextmenu-item']} ${ContextMenuStyles['wsb-contextmenu-input']}`}
    disabled: disabled
  }, {
    children: [jsxRuntime.jsxs(RadixContextMenu__namespace.ItemIndicator
    // className={ContextMenuStyles['wsb-contextmenu-input__check']}
    , {
      children: [ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconCheck["default"], {
        size: "tiny"
      }), jsxRuntime.jsx(RadixContextMenu__namespace.CheckboxItem, {})]
    }), jsxRuntime.jsx("span", {
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
  return jsxRuntime.jsxs(RadixContextMenu__namespace.RadioItem, Object.assign({
    value: value
  }, {
    children: [jsxRuntime.jsx(RadixContextMenu__namespace.ItemIndicator
    // className={ContextMenuStyles['wsb-contextmenu-input__check']}
    , {
      children: ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconCheck["default"], {
        size: "tiny"
      })
    }), jsxRuntime.jsx("span", {
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
  const [value, setValue] = React.useState(propsValue ? propsValue : '');
  const handleChange = e => {
    if (onChange) onChange(e);
    setValue(e);
  };
  return jsxRuntime.jsx(RadixContextMenu__namespace.RadioGroup, Object.assign({
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
  return jsxRuntime.jsx(RadixContextMenu__namespace.Label
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

exports.Checkbox = Checkbox;
exports.Item = Item;
exports.Label = Label;
exports.Misc = Misc;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports["default"] = ContextMenu;
