import React, { ComponentProps, ReactNode } from 'react';
import { styled } from '@storybook/theming';

import { breakpoint, spacing, typography } from './Shared/styles';

const ShadowBox = styled.div`
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: ${spacing.borderRadius.small}px;
`;

const ShadowBoxCTAWrapper = styled(ShadowBox)`
  padding: ${spacing.padding.large}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  @media (min-width: ${breakpoint}px) {
    text-align: left;
  }
`;

const TextWrapper = styled.div`
  line-height: 20px;
  flex: 0 1 100%;

  @media (min-width: ${breakpoint}px) {
    flex: 1;
  }
`;

const HeadingText = styled.div`
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.bold};
`;

const MessageText = styled.div`
  font-size: ${typography.size.s2}px;
  margin-top: 4px;
`;

const Action = styled.div`
  flex: 0 0 100%;
  margin-top: 1.5rem;

  button {
    padding: 13px 28px;
  }

  @media (min-width: ${breakpoint}px) {
    flex: 0 0 auto;
    margin-top: 0;
    padding-left: 60px;
  }
`;

interface ShadowBoxCTAProps {
  headingText: ReactNode;
  messageText?: ReactNode;
  action: ReactNode;
}

export const ShadowBoxCTA = ({
  action,
  headingText,
  messageText,
  ...rest
}: ShadowBoxCTAProps & ComponentProps<typeof ShadowBoxCTAWrapper>) => (
  <ShadowBoxCTAWrapper {...rest}>
    <TextWrapper>
      <HeadingText>{headingText}</HeadingText>
      {messageText && <MessageText>{messageText}</MessageText>}
    </TextWrapper>

    <Action>{action}</Action>
  </ShadowBoxCTAWrapper>
);
