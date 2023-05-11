'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [2228],
  {
    './src/components/Toggle/Toggle.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: function () {
            return Primary
          },
          Wide: function () {
            return Wide
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          checkedDefault: function () {
            return checkedDefault
          },
          noLabel: function () {
            return noLabel
          },
          size: function () {
            return size
          },
          withBeforeAndAfterLabel: function () {
            return withBeforeAndAfterLabel
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Toggle/Toggle.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      __webpack_exports__.default = {
        title: 'Data Input/Toggle',
        component: ___WEBPACK_IMPORTED_MODULE_2__.Z,
        argTypes: { label: { control: 'text' } },
      }
      const Primary = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      Primary.displayName = 'Primary'
      const Wide = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      Wide.displayName = 'Wide'
      const checkedDefault = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      checkedDefault.displayName = 'checkedDefault'
      const noLabel = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      noLabel.displayName = 'noLabel'
      const withBeforeAndAfterLabel = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      withBeforeAndAfterLabel.displayName = 'withBeforeAndAfterLabel'
      const size = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      ;(size.displayName = 'size'),
        (Primary.args = {
          descriptionText: 'This is optional description',
          disabled: !1,
          error: '',
          label: "Get insights across your organization's repositories",
          labelOptional:
            'Star history, issue tracking, and more to come repository.surf organization',
          name: 'radiogroup-example',
        }),
        (Wide.args = {
          descriptionText: 'This is optional description',
          disabled: !1,
          error: '',
          label: "Get insights across your organization's repositories",
          labelOptional:
            'Star history, issue tracking, and more to come repository.surf organization',
          name: 'radiogroup-example',
          layout: 'wide',
        }),
        (checkedDefault.args = {
          defaultChecked: !0,
          descriptionText: 'This is optional description',
          label: 'Radio group main label',
          labelOptional: 'This is an optional label',
        }),
        (noLabel.args = {
          active: !0,
          disabled: !1,
          error: '',
          name: 'radiogroup-example',
          layout: 'horizontal',
        }),
        (withBeforeAndAfterLabel.args = {
          label: 'Label',
          beforeLabel: 'Before : ',
          afterLabel: ' : After',
        }),
        (size.args = { label: 'Try different sizes', size: 'tiny' }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...Primary.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Toggle {...args} />',
              ...Primary.parameters?.docs?.source,
            },
          },
        }),
        (Wide.parameters = {
          ...Wide.parameters,
          docs: {
            ...Wide.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Toggle {...args} />',
              ...Wide.parameters?.docs?.source,
            },
          },
        }),
        (checkedDefault.parameters = {
          ...checkedDefault.parameters,
          docs: {
            ...checkedDefault.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Toggle {...args} />',
              ...checkedDefault.parameters?.docs?.source,
            },
          },
        }),
        (noLabel.parameters = {
          ...noLabel.parameters,
          docs: {
            ...noLabel.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Toggle {...args} />',
              ...noLabel.parameters?.docs?.source,
            },
          },
        }),
        (withBeforeAndAfterLabel.parameters = {
          ...withBeforeAndAfterLabel.parameters,
          docs: {
            ...withBeforeAndAfterLabel.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Toggle {...args} />',
              ...withBeforeAndAfterLabel.parameters?.docs?.source,
            },
          },
        }),
        (size.parameters = {
          ...size.parameters,
          docs: {
            ...size.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Toggle {...args} />',
              ...size.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Primary',
        'Wide',
        'checkedDefault',
        'noLabel',
        'withBeforeAndAfterLabel',
        'size',
      ]
      try {
        ;(Primary.displayName = 'Primary'),
          (Primary.__docgenInfo = {
            description: '',
            displayName: 'Primary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Toggle/Toggle.stories.tsx#Primary'
            ] = {
              docgenInfo: Primary.__docgenInfo,
              name: 'Primary',
              path: 'src/components/Toggle/Toggle.stories.tsx#Primary',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Wide.displayName = 'Wide'),
          (Wide.__docgenInfo = {
            description: '',
            displayName: 'Wide',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Toggle/Toggle.stories.tsx#Wide'
            ] = {
              docgenInfo: Wide.__docgenInfo,
              name: 'Wide',
              path: 'src/components/Toggle/Toggle.stories.tsx#Wide',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(checkedDefault.displayName = 'checkedDefault'),
          (checkedDefault.__docgenInfo = {
            description: '',
            displayName: 'checkedDefault',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Toggle/Toggle.stories.tsx#checkedDefault'
            ] = {
              docgenInfo: checkedDefault.__docgenInfo,
              name: 'checkedDefault',
              path: 'src/components/Toggle/Toggle.stories.tsx#checkedDefault',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(noLabel.displayName = 'noLabel'),
          (noLabel.__docgenInfo = {
            description: '',
            displayName: 'noLabel',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Toggle/Toggle.stories.tsx#noLabel'
            ] = {
              docgenInfo: noLabel.__docgenInfo,
              name: 'noLabel',
              path: 'src/components/Toggle/Toggle.stories.tsx#noLabel',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withBeforeAndAfterLabel.displayName = 'withBeforeAndAfterLabel'),
          (withBeforeAndAfterLabel.__docgenInfo = {
            description: '',
            displayName: 'withBeforeAndAfterLabel',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Toggle/Toggle.stories.tsx#withBeforeAndAfterLabel'
            ] = {
              docgenInfo: withBeforeAndAfterLabel.__docgenInfo,
              name: 'withBeforeAndAfterLabel',
              path: 'src/components/Toggle/Toggle.stories.tsx#withBeforeAndAfterLabel',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(size.displayName = 'size'),
          (size.__docgenInfo = {
            description: '',
            displayName: 'size',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Toggle/Toggle.stories.tsx#size'
            ] = {
              docgenInfo: size.__docgenInfo,
              name: 'size',
              path: 'src/components/Toggle/Toggle.stories.tsx#size',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Form/FormContext.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        G: function () {
          return useFormContext
        },
        o: function () {
          return FormContextProvider
        },
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const FormContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
          {
            formContextOnChange: null,
            values: null,
            errors: null,
            handleBlur: null,
            touched: null,
            fieldLevelValidation: null,
          }
        ),
        FormContextProvider = (props) => {
          const {
              formContextOnChange: formContextOnChange,
              values: values,
              errors: errors,
              handleBlur: handleBlur,
              touched: touched,
              fieldLevelValidation: fieldLevelValidation,
            } = props,
            value = {
              formContextOnChange: formContextOnChange,
              values: values,
              errors: errors,
              handleBlur: handleBlur,
              touched: touched,
              fieldLevelValidation: fieldLevelValidation,
            }
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            FormContext.Provider,
            { value: value, children: props.children }
          )
        }
      FormContextProvider.displayName = 'FormContextProvider'
      const useFormContext = () => {
        const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
          FormContext
        )
        if (void 0 === context)
          throw new Error(
            'useFormContextOnChange must be used within a FormContextProvider.'
          )
        return context
      }
      try {
        ;(FormContextProvider.displayName = 'FormContextProvider'),
          (FormContextProvider.__docgenInfo = {
            description: '',
            displayName: 'FormContextProvider',
            props: {
              formContextOnChange: {
                defaultValue: null,
                description: '',
                name: 'formContextOnChange',
                required: !0,
                type: { name: 'any' },
              },
              values: {
                defaultValue: null,
                description: '',
                name: 'values',
                required: !0,
                type: { name: 'any' },
              },
              errors: {
                defaultValue: null,
                description: '',
                name: 'errors',
                required: !0,
                type: { name: 'any' },
              },
              handleBlur: {
                defaultValue: null,
                description: '',
                name: 'handleBlur',
                required: !0,
                type: { name: 'FocusEventHandler<Element>' },
              },
              touched: {
                defaultValue: null,
                description: '',
                name: 'touched',
                required: !0,
                type: { name: 'any' },
              },
              fieldLevelValidation: {
                defaultValue: null,
                description: '',
                name: 'fieldLevelValidation',
                required: !0,
                type: { name: 'any' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Form/FormContext.tsx#FormContextProvider'
            ] = {
              docgenInfo: FormContextProvider.__docgenInfo,
              name: 'FormContextProvider',
              path: 'src/components/Form/FormContext.tsx#FormContextProvider',
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
    './src/lib/Layout/FormLayout/FormLayout.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        l: function () {
          return FormLayout
        },
      })
      __webpack_require__('../../node_modules/react/index.js')
      var _theme_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/default.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function FormLayout(_ref) {
        let {
          align: align = 'left',
          children: children,
          className: className,
          descriptionText: descriptionText,
          error: error,
          id: id,
          label: label,
          labelOptional: labelOptional,
          layout: layout = 'vertical',
          style: style,
          labelLayout: labelLayout,
          responsive: responsive = !0,
          size: size = 'medium',
          beforeLabel: beforeLabel,
          afterLabel: afterLabel,
          nonBoxInput: nonBoxInput = !label,
        } = _ref
        const __styles =
            _theme_default__WEBPACK_IMPORTED_MODULE_2__.Z.form_layout,
          flex = 'flex' === layout
        let containerClasses = []
        containerClasses.push(__styles.size[size])
        let labelContainerClasses = [],
          dataInputContainerClasses = []
        'horizontal' === layout || labelLayout || flex
          ? 'horizontal' === labelLayout
            ? labelContainerClasses.push(__styles.labels_horizontal_layout)
            : labelContainerClasses.push(__styles.labels_vertical_layout)
          : labelContainerClasses.push(__styles.labels_horizontal_layout),
          'horizontal' !== layout
            ? dataInputContainerClasses.push(
                __styles.data_input_horizontal_layout
              )
            : (dataInputContainerClasses.push(
                __styles.data_input_vertical_layout
              ),
              'right' === align &&
                dataInputContainerClasses.push(
                  __styles.data_input_vertical_layout__align_right
                )),
          flex
            ? (containerClasses.push(__styles.flex[align].base),
              'left' === align &&
                (labelContainerClasses.push(__styles.flex.left.labels),
                dataInputContainerClasses.push(__styles.flex.left.data_input)),
              'right' === align &&
                (labelContainerClasses.push(__styles.flex.right.labels),
                dataInputContainerClasses.push(__styles.flex.right.data_input)))
            : containerClasses.push(
                __styles.container,
                responsive ? __styles.responsive : __styles.non_responsive
              ),
          className && containerClasses.push(className)
        const labelled = Boolean(label || beforeLabel || afterLabel),
          renderError = (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            'p',
            {
              'data-state': error ? 'show' : 'hide',
              className: [__styles.error.base, __styles.error.size[size]].join(
                ' '
              ),
              children: error,
            }
          ),
          renderDescription =
            descriptionText &&
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', {
              className: [
                __styles.description.base,
                __styles.description.size[size],
              ].join(' '),
              id: id + '-description',
              children: descriptionText,
            })
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
          className: containerClasses.join(' '),
          children: [
            flex &&
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                className: __styles.flex[align].content,
                children: children,
              }),
            labelled || labelOptional || 'horizontal' === layout
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                  'div',
                  {
                    className: labelContainerClasses.join(' '),
                    children: [
                      labelled &&
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                          'label',
                          {
                            className: [
                              __styles.label.base,
                              __styles.label.size[size],
                              'break-all',
                            ].join(' '),
                            htmlFor: id,
                            children: [
                              beforeLabel &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  'span',
                                  {
                                    className: [
                                      __styles.label_before.base,
                                      __styles.label_before.size[size],
                                    ].join(' '),
                                    id: id + '-before',
                                    children: beforeLabel,
                                  }
                                ),
                              label,
                              afterLabel &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  'span',
                                  {
                                    className: [
                                      __styles.label_after.base,
                                      __styles.label_after.size[size],
                                    ].join(' '),
                                    id: id + '-after',
                                    children: afterLabel,
                                  }
                                ),
                            ],
                          }
                        ),
                      labelOptional &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          'span',
                          {
                            className: [
                              __styles.label_optional.base,
                              __styles.label_optional.size[size],
                            ].join(' '),
                            id: id + '-optional',
                            children: labelOptional,
                          }
                        ),
                      flex &&
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                          { children: [renderDescription, renderError] }
                        ),
                    ],
                  }
                )
              : null,
            !flex &&
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                className: dataInputContainerClasses.join(' '),
                style: style,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        'div',
                        {
                          className:
                            nonBoxInput && label && 'vertical' === layout
                              ? __styles.non_box_data_input_spacing_vertical
                              : nonBoxInput && label && 'horizontal' === layout
                              ? __styles.non_box_data_input_spacing_horizontal
                              : '',
                          children: children,
                        }
                      ),
                      renderError,
                      renderDescription,
                    ],
                  }
                ),
              }),
          ],
        })
      }
      FormLayout.displayName = 'FormLayout'
      try {
        ;(FormLayout.displayName = 'FormLayout'),
          (FormLayout.__docgenInfo = {
            description: '',
            displayName: 'FormLayout',
            props: {
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
                type: { name: 'ReactNode' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'ReactNode' },
              },
              id: {
                defaultValue: null,
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
                type: { name: 'ReactNode' },
              },
              labelOptional: {
                defaultValue: null,
                description: '',
                name: 'labelOptional',
                required: !1,
                type: { name: 'ReactNode' },
              },
              layout: {
                defaultValue: { value: 'vertical' },
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
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              responsive: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'responsive',
                required: !1,
                type: { name: 'boolean' },
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
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
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
              nonBoxInput: {
                defaultValue: { value: 'label ? false : true' },
                description: '',
                name: 'nonBoxInput',
                required: !1,
                type: { name: 'boolean' },
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Layout/FormLayout/FormLayout.tsx#FormLayout'
            ] = {
              docgenInfo: FormLayout.__docgenInfo,
              name: 'FormLayout',
              path: 'src/lib/Layout/FormLayout/FormLayout.tsx#FormLayout',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/theme/handler.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return styleHandler
        },
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/theme/provider.tsx'
        ),
        ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/default.ts'
        )
      function styleHandler(target) {
        let {
          theme: { [target]: __styles },
        } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
          ___WEBPACK_IMPORTED_MODULE_1__.N
        )
        return (
          __styles || (__styles = ___WEBPACK_IMPORTED_MODULE_2__.Z.button),
          (__styles = JSON.stringify(__styles)
            .replace(/\\n/g, '')
            .replace(/\s\s+/g, ' ')),
          (__styles = JSON.parse(__styles)),
          __styles
        )
      }
    },
  },
])
