'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [7518],
  {
    './src/components/Card/Card.stories.tsx': function (
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
          withCover: function () {
            return withCover
          },
          withHover: function () {
            return withHover
          },
          withMeta: function () {
            return withMeta
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Typography/index.tsx'
        ),
        ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Card/Card.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      __webpack_exports__.default = {
        title: 'Displays/Card',
        component: ___WEBPACK_IMPORTED_MODULE_2__.Z,
      }
      const Default = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            ...args,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Title,
                { level: 5, children: 'Card content' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Title,
                { level: 5, children: 'Card content' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Title,
                { level: 5, children: 'Card content' }
              ),
            ],
          }
        )
      Default.displayName = 'Default'
      const withCover = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            ...args,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Text,
                { type: 'secondary', children: 'Sub title here' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Title,
                { level: 3, children: 'To Do List with Vue.JS' }
              ),
            ],
          }
        )
      withCover.displayName = 'withCover'
      const withMeta = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            ...args,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              ___WEBPACK_IMPORTED_MODULE_2__.Z.Meta,
              {
                title: 'To Do List with Vue.JS',
                description: 'To Do List with Vue.JS',
              }
            ),
          }
        )
      withMeta.displayName = 'withMeta'
      const withHover = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            ...args,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              ___WEBPACK_IMPORTED_MODULE_2__.Z.Meta,
              {
                title: 'To Do List with Vue.JS',
                description: 'To Do List with Vue.JS',
              }
            ),
          }
        )
      ;(withHover.displayName = 'withHover'),
        (Default.args = {
          title: 'I am a title',
          titleExtra: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Link,
            { children: 'Learn more' }
          ),
        }),
        (withCover.args = {
          cover: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            'img',
            {
              className: 'h-64 w-full object-cover',
              src: 'https://supabase.io/new/images/case-study-monitoro.jpg',
              alt: 'title',
            }
          ),
        }),
        (withMeta.args = { title: 'title is here' }),
        (withHover.args = { title: 'This card can hover', hoverable: !0 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Card {...args}>\n    <Typography.Title level={5}>Card content</Typography.Title>\n    <Typography.Title level={5}>Card content</Typography.Title>\n    <Typography.Title level={5}>Card content</Typography.Title>\n  </Card>',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (withCover.parameters = {
          ...withCover.parameters,
          docs: {
            ...withCover.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Card {...args}>\n    <Typography.Text type="secondary">Sub title here</Typography.Text>\n    <Typography.Title level={3}>To Do List with Vue.JS</Typography.Title>\n  </Card>',
              ...withCover.parameters?.docs?.source,
            },
          },
        }),
        (withMeta.parameters = {
          ...withMeta.parameters,
          docs: {
            ...withMeta.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Card {...args}>\n    <Card.Meta title={'To Do List with Vue.JS'} description={'To Do List with Vue.JS'} />\n  </Card>",
              ...withMeta.parameters?.docs?.source,
            },
          },
        }),
        (withHover.parameters = {
          ...withHover.parameters,
          docs: {
            ...withHover.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Card {...args}>\n    <Card.Meta title={'To Do List with Vue.JS'} description={'To Do List with Vue.JS'} />\n  </Card>",
              ...withHover.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'withCover',
        'withMeta',
        'withHover',
      ]
      try {
        ;(Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Card/Card.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/Card/Card.stories.tsx#Default',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withCover.displayName = 'withCover'),
          (withCover.__docgenInfo = {
            description: '',
            displayName: 'withCover',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Card/Card.stories.tsx#withCover'
            ] = {
              docgenInfo: withCover.__docgenInfo,
              name: 'withCover',
              path: 'src/components/Card/Card.stories.tsx#withCover',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withMeta.displayName = 'withMeta'),
          (withMeta.__docgenInfo = {
            description: '',
            displayName: 'withMeta',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Card/Card.stories.tsx#withMeta'
            ] = {
              docgenInfo: withMeta.__docgenInfo,
              name: 'withMeta',
              path: 'src/components/Card/Card.stories.tsx#withMeta',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withHover.displayName = 'withHover'),
          (withHover.__docgenInfo = {
            description: '',
            displayName: 'withHover',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Card/Card.stories.tsx#withHover'
            ] = {
              docgenInfo: withHover.__docgenInfo,
              name: 'withHover',
              path: 'src/components/Card/Card.stories.tsx#withHover',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Card/Card.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Typography/index.tsx'
        ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Card(_ref) {
        let {
            children: children,
            className: className,
            cover: cover,
            hoverable: hoverable,
            style: style,
            title: title,
            titleExtra: titleExtra,
          } = _ref,
          __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)('card'),
          classes = [__styles.base]
        return (
          hoverable && classes.push(__styles.hoverable),
          className && classes.push(className),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
            className: classes.join(' '),
            style: style,
            children: [
              title &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                  'div',
                  {
                    className: __styles.head,
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Text,
                        { style: { margin: 0 }, children: title }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Link,
                        { style: { margin: 0 }, children: titleExtra }
                      ),
                    ],
                  }
                ),
              cover,
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                className: __styles.content,
                children: children,
              }),
            ],
          })
        )
      }
      function Meta(_ref2) {
        let {
          title: title,
          description: description,
          style: style,
          className: className,
        } = _ref2
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
          style: style,
          className: className,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Title,
              { style: { margin: '0' }, level: 5, children: title }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _Typography__WEBPACK_IMPORTED_MODULE_3__.default.Text,
                { type: 'secondary', children: description }
              ),
            }),
          ],
        })
      }
      ;(Card.displayName = 'Card'),
        (Meta.displayName = 'Meta'),
        (Card.Meta = Meta),
        (__webpack_exports__.Z = Card)
      try {
        ;(Card.displayName = 'Card'),
          (Card.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              cover: {
                defaultValue: null,
                description: '',
                name: 'cover',
                required: !1,
                type: { name: 'ReactNode' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              hoverable: {
                defaultValue: null,
                description: '',
                name: 'hoverable',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              titleExtra: {
                defaultValue: null,
                description: '',
                name: 'titleExtra',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Card/Card.tsx#Card'] = {
              docgenInfo: Card.__docgenInfo,
              name: 'Card',
              path: 'src/components/Card/Card.tsx#Card',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Typography/Typography.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return Typography_Typography
        },
      })
      __webpack_require__('../../node_modules/react/index.js')
      var handler = __webpack_require__('./src/theme/handler.ts'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Title(_ref) {
        let {
            className: className,
            level: level = 1,
            children: children,
            style: style,
          } = _ref,
          __styles = (0, handler.Z)('typography'),
          classes = [__styles.title.base]
        className && classes.push(className),
          level && classes.push(__styles.title.level[level])
        const CustomTag = `h${level}`
        return (0, jsx_runtime.jsx)(CustomTag, {
          style: style,
          className: classes.join(' '),
          children: children,
        })
      }
      Title.displayName = 'Title'
      var Typography_Title = Title
      try {
        ;(Title.displayName = 'Title'),
          (Title.__docgenInfo = {
            description: '',
            displayName: 'Title',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              level: {
                defaultValue: { value: '1' },
                description: '',
                name: 'level',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '1' },
                    { value: '3' },
                    { value: '2' },
                    { value: '4' },
                    { value: '5' },
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Typography/Title.tsx#Title'
            ] = {
              docgenInfo: Title.__docgenInfo,
              name: 'Title',
              path: 'src/components/Typography/Title.tsx#Title',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function Text(_ref) {
        let {
            className: className,
            children: children,
            style: style,
            type: type,
            disabled: disabled,
            mark: mark,
            code: code,
            keyboard: keyboard,
            underline: underline,
            strikethrough: strikethrough,
            strong: strong,
            small: small,
          } = _ref,
          __styles = (0, handler.Z)('typography'),
          classes = [__styles.text.base]
        return (
          className && classes.push(className),
          type && classes.push(__styles.text.type[type]),
          disabled && classes.push(__styles.text.disabled),
          underline && classes.push(__styles.text.underline),
          strikethrough && classes.push(__styles.text.strikethrough),
          small && classes.push(__styles.text.small),
          code
            ? (0, jsx_runtime.jsx)('code', {
                style: style,
                className: classes.join(' '),
                children: children,
              })
            : mark
            ? (0, jsx_runtime.jsx)('mark', {
                style: style,
                className: classes.join(' '),
                children: children,
              })
            : keyboard
            ? (0, jsx_runtime.jsx)('kbd', {
                style: style,
                className: classes.join(' '),
                children: children,
              })
            : strong
            ? (0, jsx_runtime.jsx)('strong', {
                style: style,
                className: classes.join(' '),
                children: children,
              })
            : (0, jsx_runtime.jsx)('span', {
                style: style,
                className: classes.join(' '),
                children: children,
              })
        )
      }
      Text.displayName = 'Text'
      var Typography_Text = Text
      try {
        ;(Text.displayName = 'Text'),
          (Text.__docgenInfo = {
            description: '',
            displayName: 'Text',
            props: {
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
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"danger"' },
                    { value: '"default"' },
                    { value: '"secondary"' },
                    { value: '"warning"' },
                    { value: '"success"' },
                  ],
                },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              mark: {
                defaultValue: null,
                description: '',
                name: 'mark',
                required: !1,
                type: { name: 'boolean' },
              },
              code: {
                defaultValue: null,
                description: '',
                name: 'code',
                required: !1,
                type: { name: 'boolean' },
              },
              keyboard: {
                defaultValue: null,
                description: '',
                name: 'keyboard',
                required: !1,
                type: { name: 'boolean' },
              },
              underline: {
                defaultValue: null,
                description: '',
                name: 'underline',
                required: !1,
                type: { name: 'boolean' },
              },
              strikethrough: {
                defaultValue: null,
                description: '',
                name: 'strikethrough',
                required: !1,
                type: { name: 'boolean' },
              },
              strong: {
                defaultValue: null,
                description: '',
                name: 'strong',
                required: !1,
                type: { name: 'boolean' },
              },
              small: {
                defaultValue: null,
                description: '',
                name: 'small',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Typography/Text.tsx#Text'
            ] = {
              docgenInfo: Text.__docgenInfo,
              name: 'Text',
              path: 'src/components/Typography/Text.tsx#Text',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function Link(_ref) {
        let {
            children: children,
            target: target = '_blank',
            href: href,
            className: className,
            onClick: onClick,
            style: style,
          } = _ref,
          classes = [(0, handler.Z)('typography').link]
        return (
          className && classes.push(className),
          (0, jsx_runtime.jsx)('a', {
            onClick: onClick,
            className: classes.join(' '),
            href: href,
            target: target,
            rel: 'noopener noreferrer',
            style: style,
            children: children,
          })
        )
      }
      Link.displayName = 'Link'
      var Typography_Link = Link
      try {
        ;(Link.displayName = 'Link'),
          (Link.__docgenInfo = {
            description: '',
            displayName: 'Link',
            props: {
              target: {
                defaultValue: { value: '_blank' },
                description: '',
                name: 'target',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"_blank"' },
                    { value: '"_self"' },
                    { value: '"_parent"' },
                    { value: '"_top"' },
                    { value: '"framename"' },
                  ],
                },
              },
              href: {
                defaultValue: null,
                description: '',
                name: 'href',
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
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: 'HandlerFunction' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Typography/Link.tsx#Link'
            ] = {
              docgenInfo: Link.__docgenInfo,
              name: 'Link',
              path: 'src/components/Typography/Link.tsx#Link',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function Typography(_ref) {
        let {
            children: children,
            className: className,
            tag: tag = 'div',
            style: style,
          } = _ref,
          CustomTag = `${tag}`
        return (0, jsx_runtime.jsx)(CustomTag, {
          style: style,
          children: children,
        })
      }
      ;(Typography.displayName = 'Typography'),
        (Typography.Title = Typography_Title),
        (Typography.Text = Typography_Text),
        (Typography.Link = Typography_Link)
      var Typography_Typography = Typography
      try {
        ;(Typography.displayName = 'Typography'),
          (Typography.__docgenInfo = {
            description: '',
            displayName: 'Typography',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Typography/Typography.tsx#Typography'
            ] = {
              docgenInfo: Typography.__docgenInfo,
              name: 'Typography',
              path: 'src/components/Typography/Typography.tsx#Typography',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Typography/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/components/Typography/Typography.tsx'
      )
      __webpack_exports__.default = _Typography__WEBPACK_IMPORTED_MODULE_0__.Z
      try {
        ;(Typography.displayName = 'Typography'),
          (Typography.__docgenInfo = {
            description: '',
            displayName: 'Typography',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Typography/index.tsx#Typography'
            ] = {
              docgenInfo: Typography.__docgenInfo,
              name: 'Typography',
              path: 'src/components/Typography/index.tsx#Typography',
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
