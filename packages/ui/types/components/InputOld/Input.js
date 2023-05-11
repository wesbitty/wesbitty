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
import { jsx as _jsx } from 'react/jsx-runtime'
import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'
export const SIZES = ['small', 'medium']
const Input = (_a) => {
  var {
      className = '',
      type = 'text',
      size = 'medium',
      isError = false,
      children,
    } = _a,
    props = __rest(_a, ['className', 'type', 'size', 'isError', 'children'])
  const classes = []
  if (size) {
    const sizeClasses = {
      small: 'form-input--small',
      medium: 'form-input--medium',
    }
    classes.push(sizeClasses[size])
  }
  if (isError) {
    classes.push('form-input--error')
  }
  return _jsx(
    'input',
    Object.assign(
      {
        type: type,
        className: `form-input border-solid ${classes.join(' ')} ${className}`,
      },
      props
    )
  )
}
Input.propTypes = {
  size: PropTypes.oneOf(SIZES),
  isError: PropTypes.bool,
  className: PropTypes.string,
}
export default Input
