import React from 'react'
import Typography from '../components/Typography'
// import { AutoForm } from 'uniforms'

import { Card } from '../components/Card'

export default {
  title: 'Displays/Card',
  component: Card,
}

export const Default = (args: any) => (
  <Card {...args}>
    <Typography.Title level={5}>Card content</Typography.Title>
    <Typography.Title level={5}>Card content</Typography.Title>
    <Typography.Title level={5}>Card content</Typography.Title>
  </Card>
)

export const withCover = (args: any) => (
  <Card {...args}>
    <Typography.Text type="secondary">Sub title here</Typography.Text>
    <Typography.Title level={3}>To Do List with Vue.JS</Typography.Title>
  </Card>
)

export const withMeta = (args: any) => (
  <Card {...args}>
    <Card.Meta
      title={'To Do List with Vue.JS'}
      description={'To Do List with Vue.JS'}
    />
  </Card>
)

export const withHover = (args: any) => (
  <Card {...args}>
    <Card.Meta
      title={'To Do List with Vue.JS'}
      description={'To Do List with Vue.JS'}
    />
  </Card>
)

Default.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}

withCover.args = {
  cover: (
    <img
      className="h-56 w-full rounded-md object-cover"
      src={'https://wesbitty.netlify.app/images/case-study-monitoro.jpg'}
      alt={'title'}
    />
  ),
}

withMeta.args = {
  title: 'title is here',
}

withHover.args = {
  title: 'This card can hover',
  hoverable: true,
}
