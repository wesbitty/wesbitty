'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [1195],
  {
    './src/components/Input/Input.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default
          },
          ErrorState: function () {
            return ErrorState
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          borderless: function () {
            return borderless
          },
          date: function () {
            return date
          },
          size: function () {
            return size
          },
          textArea: function () {
            return textArea
          },
          textAreaWithCopy: function () {
            return textAreaWithCopy
          },
          textAreaWithLimit: function () {
            return textAreaWithLimit
          },
          withBeforeAndAfterLabel: function () {
            return withBeforeAndAfterLabel
          },
          withCustomActions: function () {
            return withCustomActions
          },
          withCustomStyle: function () {
            return withCustomStyle
          },
          withDescription: function () {
            return withDescription
          },
          withIcon: function () {
            return withIcon
          },
          withOption: function () {
            return withOption
          },
          withRevealAndCopy: function () {
            return withRevealAndCopy
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Input/Input.tsx'
        ),
        _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Icon/icons/IconPackage/IconPackage.tsx'
        ),
        _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/components/Button.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      __webpack_exports__.default = {
        title: 'Data Input/Input',
        component: ___WEBPACK_IMPORTED_MODULE_2__.Z,
      }
      const Default = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      Default.displayName = 'Default'
      const ErrorState = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      ErrorState.displayName = 'ErrorState'
      const withIcon = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      withIcon.displayName = 'withIcon'
      const withOption = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      withOption.displayName = 'withOption'
      const withDescription = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      withDescription.displayName = 'withDescription'
      const withCustomStyle = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      withCustomStyle.displayName = 'withCustomStyle'
      const textArea = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z.TextArea,
          { ...args }
        )
      textArea.displayName = 'textArea'
      const textAreaWithCopy = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z.TextArea,
          { ...args }
        )
      textAreaWithCopy.displayName = 'textAreaWithCopy'
      const textAreaWithLimit = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z.TextArea,
          { ...args }
        )
      textAreaWithLimit.displayName = 'textAreaWithLimit'
      const withRevealAndCopy = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      withRevealAndCopy.displayName = 'withRevealAndCopy'
      const withCustomActions = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      withCustomActions.displayName = 'withCustomActions'
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
      size.displayName = 'size'
      const borderless = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      borderless.displayName = 'borderless'
      const date = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args, step: '12' }
        )
      date.displayName = 'date'
      const icon = (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
        _index__WEBPACK_IMPORTED_MODULE_3__.Z,
        {}
      )
      ;(Default.args = {
        placeholder: 'Type text here ...',
        disabled: !1,
        label: 'Name',
        layout: 'vertical',
      }),
        (ErrorState.args = {
          type: 'text',
          placeholder: 'Type text here ...',
          disabled: !1,
          label: 'Input with an error message',
          error: 'Your password must be less than 4 characters.',
        }),
        (withIcon.args = {
          type: 'text',
          placeholder: 'Type text here ...',
          disabled: !1,
          label: 'Input with an icon',
          icon: icon,
        }),
        (withOption.args = {
          type: 'text',
          placeholder: 'Type text here ...',
          disabled: !1,
          label: 'Input with an error message',
          labelOptional: 'This is required',
        }),
        (withDescription.args = {
          type: 'text',
          placeholder: 'Type text here ...',
          disabled: !1,
          label: 'Input with an error message',
          descriptionText: 'Make your password short and easy to guess',
        }),
        (withCustomStyle.args = {
          type: 'text',
          label: 'This has custom styling {width: 50%}',
          style: { width: '50%' },
        }),
        (textArea.args = { type: 'text', label: 'This is a text area' }),
        (textAreaWithCopy.args = {
          copy: !0,
          rows: 3,
          type: 'text',
          label: 'This is a text area',
        }),
        (textAreaWithLimit.args = {
          type: 'text',
          label: 'This is a text area, with 10 rows',
          labelOptional: '500 character limit',
          rows: 10,
          limit: 500,
        }),
        (withRevealAndCopy.args = {
          type: 'text',
          label: 'Reveal and copy',
          labelOptional: 'Reveal the text, then copy it',
          value: '12341234HDGRHSGR/adJDJD',
          copy: !0,
          reveal: !0,
        }),
        (withCustomActions.args = {
          type: 'text',
          label: 'Custom actions',
          labelOptional: 'Use any react components',
          value: 'Value of input',
          actions: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _Button__WEBPACK_IMPORTED_MODULE_4__.z,
              { type: 'secondary', children: 'Copy text' }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _Button__WEBPACK_IMPORTED_MODULE_4__.z,
              { type: 'outline', danger: !0, children: 'Delete this' }
            ),
          ],
        }),
        (size.args = {
          type: 'text',
          label: 'You can change the size of this Input',
          size: 'tiny',
        }),
        (withBeforeAndAfterLabel.args = {
          type: 'text',
          label: 'This is the label',
          beforeLabel: 'Before label : ',
          afterLabel: ' : After label',
        }),
        (borderless.args = {
          type: 'text',
          label: 'This is the label',
          borderless: !0,
          size: 'tiny',
        }),
        (date.args = {
          type: 'date',
          placeholder: 'Type text here ...',
          disabled: !1,
          label: 'Name',
          layout: 'vertical',
        }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (ErrorState.parameters = {
          ...ErrorState.parameters,
          docs: {
            ...ErrorState.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...ErrorState.parameters?.docs?.source,
            },
          },
        }),
        (withIcon.parameters = {
          ...withIcon.parameters,
          docs: {
            ...withIcon.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...withIcon.parameters?.docs?.source,
            },
          },
        }),
        (withOption.parameters = {
          ...withOption.parameters,
          docs: {
            ...withOption.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...withOption.parameters?.docs?.source,
            },
          },
        }),
        (withDescription.parameters = {
          ...withDescription.parameters,
          docs: {
            ...withDescription.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...withDescription.parameters?.docs?.source,
            },
          },
        }),
        (withCustomStyle.parameters = {
          ...withCustomStyle.parameters,
          docs: {
            ...withCustomStyle.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...withCustomStyle.parameters?.docs?.source,
            },
          },
        }),
        (textArea.parameters = {
          ...textArea.parameters,
          docs: {
            ...textArea.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input.TextArea {...args} />',
              ...textArea.parameters?.docs?.source,
            },
          },
        }),
        (textAreaWithCopy.parameters = {
          ...textAreaWithCopy.parameters,
          docs: {
            ...textAreaWithCopy.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input.TextArea {...args} />',
              ...textAreaWithCopy.parameters?.docs?.source,
            },
          },
        }),
        (textAreaWithLimit.parameters = {
          ...textAreaWithLimit.parameters,
          docs: {
            ...textAreaWithLimit.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input.TextArea {...args} />',
              ...textAreaWithLimit.parameters?.docs?.source,
            },
          },
        }),
        (withRevealAndCopy.parameters = {
          ...withRevealAndCopy.parameters,
          docs: {
            ...withRevealAndCopy.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...withRevealAndCopy.parameters?.docs?.source,
            },
          },
        }),
        (withCustomActions.parameters = {
          ...withCustomActions.parameters,
          docs: {
            ...withCustomActions.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...withCustomActions.parameters?.docs?.source,
            },
          },
        }),
        (withBeforeAndAfterLabel.parameters = {
          ...withBeforeAndAfterLabel.parameters,
          docs: {
            ...withBeforeAndAfterLabel.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...withBeforeAndAfterLabel.parameters?.docs?.source,
            },
          },
        }),
        (size.parameters = {
          ...size.parameters,
          docs: {
            ...size.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...size.parameters?.docs?.source,
            },
          },
        }),
        (borderless.parameters = {
          ...borderless.parameters,
          docs: {
            ...borderless.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} />',
              ...borderless.parameters?.docs?.source,
            },
          },
        }),
        (date.parameters = {
          ...date.parameters,
          docs: {
            ...date.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Input {...args} step="12" />',
              ...date.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'ErrorState',
        'withIcon',
        'withOption',
        'withDescription',
        'withCustomStyle',
        'textArea',
        'textAreaWithCopy',
        'textAreaWithLimit',
        'withRevealAndCopy',
        'withCustomActions',
        'withBeforeAndAfterLabel',
        'size',
        'borderless',
        'date',
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
              'src/components/Input/Input.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/Input/Input.stories.tsx#Default',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ErrorState.displayName = 'ErrorState'),
          (ErrorState.__docgenInfo = {
            description: '',
            displayName: 'ErrorState',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#ErrorState'
            ] = {
              docgenInfo: ErrorState.__docgenInfo,
              name: 'ErrorState',
              path: 'src/components/Input/Input.stories.tsx#ErrorState',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withIcon.displayName = 'withIcon'),
          (withIcon.__docgenInfo = {
            description: '',
            displayName: 'withIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#withIcon'
            ] = {
              docgenInfo: withIcon.__docgenInfo,
              name: 'withIcon',
              path: 'src/components/Input/Input.stories.tsx#withIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withOption.displayName = 'withOption'),
          (withOption.__docgenInfo = {
            description: '',
            displayName: 'withOption',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#withOption'
            ] = {
              docgenInfo: withOption.__docgenInfo,
              name: 'withOption',
              path: 'src/components/Input/Input.stories.tsx#withOption',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withDescription.displayName = 'withDescription'),
          (withDescription.__docgenInfo = {
            description: '',
            displayName: 'withDescription',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#withDescription'
            ] = {
              docgenInfo: withDescription.__docgenInfo,
              name: 'withDescription',
              path: 'src/components/Input/Input.stories.tsx#withDescription',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withCustomStyle.displayName = 'withCustomStyle'),
          (withCustomStyle.__docgenInfo = {
            description: '',
            displayName: 'withCustomStyle',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#withCustomStyle'
            ] = {
              docgenInfo: withCustomStyle.__docgenInfo,
              name: 'withCustomStyle',
              path: 'src/components/Input/Input.stories.tsx#withCustomStyle',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(textArea.displayName = 'textArea'),
          (textArea.__docgenInfo = {
            description: '',
            displayName: 'textArea',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#textArea'
            ] = {
              docgenInfo: textArea.__docgenInfo,
              name: 'textArea',
              path: 'src/components/Input/Input.stories.tsx#textArea',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(textAreaWithCopy.displayName = 'textAreaWithCopy'),
          (textAreaWithCopy.__docgenInfo = {
            description: '',
            displayName: 'textAreaWithCopy',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#textAreaWithCopy'
            ] = {
              docgenInfo: textAreaWithCopy.__docgenInfo,
              name: 'textAreaWithCopy',
              path: 'src/components/Input/Input.stories.tsx#textAreaWithCopy',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(textAreaWithLimit.displayName = 'textAreaWithLimit'),
          (textAreaWithLimit.__docgenInfo = {
            description: '',
            displayName: 'textAreaWithLimit',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#textAreaWithLimit'
            ] = {
              docgenInfo: textAreaWithLimit.__docgenInfo,
              name: 'textAreaWithLimit',
              path: 'src/components/Input/Input.stories.tsx#textAreaWithLimit',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withRevealAndCopy.displayName = 'withRevealAndCopy'),
          (withRevealAndCopy.__docgenInfo = {
            description: '',
            displayName: 'withRevealAndCopy',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#withRevealAndCopy'
            ] = {
              docgenInfo: withRevealAndCopy.__docgenInfo,
              name: 'withRevealAndCopy',
              path: 'src/components/Input/Input.stories.tsx#withRevealAndCopy',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withCustomActions.displayName = 'withCustomActions'),
          (withCustomActions.__docgenInfo = {
            description: '',
            displayName: 'withCustomActions',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#withCustomActions'
            ] = {
              docgenInfo: withCustomActions.__docgenInfo,
              name: 'withCustomActions',
              path: 'src/components/Input/Input.stories.tsx#withCustomActions',
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
              'src/components/Input/Input.stories.tsx#withBeforeAndAfterLabel'
            ] = {
              docgenInfo: withBeforeAndAfterLabel.__docgenInfo,
              name: 'withBeforeAndAfterLabel',
              path: 'src/components/Input/Input.stories.tsx#withBeforeAndAfterLabel',
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
              'src/components/Input/Input.stories.tsx#size'
            ] = {
              docgenInfo: size.__docgenInfo,
              name: 'size',
              path: 'src/components/Input/Input.stories.tsx#size',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(borderless.displayName = 'borderless'),
          (borderless.__docgenInfo = {
            description: '',
            displayName: 'borderless',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#borderless'
            ] = {
              docgenInfo: borderless.__docgenInfo,
              name: 'borderless',
              path: 'src/components/Input/Input.stories.tsx#borderless',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(date.displayName = 'date'),
          (date.__docgenInfo = {
            description: '',
            displayName: 'date',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Input/Input.stories.tsx#date'
            ] = {
              docgenInfo: date.__docgenInfo,
              name: 'date',
              path: 'src/components/Input/Input.stories.tsx#date',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconPackage/IconPackage.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return IconPackage_IconPackage
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
      var Package = (0, react.forwardRef)(function (_ref, ref) {
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
          react.createElement('line', {
            x1: '16.5',
            y1: '9.4',
            x2: '7.5',
            y2: '4.21',
          }),
          react.createElement('path', {
            d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
          }),
          react.createElement('polyline', {
            points: '3.27 6.96 12 12.01 20.73 6.96',
          }),
          react.createElement('line', {
            x1: '12',
            y1: '22.08',
            x2: '12',
            y2: '12',
          })
        )
      })
      ;(Package.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (Package.displayName = 'Package')
      var icons_package = Package,
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconPackage(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, {
          icon: icons_package,
          ...props,
        })
      }
      IconPackage.displayName = 'IconPackage'
      var IconPackage_IconPackage = IconPackage
      try {
        ;(IconPackage.displayName = 'IconPackage'),
          (IconPackage.__docgenInfo = {
            description: '',
            displayName: 'IconPackage',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconPackage/IconPackage.tsx#IconPackage'
            ] = {
              docgenInfo: IconPackage.__docgenInfo,
              name: 'IconPackage',
              path: 'src/components/Icon/icons/IconPackage/IconPackage.tsx#IconPackage',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    '../../node_modules/react-feather/dist/icons/alert-circle.js': function (
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
      var AlertCircle = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
        function (_ref, ref) {
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
            react__WEBPACK_IMPORTED_MODULE_0__.createElement('circle', {
              cx: '12',
              cy: '12',
              r: '10',
            }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
              x1: '12',
              y1: '8',
              x2: '12',
              y2: '12',
            }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
              x1: '12',
              y1: '16',
              x2: '12.01',
              y2: '16',
            })
          )
        }
      )
      ;(AlertCircle.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (AlertCircle.displayName = 'AlertCircle'),
        (__webpack_exports__.Z = AlertCircle)
    },
    '../../node_modules/react-feather/dist/icons/copy.js': function (
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
      var Copy = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('rect', {
            x: '9',
            y: '9',
            width: '13',
            height: '13',
            rx: '2',
            ry: '2',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
          })
        )
      })
      ;(Copy.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Copy.displayName = 'Copy'),
        (__webpack_exports__.Z = Copy)
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
