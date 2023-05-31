// import { AutoForm } from 'uniforms'

import { InputNumber } from '.'
import { Button } from '../Button'
import { Space } from '../Space'
import { IconPackage } from './../../index'
import React, { useState, useCallback } from 'react'

export default {
  title: 'Data Input/InputNumber',
  component: InputNumber,
}

export const Default = (args: any) => <InputNumber {...args} />

export const ErrorState = (args: any) => <InputNumber {...args} />

export const WithIcon = (args: any) => <InputNumber {...args} />

export const Controlled = (props: any) => {
  const [state, setState] = useState(() => undefined)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log({ e, value: e.currentTarget.value })
    setState(e.currentTarget.value)
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
