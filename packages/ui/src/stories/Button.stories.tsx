import React, { useRef, useState } from 'react'
import { Button, IconBriefcase, IconChevronRight } from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = (args: any) => <Button {...args}>Primary</Button>

export const customStyle = (args: any) => (
  <Button {...args}>Custom Style</Button>
)

export const Icon = (args: any) => <Button {...args}>Button</Button>

export const rightIcon = (args: any) => <Button {...args}>Button</Button>

export const fullwidth = (args: any) => (
  <Button {...args}>Fullwidth Button</Button>
)
export const onlyIcon = (args: any) => <Button {...args} />
export const loading = (args: any) => <Button {...args} />
export const centeredLoading = (args: any) => (
  <Button {...args}>Loading icon is centered</Button>
)

export const forwardRef = () => {
  const buttonRef = useRef(null)
  const [msg, setMsg] = useState('Click button to console.log Ref')

  function onClick() {
    const message = `button:${buttonRef?.current}  `
    setMsg(message)
  }

  return (
    <>
      <Button ref={buttonRef} onClick={onClick}>
        forwardRef Button
      </Button>

      <p style={{ color: '#666666' }}>{msg}</p>
    </>
  )
}
export const allButtonsWithSizes = (args: any) => (
  <>
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <Button {...args} size="tiny">
          Primary
        </Button>
        <Button {...args} size="tiny" type="default">
          Default
        </Button>
        <Button {...args} size="tiny" type="secondary">
          Secondary
        </Button>
        <Button {...args} size="tiny" type="alternative">
          Alternative
        </Button>
        <Button {...args} size="tiny" type="link">
          Link
        </Button>
        <Button {...args} size="tiny" type="text">
          Text
        </Button>
        <Button {...args} size="tiny" type="dashed">
          Dashed
        </Button>
        <Button {...args} size="tiny" type="outline">
          Outline
        </Button>
        <Button {...args} size="tiny" type="danger">
          Danger
        </Button>
        <Button {...args} size="tiny" type="warning">
          Warning
        </Button>
      </div>

      <div className="flex space-x-4">
        <Button {...args} size="small">
          Primary
        </Button>
        <Button {...args} size="small" type="default">
          Default
        </Button>
        <Button {...args} size="small" type="secondary">
          Secondary
        </Button>
        <Button {...args} size="small" type="alternative">
          Alternative
        </Button>
        <Button {...args} size="small" type="link">
          Link
        </Button>
        <Button {...args} size="small" type="text">
          Text
        </Button>
        <Button {...args} size="small" type="dashed">
          Button text
        </Button>
        <Button {...args} size="small" type="outline">
          Button text
        </Button>
        <Button {...args} size="small" type="danger">
          Button text
        </Button>
        <Button {...args} size="small" type="warning">
          Button text
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button {...args} size="medium">
          Button text
        </Button>
        <Button {...args} size="medium" type="default">
          Button text
        </Button>
        <Button {...args} size="medium" type="secondary">
          Button text
        </Button>
        <Button {...args} size="medium" type="alternative">
          Button text
        </Button>
        <Button {...args} size="medium" type="link">
          Button text
        </Button>
        <Button {...args} size="medium" type="text">
          Button text
        </Button>
        <Button {...args} size="medium" type="dashed">
          Button text
        </Button>
        <Button {...args} size="medium" type="outline">
          Button text
        </Button>
        <Button {...args} size="medium" type="danger">
          Button text
        </Button>
        <Button {...args} size="medium" type="warning">
          Button text
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button {...args} size="large">
          Button text
        </Button>
        <Button {...args} size="large" type="default">
          Button text
        </Button>
        <Button {...args} size="large" type="secondary">
          Button text
        </Button>
        <Button {...args} size="large" type="alternative">
          Button text
        </Button>
        <Button {...args} size="large" type="link">
          Button text
        </Button>
        <Button {...args} size="large" type="text">
          Button text
        </Button>
        <Button {...args} size="large" type="dashed">
          Button text
        </Button>
        <Button {...args} size="large" type="outline">
          Button text
        </Button>
        <Button {...args} size="large" type="danger">
          Button text
        </Button>
        <Button {...args} size="large" type="warning">
          Button text
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button {...args} size="xlarge">
          Primary
        </Button>
        <Button {...args} size="xlarge" type="default">
          Default
        </Button>
        <Button {...args} size="xlarge" type="secondary">
          Secondary
        </Button>
        <Button {...args} size="xlarge" type="alternative">
          Alternative
        </Button>
        <Button {...args} size="xlarge" type="link">
          Link
        </Button>
        <Button {...args} size="xlarge" type="text">
          Text
        </Button>
        <Button {...args} size="xlarge" type="dashed">
          Dashed
        </Button>
        <Button {...args} size="xlarge" type="outline">
          Outline
        </Button>
        <Button {...args} size="xlarge" type="danger">
          Danger
        </Button>
        <Button {...args} size="xlarge" type="warning">
          Warning
        </Button>
      </div>
    </div>
  </>
)

export const CustomTag = (args: any) => <Button {...args}>Button text</Button>

const icon = <IconBriefcase />

Icon.args = {
  type: 'primary',
  icon: icon,
}

customStyle.args = {
  type: 'primary',
  style: { backgroundColor: 'blue', color: 'white' },
}

rightIcon.args = {
  type: 'primary',
  iconRight: <IconChevronRight strokeWidth={2} />,
}

fullwidth.args = {
  type: 'primary',
  block: true,
}

onlyIcon.args = {
  icon: icon,
}

loading.args = {
  loading: true,
}

centeredLoading.args = {
  loading: true,
  loadingCentered: true,
}

allButtonsWithSizes.args = {
  loading: false,
  danger: false,
}

CustomTag.args = {
  as: 'span',
}
