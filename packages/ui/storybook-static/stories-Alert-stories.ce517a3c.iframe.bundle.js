'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [6941],
  {
    './src/stories/Alert.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Action: function () {
            return Action
          },
          Closable: function () {
            return Closable
          },
          Danger: function () {
            return Danger
          },
          DangerWithIcon: function () {
            return DangerWithIcon
          },
          Info: function () {
            return Alert_stories_Info
          },
          InfoWithIcon: function () {
            return InfoWithIcon
          },
          Neutral: function () {
            return Neutral
          },
          Success: function () {
            return Success
          },
          SuccessWithIcon: function () {
            return SuccessWithIcon
          },
          Warning: function () {
            return Warning
          },
          WarningWithIcon: function () {
            return WarningWithIcon
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          default: function () {
            return Alert_stories
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
      var AlertTriangle = (0, react.forwardRef)(function (_ref, ref) {
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
            d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
          }),
          react.createElement('line', {
            x1: '12',
            y1: '9',
            x2: '12',
            y2: '13',
          }),
          react.createElement('line', {
            x1: '12',
            y1: '17',
            x2: '12.01',
            y2: '17',
          })
        )
      })
      ;(AlertTriangle.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (AlertTriangle.displayName = 'AlertTriangle')
      var alert_triangle = AlertTriangle,
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconAlertTriangle(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, {
          icon: alert_triangle,
          ...props,
        })
      }
      IconAlertTriangle.displayName = 'IconAlertTriangle'
      var IconAlertTriangle_IconAlertTriangle = IconAlertTriangle
      try {
        ;(IconAlertTriangle.displayName = 'IconAlertTriangle'),
          (IconAlertTriangle.__docgenInfo = {
            description: '',
            displayName: 'IconAlertTriangle',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconAlertTriangle/IconAlertTriangle.tsx#IconAlertTriangle'
            ] = {
              docgenInfo: IconAlertTriangle.__docgenInfo,
              name: 'IconAlertTriangle',
              path: 'src/components/Icon/icons/IconAlertTriangle/IconAlertTriangle.tsx#IconAlertTriangle',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function info_extends() {
        return (
          (info_extends =
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
          info_extends.apply(this, arguments)
        )
      }
      function info_objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function info_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
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
      var Info = (0, react.forwardRef)(function (_ref, ref) {
        var _ref$color = _ref.color,
          color = void 0 === _ref$color ? 'currentColor' : _ref$color,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 24 : _ref$size,
          rest = info_objectWithoutProperties(_ref, ['color', 'size'])
        return react.createElement(
          'svg',
          info_extends(
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
          react.createElement('circle', { cx: '12', cy: '12', r: '10' }),
          react.createElement('line', {
            x1: '12',
            y1: '16',
            x2: '12',
            y2: '12',
          }),
          react.createElement('line', {
            x1: '12',
            y1: '8',
            x2: '12.01',
            y2: '8',
          })
        )
      })
      ;(Info.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (Info.displayName = 'Info')
      var info = Info
      function IconInfo(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: info, ...props })
      }
      IconInfo.displayName = 'IconInfo'
      var IconInfo_IconInfo = IconInfo
      try {
        ;(IconInfo.displayName = 'IconInfo'),
          (IconInfo.__docgenInfo = {
            description: '',
            displayName: 'IconInfo',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconInfo/IconInfo.tsx#IconInfo'
            ] = {
              docgenInfo: IconInfo.__docgenInfo,
              name: 'IconInfo',
              path: 'src/components/Icon/icons/IconInfo/IconInfo.tsx#IconInfo',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var IconX = __webpack_require__(
          './src/components/Icon/icons/IconX/IconX.tsx'
        ),
        handler = __webpack_require__('./src/theme/handler.ts')
      function alert_octagon_extends() {
        return (
          (alert_octagon_extends =
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
          alert_octagon_extends.apply(this, arguments)
        )
      }
      function alert_octagon_objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function alert_octagon_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
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
      var AlertOctagon = (0, react.forwardRef)(function (_ref, ref) {
        var _ref$color = _ref.color,
          color = void 0 === _ref$color ? 'currentColor' : _ref$color,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 24 : _ref$size,
          rest = alert_octagon_objectWithoutProperties(_ref, ['color', 'size'])
        return react.createElement(
          'svg',
          alert_octagon_extends(
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
          react.createElement('polygon', {
            points:
              '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2',
          }),
          react.createElement('line', {
            x1: '12',
            y1: '8',
            x2: '12',
            y2: '12',
          }),
          react.createElement('line', {
            x1: '12',
            y1: '16',
            x2: '12.01',
            y2: '16',
          })
        )
      })
      ;(AlertOctagon.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (AlertOctagon.displayName = 'AlertOctagon')
      var alert_octagon = AlertOctagon
      function IconAlertOctagon(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, {
          icon: alert_octagon,
          ...props,
        })
      }
      IconAlertOctagon.displayName = 'IconAlertOctagon'
      var IconAlertOctagon_IconAlertOctagon = IconAlertOctagon
      try {
        ;(IconAlertOctagon.displayName = 'IconAlertOctagon'),
          (IconAlertOctagon.__docgenInfo = {
            description: '',
            displayName: 'IconAlertOctagon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconAlertOctagon/IconAlertOctagon.tsx#IconAlertOctagon'
            ] = {
              docgenInfo: IconAlertOctagon.__docgenInfo,
              name: 'IconAlertOctagon',
              path: 'src/components/Icon/icons/IconAlertOctagon/IconAlertOctagon.tsx#IconAlertOctagon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function check_circle_extends() {
        return (
          (check_circle_extends =
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
          check_circle_extends.apply(this, arguments)
        )
      }
      function check_circle_objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function check_circle_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
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
      var CheckCircle = (0, react.forwardRef)(function (_ref, ref) {
        var _ref$color = _ref.color,
          color = void 0 === _ref$color ? 'currentColor' : _ref$color,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 24 : _ref$size,
          rest = check_circle_objectWithoutProperties(_ref, ['color', 'size'])
        return react.createElement(
          'svg',
          check_circle_extends(
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
            d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
          }),
          react.createElement('polyline', { points: '22 4 12 14.01 9 11.01' })
        )
      })
      ;(CheckCircle.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (CheckCircle.displayName = 'CheckCircle')
      var check_circle = CheckCircle
      function IconCheckCircle(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, {
          icon: check_circle,
          ...props,
        })
      }
      IconCheckCircle.displayName = 'IconCheckCircle'
      var IconCheckCircle_IconCheckCircle = IconCheckCircle
      try {
        ;(IconCheckCircle.displayName = 'IconCheckCircle'),
          (IconCheckCircle.__docgenInfo = {
            description: '',
            displayName: 'IconCheckCircle',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconCheckCircle/IconCheckCircle.tsx#IconCheckCircle'
            ] = {
              docgenInfo: IconCheckCircle.__docgenInfo,
              name: 'IconCheckCircle',
              path: 'src/components/Icon/icons/IconCheckCircle/IconCheckCircle.tsx#IconCheckCircle',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      const icons = {
        danger: (0, jsx_runtime.jsx)(IconAlertOctagon_IconAlertOctagon, {
          strokeWidth: 1.5,
          size: 18,
        }),
        success: (0, jsx_runtime.jsx)(IconCheckCircle_IconCheckCircle, {
          strokeWidth: 1.5,
          size: 18,
        }),
        warning: (0, jsx_runtime.jsx)(IconAlertTriangle_IconAlertTriangle, {
          strokeWidth: 1.5,
          size: 18,
        }),
        info: (0, jsx_runtime.jsx)(IconInfo_IconInfo, {
          strokeWidth: 1.5,
          size: 18,
        }),
        neutral: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
      }
      function Alert(_ref) {
        let {
            variant: variant = 'neutral',
            className: className,
            title: title,
            withIcon: withIcon,
            closable: closable,
            children: children,
            icon: icon,
            actions: actions,
          } = _ref,
          __styles = (0, handler.Z)('alert')
        const [visible, setVisible] = (0, react.useState)(!0)
        let containerClasses = [__styles.base]
        containerClasses.push(__styles.variant[variant].base),
          className && containerClasses.push(className)
        let descriptionClasses = [
            __styles.description,
            __styles.variant[variant].description,
          ],
          closeButtonClasses = [__styles.close]
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children:
            visible &&
            (0, jsx_runtime.jsxs)('div', {
              className: containerClasses.join(' '),
              children: [
                withIcon
                  ? (0, jsx_runtime.jsx)('div', {
                      className: __styles.variant[variant].icon,
                      children: withIcon && icons[variant],
                    })
                  : null,
                icon && icon,
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex flex-1 items-center justify-between',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: [
                            __styles.variant[variant].header,
                            __styles.header,
                          ].join(' '),
                          children: title,
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className: descriptionClasses.join(' '),
                          children: children,
                        }),
                      ],
                    }),
                    actions,
                  ],
                }),
                closable &&
                  (0, jsx_runtime.jsx)('button', {
                    'aria-label': 'Close alert',
                    onClick: () => setVisible(!1),
                    className: closeButtonClasses.join(' '),
                    children: (0, jsx_runtime.jsx)(IconX.Z, {
                      strokeWidth: 2,
                      size: 16,
                    }),
                  }),
              ],
            }),
        })
      }
      try {
        ;(Alert.displayName = 'Alert'),
          (Alert.__docgenInfo = {
            description: '',
            displayName: 'Alert',
            props: {
              variant: {
                defaultValue: { value: 'neutral' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"danger"' },
                    { value: '"warning"' },
                    { value: '"success"' },
                    { value: '"info"' },
                    { value: '"neutral"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              withIcon: {
                defaultValue: null,
                description: '',
                name: 'withIcon',
                required: !1,
                type: { name: 'boolean' },
              },
              closable: {
                defaultValue: null,
                description: '',
                name: 'closable',
                required: !1,
                type: { name: 'boolean' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Alert.tsx#Alert'] = {
              docgenInfo: Alert.__docgenInfo,
              name: 'Alert',
              path: 'src/components/Alert.tsx#Alert',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Alert_stories = { title: 'Displays/Alerts', component: Alert }
      const Neutral = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      Neutral.displayName = 'Neutral'
      const Success = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      Success.displayName = 'Success'
      const SuccessWithIcon = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      SuccessWithIcon.displayName = 'SuccessWithIcon'
      const Danger = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      Danger.displayName = 'Danger'
      const DangerWithIcon = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      DangerWithIcon.displayName = 'DangerWithIcon'
      const Alert_stories_Info = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      Alert_stories_Info.displayName = 'Info'
      const InfoWithIcon = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      InfoWithIcon.displayName = 'InfoWithIcon'
      const Warning = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      Warning.displayName = 'Warning'
      const WarningWithIcon = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      WarningWithIcon.displayName = 'WarningWithIcon'
      const Closable = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      Closable.displayName = 'Closable'
      const Action = (args) =>
        (0, jsx_runtime.jsx)(Alert, {
          ...args,
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
        })
      ;(Action.displayName = 'Action'),
        (Neutral.args = { title: 'Success alert with icon', withIcon: !0 }),
        (Success.args = { title: 'Success alert', variant: 'success' }),
        (SuccessWithIcon.args = {
          title: 'Success alert with icon',
          variant: 'success',
          withIcon: !0,
        }),
        (Danger.args = { title: 'Danger alert', variant: 'danger' }),
        (DangerWithIcon.args = {
          title: 'Danger alert with icon',
          variant: 'danger',
          withIcon: !0,
        }),
        (Alert_stories_Info.args = { title: 'Info alert', variant: 'info' }),
        (InfoWithIcon.args = {
          title: 'Info alert with icon',
          variant: 'info',
          withIcon: !0,
        }),
        (Warning.args = { title: 'Warning alert', variant: 'warning' }),
        (WarningWithIcon.args = {
          title: 'Warning alert with icon',
          variant: 'warning',
          withIcon: !0,
        }),
        (Closable.args = { title: 'Closable alert', closable: !0 }),
        (Action.args = {
          title: 'Alert with action',
          variant: 'warning',
          withIcon: !0,
          actions: (0, jsx_runtime.jsx)('div', { children: 'Hello' }),
        }),
        (Neutral.parameters = {
          ...Neutral.parameters,
          docs: {
            ...Neutral.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...Neutral.parameters?.docs?.source,
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...Success.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...Success.parameters?.docs?.source,
            },
          },
        }),
        (SuccessWithIcon.parameters = {
          ...SuccessWithIcon.parameters,
          docs: {
            ...SuccessWithIcon.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...SuccessWithIcon.parameters?.docs?.source,
            },
          },
        }),
        (Danger.parameters = {
          ...Danger.parameters,
          docs: {
            ...Danger.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...Danger.parameters?.docs?.source,
            },
          },
        }),
        (DangerWithIcon.parameters = {
          ...DangerWithIcon.parameters,
          docs: {
            ...DangerWithIcon.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...DangerWithIcon.parameters?.docs?.source,
            },
          },
        }),
        (Alert_stories_Info.parameters = {
          ...Alert_stories_Info.parameters,
          docs: {
            ...Alert_stories_Info.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...Alert_stories_Info.parameters?.docs?.source,
            },
          },
        }),
        (InfoWithIcon.parameters = {
          ...InfoWithIcon.parameters,
          docs: {
            ...InfoWithIcon.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...InfoWithIcon.parameters?.docs?.source,
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...Warning.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...Warning.parameters?.docs?.source,
            },
          },
        }),
        (WarningWithIcon.parameters = {
          ...WarningWithIcon.parameters,
          docs: {
            ...WarningWithIcon.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...WarningWithIcon.parameters?.docs?.source,
            },
          },
        }),
        (Closable.parameters = {
          ...Closable.parameters,
          docs: {
            ...Closable.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...Closable.parameters?.docs?.source,
            },
          },
        }),
        (Action.parameters = {
          ...Action.parameters,
          docs: {
            ...Action.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Alert {...args}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet\n    labore.\n  </Alert>',
              ...Action.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Neutral',
        'Success',
        'SuccessWithIcon',
        'Danger',
        'DangerWithIcon',
        'Info',
        'InfoWithIcon',
        'Warning',
        'WarningWithIcon',
        'Closable',
        'Action',
      ]
      try {
        ;(Neutral.displayName = 'Neutral'),
          (Neutral.__docgenInfo = {
            description: '',
            displayName: 'Neutral',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Alert.stories.tsx#Neutral'] =
              {
                docgenInfo: Neutral.__docgenInfo,
                name: 'Neutral',
                path: 'src/stories/Alert.stories.tsx#Neutral',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Success.displayName = 'Success'),
          (Success.__docgenInfo = {
            description: '',
            displayName: 'Success',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Alert.stories.tsx#Success'] =
              {
                docgenInfo: Success.__docgenInfo,
                name: 'Success',
                path: 'src/stories/Alert.stories.tsx#Success',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(SuccessWithIcon.displayName = 'SuccessWithIcon'),
          (SuccessWithIcon.__docgenInfo = {
            description: '',
            displayName: 'SuccessWithIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Alert.stories.tsx#SuccessWithIcon'
            ] = {
              docgenInfo: SuccessWithIcon.__docgenInfo,
              name: 'SuccessWithIcon',
              path: 'src/stories/Alert.stories.tsx#SuccessWithIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Danger.displayName = 'Danger'),
          (Danger.__docgenInfo = {
            description: '',
            displayName: 'Danger',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Alert.stories.tsx#Danger'] = {
              docgenInfo: Danger.__docgenInfo,
              name: 'Danger',
              path: 'src/stories/Alert.stories.tsx#Danger',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(DangerWithIcon.displayName = 'DangerWithIcon'),
          (DangerWithIcon.__docgenInfo = {
            description: '',
            displayName: 'DangerWithIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Alert.stories.tsx#DangerWithIcon'
            ] = {
              docgenInfo: DangerWithIcon.__docgenInfo,
              name: 'DangerWithIcon',
              path: 'src/stories/Alert.stories.tsx#DangerWithIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Alert_stories_Info.displayName = 'Info'),
          (Alert_stories_Info.__docgenInfo = {
            description: '',
            displayName: 'Info',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Alert.stories.tsx#Info'] = {
              docgenInfo: Alert_stories_Info.__docgenInfo,
              name: 'Info',
              path: 'src/stories/Alert.stories.tsx#Info',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(InfoWithIcon.displayName = 'InfoWithIcon'),
          (InfoWithIcon.__docgenInfo = {
            description: '',
            displayName: 'InfoWithIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Alert.stories.tsx#InfoWithIcon'
            ] = {
              docgenInfo: InfoWithIcon.__docgenInfo,
              name: 'InfoWithIcon',
              path: 'src/stories/Alert.stories.tsx#InfoWithIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Warning.displayName = 'Warning'),
          (Warning.__docgenInfo = {
            description: '',
            displayName: 'Warning',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Alert.stories.tsx#Warning'] =
              {
                docgenInfo: Warning.__docgenInfo,
                name: 'Warning',
                path: 'src/stories/Alert.stories.tsx#Warning',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(WarningWithIcon.displayName = 'WarningWithIcon'),
          (WarningWithIcon.__docgenInfo = {
            description: '',
            displayName: 'WarningWithIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Alert.stories.tsx#WarningWithIcon'
            ] = {
              docgenInfo: WarningWithIcon.__docgenInfo,
              name: 'WarningWithIcon',
              path: 'src/stories/Alert.stories.tsx#WarningWithIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Closable.displayName = 'Closable'),
          (Closable.__docgenInfo = {
            description: '',
            displayName: 'Closable',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Alert.stories.tsx#Closable'] =
              {
                docgenInfo: Closable.__docgenInfo,
                name: 'Closable',
                path: 'src/stories/Alert.stories.tsx#Closable',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Action.displayName = 'Action'),
          (Action.__docgenInfo = {
            description: '',
            displayName: 'Action',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Alert.stories.tsx#Action'] = {
              docgenInfo: Action.__docgenInfo,
              name: 'Action',
              path: 'src/stories/Alert.stories.tsx#Action',
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
    '../../node_modules/react-feather/dist/icons/x.js': function (
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
      var X = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
            x1: '18',
            y1: '6',
            x2: '6',
            y2: '18',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '6',
            y1: '6',
            x2: '18',
            y2: '18',
          })
        )
      })
      ;(X.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (X.displayName = 'X'),
        (__webpack_exports__.Z = X)
    },
  },
])
