'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [7969],
  {
    './src/components/Form/Form.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AuthForm: function () {
            return examples_AuthForm
          },
          CardForm: function () {
            return Form_stories_CardForm
          },
          InputLevelValidation: function () {
            return InputLevelValidation
          },
          InputLevelValidationYip: function () {
            return InputLevelValidationYip
          },
          LargerExample: function () {
            return LargerExample
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          default: function () {
            return Form_stories
          },
        })
      var Form = __webpack_require__('./src/components/Form/Form.tsx'),
        Input = __webpack_require__('./src/components/Input/Input.tsx'),
        Button = __webpack_require__('./src/components/Button.tsx'),
        Select = __webpack_require__('./src/components/Select/Select.tsx'),
        InputNumber = __webpack_require__(
          './src/components/InputNumber/InputNumber.tsx'
        ),
        Checkbox = __webpack_require__('./src/components/Checkbox.tsx'),
        Toggle = __webpack_require__('./src/components/Toggle/Toggle.tsx'),
        Radio = __webpack_require__('./src/components/Radio/Radio.tsx'),
        Listbox2 = __webpack_require__('./src/components/Listbox/Listbox2.tsx'),
        es = __webpack_require__('../../node_modules/yup/es/index.js'),
        react = __webpack_require__('../../node_modules/react/index.js'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        arrow_right = __webpack_require__(
          '../../node_modules/react-feather/dist/icons/arrow-right.js'
        ),
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx')
      function IconArrowRight(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, {
          icon: arrow_right.Z,
          ...props,
        })
      }
      IconArrowRight.displayName = 'IconArrowRight'
      var IconArrowRight_IconArrowRight = IconArrowRight
      try {
        ;(IconArrowRight.displayName = 'IconArrowRight'),
          (IconArrowRight.__docgenInfo = {
            description: '',
            displayName: 'IconArrowRight',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconArrowRight/IconArrowRight.tsx#IconArrowRight'
            ] = {
              docgenInfo: IconArrowRight.__docgenInfo,
              name: 'IconArrowRight',
              path: 'src/components/Icon/icons/IconArrowRight/IconArrowRight.tsx#IconArrowRight',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var IconX = __webpack_require__(
          './src/components/Icon/icons/IconX/IconX.tsx'
        ),
        IconChevronUp = __webpack_require__(
          './src/components/Icon/icons/IconChevronUp/IconChevronUp.tsx'
        ),
        IconCheck = __webpack_require__(
          './src/components/Icon/icons/IconCheck/IconCheck.tsx'
        ),
        globe = __webpack_require__(
          '../../node_modules/react-feather/dist/icons/globe.js'
        )
      function IconGlobe(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: globe.Z, ...props })
      }
      IconGlobe.displayName = 'IconGlobe'
      var IconGlobe_IconGlobe = IconGlobe
      try {
        ;(IconGlobe.displayName = 'IconGlobe'),
          (IconGlobe.__docgenInfo = {
            description: '',
            displayName: 'IconGlobe',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconGlobe/IconGlobe.tsx#IconGlobe'
            ] = {
              docgenInfo: IconGlobe.__docgenInfo,
              name: 'IconGlobe',
              path: 'src/components/Icon/icons/IconGlobe/IconGlobe.tsx#IconGlobe',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var IconTrash = __webpack_require__(
          './src/components/Icon/icons/IconTrash/IconTrash.tsx'
        ),
        Tabs = __webpack_require__('./src/components/Tabs/Tabs.tsx'),
        Collapsible = __webpack_require__(
          './src/components/Collapsible/Collapsible.tsx'
        ),
        AuthFormSchema_namespaceObject = JSON.parse(
          '[{"name":"Email","icon":"email-icon","form":[{"type":"text","name":"email-app-id","label":"email App Id","description":""},{"type":"text","name":"email-id-key","label":"email client ID","description":""},{"type":"text","name":"email-id-key","label":"email client ID","description":""},{"type":"text","name":"email-id-key","label":"email client ID","description":""}]},{"name":"Phone","icon":"phone-icon","form":[{"type":"select","name":"phone-app-provider","label":"Phone service provider","description":"You can use a provider etc etc"},{"type":"text","name":"phone-id-key","label":"phone client ID","description":""},{"type":"text","name":"phone-id-key","label":"phone client ID","description":""},{"type":"text","name":"phone-id-key","label":"phone client ID","description":""}]},{"name":"Google","icon":"google-icon","form":[{"type":"text","name":"google-app-id","label":"Google App Id","description":""},{"type":"text","name":"google-id-key","label":"Google client ID","description":""}]},{"name":"Facebook","icon":"facebook-icon","form":[{"type":"text","name":"facebook-app-id","label":"Facebook App Id","description":""},{"type":"text","name":"facebook-id-key","label":"Facebook client ID","description":""}]},{"name":"Twitter","icon":"twitter-icon","form":[{"type":"text","name":"twitter-app-id","label":"Twitter App Id","description":""},{"type":"text","name":"twitter-id-key","label":"Twitter client ID","description":""}]},{"name":"Apple","icon":"apple-icon","form":[{"type":"text","name":"apple-app-id","label":"Apple App Id","description":""},{"type":"text","name":"apple-id-key","label":"Apple client ID","description":""}]},{"name":"Microsoft","icon":"microsoft-icon","form":[{"type":"text","name":"microsoft-app-id","label":"Microsoft App Id","description":""},{"type":"text","name":"microsoft-id-key","label":"Microsoft client ID","description":""}]},{"name":"Gitlab","icon":"gitlab-icon","form":[{"type":"text","name":"gitlab-app-id","label":"Gitlab App Id","description":""},{"type":"text","name":"gitlab-id-key","label":"Gitlab client ID","description":""}]},{"name":"Bitbucket","icon":"bitbucket-icon","form":[{"type":"text","name":"bitbucket-app-id","label":"Bitbucket App Id","description":""},{"type":"text","name":"bitbucket-id-key","label":"Bitbucket client ID","description":""}]},{"name":"Discord","icon":"discord-icon","form":[{"type":"text","name":"discord-app-id","label":"Discord App Id","description":""},{"type":"text","name":"discord-id-key","label":"Discord client ID","description":""}]},{"name":"Github","icon":"github-icon-dark","form":[{"type":"text","name":"github-app-id","label":"Github App Id","description":""},{"type":"text","name":"github-id-key","label":"Github client ID","description":""}]},{"name":"Slack","icon":"slack-icon","form":[{"type":"text","name":"slack-app-id","label":"Slack App Id","description":""},{"type":"text","name":"slack-id-key","label":"Slack client ID","description":""}]},{"name":"Spotify","icon":"spotify-icon","form":[{"type":"text","name":"spotify-app-id","label":"Spotify App Id","description":""},{"type":"text","name":"spotify-id-key","label":"Spotify client ID","description":""}]},{"name":"Twitch","icon":"twitch-icon","form":[{"type":"text","name":"twitch-app-id","label":"Twitch App Id","description":""},{"type":"text","name":"twitch-id-key","label":"Twitch client ID","description":""}]}]'
        ),
        Modal = __webpack_require__('./src/components/Modal/Modal.tsx')
      const DocsButton = () =>
        (0, jsx_runtime.jsxs)('button', {
          className:
            ' group w-full bg-scale-300   dark:bg-scale-100   border  border-scale-500 hover:border-scale-700 dark:border-scale-300 dark:hover:border-scale-500 px-6 py-4  my-6  flex gap-6 items-center rounded-md shadow-sm transition text-left ',
          children: [
            (0, jsx_runtime.jsx)('div', {
              className:
                'transition duration-500 bg-brand-900 rounded p-1 w-10 h-10 group-hover:-rotate-3 group-hover:scale-110',
            }),
            (0, jsx_runtime.jsxs)('div', {
              className: 'grow',
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-scale-1200',
                  children: 'Use authentication as the backbone of your app',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900 text-xs',
                  children:
                    'Learn how to use Supabase Auth with Auth Policies to pick and choose what users see what.',
                }),
                (0, jsx_runtime.jsxs)('p', {
                  className:
                    'text-brand-900 mt-2 text-xs flex items-center gap-1',
                  children: [
                    'See Documenation',
                    (0, jsx_runtime.jsx)('span', {
                      className: 'transition group-hover:translate-x-1',
                      children: (0, jsx_runtime.jsx)(
                        IconArrowRight_IconArrowRight,
                        { strokeWidth: 2, width: 12 }
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, jsx_runtime.jsx)('div', {
              className: 'text-scale-900',
              children: (0, jsx_runtime.jsx)(IconX.Z, {}),
            }),
          ],
        })
      DocsButton.displayName = 'DocsButton'
      const CardForm = () => {
        const Panel = (_ref) => {
            let { children: children, header: header, footer: footer } = _ref
            return (0, jsx_runtime.jsxs)('div', {
              className:
                ' bg-scale-100  dark:bg-scale-300  border border-scale-400 rounded-md my-8 shadow overflow-hidden',
              children: [
                header &&
                  (0, jsx_runtime.jsx)('div', {
                    className:
                      'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                    children: header,
                  }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'space-y-6 py-6',
                  children: children,
                }),
                footer,
              ],
            })
          },
          Section = (_ref2) => {
            let { children: children, header: header } = _ref2
            return (0, jsx_runtime.jsxs)('div', {
              className: 'grid grid-cols-12 px-8 py-2',
              children: [header, children],
            })
          }
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: (0, jsx_runtime.jsx)(Form.Z, {
            id: 'general_form',
            initialValues: { enable_signups: !0, jwt_expiry: 3600 },
            onSubmit: (values, _ref3) => {
              let { setSubmitting: setSubmitting } = _ref3
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2)), setSubmitting(!1)
              }, 400)
            },
            validate: (values) => {
              const errors = {}
              return (
                values.jwt_expiry || (errors.jwt_expiry = 'This is required'),
                values.jwt_expiry > 604800 &&
                  (errors.jwt_expiry =
                    'The maxiumum allowed is 604,800 seconds. Use a smaller number of seconds.'),
                errors
              )
            },
            children: (_ref4) => {
              let { isSubmitting: isSubmitting, handleReset: handleReset } =
                _ref4
              return (0, jsx_runtime.jsxs)(Panel, {
                footer: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      className: 'border-t border-scale-400',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'py-3 px-6 flex gap-2 justify-end',
                      children: [
                        (0, jsx_runtime.jsx)(Button.z, {
                          type: 'default',
                          htmlType: 'reset',
                          onClick: () => handleReset(),
                          children: 'Cancel',
                        }),
                        (0, jsx_runtime.jsx)(Button.z, {
                          loading: isSubmitting,
                          type: 'primary',
                          htmlType: 'submit',
                          form: 'general_form',
                          children: 'Save',
                        }),
                      ],
                    }),
                  ],
                }),
                children: [
                  (0, jsx_runtime.jsx)(Section, {
                    header: (0, jsx_runtime.jsx)('label', {
                      className: 'text-sm text-scale-1200 col-span-4',
                      children: 'User Signups',
                    }),
                    children: (0, jsx_runtime.jsx)(Toggle.Z, {
                      id: 'enable_signups',
                      className: 'col-span-8',
                      label: 'Allow new users to sign up',
                      layout: 'flex',
                      descriptionText:
                        'If this is disabled, new users will not be able to sign up to your application.',
                    }),
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'border-t border-scale-400',
                  }),
                  (0, jsx_runtime.jsx)(Section, {
                    header: (0, jsx_runtime.jsx)('label', {
                      className: 'text-sm text-scale-1200 col-span-4',
                      children: 'User Sessions',
                    }),
                    children: (0, jsx_runtime.jsx)(InputNumber.Z, {
                      className: 'col-span-8',
                      id: 'jwt_expiry',
                      label: 'JWT expiry limit',
                      descriptionText:
                        'How long tokens are valid for, in seconds. Defaults to 3600 (1 hour), maximum 604,800 seconds (one week).',
                    }),
                  }),
                ],
              })
            },
          }),
        })
      }
      let initialState = {}
      function providersReducer(state, action) {
        if ('update' === action.type) return Object.assign(state, action.values)
        throw new Error()
      }
      AuthFormSchema_namespaceObject.map((provider) => {
        ;(initialState[`${provider.name.toLowerCase()}-active`] =
          'Email' == provider.name),
          (initialState[`${provider.name.toLowerCase()}-app-id`] = ''),
          (initialState[`${provider.name.toLowerCase()}-id-key`] = '')
      }),
        console.log('form initialState', initialState)
      const AuthForm = () => {
        const [providersFormState, dispatchProvidersForm] = (0,
        react.useReducer)(providersReducer, initialState)
        console.log('providersFormState from useState', providersFormState)
        const ProviderForm = (_ref8) => {
          let { provider: provider } = _ref8
          const [open, setOpen] = (0, react.useState)(!1),
            [active, setActive] = (0, react.useState)(
              providersFormState[`${provider.name.toLowerCase()}-active`]
            )
          return (
            console.log('panel active state', active),
            (0, jsx_runtime.jsxs)(Collapsible.ZP, {
              open: open,
              onOpenChange: setOpen,
              className:
                ' bg-scale-100 dark:bg-scale-300  hover:bg-scale-200 dark:hover:bg-scale-500 data-open:bg-scale-200 dark:data-open:bg-scale-500  border  border-scale-300 dark:border-scale-500  hover:border-scale-500 dark:hover:border-scale-700 mx-auto shadow overflow-hidden first:rounded-tr first:rounded-tl last:rounded-br last:rounded-bl   data-open:border-scale-700 data-open:pb-px transition -space-y-px col-span-12 hover:z-50 ',
              children: [
                (0, jsx_runtime.jsx)(Collapsible.ZP.Trigger, {
                  asChild: !0,
                  children: (0, jsx_runtime.jsxs)('button', {
                    type: 'button',
                    className:
                      ' group text-scale-1200  flex  justify-between items-center w-full rounded p-3 px-6',
                    children: [
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'flex gap-3 items-center',
                        children: [
                          (0, jsx_runtime.jsx)(IconChevronUp.Z, {
                            className:
                              'text-scale-800 transition data-open-parent:rotate-0 data-closed-parent:rotate-180',
                            strokeWidth: 2,
                          }),
                          (0, jsx_runtime.jsx)('img', {
                            className: 'w-6 fill-red-400',
                            src: `/icons/${provider.icon}.svg`,
                            width: 21,
                            alt: `${provider.name} auth icon`,
                          }),
                          (0, jsx_runtime.jsx)('span', {
                            className: 'text-base',
                            children: provider.name,
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)('div', {
                        className: 'flex gap-3 items-center',
                        children: active
                          ? (0, jsx_runtime.jsxs)('div', {
                              className:
                                'bg-brand-200 border border-brand-700 py-1 px-1 text-brand-900 text-xs rounded-full flex gap-1 items-center',
                              children: [
                                (0, jsx_runtime.jsx)('span', {
                                  className:
                                    'text-xs bg-brand-900 rounded-full p-0.5 text-brand-200',
                                  children: (0, jsx_runtime.jsx)(IconCheck.Z, {
                                    strokeWidth: 2,
                                    size: 12,
                                  }),
                                }),
                                (0, jsx_runtime.jsx)('span', {
                                  className: 'px-1',
                                  children: 'Enabled',
                                }),
                              ],
                            })
                          : (0, jsx_runtime.jsx)('div', {
                              className:
                                'bg-scale-100 dark:bg-scale-300 border border-scale-500 dark:border-scale-700 py-1 px-3 text-scale-900 text-xs rounded-md',
                              children: 'Disabled',
                            }),
                      }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsx)(Form.Z, {
                  name: `provider-${provider.name}-form`,
                  initialValues: {
                    [`${provider.name.toLowerCase()}-active`]:
                      providersFormState[
                        `${provider.name.toLowerCase()}-active`
                      ] || !0,
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
                    const input_active = `${provider.name.toLowerCase()}-active`,
                      input_app_id = `${provider.name.toLowerCase()}-app-id`,
                      input_id_key = `${provider.name.toLowerCase()}-id-key`
                    return (
                      values[input_app_id] &&
                        values[input_app_id].length < 10 &&
                        (errors[input_app_id] =
                          'App ID must be at least 10 characters long'),
                      values[input_app_id] &&
                        values[input_id_key].length < 10 &&
                        (errors[input_id_key] =
                          'Secret must be at least 10 characters long'),
                      values[input_active] &&
                        (values[input_app_id] ||
                          (errors[input_app_id] =
                            'You need to input an application ID if you want to enable this provider.'),
                        values[input_id_key] ||
                          (errors[input_id_key] =
                            'You need to input an application secret if you want to enable this provider.')),
                      errors
                    )
                  },
                  onSubmit: (values, _ref9) => {
                    let { setSubmitting: setSubmitting } = _ref9
                    setTimeout(() => {
                      dispatchProvidersForm({ type: 'update', values: values }),
                        setActive(
                          values[`${provider.name.toLowerCase()}-active`]
                        ),
                        setSubmitting(!1),
                        setOpen(!1)
                    }, 400)
                  },
                  children: (_ref10) => {
                    let {
                      isSubmitting: isSubmitting,
                      handleReset: handleReset,
                    } = _ref10
                    return (0, jsx_runtime.jsx)(Collapsible.ZP.Content, {
                      children: (0, jsx_runtime.jsx)('div', {
                        className:
                          ' bg-scale-100 dark:bg-scale-300 group text-scale-1200 border-t border-scale-500 py-6 px-6 ',
                        children: (0, jsx_runtime.jsxs)('div', {
                          className: 'space-y-6 max-w-md mx-auto',
                          children: [
                            (0, jsx_runtime.jsx)(Toggle.Z, {
                              id: `${provider.name.toLowerCase()}-active`,
                              name: `${provider.name.toLowerCase()}-active`,
                              label: `Enable ${provider.name} Provider`,
                              layout: 'flex',
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'border-t border-scale-400',
                            }),
                            provider.form.map((x) =>
                              (0, jsx_runtime.jsx)(
                                Input.Z,
                                {
                                  id: x.name,
                                  name: x.name,
                                  label: x.label,
                                  descriptionText: x.description,
                                  layout: 'vertical',
                                },
                                x.name
                              )
                            ),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'border-t border-scale-400',
                            }),
                            (0, jsx_runtime.jsxs)('div', {
                              className: 'flex items-center gap-3 justify-end',
                              children: [
                                (0, jsx_runtime.jsx)(Button.z, {
                                  htmlType: 'reset',
                                  onClick: () => {
                                    handleReset(), setOpen(!1)
                                  },
                                  type: 'secondary',
                                  children: 'Cancel',
                                }),
                                (0, jsx_runtime.jsx)(Button.z, {
                                  htmlType: 'submit',
                                  loading: isSubmitting,
                                  children: 'Save',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    })
                  },
                }),
              ],
            })
          )
        }
        return (0, jsx_runtime.jsx)('div', {
          className: 'mx-auto my-8',
          children: (0, jsx_runtime.jsx)('div', {
            className: '-space-y-px',
            children: AuthFormSchema_namespaceObject.map((provider) =>
              (0, jsx_runtime.jsx)(ProviderForm, { provider: provider })
            ),
          }),
        })
      }
      AuthForm.displayName = 'AuthForm'
      let domainInitialState = [
        'https://summersmuir.com',
        'http://localhost:3000',
      ]
      function domainsReducer(state, action) {
        let _state = []
        switch (action.type) {
          case 'update':
            return (
              _state.push(...state),
              _state.push(action.values.domain),
              console.log('new state', _state),
              _state
            )
          case 'remove':
            return (
              _state.push(...state),
              (_state = _state.filter((e) => e !== action.values)),
              console.log('new state', _state),
              _state
            )
          default:
            throw new Error()
        }
      }
      console.log('form domainInitialState', domainInitialState)
      const DomainsForm = () => {
        const [domainsFormState, dispatchDomainsForm] = (0, react.useReducer)(
            domainsReducer,
            domainInitialState
          ),
          [deleteOpen, setDeleteOpen] = (0, react.useState)(!1),
          [deleteLoading, setDeleteLoading] = (0, react.useState)(!1),
          [selectedDomain, setSelected] = (0, react.useState)('')
        console.log('domainsFormState from useState', domainsFormState)
        const DomainsForm = () => {
          const [open, setOpen] = (0, react.useState)(!1)
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center justify-between my-6',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-scale-1200 text-2xl mb-2',
                      children: 'Authorised domains',
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-scale-900',
                      children:
                        'Turn payment methods on and off in one click – no engineering time required.',
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-scale-900',
                      children:
                        'Use our guide to check which payment methods are compatible with your integration.',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  onClick: () => setOpen(!0),
                  children: 'Add domain',
                }),
                (0, jsx_runtime.jsx)(Modal.Z, {
                  size: 'small',
                  visible: open,
                  onCancel: () => setOpen(!open),
                  header: (0, jsx_runtime.jsx)('div', {
                    className: 'flex items-center gap-2 text-scale-1200',
                    children: (0, jsx_runtime.jsx)('div', {
                      className: 'flex items-baseline gap-2',
                      children: (0, jsx_runtime.jsx)('h3', {
                        className: 'text-sm',
                        children: 'Add a new domain',
                      }),
                    }),
                  }),
                  contentStyle: { padding: 0 },
                  hideFooter: !0,
                  children: (0, jsx_runtime.jsx)(Form.Z, {
                    id: 'new-domain-form',
                    initialValues: { domain: '' },
                    validateOnBlur: !0,
                    onSubmit: (values, _ref11) => {
                      let { setSubmitting: setSubmitting } = _ref11
                      console.log('submitting domain'),
                        setTimeout(() => {
                          setSubmitting(!1),
                            dispatchDomainsForm({
                              type: 'update',
                              values: values,
                            }),
                            setOpen(!1)
                        }, 400)
                    },
                    validate: (values) => {
                      const errors = {}
                      return (
                        values.domain
                          ? /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i.test(
                              values.domain
                            ) ||
                            (errors.domain =
                              'Not a valid URL. Please use http:// or https://')
                          : (errors.domain = 'A domain is required'),
                        errors
                      )
                    },
                    children: (_ref12) => {
                      let {
                        isSubmitting: isSubmitting,
                        errors: errors,
                        touched: touched,
                      } = _ref12
                      return (0, jsx_runtime.jsxs)('div', {
                        className: 'space-y-4 pt-4 mb-4',
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'px-5',
                            children: (0, jsx_runtime.jsx)('p', {
                              className: 'text-sm text-scale-1100',
                              children:
                                'This will add a domain to a list of allowed domains that can interact with your Authenticaton services for this project.',
                            }),
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'border-t border-overlay-border',
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'px-5',
                            children: (0, jsx_runtime.jsx)(Input.Z, {
                              id: 'domain',
                              name: 'domain',
                              label: 'Domain',
                              placeholder: 'https://mydomain.com',
                            }),
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'border-t border-overlay-border',
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'px-5',
                            children: (0, jsx_runtime.jsx)(Button.z, {
                              form: 'new-domain-form',
                              htmlType: 'submit',
                              block: !0,
                              size: 'medium',
                              loading: isSubmitting,
                              children: 'Add domain',
                            }),
                          }),
                        ],
                      })
                    },
                  }),
                }),
              ],
            }),
          })
        }
        return (
          console.log('RENDER DOMAINS'),
          (0, jsx_runtime.jsxs)('div', {
            className: 'mx-auto my-8',
            children: [
              (0, jsx_runtime.jsx)(DomainsForm, {}),
              (0, jsx_runtime.jsx)('div', {
                className: '-space-y-px',
                children: domainsFormState.map((domain) =>
                  (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: (0, jsx_runtime.jsxs)('div', {
                      className:
                        'bg-scale-300 px-6 py-4 border border-scale-500  first:rounded-tr first:rounded-tl last:rounded-br last:rounded-bl  text-sm text-scale-1200 flex gap-2 items-center justify-between ',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'flex gap-2 items-center font-mono',
                          children: [
                            (0, jsx_runtime.jsx)('span', {
                              className: 'text-scale-900',
                              children: (0, jsx_runtime.jsx)(
                                IconGlobe_IconGlobe,
                                { strokeWidth: 2, size: 14 }
                              ),
                            }),
                            domain,
                          ],
                        }),
                        (0, jsx_runtime.jsx)(Button.z, {
                          type: 'default',
                          icon: (0, jsx_runtime.jsx)(IconTrash.Z, {}),
                          onClick: () => {
                            setSelected(domain), setDeleteOpen(!0)
                          },
                          children: 'Remove',
                        }),
                      ],
                    }),
                  })
                ),
              }),
              (0, jsx_runtime.jsx)(Modal.Z, {
                size: 'small',
                visible: deleteOpen,
                onCancel: () => setDeleteOpen(!open),
                header: (0, jsx_runtime.jsx)('div', {
                  className: 'flex items-center gap-2 text-scale-1200',
                  children: (0, jsx_runtime.jsx)('div', {
                    className: 'flex items-baseline gap-2',
                    children: (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm',
                      children: 'Remove domain',
                    }),
                  }),
                }),
                contentStyle: { padding: 0 },
                hideFooter: !0,
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-4 pt-4 mb-4',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'px-5',
                      children: [
                        (0, jsx_runtime.jsxs)('p', {
                          className: 'text-sm text-scale-1100 mb-2',
                          children: [
                            'Are you sure you want to remove',
                            ' ',
                            (0, jsx_runtime.jsx)('span', {
                              className: 'text-scale-1200',
                              children: selectedDomain,
                            }),
                            '?',
                          ],
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-sm text-scale-900',
                          children:
                            'This domain will no longer work with your Authentication configuration.',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'border-t border-overlay-border',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'px-5 flex gap-3',
                      children: [
                        (0, jsx_runtime.jsx)(Button.z, {
                          type: 'secondary',
                          block: !0,
                          size: 'medium',
                          onClick: () => {},
                          children: 'Cancel',
                        }),
                        (0, jsx_runtime.jsx)(Button.z, {
                          block: !0,
                          size: 'medium',
                          type: 'warning',
                          loading: deleteLoading,
                          onClick: () => {
                            setDeleteLoading(!0),
                              setTimeout(() => {
                                dispatchDomainsForm({
                                  type: 'remove',
                                  values: selectedDomain,
                                }),
                                  setDeleteOpen(!deleteOpen),
                                  setDeleteLoading(!1)
                              }, 800)
                          },
                          children: deleteLoading
                            ? 'Removing...'
                            : 'Remove domain',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        )
      }
      DomainsForm.displayName = 'DomainsForm'
      const SmtpForm = () => {
          const [active, setActive] = (0, react.useState)(!0),
            Panel = (_ref13) => {
              let {
                children: children,
                header: header,
                footer: footer,
              } = _ref13
              return (0, jsx_runtime.jsxs)('div', {
                className:
                  ' bg-scale-100  dark:bg-scale-300  border border-scale-400 rounded-md my-8 shadow overflow-hidden',
                children: [
                  header &&
                    (0, jsx_runtime.jsx)('div', {
                      className:
                        'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                      children: header,
                    }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'space-y-6 py-6',
                    children: children,
                  }),
                  footer,
                ],
              })
            },
            Section = (_ref14) => {
              let { children: children, header: header } = _ref14
              return (0, jsx_runtime.jsxs)('div', {
                className: 'grid grid-cols-12 px-8 py-2 gap-8',
                children: [
                  header &&
                    (0, jsx_runtime.jsx)('div', {
                      className: 'col-span-4',
                      children: header,
                    }),
                  children,
                ],
              })
            }
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Form.Z, {
              id: 'general_form',
              initialValues: { enable_smtp: !1, jwt_expiry: 3600 },
              onSubmit: (values, _ref15) => {
                let { setSubmitting: setSubmitting } = _ref15
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2)), setSubmitting(!1)
                }, 400)
              },
              validate: (values) => {
                const errors = {}
                return (
                  values.jwt_expiry || (errors.jwt_expiry = 'This is required'),
                  values.jwt_expiry > 604800 &&
                    (errors.jwt_expiry =
                      'The maxiumum allowed is 604,800 seconds. Use a smaller number of seconds.'),
                  errors
                )
              },
              children: (_ref16) => {
                let {
                  isSubmitting: isSubmitting,
                  handleReset: handleReset,
                  values: values,
                } = _ref16
                return (0, jsx_runtime.jsxs)(Panel, {
                  footer: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)('div', {
                        className: 'border-t border-scale-400',
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'py-3 px-6 flex gap-2 justify-end',
                        children: [
                          (0, jsx_runtime.jsx)(Button.z, {
                            loading: isSubmitting,
                            type: 'secondary',
                            htmlType: 'reset',
                            onClick: () => handleReset(),
                            children: 'Cancel',
                          }),
                          (0, jsx_runtime.jsx)(Button.z, {
                            loading: isSubmitting,
                            type: 'primary',
                            htmlType: 'submit',
                            form: 'general_form',
                            children: 'Save',
                          }),
                        ],
                      }),
                    ],
                  }),
                  children: [
                    (0, jsx_runtime.jsx)(Toggle.Z, {
                      name: 'enable_smtp',
                      className: 'col-span-8 mx-8',
                      label: 'Enable Custom SMTP',
                      layout: 'flex',
                      descriptionText:
                        'If this is disabled, new users will not be able to sign up to your application.',
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'border-t border-scale-400',
                    }),
                    (0, jsx_runtime.jsx)(Section, {
                      header: (0, jsx_runtime.jsxs)('div', {
                        className: 'w-full',
                        children: [
                          (0, jsx_runtime.jsx)('label', {
                            className: 'text-sm text-scale-1100',
                            children: 'SMTP details',
                          }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'text-sm text-scale-900',
                            children:
                              'These settings can be found in your SMTP provider config',
                          }),
                        ],
                      }),
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'space-y-6 col-span-8',
                        children: [
                          (0, jsx_runtime.jsx)(Input.Z, {
                            label: 'Sender address',
                            type: 'url',
                            disabled: !values.enable_smtp,
                          }),
                          (0, jsx_runtime.jsx)(Input.Z, {
                            label: 'SMTP server host',
                            disabled: !values.enable_smtp,
                          }),
                          (0, jsx_runtime.jsx)(InputNumber.Z, {
                            label: 'SMTP server port',
                            disabled: !values.enable_smtp,
                          }),
                          (0, jsx_runtime.jsx)(Input.Z, {
                            label: 'SMTP account username',
                            disabled: !values.enable_smtp,
                          }),
                          (0, jsx_runtime.jsx)(Input.Z, {
                            label: 'SMTP account password',
                            type: 'password',
                            disabled: !values.enable_smtp,
                          }),
                        ],
                      }),
                    }),
                    values.enable_smtp &&
                      (0, jsx_runtime.jsx)('div', {
                        className: 'mx-8',
                        children: (0, jsx_runtime.jsx)(DocsButton, {}),
                      }),
                  ],
                })
              },
            }),
          })
        },
        TemplatesForm = () => {
          const [active, setActive] = (0, react.useState)(!0),
            Panel = (_ref17) => {
              let {
                children: children,
                header: header,
                footer: footer,
              } = _ref17
              return (0, jsx_runtime.jsxs)('div', {
                className:
                  ' bg-scale-100  dark:bg-scale-300  border border-scale-400 rounded-md mb-8 shadow overflow-hidden',
                children: [
                  header &&
                    (0, jsx_runtime.jsx)('div', {
                      className:
                        'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                      children: header,
                    }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'space-y-6 py-6',
                    children: children,
                  }),
                  footer,
                ],
              })
            },
            Section = (_ref18) => {
              let { children: children, header: header } = _ref18
              return (0, jsx_runtime.jsxs)('div', {
                className: 'grid grid-cols-12 px-8 py-2 gap-8',
                children: [
                  header &&
                    (0, jsx_runtime.jsx)('div', {
                      className: 'col-span-4',
                      children: header,
                    }),
                  children,
                ],
              })
            }
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Form.Z, {
              id: 'general_form',
              initialValues: { enable_smtp: !1, jwt_expiry: 3600 },
              onSubmit: (values, _ref19) => {
                let { setSubmitting: setSubmitting } = _ref19
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2)), setSubmitting(!1)
                }, 400)
              },
              validate: (values) => {
                const errors = {}
                return (
                  values.jwt_expiry || (errors.jwt_expiry = 'This is required'),
                  values.jwt_expiry > 604800 &&
                    (errors.jwt_expiry =
                      'The maxiumum allowed is 604,800 seconds. Use a smaller number of seconds.'),
                  errors
                )
              },
              children: (_ref20) => {
                let {
                  isSubmitting: isSubmitting,
                  handleReset: handleReset,
                  values: values,
                } = _ref20
                return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      className: 'my-4',
                      children: (0, jsx_runtime.jsxs)(Tabs.Z, {
                        defaultActiveId: 'confirm_signup',
                        type: 'underlined',
                        size: 'medium',
                        children: [
                          (0, jsx_runtime.jsx)(Tabs.Z.Panel, {
                            id: 'confirm_signup',
                            label: 'Confirm Signup',
                          }),
                          (0, jsx_runtime.jsx)(Tabs.Z.Panel, {
                            id: 'reset_password',
                            label: 'Reset Password',
                          }),
                          (0, jsx_runtime.jsx)(Tabs.Z.Panel, {
                            id: 'magic_link',
                            label: 'Magic Link',
                          }),
                          (0, jsx_runtime.jsx)(Tabs.Z.Panel, {
                            id: 'change_email_address',
                            label: 'Change Email Address',
                          }),
                          (0, jsx_runtime.jsx)(Tabs.Z.Panel, {
                            id: 'invite_user',
                            label: 'Invite User',
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(Panel, {
                      footer: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'border-t border-scale-400',
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className: 'py-3 px-6 flex gap-2 justify-end',
                            children: [
                              (0, jsx_runtime.jsx)(Button.z, {
                                loading: isSubmitting,
                                type: 'secondary',
                                htmlType: 'reset',
                                onClick: () => handleReset(),
                                children: 'Cancel',
                              }),
                              (0, jsx_runtime.jsx)(Button.z, {
                                loading: isSubmitting,
                                type: 'primary',
                                htmlType: 'submit',
                                form: 'general_form',
                                children: 'Save',
                              }),
                            ],
                          }),
                        ],
                      }),
                      children: [
                        (0, jsx_runtime.jsx)(Section, {
                          header: (0, jsx_runtime.jsxs)('div', {
                            className: 'w-full',
                            children: [
                              (0, jsx_runtime.jsx)('h3', {
                                className: 'text-base text-scale-1200 mb-4',
                                children: 'Confirm Signup',
                              }),
                              (0, jsx_runtime.jsx)('p', {
                                className: 'text-sm text-scale-900',
                                children:
                                  'When a user signs up using an email address and password, you can send them a confirmation email to verify their registered email address. Learn more',
                              }),
                            ],
                          }),
                          children: (0, jsx_runtime.jsxs)('div', {
                            className: 'space-y-6 col-span-8',
                            children: [
                              (0, jsx_runtime.jsx)(Input.Z, {
                                label: 'Sender address',
                                type: 'url',
                              }),
                              (0, jsx_runtime.jsx)(Input.Z, {
                                label: 'SMTP server host',
                              }),
                              (0, jsx_runtime.jsx)(InputNumber.Z, {
                                label: 'SMTP server port',
                              }),
                              (0, jsx_runtime.jsx)(Input.Z, {
                                label: 'SMTP account username',
                              }),
                              (0, jsx_runtime.jsx)(Input.Z.TextArea, {
                                label: 'SMTP account password',
                                type: 'password',
                                rows: 8,
                                defaultValue:
                                  '<h2>Confirm your signup</h2>\n\n<p>Follow this link to confirm your user:</p>\n<p><a href="{{ .ConfirmationURL }}">Confirm your mail</a></p>\n                  ',
                              }),
                            ],
                          }),
                        }),
                        values.enable_smtp &&
                          (0, jsx_runtime.jsx)('div', {
                            className: 'mx-8',
                            children: (0, jsx_runtime.jsx)(DocsButton, {}),
                          }),
                      ],
                    }),
                  ],
                })
              },
            }),
          })
        }
      function WholeForm() {
        return (0, jsx_runtime.jsx)('div', {
          style: { width: '820px' },
          className: 'mx-auto',
          children: (0, jsx_runtime.jsxs)(Tabs.Z, {
            defaultActiveId: 'one',
            type: 'underlined',
            size: 'medium',
            children: [
              (0, jsx_runtime.jsx)(Tabs.Z.Panel, {
                id: 'one',
                label: 'Sign-in method',
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-12 py-12 animate-fade-in',
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      children: (0, jsx_runtime.jsx)('h1', {
                        className: 'text-3xl text-scale-1200',
                        children: 'Sign-in method',
                      }),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'border-t border-scale-400',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: 'text-scale-1200 text-2xl mb-2',
                          children: 'General settings',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-sm text-scale-900',
                          children:
                            'Turn payment methods on and off in one click – no engineering time required.',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-sm text-scale-900',
                          children:
                            'Use our guide to check which payment methods are compatible with your integration.',
                        }),
                        (0, jsx_runtime.jsx)(CardForm, {}),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: 'text-scale-1200 text-2xl mb-2',
                          children: 'Providers',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-sm text-scale-900',
                          children:
                            'Turn payment methods on and off in one click – no engineering time required.',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-sm text-scale-900',
                          children:
                            'Use our guide to check which payment methods are compatible with your integration.',
                        }),
                        (0, jsx_runtime.jsx)(AuthForm, {}),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(DomainsForm, {}),
                  ],
                }),
              }),
              (0, jsx_runtime.jsx)(Tabs.Z.Panel, {
                id: 'two',
                label: 'Emails',
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-12 py-12 animate-fade-in',
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      children: (0, jsx_runtime.jsx)('h1', {
                        className: 'text-3xl text-scale-1200',
                        children: 'Emails',
                      }),
                    }),
                    (0, jsx_runtime.jsxs)('button', {
                      className:
                        ' group w-full bg-scale-300   dark:bg-scale-100   border  border-scale-500 hover:border-scale-700 dark:border-scale-300 dark:hover:border-scale-500 px-6 py-4  my-6  flex gap-6 items-center rounded-md shadow-sm transition text-left ',
                      children: [
                        (0, jsx_runtime.jsx)('div', {
                          className:
                            'transition duration-500 bg-brand-900 rounded p-1 w-10 h-10 group-hover:-rotate-3 group-hover:scale-110',
                        }),
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'grow',
                          children: [
                            (0, jsx_runtime.jsx)('h3', {
                              className: 'text-scale-1200',
                              children:
                                'Use authentication as the backbone of your app',
                            }),
                            (0, jsx_runtime.jsx)('p', {
                              className: 'text-scale-900 text-xs',
                              children:
                                'Learn how to use Supabase Auth with Auth Policies to pick and choose what users see what.',
                            }),
                            (0, jsx_runtime.jsxs)('p', {
                              className:
                                'text-brand-900 mt-2 text-xs flex items-center gap-1',
                              children: [
                                'See Documenation',
                                (0, jsx_runtime.jsx)('span', {
                                  className:
                                    'transition group-hover:translate-x-1',
                                  children: (0, jsx_runtime.jsx)(
                                    IconArrowRight_IconArrowRight,
                                    { strokeWidth: 2, width: 12 }
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className: 'text-scale-900',
                          children: (0, jsx_runtime.jsx)(IconX.Z, {}),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'border-t border-scale-400',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: 'text-scale-1200 text-2xl mb-2',
                          children: 'Custom SMTP',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-sm text-scale-900',
                          children:
                            'You can use your own SMTP server instead of the built-in email service.',
                        }),
                        (0, jsx_runtime.jsx)(SmtpForm, {}),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: 'text-scale-1200 text-2xl mb-2',
                          children: 'Templates',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-sm text-scale-900',
                          children:
                            'You can use your own SMTP server instead of the built-in email service.',
                        }),
                        (0, jsx_runtime.jsx)(TemplatesForm, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      }
      WholeForm.displayName = 'WholeForm'
      var examples_AuthForm = WholeForm,
        Form_stories = { title: 'Data Input/Form', component: Form.Z }
      const INITIAL_VALUES = {
          email: '',
          last_name: '',
          profession: '',
          number: void 0,
          checkbox_alone: !1,
          favorite_food: '',
          check_3: !1,
          check_2: !0,
          check_1: !1,
          textarea: '',
          toggle: !0,
          people: void 0,
        },
        InputLevelValidation = () => {
          function validateEmail(value) {
            let error
            return (
              console.log('validateEmail running'),
              value
                ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
                  (error = 'Invalid email address')
                : (error = 'Required'),
              error
            )
          }
          return (0, jsx_runtime.jsx)(Form.Z, {
            initialValues: { email: '', firstname: '' },
            validateOnBlur: !0,
            onSubmit: (values, _ref) => {
              let { setSubmitting: setSubmitting } = _ref
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2)), setSubmitting(!1)
              }, 400)
            },
            children: (_ref2) => {
              let { isSubmitting: isSubmitting } = _ref2
              return (0, jsx_runtime.jsxs)('div', {
                className: 'space-y-4',
                children: [
                  (0, jsx_runtime.jsx)(Input.Z, {
                    id: 'email',
                    label: 'email',
                    placeholder: 'something in here',
                    labelOptional: 'This is a required field',
                    validation: validateEmail,
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    loading: isSubmitting,
                    type: 'primary',
                    htmlType: 'submit',
                    children: 'Submit',
                  }),
                ],
              })
            },
          })
        }
      InputLevelValidation.displayName = 'InputLevelValidation'
      const InputLevelValidationYip = () => {
        const SignupSchema = es.Ry().shape({
          firstname: es
            .Z_()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          lastname: es
            .Z_()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          email: es.Z_().email('Invalid email').required('Required'),
        })
        return (0, jsx_runtime.jsx)(Form.Z, {
          initialValues: { firstname: '', lastname: '', email: '' },
          validationSchema: SignupSchema,
          onSubmit: (values, _ref3) => {
            let { setSubmitting: setSubmitting } = _ref3
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2)), setSubmitting(!1)
            }, 400)
          },
          children: (_ref4) => {
            let { isSubmitting: isSubmitting } = _ref4
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsx)(Input.Z, {
                  id: 'firstname',
                  name: 'firstname',
                  label: 'firstname',
                  placeholder: 'firstname',
                }),
                (0, jsx_runtime.jsx)(Input.Z, {
                  id: 'lastname',
                  name: 'lastname',
                  label: 'lastname',
                  placeholder: 'lastname',
                }),
                (0, jsx_runtime.jsx)(Input.Z, {
                  id: 'email',
                  name: 'email',
                  label: 'Email',
                  placeholder: 'This is your email',
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  loading: isSubmitting,
                  type: 'primary',
                  htmlType: 'submit',
                  children: 'Submit',
                }),
              ],
            })
          },
        })
      }
      InputLevelValidationYip.displayName = 'InputLevelValidationYip'
      const people = [
          {
            value: 1,
            label: 'Wade Cooper',
            avatar:
              'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 2,
            label: 'Arlene Mccoy',
            avatar:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 3,
            label: 'Devon Webb',
            avatar:
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
          },
          {
            value: 4,
            label: 'Tom Cook',
            avatar:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 5,
            label: 'Tanya Fox',
            avatar:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 6,
            label: 'Hellen Schmidt',
            avatar:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 7,
            label: 'Caroline Schultz',
            avatar:
              'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 8,
            label: 'Mason Heaney',
            avatar:
              'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 9,
            label: 'Claudie Smitham',
            avatar:
              'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            value: 10,
            label: 'Emil Schaefer',
            avatar:
              'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        LargerExample = () =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Form.Z, {
              initialValues: INITIAL_VALUES,
              onSubmit: (values, _ref5) => {
                let { setSubmitting: setSubmitting } = _ref5
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2)), setSubmitting(!1)
                }, 400)
              },
              validate: (values) => {
                const errors = {}
                return (
                  console.log('values for validation', values),
                  values.email
                    ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      ) || (errors.email = 'Invalid email address')
                    : (errors.email = 'Required'),
                  values.profession || (errors.profession = 'Required'),
                  values.textarea || (errors.textarea = 'Required'),
                  values.number || (errors.number = 'Required'),
                  values.number <= 13 &&
                    (errors.number = 'Must be a number above 13'),
                  values.number >= 32 &&
                    (errors.number = 'Must be a number below 32'),
                  values.favorite_food ||
                    (errors.favorite_food = 'You must select a favourite food'),
                  values.toggle ||
                    (errors.toggle = 'This needs to be turned on'),
                  errors
                )
              },
              children: (_ref6) => {
                let { isSubmitting: isSubmitting } = _ref6
                return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'space-y-8',
                    children: [
                      (0, jsx_runtime.jsx)('p', {
                        children: isSubmitting
                          ? 'submitting'
                          : 'not submitting',
                      }),
                      (0, jsx_runtime.jsx)(Input.Z, {
                        id: 'email',
                        label: 'Email',
                        placeholder: 'something@gmail.com',
                      }),
                      (0, jsx_runtime.jsx)(Input.Z, {
                        id: 'last_name',
                        label: 'last name',
                        placeholder: 'something in here',
                      }),
                      (0, jsx_runtime.jsxs)(Select.ZP, {
                        id: 'profession',
                        label: 'Profession',
                        placeholder: 'something in here',
                        children: [
                          (0, jsx_runtime.jsx)(
                            Select.ZP.Option,
                            { value: '', children: '---' },
                            'empty-enum'
                          ),
                          (0, jsx_runtime.jsx)(Select.ZP.Option, {
                            value: 'teacher',
                            children: 'Teacher',
                          }),
                          (0, jsx_runtime.jsx)(Select.ZP.Option, {
                            value: 'firefighter',
                            children: 'Firefighter',
                          }),
                          (0, jsx_runtime.jsx)(Select.ZP.Option, {
                            value: 'police',
                            children: 'Police',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(InputNumber.Z, {
                        id: 'number',
                        label: 'Number',
                        placeholder: '124',
                        labelOptional: 'Must be between 13 - 31',
                      }),
                      (0, jsx_runtime.jsx)(Checkbox.X, {
                        id: 'checkbox_alone',
                        label: 'checkbox_alone',
                      }),
                      (0, jsx_runtime.jsx)(Input.Z.TextArea, {
                        id: 'textarea',
                        rows: 5,
                        name: 'textarea',
                      }),
                      (0, jsx_runtime.jsxs)(Checkbox.X.Group, {
                        label: 'Group of checkboxes',
                        layout: 'horizontal',
                        labelOptional: 'Optional label',
                        descriptionText:
                          'You can also show label hint text here',
                        children: [
                          (0, jsx_runtime.jsx)(Checkbox.X, {
                            name: 'check_1',
                            id: 'check_1',
                            label: 'Remember me',
                            description: 'hello world',
                          }),
                          (0, jsx_runtime.jsx)(Checkbox.X, {
                            name: 'check_2',
                            id: 'check_2',
                            label: 'Remember me',
                            description: 'hello world',
                          }),
                          (0, jsx_runtime.jsx)(Checkbox.X, {
                            name: 'check_3',
                            id: 'check_3',
                            label: 'Remember me',
                            description: 'hello world',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(Toggle.Z, {
                        id: 'toggle',
                        label: 'Remember me',
                        layout: 'horizontal',
                      }),
                      (0, jsx_runtime.jsxs)(Radio.Z.Group, {
                        layout: 'horizontal',
                        name: 'favorite_food',
                        label: 'favorite_food',
                        type: 'list',
                        children: [
                          (0, jsx_runtime.jsx)(Radio.Z, {
                            value: 'pizza',
                            label: 'Pizza',
                            description: 'hello world',
                          }),
                          (0, jsx_runtime.jsx)(Radio.Z, {
                            value: 'burger',
                            label: 'Burger',
                            description: 'hello world',
                          }),
                          (0, jsx_runtime.jsx)(Radio.Z, {
                            value: 'fries',
                            label: 'Fries',
                            description: 'hello world',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(Listbox2.default, {
                        id: 'people',
                        label: 'Choose a person',
                        layout: 'horizontal',
                        descriptionText: 'Choose a person for this role',
                        children: people.map((person) =>
                          (0, jsx_runtime.jsx)(
                            Listbox2.default.Option,
                            {
                              value: person.value,
                              label: person.label,
                              addOnBefore: (_ref7) => {
                                let { active: active, selected: selected } =
                                  _ref7
                                return (0, jsx_runtime.jsx)('img', {
                                  src: person.avatar,
                                  alt: '',
                                  className: 'h-6 w-6 rounded-full',
                                })
                              },
                              children: (_ref8) => {
                                let { active: active, selected: selected } =
                                  _ref8
                                return (0, jsx_runtime.jsx)('span', {
                                  className: 'font-normal block truncate',
                                  children: person.label,
                                })
                              },
                            },
                            `people-${person.value}`
                          )
                        ),
                      }),
                      (0, jsx_runtime.jsx)(Button.z, {
                        loading: isSubmitting,
                        type: 'primary',
                        htmlType: 'submit',
                        children: 'Submit',
                      }),
                    ],
                  }),
                })
              },
            }),
          }),
        Form_stories_CardForm = () => {
          const Panel = (_ref9) => {
              let { children: children, header: header, footer: footer } = _ref9
              return (0, jsx_runtime.jsxs)('div', {
                className:
                  'bg-scale-300 border border-scale-400 rounded-md w-3/4 mx-auto my-8 shadow overflow-hidden',
                children: [
                  header &&
                    (0, jsx_runtime.jsx)('div', {
                      className:
                        'bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400',
                      children: header,
                    }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'space-y-6 py-6',
                    children: children,
                  }),
                  footer,
                ],
              })
            },
            Section = (_ref10) => {
              let { children: children, header: header } = _ref10
              return (0, jsx_runtime.jsxs)('div', {
                className: 'grid grid-cols-12 px-8 py-2',
                children: [header, children],
              })
            }
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Form.Z, {
              initialValues: { stripe_email_choice: 'emails-2' },
              onSubmit: (values, _ref11) => {
                let { setSubmitting: setSubmitting } = _ref11
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2)), setSubmitting(!1)
                }, 400)
              },
              validate: (values) => ({}),
              children: (_ref12) => {
                let { isSubmitting: isSubmitting } = _ref12
                return (0, jsx_runtime.jsxs)(Panel, {
                  header: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)('h3', {
                        className: 'text-scale-1200 text-xl font-semibold',
                        children: 'Custom Options',
                      }),
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-scale-900',
                        children:
                          'These settings apply to payment pages you create using Stripe Checkout and Payment Links.',
                      }),
                    ],
                  }),
                  footer: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)('div', {
                        className: 'border-t border-scale-400',
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'py-3 px-6 flex gap-2 justify-end',
                        children: [
                          (0, jsx_runtime.jsx)(Button.z, {
                            loading: isSubmitting,
                            type: 'secondary',
                            htmlType: 'submit',
                            children: 'Cancel',
                          }),
                          (0, jsx_runtime.jsx)(Button.z, {
                            loading: isSubmitting,
                            type: 'primary',
                            htmlType: 'submit',
                            children: 'Save',
                          }),
                        ],
                      }),
                    ],
                  }),
                  children: [
                    (0, jsx_runtime.jsx)(Section, {
                      header: (0, jsx_runtime.jsx)('label', {
                        className: 'text-sm text-scale-1200 col-span-4',
                        children: 'Faster checkout',
                      }),
                      children: (0, jsx_runtime.jsx)(Toggle.Z, {
                        className: 'col-span-8',
                        id: 'link_with_stripe',
                        label: 'Turn on link with Stripe',
                        layout: 'flex',
                        descriptionText:
                          'Go to Payment methods settings to configure Apple Pay and Google Pay.',
                      }),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'border-t border-scale-400',
                    }),
                    (0, jsx_runtime.jsx)(Section, {
                      header: (0, jsx_runtime.jsx)('label', {
                        className: 'text-sm text-scale-1200 col-span-4',
                        children: 'Faster checkout',
                      }),
                      children: (0, jsx_runtime.jsxs)(Radio.Z.Group, {
                        className: 'col-span-8',
                        name: 'stripe_email_choice',
                        id: 'stripe_email_choice',
                        type: 'list',
                        layout: 'vertical',
                        children: [
                          (0, jsx_runtime.jsx)(Radio.Z, {
                            value: 'emails-1',
                            label: 'Send emails about upcoming renewals',
                            description: 'hello world',
                            align: 'horizontal',
                          }),
                          (0, jsx_runtime.jsx)(Radio.Z, {
                            value: 'emails-2',
                            label: 'Send emails about expiring cards',
                            description: 'hello world',
                            align: 'horizontal',
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'border-t border-scale-400',
                    }),
                    (0, jsx_runtime.jsx)(Section, {
                      header: (0, jsx_runtime.jsx)('label', {
                        className: 'text-sm text-scale-1200 col-span-4',
                        children: 'Faster checkout',
                      }),
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'col-span-8 space-y-4',
                        children: [
                          (0, jsx_runtime.jsx)(Input.Z, {
                            name: 'app_id',
                            label: 'Application ID in Stripe',
                          }),
                          (0, jsx_runtime.jsx)(Input.Z, {
                            name: 'service_id',
                            label: 'API key',
                            descriptionText: (0, jsx_runtime.jsxs)('span', {
                              children: [
                                'This can be found in',
                                ' ',
                                (0, jsx_runtime.jsx)('span', {
                                  className:
                                    'text-brand-900 underline cursor-pointer transition hover:text-brand-800',
                                  children: 'the developer settings',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              },
            }),
          })
        }
      ;(InputLevelValidation.parameters = {
        ...InputLevelValidation.parameters,
        docs: {
          ...InputLevelValidation.parameters?.docs,
          source: {
            originalSource:
              '() => {\n  function validateEmail(value: string) {\n    console.log(\'validateEmail running\');\n    let error;\n    if (!value) {\n      error = \'Required\';\n    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value)) {\n      error = \'Invalid email address\';\n    }\n    return error;\n  }\n  return <Form initialValues={{\n    email: \'\',\n    firstname: \'\'\n  }} validateOnBlur onSubmit={(values: any, {\n    setSubmitting\n  }: any) => {\n    setTimeout(() => {\n      alert(JSON.stringify(values, null, 2));\n      setSubmitting(false);\n    }, 400);\n  }}>\n      {({\n      isSubmitting\n    }: {\n      isSubmitting: boolean;\n    }) => <div className="space-y-4">\n          <Input id="email" label="email" placeholder="something in here" labelOptional="This is a required field" validation={validateEmail} />\n          {/* <Input\n            id="firstname"\n            label="firstname"\n            placeholder="something in here"\n           /> */}\n          <Button loading={isSubmitting} type="primary" htmlType="submit">\n            Submit\n          </Button>\n        </div>}\n    </Form>;\n}',
            ...InputLevelValidation.parameters?.docs?.source,
          },
        },
      }),
        (InputLevelValidationYip.parameters = {
          ...InputLevelValidationYip.parameters,
          docs: {
            ...InputLevelValidationYip.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  // validation schema\n  const SignupSchema = Yup.object().shape({\n    firstname: Yup.string().min(2, \'Too Short!\').max(50, \'Too Long!\').required(\'Required\'),\n    lastname: Yup.string().min(2, \'Too Short!\').max(50, \'Too Long!\').required(\'Required\'),\n    email: Yup.string().email(\'Invalid email\').required(\'Required\')\n  });\n  return <Form initialValues={{\n    firstname: \'\',\n    lastname: \'\',\n    email: \'\'\n  }} validationSchema={SignupSchema} onSubmit={(values: any, {\n    setSubmitting\n  }: any) => {\n    setTimeout(() => {\n      alert(JSON.stringify(values, null, 2));\n      setSubmitting(false);\n    }, 400);\n  }}>\n      {({\n      isSubmitting\n    }: any) => <div className="space-y-4">\n          <Input id="firstname" name="firstname" label="firstname" placeholder="firstname" />\n          <Input id="lastname" name="lastname" label="lastname" placeholder="lastname" />\n          <Input id="email" name="email" label="Email" placeholder="This is your email" />\n          <Button loading={isSubmitting} type="primary" htmlType="submit">\n            Submit\n          </Button>\n        </div>}\n    </Form>;\n}',
              ...InputLevelValidationYip.parameters?.docs?.source,
            },
          },
        }),
        (LargerExample.parameters = {
          ...LargerExample.parameters,
          docs: {
            ...LargerExample.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <>\n      <Form initialValues={INITIAL_VALUES} onSubmit={(values: any, {\n      setSubmitting\n    }: any) => {\n      setTimeout(() => {\n        alert(JSON.stringify(values, null, 2));\n        setSubmitting(false);\n      }, 400);\n    }} validate={(values: Values) => {\n      const errors: any = {};\n      console.log(\'values for validation\', values);\n      if (!values.email) {\n        errors.email = \'Required\';\n      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n        errors.email = \'Invalid email address\';\n      }\n      if (!values.profession) {\n        errors.profession = \'Required\';\n      }\n      if (!values.textarea) {\n        errors.textarea = \'Required\';\n      }\n      if (!values.number) {\n        errors.number = \'Required\';\n      }\n      if (values.number <= 13) {\n        errors.number = \'Must be a number above 13\';\n      }\n      if (values.number >= 32) {\n        errors.number = \'Must be a number below 32\';\n      }\n      if (!values.favorite_food) {\n        errors.favorite_food = \'You must select a favourite food\';\n      }\n      if (!values.toggle) {\n        errors.toggle = \'This needs to be turned on\';\n      }\n\n      // if (!values.people) {\n      //   errors.people = \'Please select a person\'\n      // }\n\n      // if (values.remember_me)\n\n      return errors;\n    }}>\n        {({\n        isSubmitting\n      }: any) => <>\n            <div className="space-y-8">\n              <p>{isSubmitting ? \'submitting\' : \'not submitting\'}</p>\n              <Input id="email" label="Email" placeholder="something@gmail.com" />\n              <Input id="last_name" label="last name" placeholder="something in here" />\n              <Select id="profession" label="Profession" placeholder="something in here">\n                <Select.Option key="empty-enum" value="">\n                  ---\n                </Select.Option>\n                <Select.Option value="teacher">Teacher</Select.Option>\n                <Select.Option value="firefighter">Firefighter</Select.Option>\n                <Select.Option value="police">Police</Select.Option>\n              </Select>\n              <InputNumber id="number" label="Number" placeholder="124" labelOptional="Must be between 13 - 31" />\n              <Checkbox id="checkbox_alone" label="checkbox_alone" />\n              <Input.TextArea id="textarea" rows={5} name="textarea" />\n              <Checkbox.Group label="Group of checkboxes" layout="horizontal" labelOptional="Optional label" descriptionText="You can also show label hint text here">\n                <Checkbox name="check_1" id="check_1" label="Remember me" description="hello world" />\n                <Checkbox name="check_2" id="check_2" label="Remember me" description="hello world" />\n                <Checkbox name="check_3" id="check_3" label="Remember me" description="hello world" />\n              </Checkbox.Group>\n              <Toggle id="toggle" label="Remember me" layout="horizontal" />\n              <Radio.Group layout="horizontal" name="favorite_food" label="favorite_food" type="list">\n                <Radio value="pizza" label="Pizza" description="hello world" />\n                <Radio value="burger" label="Burger" description="hello world" />\n                <Radio value="fries" label="Fries" description="hello world" />\n              </Radio.Group>\n\n              <Listbox id="people" label="Choose a person" layout="horizontal" descriptionText="Choose a person for this role">\n                {people.map(person => {\n              return <Listbox.Option key={`people-${person.value}`} value={person.value} label={person.label} addOnBefore={({\n                active,\n                selected\n              }: any) => <img src={person.avatar} alt="" className="h-6 w-6 rounded-full" />} children={({\n                active,\n                selected\n              }: any) => {\n                // console.log(\'selected\', selected)\n                // console.log(\'active\', active)\n                return <span className={\'font-normal block truncate\'}>\n                            {person.label}\n                          </span>;\n              }} />;\n            })}\n              </Listbox>\n\n              <Button loading={isSubmitting} type="primary" htmlType="submit">\n                Submit\n              </Button>\n            </div>\n          </>}\n      </Form>\n    </>;\n}',
              ...LargerExample.parameters?.docs?.source,
            },
          },
        }),
        (Form_stories_CardForm.parameters = {
          ...Form_stories_CardForm.parameters,
          docs: {
            ...Form_stories_CardForm.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  // panel\n  const Panel = ({\n    children,\n    header,\n    footer\n  }: {\n    children: React.ReactNode;\n    header?: React.ReactNode;\n    footer?: React.ReactNode;\n  }) => <div className="bg-scale-300 border border-scale-400 rounded-md w-3/4 mx-auto my-8 shadow overflow-hidden">\n      {header && <div className="bg-scale-100 dark:bg-scale-200 px-8 py-4 border-b border-scale-400">\n          {header}\n        </div>}\n      <div className="space-y-6 py-6">{children}</div>\n      {footer}\n    </div>;\n  const Section = ({\n    children,\n    header\n  }: {\n    children: React.ReactNode;\n    header?: React.ReactNode;\n  }) => <div className="grid grid-cols-12 px-8 py-2">\n      {header}\n      {children}\n    </div>;\n  return <>\n      <Form initialValues={{\n      stripe_email_choice: \'emails-2\'\n    }} onSubmit={(values: any, {\n      setSubmitting\n    }: any) => {\n      setTimeout(() => {\n        alert(JSON.stringify(values, null, 2));\n        setSubmitting(false);\n      }, 400);\n    }} validate={(values: Values) => {\n      const errors: any = {};\n      return errors;\n    }}>\n        {({\n        isSubmitting\n      }: any) => <Panel header={<>\n                <h3 className="text-scale-1200 text-xl font-semibold">\n                  Custom Options\n                </h3>\n                <p className="text-scale-900">\n                  These settings apply to payment pages you create using Stripe\n                  Checkout and Payment Links.\n                </p>\n              </>} footer={<>\n                <div className="border-t border-scale-400"></div>\n                <div className="py-3 px-6 flex gap-2 justify-end">\n                  <Button loading={isSubmitting} type="secondary" htmlType="submit">\n                    Cancel\n                  </Button>\n                  <Button loading={isSubmitting} type="primary" htmlType="submit">\n                    Save\n                  </Button>\n                </div>\n              </>}>\n            {/* <p>{isSubmitting ? \'submitting\' : \'not submitting\'}</p> */}\n            {/* <div className="border-t border-scale-400"></div> */}\n            <Section header={<label className="text-sm text-scale-1200 col-span-4">\n                  Faster checkout\n                </label>}>\n              <Toggle className="col-span-8" id="link_with_stripe" label="Turn on link with Stripe" layout="flex" descriptionText="Go to Payment methods settings to configure Apple Pay and Google Pay." />\n            </Section>\n            <div className="border-t border-scale-400"></div>\n            <Section header={<label className="text-sm text-scale-1200 col-span-4">\n                  Faster checkout\n                </label>}>\n              <Radio.Group className="col-span-8" name="stripe_email_choice" id="stripe_email_choice" type="list" layout="vertical">\n                <Radio\n            // id="1642469211631"\n            value="emails-1" label="Send emails about upcoming renewals" description="hello world" align="horizontal" />\n                <Radio\n            // id="1642469211606"\n            value="emails-2" label="Send emails about expiring cards" description="hello world" align="horizontal" />\n              </Radio.Group>\n            </Section>\n            <div className="border-t border-scale-400"></div>\n            <Section header={<label className="text-sm text-scale-1200 col-span-4">\n                  Faster checkout\n                </label>}>\n              <div className="col-span-8 space-y-4">\n                <Input name="app_id" label="Application ID in Stripe" />\n                <Input name="service_id" label="API key" descriptionText={<span>\n                      This can be found in{\' \'}\n                      <span className="text-brand-900 underline cursor-pointer transition hover:text-brand-800">\n                        the developer settings\n                      </span>\n                    </span>} />\n              </div>\n            </Section>\n          </Panel>}\n      </Form>\n    </>;\n}',
              ...Form_stories_CardForm.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'InputLevelValidation',
        'InputLevelValidationYip',
        'LargerExample',
        'CardForm',
        'AuthForm',
      ]
    },
    './src/components/Checkbox.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        X: function () {
          return Checkbox
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        FormLayout = __webpack_require__(
          './src/lib/Layout/FormLayout/FormLayout.tsx'
        )
      const CheckboxContext = (0, react.createContext)({
        parentCallback: (e) => {},
        parentSize: '',
      })
      var FormContext = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        handler = __webpack_require__('./src/theme/handler.ts'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Group(_ref) {
        let {
          id: id,
          layout: layout = 'vertical',
          error: error,
          descriptionText: descriptionText,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          children: children,
          className: className,
          options: options,
          onChange: onChange,
          size: size = 'medium',
        } = _ref
        const __styles = (0, handler.Z)('checkbox')
        return (0, jsx_runtime.jsx)(FormLayout.l, {
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          layout: layout,
          id: id,
          error: error,
          descriptionText: descriptionText,
          className: className,
          size: size,
          children: (0, jsx_runtime.jsx)(CheckboxContext.Provider, {
            value: {
              parentCallback: (e) => {
                onChange && onChange(e)
              },
              parentSize: size,
            },
            children: (0, jsx_runtime.jsx)('div', {
              className: __styles.group,
              children: options
                ? options.map((option) =>
                    (0, jsx_runtime.jsx)(Checkbox, {
                      id: option.id,
                      value: option.value,
                      label: option.label,
                      beforeLabel: option.beforeLabel,
                      afterLabel: option.afterLabel,
                      checked: option.checked,
                      name: option.name,
                      description: option.description,
                    })
                  )
                : children,
            }),
          }),
        })
      }
      function Checkbox(_ref2) {
        let {
          className: className,
          id: id = '',
          name: name = '',
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          description: description,
          checked: checked,
          value: value,
          onChange: onChange,
          onFocus: onFocus,
          onBlur: onBlur,
          size: size = 'medium',
          disabled: disabled = !1,
          ...props
        } = _ref2
        const {
            formContextOnChange: formContextOnChange,
            values: values,
            handleBlur: handleBlur,
          } = (0, FormContext.G)(),
          __styles = (0, handler.Z)('checkbox')
        return (0, jsx_runtime.jsx)(CheckboxContext.Consumer, {
          children: (_ref3) => {
            let { parentCallback: parentCallback, parentSize: parentSize } =
              _ref3
            const markupId =
              id ||
              name ||
              (label
                ? label
                    .toLowerCase()
                    .replace(/^[^A-Z0-9]+/gi, '')
                    .replace(/ /g, '-')
                : void 0)
            size = parentSize || size
            const markupName = name || markupId
            let active = checked ?? void 0,
              containerClasses = [__styles.container]
            return (
              className && containerClasses.push(className),
              values && void 0 === checked && (active = values[id || name]),
              (0, jsx_runtime.jsxs)('div', {
                className: containerClasses.join(' '),
                children: [
                  (0, jsx_runtime.jsx)('input', {
                    id: markupId,
                    name: markupName,
                    type: 'checkbox',
                    className: [__styles.base, __styles.size[size]].join(' '),
                    onChange: function onInputChange(e) {
                      parentCallback && parentCallback(e),
                        onChange && onChange(e),
                        formContextOnChange && formContextOnChange(e)
                    },
                    onFocus: onFocus ? (event) => onFocus(event) : void 0,
                    onBlur: function handleBlurEvent(e) {
                      handleBlur && handleBlur(e), onBlur && onBlur(e)
                    },
                    checked: active,
                    value: value || markupId,
                    disabled: disabled,
                    ...props,
                  }),
                  (0, jsx_runtime.jsxs)('label', {
                    className: [__styles.label.base, __styles.label[size]].join(
                      ' '
                    ),
                    htmlFor: markupId,
                    children: [
                      (0, jsx_runtime.jsxs)('span', {
                        children: [
                          beforeLabel &&
                            (0, jsx_runtime.jsx)('span', {
                              className: [
                                __styles.label_before.base,
                                __styles.label_before[size],
                              ].join(' '),
                              children: beforeLabel,
                            }),
                          label,
                          afterLabel &&
                            (0, jsx_runtime.jsx)('span', {
                              className: [
                                __styles.label_after.base,
                                __styles.label_after[size],
                              ].join(' '),
                              children: afterLabel,
                            }),
                        ],
                      }),
                      description &&
                        (0, jsx_runtime.jsx)('p', {
                          className: [
                            __styles.description.base,
                            __styles.description[size],
                          ].join(' '),
                          children: description,
                        }),
                    ],
                  }),
                ],
              })
            )
          },
        })
      }
      ;(Group.displayName = 'Group'),
        (Checkbox.displayName = 'Checkbox'),
        (Checkbox.Group = Group)
      try {
        ;(Checkbox.displayName = 'Checkbox'),
          (Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Checkbox.tsx#Checkbox'] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/components/Checkbox.tsx#Checkbox',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Group.displayName = 'Checkbox.Group'),
          (Group.__docgenInfo = {
            description: '',
            displayName: 'Checkbox.Group',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              layout: {
                defaultValue: { value: 'vertical' },
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'any' },
              },
              descriptionText: {
                defaultValue: null,
                description: '',
                name: 'descriptionText',
                required: !1,
                type: { name: 'any' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'any' },
              },
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              labelOptional: {
                defaultValue: null,
                description: '',
                name: 'labelOptional',
                required: !1,
                type: { name: 'any' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !1,
                type: { name: 'any' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'any' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !1,
                type: { name: 'InputProps[]' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(x: ChangeEvent<HTMLInputElement>) => void' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Checkbox.tsx#Checkbox.Group'
            ] = {
              docgenInfo: Checkbox.Group.__docgenInfo,
              name: 'Checkbox.Group',
              path: 'src/components/Checkbox.tsx#Checkbox.Group',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Collapsible/Collapsible.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-collapsible/dist/index.module.js'
          ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const Collapsible = (_ref) => {
        let {
          open: open,
          children: children,
          className: className,
          ...props
        } = _ref
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__.fC,
          {
            defaultOpen: props.defaultOpen,
            open: open,
            onOpenChange: props.onOpenChange,
            disabled: props.disabled,
            className: className,
            children: children,
          }
        )
      }
      function Trigger(_ref2) {
        let { children: children, asChild: asChild } = _ref2
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__.xz,
          { asChild: asChild, children: children }
        )
      }
      function Content(_ref3) {
        let { children: children, className: className } = _ref3
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_3__.Z)(
          'collapsible'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__.VY,
          {
            className: [__styles.content, className].join(' '),
            children: children,
          }
        )
      }
      ;(Collapsible.displayName = 'Collapsible'),
        (Trigger.displayName = 'Trigger'),
        (Content.displayName = 'Content'),
        (Collapsible.Trigger = Trigger),
        (Collapsible.Content = Content),
        (__webpack_exports__.ZP = Collapsible)
      try {
        ;(Trigger.displayName = 'Trigger'),
          (Trigger.__docgenInfo = {
            description: '',
            displayName: 'Trigger',
            props: {
              asChild: {
                defaultValue: null,
                description: '',
                name: 'asChild',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Collapsible/Collapsible.tsx#Trigger'
            ] = {
              docgenInfo: Trigger.__docgenInfo,
              name: 'Trigger',
              path: 'src/components/Collapsible/Collapsible.tsx#Trigger',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Content.displayName = 'Content'),
          (Content.__docgenInfo = {
            description: '',
            displayName: 'Content',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Collapsible/Collapsible.tsx#Content'
            ] = {
              docgenInfo: Content.__docgenInfo,
              name: 'Content',
              path: 'src/components/Collapsible/Collapsible.tsx#Content',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Collapsible.displayName = 'Collapsible'),
          (Collapsible.__docgenInfo = {
            description: '',
            displayName: 'Collapsible',
            props: {
              asChild: {
                defaultValue: null,
                description: '',
                name: 'asChild',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Collapsible/Collapsible.tsx#Collapsible'
            ] = {
              docgenInfo: Collapsible.__docgenInfo,
              name: 'Collapsible',
              path: 'src/components/Collapsible/Collapsible.tsx#Collapsible',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Trigger.displayName = 'Collapsible.Trigger'),
          (Trigger.__docgenInfo = {
            description: '',
            displayName: 'Collapsible.Trigger',
            props: {
              asChild: {
                defaultValue: null,
                description: '',
                name: 'asChild',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Collapsible/Collapsible.tsx#Collapsible.Trigger'
            ] = {
              docgenInfo: Collapsible.Trigger.__docgenInfo,
              name: 'Collapsible.Trigger',
              path: 'src/components/Collapsible/Collapsible.tsx#Collapsible.Trigger',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Content.displayName = 'Collapsible.Content'),
          (Content.__docgenInfo = {
            description: '',
            displayName: 'Collapsible.Content',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Collapsible/Collapsible.tsx#Collapsible.Content'
            ] = {
              docgenInfo: Collapsible.Content.__docgenInfo,
              name: 'Collapsible.Content',
              path: 'src/components/Collapsible/Collapsible.tsx#Collapsible.Content',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Form/Form.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return Form
        },
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/formik/dist/formik.esm.js'
        ),
        _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function errorReducer(state, action) {
        if (!action.error) {
          const payload = state
          return delete payload[action.key], payload
        }
        if (action) return { ...state, [action.key]: action.error }
        throw new Error()
      }
      function Form(_ref) {
        let { validate: validate, ...props } = _ref
        const [fieldLevelErrors, dispatchErrors] = (0,
        react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(errorReducer, null)
        const formik = (0, formik__WEBPACK_IMPORTED_MODULE_1__.TA)({
          validateOnBlur: !0,
          ...props,
          validationSchema: props.validationSchema,
          initialValues: props.initialValues,
          onSubmit: props.onSubmit,
          validate:
            validate ||
            function () {
              return fieldLevelErrors
            },
        })
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('form', {
          id: props.id,
          name: props.name,
          onSubmit: formik.handleSubmit,
          className: props.className,
          style: props.style,
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _FormContext__WEBPACK_IMPORTED_MODULE_3__.o,
            {
              values: formik.values,
              errors: formik.errors,
              formContextOnChange: formik.handleChange,
              handleBlur: formik.handleBlur,
              touched: formik.touched,
              fieldLevelValidation: function handleFieldLevelValidation(
                key,
                error
              ) {
                dispatchErrors({ key: key, error: error })
              },
              children: props.children({
                errors: formik.errors,
                touched: formik.touched,
                isSubmitting: formik.isSubmitting,
                isValidating: formik.isValidating,
                submitCount: formik.submitCount,
                initialValues: formik.initialValues,
                values: formik.values,
                handleReset: formik.handleReset,
                resetForm: formik.resetForm,
              }),
            }
          ),
        })
      }
      Form.displayName = 'Form'
      try {
        ;(Form.displayName = 'Form'),
          (Form.__docgenInfo = {
            description: '',
            displayName: 'Form',
            props: {
              children: {
                defaultValue: null,
                description: 'React children or child render callback',
                name: 'children',
                required: !0,
                type: { name: 'any' },
              },
              handleIsSubmitting: {
                defaultValue: null,
                description: '',
                name: 'handleIsSubmitting',
                required: !1,
                type: { name: 'any' },
              },
              handleIsValidating: {
                defaultValue: null,
                description: '',
                name: 'handleIsValidating',
                required: !1,
                type: { name: 'any' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !1,
                type: { name: 'string' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Form/Form.tsx#Form'] = {
              docgenInfo: Form.__docgenInfo,
              name: 'Form',
              path: 'src/components/Form/Form.tsx#Form',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconCheck/IconCheck.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_check__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/check.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconCheck(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_check__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconCheck.displayName = 'IconCheck'),
        (__webpack_exports__.Z = IconCheck)
      try {
        ;(IconCheck.displayName = 'IconCheck'),
          (IconCheck.__docgenInfo = {
            description: '',
            displayName: 'IconCheck',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconCheck/IconCheck.tsx#IconCheck'
            ] = {
              docgenInfo: IconCheck.__docgenInfo,
              name: 'IconCheck',
              path: 'src/components/Icon/icons/IconCheck/IconCheck.tsx#IconCheck',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconChevronUp/IconChevronUp.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_chevron_up__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/chevron-up.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconChevronUp(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_chevron_up__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconChevronUp.displayName = 'IconChevronUp'),
        (__webpack_exports__.Z = IconChevronUp)
      try {
        ;(IconChevronUp.displayName = 'IconChevronUp'),
          (IconChevronUp.__docgenInfo = {
            description: '',
            displayName: 'IconChevronUp',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconChevronUp/IconChevronUp.tsx#IconChevronUp'
            ] = {
              docgenInfo: IconChevronUp.__docgenInfo,
              name: 'IconChevronUp',
              path: 'src/components/Icon/icons/IconChevronUp/IconChevronUp.tsx#IconChevronUp',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconTrash/IconTrash.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/trash.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconTrash(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconTrash.displayName = 'IconTrash'),
        (__webpack_exports__.Z = IconTrash)
      try {
        ;(IconTrash.displayName = 'IconTrash'),
          (IconTrash.__docgenInfo = {
            description: '',
            displayName: 'IconTrash',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconTrash/IconTrash.tsx#IconTrash'
            ] = {
              docgenInfo: IconTrash.__docgenInfo,
              name: 'IconTrash',
              path: 'src/components/Icon/icons/IconTrash/IconTrash.tsx#IconTrash',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconX/IconX.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_x__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/x.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconX(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_x__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconX.displayName = 'IconX'), (__webpack_exports__.Z = IconX)
      try {
        ;(IconX.displayName = 'IconX'),
          (IconX.__docgenInfo = {
            description: '',
            displayName: 'IconX',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconX/IconX.tsx#IconX'
            ] = {
              docgenInfo: IconX.__docgenInfo,
              name: 'IconX',
              path: 'src/components/Icon/icons/IconX/IconX.tsx#IconX',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/InputNumber/InputNumber.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/lib/Layout/FormLayout/FormLayout.tsx'),
        _lib_Layout_InputErrorIcon__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./src/lib/Layout/InputErrorIcon.tsx'),
        _lib_Layout_InputIconContainer__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./src/lib/Layout/InputIconContainer.tsx'),
        _Form_FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function InputNumber(_ref) {
        let {
          defaultValue: defaultValue,
          descriptionText: descriptionText,
          error: error,
          icon: icon,
          inputRef: inputRef,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          layout: layout,
          value: value,
          actions: actions,
          size: size = 'medium',
          validation: validation,
          id: id = '',
          name: name = '',
          ...props
        } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
            'inputNumber'
          ),
          {
            formContextOnChange: formContextOnChange,
            values: values,
            errors: errors,
            handleBlur: handleBlur,
            touched: touched,
            fieldLevelValidation: fieldLevelValidation,
          } = (0, _Form_FormContext__WEBPACK_IMPORTED_MODULE_3__.G)()
        values && !value && (value = values[id || name]),
          error ||
            (errors && !error && (error = errors[id || name]),
            (error = touched && touched[id || name] ? error : void 0)),
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            validation && fieldLevelValidation(id, validation(value))
          }, [])
        let inputClasses = [__styles.base]
        return (
          error && inputClasses.push(__styles.variants.error),
          error || inputClasses.push(__styles.variants.standard),
          icon && inputClasses.push(__styles.with_icon),
          size && inputClasses.push(__styles.size[size]),
          props.disabled && inputClasses.push(__styles.disabled),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: props.className,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__.l,
              {
                label: label,
                afterLabel: afterLabel,
                beforeLabel: beforeLabel,
                labelOptional: labelOptional,
                layout: layout,
                id: id,
                error: error,
                descriptionText: descriptionText,
                style: props.style,
                size: size,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
                  className: __styles.container,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      'input',
                      {
                        id: id,
                        name: name,
                        onChange: function onInputChange(e) {
                          props.onChange && props.onChange(e),
                            formContextOnChange && formContextOnChange(e),
                            validation &&
                              fieldLevelValidation(
                                id,
                                validation(e.target.value)
                              )
                        },
                        onBlur: function handleBlurEvent(e) {
                          handleBlur && handleBlur(e),
                            props.onBlur && props.onBlur(e)
                        },
                        type: 'number',
                        ref: inputRef,
                        value: value,
                        className: inputClasses.join(' '),
                        ...props,
                      }
                    ),
                    icon &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _lib_Layout_InputIconContainer__WEBPACK_IMPORTED_MODULE_5__.Z,
                        { icon: icon }
                      ),
                    error || actions
                      ? (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                          'div',
                          {
                            className: __styles.actions_container,
                            children: [
                              error &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  _lib_Layout_InputErrorIcon__WEBPACK_IMPORTED_MODULE_6__.Z,
                                  { size: size }
                                ),
                              actions && actions,
                            ],
                          }
                        )
                      : null,
                  ],
                }),
              }
            ),
          })
        )
      }
      ;(InputNumber.displayName = 'InputNumber'),
        (__webpack_exports__.Z = InputNumber)
      try {
        ;(InputNumber.displayName = 'InputNumber'),
          (InputNumber.__docgenInfo = {
            description: '',
            displayName: 'InputNumber',
            props: {
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | number' },
              },
              descriptionText: {
                defaultValue: null,
                description: '',
                name: 'descriptionText',
                required: !1,
                type: { name: 'ReactNode' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'any' },
              },
              inputRef: {
                defaultValue: null,
                description: '',
                name: 'inputRef',
                required: !1,
                type: { name: 'RefObject<HTMLInputElement>' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              labelOptional: {
                defaultValue: null,
                description: '',
                name: 'labelOptional',
                required: !1,
                type: { name: 'ReactNode' },
              },
              actions: {
                defaultValue: null,
                description: '',
                name: 'actions',
                required: !1,
                type: { name: 'ReactNode' },
              },
              layout: {
                defaultValue: null,
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
              validation: {
                defaultValue: null,
                description: '',
                name: 'validation',
                required: !1,
                type: { name: '(x: any) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputNumber/InputNumber.tsx#InputNumber'
            ] = {
              docgenInfo: InputNumber.__docgenInfo,
              name: 'InputNumber',
              path: 'src/components/InputNumber/InputNumber.tsx#InputNumber',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Listbox/Listbox2.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        default: function () {
          return Listbox2
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js'
        ),
        FormLayout = __webpack_require__(
          './src/lib/Layout/FormLayout/FormLayout.tsx'
        ),
        InputIconContainer = __webpack_require__(
          './src/lib/Layout/InputIconContainer.tsx'
        ),
        InputErrorIcon = __webpack_require__(
          './src/lib/Layout/InputErrorIcon.tsx'
        ),
        IconCheck = __webpack_require__(
          './src/components/Icon/icons/IconCheck/IconCheck.tsx'
        ),
        FormContext = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        lodash = __webpack_require__('../../node_modules/lodash/lodash.js')
      const SelectContext = (0, react.createContext)({
        onChange: (e) => {},
        selected: void 0,
      })
      var handler = __webpack_require__('./src/theme/handler.ts'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function classNames() {
        for (
          var _len = arguments.length, classes = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          classes[_key] = arguments[_key]
        return classes.filter(Boolean).join(' ')
      }
      function Listbox(_ref) {
        let {
          children: children,
          className: className,
          descriptionText: descriptionText,
          error: error,
          icon: icon,
          id: id = '',
          name: name = '',
          label: label,
          labelOptional: labelOptional,
          layout: layout,
          value: value,
          onChange: onChange,
          onFocus: onFocus,
          onBlur: onBlur,
          style: style,
          size: size = 'medium',
          defaultValue: defaultValue,
          borderless: borderless = !1,
          validation: validation,
          disabled: disabled,
          optionsWidth: optionsWidth,
        } = _ref
        const [selected, setSelected] = (0, react.useState)(void 0),
          [selectedNode, setSelectedNode] = (0, react.useState)({}),
          __styles = (0, handler.Z)('listbox'),
          triggerRef = (0, react.useRef)(null),
          {
            formContextOnChange: formContextOnChange,
            values: values,
            errors: errors,
            handleBlur: handleBlur,
            touched: touched,
            fieldLevelValidation: fieldLevelValidation,
          } = (0, FormContext.G)()
        values && !value && (defaultValue = values[id || name]),
          error ||
            (errors && !error && (error = errors[id || name]),
            (error = touched && touched[id || name] ? error : void 0)),
          (0, react.useEffect)(() => {
            value && setSelected(value)
          }, [value]),
          (0, react.useEffect)(() => {
            function handleResize() {
              document.documentElement.style.setProperty(
                '--width-listbox',
                `${optionsWidth || triggerRef.current?.offsetWidth}px`
              )
            }
            return (
              window.addEventListener('resize', handleResize),
              handleResize(),
              () => window.removeEventListener('resize', handleResize)
            )
          }, []),
          (0, react.useEffect)(() => {
            const data = children,
              content = (0, lodash.flatten)(data)
            function findNode(_value) {
              return content.find((node) => node.props.value === _value)
            }
            if (value) {
              setSelected(value)
              const node = findNode(value)
              setSelectedNode(node?.props ? node.props : void 0)
            } else if (selected) {
              const node = findNode(selected)
              setSelectedNode(node?.props ? node.props : void 0)
            } else if (defaultValue) {
              setSelected(defaultValue)
              const node = findNode(selected)
              setSelectedNode(node?.props ? node.props : void 0)
            } else setSelectedNode(content[0].props)
          }, [selected])
        let selectClasses = [__styles.container, __styles.base]
        return (
          error && selectClasses.push(__styles.variants.error),
          error || selectClasses.push(__styles.variants.standard),
          icon && selectClasses.push(__styles.with_icon),
          size && selectClasses.push(__styles.size[size]),
          disabled && selectClasses.push(__styles.disabled),
          (0, jsx_runtime.jsx)(FormLayout.l, {
            label: label,
            labelOptional: labelOptional,
            layout: layout,
            id: id,
            error: error,
            descriptionText: descriptionText,
            className: className,
            style: style,
            size: size,
            children: (0, jsx_runtime.jsxs)(index_module.fC, {
              children: [
                (0, jsx_runtime.jsx)(index_module.xz, {
                  asChild: !0,
                  disabled: disabled,
                  children: (0, jsx_runtime.jsxs)('button', {
                    ref: triggerRef,
                    className: selectClasses.join(' '),
                    onBlur: function handleBlurEvent(e) {
                      handleBlur && handleBlur(e), onBlur && onBlur(e)
                    },
                    onFocus: onFocus,
                    name: name,
                    id: id,
                    children: [
                      (0, jsx_runtime.jsxs)('span', {
                        className: __styles.addOnBefore,
                        children: [
                          icon &&
                            (0, jsx_runtime.jsx)(InputIconContainer.Z, {
                              icon: icon,
                            }),
                          selectedNode?.addOnBefore &&
                            (0, jsx_runtime.jsx)(selectedNode.addOnBefore, {}),
                          (0, jsx_runtime.jsx)('span', {
                            className: __styles.label,
                            children: selectedNode?.label,
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)('span', {
                        className: __styles.chevron_container,
                        children: (0, jsx_runtime.jsx)('svg', {
                          className: __styles.chevron,
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 20 20',
                          fill: 'currentColor',
                          'aria-hidden': 'true',
                          children: (0, jsx_runtime.jsx)('path', {
                            fillRule: 'evenodd',
                            d: 'M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z',
                            clipRule: 'evenodd',
                          }),
                        }),
                      }),
                      error &&
                        (0, jsx_runtime.jsx)('div', {
                          className: __styles.actions_container,
                          children:
                            error &&
                            (0, jsx_runtime.jsx)(InputErrorIcon.Z, {
                              size: size,
                            }),
                        }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsx)(index_module.VY, {
                  sideOffset: 6,
                  loop: !0,
                  side: 'bottom',
                  align: 'center',
                  className: __styles.options_container,
                  children: (0, jsx_runtime.jsx)('div', {
                    children: (0, jsx_runtime.jsx)(SelectContext.Provider, {
                      value: {
                        onChange: function handleOnChange(value) {
                          onChange && onChange(value), setSelected(value)
                          let event = {}
                          ;(event.target = {
                            type: 'select',
                            name: name,
                            id: id,
                            value: value,
                            checked: void 0,
                          }),
                            formContextOnChange && formContextOnChange(event),
                            validation &&
                              fieldLevelValidation(id, validation(value))
                        },
                        selected: selected,
                      },
                      children: children,
                    }),
                  }),
                }),
              ],
            }),
          })
        )
      }
      function SelectOption(_ref2) {
        let {
          id: id,
          value: value,
          label: label,
          disabled: disabled = !1,
          children: children,
          className: className = '',
          addOnBefore: addOnBefore,
        } = _ref2
        const __styles = (0, handler.Z)('listbox')
        return (0, jsx_runtime.jsx)(SelectContext.Consumer, {
          children: (_ref3) => {
            let { onChange: onChange, selected: selected } = _ref3
            const active = selected === value
            return (0, jsx_runtime.jsxs)(
              index_module.ck,
              {
                className: `${classNames(
                  __styles.option,
                  active ? __styles.option_active : ' ',
                  disabled ? __styles.option_disabled : ' '
                )} ${className}`,
                onSelect: () => (disabled ? {} : onChange(value)),
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    className: __styles.option_inner,
                    children: [
                      addOnBefore &&
                        addOnBefore({ active: active, selected: selected }),
                      (0, jsx_runtime.jsx)('span', {
                        children:
                          'function' == typeof children
                            ? children({ active: active, selected: selected })
                            : children,
                      }),
                    ],
                  }),
                  active
                    ? (0, jsx_runtime.jsx)('span', {
                        className: classNames(
                          __styles.option_check,
                          active ? __styles.option_check_active : ''
                        ),
                        children: (0, jsx_runtime.jsx)(IconCheck.Z, {
                          className: __styles.option_check_icon,
                          'aria-hidden': 'true',
                        }),
                      })
                    : null,
                ],
              },
              id
            )
          },
        })
      }
      ;(Listbox.displayName = 'Listbox'),
        (SelectOption.displayName = 'SelectOption'),
        (Listbox.Option = SelectOption)
      var Listbox2 = Listbox
      try {
        ;(Listbox.displayName = 'Listbox'),
          (Listbox.__docgenInfo = {
            description: '',
            displayName: 'Listbox',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              descriptionText: {
                defaultValue: null,
                description: '',
                name: 'descriptionText',
                required: !1,
                type: { name: 'string' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'any' },
              },
              id: {
                defaultValue: { value: '' },
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              labelOptional: {
                defaultValue: null,
                description: '',
                name: 'labelOptional',
                required: !1,
                type: { name: 'string' },
              },
              layout: {
                defaultValue: null,
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              value: {
                defaultValue: { value: 'undefined' },
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'any' },
              },
              reveal: {
                defaultValue: null,
                description: '',
                name: 'reveal',
                required: !1,
                type: { name: 'boolean' },
              },
              actions: {
                defaultValue: null,
                description: '',
                name: 'actions',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'any' },
              },
              borderless: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'borderless',
                required: !1,
                type: { name: 'boolean' },
              },
              validation: {
                defaultValue: null,
                description: '',
                name: 'validation',
                required: !1,
                type: { name: '(x: any) => void' },
              },
              optionsWidth: {
                defaultValue: null,
                description: '',
                name: 'optionsWidth',
                required: !1,
                type: { name: 'number' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(x: any) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Listbox/Listbox2.tsx#Listbox'
            ] = {
              docgenInfo: Listbox.__docgenInfo,
              name: 'Listbox',
              path: 'src/components/Listbox/Listbox2.tsx#Listbox',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Modal/Modal.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Space.tsx'
        ),
        _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/components/Button.tsx'
        ),
        _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-dialog/dist/index.module.js'
          ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const Modal = (_ref) => {
        let {
          children: children,
          customFooter: customFooter,
          closable: closable,
          description: description,
          hideFooter: hideFooter = !1,
          alignFooter: alignFooter = 'left',
          layout: layout = 'horizontal',
          loading: loading = !1,
          cancelText: cancelText = 'Cancel',
          onConfirm: onConfirm = () => {},
          onCancel: onCancel = () => {},
          confirmText: confirmText = 'Confirm',
          showIcon: showIcon = !1,
          title: title,
          footerBackground: footerBackground,
          icon: icon,
          variant: variant = 'success',
          visible: visible = !1,
          size: size = 'large',
          style: style,
          overlayStyle: overlayStyle,
          contentStyle: contentStyle,
          className: className = '',
          overlayClassName: overlayClassName,
          triggerElement: triggerElement,
          header: header,
          ...props
        } = _ref
        const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
            visible || !1
          ),
          __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)('modal')
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
          setOpen(visible)
        }, [visible])
        __styles.base
        const footerContent =
          customFooter ||
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            _index__WEBPACK_IMPORTED_MODULE_3__.T,
            {
              style: {
                width: '100%',
                justifyContent:
                  'vertical' === layout
                    ? 'center'
                    : 'right' === alignFooter
                    ? 'flex-end'
                    : 'flex-start',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _index__WEBPACK_IMPORTED_MODULE_4__.z,
                  {
                    type: 'secondary',
                    onClick: onCancel,
                    disabled: loading,
                    children: cancelText,
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _index__WEBPACK_IMPORTED_MODULE_4__.z,
                  {
                    onClick: onConfirm,
                    loading: loading,
                    danger: 'danger' === variant,
                    children: confirmText,
                  }
                ),
              ],
            }
          )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.fC,
          {
            open: open,
            onOpenChange: function handleOpenChange(open) {
              void 0 === visible || open ? setOpen(open) : onCancel()
            },
            children: [
              triggerElement &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.xz,
                  { children: triggerElement }
                ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.h_,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.aV,
                      { className: __styles.overlay }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.aV,
                      {
                        className: __styles.scroll_overlay,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                          _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.VY,
                          {
                            className: [
                              __styles.base,
                              __styles.size[size],
                            ].join(' '),
                            onInteractOutside: props.onInteractOutside,
                            children: [
                              header &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  'div',
                                  {
                                    className: __styles.header,
                                    children: header,
                                  }
                                ),
                              children,
                              !hideFooter &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  'div',
                                  {
                                    className: __styles.footer,
                                    children: footerContent,
                                  }
                                ),
                            ],
                          }
                        ),
                      }
                    ),
                  ],
                }
              ),
            ],
          }
        )
      }
      function Content(_ref2) {
        let { children: children } = _ref2
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
          'modal'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: __styles.content,
          children: children,
        })
      }
      function Seperator() {
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
          'modal'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: __styles.seperator,
        })
      }
      ;(Modal.displayName = 'Modal'),
        (Content.displayName = 'Content'),
        (Seperator.displayName = 'Seperator'),
        (Modal.Content = Content),
        (Modal.Seperator = Seperator),
        (__webpack_exports__.Z = Modal)
      try {
        ;(Modal.displayName = 'Modal'),
          (Modal.__docgenInfo = {
            description: '',
            displayName: 'Modal',
            props: {
              customFooter: {
                defaultValue: { value: 'undefined' },
                description: '',
                name: 'customFooter',
                required: !1,
                type: { name: 'ReactNode' },
              },
              closable: {
                defaultValue: null,
                description: '',
                name: 'closable',
                required: !1,
                type: { name: 'boolean' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              hideFooter: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hideFooter',
                required: !1,
                type: { name: 'boolean' },
              },
              alignFooter: {
                defaultValue: { value: 'left' },
                description: '',
                name: 'alignFooter',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"left"' }, { value: '"right"' }],
                },
              },
              layout: {
                defaultValue: { value: 'horizontal' },
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              loading: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              onCancel: {
                defaultValue: { value: '() => {}' },
                description: '',
                name: 'onCancel',
                required: !1,
                type: { name: 'any' },
              },
              cancelText: {
                defaultValue: { value: 'Cancel' },
                description: '',
                name: 'cancelText',
                required: !1,
                type: { name: 'string' },
              },
              onConfirm: {
                defaultValue: { value: '() => {}' },
                description: '',
                name: 'onConfirm',
                required: !1,
                type: { name: 'any' },
              },
              confirmText: {
                defaultValue: { value: 'Confirm' },
                description: '',
                name: 'confirmText',
                required: !1,
                type: { name: 'string' },
              },
              showIcon: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'showIcon',
                required: !1,
                type: { name: 'boolean' },
              },
              footerBackground: {
                defaultValue: null,
                description: '',
                name: 'footerBackground',
                required: !1,
                type: { name: 'boolean' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'ReactNode' },
              },
              variant: {
                defaultValue: { value: 'success' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"danger"' },
                    { value: '"warning"' },
                    { value: '"success"' },
                  ],
                },
              },
              visible: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'visible',
                required: !1,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: { value: 'large' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                    { value: '"xxlarge"' },
                  ],
                },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              overlayStyle: {
                defaultValue: null,
                description: '',
                name: 'overlayStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              contentStyle: {
                defaultValue: null,
                description: '',
                name: 'contentStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              overlayClassName: {
                defaultValue: null,
                description: '',
                name: 'overlayClassName',
                required: !1,
                type: { name: 'string' },
              },
              transition: {
                defaultValue: null,
                description: '',
                name: 'transition',
                required: !1,
                type: { name: 'AnimationTailwindClasses' },
              },
              transitionOverlay: {
                defaultValue: null,
                description: '',
                name: 'transitionOverlay',
                required: !1,
                type: { name: 'AnimationTailwindClasses' },
              },
              triggerElement: {
                defaultValue: null,
                description: '',
                name: 'triggerElement',
                required: !1,
                type: { name: 'ReactNode' },
              },
              header: {
                defaultValue: null,
                description: '',
                name: 'header',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Modal/Modal.tsx#Modal'] = {
              docgenInfo: Modal.__docgenInfo,
              name: 'Modal',
              path: 'src/components/Modal/Modal.tsx#Modal',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Radio/Radio.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return Radio_Radio
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        FormLayout = __webpack_require__(
          './src/lib/Layout/FormLayout/FormLayout.tsx'
        )
      const RadioContext = (0, react.createContext)({
        parentCallback: (e) => {},
        type: '',
        name: '',
        activeId: '',
        parentSize: '',
      })
      var FormContext = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        handler = __webpack_require__('./src/theme/handler.ts')
      function generateUID() {
        var firstPart = (46656 * Math.random()) | 0,
          secondPart = (46656 * Math.random()) | 0
        return (
          ('00000' + firstPart.toString(36)).slice(-3) +
          ('00000' + secondPart.toString(36)).slice(-3)
        )
      }
      var jsx_runtime = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      )
      function RadioGroup(_ref) {
        let {
          id: id,
          layout: layout,
          error: error,
          descriptionText: descriptionText,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          children: children,
          className: className,
          type: type = 'list',
          options: options,
          value: value,
          name: name,
          onChange: onChange,
          size: size = 'medium',
          validation: validation,
          groupClassName: groupClassName,
          labelsLayout: labelsLayout = 'vertical',
        } = _ref
        const [activeId, setActiveId] = (0, react.useState)(''),
          __styles = (0, handler.Z)('radio'),
          {
            formContextOnChange: formContextOnChange,
            values: values,
            errors: errors,
            touched: touched,
            fieldLevelValidation: fieldLevelValidation,
          } = (0, FormContext.G)()
        return (
          values && !value && (value = values[id || name]),
          error ||
            (errors && !error && (error = errors[id || name]),
            (error = touched && touched[id || name] ? error : void 0)),
          (0, react.useEffect)(() => {
            validation && fieldLevelValidation(id, validation(value))
          }, []),
          (0, react.useEffect)(() => {
            setActiveId(value)
          }, [value]),
          (0, jsx_runtime.jsx)('fieldset', {
            name: name,
            className: className,
            children: (0, jsx_runtime.jsx)(FormLayout.l, {
              nonBoxInput: !0,
              label: label,
              afterLabel: afterLabel,
              beforeLabel: beforeLabel,
              labelOptional: labelOptional,
              layout: layout,
              id: id,
              error: error,
              descriptionText: descriptionText,
              size: size,
              labelLayout: labelsLayout,
              children: (0, jsx_runtime.jsx)('div', {
                className: groupClassName || __styles.variants[type].group,
                children: (0, jsx_runtime.jsx)(RadioContext.Provider, {
                  value: {
                    parentCallback: function parentCallback(e) {
                      onChange && onChange(e),
                        formContextOnChange && formContextOnChange(e),
                        validation &&
                          fieldLevelValidation(id, validation(e.target.value)),
                        setActiveId(e.target.id)
                    },
                    type: type,
                    name: name,
                    activeId: activeId,
                    parentSize: size,
                  },
                  children: options
                    ? options.map((option) =>
                        (0, jsx_runtime.jsx)(Radio, {
                          id: option.id,
                          label: option.label,
                          beforeLabel: option.beforeLabel,
                          afterLabel: option.afterLabel,
                          value: option.value,
                          description: option.description,
                        })
                      )
                    : children,
                }),
              }),
            }),
          })
        )
      }
      function Radio(_ref2) {
        let {
          id: id = generateUID(),
          disabled: disabled,
          value: value,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          description: description,
          name: name,
          checked: checked,
          onChange: onChange,
          onFocus: onFocus,
          onBlur: onBlur,
          hidden: hidden = !1,
          size: size = 'medium',
          align: align = 'vertical',
          optionalLabel: optionalLabel,
          addOnBefore: addOnBefore,
        } = _ref2
        const __styles = (0, handler.Z)('radio'),
          inputName = name,
          { handleBlur: handleBlur } = (0, FormContext.G)()
        function handleBlurEvent(e) {
          handleBlur && handleBlur(e), onBlur && onBlur(e)
        }
        return (0, jsx_runtime.jsx)(RadioContext.Consumer, {
          children: (_ref3) => {
            let {
              parentCallback: parentCallback,
              type: type,
              name: name,
              activeId: activeId,
              parentSize: parentSize,
            } = _ref3
            const markupId = id,
              markupName = name || inputName
            size = parentSize || size
            const active =
              activeId === markupId || !!checked || (!1 !== checked && void 0)
            let classes = [
              __styles.variants[type].container.base,
              'list' === type &&
                !hidden &&
                __styles.variants[type].container.size[size],
            ]
            return (
              classes.push(__styles.variants[type].base),
              classes.push(__styles.variants[type].size[size]),
              active
                ? classes.push(__styles.variants[type].active)
                : classes.push(__styles.variants[type].inactive),
              disabled && classes.push(__styles.disabled),
              'list' !== type && (hidden = !0),
              (0, jsx_runtime.jsxs)('label', {
                htmlFor: markupId,
                className: classes.join(' '),
                children: [
                  (0, jsx_runtime.jsx)('input', {
                    id: markupId,
                    name: markupName,
                    type: 'radio',
                    className: [
                      __styles.base,
                      __styles.size[size],
                      hidden && __styles.hidden,
                      __styles.variants[type].radio_offset,
                      '',
                    ].join(' '),
                    checked: active,
                    disabled: disabled,
                    value: value || markupId,
                    onChange: (e) =>
                      (function onInputChange(e) {
                        parentCallback && parentCallback(e),
                          onChange && onChange(e)
                      })(e),
                    onBlur: handleBlurEvent,
                    onFocus: onFocus ? (event) => onFocus(event) : void 0,
                  }),
                  addOnBefore,
                  (0, jsx_runtime.jsxs)('div', {
                    className: [
                      __styles.label.base,
                      __styles.label[size],
                      __styles.variants[type].container.align[align],
                    ].join(' '),
                    children: [
                      beforeLabel &&
                        (0, jsx_runtime.jsx)('span', {
                          className: [
                            __styles.label_before.base,
                            __styles.label_before[size],
                          ].join(' '),
                          children: beforeLabel,
                        }),
                      (0, jsx_runtime.jsx)('span', { children: label }),
                      afterLabel &&
                        (0, jsx_runtime.jsx)('span', {
                          className: [
                            __styles.label_after.base,
                            __styles.label_after[size],
                          ].join(' '),
                          children: afterLabel,
                        }),
                      description &&
                        (0, jsx_runtime.jsx)('p', {
                          className: [
                            __styles.description.base,
                            __styles.description[size],
                          ].join(' '),
                          children: description,
                        }),
                    ],
                  }),
                  optionalLabel &&
                    (0, jsx_runtime.jsx)('div', {
                      className: [
                        __styles.optionalLabel.base,
                        __styles.optionalLabel[size],
                      ].join(' '),
                      children: optionalLabel,
                    }),
                ],
              })
            )
          },
        })
      }
      ;(RadioGroup.displayName = 'RadioGroup'),
        (Radio.displayName = 'Radio'),
        (Radio.Group = RadioGroup)
      var Radio_Radio = Radio
      try {
        ;(Radio.displayName = 'Radio'),
          (Radio.__docgenInfo = {
            description: '',
            displayName: 'Radio',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
              hidden: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              align: {
                defaultValue: { value: 'vertical' },
                description: '',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              optionalLabel: {
                defaultValue: null,
                description: '',
                name: 'optionalLabel',
                required: !1,
                type: { name: 'ReactNode' },
              },
              addOnBefore: {
                defaultValue: null,
                description: '',
                name: 'addOnBefore',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Radio/Radio.tsx#Radio'] = {
              docgenInfo: Radio.__docgenInfo,
              name: 'Radio',
              path: 'src/components/Radio/Radio.tsx#Radio',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Select/Select.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/lib/Layout/FormLayout/FormLayout.tsx'),
        _lib_Layout_InputErrorIcon__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./src/lib/Layout/InputErrorIcon.tsx'),
        _lib_Layout_InputIconContainer__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./src/lib/Layout/InputIconContainer.tsx'),
        _Form_FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const ColLayout = (props) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: '',
          children: props.children,
        })
      function Select(_ref) {
        let {
          autoComplete: autoComplete,
          autofocus: autofocus,
          children: children,
          className: className,
          descriptionText: descriptionText,
          disabled: disabled,
          error: error,
          icon: icon,
          id: id = '',
          inputRef: inputRef,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          layout: layout,
          name: name = '',
          onChange: onChange,
          onFocus: onFocus,
          onBlur: onBlur,
          placeholder: placeholder,
          required: required,
          value: value,
          defaultValue: defaultValue,
          style: style,
          size: size = 'medium',
          borderless: borderless = !1,
          validation: validation,
          ...props
        } = _ref
        const {
          formContextOnChange: formContextOnChange,
          values: values,
          errors: errors,
          handleBlur: handleBlur,
          touched: touched,
          fieldLevelValidation: fieldLevelValidation,
        } = (0, _Form_FormContext__WEBPACK_IMPORTED_MODULE_2__.G)()
        values && !value && (value = values[id]),
          error ||
            (errors && !error && (error = errors[id || name]),
            (error = touched && touched[id || name] ? error : void 0)),
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            validation && fieldLevelValidation(id, validation(value))
          }, [])
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_3__.Z)(
          'select'
        )
        let classesContainer = [__styles.container]
        className && classesContainer.push(className)
        let classes = [__styles.base]
        return (
          error && classes.push(__styles.variants.error),
          error || classes.push(__styles.variants.standard),
          icon && classes.push(__styles.with_icon),
          size && classes.push(__styles.size[size]),
          disabled && classes.push(__styles.disabled),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__.l,
            {
              label: label,
              afterLabel: afterLabel,
              beforeLabel: beforeLabel,
              labelOptional: labelOptional,
              layout: layout,
              id: id,
              error: error,
              descriptionText: descriptionText,
              className: className,
              style: style,
              size: size,
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
                className: __styles.container,
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    'select',
                    {
                      id: id,
                      name: name,
                      autoComplete: autoComplete,
                      autoFocus: autofocus,
                      className: classes.join(' '),
                      onChange: function onInputChange(e) {
                        onChange && onChange(e),
                          formContextOnChange && formContextOnChange(e),
                          validation &&
                            fieldLevelValidation(id, validation(e.target.value))
                      },
                      onFocus: onFocus ? (event) => onFocus(event) : void 0,
                      onBlur: function handleBlurEvent(e) {
                        handleBlur && handleBlur(e), onBlur && onBlur(e)
                      },
                      ref: inputRef,
                      value: value,
                      disabled: disabled,
                      required: required,
                      placeholder: placeholder,
                      ...props,
                      children: children,
                    }
                  ),
                  icon &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _lib_Layout_InputIconContainer__WEBPACK_IMPORTED_MODULE_5__.Z,
                      { icon: icon }
                    ),
                  error &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      'div',
                      {
                        className: __styles.actions_container,
                        children:
                          error &&
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                            _lib_Layout_InputErrorIcon__WEBPACK_IMPORTED_MODULE_6__.Z,
                            { size: size }
                          ),
                      }
                    ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    'span',
                    {
                      className: __styles.chevron_container,
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        'svg',
                        {
                          className: __styles.chevron,
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 20 20',
                          fill: 'currentColor',
                          'aria-hidden': 'true',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                            'path',
                            {
                              fillRule: 'evenodd',
                              d: 'M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z',
                              clipRule: 'evenodd',
                            }
                          ),
                        }
                      ),
                    }
                  ),
                ],
              }),
            }
          )
        )
      }
      function Option(_ref2) {
        let { value: value, children: children, selected: selected } = _ref2
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          'option',
          { value: value, selected: selected, children: children }
        )
      }
      function OptGroup(_ref3) {
        let { label: label, children: children } = _ref3
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          'optgroup',
          { label: label, children: children }
        )
      }
      ;(ColLayout.displayName = 'ColLayout'),
        (Select.displayName = 'Select'),
        (Option.displayName = 'Option'),
        (OptGroup.displayName = 'OptGroup'),
        (Select.Option = Option),
        (Select.OptGroup = OptGroup),
        (__webpack_exports__.ZP = Select)
      try {
        ;(Option.displayName = 'Option'),
          (Option.__docgenInfo = {
            description: '',
            displayName: 'Option',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' },
              },
              selected: {
                defaultValue: null,
                description: '',
                name: 'selected',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Select/Select.tsx#Option'
            ] = {
              docgenInfo: Option.__docgenInfo,
              name: 'Option',
              path: 'src/components/Select/Select.tsx#Option',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(OptGroup.displayName = 'OptGroup'),
          (OptGroup.__docgenInfo = {
            description: '',
            displayName: 'OptGroup',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Select/Select.tsx#OptGroup'
            ] = {
              docgenInfo: OptGroup.__docgenInfo,
              name: 'OptGroup',
              path: 'src/components/Select/Select.tsx#OptGroup',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ColLayout.displayName = 'ColLayout'),
          (ColLayout.__docgenInfo = {
            description: '',
            displayName: 'ColLayout',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Select/Select.tsx#ColLayout'
            ] = {
              docgenInfo: ColLayout.__docgenInfo,
              name: 'ColLayout',
              path: 'src/components/Select/Select.tsx#ColLayout',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Select.displayName = 'Select'),
          (Select.__docgenInfo = {
            description: '',
            displayName: 'Select',
            props: {
              autofocus: {
                defaultValue: null,
                description: '',
                name: 'autofocus',
                required: !1,
                type: { name: 'boolean' },
              },
              descriptionText: {
                defaultValue: null,
                description: '',
                name: 'descriptionText',
                required: !1,
                type: { name: 'string' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'any' },
              },
              inputRef: {
                defaultValue: null,
                description: '',
                name: 'inputRef',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              labelOptional: {
                defaultValue: null,
                description: '',
                name: 'labelOptional',
                required: !1,
                type: { name: 'string' },
              },
              layout: {
                defaultValue: null,
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              reveal: {
                defaultValue: null,
                description: '',
                name: 'reveal',
                required: !1,
                type: { name: 'boolean' },
              },
              actions: {
                defaultValue: null,
                description: '',
                name: 'actions',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
              borderless: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'borderless',
                required: !1,
                type: { name: 'boolean' },
              },
              validation: {
                defaultValue: null,
                description: '',
                name: 'validation',
                required: !1,
                type: { name: '(x: any) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Select/Select.tsx#Select'
            ] = {
              docgenInfo: Select.__docgenInfo,
              name: 'Select',
              path: 'src/components/Select/Select.tsx#Select',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Space.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        T: function () {
          return Space
        },
      })
      __webpack_require__('../../node_modules/react/index.js')
      var _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Space(_ref) {
        let {
          direction: direction,
          size: size = 2,
          className: className,
          block: block,
          style: style,
          minus: minus,
          children: children,
        } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
            'space'
          ),
          classes = [__styles.base]
        return (
          classes.push('vertical' === direction ? __styles.col : __styles.row),
          classes.push(
            __styles[
              'wsb-' +
                (minus ? 'minus-' : '') +
                'space-' +
                ('vertical' === direction ? 'y' : 'x') +
                '-' +
                size
            ]
          ),
          block && classes.push(__styles.block),
          className && classes.push(className),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: classes.join(' '),
            style: style,
            children: children,
          })
        )
      }
      Space.displayName = 'Space'
      try {
        ;(Space.displayName = 'Space'),
          (Space.__docgenInfo = {
            description: '',
            displayName: 'Space',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Space.tsx#Space'] = {
              docgenInfo: Space.__docgenInfo,
              name: 'Space',
              path: 'src/components/Space.tsx#Space',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Tabs/Tabs.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return Tabs_Tabs
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js')
      const TabsContext = (0, react.createContext)({ activeId: '' })
      var index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-tabs/dist/index.module.js'
        ),
        handler = __webpack_require__('./src/theme/handler.ts'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Tabs(_ref) {
        let {
          children: children,
          defaultActiveId: defaultActiveId,
          activeId: activeId,
          type: type = 'pills',
          size: size = 'tiny',
          block: block,
          onChange: onChange,
          onClick: onClick,
          scrollable: scrollable,
          addOnBefore: addOnBefore,
          addOnAfter: addOnAfter,
          listClassNames: listClassNames,
        } = _ref
        const [activeTab, setActiveTab] = (0, react.useState)(
          defaultActiveId ||
            (children && children[0].props ? children[0].props.id : '')
        )
        let __styles = (0, handler.Z)('tabs')
        const active = activeId || activeTab
        function onTabClick(id) {
          const newTabSelected = id !== active
          setActiveTab(id),
            onClick && onClick(id),
            onChange && newTabSelected && onChange(id)
        }
        const listClasses = [__styles[type].list]
        return (
          scrollable && listClasses.push(__styles.scrollable),
          listClassNames && listClasses.push(listClassNames),
          children && !Array.isArray(children) && (children = [children]),
          (0, jsx_runtime.jsxs)(index_module.fC, {
            defaultValue: defaultActiveId,
            value: active,
            className: __styles.base,
            children: [
              (0, jsx_runtime.jsxs)(index_module.aV, {
                className: listClasses.join(' '),
                children: [
                  addOnBefore,
                  children.map((tab) => {
                    const activeMatch = active === tab.props.id,
                      triggerClasses = [
                        __styles[type].base,
                        __styles.size[size],
                      ]
                    return (
                      activeMatch
                        ? triggerClasses.push(__styles[type].active)
                        : triggerClasses.push(__styles[type].inactive),
                      block && triggerClasses.push(__styles.block),
                      (0, jsx_runtime.jsxs)(
                        index_module.xz,
                        {
                          onKeyDown: (e) => {
                            13 === e.keyCode &&
                              (e.preventDefault(), onTabClick(tab.props.id))
                          },
                          onClick: () => onTabClick(tab.props.id),
                          value: tab.props.id,
                          className: triggerClasses.join(' '),
                          children: [
                            tab.props.icon,
                            (0, jsx_runtime.jsx)('span', {
                              children: tab.props.label,
                            }),
                          ],
                        },
                        `${tab.props.id}-tab-button`
                      )
                    )
                  }),
                  addOnAfter,
                ],
              }),
              (0, jsx_runtime.jsx)(TabsContext.Provider, {
                value: { activeId: active },
                children: children,
              }),
            ],
          })
        )
      }
      function Panel(_ref2) {
        let { children: children, id: id } = _ref2,
          __styles = (0, handler.Z)('tabs')
        return (0, jsx_runtime.jsx)(TabsContext.Consumer, {
          children: (_ref3) => {
            let { activeId: activeId } = _ref3
            return (0, jsx_runtime.jsx)(index_module.VY, {
              value: id,
              className: __styles.content,
              children: children,
            })
          },
        })
      }
      ;(Tabs.displayName = 'Tabs'),
        (Panel.displayName = 'Panel'),
        (Tabs.Panel = Panel)
      var Tabs_Tabs = Tabs
      try {
        ;(Panel.displayName = 'Panel'),
          (Panel.__docgenInfo = {
            description: '',
            displayName: 'Panel',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Tabs/Tabs.tsx#Panel'] = {
              docgenInfo: Panel.__docgenInfo,
              name: 'Panel',
              path: 'src/components/Tabs/Tabs.tsx#Panel',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Tabs.displayName = 'Tabs'),
          (Tabs.__docgenInfo = {
            description: '',
            displayName: 'Tabs',
            props: {
              type: {
                defaultValue: { value: 'pills' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"underlined"' },
                    { value: '"cards"' },
                    { value: '"pills"' },
                  ],
                },
              },
              defaultActiveId: {
                defaultValue: null,
                description: '',
                name: 'defaultActiveId',
                required: !1,
                type: { name: 'string' },
              },
              activeId: {
                defaultValue: null,
                description: '',
                name: 'activeId',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'tiny' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
                required: !1,
                type: { name: 'boolean' },
              },
              tabBarGutter: {
                defaultValue: null,
                description: '',
                name: 'tabBarGutter',
                required: !1,
                type: { name: 'number' },
              },
              tabBarStyle: {
                defaultValue: null,
                description: '',
                name: 'tabBarStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: 'any' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: 'any' },
              },
              scrollable: {
                defaultValue: null,
                description: '',
                name: 'scrollable',
                required: !1,
                type: { name: 'boolean' },
              },
              addOnBefore: {
                defaultValue: null,
                description: '',
                name: 'addOnBefore',
                required: !1,
                type: { name: 'ReactNode' },
              },
              addOnAfter: {
                defaultValue: null,
                description: '',
                name: 'addOnAfter',
                required: !1,
                type: { name: 'ReactNode' },
              },
              listClassNames: {
                defaultValue: null,
                description: '',
                name: 'listClassNames',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Tabs/Tabs.tsx#Tabs'] = {
              docgenInfo: Tabs.__docgenInfo,
              name: 'Tabs',
              path: 'src/components/Tabs/Tabs.tsx#Tabs',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Toggle/Toggle.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/lib/Layout/FormLayout/FormLayout.tsx'),
        _Form_FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Toggle(_ref) {
        let {
          disabled: disabled,
          id: id = '',
          name: name = '',
          layout: layout = 'flex',
          error: error,
          descriptionText: descriptionText,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          onChange: onChange,
          onBlur: onBlur,
          onFocus: onFocus,
          onKeyDown: onKeyDown,
          defaultChecked: defaultChecked,
          checked: checked,
          className: className,
          align: align = 'left',
          size: size = 'medium',
          validation: validation,
          labelLayout: labelLayout,
          ...props
        } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
            'toggle'
          ),
          {
            formContextOnChange: formContextOnChange,
            values: values,
            errors: errors,
            handleBlur: handleBlur,
            touched: touched,
            fieldLevelValidation: fieldLevelValidation,
          } = (0, _Form_FormContext__WEBPACK_IMPORTED_MODULE_3__.G)()
        values && !checked && (checked = values[id || name])
        const [intChecked, setIntChecked] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(
            (defaultChecked || checked) ?? !1
          ),
          active = checked ?? intChecked
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
          setIntChecked(active)
        }, []),
          error ||
            (errors && !error && (error = errors[id || name]),
            (error = touched && touched[id || name] ? error : void 0))
        let toggleClasses = [__styles.base, __styles.handle_container[size]]
        active && toggleClasses.push(__styles.active)
        let handleClasses = [__styles.handle.base, __styles.handle[size]]
        return (
          active && handleClasses.push(__styles.handle_active[size]),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__.l,
            {
              className: className,
              label: label,
              afterLabel: afterLabel,
              beforeLabel: beforeLabel,
              labelOptional: labelOptional,
              layout: layout,
              id: id,
              error: error,
              align: align,
              descriptionText: descriptionText,
              size: size,
              labelLayout: labelLayout,
              nonBoxInput: !0,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                'button',
                {
                  type: 'button',
                  id: id,
                  name: name,
                  className: toggleClasses.join(' '),
                  onClick: function onClick() {
                    onChange && onChange(!active), setIntChecked(!intChecked)
                    let event = {}
                    ;(event.target = {
                      type: 'checkbox',
                      name: name,
                      id: id,
                      value: !active,
                      checked: !active,
                    }),
                      formContextOnChange && formContextOnChange(event),
                      validation &&
                        fieldLevelValidation(id, validation(!intChecked))
                  },
                  disabled: disabled,
                  onFocus: onFocus ? (event) => onFocus(event) : void 0,
                  onBlur: function handleBlurEvent(e) {
                    handleBlur && handleBlur(e), onBlur && onBlur(e)
                  },
                  onKeyDown: onKeyDown ? (event) => onKeyDown(event) : void 0,
                  ...props,
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                    'aria-hidden': 'true',
                    className: handleClasses.join(' '),
                  }),
                }
              ),
            }
          )
        )
      }
      ;(Toggle.displayName = 'Toggle'), (__webpack_exports__.Z = Toggle)
      try {
        ;(Toggle.displayName = 'Toggle'),
          (Toggle.__docgenInfo = {
            description: '',
            displayName: 'Toggle',
            props: {
              name: {
                defaultValue: { value: '' },
                description: '',
                name: 'name',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              layout: {
                defaultValue: { value: 'flex' },
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"vertical"' },
                    { value: '"horizontal"' },
                    { value: '"flex"' },
                  ],
                },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              descriptionText: {
                defaultValue: null,
                description: '',
                name: 'descriptionText',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              labelOptional: {
                defaultValue: null,
                description: '',
                name: 'labelOptional',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'any' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              checked: {
                defaultValue: null,
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              align: {
                defaultValue: { value: 'left' },
                description: '',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"left"' }, { value: '"right"' }],
                },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"medium"' },
                    { value: '"tiny"' },
                    { value: '"small"' },
                    { value: '"large"' },
                    { value: '"xlarge"' },
                  ],
                },
              },
              labelLayout: {
                defaultValue: null,
                description: '',
                name: 'labelLayout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              validation: {
                defaultValue: null,
                description: '',
                name: 'validation',
                required: !1,
                type: { name: '(x: any) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Toggle/Toggle.tsx#Toggle'
            ] = {
              docgenInfo: Toggle.__docgenInfo,
              name: 'Toggle',
              path: 'src/components/Toggle/Toggle.tsx#Toggle',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
