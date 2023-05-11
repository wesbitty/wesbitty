import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from 'react/jsx-runtime'
import { useReducer, useState } from 'react'
import { Form } from './../'
import {
  Input,
  Button,
  InputNumber,
  Toggle,
  IconChevronUp,
  IconCheck,
  IconArrowRight,
  IconX,
  Tabs,
  IconGlobe,
  IconTrash,
} from '../../../index'
import { Collapsible } from '../../Collapsible'
import AuthFormSchema from './AuthFormSchema.json'
import { Modal } from '../../Modal'
// import GoogleIcon './../../../static/icons/google-icon.svg'
const DocsButton = () => {
  return _jsxs(
    'button',
    Object.assign(
      {
        className:
          '\n                group\n                w-full\n                bg-scale-300  \n                dark:bg-scale-100  \n                border \n                border-scale-500 hover:border-scale-700\n                dark:border-scale-300 dark:hover:border-scale-500\n                px-6 py-4 \n                my-6 \n                flex gap-6 items-center\n                rounded-md shadow-sm\n                transition\n                text-left\n              ',
      },
      {
        children: [
          _jsx('div', {
            className:
              'transition duration-500 bg-brand-900 rounded p-1 w-10 h-10 group-hover:-rotate-3 group-hover:scale-110',
          }),
          _jsxs(
            'div',
            Object.assign(
              { className: 'grow' },
              {
                children: [
                  _jsx(
                    'h3',
                    Object.assign(
                      { className: 'text-scale-1200' },
                      {
                        children:
                          'Use authentication as the backbone of your app',
                      }
                    )
                  ),
                  _jsx(
                    'p',
                    Object.assign(
                      { className: 'text-scale-900 text-xs' },
                      {
                        children:
                          'Learn how to use Supabase Auth with Auth Policies to pick and choose what users see what.',
                      }
                    )
                  ),
                  _jsxs(
                    'p',
                    Object.assign(
                      {
                        className:
                          'text-brand-900 mt-2 text-xs flex items-center gap-1',
                      },
                      {
                        children: [
                          'See Documenation',
                          _jsx(
                            'span',
                            Object.assign(
                              {
                                className:
                                  'transition group-hover:translate-x-1',
                              },
                              {
                                children: _jsx(IconArrowRight, {
                                  strokeWidth: 2,
                                  width: 12,
                                }),
                              }
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
          _jsx(
            'div',
            Object.assign(
              { className: 'text-scale-900' },
              { children: _jsx(IconX, {}) }
            )
          ),
        ],
      }
    )
  )
}
const CardForm = () => {
  // panel
  const Panel = ({ children, header, footer }) =>
    _jsxs(
      'div',
      Object.assign(
        {
          className:
            '\n      bg-scale-100 \n      dark:bg-scale-300 \n      \n      border border-scale-400 rounded-md my-8 shadow overflow-hidden',
        },
        {
          children: [
            header &&
              _jsx(
                'div',
                Object.assign(
                  {
                    className:
                      'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                  },
                  { children: header }
                )
              ),
            _jsx(
              'div',
              Object.assign(
                { className: 'space-y-6 py-6' },
                { children: children }
              )
            ),
            footer,
          ],
        }
      )
    )
  const Section = ({ children, header }) =>
    _jsxs(
      'div',
      Object.assign(
        { className: 'grid grid-cols-12 px-8 py-2' },
        { children: [header, children] }
      )
    )
  return _jsx(_Fragment, {
    children: _jsx(
      Form,
      Object.assign(
        {
          id: 'general_form',
          initialValues: {
            enable_signups: true,
            jwt_expiry: 3600,
          },
          onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          },
          validate: (values) => {
            const errors = {}
            if (!values.jwt_expiry) {
              errors.jwt_expiry = 'This is required'
            }
            if (values.jwt_expiry > 604800) {
              errors.jwt_expiry =
                'The maxiumum allowed is 604,800 seconds. Use a smaller number of seconds.'
            }
            return errors
          },
        },
        {
          children: ({ isSubmitting, handleReset }) =>
            _jsxs(
              Panel,
              Object.assign(
                {
                  footer: _jsxs(_Fragment, {
                    children: [
                      _jsx('div', { className: 'border-t border-scale-400' }),
                      _jsxs(
                        'div',
                        Object.assign(
                          { className: 'py-3 px-6 flex gap-2 justify-end' },
                          {
                            children: [
                              _jsx(
                                Button,
                                Object.assign(
                                  {
                                    type: 'default',
                                    htmlType: 'reset',
                                    onClick: () => handleReset(),
                                  },
                                  { children: 'Cancel' }
                                )
                              ),
                              _jsx(
                                Button,
                                Object.assign(
                                  {
                                    loading: isSubmitting,
                                    type: 'primary',
                                    htmlType: 'submit',
                                    form: 'general_form',
                                  },
                                  { children: 'Save' }
                                )
                              ),
                            ],
                          }
                        )
                      ),
                    ],
                  }),
                },
                {
                  children: [
                    _jsx(
                      Section,
                      Object.assign(
                        {
                          header: _jsx(
                            'label',
                            Object.assign(
                              {
                                className: 'text-sm text-scale-1200 col-span-4',
                              },
                              { children: 'User Signups' }
                            )
                          ),
                        },
                        {
                          children: _jsx(Toggle, {
                            id: 'enable_signups',
                            className: 'col-span-8',
                            label: 'Allow new users to sign up',
                            layout: 'flex',
                            descriptionText:
                              'If this is disabled, new users will not be able to sign up to your application.',
                          }),
                        }
                      )
                    ),
                    _jsx('div', { className: 'border-t border-scale-400' }),
                    _jsx(
                      Section,
                      Object.assign(
                        {
                          header: _jsx(
                            'label',
                            Object.assign(
                              {
                                className: 'text-sm text-scale-1200 col-span-4',
                              },
                              { children: 'User Sessions' }
                            )
                          ),
                        },
                        {
                          children: _jsx(InputNumber, {
                            className: 'col-span-8',
                            id: 'jwt_expiry',
                            label: 'JWT expiry limit',
                            descriptionText:
                              'How long tokens are valid for, in seconds. Defaults to 3600 (1 hour), maximum 604,800 seconds (one week).',
                          }),
                        }
                      )
                    ),
                  ],
                }
              )
            ),
        }
      )
    ),
  })
}
// type to do later..
let initialState = {}
AuthFormSchema.map((provider) => {
  initialState[`${provider.name.toLowerCase()}-active`] =
    provider.name == 'Email' ? true : false
  initialState[`${provider.name.toLowerCase()}-app-id`] = ''
  initialState[`${provider.name.toLowerCase()}-id-key`] = ''
})
console.log('form initialState', initialState)
function providersReducer(state, action) {
  switch (action.type) {
    case 'update':
      return Object.assign(state, action.values)
    // case 'decrement':
    //   return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
const AuthForm = () => {
  const [providersFormState, dispatchProvidersForm] = useReducer(
    providersReducer,
    initialState
  )
  console.log('providersFormState from useState', providersFormState)
  // panel
  const Panel = ({ children, header, footer }) =>
    _jsxs(
      'div',
      Object.assign(
        {
          className:
            'bg-scale-300 border border-scale-400 rounded-md w-3/4 mx-auto my-8 shadow overflow-hidden',
        },
        {
          children: [
            header &&
              _jsx(
                'div',
                Object.assign(
                  {
                    className:
                      'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                  },
                  { children: header }
                )
              ),
            _jsx(
              'div',
              Object.assign(
                { className: 'space-y-6 py-6' },
                { children: children }
              )
            ),
            footer,
          ],
        }
      )
    )
  const Section = ({ children, header }) =>
    _jsxs(
      'div',
      Object.assign(
        { className: 'grid grid-cols-12 px-8 py-2' },
        { children: [header, children] }
      )
    )
  const CollapsibleContainer = ({ children, header }) => {
    return _jsx(
      'div',
      Object.assign(
        {
          className:
            '\n          bg-scale-400 border border-scale-500 mx-auto shadow overflow-hidden\n          first:rounded-tr first:rounded-tl\n          last:rounded-br last:rounded-bl  \n          hover:border-scale-700\n          hover:bg-scale-500\n          transition\n        ',
        },
        { children: children }
      )
    )
  }
  const ProviderForm = ({ provider }) => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(
      providersFormState[`${provider.name.toLowerCase()}-active`]
    )
    console.log('panel active state', active)
    return (
      // <CollapsibleContainer>
      _jsxs(
        Collapsible,
        Object.assign(
          {
            open: open,
            onOpenChange: setOpen,
            className:
              '\n            bg-scale-100 dark:bg-scale-300 \n            hover:bg-scale-200 dark:hover:bg-scale-500\n            data-open:bg-scale-200 dark:data-open:bg-scale-500 \n            border \n            border-scale-300 dark:border-scale-500 \n            hover:border-scale-500 dark:hover:border-scale-700\n\n            mx-auto shadow overflow-hidden\n            first:rounded-tr first:rounded-tl\n            last:rounded-br last:rounded-bl  \n            \n            data-open:border-scale-700\n            data-open:pb-px\n\n            transition\n            -space-y-px col-span-12\n            hover:z-50\n            ',
          },
          {
            children: [
              _jsx(
                Collapsible.Trigger,
                Object.assign(
                  { asChild: true },
                  {
                    children: _jsxs(
                      'button',
                      Object.assign(
                        {
                          type: 'button',
                          className:
                            '\n              \n              group text-scale-1200 \n              flex \n              justify-between items-center w-full rounded p-3 px-6',
                        },
                        {
                          children: [
                            _jsxs(
                              'div',
                              Object.assign(
                                { className: 'flex gap-3 items-center' },
                                {
                                  children: [
                                    _jsx(IconChevronUp, {
                                      className:
                                        'text-scale-800 transition data-open-parent:rotate-0 data-closed-parent:rotate-180',
                                      strokeWidth: 2,
                                    }),
                                    _jsx('img', {
                                      className: 'w-6 fill-red-400',
                                      src: `/icons/${provider.icon}.svg`,
                                      width: 21,
                                      alt: `${provider.name} auth icon`,
                                    }),
                                    _jsx(
                                      'span',
                                      Object.assign(
                                        { className: 'text-base' },
                                        { children: provider.name }
                                      )
                                    ),
                                  ],
                                }
                              )
                            ),
                            _jsx(
                              'div',
                              Object.assign(
                                { className: 'flex gap-3 items-center' },
                                {
                                  children: active
                                    ? _jsxs(
                                        'div',
                                        Object.assign(
                                          {
                                            className:
                                              'bg-brand-200 border border-brand-700 py-1 px-1 text-brand-900 text-xs rounded-full flex gap-1 items-center',
                                          },
                                          {
                                            children: [
                                              _jsx(
                                                'span',
                                                Object.assign(
                                                  {
                                                    className:
                                                      'text-xs bg-brand-900 rounded-full p-0.5 text-brand-200',
                                                  },
                                                  {
                                                    children: _jsx(IconCheck, {
                                                      strokeWidth: 2,
                                                      size: 12,
                                                    }),
                                                  }
                                                )
                                              ),
                                              _jsx(
                                                'span',
                                                Object.assign(
                                                  { className: 'px-1' },
                                                  { children: 'Enabled' }
                                                )
                                              ),
                                            ],
                                          }
                                        )
                                      )
                                    : _jsx(
                                        'div',
                                        Object.assign(
                                          {
                                            className:
                                              'bg-scale-100 dark:bg-scale-300 border border-scale-500 dark:border-scale-700 py-1 px-3 text-scale-900 text-xs rounded-md',
                                          },
                                          { children: 'Disabled' }
                                        )
                                      ),
                                }
                              )
                            ),
                          ],
                        }
                      )
                    ),
                  }
                )
              ),
              _jsx(
                Form,
                Object.assign(
                  {
                    name: `provider-${provider.name}-form`,
                    initialValues: {
                      [`${provider.name.toLowerCase()}-active`]:
                        providersFormState[
                          `${provider.name.toLowerCase()}-active`
                        ] ||
                        // empty form should have this as enabled for UX
                        true,
                      [`${provider.name.toLowerCase()}-app-id`]:
                        providersFormState[
                          `${provider.name.toLowerCase()}-app-id`
                        ],
                      [`${provider.name.toLowerCase()}-id-key`]:
                        providersFormState[
                          `${provider.name.toLowerCase()}-id-key`
                        ],
                    },
                    validate: (values) => {
                      const errors = {}
                      console.log('validation values', values)
                      const input_active = `${provider.name.toLowerCase()}-active`
                      const input_app_id = `${provider.name.toLowerCase()}-app-id`
                      const input_id_key = `${provider.name.toLowerCase()}-id-key`
                      if (
                        values[input_app_id] &&
                        values[input_app_id].length < 10
                      )
                        errors[input_app_id] =
                          'App ID must be at least 10 characters long'
                      if (
                        values[input_app_id] &&
                        values[input_id_key].length < 10
                      )
                        errors[input_id_key] =
                          'Secret must be at least 10 characters long'
                      if (values[input_active]) {
                        if (!values[input_app_id])
                          errors[input_app_id] =
                            'You need to input an application ID if you want to enable this provider.'
                        if (!values[input_id_key])
                          errors[input_id_key] =
                            'You need to input an application secret if you want to enable this provider.'
                      }
                      return errors
                    },
                    onSubmit: (values, { setSubmitting }) => {
                      setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2))
                        dispatchProvidersForm({
                          type: 'update',
                          values: values,
                        })
                        setActive(
                          values[`${provider.name.toLowerCase()}-active`]
                        )
                        setSubmitting(false)
                        setOpen(false)
                      }, 400)
                    },
                  },
                  {
                    children: ({ isSubmitting, handleReset }) =>
                      _jsx(Collapsible.Content, {
                        children: _jsx(
                          'div',
                          Object.assign(
                            {
                              className:
                                '\n                  bg-scale-100 dark:bg-scale-300\n                  group text-scale-1200 border-t border-scale-500 py-6 px-6\n                ',
                            },
                            {
                              children: _jsxs(
                                'div',
                                Object.assign(
                                  { className: 'space-y-6 max-w-md mx-auto' },
                                  {
                                    children: [
                                      _jsx(Toggle, {
                                        id: `${provider.name.toLowerCase()}-active`,
                                        name: `${provider.name.toLowerCase()}-active`,
                                        label: `Enable ${provider.name} Provider`,
                                        layout: 'flex',
                                      }),
                                      _jsx('div', {
                                        className: 'border-t border-scale-400',
                                      }),
                                      provider.form.map((x) => {
                                        return _jsx(
                                          Input,
                                          {
                                            id: x.name,
                                            name: x.name,
                                            label: x.label,
                                            descriptionText: x.description,
                                            layout: 'vertical',
                                          },
                                          x.name
                                        )
                                      }),
                                      _jsx('div', {
                                        className: 'border-t border-scale-400',
                                      }),
                                      _jsxs(
                                        'div',
                                        Object.assign(
                                          {
                                            className:
                                              'flex items-center gap-3 justify-end',
                                          },
                                          {
                                            children: [
                                              _jsx(
                                                Button,
                                                Object.assign(
                                                  {
                                                    htmlType: 'reset',
                                                    onClick: () => {
                                                      handleReset()
                                                      setOpen(false)
                                                    },
                                                    type: 'secondary',
                                                  },
                                                  { children: 'Cancel' }
                                                )
                                              ),
                                              _jsx(
                                                Button,
                                                Object.assign(
                                                  {
                                                    htmlType: 'submit',
                                                    loading: isSubmitting,
                                                  },
                                                  { children: 'Save' }
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
                        ),
                      }),
                  }
                )
              ),
            ],
          }
        )
      )
      // </CollapsibleContainer>
    )
  }
  return _jsx(
    'div',
    Object.assign(
      { className: 'mx-auto my-8' },
      {
        children: _jsx(
          'div',
          Object.assign(
            { className: '-space-y-px' },
            {
              children: AuthFormSchema.map((provider) => {
                return _jsx(ProviderForm, { provider: provider })
              }),
            }
          )
        ),
      }
    )
  )
}
// type to do later..
let domainInitialState = ['https://summersmuir.com', 'http://localhost:3000']
// AuthFormSchema.map((provider) => {
//   domainInitialState[`${provider.name.toLowerCase()}-active`] =
//     provider.name == 'Email' ? true : false
//   domainInitialState[`${provider.name.toLowerCase()}-app-id`] = ''
//   domainInitialState[`${provider.name.toLowerCase()}-id-key`] = ''
// })
console.log('form domainInitialState', domainInitialState)
// function domainsReducer(state, action) {
//   switch (action.type) {
//     case 'update':
//       let _state = []
//       _state.push(...state)
//       _state.push(action.values.domain)
//       console.log('new state', _state)
//       return _state
//     // case 'remove':
//     //   _state.push(...state)
//     //   _state = _state.filter((e: any) => e !== action.values)
//     //   console.log('new state', _state)
//     //   return _state
//     // case 'decrement':
//     //   return { count: state.count - 1 }
//     default:
//       throw new Error()
//   }
// }
function domainsReducer(state, action) {
  let _state = []
  switch (action.type) {
    case 'update':
      _state.push(...state)
      _state.push(action.values.domain)
      console.log('new state', _state)
      return _state
    case 'remove':
      _state.push(...state)
      _state = _state.filter((e) => e !== action.values)
      console.log('new state', _state)
      return _state
    // case 'decrement':
    //   return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
const DomainsForm = () => {
  const [domainsFormState, dispatchDomainsForm] = useReducer(
    domainsReducer,
    domainInitialState
  )
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [selectedDomain, setSelected] = useState('')
  console.log('domainsFormState from useState', domainsFormState)
  const DomainsForm = () => {
    // const [active, setActive] = useState(
    //   domainsFormState[`${provider.name.toLowerCase()}-active`]
    // )
    const [open, setOpen] = useState(false)
    // console.log('panel active state', active)
    return _jsx(_Fragment, {
      children: _jsxs(
        'div',
        Object.assign(
          { className: 'flex items-center justify-between my-6' },
          {
            children: [
              _jsxs('div', {
                children: [
                  _jsx(
                    'h3',
                    Object.assign(
                      { className: 'text-scale-1200 text-2xl mb-2' },
                      { children: 'Authorised domains' }
                    )
                  ),
                  _jsx(
                    'p',
                    Object.assign(
                      { className: 'text-sm text-scale-900' },
                      {
                        children:
                          'Turn payment methods on and off in one click \u2013 no engineering time required.',
                      }
                    )
                  ),
                  _jsx(
                    'p',
                    Object.assign(
                      { className: 'text-sm text-scale-900' },
                      {
                        children:
                          'Use our guide to check which payment methods are compatible with your integration.',
                      }
                    )
                  ),
                ],
              }),
              _jsx(
                Button,
                Object.assign(
                  { onClick: () => setOpen(true) },
                  { children: 'Add domain' }
                )
              ),
              _jsx(
                Modal,
                Object.assign(
                  {
                    size: 'small',
                    visible: open,
                    onCancel: () => setOpen(!open),
                    header: _jsx(
                      'div',
                      Object.assign(
                        {
                          className: 'flex items-center gap-2 text-scale-1200',
                        },
                        {
                          children: _jsx(
                            'div',
                            Object.assign(
                              { className: 'flex items-baseline gap-2' },
                              {
                                children: _jsx(
                                  'h3',
                                  Object.assign(
                                    { className: 'text-sm' },
                                    { children: 'Add a new domain' }
                                  )
                                ),
                              }
                            )
                          ),
                        }
                      )
                    ),
                    contentStyle: { padding: 0 },
                    hideFooter: true,
                  },
                  {
                    children: _jsx(
                      Form,
                      Object.assign(
                        {
                          id: 'new-domain-form',
                          initialValues: {
                            domain: '',
                          },
                          validateOnBlur: true,
                          onSubmit: (values, { setSubmitting }) => {
                            console.log('submitting domain')
                            setTimeout(() => {
                              setSubmitting(false)
                              dispatchDomainsForm({
                                type: 'update',
                                values: values,
                              })
                              setOpen(false)
                            }, 400)
                          },
                          validate: (values) => {
                            const errors = {}
                            if (!values.domain) {
                              errors.domain = 'A domain is required'
                            } else if (
                              !/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i.test(
                                values.domain
                              )
                            ) {
                              errors.domain =
                                'Not a valid URL. Please use http:// or https://'
                            }
                            return errors
                          },
                        },
                        {
                          children: ({ isSubmitting, errors, touched }) => {
                            // console.log('errors in form', errors)
                            // console.log('touched in form', touched)
                            return _jsxs(
                              'div',
                              Object.assign(
                                { className: 'space-y-4 pt-4 mb-4' },
                                {
                                  children: [
                                    _jsx(
                                      'div',
                                      Object.assign(
                                        { className: 'px-5' },
                                        {
                                          children: _jsx(
                                            'p',
                                            Object.assign(
                                              {
                                                className:
                                                  'text-sm text-scale-1100',
                                              },
                                              {
                                                children:
                                                  'This will add a domain to a list of allowed domains that can interact with your Authenticaton services for this project.',
                                              }
                                            )
                                          ),
                                        }
                                      )
                                    ),
                                    _jsx('div', {
                                      className:
                                        'border-t border-overlay-border',
                                    }),
                                    _jsx(
                                      'div',
                                      Object.assign(
                                        { className: 'px-5' },
                                        {
                                          children: _jsx(Input, {
                                            id: 'domain',
                                            name: 'domain',
                                            label: 'Domain',
                                            placeholder: 'https://mydomain.com',
                                          }),
                                        }
                                      )
                                    ),
                                    _jsx('div', {
                                      className:
                                        'border-t border-overlay-border',
                                    }),
                                    _jsx(
                                      'div',
                                      Object.assign(
                                        { className: 'px-5' },
                                        {
                                          children: _jsx(
                                            Button,
                                            Object.assign(
                                              {
                                                form: 'new-domain-form',
                                                htmlType: 'submit',
                                                block: true,
                                                size: 'medium',
                                                loading: isSubmitting,
                                              },
                                              { children: 'Add domain' }
                                            )
                                          ),
                                        }
                                      )
                                    ),
                                  ],
                                }
                              )
                            )
                          },
                        }
                      )
                    ),
                  }
                )
              ),
            ],
          }
        )
      ),
    })
  }
  console.log('RENDER DOMAINS')
  return _jsxs(
    'div',
    Object.assign(
      { className: 'mx-auto my-8' },
      {
        children: [
          _jsx(DomainsForm, {}),
          _jsx(
            'div',
            Object.assign(
              { className: '-space-y-px' },
              {
                children: domainsFormState.map((domain) => {
                  return _jsx(_Fragment, {
                    children: _jsxs(
                      'div',
                      Object.assign(
                        {
                          className:
                            'bg-scale-300 px-6 py-4 border border-scale-500 \n              first:rounded-tr first:rounded-tl\n              last:rounded-br last:rounded-bl \n              text-sm text-scale-1200\n            flex gap-2 items-center justify-between\n            ',
                        },
                        {
                          children: [
                            _jsxs(
                              'div',
                              Object.assign(
                                {
                                  className:
                                    'flex gap-2 items-center font-mono',
                                },
                                {
                                  children: [
                                    _jsx(
                                      'span',
                                      Object.assign(
                                        { className: 'text-scale-900' },
                                        {
                                          children: _jsx(IconGlobe, {
                                            strokeWidth: 2,
                                            size: 14,
                                          }),
                                        }
                                      )
                                    ),
                                    domain,
                                  ],
                                }
                              )
                            ),
                            _jsx(
                              Button,
                              Object.assign(
                                {
                                  type: 'default',
                                  icon: _jsx(IconTrash, {}),
                                  onClick: () => {
                                    setSelected(domain)
                                    setDeleteOpen(true)
                                  },
                                },
                                { children: 'Remove' }
                              )
                            ),
                          ],
                        }
                      )
                    ),
                  })
                }),
              }
            )
          ),
          _jsx(
            Modal,
            Object.assign(
              {
                size: 'small',
                visible: deleteOpen,
                onCancel: () => setDeleteOpen(!open),
                header: _jsx(
                  'div',
                  Object.assign(
                    { className: 'flex items-center gap-2 text-scale-1200' },
                    {
                      children: _jsx(
                        'div',
                        Object.assign(
                          { className: 'flex items-baseline gap-2' },
                          {
                            children: _jsx(
                              'h3',
                              Object.assign(
                                { className: 'text-sm' },
                                { children: 'Remove domain' }
                              )
                            ),
                          }
                        )
                      ),
                    }
                  )
                ),
                contentStyle: { padding: 0 },
                hideFooter: true,
              },
              {
                children: _jsxs(
                  'div',
                  Object.assign(
                    { className: 'space-y-4 pt-4 mb-4' },
                    {
                      children: [
                        _jsxs(
                          'div',
                          Object.assign(
                            { className: 'px-5' },
                            {
                              children: [
                                _jsxs(
                                  'p',
                                  Object.assign(
                                    {
                                      className: 'text-sm text-scale-1100 mb-2',
                                    },
                                    {
                                      children: [
                                        'Are you sure you want to remove',
                                        ' ',
                                        _jsx(
                                          'span',
                                          Object.assign(
                                            { className: 'text-scale-1200' },
                                            { children: selectedDomain }
                                          )
                                        ),
                                        '?',
                                      ],
                                    }
                                  )
                                ),
                                _jsx(
                                  'p',
                                  Object.assign(
                                    { className: 'text-sm text-scale-900' },
                                    {
                                      children:
                                        'This domain will no longer work with your Authentication configuration.',
                                    }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                        _jsx('div', {
                          className: 'border-t border-overlay-border',
                        }),
                        _jsxs(
                          'div',
                          Object.assign(
                            { className: 'px-5 flex gap-3' },
                            {
                              children: [
                                _jsx(
                                  Button,
                                  Object.assign(
                                    {
                                      type: 'secondary',
                                      block: true,
                                      size: 'medium',
                                      onClick: () => {
                                        // setOpen(!open)
                                      },
                                    },
                                    { children: 'Cancel' }
                                  )
                                ),
                                _jsx(
                                  Button,
                                  Object.assign(
                                    {
                                      block: true,
                                      size: 'medium',
                                      type: 'warning',
                                      loading: deleteLoading,
                                      onClick: () => {
                                        setDeleteLoading(true)
                                        setTimeout(() => {
                                          dispatchDomainsForm({
                                            type: 'remove',
                                            values: selectedDomain,
                                          })
                                          setDeleteOpen(!deleteOpen)
                                          setDeleteLoading(false)
                                        }, 800)
                                      },
                                    },
                                    {
                                      children: deleteLoading
                                        ? 'Removing...'
                                        : 'Remove domain',
                                    }
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
          ),
        ],
      }
    )
  )
}
const SmtpForm = () => {
  const [active, setActive] = useState(true)
  // panel
  const Panel = ({ children, header, footer }) =>
    _jsxs(
      'div',
      Object.assign(
        {
          className:
            '\n      bg-scale-100 \n      dark:bg-scale-300 \n      \n      border border-scale-400 rounded-md my-8 shadow overflow-hidden',
        },
        {
          children: [
            header &&
              _jsx(
                'div',
                Object.assign(
                  {
                    className:
                      'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                  },
                  { children: header }
                )
              ),
            _jsx(
              'div',
              Object.assign(
                { className: 'space-y-6 py-6' },
                { children: children }
              )
            ),
            footer,
          ],
        }
      )
    )
  const Section = ({ children, header }) =>
    _jsxs(
      'div',
      Object.assign(
        { className: 'grid grid-cols-12 px-8 py-2 gap-8' },
        {
          children: [
            header &&
              _jsx(
                'div',
                Object.assign({ className: 'col-span-4' }, { children: header })
              ),
            children,
          ],
        }
      )
    )
  return _jsx(_Fragment, {
    children: _jsx(
      Form,
      Object.assign(
        {
          id: 'general_form',
          initialValues: {
            enable_smtp: false,
            jwt_expiry: 3600,
          },
          onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          },
          validate: (values) => {
            const errors = {}
            if (!values.jwt_expiry) {
              errors.jwt_expiry = 'This is required'
            }
            if (values.jwt_expiry > 604800) {
              errors.jwt_expiry =
                'The maxiumum allowed is 604,800 seconds. Use a smaller number of seconds.'
            }
            return errors
          },
        },
        {
          children: ({ isSubmitting, handleReset, values }) =>
            _jsxs(
              Panel,
              Object.assign(
                {
                  footer: _jsxs(_Fragment, {
                    children: [
                      _jsx('div', { className: 'border-t border-scale-400' }),
                      _jsxs(
                        'div',
                        Object.assign(
                          { className: 'py-3 px-6 flex gap-2 justify-end' },
                          {
                            children: [
                              _jsx(
                                Button,
                                Object.assign(
                                  {
                                    loading: isSubmitting,
                                    type: 'secondary',
                                    htmlType: 'reset',
                                    onClick: () => handleReset(),
                                  },
                                  { children: 'Cancel' }
                                )
                              ),
                              _jsx(
                                Button,
                                Object.assign(
                                  {
                                    loading: isSubmitting,
                                    type: 'primary',
                                    htmlType: 'submit',
                                    form: 'general_form',
                                  },
                                  { children: 'Save' }
                                )
                              ),
                            ],
                          }
                        )
                      ),
                    ],
                  }),
                },
                {
                  children: [
                    _jsx(
                      Toggle,
                      // onChange={() => setActive(!active)}
                      // checked={active}
                      {
                        // onChange={() => setActive(!active)}
                        // checked={active}
                        name: 'enable_smtp',
                        className: 'col-span-8 mx-8',
                        label: 'Enable Custom SMTP',
                        layout: 'flex',
                        descriptionText:
                          'If this is disabled, new users will not be able to sign up to your application.',
                      }
                    ),
                    _jsx('div', { className: 'border-t border-scale-400' }),
                    _jsx(
                      Section,
                      Object.assign(
                        {
                          header: _jsxs(
                            'div',
                            Object.assign(
                              { className: 'w-full' },
                              {
                                children: [
                                  _jsx(
                                    'label',
                                    Object.assign(
                                      { className: 'text-sm text-scale-1100' },
                                      { children: 'SMTP details' }
                                    )
                                  ),
                                  _jsx(
                                    'p',
                                    Object.assign(
                                      { className: 'text-sm text-scale-900' },
                                      {
                                        children:
                                          'These settings can be found in your SMTP provider config',
                                      }
                                    )
                                  ),
                                ],
                              }
                            )
                          ),
                        },
                        {
                          children: _jsxs(
                            'div',
                            Object.assign(
                              { className: 'space-y-6 col-span-8' },
                              {
                                children: [
                                  _jsx(Input, {
                                    label: 'Sender address',
                                    type: 'url',
                                    disabled: !values.enable_smtp,
                                  }),
                                  _jsx(Input, {
                                    label: 'SMTP server host',
                                    disabled: !values.enable_smtp,
                                  }),
                                  _jsx(InputNumber, {
                                    label: 'SMTP server port',
                                    disabled: !values.enable_smtp,
                                  }),
                                  _jsx(Input, {
                                    label: 'SMTP account username',
                                    disabled: !values.enable_smtp,
                                  }),
                                  _jsx(Input, {
                                    label: 'SMTP account password',
                                    type: 'password',
                                    disabled: !values.enable_smtp,
                                  }),
                                ],
                              }
                            )
                          ),
                        }
                      )
                    ),
                    values.enable_smtp &&
                      _jsx(
                        'div',
                        Object.assign(
                          { className: 'mx-8' },
                          { children: _jsx(DocsButton, {}) }
                        )
                      ),
                  ],
                }
              )
            ),
        }
      )
    ),
  })
}
const TemplatesForm = () => {
  const [active, setActive] = useState(true)
  // panel
  const Panel = ({ children, header, footer }) =>
    _jsxs(
      'div',
      Object.assign(
        {
          className:
            '\n      bg-scale-100 \n      dark:bg-scale-300 \n      border border-scale-400 rounded-md mb-8 shadow overflow-hidden',
        },
        {
          children: [
            header &&
              _jsx(
                'div',
                Object.assign(
                  {
                    className:
                      'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                  },
                  { children: header }
                )
              ),
            _jsx(
              'div',
              Object.assign(
                { className: 'space-y-6 py-6' },
                { children: children }
              )
            ),
            footer,
          ],
        }
      )
    )
  const Section = ({ children, header }) =>
    _jsxs(
      'div',
      Object.assign(
        { className: 'grid grid-cols-12 px-8 py-2 gap-8' },
        {
          children: [
            header &&
              _jsx(
                'div',
                Object.assign({ className: 'col-span-4' }, { children: header })
              ),
            children,
          ],
        }
      )
    )
  return _jsx(_Fragment, {
    children: _jsx(
      Form,
      Object.assign(
        {
          id: 'general_form',
          initialValues: {
            enable_smtp: false,
            jwt_expiry: 3600,
          },
          onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          },
          validate: (values) => {
            const errors = {}
            if (!values.jwt_expiry) {
              errors.jwt_expiry = 'This is required'
            }
            if (values.jwt_expiry > 604800) {
              errors.jwt_expiry =
                'The maxiumum allowed is 604,800 seconds. Use a smaller number of seconds.'
            }
            return errors
          },
        },
        {
          children: ({ isSubmitting, handleReset, values }) =>
            _jsxs(_Fragment, {
              children: [
                _jsx(
                  'div',
                  Object.assign(
                    { className: 'my-4' },
                    {
                      children: _jsxs(
                        Tabs,
                        Object.assign(
                          {
                            defaultActiveId: 'confirm_signup',
                            type: 'underlined',
                            // listClassNames="px-8"
                            size: 'medium',
                          },
                          {
                            children: [
                              _jsx(Tabs.Panel, {
                                id: 'confirm_signup',
                                label: 'Confirm Signup',
                              }),
                              _jsx(Tabs.Panel, {
                                id: 'reset_password',
                                label: 'Reset Password',
                              }),
                              _jsx(Tabs.Panel, {
                                id: 'magic_link',
                                label: 'Magic Link',
                              }),
                              _jsx(Tabs.Panel, {
                                id: 'change_email_address',
                                label: 'Change Email Address',
                              }),
                              _jsx(Tabs.Panel, {
                                id: 'invite_user',
                                label: 'Invite User',
                              }),
                            ],
                          }
                        )
                      ),
                    }
                  )
                ),
                _jsxs(
                  Panel,
                  Object.assign(
                    {
                      footer: _jsxs(_Fragment, {
                        children: [
                          _jsx('div', {
                            className: 'border-t border-scale-400',
                          }),
                          _jsxs(
                            'div',
                            Object.assign(
                              { className: 'py-3 px-6 flex gap-2 justify-end' },
                              {
                                children: [
                                  _jsx(
                                    Button,
                                    Object.assign(
                                      {
                                        loading: isSubmitting,
                                        type: 'secondary',
                                        htmlType: 'reset',
                                        onClick: () => handleReset(),
                                      },
                                      { children: 'Cancel' }
                                    )
                                  ),
                                  _jsx(
                                    Button,
                                    Object.assign(
                                      {
                                        loading: isSubmitting,
                                        type: 'primary',
                                        htmlType: 'submit',
                                        form: 'general_form',
                                      },
                                      { children: 'Save' }
                                    )
                                  ),
                                ],
                              }
                            )
                          ),
                        ],
                      }),
                    },
                    {
                      children: [
                        _jsx(
                          Section,
                          Object.assign(
                            {
                              header: _jsxs(
                                'div',
                                Object.assign(
                                  { className: 'w-full' },
                                  {
                                    children: [
                                      _jsx(
                                        'h3',
                                        Object.assign(
                                          {
                                            className:
                                              'text-base text-scale-1200 mb-4',
                                          },
                                          { children: 'Confirm Signup' }
                                        )
                                      ),
                                      _jsx(
                                        'p',
                                        Object.assign(
                                          {
                                            className: 'text-sm text-scale-900',
                                          },
                                          {
                                            children:
                                              'When a user signs up using an email address and password, you can send them a confirmation email to verify their registered email address. Learn more',
                                          }
                                        )
                                      ),
                                    ],
                                  }
                                )
                              ),
                            },
                            {
                              children: _jsxs(
                                'div',
                                Object.assign(
                                  { className: 'space-y-6 col-span-8' },
                                  {
                                    children: [
                                      _jsx(Input, {
                                        label: 'Sender address',
                                        type: 'url',
                                      }),
                                      _jsx(Input, {
                                        label: 'SMTP server host',
                                      }),
                                      _jsx(InputNumber, {
                                        label: 'SMTP server port',
                                      }),
                                      _jsx(Input, {
                                        label: 'SMTP account username',
                                      }),
                                      _jsx(Input.TextArea, {
                                        label: 'SMTP account password',
                                        type: 'password',
                                        rows: 8,
                                        defaultValue: `<h2>Confirm your signup</h2>

<p>Follow this link to confirm your user:</p>
<p><a href="{{ .ConfirmationURL }}">Confirm your mail</a></p>
                  `,
                                      }),
                                    ],
                                  }
                                )
                              ),
                            }
                          )
                        ),
                        values.enable_smtp &&
                          _jsx(
                            'div',
                            Object.assign(
                              { className: 'mx-8' },
                              { children: _jsx(DocsButton, {}) }
                            )
                          ),
                      ],
                    }
                  )
                ),
              ],
            }),
        }
      )
    ),
  })
}
export function WholeForm() {
  return _jsx(
    'div',
    Object.assign(
      { style: { width: '820px' }, className: 'mx-auto' },
      {
        children: _jsxs(
          Tabs,
          Object.assign(
            { defaultActiveId: 'one', type: 'underlined', size: 'medium' },
            {
              children: [
                _jsx(
                  Tabs.Panel,
                  Object.assign(
                    { id: 'one', label: 'Sign-in method' },
                    {
                      children: _jsxs(
                        'div',
                        Object.assign(
                          { className: 'space-y-12 py-12 animate-fade-in' },
                          {
                            children: [
                              _jsx('div', {
                                children: _jsx(
                                  'h1',
                                  Object.assign(
                                    { className: 'text-3xl text-scale-1200' },
                                    { children: 'Sign-in method' }
                                  )
                                ),
                              }),
                              _jsx('div', {
                                className: 'border-t border-scale-400',
                              }),
                              _jsxs('div', {
                                children: [
                                  _jsx(
                                    'h3',
                                    Object.assign(
                                      {
                                        className:
                                          'text-scale-1200 text-2xl mb-2',
                                      },
                                      { children: 'General settings' }
                                    )
                                  ),
                                  _jsx(
                                    'p',
                                    Object.assign(
                                      { className: 'text-sm text-scale-900' },
                                      {
                                        children:
                                          'Turn payment methods on and off in one click \u2013 no engineering time required.',
                                      }
                                    )
                                  ),
                                  _jsx(
                                    'p',
                                    Object.assign(
                                      { className: 'text-sm text-scale-900' },
                                      {
                                        children:
                                          'Use our guide to check which payment methods are compatible with your integration.',
                                      }
                                    )
                                  ),
                                  _jsx(CardForm, {}),
                                ],
                              }),
                              _jsxs('div', {
                                children: [
                                  _jsx(
                                    'h3',
                                    Object.assign(
                                      {
                                        className:
                                          'text-scale-1200 text-2xl mb-2',
                                      },
                                      { children: 'Providers' }
                                    )
                                  ),
                                  _jsx(
                                    'p',
                                    Object.assign(
                                      { className: 'text-sm text-scale-900' },
                                      {
                                        children:
                                          'Turn payment methods on and off in one click \u2013 no engineering time required.',
                                      }
                                    )
                                  ),
                                  _jsx(
                                    'p',
                                    Object.assign(
                                      { className: 'text-sm text-scale-900' },
                                      {
                                        children:
                                          'Use our guide to check which payment methods are compatible with your integration.',
                                      }
                                    )
                                  ),
                                  _jsx(AuthForm, {}),
                                ],
                              }),
                              _jsx(DomainsForm, {}),
                            ],
                          }
                        )
                      ),
                    }
                  )
                ),
                _jsx(
                  Tabs.Panel,
                  Object.assign(
                    { id: 'two', label: 'Emails' },
                    {
                      children: _jsxs(
                        'div',
                        Object.assign(
                          { className: 'space-y-12 py-12 animate-fade-in' },
                          {
                            children: [
                              _jsx('div', {
                                children: _jsx(
                                  'h1',
                                  Object.assign(
                                    { className: 'text-3xl text-scale-1200' },
                                    { children: 'Emails' }
                                  )
                                ),
                              }),
                              _jsxs(
                                'button',
                                Object.assign(
                                  {
                                    className:
                                      '\n                group\n                w-full\n                bg-scale-300  \n                dark:bg-scale-100  \n                border \n                border-scale-500 hover:border-scale-700\n                dark:border-scale-300 dark:hover:border-scale-500\n                px-6 py-4 \n                my-6 \n                flex gap-6 items-center\n                rounded-md shadow-sm\n                transition\n                text-left\n              ',
                                  },
                                  {
                                    children: [
                                      _jsx('div', {
                                        className:
                                          'transition duration-500 bg-brand-900 rounded p-1 w-10 h-10 group-hover:-rotate-3 group-hover:scale-110',
                                      }),
                                      _jsxs(
                                        'div',
                                        Object.assign(
                                          { className: 'grow' },
                                          {
                                            children: [
                                              _jsx(
                                                'h3',
                                                Object.assign(
                                                  {
                                                    className:
                                                      'text-scale-1200',
                                                  },
                                                  {
                                                    children:
                                                      'Use authentication as the backbone of your app',
                                                  }
                                                )
                                              ),
                                              _jsx(
                                                'p',
                                                Object.assign(
                                                  {
                                                    className:
                                                      'text-scale-900 text-xs',
                                                  },
                                                  {
                                                    children:
                                                      'Learn how to use Supabase Auth with Auth Policies to pick and choose what users see what.',
                                                  }
                                                )
                                              ),
                                              _jsxs(
                                                'p',
                                                Object.assign(
                                                  {
                                                    className:
                                                      'text-brand-900 mt-2 text-xs flex items-center gap-1',
                                                  },
                                                  {
                                                    children: [
                                                      'See Documenation',
                                                      _jsx(
                                                        'span',
                                                        Object.assign(
                                                          {
                                                            className:
                                                              'transition group-hover:translate-x-1',
                                                          },
                                                          {
                                                            children: _jsx(
                                                              IconArrowRight,
                                                              {
                                                                strokeWidth: 2,
                                                                width: 12,
                                                              }
                                                            ),
                                                          }
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
                                      _jsx(
                                        'div',
                                        Object.assign(
                                          { className: 'text-scale-900' },
                                          { children: _jsx(IconX, {}) }
                                        )
                                      ),
                                    ],
                                  }
                                )
                              ),
                              _jsx('div', {
                                className: 'border-t border-scale-400',
                              }),
                              _jsxs('div', {
                                children: [
                                  _jsx(
                                    'h3',
                                    Object.assign(
                                      {
                                        className:
                                          'text-scale-1200 text-2xl mb-2',
                                      },
                                      { children: 'Custom SMTP' }
                                    )
                                  ),
                                  _jsx(
                                    'p',
                                    Object.assign(
                                      { className: 'text-sm text-scale-900' },
                                      {
                                        children:
                                          'You can use your own SMTP server instead of the built-in email service.',
                                      }
                                    )
                                  ),
                                  _jsx(SmtpForm, {}),
                                ],
                              }),
                              _jsxs('div', {
                                children: [
                                  _jsx(
                                    'h3',
                                    Object.assign(
                                      {
                                        className:
                                          'text-scale-1200 text-2xl mb-2',
                                      },
                                      { children: 'Templates' }
                                    )
                                  ),
                                  _jsx(
                                    'p',
                                    Object.assign(
                                      { className: 'text-sm text-scale-900' },
                                      {
                                        children:
                                          'You can use your own SMTP server instead of the built-in email service.',
                                      }
                                    )
                                  ),
                                  _jsx(TemplatesForm, {}),
                                ],
                              }),
                            ],
                          }
                        )
                      ),
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
export default WholeForm
