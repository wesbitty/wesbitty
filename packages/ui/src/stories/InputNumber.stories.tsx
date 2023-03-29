import React, { useState, useCallback } from 'react'
// import { AutoForm } from 'uniforms'

import { InputNumber } from '../components/InputNumber'
import { IconPackage } from '../index'
import { Button } from '../components/Button'
import { Space } from '../components/Space'

export default {
  title: 'Form Layouts/InputNumber',
  component: InputNumber,
}

export const Default = (args: any) => <InputNumber {...args} />

export const ErrorState = (args: any) => <InputNumber {...args} />

export const WithIcon = (args: any) => <InputNumber {...args} />

export const Controlled = (props: any) => {
  const [state, setState] = useState(() => undefined)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log({ e, value: e.currentTarget.value })
    return
  }, [])

  return <InputNumber {...props} onChange={onChange} value={state} />
}

Default.args = {
  label: 'Max of 100 and min of 0',
  disabled: false,
  layout: 'vertical',
  max: 100,
  min: 0,
}

ErrorState.args = {
  disabled: false,
  layout: 'vertical',
  label: 'Input Number with an error message',
  error: 'Input Number must be in range',
}

WithIcon.args = {
  label: 'Max of 100 and min of 0 with a Icon',
  disabled: false,
  layout: 'vertical',
  max: 100,
  min: 0,
  icon: <IconPackage />,
}

Controlled.args = {
  label: 'Max of 100 and min of 0',
  disabled: false,
  layout: 'vertical',
  max: 100,
  min: 0,
}
