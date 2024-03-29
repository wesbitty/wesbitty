import React from 'react'

import { IconHome, Typography } from './../../index'

export default {
  title: 'Elements/Icon',
  component: IconHome,
}

export const Default = (args: any) => (
  <div className="block font-sans">
    <div>
      <Typography.Text>
        <IconHome {...args} />
      </Typography.Text>
    </div>
  </div>
)

Default.args = {
  size: 16,
  strokeWidth: 2,
}
