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
import './Textarea.css'
const Textarea = (_a) => {
  var {
      className = '',
      isError = false,
      rows = 3,
      children,
      borderless = false,
    } = _a,
    props = __rest(_a, [
      'className',
      'isError',
      'rows',
      'children',
      'borderless',
    ])
  const classes = []
  if (isError) {
    classes.push('form-textarea--error')
  }
  if (borderless) {
    classes.push('form-textarea--borderless')
  }
  return _jsx(
    'textarea',
    Object.assign(
      {
        className: `form-textarea border-solid ${classes.join(
          ' '
        )} ${className}`,
        rows: rows,
      },
      props
    )
  )
}
Textarea.propTypes = {
  isError: PropTypes.bool,
  className: PropTypes.string,
  borderless: PropTypes.bool,
}
export default Textarea
