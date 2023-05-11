import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import React from 'react'
import { Radio } from '.'
export default {
  title: 'Archive/Radio',
  component: Radio,
}
export const Default = (args) =>
  _jsxs(
    'div',
    Object.assign(
      { className: 'block font-sans' },
      {
        children: [
          _jsx('div', {
            children: _jsx(
              Radio,
              Object.assign({ name: 'radio-group', label: 'JavaScript' }, args)
            ),
          }),
          _jsx('div', {
            children: _jsx(
              Radio,
              Object.assign({ name: 'radio-group', label: 'TypeScript' }, args)
            ),
          }),
          _jsx('div', {
            children: _jsx(
              Radio,
              Object.assign({ name: 'radio-group', label: 'ReScript' }, args)
            ),
          }),
        ],
      }
    )
  )
Default.args = {
  disabled: false,
}
