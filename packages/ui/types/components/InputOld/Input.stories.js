import { jsx as _jsx } from 'react/jsx-runtime'
import React from 'react'
import { Input } from '.'
export default {
  title: 'Archive/Input Old',
  component: Input,
}
export const Default = (args) => _jsx(Input, Object.assign({}, args))
Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
}
