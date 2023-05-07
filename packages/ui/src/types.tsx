import { Provider } from '@supabase/supabase-js'
import { CssComponent } from '@stitches/core/types/styled-component'

export interface AnimationTailwindClasses {
  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
}

export type AuthProviders = Provider

export type SocialLayout = 'horizontal' | 'vertical'
export type SocialButtonSize = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'

export type ViewSignIn = 'sign_in'
export type ViewSignUp = 'sign_up'
export type ViewMagicLink = 'magic_link'
export type ViewForgottenPassword = 'forgotten_password'
export type ViewUpdatePassword = 'update_password'

export type ViewType =
  | ViewSignIn
  | ViewSignUp
  | ViewMagicLink
  | ViewForgottenPassword
  | ViewUpdatePassword

export interface ViewsMap {
  [key: string]: ViewType
}

export type RedirectTo = undefined | string
