'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var RadixCollapsible = require('@radix-ui/react-collapsible');
var handler = require('../../theme/handler.js');

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

var RadixCollapsible__namespace = /*#__PURE__*/_interopNamespace(RadixCollapsible);

const Collapsible = _a => {
  //   const [_open, setOpen] = React.useState(open)
  var {
      open = undefined,
      children,
      className
    } = _a,
    props = _tslib.__rest(_a, ["open", "children", "className"]);
  // function handleOpenChange(e: boolean) {
  //   console.log(e)
  //   if (onChange) onChange(e)
  // }
  return jsxRuntime.jsx(RadixCollapsible__namespace.Root, Object.assign({
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
  return jsxRuntime.jsx(RadixCollapsible__namespace.Trigger, Object.assign({
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
  const __styles = handler["default"]('collapsible');
  return jsxRuntime.jsx(RadixCollapsible__namespace.Content, Object.assign({
    className: [__styles.content, className].join(' ')
  }, {
    children: children
  }));
}
Collapsible.Trigger = Trigger;
Collapsible.Content = Content;

exports.Collapsible = Collapsible;
exports.Content = Content;
exports.Trigger = Trigger;
exports["default"] = Collapsible;
