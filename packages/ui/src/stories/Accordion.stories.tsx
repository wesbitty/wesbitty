import React from 'react'
import { Accordion } from '../components/Accordion'
import { Typography } from '../components/Typography'
import { IconArrowUp } from '../components/Icon/icons/IconArrowUp'
import { Badge } from '../components/Badge'

export default {
  title: 'Displays/Accordion',
  component: Accordion,
}

export const OneItem = (args: any) => (
  <Accordion {...args} justified={false}>
    <Accordion.Item
      header={
        <>
          <span className="text-gray-700 dark:text-white">Title :</span>
          <Badge>Test badge</Badge>
        </>
      }
      id="first"
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
  </Accordion>
)

export const MultipleItems = (args: any) => (
  <Accordion {...args} openBehaviour="multiple">
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'1'}
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'2'}
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'3'}
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'4'}
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
  </Accordion>
)

export const Bordered = (args: any) => (
  <Accordion {...args}>
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'1'}
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'2'}
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'3'}
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={<span className="text-gray-700 dark:text-white">Title :</span>}
      id={'4'}
    >
      <span className="text-gray-700 dark:text-white">
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
        <>
          <span className="text-gray-700 dark:text-white">First item</span>
          <Badge>Test badge</Badge>
        </>
      }
      id="first"
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
    <Accordion.Item
      header={
        <>
          <span className="text-gray-700 dark:text-white">Second item</span>
        </>
      }
      id="second"
    >
      <span className="text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </span>
    </Accordion.Item>
  </Accordion>
)
