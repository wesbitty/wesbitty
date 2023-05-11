import React from 'react'
import { SupabaseClient, Provider } from '@supabase/supabase-js'
type ViewType =
  | 'sign_in'
  | 'sign_up'
  | 'forgotten_password'
  | 'magic_link'
  | 'update_password'
type RedirectTo = undefined | string
export type Props = {
  wesbittyOauth: SupabaseClient
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  socialLayout?: 'horizontal' | 'vertical'
  socialColors?: boolean
  socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  providers?: Provider[]
  verticalSocialLayout?: any
  view?: ViewType
  redirectTo?: RedirectTo
  onlyThirdPartyProviders?: boolean
  magicLink?: boolean
}
export declare function Auth({
  wesbittyOauth,
  className,
  style,
  socialLayout,
  socialColors,
  socialButtonSize,
  providers,
  view,
  redirectTo,
  onlyThirdPartyProviders,
  magicLink,
}: Props): JSX.Element | null
export declare namespace Auth {
  var ForgottenPassword: ({
    setAuthView,
    wesbittyOauth,
    redirectTo,
  }: {
    setAuthView: any
    wesbittyOauth: SupabaseClient
    redirectTo?: string
  }) => import('react/jsx-runtime').JSX.Element
  var UpdatePassword: ({
    wesbittyOauth,
  }: {
    wesbittyOauth: SupabaseClient
  }) => import('react/jsx-runtime').JSX.Element
  var MagicLink: ({
    setAuthView,
    wesbittyOauth,
    redirectTo,
  }: {
    setAuthView: any
    wesbittyOauth: SupabaseClient
    redirectTo?: string
  }) => import('react/jsx-runtime').JSX.Element
  var UserContextProvider: (
    props: import('./Shared/Context/Auth').Props
  ) => import('react/jsx-runtime').JSX.Element
  var useUser: () => import('./Shared/Context/Auth').AuthSession
}
export {}
