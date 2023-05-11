'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var TabsContext = require('./TabsContext.js');
var TabsPrimitive = require('@radix-ui/react-tabs');
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

var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);

function Tabs(_ref) {
  let {
    children,
    defaultActiveId,
    activeId,
    type = 'pills',
    size = 'tiny',
    block,
    onChange,
    onClick,
    scrollable,
    addOnBefore,
    addOnAfter,
    listClassNames
  } = _ref;
  const [activeTab, setActiveTab] = React.useState(defaultActiveId ? defaultActiveId :
  // if no defaultActiveId is set use the first panel
  children && children[0].props ? children[0].props.id : '');
  let __styles = handler["default"]('tabs');
  // activeId state can be overriden externally with `active`
  // defaults to use activeTab
  const active = activeId ? activeId : activeTab;
  function onTabClick(id) {
    const newTabSelected = id !== active;
    setActiveTab(id);
    if (onClick) onClick(id);
    if (onChange && newTabSelected) onChange(id);
  }
  // for styling the tabs for cards style
  const listClasses = [__styles[type].list];
  if (scrollable) listClasses.push(__styles.scrollable);
  if (listClassNames) listClasses.push(listClassNames);
  // if only 1 react child, it needs to be converted to a list/array
  // this is so 1 tab can be displayed
  if (children && !Array.isArray(children)) {
    children = [children];
  }
  return jsxRuntime.jsxs(TabsPrimitive__namespace.Root, Object.assign({
    defaultValue: defaultActiveId,
    value: active,
    className: __styles.base
  }, {
    children: [jsxRuntime.jsxs(TabsPrimitive__namespace.List, Object.assign({
      className: listClasses.join(' ')
    }, {
      children: [addOnBefore, children.map(tab => {
        const activeMatch = active === tab.props.id;
        const triggerClasses = [__styles[type].base, __styles.size[size]];
        if (activeMatch) {
          triggerClasses.push(__styles[type].active);
        } else {
          triggerClasses.push(__styles[type].inactive);
        }
        if (block) {
          triggerClasses.push(__styles.block);
        }
        return jsxRuntime.jsxs(TabsPrimitive__namespace.Trigger, Object.assign({
          onKeyDown: e => {
            if (e.keyCode === 13) {
              e.preventDefault();
              onTabClick(tab.props.id);
            }
          },
          onClick: () => onTabClick(tab.props.id),
          value: tab.props.id,
          className: triggerClasses.join(' ')
        }, {
          children: [tab.props.icon, jsxRuntime.jsx("span", {
            children: tab.props.label
          })]
        }), `${tab.props.id}-tab-button`);
      }), addOnAfter]
    })), jsxRuntime.jsx(TabsContext.TabsContext.Provider, Object.assign({
      value: {
        activeId: active
      }
    }, {
      children: children
    }))]
  }));
}
function Panel(_ref2) {
  let {
    children,
    id
  } = _ref2;
  let __styles = handler["default"]('tabs');
  return jsxRuntime.jsx(TabsContext.TabsContext.Consumer, {
    children: _ref3 => {
      return jsxRuntime.jsx(TabsPrimitive__namespace.Content, Object.assign({
        value: id,
        className: __styles.content
      }, {
        children: children
      }));
    }
  });
}
Tabs.Panel = Panel;

exports.Panel = Panel;
exports["default"] = Tabs;
