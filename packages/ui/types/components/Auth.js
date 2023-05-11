var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import React, { useEffect, useRef, useState } from 'react'
import {
  Input,
  Checkbox,
  Button,
  Space,
  Typography,
  Divider,
  IconKey,
  IconMail,
  IconInbox,
  IconLock,
} from '../index'
import { UserContextProvider, useUser } from './Shared/Context/Auth'
import * as SocialIcons from './Shared/AuthIcons'
import styleHandler from '../theme/handler'
const VIEWS = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password',
}
export function Auth({
  wesbittyOauth,
  className,
  style,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize = 'medium',
  providers,
  view = 'sign_in',
  redirectTo,
  onlyThirdPartyProviders = false,
  magicLink = false,
}) {
  const [authView, setAuthView] = useState(view)
  const [defaultEmail, setDefaultEmail] = useState('')
  const [defaultPassword, setDefaultPassword] = useState('')
  const verticalSocialLayout = socialLayout === 'vertical' ? true : false
  let __styles = styleHandler('auth')
  let containerClasses = [__styles.base]
  if (className) {
    containerClasses.push(className)
  }
  const Container = (props) =>
    _jsx(
      'div',
      Object.assign(
        { className: containerClasses.join(' '), style: style },
        {
          children: _jsxs(
            Space,
            Object.assign(
              { size: 8, direction: 'vertical' },
              {
                children: [
                  _jsx(SocialAuth, {
                    wesbittyOauth: wesbittyOauth,
                    verticalSocialLayout: verticalSocialLayout,
                    providers: providers,
                    socialLayout: socialLayout,
                    socialButtonSize: socialButtonSize,
                    socialColors: socialColors,
                    redirectTo: redirectTo,
                    onlyThirdPartyProviders: onlyThirdPartyProviders,
                    magicLink: magicLink,
                  }),
                  !onlyThirdPartyProviders && props.children,
                ],
              }
            )
          ),
        }
      )
    )
  useEffect(() => {
    // handle view override
    setAuthView(view)
  }, [view])
  switch (authView) {
    case VIEWS.SIGN_IN:
    case VIEWS.SIGN_UP:
      return _jsx(Container, {
        children: _jsx(EmailAuth, {
          id: authView === VIEWS.SIGN_UP ? 'auth-sign-up' : 'auth-sign-in',
          wesbittyOauth: wesbittyOauth,
          authView: authView,
          setAuthView: setAuthView,
          defaultEmail: defaultEmail,
          defaultPassword: defaultPassword,
          setDefaultEmail: setDefaultEmail,
          setDefaultPassword: setDefaultPassword,
          redirectTo: redirectTo,
          magicLink: magicLink,
        }),
      })
    case VIEWS.FORGOTTEN_PASSWORD:
      return _jsx(Container, {
        children: _jsx(ForgottenPassword, {
          wesbittyOauth: wesbittyOauth,
          setAuthView: setAuthView,
          redirectTo: redirectTo,
        }),
      })
    case VIEWS.MAGIC_LINK:
      return _jsx(Container, {
        children: _jsx(MagicLink, {
          wesbittyOauth: wesbittyOauth,
          setAuthView: setAuthView,
          redirectTo: redirectTo,
        }),
      })
    case VIEWS.UPDATE_PASSWORD:
      return _jsx(Container, {
        children: _jsx(UpdatePassword, { wesbittyOauth: wesbittyOauth }),
      })
    default:
      return null
  }
}
function SocialAuth(_a) {
  var {
      className,
      style,
      wesbittyOauth,
      children,
      socialLayout = 'vertical',
      socialColors = false,
      socialButtonSize,
      providers,
      verticalSocialLayout,
      redirectTo,
      onlyThirdPartyProviders,
      magicLink,
    } = _a,
    props = __rest(_a, [
      'className',
      'style',
      'wesbittyOauth',
      'children',
      'socialLayout',
      'socialColors',
      'socialButtonSize',
      'providers',
      'verticalSocialLayout',
      'redirectTo',
      'onlyThirdPartyProviders',
      'magicLink',
    ])
  const buttonStyles = {
    azure: {
      backgroundColor: '#008AD7',
      color: 'white',
    },
    bitbucket: {
      backgroundColor: '#205081',
      color: 'white',
    },
    facebook: {
      backgroundColor: '#4267B2',
      color: 'white',
    },
    github: {
      backgroundColor: '#333',
      color: 'white',
    },
    gitlab: {
      backgroundColor: '#FC6D27',
      color: 'white',
    },
    google: {
      backgroundColor: '#ce4430',
      color: 'white',
    },
    twitter: {
      backgroundColor: '#1DA1F2',
      color: 'white',
    },
    apple: {
      backgroundColor: '#000',
      color: 'white',
    },
    discord: {
      backgroundColor: '#404fec',
      color: 'white',
    },
    twitch: {
      backgroundColor: '#9146ff',
      color: 'white',
    },
  }
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const handleProviderSignIn = (provider) =>
    __awaiter(this, void 0, void 0, function* () {
      setLoading(true)
      const { error } = yield wesbittyOauth.auth.signIn(
        { provider },
        { redirectTo }
      )
      if (error) setError(error.message)
      setLoading(false)
    })
  let __styles = styleHandler('auth')
  return _jsx(
    Space,
    Object.assign(
      { size: 8, direction: 'vertical' },
      {
        children:
          providers &&
          providers.length > 0 &&
          _jsxs(React.Fragment, {
            children: [
              _jsxs(
                Space,
                Object.assign(
                  { size: 4, direction: 'vertical' },
                  {
                    children: [
                      _jsx(
                        Typography.Text,
                        Object.assign(
                          { type: 'secondary', className: __styles.label },
                          { children: 'Sign in with' }
                        )
                      ),
                      _jsx(
                        Space,
                        Object.assign(
                          { size: 2, direction: socialLayout },
                          {
                            children: providers.map((provider) => {
                              // @ts-ignore
                              const AuthIcon = SocialIcons[provider]
                              return _jsx(
                                'div',
                                Object.assign(
                                  {
                                    style: !verticalSocialLayout
                                      ? { flexGrow: 1 }
                                      : {},
                                  },
                                  {
                                    children: _jsx(
                                      Button,
                                      Object.assign(
                                        {
                                          block: true,
                                          type: 'default',
                                          shadow: true,
                                          size: socialButtonSize,
                                          style: socialColors
                                            ? buttonStyles[provider]
                                            : {},
                                          icon: _jsx(AuthIcon, {}),
                                          loading: loading,
                                          onClick: () =>
                                            handleProviderSignIn(provider),
                                          className: 'flex items-center',
                                        },
                                        {
                                          children:
                                            verticalSocialLayout &&
                                            'Sign up with ' + provider,
                                        }
                                      )
                                    ),
                                  }
                                ),
                                provider
                              )
                            }),
                          }
                        )
                      ),
                    ],
                  }
                )
              ),
              !onlyThirdPartyProviders &&
                _jsx(Divider, { children: 'or continue with' }),
            ],
          }),
      }
    )
  )
}
function EmailAuth({
  authView,
  defaultEmail,
  defaultPassword,
  id,
  setAuthView,
  setDefaultEmail,
  setDefaultPassword,
  wesbittyOauth,
  redirectTo,
  magicLink,
}) {
  const isMounted = useRef(true)
  const [email, setEmail] = useState(defaultEmail)
  const [password, setPassword] = useState(defaultPassword)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  useEffect(() => {
    setEmail(defaultEmail)
    setPassword(defaultPassword)
    return () => {
      isMounted.current = false
    }
  }, [authView])
  const handleSubmit = (e) =>
    __awaiter(this, void 0, void 0, function* () {
      e.preventDefault()
      setError('')
      setLoading(true)
      switch (authView) {
        case 'sign_in':
          const { error: signInError } = yield wesbittyOauth.auth.signIn(
            {
              email,
              password,
            },
            { redirectTo }
          )
          if (signInError) setError(signInError.message)
          break
        case 'sign_up':
          const {
            user: signUpUser,
            session: signUpSession,
            error: signUpError,
          } = yield wesbittyOauth.auth.signUp(
            {
              email,
              password,
            },
            { redirectTo }
          )
          if (signUpError) setError(signUpError.message)
          // Check if session is null -> email confirmation setting is turned on
          else if (signUpUser && !signUpSession)
            setMessage('Check your email for the confirmation link.')
          break
      }
      /*
       * it is possible the auth component may have been unmounted at this point
       * check if component is mounted before setting a useState
       */
      if (isMounted.current) setLoading(false)
    })
  const handleViewChange = (newView) => {
    setDefaultEmail(email)
    setDefaultPassword(password)
    setAuthView(newView)
  }
  return _jsx(
    'form',
    Object.assign(
      { id: id, onSubmit: handleSubmit },
      {
        children: _jsxs(
          Space,
          Object.assign(
            { size: 6, direction: 'vertical' },
            {
              children: [
                _jsxs(
                  Space,
                  Object.assign(
                    { size: 3, direction: 'vertical' },
                    {
                      children: [
                        _jsx(Input, {
                          label: 'Email address',
                          autoComplete: 'email',
                          defaultValue: email,
                          icon: _jsx(IconMail, { size: 21, stroke: '#666666' }),
                          onChange: (e) => setEmail(e.target.value),
                        }),
                        _jsx(Input, {
                          label: 'Password',
                          type: 'password',
                          defaultValue: password,
                          autoComplete: 'current-password',
                          icon: _jsx(IconKey, { size: 21, stroke: '#666666' }),
                          onChange: (e) => setPassword(e.target.value),
                        }),
                      ],
                    }
                  )
                ),
                _jsxs(
                  Space,
                  Object.assign(
                    { direction: 'vertical', size: 6 },
                    {
                      children: [
                        _jsxs(
                          Space,
                          Object.assign(
                            { style: { justifyContent: 'space-between' } },
                            {
                              children: [
                                _jsx(Checkbox, {
                                  label: 'Remember me',
                                  name: 'remember_me',
                                  id: 'remember_me',
                                  onChange: (value) =>
                                    setRememberMe(value.target.checked),
                                }),
                                authView === VIEWS.SIGN_IN &&
                                  _jsx(
                                    Typography.Link,
                                    Object.assign(
                                      {
                                        href: '#auth-forgot-password',
                                        onClick: (e) => {
                                          e.preventDefault()
                                          setAuthView(VIEWS.FORGOTTEN_PASSWORD)
                                        },
                                      },
                                      { children: 'Forgot your password?' }
                                    )
                                  ),
                              ],
                            }
                          )
                        ),
                        _jsx(
                          Button,
                          Object.assign(
                            {
                              htmlType: 'submit',
                              type: 'primary',
                              size: 'large',
                              icon: _jsx(IconLock, { size: 21 }),
                              loading: loading,
                              block: true,
                            },
                            {
                              children:
                                authView === VIEWS.SIGN_IN
                                  ? 'Sign in'
                                  : 'Sign up',
                            }
                          )
                        ),
                      ],
                    }
                  )
                ),
                _jsxs(
                  Space,
                  Object.assign(
                    { direction: 'vertical', style: { textAlign: 'center' } },
                    {
                      children: [
                        authView === VIEWS.SIGN_IN &&
                          magicLink &&
                          _jsx(
                            Typography.Link,
                            Object.assign(
                              {
                                href: '#auth-magic-link',
                                onClick: (e) => {
                                  e.preventDefault()
                                  setAuthView(VIEWS.MAGIC_LINK)
                                },
                              },
                              { children: 'Sign in with magic link' }
                            )
                          ),
                        authView === VIEWS.SIGN_IN
                          ? _jsx(
                              Typography.Link,
                              Object.assign(
                                {
                                  href: '#auth-sign-up',
                                  onClick: (e) => {
                                    e.preventDefault()
                                    handleViewChange(VIEWS.SIGN_UP)
                                  },
                                },
                                { children: "Don't have an account? Sign up" }
                              )
                            )
                          : _jsx(
                              Typography.Link,
                              Object.assign(
                                {
                                  href: '#auth-sign-in',
                                  onClick: (e) => {
                                    e.preventDefault()
                                    handleViewChange(VIEWS.SIGN_IN)
                                  },
                                },
                                { children: 'Do you have an account? Sign in' }
                              )
                            ),
                        message && _jsx(Typography.Text, { children: message }),
                        error &&
                          _jsx(
                            Typography.Text,
                            Object.assign(
                              { type: 'danger' },
                              { children: error }
                            )
                          ),
                      ],
                    }
                  )
                ),
              ],
            }
          )
        ),
      }
    )
  )
}
function MagicLink({ setAuthView, wesbittyOauth, redirectTo }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const handleMagicLinkSignIn = (e) =>
    __awaiter(this, void 0, void 0, function* () {
      e.preventDefault()
      setError('')
      setMessage('')
      setLoading(true)
      const { error } = yield wesbittyOauth.auth.signIn(
        { email },
        { redirectTo }
      )
      if (error) setError(error.message)
      else setMessage('Check your email for the magic link')
      setLoading(false)
    })
  return _jsx(
    'form',
    Object.assign(
      { id: 'auth-magic-link', onSubmit: handleMagicLinkSignIn },
      {
        children: _jsxs(
          Space,
          Object.assign(
            { size: 4, direction: 'vertical' },
            {
              children: [
                _jsxs(
                  Space,
                  Object.assign(
                    { size: 3, direction: 'vertical' },
                    {
                      children: [
                        _jsx(Input, {
                          label: 'Email address',
                          placeholder: 'Your email address',
                          icon: _jsx(IconMail, { size: 21, stroke: '#666666' }),
                          onChange: (e) => setEmail(e.target.value),
                        }),
                        _jsx(
                          Button,
                          Object.assign(
                            {
                              block: true,
                              size: 'large',
                              htmlType: 'submit',
                              icon: _jsx(IconInbox, { size: 21 }),
                              loading: loading,
                            },
                            { children: 'Send magic link' }
                          )
                        ),
                      ],
                    }
                  )
                ),
                _jsx(
                  Typography.Link,
                  Object.assign(
                    {
                      href: '#auth-sign-in',
                      onClick: (e) => {
                        e.preventDefault()
                        setAuthView(VIEWS.SIGN_IN)
                      },
                    },
                    { children: 'Sign in with password' }
                  )
                ),
                message && _jsx(Typography.Text, { children: message }),
                error &&
                  _jsx(
                    Typography.Text,
                    Object.assign({ type: 'danger' }, { children: error })
                  ),
              ],
            }
          )
        ),
      }
    )
  )
}
function ForgottenPassword({ setAuthView, wesbittyOauth, redirectTo }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const handlePasswordReset = (e) =>
    __awaiter(this, void 0, void 0, function* () {
      e.preventDefault()
      setError('')
      setMessage('')
      setLoading(true)
      const { error } = yield wesbittyOauth.auth.api.resetPasswordForEmail(
        email,
        { redirectTo }
      )
      if (error) setError(error.message)
      else setMessage('Check your email for the password reset link')
      setLoading(false)
    })
  return _jsx(
    'form',
    Object.assign(
      { id: 'auth-forgot-password', onSubmit: handlePasswordReset },
      {
        children: _jsxs(
          Space,
          Object.assign(
            { size: 4, direction: 'vertical' },
            {
              children: [
                _jsxs(
                  Space,
                  Object.assign(
                    { size: 3, direction: 'vertical' },
                    {
                      children: [
                        _jsx(Input, {
                          label: 'Email address',
                          placeholder: 'Your email address',
                          icon: _jsx(IconMail, { size: 21, stroke: '#666666' }),
                          onChange: (e) => setEmail(e.target.value),
                        }),
                        _jsx(
                          Button,
                          Object.assign(
                            {
                              block: true,
                              size: 'large',
                              htmlType: 'submit',
                              icon: _jsx(IconInbox, { size: 21 }),
                              loading: loading,
                            },
                            { children: 'Send reset password instructions' }
                          )
                        ),
                      ],
                    }
                  )
                ),
                _jsx(
                  Typography.Link,
                  Object.assign(
                    {
                      href: '#auth-sign-in',
                      onClick: (e) => {
                        e.preventDefault()
                        setAuthView(VIEWS.SIGN_IN)
                      },
                    },
                    { children: 'Go back to sign in' }
                  )
                ),
                message && _jsx(Typography.Text, { children: message }),
                error &&
                  _jsx(
                    Typography.Text,
                    Object.assign({ type: 'danger' }, { children: error })
                  ),
              ],
            }
          )
        ),
      }
    )
  )
}
function UpdatePassword({ wesbittyOauth }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const handlePasswordReset = (e) =>
    __awaiter(this, void 0, void 0, function* () {
      e.preventDefault()
      setError('')
      setMessage('')
      setLoading(true)
      const { error } = yield wesbittyOauth.auth.update({ password })
      if (error) setError(error.message)
      else setMessage('Your password has been updated')
      setLoading(false)
    })
  return _jsx(
    'form',
    Object.assign(
      { id: 'auth-update-password', onSubmit: handlePasswordReset },
      {
        children: _jsxs(
          Space,
          Object.assign(
            { size: 4, direction: 'vertical' },
            {
              children: [
                _jsxs(
                  Space,
                  Object.assign(
                    { size: 3, direction: 'vertical' },
                    {
                      children: [
                        _jsx(Input, {
                          label: 'New password',
                          placeholder: 'Enter your new password',
                          type: 'password',
                          icon: _jsx(IconKey, { size: 21, stroke: '#666666' }),
                          onChange: (e) => setPassword(e.target.value),
                        }),
                        _jsx(
                          Button,
                          Object.assign(
                            {
                              block: true,
                              size: 'large',
                              htmlType: 'submit',
                              icon: _jsx(IconKey, { size: 21 }),
                              loading: loading,
                            },
                            { children: 'Update password' }
                          )
                        ),
                      ],
                    }
                  )
                ),
                message && _jsx(Typography.Text, { children: message }),
                error &&
                  _jsx(
                    Typography.Text,
                    Object.assign({ type: 'danger' }, { children: error })
                  ),
              ],
            }
          )
        ),
      }
    )
  )
}
Auth.ForgottenPassword = ForgottenPassword
Auth.UpdatePassword = UpdatePassword
Auth.MagicLink = MagicLink
Auth.UserContextProvider = UserContextProvider
Auth.useUser = useUser
