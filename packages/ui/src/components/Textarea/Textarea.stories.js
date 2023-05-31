import { Textarea } from '.'
import React from 'react'

export default {
  title: 'Archive/Textarea',
  component: Textarea,
}

export const Default = (args) => <Textarea {...args} />
Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
}
