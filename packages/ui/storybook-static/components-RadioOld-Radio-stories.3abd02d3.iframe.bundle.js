;(self.webpackChunkui = self.webpackChunkui || []).push([
  [6622],
  {
    '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./src/components/RadioOld/Radio.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([module.id, '', '']),
          (module.exports = exports)
      },
    './src/components/RadioOld/Radio.stories.js': function (
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
            return Radio_stories
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var prop_types = __webpack_require__(
          '../../node_modules/prop-types/index.js'
        ),
        prop_types_default = __webpack_require__.n(prop_types),
        jsx_runtime =
          (__webpack_require__('./src/components/RadioOld/Radio.css'),
          __webpack_require__('../../node_modules/react/jsx-runtime.js'))
      const Radio_Radio = (_ref) => {
        let {
          className: className = '',
          label: label = '',
          containerClassName: containerClassName = '',
          children: children,
          ...props
        } = _ref
        return (0, jsx_runtime.jsxs)('label', {
          className: `inline-flex items-center ${containerClassName}`,
          children: [
            (0, jsx_runtime.jsx)('input', {
              type: 'radio',
              className: `form-radio border-solid h-4 w-4 ${className}`,
              ...props,
            }),
            (0, jsx_runtime.jsx)('span', {
              className: 'ml-2',
              children: label,
            }),
          ],
        })
      }
      ;(Radio_Radio.displayName = 'Radio'),
        (Radio_Radio.propTypes = {
          label: prop_types_default().string,
          className: prop_types_default().string,
        }),
        (Radio_Radio.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Radio',
          props: {
            className: {
              defaultValue: { value: "''", computed: !1 },
              description: '',
              type: { name: 'string' },
              required: !1,
            },
            label: {
              defaultValue: { value: "''", computed: !1 },
              description: '',
              type: { name: 'string' },
              required: !1,
            },
            containerClassName: {
              defaultValue: { value: "''", computed: !1 },
              required: !1,
            },
          },
        })
      var RadioOld_Radio = Radio_Radio,
        Radio_stories = { title: 'Archive/Radio', component: RadioOld_Radio }
      const Default = (args) =>
        (0, jsx_runtime.jsxs)('div', {
          className: 'block font-sans',
          children: [
            (0, jsx_runtime.jsx)('div', {
              children: (0, jsx_runtime.jsx)(RadioOld_Radio, {
                name: 'radio-group',
                label: 'JavaScript',
                ...args,
              }),
            }),
            (0, jsx_runtime.jsx)('div', {
              children: (0, jsx_runtime.jsx)(RadioOld_Radio, {
                name: 'radio-group',
                label: 'TypeScript',
                ...args,
              }),
            }),
            (0, jsx_runtime.jsx)('div', {
              children: (0, jsx_runtime.jsx)(RadioOld_Radio, {
                name: 'radio-group',
                label: 'ReScript',
                ...args,
              }),
            }),
          ],
        })
      ;(Default.displayName = 'Default'),
        (Default.args = { disabled: !1 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                'args => <div className="block font-sans">\n    <div>\n      <Radio name="radio-group" label="JavaScript" {...args} />\n    </div>\n    <div>\n      <Radio name="radio-group" label="TypeScript" {...args} />\n    </div>\n    <div>\n      <Radio name="radio-group" label="ReScript" {...args} />\n    </div>\n  </div>',
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
    './src/components/RadioOld/Radio.css': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./src/components/RadioOld/Radio.css'
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
