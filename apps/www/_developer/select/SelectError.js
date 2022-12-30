import { Select } from '@wesbitty/ui'
import { useState } from 'react'

export default function SelectControlled() {
  const [value, setValue] = useState('two')
  function handleChange(e) {
    // console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <Select label="Select label" onChange={handleChange} error="This is an error message">
      <Select.Option value="one">Option one</Select.Option>
      <Select.Option value="two">Option two</Select.Option>
      <Select.Option value="three">Option three</Select.Option>
    </Select>
  )
}
