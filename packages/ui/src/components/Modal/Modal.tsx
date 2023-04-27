import React, { Children, ComponentProps, ReactNode, CSSProperties } from 'react';
import { styled } from '@storybook/theming';
import ReactModal from 'react-modal';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { color, pageMargins, breakpoint } from '../Shared/styles';

const Action = styled.div`
  position: absolute;
  z-index: 2;

  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${breakpoint}px) {
    right: 30px;
    top: 30px;
    bottom: auto;
    left: auto;
    transform: none;
  }
`;

const CenteredItem = styled.div`
  ${pageMargins};
  width: 100%;
  /* Ensures overflow is not cutoff bc flexbox centering */
  margin-top: auto !important;
  margin-bottom: auto !important;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

interface ModalProps {
  isOpen: boolean;
  isBlank?: boolean;
  onClose: ComponentProps<typeof ReactModal>['onRequestClose'];
  children: (obj: { onClose: ModalProps['onClose'] }) => ReactNode;
  overlayStyles?: CSSProperties;
  contentStyles?: CSSProperties;
}

export const Modal = ({
  isBlank = false,
  isOpen,
  onClose,
  children,
  overlayStyles = {},
  contentStyles = {},
}: ModalProps) => {
  const actions = {
    onClose,
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
      closeTimeoutMS={300}
      style={{
        overlay: {
          backgroundColor: isBlank ? color.lightest : 'rgba(246, 249, 252, .97)',
          // 1 less that max, to allow intercom over the top
          zIndex: 2147483646,
          overflowX: 'hidden',
          overflowY: 'auto',
          ...overlayStyles,
        },
        content: {
          left: '0',
          top: '0',
          bottom: '0',
          right: '0',
          backgroundColor: 'transparent',
          border: 'none',
          overflow: 'visible',
          padding: '0',
          width: '100%',
          margin: 'auto',
          ...contentStyles,
        },
      }}
    >
      {isBlank ? (
        Children.only(children(actions))
      ) : (
        <CenteredWrapper>
          <CenteredItem>{Children.only(children(actions))}</CenteredItem>
        </CenteredWrapper>
      )}

      {!isBlank && (
        <Action>
          <Button containsIcon appearance="outline" onClick={onClose}>
            <Icon icon="cross" />
          </Button>
        </Action>
      )}
    </ReactModal>
  );
};
