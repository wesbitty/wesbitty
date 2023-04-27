import React, { ComponentProps } from 'react';

import { Button } from '../Button';

import WithModal from './WithModal';

const ModalContents: ComponentProps<typeof WithModal>['modal'] = ({ onClose }) => (
  <div style={{ background: 'papayawhip', fontSize: '12px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas, ante eu ornare
    tincidunt, justo velit ultrices est, eu porta libero ante malesuada ante. Maecenas fermentum ex
    nec justo tempor rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget, congue pharetra
    nibh. Nulla eu lobortis ante. Vivamus tortor sapien, dictum sit amet lacus sit amet, cursus
    porttitor sapien. Donec a massa et felis dictum eleifend. Etiam in dui at magna imperdiet
    gravida. Nam id tortor in leo facilisis elementum sit amet accumsan nunc. Maecenas lacus metus,
    dapibus aliquam mauris ac, luctus gravida ex.Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Praesent egestas, ante eu ornare tincidunt, justo velit ultrices est, eu porta libero ante
    malesuada ante. Maecenas fermentum ex nec justo tempor rutrum. Donec sapien nisl, sollicitudin
    sit amet lorem eget, congue pharetra nibh. Nulla eu lobortis ante. Vivamus tortor sapien, dictum
    sit amet lacus sit amet, cursus porttitor sapien. Donec a massa et felis dictum eleifend. Etiam
    in dui at magna imperdiet gravida. Nam id tortor in leo facilisis elementum sit amet accumsan
    nunc. Maecenas lacus metus, dapibus aliquam mauris ac, luctus gravida ex.{' '}
    <Button appearance="primary" onClick={onClose} role="button" tab-index="0">
      Close
    </Button>
  </div>
);

export default {
  title: 'modal/WithModal',
  decorators: [
    (storyFn) => (
      <div style={{ width: '1200px', height: '800px', background: 'purple', color: 'white' }}>
        This is an example background {storyFn()}
      </div>
    ),
  ],
  component: WithModal,
};

export const StartsClosed = () => (
  <WithModal modal={ModalContents}>
    {({ onOpen }) => (
      <div>
        <Button appearance="primary" onClick={onOpen} role="button" tab-index="0">
          Open Modal
        </Button>
      </div>
    )}
  </WithModal>
);

export const StartsOpen = () => (
  <WithModal startOpen modal={ModalContents}>
    {({ onOpen }) => (
      <div>
        <Button appearance="primary" onClick={onOpen} role="button" tab-index="0">
          Open Modal
        </Button>
      </div>
    )}
  </WithModal>
);

export const WithCustomStyles = () => (
  <WithModal
    startOpen
    modal={ModalContents}
    overlayStyles={{ background: 'tomato' }}
    contentStyles={{ fontWeight: 'bold' }}
  >
    {({ onOpen }) => (
      <div>
        <Button appearance="primary" onClick={onOpen} role="button" tab-index="0">
          Open Modal
        </Button>
      </div>
    )}
  </WithModal>
);
