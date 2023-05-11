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
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import React from 'react'
import PropTypes from 'prop-types'
import './Radio.css'
const Radio = (_a) => {
  var { className = '', label = '', containerClassName = '', children } = _a,
    props = __rest(_a, ['className', 'label', 'containerClassName', 'children'])
  return _jsxs(
    'label',
    Object.assign(
      { className: `inline-flex items-center ${containerClassName}` },
      {
        children: [
          _jsx(
            'input',
            Object.assign(
              {
                type: 'radio',
                className: `form-radio border-solid h-4 w-4 ${className}`,
              },
              props
            )
          ),
          _jsx(
            'span',
            Object.assign({ className: 'ml-2' }, { children: label })
          ),
        ],
      }
    )
  )
}
Radio.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
}
export default Radio
