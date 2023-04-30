import React, { ComponentProps } from 'react'
import { styled } from '@storybook/theming'
import { Avatar, sizes } from './Avatar'
import WithTooltip from '../Tooltip/WithTooltip'
import { TooltipNote } from '../Tooltip/TooltipNote'
import { color, typography } from '../../theme/styles'

const UserAvatar = styled(Avatar)`
  box-shadow: ${color.lightest} 0 0 0 2px;
  display: block;
`

const UserEllipses = styled.li`
  display: inline-flex;
  font-size: ${typography.size.s1}px;
  color: ${color.mediumdark};
  margin-left: 6px;
  white-space: nowrap;
`

const User = styled.li`
  display: inline-flex;
`

const Users = styled.ul`
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  vertical-align: top;
  margin: 0;
  padding: 0;
  list-style: none;
  ${User} {
    position: relative;
    &:not(:first-child) {
      margin-left: -6px;
    }
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 1;
    }
  }
`

interface AvatarListProps {
  isLoading: boolean
  users: {
    id: string
    name?: string
    avatarUrl?: string
  }[]
  userCount?: number
  size?: keyof typeof sizes
}

// Either pass the full list of users, or a userCount if known
export const AvatarList = ({
  isLoading = false,
  users = [
    { id: 'loading', avatarUrl: undefined, name: 'loading' },
    { id: 'loading2', avatarUrl: undefined, name: 'loading' },
    { id: 'loading3', avatarUrl: undefined, name: 'loading' },
  ],
  userCount = undefined,
  size = 'medium',
  ...props
}: AvatarListProps & ComponentProps<typeof Users>) => {
  const count = userCount || users.length

  return (
    <Users aria-label="users" {...props}>
      {users.slice(0, 3).map(({ id, name, avatarUrl }) => (
        <User key={id}>
          <WithTooltip
            hasChrome={false}
            placement="bottom"
            trigger="hover"
            tooltip={<TooltipNote note={name} />}
          >
            <UserAvatar
              size={size}
              username={name}
              src={avatarUrl}
              isLoading={isLoading}
            />
          </WithTooltip>
        </User>
      ))}
      {count > 3 && (
        <UserEllipses aria-label={`${count - 3} more user(s)`}>
          {' '}
          &#43; {count - 3}{' '}
        </UserEllipses>
      )}
    </Users>
  )
}
