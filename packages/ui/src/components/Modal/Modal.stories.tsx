import React from 'react';
import { action } from '@storybook/addon-actions';

import { Modal } from './Modal';
import { Button } from '../Button';

export const actions = {
  onClose: action('onClose'),
};

export default {
  title: 'modal/Modal',
  component: Modal,
  decorators: [
    (storyFn) => (
      <div style={{ width: '1200px', height: '800px', background: 'purple', color: 'white' }}>
        This is an example background {storyFn()}
      </div>
    ),
  ],
  excludeStories: ['actions'],
};

const loremIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas, ante eu ornare
  tincidunt, justo velit ultrices est, eu porta libero ante malesuada ante. Maecenas fermentum
  ex nec justo tempor rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget, congue
  pharetra nibh. Nulla eu lobortis ante. Vivamus tortor sapien, dictum sit amet lacus sit
  amet, cursus porttitor sapien. Donec a massa et felis dictum eleifend. Etiam in dui at magna
  imperdiet gravida. Nam id tortor in leo facilisis elementum sit amet accumsan nunc. Maecenas
  lacus metus, dapibus aliquam mauris ac, luctus gravida ex.Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Praesent egestas, ante eu ornare tincidunt, justo velit
  ultrices est, eu porta libero ante malesuada ante. Maecenas fermentum ex nec justo tempor
  rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget, congue pharetra nibh. Nulla eu
  lobortis ante. Vivamus tortor sapien, dictum sit amet lacus sit amet, cursus porttitor
  sapien. Donec a massa et felis dictum eleifend. Etiam in dui at magna imperdiet gravida. Nam
  id tortor in leo facilisis elementum sit amet accumsan nunc. Maecenas lacus metus, dapibus
  aliquam mauris ac, luctus gravida ex.
`;

export const VisibleShort = () => (
  <Modal isOpen {...actions}>
    {({ onClose }) => (
      <div style={{ background: 'papayawhip', fontSize: '12px' }}>
        {loremIpsum}{' '}
        <Button appearance="primary" onClick={onClose} role="button" tab-index="0">
          Close
        </Button>
      </div>
    )}
  </Modal>
);

export const VisibleTall = () => (
  <Modal isOpen {...actions}>
    {({ onClose }) => (
      <div style={{ background: 'papayawhip', fontSize: '36px' }}>
        {loremIpsum}{' '}
        <Button appearance="primary" onClick={onClose} role="button" tab-index="0">
          Close
        </Button>
      </div>
    )}
  </Modal>
);

export const NotVisible = () => (
  <Modal isOpen={false} {...actions}>
    {({ onClose }) => (
      <div>
        <Button appearance="primary" onClick={onClose} role="button" tab-index="0">
          Close
        </Button>
      </div>
    )}
  </Modal>
);

export const Blank = () => (
  <Modal isOpen isBlank {...actions}>
    {({ onClose }) => (
      <div style={{ background: 'papayawhip', fontSize: '12px' }}>
        {loremIpsum}{' '}
        <Button appearance="primary" onClick={onClose} role="button" tab-index="0">
          Close
        </Button>
      </div>
    )}
  </Modal>
);
