;(self.webpackChunkui = self.webpackChunkui || []).push([
  [5989],
  {
    '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Avatar/Avatar.module.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.id,
          ".Avatar-module__wsb-avatar__3m0bD {\n  border-radius: 9999px;\n}\n\n.Avatar-module__wsb-avatar-type-rounded__18ZKp {\n  border-radius: 10%;\n}\n\n.Avatar-module__wsb-avatar-type-square__30oGQ {\n  border-radius: 0;\n}\n\n.Avatar-module__wsb-avatar-image__sYla1 {\n  object-fit: 'contain';\n  border-radius: '50%';\n  height: 3rem;\n  width: 3rem;\n}\n\n.Avatar-module__wsb-avatar-children__2zGVo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Avatar-module__wsb-avatar-icon__1COVa {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: cadetblue;\n  height: 3rem;\n  width: 3rem;\n}\n\n.Avatar-module__wsb-avatar-text__1o8dw {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: cadetblue;\n  float: left;\n  height: 3rem;\n  width: 3rem;\n}\n\n.Avatar-module__wsb-avatar-fallback__1dyCK {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: cadetblue;\n  height: 3rem;\n  width: 3rem;\n}\n\n.Avatar-module__wsb-avatar-single__24b9_ {\n}\n\n.Avatar-module__wsb-avatar-multiple__YI4uy {\n}\n\n.Avatar-module__wsb-image-responsive__1iecZ {\n  width: 100%;\n  height: auto;\n}\n",
          '',
        ]),
          (exports.locals = {
            'wsb-avatar': 'Avatar-module__wsb-avatar__3m0bD',
            'wsb-avatar-type-rounded':
              'Avatar-module__wsb-avatar-type-rounded__18ZKp',
            'wsb-avatar-type-square':
              'Avatar-module__wsb-avatar-type-square__30oGQ',
            'wsb-avatar-image': 'Avatar-module__wsb-avatar-image__sYla1',
            'wsb-avatar-children': 'Avatar-module__wsb-avatar-children__2zGVo',
            'wsb-avatar-icon': 'Avatar-module__wsb-avatar-icon__1COVa',
            'wsb-avatar-text': 'Avatar-module__wsb-avatar-text__1o8dw',
            'wsb-avatar-fallback': 'Avatar-module__wsb-avatar-fallback__1dyCK',
            'wsb-avatar-single': 'Avatar-module__wsb-avatar-single__24b9_',
            'wsb-avatar-multiple': 'Avatar-module__wsb-avatar-multiple__YI4uy',
            'wsb-image-responsive':
              'Avatar-module__wsb-image-responsive__1iecZ',
          }),
          (module.exports = exports)
      },
    './src/components/Avatar/Avatar.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Fallback: function () {
            return Fallback
          },
          Icon: function () {
            return Icon
          },
          Image: function () {
            return Avatar_stories_Image
          },
          Text: function () {
            return Text
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          default: function () {
            return Avatar_stories
          },
        })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        prop_types = __webpack_require__(
          '../../node_modules/prop-types/index.js'
        ),
        prop_types_default = __webpack_require__.n(prop_types)
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
      var Airplay = (0, react.forwardRef)(function (_ref, ref) {
        var _ref$color = _ref.color,
          color = void 0 === _ref$color ? 'currentColor' : _ref$color,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 24 : _ref$size,
          rest = _objectWithoutProperties(_ref, ['color', 'size'])
        return react.createElement(
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
          react.createElement('path', {
            d: 'M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1',
          }),
          react.createElement('polygon', { points: '12 15 17 21 7 21 12 15' })
        )
      })
      ;(Airplay.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (Airplay.displayName = 'Airplay')
      var airplay = Airplay,
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconAirplay(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: airplay, ...props })
      }
      IconAirplay.displayName = 'IconAirplay'
      var IconAirplay_IconAirplay = IconAirplay
      try {
        ;(IconAirplay.displayName = 'IconAirplay'),
          (IconAirplay.__docgenInfo = {
            description: '',
            displayName: 'IconAirplay',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconAirplay/IconAirplay.tsx#IconAirplay'
            ] = {
              docgenInfo: IconAirplay.__docgenInfo,
              name: 'IconAirplay',
              path: 'src/components/Icon/icons/IconAirplay/IconAirplay.tsx#IconAirplay',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var IconUser = __webpack_require__(
          './src/components/Icon/icons/IconUser/IconUser.tsx'
        ),
        Avatar_module = __webpack_require__(
          './src/components/Avatar/Avatar.module.css'
        ),
        Avatar_module_default = __webpack_require__.n(Avatar_module)
      function Avatar(_ref) {
        let {
          src: src,
          style: style,
          className: className,
          alt: alt,
          responsive: responsive,
          text: text,
          variant: variant,
          AvatarIcon: AvatarIcon,
          size: size,
          children: children,
        } = _ref
        const classes = [Avatar_module_default()['wsb-avatar']]
        let objectToRender
        classes.push(className)
        return (
          (() => {
            const img = new Image()
            if (((img.src = src), img.complete)) return !0
            ;(img.onload = () => !0), (img.onerror = () => !1)
          }) && src
            ? (classes.push(Avatar_module_default()['wsb-avatar-image']),
              (objectToRender = (0, jsx_runtime.jsx)('img', {
                className: classes.join(' '),
                src: src,
                alt: alt,
                style: { height: size, width: size, ...style },
              })))
            : AvatarIcon
            ? (classes.push(Avatar_module_default()['wsb-avatar-icon']),
              (objectToRender = (0, jsx_runtime.jsx)('div', {
                className: classes.join(' '),
                style: { height: size, width: size, ...style },
                children: (0, jsx_runtime.jsx)(AvatarIcon, {}),
              })))
            : text
            ? (classes.push(Avatar_module_default()['wsb-avatar-text']),
              (objectToRender = (0, jsx_runtime.jsx)('div', {
                className: classes.join(' '),
                style: { height: size, width: size, ...style },
                children: (0, jsx_runtime.jsx)('p', { children: text[0] }),
              })))
            : children
            ? (classes.push(Avatar_module_default()['wsb-avatar-children']),
              (objectToRender = (0, jsx_runtime.jsx)('div', {
                className: classes.join(' '),
                style: { height: size, width: size, ...style },
                children: children,
              })))
            : (classes.push(Avatar_module_default()['wsb-avatar-fallback']),
              (objectToRender = (0, jsx_runtime.jsx)('div', {
                className: classes.join(' '),
                style: { height: size, width: size, ...style },
                children: (0, jsx_runtime.jsx)(IconUser.Z, {}),
              }))),
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: objectToRender,
          })
        )
      }
      try {
        ;(Avatar.displayName = 'Avatar'),
          (Avatar.__docgenInfo = {
            description: '',
            displayName: 'Avatar',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
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
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              alt: {
                defaultValue: null,
                description: '',
                name: 'alt',
                required: !1,
                type: { name: 'string' },
              },
              responsive: {
                defaultValue: null,
                description: '',
                name: 'responsive',
                required: !1,
                type: { name: 'boolean' },
              },
              text: {
                defaultValue: null,
                description: '',
                name: 'text',
                required: !1,
                type: { name: 'string' },
              },
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"circle"' }, { value: '"square"' }],
                },
              },
              AvatarIcon: {
                defaultValue: null,
                description: '',
                name: 'AvatarIcon',
                required: !1,
                type: { name: 'Icon' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Avatar/Avatar.tsx#Avatar'
            ] = {
              docgenInfo: Avatar.__docgenInfo,
              name: 'Avatar',
              path: 'src/components/Avatar/Avatar.tsx#Avatar',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Avatar_stories = { title: 'General/Avatar', component: Avatar }
      const Avatar_stories_Image = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Avatar, { ...args }),
          }),
        Text = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Avatar, { ...args }),
          }),
        Icon = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Avatar, { ...args }),
          }),
        Fallback = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Avatar, { ...args }),
          })
      ;(Avatar_stories_Image.args = {
        active: !0,
        src: 'https://via.placeholder.com/150',
      }),
        (Text.args = { active: !0, text: 'Shoury' }),
        (Icon.args = { active: !0, Icon: IconAirplay_IconAirplay }),
        (Fallback.args = { active: !0 }),
        (Avatar_stories_Image.parameters = {
          ...Avatar_stories_Image.parameters,
          docs: {
            ...Avatar_stories_Image.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Avatar {...args} />\n    </>;\n}',
              ...Avatar_stories_Image.parameters?.docs?.source,
            },
          },
        }),
        (Text.parameters = {
          ...Text.parameters,
          docs: {
            ...Text.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Avatar {...args} />\n    </>;\n}',
              ...Text.parameters?.docs?.source,
            },
          },
        }),
        (Icon.parameters = {
          ...Icon.parameters,
          docs: {
            ...Icon.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Avatar {...args} />\n    </>;\n}',
              ...Icon.parameters?.docs?.source,
            },
          },
        }),
        (Fallback.parameters = {
          ...Fallback.parameters,
          docs: {
            ...Fallback.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Avatar {...args} />\n    </>;\n}',
              ...Fallback.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = ['Image', 'Text', 'Icon', 'Fallback']
      try {
        ;(Avatar_stories_Image.displayName = 'Image'),
          (Avatar_stories_Image.__docgenInfo = {
            description: '',
            displayName: 'Image',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Avatar/Avatar.stories.tsx#Image'
            ] = {
              docgenInfo: Avatar_stories_Image.__docgenInfo,
              name: 'Image',
              path: 'src/components/Avatar/Avatar.stories.tsx#Image',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Text.displayName = 'Text'),
          (Text.__docgenInfo = {
            description: '',
            displayName: 'Text',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Avatar/Avatar.stories.tsx#Text'
            ] = {
              docgenInfo: Text.__docgenInfo,
              name: 'Text',
              path: 'src/components/Avatar/Avatar.stories.tsx#Text',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Icon.displayName = 'Icon'),
          (Icon.__docgenInfo = {
            description: '',
            displayName: 'Icon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Avatar/Avatar.stories.tsx#Icon'
            ] = {
              docgenInfo: Icon.__docgenInfo,
              name: 'Icon',
              path: 'src/components/Avatar/Avatar.stories.tsx#Icon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Fallback.displayName = 'Fallback'),
          (Fallback.__docgenInfo = {
            description: '',
            displayName: 'Fallback',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Avatar/Avatar.stories.tsx#Fallback'
            ] = {
              docgenInfo: Fallback.__docgenInfo,
              name: 'Fallback',
              path: 'src/components/Avatar/Avatar.stories.tsx#Fallback',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/IconBase.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
      'use strict'
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
    './src/components/Icon/icons/IconUser/IconUser.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return IconUser_IconUser
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        prop_types = __webpack_require__(
          '../../node_modules/prop-types/index.js'
        ),
        prop_types_default = __webpack_require__.n(prop_types)
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
      var User = (0, react.forwardRef)(function (_ref, ref) {
        var _ref$color = _ref.color,
          color = void 0 === _ref$color ? 'currentColor' : _ref$color,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 24 : _ref$size,
          rest = _objectWithoutProperties(_ref, ['color', 'size'])
        return react.createElement(
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
          react.createElement('path', {
            d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
          }),
          react.createElement('circle', { cx: '12', cy: '7', r: '4' })
        )
      })
      ;(User.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (User.displayName = 'User')
      var user = User,
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconUser(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: user, ...props })
      }
      IconUser.displayName = 'IconUser'
      var IconUser_IconUser = IconUser
      try {
        ;(IconUser.displayName = 'IconUser'),
          (IconUser.__docgenInfo = {
            description: '',
            displayName: 'IconUser',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconUser/IconUser.tsx#IconUser'
            ] = {
              docgenInfo: IconUser.__docgenInfo,
              name: 'IconUser',
              path: 'src/components/Icon/icons/IconUser/IconUser.tsx#IconUser',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/theme/handler.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
    './src/components/Avatar/Avatar.module.css': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Avatar/Avatar.module.css'
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
