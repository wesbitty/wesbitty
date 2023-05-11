import { __rest } from '../_virtual/_tslib.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import React, { useRef, useImperativeHandle } from 'react';
import { IconContext } from './Icon/IconContext.js';
import IconLoader from './Icon/icons/IconLoader/IconLoader2.js';
import styleHandler from '../theme/handler.js';
import warn from '../utils/warning.js';

const Button = /*#__PURE__*/React.forwardRef((_a, ref) => {
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
    props = __rest(_a, ["block", "className", "children", "danger", "disabled", "onClick", "icon", "iconRight", "loading", "loadingCentered", "shadow", "size", "style", "type", "htmlType", "ariaSelected", "ariaControls", "tabIndex", "role", "as", "textAlign"]);
  const hasIcon = loading || icon;
  warn(hasIcon && !props['aria-label'] && !children, 'Button', 'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.');
  const buttonRef = useRef(null);
  useImperativeHandle(ref, () => ({
    button: () => {
      return buttonRef.current;
    }
  }));
  // styles
  let __styles = styleHandler('button');
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
    var props = __rest(_a, []);
    const Tag = as;
    return jsx(Tag, Object.assign({}, props));
  };
  const buttonContent = jsxs(Fragment, {
    children: [hasIcon && (loading ? jsx(IconLoader, {
      size: size,
      className: iconLoaderClasses.join(' ')
    }) : icon ? jsx(IconContext.Provider, Object.assign({
      value: {
        contextSize: size
      }
    }, {
      children: icon
    })) : null), children && jsx("span", Object.assign({
      className: __styles.label
    }, {
      children: children
    })), iconRight && !loading && jsx(IconContext.Provider, Object.assign({
      value: {
        contextSize: size
      }
    }, {
      children: iconRight
    }))]
  });
  if (as) {
    return jsx(CustomButton, Object.assign({}, props, {
      className: classes.join(' '),
      onClick: onClick,
      style: style
    }, {
      children: buttonContent
    }));
  } else {
    return (
      // <span ref={containerRef} className={containerClasses.join(' ')}>
      jsx("button", Object.assign({}, props, {
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

export { Button };
