import React from 'react'
import { styled } from '@storybook/theming'
import { Tooltip } from './Tooltip'

// Popper would position the tooltip absolutely. We just need to make sure we are pos:rel
const mockPopperProps = {
  style: { position: 'relative', top: '0px', left: '0px' },
}

const Content = styled.div`
  width: 100px;
  height: 100px;
  font-size: 16px;
  text-align: center;
  line-height: 100px;
  outline: 1px dotted red;
`

export default {
  title: 'tooltip/Tooltip',
  component: Tooltip,
  decorators: [
    (storyFn) => (
      <div
        style={{ padding: '1em', background: '#eee', display: 'inline-block' }}
      >
        {storyFn()}
      </div>
    ),
  ],
}

export const basicDefault = () => (
  <Tooltip hidden={false} hasChrome>
    <Content>Text</Content>
  </Tooltip>
)

basicDefault.storyName = 'basic, default'

export const basicDefaultBottom = () => (
  <Tooltip hidden={false} hasChrome placement="bottom">
    <Content>Text</Content>
  </Tooltip>
)

basicDefaultBottom.storyName = 'basic, default, bottom'

export const basicDefaultLeft = () => (
  <Tooltip hidden={false} hasChrome placement="left">
    <Content>Text</Content>
  </Tooltip>
)

basicDefaultLeft.storyName = 'basic, default, left'

export const basicDefaultRight = () => (
  <Tooltip hidden={false} placement="right">
    <Content>Text</Content>
  </Tooltip>
)

basicDefaultRight.storyName = 'basic, default, right'

export const noChrome = () => (
  <Tooltip hidden={false} hasChrome={false}>
    <Content>Text</Content>
  </Tooltip>
)

noChrome.storyName = 'no chrome'
