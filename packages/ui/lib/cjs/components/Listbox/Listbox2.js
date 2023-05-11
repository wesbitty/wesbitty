'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var RadixDropdown = require('@radix-ui/react-dropdown-menu');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var InputIconContainer = require('../../lib/Layout/InputIconContainer.js');
var InputErrorIcon = require('../../lib/Layout/InputErrorIcon.js');
var IconCheck = require('../Icon/icons/IconCheck/IconCheck2.js');
var FormContext = require('../Form/FormContext.js');
var lodash = require('lodash');
var SelectContext = require('./SelectContext.js');
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

var RadixDropdown__namespace = /*#__PURE__*/_interopNamespace(RadixDropdown);

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return classes.filter(Boolean).join(' ');
}
function Listbox(_ref) {
  let {
    children,
    className,
    descriptionText,
    error,
    icon,
    id = '',
    name = '',
    label,
    labelOptional,
    layout,
    value = undefined,
    onChange,
    onFocus,
    onBlur,
    style,
    size = 'medium',
    defaultValue,
    borderless = false,
    validation,
    disabled,
    optionsWidth
  } = _ref;
  const [selected, setSelected] = React.useState(undefined);
  const [selectedNode, setSelectedNode] = React.useState({});
  const __styles = handler["default"]('listbox');
  const triggerRef = React.useRef(null);
  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation
  } = FormContext.useFormContext();
  if (values && !value) {
    defaultValue = values[id || name];
  }
  function handleBlurEvent(e) {
    if (handleBlur) handleBlur(e);
    if (onBlur) onBlur(e);
  }
  if (!error) {
    if (errors && !error) error = errors[id || name];
    error = touched && touched[id || name] ? error : undefined;
  }
  React.useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);
  React.useEffect(() => {
    // handle listbox options width size
    function handleResize() {
      // Set window width/height to state
      var _a;
      document.documentElement.style.setProperty('--width-listbox', `${optionsWidth ? optionsWidth : (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  React.useEffect(() => {
    const data = children;
    const content = lodash.flatten(data);
    function findNode(_value) {
      return content.find(node => node.props.value === _value);
    }
    /*
     * value prop overrides everything
     */
    if (value) {
      setSelected(value);
      const node = findNode(value);
      setSelectedNode((node === null || node === void 0 ? void 0 : node.props) ? node.props : undefined);
      return;
    }
    /*
     * if no value prop, then use selected state
     */
    if (selected) {
      const node = findNode(selected);
      setSelectedNode((node === null || node === void 0 ? void 0 : node.props) ? node.props : undefined);
      return;
    } else if (defaultValue) {
      setSelected(defaultValue);
      const node = findNode(selected);
      setSelectedNode((node === null || node === void 0 ? void 0 : node.props) ? node.props : undefined);
      return;
    } else {
      /*
       * if no selected value (including a `defaultvalue`), then use first child
       */
      setSelectedNode(content[0].props);
      return;
    }
  }, [selected]);
  function handleOnChange(value) {
    if (onChange) onChange(value);
    setSelected(value);
    /*
     * Create change event for formik
     * formik expects an input change event
     */
    let event = {};
    event.target = {
      type: 'select',
      name: name,
      id: id,
      value: value,
      checked: undefined
      // outerHTML: undefined,
      // options: undefined,
      // multiple: undefined,
    };
    // update form
    // Create a new 'change' event
    if (formContextOnChange) formContextOnChange(event);
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(value));
  }
  let selectClasses = [__styles.container, __styles.base];
  if (error) selectClasses.push(__styles.variants.error);
  if (!error) selectClasses.push(__styles.variants.standard);
  // if (icon) selectClasses.push(SelectStyles['wsb-listbox--with-icon'])
  if (icon) selectClasses.push(__styles.with_icon);
  // if (size) selectClasses.push(SelectStyles[`wsb-listbox--${size}`])
  if (size) selectClasses.push(__styles.size[size]);
  // if (borderless) selectClasses.push(SelectStyles['wsb-listbox--borderless'])
  if (disabled) selectClasses.push(__styles.disabled);
  return jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
    label: label,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    descriptionText: descriptionText,
    className: className,
    style: style,
    size: size
  }, {
    children: jsxRuntime.jsxs(RadixDropdown__namespace.Root, {
      children: [jsxRuntime.jsx(RadixDropdown__namespace.Trigger, Object.assign({
        asChild: true,
        disabled: disabled
      }, {
        children: jsxRuntime.jsxs("button", Object.assign({
          ref: triggerRef,
          className: selectClasses.join(' '),
          onBlur: handleBlurEvent,
          onFocus: onFocus,
          name: name,
          id: id
        }, {
          children: [jsxRuntime.jsxs("span", Object.assign({
            className: __styles.addOnBefore
          }, {
            children: [icon && jsxRuntime.jsx(InputIconContainer["default"], {
              icon: icon
            }), (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.addOnBefore) && jsxRuntime.jsx(selectedNode.addOnBefore, {}), jsxRuntime.jsx("span", Object.assign({
              className: __styles.label
            }, {
              children: selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.label
            }))]
          })), jsxRuntime.jsx("span", Object.assign({
            className: __styles.chevron_container
          }, {
            children: jsxRuntime.jsx("svg", Object.assign({
              className: __styles.chevron,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true"
            }, {
              children: jsxRuntime.jsx("path", {
                fillRule: "evenodd",
                d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                clipRule: "evenodd"
              })
            }))
          })), error && jsxRuntime.jsx("div", Object.assign({
            className: __styles.actions_container
          }, {
            children: error && jsxRuntime.jsx(InputErrorIcon["default"], {
              size: size
            })
          }))]
        }))
      })), jsxRuntime.jsx(RadixDropdown__namespace.Content, Object.assign({
        sideOffset: 6,
        loop: true,
        side: 'bottom',
        align: "center",
        className: __styles.options_container
      }, {
        children: jsxRuntime.jsx("div", {
          children: jsxRuntime.jsx(SelectContext.SelectContext.Provider, Object.assign({
            value: {
              onChange: handleOnChange,
              selected
            }
          }, {
            children: children
          }))
        })
      }))]
    })
  }));
}
function SelectOption(_ref2) {
  let {
    id,
    value,
    label,
    disabled = false,
    children,
    className = '',
    addOnBefore
  } = _ref2;
  const __styles = handler["default"]('listbox');
  return jsxRuntime.jsx(SelectContext.SelectContext.Consumer, {
    children: _ref3 => {
      let {
        onChange,
        selected
      } = _ref3;
      const active = selected === value ? true : false;
      return jsxRuntime.jsxs(RadixDropdown__namespace.Item, Object.assign({
        className: `${classNames(__styles.option, active ? __styles.option_active : ' ', disabled ? __styles.option_disabled : ' ')} ${className}`,
        onSelect: () => !disabled ? onChange(value) : {}
      }, {
        children: [jsxRuntime.jsxs("div", Object.assign({
          className: __styles.option_inner
        }, {
          children: [addOnBefore && addOnBefore({
            active,
            selected
          }), jsxRuntime.jsx("span", {
            children: typeof children === 'function' ? children({
              active,
              selected
            }) : children
          })]
        })), active ? jsxRuntime.jsx("span", Object.assign({
          className: classNames(__styles.option_check, active ? __styles.option_check_active : '')
        }, {
          children: jsxRuntime.jsx(IconCheck["default"], {
            className: __styles.option_check_icon,
            "aria-hidden": "true"
          })
        })) : null]
      }), id);
    }
  });
}
Listbox.Option = SelectOption;

exports["default"] = Listbox;
