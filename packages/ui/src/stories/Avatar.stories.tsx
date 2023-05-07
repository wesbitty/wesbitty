import React, { ComponentProps, FunctionComponent } from 'react'
import { IconGitHub } from '../components/Icon/icons'
import { Avatar, AvatarType } from '../components/Avatar'

export default {
  title: 'Displays/Avatar',
  component: Avatar,
  args: {
    type: 'user',
  },
}

const Base: FunctionComponent<ComponentProps<typeof Avatar>> = ({
  src,
  ...props
}) => (
  <>
    <Avatar isLoading {...props} />
    <Avatar username="Tom Coleman" {...props} />
    <Avatar
      username="Tom Coleman"
      src={src || 'https://avatars2.githubusercontent.com/u/132554'}
      {...props}
    />
  </>
)

export const Large = (args: any) => <Base size="large" {...args} />
export const Medium = (args: any) => <Base {...args} />
export const Small = (args: any) => <Base size="small" {...args} />
export const Tiny = (args: any) => <Base size="tiny" {...args} />
export const Organization = (args: any) => <Base {...args} />
export const User = (args: any) => <Base {...args} />

User.args = {
  type: `${AvatarType.USER}`,
  username: 'Chromatic',
  src: 'https://avatars2.githubusercontent.com/u/132554',
}

Organization.args = {
  type: `${AvatarType.ORGANIZATION}`,
  username: 'Chromatic',
  src: 'https://avatars2.githubusercontent.com/u/132554',
}
