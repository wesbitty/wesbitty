'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [783],
  {
    './src/components/Loading/Loading.stories.tsx': function (
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
          default: function () {
            return Loading_stories
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var handler = __webpack_require__('./src/theme/handler.ts'),
        IconLoader = __webpack_require__(
          './src/components/Icon/icons/IconLoader/IconLoader.tsx'
        ),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Loading(_ref) {
        let { children: children, active: active } = _ref
        const __styles = (0, handler.Z)('loading')
        let classNames = [__styles.base],
          contentClasses = [__styles.content.base]
        active && contentClasses.push(__styles.content.active)
        let spinnerClasses = [__styles.spinner]
        return (0, jsx_runtime.jsxs)('div', {
          className: classNames.join(' '),
          children: [
            (0, jsx_runtime.jsx)('div', {
              className: contentClasses.join(' '),
              children: children,
            }),
            active &&
              (0, jsx_runtime.jsx)(IconLoader.Z, {
                size: 'xlarge',
                className: spinnerClasses,
              }),
          ],
        })
      }
      Loading.displayName = 'Loading'
      try {
        ;(Loading.displayName = 'Loading'),
          (Loading.__docgenInfo = {
            description: '',
            displayName: 'Loading',
            props: {
              active: {
                defaultValue: null,
                description: '',
                name: 'active',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Loading/Loading.tsx#Loading'
            ] = {
              docgenInfo: Loading.__docgenInfo,
              name: 'Loading',
              path: 'src/components/Loading/Loading.tsx#Loading',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Card = __webpack_require__('./src/components/Card/Card.tsx'),
        Loading_stories = { title: 'Utilities/Loading', component: Loading }
      const Default = (args) =>
        (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: (0, jsx_runtime.jsx)(Loading, {
            ...args,
            children: (0, jsx_runtime.jsx)(Card.Z, {
              title: 'This card can be set to loading',
            }),
          }),
        })
      ;(Default.args = { active: !0 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => {\n  return <>\n      <Loading {...args}>\n        <Card title={'This card can be set to loading'}></Card>\n      </Loading>\n    </>;\n}",
              ...Default.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = ['Default']
      try {
        ;(Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Loading/Loading.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/Loading/Loading.stories.tsx#Default',
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
    './src/components/Icon/IconBase.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        _IconContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Icon/IconContext.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconBase(_ref) {
        let {
          className: className,
          size: size,
          type: type = 'Mail',
          color: color,
          strokeWidth: strokeWidth,
          fill: fill,
          stroke: stroke,
          background: background,
          src: src,
          icon: icon,
          ...props
        } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
          'icon'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconContext__WEBPACK_IMPORTED_MODULE_3__.P.Consumer,
          {
            children: (_ref2) => {
              let { contextSize: contextSize, className: contextClassName } =
                _ref2
              const defaultSizes = {
                  tiny: 14,
                  small: 18,
                  medium: 20,
                  large: 20,
                  xlarge: 24,
                  xxlarge: 30,
                  xxxlarge: 42,
                },
                defaultSize = defaultSizes.large,
                FeatherIcon = icon
              let iconSize = 21
              contextSize &&
                (iconSize = contextSize
                  ? 'string' == typeof contextSize
                    ? defaultSizes[contextSize]
                    : contextSize
                  : defaultSize),
                size &&
                  (iconSize = size
                    ? 'string' == typeof size
                      ? defaultSizes[size]
                      : size
                    : defaultSize)
              const noColor = !color && !fill && !stroke
              let classes = ['wsb-icon', className]
              contextClassName && classes.push(contextClassName)
              const IconComponent = () =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    FeatherIcon,
                    {
                      color: noColor ? 'currentColor' : color,
                      stroke: noColor ? 'currentColor' : stroke,
                      className: classes.join(' '),
                      strokeWidth: strokeWidth,
                      size: iconSize,
                      fill: noColor ? 'none' : fill || 'none',
                      ...props,
                    }
                  ),
                Icon = src
                  ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      'svg',
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        color: noColor ? 'currentColor' : color,
                        fill: noColor ? 'none' : fill || 'none',
                        stroke: noColor ? 'currentColor' : stroke,
                        className: classes.join(' '),
                        width: iconSize,
                        height: iconSize,
                        children: src,
                      }
                    )
                  : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      IconComponent,
                      {}
                    )
              return background
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    'div',
                    { className: __styles.container, children: Icon }
                  )
                : Icon
            },
          }
        )
      }
      ;(IconBase.displayName = 'IconBase'), (__webpack_exports__.Z = IconBase)
      try {
        ;(IconBase.displayName = 'IconBase'),
          (IconBase.__docgenInfo = {
            description: '',
            displayName: 'IconBase',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'number | "medium" | "tiny" | "small" | "large" | "xlarge" | "xxlarge" | "xxxlarge"',
                },
              },
              type: {
                defaultValue: { value: 'Mail' },
                description: '',
                name: 'type',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              strokeWidth: {
                defaultValue: null,
                description: '',
                name: 'strokeWidth',
                required: !1,
                type: { name: 'number' },
              },
              fill: {
                defaultValue: { value: 'undefined' },
                description: '',
                name: 'fill',
                required: !1,
                type: { name: 'string' },
              },
              stroke: {
                defaultValue: { value: 'undefined' },
                description: '',
                name: 'stroke',
                required: !1,
                type: { name: 'string' },
              },
              background: {
                defaultValue: null,
                description: '',
                name: 'background',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"blue"' },
                    { value: '"red"' },
                    { value: '"brand"' },
                    { value: '"pink"' },
                    { value: '"purple"' },
                    { value: '"indigo"' },
                    { value: '"green"' },
                    { value: '"yellow"' },
                    { value: '"gray"' },
                  ],
                },
              },
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !1,
                type: { name: 'ReactNode' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'any' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/IconBase.tsx#IconBase'
            ] = {
              docgenInfo: IconBase.__docgenInfo,
              name: 'IconBase',
              path: 'src/components/Icon/IconBase.tsx#IconBase',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/IconContext.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        P: function () {
          return IconContext
        },
      })
      const IconContext = (0,
      __webpack_require__('../../node_modules/react/index.js').createContext)({
        contextSize: '',
        className: '',
      })
    },
    './src/components/Icon/icons/IconLoader/IconLoader.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_loader__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/loader.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconLoader(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_loader__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconLoader.displayName = 'IconLoader'),
        (__webpack_exports__.Z = IconLoader)
      try {
        ;(IconLoader.displayName = 'IconLoader'),
          (IconLoader.__docgenInfo = {
            description: '',
            displayName: 'IconLoader',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconLoader/IconLoader.tsx#IconLoader'
            ] = {
              docgenInfo: IconLoader.__docgenInfo,
              name: 'IconLoader',
              path: 'src/components/Icon/icons/IconLoader/IconLoader.tsx#IconLoader',
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
    '../../node_modules/react-feather/dist/icons/loader.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/prop-types/index.js'
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__
        )
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key])
              }
              return target
            }),
          _extends.apply(this, arguments)
        )
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var Loader = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
        _ref,
        ref
      ) {
        var _ref$color = _ref.color,
          color = void 0 === _ref$color ? 'currentColor' : _ref$color,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 24 : _ref$size,
          rest = _objectWithoutProperties(_ref, ['color', 'size'])
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            {
              ref: ref,
              xmlns: 'http://www.w3.org/2000/svg',
              width: size,
              height: size,
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: color,
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            rest
          ),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '12',
            y1: '2',
            x2: '12',
            y2: '6',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '12',
            y1: '18',
            x2: '12',
            y2: '22',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '4.93',
            y1: '4.93',
            x2: '7.76',
            y2: '7.76',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '16.24',
            y1: '16.24',
            x2: '19.07',
            y2: '19.07',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '2',
            y1: '12',
            x2: '6',
            y2: '12',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '18',
            y1: '12',
            x2: '22',
            y2: '12',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '4.93',
            y1: '19.07',
            x2: '7.76',
            y2: '16.24',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '16.24',
            y1: '7.76',
            x2: '19.07',
            y2: '4.93',
          })
        )
      })
      ;(Loader.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Loader.displayName = 'Loader'),
        (__webpack_exports__.Z = Loader)
    },
  },
])
