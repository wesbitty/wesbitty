'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [5270],
  {
    './src/stories/Badge.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          allBadges: function () {
            return allBadges
          },
          large: function () {
            return large
          },
          withColor: function () {
            return withColor
          },
          withCustomClassNames: function () {
            return withCustomClassNames
          },
          withDot: function () {
            return withDot
          },
          withDotLarge: function () {
            return withDotLarge
          },
        })
      var _components_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Badge.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__('../../node_modules/react/index.js'),
          __webpack_require__('../../node_modules/react/jsx-runtime.js'))
      __webpack_exports__.default = {
        title: 'Elements/Badge',
        component: _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
      }
      const colors = [
          'brand',
          'scale',
          'tomato',
          'red',
          'crimson',
          'pink',
          'plum',
          'purple',
          'violet',
          'indigo',
          'blue',
          'cyan',
          'teal',
          'green',
          'grass',
          'brown',
          'orange',
          'sky',
          'mint',
          'lime',
          'yellow',
          'amber',
          'gold',
          'bronze',
          'gray',
          'mauve',
          'slate',
          'sage',
          'olive',
          'sand',
        ],
        sizes = ['small', 'large'],
        Default = (args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
            { ...args, children: 'Hello world' }
          )
      Default.displayName = 'Default'
      const withColor = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
          { ...args, children: 'Hello world' }
        )
      withColor.displayName = 'withColor'
      const withDot = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
          { ...args, children: 'Hello world' }
        )
      withDot.displayName = 'withDot'
      const large = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
          { ...args, children: 'Hello world' }
        )
      large.displayName = 'large'
      const withDotLarge = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
          { ...args, children: 'Hello world' }
        )
      withDotLarge.displayName = 'withDotLarge'
      const withCustomClassNames = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
          { ...args, children: 'Hello world' }
        )
      withCustomClassNames.displayName = 'withCustomClassNames'
      const allBadges = () =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              'div',
              {
                className: 'flex flex-row gap-6 mx-auto my-4',
                children: sizes.map((size, sizeIndex) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          'h3',
                          { className: 'text-scale-900', children: size }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          'div',
                          {
                            className: 'flex flex-col gap-2',
                            children: colors.map((x, colorIndex) =>
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                _components_Badge__WEBPACK_IMPORTED_MODULE_2__.C,
                                {
                                  size: sizes[sizeIndex],
                                  color: colors[colorIndex],
                                  children: 'Supabase',
                                }
                              )
                            ),
                          }
                        ),
                      ],
                    }
                  )
                ),
              }
            ),
          }
        )
      ;(Default.args = {}),
        (withColor.args = { color: 'red' }),
        (withDot.args = { dot: !0 }),
        (large.args = { size: 'large' }),
        (withDotLarge.args = { size: 'large', dot: !0 }),
        (withCustomClassNames.args = { className: 'border-teal-100 border-2' }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Badge {...args}>Hello world</Badge>',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (withColor.parameters = {
          ...withColor.parameters,
          docs: {
            ...withColor.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Badge {...args}>Hello world</Badge>',
              ...withColor.parameters?.docs?.source,
            },
          },
        }),
        (withDot.parameters = {
          ...withDot.parameters,
          docs: {
            ...withDot.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Badge {...args}>Hello world</Badge>',
              ...withDot.parameters?.docs?.source,
            },
          },
        }),
        (large.parameters = {
          ...large.parameters,
          docs: {
            ...large.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Badge {...args}>Hello world</Badge>',
              ...large.parameters?.docs?.source,
            },
          },
        }),
        (withDotLarge.parameters = {
          ...withDotLarge.parameters,
          docs: {
            ...withDotLarge.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Badge {...args}>Hello world</Badge>',
              ...withDotLarge.parameters?.docs?.source,
            },
          },
        }),
        (withCustomClassNames.parameters = {
          ...withCustomClassNames.parameters,
          docs: {
            ...withCustomClassNames.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Badge {...args}>Hello world</Badge>',
              ...withCustomClassNames.parameters?.docs?.source,
            },
          },
        }),
        (allBadges.parameters = {
          ...allBadges.parameters,
          docs: {
            ...allBadges.parameters?.docs,
            source: {
              originalSource:
                '() => <>\n    <div className="flex flex-row gap-6 mx-auto my-4">\n      {sizes.map((size, sizeIndex) => <>\n          <h3 className="text-scale-900">{size}</h3>\n          <div className="flex flex-col gap-2">\n            {colors.map((x, colorIndex) =>\n        // @ts-ignore\n        <Badge size={sizes[sizeIndex]} color={colors[colorIndex]}>\n                Supabase\n              </Badge>)}\n          </div>\n        </>)}\n    </div>\n  </>',
              ...allBadges.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'withColor',
        'withDot',
        'large',
        'withDotLarge',
        'withCustomClassNames',
        'allBadges',
      ]
      try {
        ;(Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Badge.stories.tsx#Default'] =
              {
                docgenInfo: Default.__docgenInfo,
                name: 'Default',
                path: 'src/stories/Badge.stories.tsx#Default',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withColor.displayName = 'withColor'),
          (withColor.__docgenInfo = {
            description: '',
            displayName: 'withColor',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Badge.stories.tsx#withColor'
            ] = {
              docgenInfo: withColor.__docgenInfo,
              name: 'withColor',
              path: 'src/stories/Badge.stories.tsx#withColor',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withDot.displayName = 'withDot'),
          (withDot.__docgenInfo = {
            description: '',
            displayName: 'withDot',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Badge.stories.tsx#withDot'] =
              {
                docgenInfo: withDot.__docgenInfo,
                name: 'withDot',
                path: 'src/stories/Badge.stories.tsx#withDot',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(large.displayName = 'large'),
          (large.__docgenInfo = {
            description: '',
            displayName: 'large',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Badge.stories.tsx#large'] = {
              docgenInfo: large.__docgenInfo,
              name: 'large',
              path: 'src/stories/Badge.stories.tsx#large',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withDotLarge.displayName = 'withDotLarge'),
          (withDotLarge.__docgenInfo = {
            description: '',
            displayName: 'withDotLarge',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Badge.stories.tsx#withDotLarge'
            ] = {
              docgenInfo: withDotLarge.__docgenInfo,
              name: 'withDotLarge',
              path: 'src/stories/Badge.stories.tsx#withDotLarge',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withCustomClassNames.displayName = 'withCustomClassNames'),
          (withCustomClassNames.__docgenInfo = {
            description: '',
            displayName: 'withCustomClassNames',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Badge.stories.tsx#withCustomClassNames'
            ] = {
              docgenInfo: withCustomClassNames.__docgenInfo,
              name: 'withCustomClassNames',
              path: 'src/stories/Badge.stories.tsx#withCustomClassNames',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Badge.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        C: function () {
          return Badge
        },
      })
      var _theme_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Badge(_ref) {
        let {
          color: color = 'brand',
          children: children,
          size: size,
          dot: dot,
          className: className,
        } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_1__.Z)(
          'badge'
        )
        let classes = [__styles.base]
        return (
          color && classes.push(__styles.color[color]),
          'large' === size && classes.push(__styles.size.large),
          className && classes.push(className),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
            className: classes.join(' '),
            children: [
              dot &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                  className: `${__styles.dot} ${__styles.color[color]}`,
                  fill: 'currentColor',
                  viewBox: '0 0 8 8',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'circle',
                    { cx: '4', cy: '4', r: '3' }
                  ),
                }),
              children,
            ],
          })
        )
      }
      Badge.displayName = 'Badge'
      try {
        ;(Badge.displayName = 'Badge'),
          (Badge.__docgenInfo = {
            description: '',
            displayName: 'Badge',
            props: {
              color: {
                defaultValue: { value: 'brand' },
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"blue"' },
                    { value: '"red"' },
                    { value: '"brand"' },
                    { value: '"scale"' },
                    { value: '"tomato"' },
                    { value: '"crimson"' },
                    { value: '"pink"' },
                    { value: '"plum"' },
                    { value: '"purple"' },
                    { value: '"violet"' },
                    { value: '"indigo"' },
                    { value: '"cyan"' },
                    { value: '"teal"' },
                    { value: '"green"' },
                    { value: '"grass"' },
                    { value: '"brown"' },
                    { value: '"orange"' },
                    { value: '"sky"' },
                    { value: '"mint"' },
                    { value: '"lime"' },
                    { value: '"yellow"' },
                    { value: '"amber"' },
                    { value: '"gold"' },
                    { value: '"bronze"' },
                    { value: '"gray"' },
                    { value: '"mauve"' },
                    { value: '"slate"' },
                    { value: '"sage"' },
                    { value: '"olive"' },
                    { value: '"sand"' },
                  ],
                },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"small"' }, { value: '"large"' }],
                },
              },
              dot: {
                defaultValue: null,
                description: '',
                name: 'dot',
                required: !1,
                type: { name: 'boolean' },
              },
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
            (STORYBOOK_REACT_CLASSES['src/components/Badge.tsx#Badge'] = {
              docgenInfo: Badge.__docgenInfo,
              name: 'Badge',
              path: 'src/components/Badge.tsx#Badge',
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
