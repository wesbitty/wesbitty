import { Alert } from '../index'
import React from 'react'

export default {
  title: 'Displays/Alerts',
  component: Alert,
  tags: ['autodocs'],
}

export const Neutral = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Success = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const SuccessWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Danger = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const DangerWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Info = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const InfoWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Warning = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const WarningWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Closable = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Action = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

Neutral.args = {
  title: 'Neutral Alert',
  withIcon: true,
}

Success.args = {
  title: 'Success alert',
  variant: 'success',
}

SuccessWithIcon.args = {
  title: 'Success alert with icon',
  variant: 'success',
  withIcon: true,
}

Danger.args = {
  title: 'Danger alert',
  variant: 'danger',
}

DangerWithIcon.args = {
  title: 'Danger alert with icon',
  variant: 'danger',
  withIcon: true,
}

Info.args = {
  title: 'Info alert',
  variant: 'info',
}

InfoWithIcon.args = {
  title: 'Info alert with icon',
  variant: 'info',
  withIcon: true,
}

Warning.args = {
  title: 'Warning alert',
  variant: 'warning',
}

WarningWithIcon.args = {
  title: 'Warning alert with icon',
  variant: 'warning',
  withIcon: true,
}

Closable.args = {
  title: 'Closable alert',
  closable: true,
}

Action.args = {
  title: 'Alert with action',
  variant: 'warning',
  withIcon: true,
  actions: <div>Hello</div>,
}
