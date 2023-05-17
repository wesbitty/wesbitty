import React, { useState } from 'react'

import { Loading } from '../index'
import { Card } from '../index'

export default {
  title: 'Utilities/Loading',
  component: Loading,
}

export const Default = (args: any) => {
  return (
    <>
      <Loading {...args}>
        <Card title={'This card can be set to loading'}></Card>
      </Loading>
    </>
  )
}

Default.args = {
  active: true,
}