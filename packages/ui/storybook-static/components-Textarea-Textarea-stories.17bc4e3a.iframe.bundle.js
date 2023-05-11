;(self.webpackChunkui = self.webpackChunkui || []).push([
  [4679],
  {
    '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Textarea/Textarea.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.id,
          '.form-textarea:disabled {\n\n    cursor: not-allowed;\n\n    background-color: var(--colors-gray1)\n}\n\n.form-textarea--error {\n\n    border-color: var(--colors-red5)\n}\n\n.form-textarea--borderless {\n\n    border-style: none\n}\n',
          '',
        ]),
          (module.exports = exports)
      },
    './src/components/Textarea/Textarea.stories.js': function (
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
            return Textarea_stories
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var prop_types = __webpack_require__(
          '../../node_modules/prop-types/index.js'
        ),
        prop_types_default = __webpack_require__.n(prop_types),
        jsx_runtime =
          (__webpack_require__('./src/components/Textarea/Textarea.css'),
          __webpack_require__('../../node_modules/react/jsx-runtime.js'))
      const Textarea_Textarea = (_ref) => {
        let {
          className: className = '',
          isError: isError = !1,
          rows: rows = 3,
          children: children,
          borderless: borderless = !1,
          ...props
        } = _ref
        const classes = []
        return (
          isError && classes.push('form-textarea--error'),
          borderless && classes.push('form-textarea--borderless'),
          (0, jsx_runtime.jsx)('textarea', {
            className: `form-textarea border-solid ${classes.join(
              ' '
            )} ${className}`,
            rows: rows,
            ...props,
          })
        )
      }
      ;(Textarea_Textarea.displayName = 'Textarea'),
        (Textarea_Textarea.propTypes = {
          isError: prop_types_default().bool,
          className: prop_types_default().string,
          borderless: prop_types_default().bool,
        }),
        (Textarea_Textarea.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Textarea',
          props: {
            className: {
              defaultValue: { value: "''", computed: !1 },
              description: '',
              type: { name: 'string' },
              required: !1,
            },
            isError: {
              defaultValue: { value: 'false', computed: !1 },
              description: '',
              type: { name: 'bool' },
              required: !1,
            },
            rows: { defaultValue: { value: '3', computed: !1 }, required: !1 },
            borderless: {
              defaultValue: { value: 'false', computed: !1 },
              description: '',
              type: { name: 'bool' },
              required: !1,
            },
          },
        })
      var components_Textarea_Textarea = Textarea_Textarea,
        Textarea_stories = {
          title: 'Archive/Textarea',
          component: components_Textarea_Textarea,
        }
      const Default = (args) =>
        (0, jsx_runtime.jsx)(components_Textarea_Textarea, { ...args })
      ;(Default.displayName = 'Default'),
        (Default.args = { placeholder: 'Type text here ...', disabled: !1 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: 'args => <Textarea {...args} />',
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
    './src/components/Textarea/Textarea.css': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Textarea/Textarea.css'
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
