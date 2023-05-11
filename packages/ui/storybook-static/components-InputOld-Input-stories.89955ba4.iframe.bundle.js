;(self.webpackChunkui = self.webpackChunkui || []).push([
  [7930],
  {
    '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./src/components/InputOld/Input.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.id,
          '.form-input:disabled {\n\n    cursor: not-allowed;\n\n    background-color: var(--colors-gray1)\n}\n\n.form-input--small {\n\n    padding-top: 0.25rem;\n\n    padding-bottom: 0.25rem;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.form-input--medium {\n\n    font-size: 1rem;\n\n    line-height: 1.5rem\n}\n\n.form-input--error {\n\n    border-color: var(--colors-red5)\n}\n',
          '',
        ]),
          (module.exports = exports)
      },
    './src/components/InputOld/Input.stories.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          default: function () {
            return Input_stories
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var prop_types = __webpack_require__(
          '../../node_modules/prop-types/index.js'
        ),
        prop_types_default = __webpack_require__.n(prop_types),
        jsx_runtime =
          (__webpack_require__('./src/components/InputOld/Input.css'),
          __webpack_require__('../../node_modules/react/jsx-runtime.js'))
      const Input_Input = (_ref) => {
        let {
          className: className = '',
          type: type = 'text',
          size: size = 'medium',
          isError: isError = !1,
          children: children,
          ...props
        } = _ref
        const classes = []
        if (size) {
          const sizeClasses = {
            small: 'form-input--small',
            medium: 'form-input--medium',
          }
          classes.push(sizeClasses[size])
        }
        return (
          isError && classes.push('form-input--error'),
          (0, jsx_runtime.jsx)('input', {
            type: type,
            className: `form-input border-solid ${classes.join(
              ' '
            )} ${className}`,
            ...props,
          })
        )
      }
      ;(Input_Input.displayName = 'Input'),
        (Input_Input.propTypes = {
          size: prop_types_default().oneOf(['small', 'medium']),
          isError: prop_types_default().bool,
          className: prop_types_default().string,
        }),
        (Input_Input.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Input',
          props: {
            className: {
              defaultValue: { value: "''", computed: !1 },
              description: '',
              type: { name: 'string' },
              required: !1,
            },
            type: {
              defaultValue: { value: "'text'", computed: !1 },
              required: !1,
            },
            size: {
              defaultValue: { value: "'medium'", computed: !1 },
              description: '',
              type: {
                name: 'enum',
                value: [
                  { value: "'small'", computed: !1 },
                  { value: "'medium'", computed: !1 },
                ],
              },
              required: !1,
            },
            isError: {
              defaultValue: { value: 'false', computed: !1 },
              description: '',
              type: { name: 'bool' },
              required: !1,
            },
          },
        })
      var InputOld_Input = Input_Input,
        Input_stories = {
          title: 'Archive/Input Old',
          component: InputOld_Input,
        }
      const Default = (args) =>
        (0, jsx_runtime.jsx)(InputOld_Input, { ...args })
      ;(Default.displayName = 'Default'),
        (Default.args = { placeholder: 'Type text here ...', disabled: !1 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: 'args => <Input {...args} />',
              ...Default.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = ['Default']
      Default.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Default',
      }
    },
    './src/components/InputOld/Input.css': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./src/components/InputOld/Input.css'
        )
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.id, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
  },
])
