var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import {
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs,
} from 'react/jsx-runtime'
import React, { useRef, useImperativeHandle } from 'react'
import { IconContext } from './Icon/IconContext'
import { IconLoader } from './Icon/icons/IconLoader'
import styleHandler from '../theme/handler'
import warn from '../utils/warning'
export const Button = React.forwardRef((_a, ref) => {
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
      textAlign = 'center',
    } = _a,
    props = __rest(_a, [
      'block',
      'className',
      'children',
      'danger',
      'disabled',
      'onClick',
      'icon',
      'iconRight',
      'loading',
      'loadingCentered',
      'shadow',
      'size',
      'style',
      'type',
      'htmlType',
      'ariaSelected',
      'ariaControls',
      'tabIndex',
      'role',
      'as',
      'textAlign',
    ])
  const hasIcon = loading || icon
  warn(
    hasIcon && !props['aria-label'] && !children,
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  )
  const buttonRef = useRef(null)
  useImperativeHandle(ref, () => ({
    button: () => {
      return buttonRef.current
    },
  }))
  // styles
  let __styles = styleHandler('button')
  let classes = [__styles.base]
  let containerClasses = [__styles.container]
  classes.push(__styles.type[type])
  if (block) {
    containerClasses.push(__styles.block)
    classes.push(__styles.block)
  }
  if (shadow && type !== 'link' && type !== 'text') {
    classes.push(__styles.shadow)
  }
  if (size) {
    classes.push(__styles.size[size])
  }
  if (className) {
    classes.push(className)
  }
  if (disabled) {
    classes.push(__styles.disabled)
  }
  const iconLoaderClasses = [__styles.loading]
  // custom button tag
  const CustomButton = (_a) => {
    var props = __rest(_a, [])
    const Tag = as
    return _jsx(Tag, Object.assign({}, props))
  }
  const buttonContent = _jsxs(_Fragment, {
    children: [
      hasIcon &&
        (loading
          ? _jsx(IconLoader, {
              size: size,
              className: iconLoaderClasses.join(' '),
            })
          : icon
          ? _jsx(
              IconContext.Provider,
              Object.assign(
                { value: { contextSize: size } },
                { children: icon }
              )
            )
          : null),
      children &&
        _jsx(
          'span',
          Object.assign({ className: __styles.label }, { children: children })
        ),
      iconRight &&
        !loading &&
        _jsx(
          IconContext.Provider,
          Object.assign(
            { value: { contextSize: size } },
            { children: iconRight }
          )
        ),
    ],
  })
  if (as) {
    return _jsx(
      CustomButton,
      Object.assign(
        {},
        props,
        { className: classes.join(' '), onClick: onClick, style: style },
        { children: buttonContent }
      )
    )
  } else {
    return (
      // <span ref={containerRef} className={containerClasses.join(' ')}>
      _jsx(
        'button',
        Object.assign(
          {},
          props,
          {
            ref: buttonRef,
            className: classes.join(' '),
            disabled: loading || (disabled && true),
            onClick: onClick,
            style: style,
            type: htmlType,
            'aria-selected': ariaSelected,
            'aria-controls': ariaControls,
            tabIndex: tabIndex,
            role: role,
            form: props.form,
          },
          { children: buttonContent }
        )
      )
      // </span>
    )
  }
})
