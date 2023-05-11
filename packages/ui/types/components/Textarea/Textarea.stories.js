import { jsx as _jsx } from 'react/jsx-runtime'
import React from 'react'
import { Textarea } from '.'
export default {
  title: 'Archive/Textarea',
  component: Textarea,
}
export const Default = (args) => _jsx(Textarea, Object.assign({}, args))
Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
}
