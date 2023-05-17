import React, { useState } from 'react'
import { Auth } from '..'
import { createClient } from '@supabase/supabase-js'
import { Typography, Button, Space } from '../index'

const wesbitty = createClient(
  'https://app.wesbitty.org',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
)

export default {
  title: 'Feedback/Auth',
  component: Auth,
  tags: ['autodocs'],
}

const Container = (props: any) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button fullwidth onClick={() => props.wesbittyOauth.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export const Default = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const socialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const allSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const largeButtonSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const colouredSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const horizontalSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const updatePassword = (args: any) => <Auth.UpdatePassword {...args} />

export const ChangeViewState = (args: any) => {
  const [view, setView] = useState<
    'sign_in' | 'sign_up' | 'forgotten_password' | 'magic_link'
  >('sign_in')

  return (
    <div>
      <Space>
        <Button
          type={view === 'sign_up' ? 'primary' : 'default'}
          onClick={() => setView('sign_up')}
        >
          Sign up
        </Button>
        <Button
          type={view === 'sign_in' ? 'primary' : 'default'}
          onClick={() => setView('sign_in')}
        >
          Sign in
        </Button>
        <Button
          type={view === 'forgotten_password' ? 'primary' : 'default'}
          onClick={() => setView('forgotten_password')}
        >
          Forgotten password
        </Button>
        <Button
          type={view === 'magic_link' ? 'primary' : 'default'}
          onClick={() => setView('magic_link')}
        >
          Magic link
        </Button>
      </Space>
      <Auth.UserContextProvider wesbittyOauth={wesbitty}>
        <Container wesbittyOauth={wesbitty}>
          <Auth wesbittyOauth={wesbitty} view={view} />
        </Container>
      </Auth.UserContextProvider>
    </div>
  )
}

Default.args = {
  wesbittyOauth: wesbitty,
}

socialAuth.args = {
  wesbittyOauth: wesbitty,
  providers: ['facebook', 'google'],
}

allSocialAuth.args = {
  wesbittyOauth: wesbitty,
  providers: [
    'apple',
    'azure',
    'bitbucket',
    'discord',
    'facebook',
    'github',
    'gitlab',
    'google',
    'twitch',
    'twitter',
  ],
}

largeButtonSocialAuth.args = {
  wesbittyOauth: wesbitty,
  providers: [
    'apple',
    'azure',
    'bitbucket',
    'discord',
    'facebook',
    'github',
    'gitlab',
    'google',
    'twitch',
    'twitter',
  ],
  socialButtonSize: 'large',
}

colouredSocialAuth.args = {
  wesbittyOauth: wesbitty,
  socialColors: true,
  providers: [
    'apple',
    'azure',
    'bitbucket',
    'discord',
    'facebook',
    'github',
    'gitlab',
    'google',
    'twitch',
    'twitter',
  ],
}

horizontalSocialAuth.args = {
  wesbittyOauth: wesbitty,
  providers: ['facebook', 'google'],
  socialLayout: 'horizontal',
}

updatePassword.args = {
  wesbittyOauth: wesbitty,
}
