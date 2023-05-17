import React from 'react'
import { Button } from '..'
import Typography from '../components/Typography'
import { Divider } from '../components/Divider'

export default {
  title: 'Utilities/Divider',
  component: Divider,
}

export const Default = (args: any) => <Divider {...args} />

export const withCenterText = (args: any) => (
  <Divider {...args}>Divider</Divider>
)

export const withLeftText = (args: any) => <Divider {...args}>Divider</Divider>

export const withRightText = (args: any) => <Divider {...args}>Divider</Divider>

export const lighterColor = (args: any) => <Divider {...args} />

export const vertical = (args: any) => (
  <div style={{ height: '32px' }}>
    <div className="space-x-3 w-full">
      <Divider {...args} />
      <Button>Button one</Button>
      <Divider {...args} />
      <Button>Button two</Button>
      <Divider {...args} />
      <Typography.Text>Some text</Typography.Text>
      <Divider {...args} />
      <Button>Button three</Button>
    </div>
  </div>
)

Default.args = {}

withCenterText.args = {}

withLeftText.args = {
  orientation: 'left',
}

withRightText.args = {
  orientation: 'right',
}

lighterColor.args = {
  light: true,
}

vertical.args = {
  type: 'vertical',
}
