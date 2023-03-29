import React, { useState } from 'react'
import { Auth } from '../components/Auth'
import { createClient } from '@supabase/supabase-js'
// @ts-ignore
import { Typography, Button, Space } from '../index'

const wesbitty = createClient(
  'https://rsnibhkhsbfnncjmwnkj.wesbitty.com',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
)

export default {
  title: 'Auth/Auth',
  component: Auth,
}

const Container = (props: any) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.wesbittyOauth.auth.signOut()}>
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
export const withSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withAllSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialLargeButtons = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withColouredSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialAuthHorizontal = (args: any) => (
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
    <div className="w-80 m-auto mt-16">
      <Space size={2}>
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
          type={view === 'magic_link' ? 'primary' : 'default'}
          onClick={() => setView('magic_link')}
        >
          Magic link
        </Button>
      </Space>
      <Space size={2} direction={'horizontal'}>
        <Button
          type={view === 'forgotten_password' ? 'primary' : 'default'}
          onClick={() => setView('forgotten_password')}
        >
          Forgotten password
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

withSocialAuth.args = {
  wesbittyOauth: wesbitty,
  providers: ['facebook', 'google'],
}

withAllSocialAuth.args = {
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

withSocialLargeButtons.args = {
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

withColouredSocialAuth.args = {
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

withSocialAuthHorizontal.args = {
  wesbittyOauth: wesbitty,
  providers: ['facebook', 'google'],
  socialLayout: 'horizontal',
}

updatePassword.args = {
  wesbittyOauth: wesbitty,
}
