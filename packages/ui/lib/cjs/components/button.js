'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var IconContext = require('./Icon/IconContext.js');
var IconLoader = require('./Icon/icons/IconLoader/IconLoader2.js');
var handler = require('../theme/handler.js');
var warning = require('../utils/warning.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Button = /*#__PURE__*/React__default["default"].forwardRef((_a, ref) => {
  var {
      block,
      className,
      children,
      danger,
      disabled = false,
      onClick,
      icon,
      iconRight,
      loading = false,
      loadingCentered = false,
      shadow = true,
      size = 'tiny',
      style,
      type = 'primary',
      htmlType = 'button',
      ariaSelected,
      ariaControls,
      tabIndex,
      role,
      as,
      textAlign = 'center'
    } = _a,
    props = _tslib.__rest(_a, ["block", "className", "children", "danger", "disabled", "onClick", "icon", "iconRight", "loading", "loadingCentered", "shadow", "size", "style", "type", "htmlType", "ariaSelected", "ariaControls", "tabIndex", "role", "as", "textAlign"]);
  const hasIcon = loading || icon;
  warning["default"](hasIcon && !props['aria-label'] && !children, 'Button', 'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.');
  const buttonRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    button: () => {
      return buttonRef.current;
    }
  }));
  // styles
  let __styles = handler["default"]('button');
  let classes = [__styles.base];
  let containerClasses = [__styles.container];
  classes.push(__styles.type[type]);
  if (block) {
    containerClasses.push(__styles.block);
    classes.push(__styles.block);
  }
  if (shadow && type !== 'link' && type !== 'text') {
    classes.push(__styles.shadow);
  }
  if (size) {
    classes.push(__styles.size[size]);
  }
  if (className) {
    classes.push(className);
  }
  if (disabled) {
    classes.push(__styles.disabled);
  }
  const iconLoaderClasses = [__styles.loading];
  // custom button tag
  const CustomButton = _a => {
    var props = _tslib.__rest(_a, []);
    const Tag = as;
    return jsxRuntime.jsx(Tag, Object.assign({}, props));
  };
  const buttonContent = jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [hasIcon && (loading ? jsxRuntime.jsx(IconLoader["default"], {
      size: size,
      className: iconLoaderClasses.join(' ')
    }) : icon ? jsxRuntime.jsx(IconContext.IconContext.Provider, Object.assign({
      value: {
        contextSize: size
      }
    }, {
      children: icon
    })) : null), children && jsxRuntime.jsx("span", Object.assign({
      className: __styles.label
    }, {
      children: children
    })), iconRight && !loading && jsxRuntime.jsx(IconContext.IconContext.Provider, Object.assign({
      value: {
        contextSize: size
      }
    }, {
      children: iconRight
    }))]
  });
  if (as) {
    return jsxRuntime.jsx(CustomButton, Object.assign({}, props, {
      className: classes.join(' '),
      onClick: onClick,
      style: style
    }, {
      children: buttonContent
    }));
  } else {
    return (
      // <span ref={containerRef} className={containerClasses.join(' ')}>
      jsxRuntime.jsx("button", Object.assign({}, props, {
        ref: buttonRef,
        className: classes.join(' '),
        disabled: loading || disabled && true,
        onClick: onClick,
        style: style,
        type: htmlType,
        "aria-selected": ariaSelected,
        "aria-controls": ariaControls,
        tabIndex: tabIndex,
        role: role,
        form: props.form
      }, {
        children: buttonContent
      }))
      // </span>
    );
  }
});

exports.Button = Button;
