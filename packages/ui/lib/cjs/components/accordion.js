'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var IconChevronUp = require('./Icon/icons/IconChevronUp/IconChevronUp2.js');
var handler = require('../theme/handler.js');
var RadixAccordion = require('@radix-ui/react-accordion');
var IconChevronDown = require('./Icon/icons/IconChevronDown/IconChevronDown2.js');

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

var RadixAccordion__namespace = /*#__PURE__*/_interopNamespace(RadixAccordion);

const AccordionContext = /*#__PURE__*/React.createContext({
  chevronAlign: 'left',
  justified: true,
  type: 'default'
  // currentItems: [],
});

function Accordion(_ref) {
  let {
    children,
    className,
    defaultActiveId = [],
    icon = jsxRuntime.jsx(IconChevronUp["default"], {
      strokeWidth: 2
    }),
    iconPosition = 'right',
    onChange,
    openBehaviour = 'multiple',
    type = 'default',
    // size, // TO DO
    defaultValue = undefined,
    justified = true,
    chevronAlign
  } = _ref;
  // const [currentItems, setCurrentItems] = useState(defaultValue || [])
  const __styles = handler["default"]('accordion');
  let containerClasses = [__styles.variants[type].base];
  if (className) {
    containerClasses.push(className);
  }
  // let currentItems = defaultValue || []
  const contextValue = {
    chevronAlign,
    justified,
    type,
    defaultValue
  };
  function handleOnChange(e) {
    if (onChange) onChange(e);
    e == typeof String ? e.split(' ') : e;
    // setCurrentItems(e)
    console.log('about to change state');
    // currentItems = e
    // console.log('currentItems', currentItems)
  }

  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsx(RadixAccordion__namespace.Root, {
      type: openBehaviour,
      onValueChange: handleOnChange,
      defaultValue: defaultValue,
      className: containerClasses.join(' '),
      children: jsxRuntime.jsx(AccordionContext.Provider, Object.assign({
        value: Object.assign({}, contextValue)
      }, {
        children: jsxRuntime.jsx("div", Object.assign({
          className: containerClasses.join(' ')
        }, {
          children: children
        }))
      }))
    })
  });
}
function Item(_ref2) {
  let {
    children,
    className,
    header,
    id,
    icon
  } = _ref2;
  const __styles = handler["default"]('accordion');
  // const [open, setOpen] = useState(false)
  const {
    type,
    justified,
    chevronAlign
    // currentItems,
    // defaultActiveId, iconPosition, onChange
  } = React.useContext(AccordionContext);
  let triggerClasses = [__styles.variants[type].trigger];
  if (justified) triggerClasses.push(__styles.justified);
  if (className) triggerClasses.push(className);
  let chevronClasses = [__styles.chevron.base, __styles.chevron.align[chevronAlign]];
  // console.log('currentItems', currentItems)
  return jsxRuntime.jsxs(RadixAccordion__namespace.Item, Object.assign({
    value: id,
    className: __styles.variants[type].container
  }, {
    children: [jsxRuntime.jsxs(RadixAccordion__namespace.Trigger, Object.assign({
      className: triggerClasses.join(' ')
    }, {
      children: [header, jsxRuntime.jsx(IconChevronDown["default"], {
        "aria-hidden": true,
        className: chevronClasses.join(' '),
        strokeWidth: 2
      })]
    })), jsxRuntime.jsx(RadixAccordion__namespace.Content, Object.assign({
      className: __styles.variants[type].content
    }, {
      children: jsxRuntime.jsx("div", Object.assign({
        className: __styles.variants[type].panel
      }, {
        children: children
      }))
    }))]
  }));
}
Accordion.Item = Item;

exports.Accordion = Accordion;
exports.Item = Item;
