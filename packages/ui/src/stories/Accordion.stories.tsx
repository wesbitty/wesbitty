import { Accordion, Badge } from '..'
import { IconArrowUp } from '../components/Icon/icons/IconArrowUp'
import { Typography } from '../components/Typography'
import React from 'react'

export default {
  title: 'Displays/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}

export const OneItem = (args: any) => (
  <Accordion {...args} justified={false}>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Accordion
        </span>
      }
      id="first"
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
  </Accordion>
)

export const MultipleItems = (args: any) => (
  <Accordion {...args} openBehaviour="multiple">
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Accordion
        </span>
      }
      id={'1'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Accordion
        </span>
      }
      id={'2'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Accordion
        </span>
      }
      id={'3'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Accordion
        </span>
      }
      id={'4'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
  </Accordion>
)

export const Bordered = (args: any) => (
  <Accordion {...args}>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Title of the thing
        </span>
      }
      id={'1'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Title of the thing
        </span>
      }
      id={'2'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Accordion
        </span>
      }
      id={'3'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Accordion
        </span>
      }
      id={'4'}
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
  </Accordion>
)

Bordered.args = {
  type: 'bordered',
}

export const LeftAlignedChevron = (args: any) => (
  <Accordion {...args} justified={false} chevronAlign="left">
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          First item
        </span>
      }
      id="first"
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <span className="text-scale-900 group-hover:text-scale-1200">
          Second item
        </span>
      }
      id="second"
    >
      <span className="text-scale-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
  </Accordion>
)

// export const withDefaultActive = Multiple.bind({})
// withDefaultActive.args = {
//   defaultActiveId: [1],
// }

// export const withIconLeft = Multiple.bind({})
// withIconLeft.args = {
//   iconPosition: 'left',
// }

// export const withCustomIcon = Multiple.bind({})
// withCustomIcon.args = {
//   icon: <IconArrowUp />,
// }
