import React from 'react'
import { Breadcrumb } from '../components/Breadcrumb'

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
}

export function Default({ children, ...args }): JSX.Element {
  return <Breadcrumb {...args}>{children}</Breadcrumb>
}

Default.args = {
  children: [
    <Breadcrumb.Item active>Layout</Breadcrumb.Item>,
    <Breadcrumb.Item>Grimm</Breadcrumb.Item>,
    <Breadcrumb.Item>Hansel</Breadcrumb.Item>,
    <Breadcrumb.Item>Gretel</Breadcrumb.Item>,
  ],
}
