import React, { ComponentProps } from 'react';
import { styled } from '@storybook/theming';
import { ListItem } from './ListItem';
import { spacing } from '../Shared/styles';

const List = styled.ul`
  min-width: 180px;
  border-radius: ${spacing.borderRadius.small}px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
`;

type AnyProps = Record<string, any>;
type LinkWrapperType = (props: AnyProps) => React.ReactElement<any, any>;

interface TooltipLinkListProps {
  links: Omit<ComponentProps<typeof ListItem>, 'LinkWrapper'>[];
  LinkWrapper?: LinkWrapperType;
}

export const TooltipLinkList = ({ links, LinkWrapper, ...rest }: TooltipLinkListProps) => {
  return (
    <List {...rest}>
      {links.map((data, index) => (
        <ListItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          LinkWrapper={LinkWrapper}
          {...data}
        />
      ))}
    </List>
  );
};
