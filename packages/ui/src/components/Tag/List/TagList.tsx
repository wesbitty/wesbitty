import React, { ComponentProps, useState, forwardRef } from 'react';
import { styled } from '@storybook/theming';
import { color, typography } from '../../Shared/styles';
import { Link } from '../../Link';
import { TagItem } from '../Item';

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  margin-bottom: -10px;
`;

const MoreTagsButton = styled(Link)<ComponentProps<typeof Link> & { appearance: any }>`
  color: ${color.mediumdark};
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  padding-left: 5px;
  padding-right: 5px;

  &:focus {
    outline: auto;
  }
`;

export type TagListProps = {
  tags: React.ReactNode[];
  isLoading?: boolean;
  limit?: number;
};

export const TagList = forwardRef<HTMLDivElement, TagListProps>(
  ({ tags = [], limit = 4, isLoading = false, ...props }: TagListProps, ref) => {
    const primaryTags = tags.slice(0, limit);
    const moreTags = tags.slice(limit);

    const [moreTagsVisible, setMoreTagsVisible] = useState(false);

    const tagContent = (
      <>
        {primaryTags}
        {moreTagsVisible && moreTags}
        {moreTags.length > 0 && !moreTagsVisible && (
          <MoreTagsButton isButton appearance="primary" onClick={() => setMoreTagsVisible(true)}>
            {`+ ${moreTags.length} more`}
          </MoreTagsButton>
        )}
      </>
    );

    return (
      <TagListWrapper {...props} ref={ref}>
        {isLoading ? (
          <>
            <TagItem isLoading />
            <TagItem isLoading />
            <TagItem isLoading />
            <TagItem isLoading />
          </>
        ) : (
          tagContent
        )}
      </TagListWrapper>
    );
  }
);
