'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [9740],
  {
    './src/components/InputNumber/InputNumber.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Controlled: function () {
            return Controlled
          },
          Default: function () {
            return Default
          },
          ErrorState: function () {
            return ErrorState
          },
          WithIcon: function () {
            return WithIcon
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/InputNumber/InputNumber.tsx'
        ),
        _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Icon/icons/IconPackage/IconPackage.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      __webpack_exports__.default = {
        title: 'Data Input/InputNumber',
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
      const WithIcon = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...args }
        )
      WithIcon.displayName = 'WithIcon'
      const Controlled = (props) => {
        const [state, setState] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {}),
          onChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            (e) => {
              setState(e.currentTarget.value)
            },
            []
          )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...props, onChange: onChange, value: state }
        )
      }
      ;(Controlled.displayName = 'Controlled'),
        (Default.args = {
          label: 'Max of 100 and min of 0',
          disabled: !1,
          layout: 'vertical',
          max: 100,
          min: 0,
        }),
        (ErrorState.args = {
          disabled: !1,
          layout: 'vertical',
          label: 'Input Number with an error message',
          error: 'Input Number must be in range',
        }),
        (WithIcon.args = {
          label: 'Max of 100 and min of 0 with a Icon',
          disabled: !1,
          layout: 'vertical',
          max: 100,
          min: 0,
          icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _index__WEBPACK_IMPORTED_MODULE_3__.Z,
            {}
          ),
        }),
        (Controlled.args = {
          label: 'Max of 100 and min of 0',
          disabled: !1,
          layout: 'vertical',
          max: 100,
          min: 0,
        }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: '(args: any) => <InputNumber {...args} />',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (ErrorState.parameters = {
          ...ErrorState.parameters,
          docs: {
            ...ErrorState.parameters?.docs,
            source: {
              originalSource: '(args: any) => <InputNumber {...args} />',
              ...ErrorState.parameters?.docs?.source,
            },
          },
        }),
        (WithIcon.parameters = {
          ...WithIcon.parameters,
          docs: {
            ...WithIcon.parameters?.docs,
            source: {
              originalSource: '(args: any) => <InputNumber {...args} />',
              ...WithIcon.parameters?.docs?.source,
            },
          },
        }),
        (Controlled.parameters = {
          ...Controlled.parameters,
          docs: {
            ...Controlled.parameters?.docs,
            source: {
              originalSource:
                '(props: any) => {\n  const [state, setState] = useState(() => undefined);\n  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {\n    // console.log({ e, value: e.currentTarget.value })\n    setState(e.currentTarget.value);\n  }, []);\n  return <InputNumber {...props} onChange={onChange} value={state} />;\n}',
              ...Controlled.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'ErrorState',
        'WithIcon',
        'Controlled',
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
              'src/components/InputNumber/InputNumber.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/InputNumber/InputNumber.stories.tsx#Default',
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
              'src/components/InputNumber/InputNumber.stories.tsx#ErrorState'
            ] = {
              docgenInfo: ErrorState.__docgenInfo,
              name: 'ErrorState',
              path: 'src/components/InputNumber/InputNumber.stories.tsx#ErrorState',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(WithIcon.displayName = 'WithIcon'),
          (WithIcon.__docgenInfo = {
            description: '',
            displayName: 'WithIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputNumber/InputNumber.stories.tsx#WithIcon'
            ] = {
              docgenInfo: WithIcon.__docgenInfo,
              name: 'WithIcon',
              path: 'src/components/InputNumber/InputNumber.stories.tsx#WithIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Controlled.displayName = 'Controlled'),
          (Controlled.__docgenInfo = {
            description: '',
            displayName: 'Controlled',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputNumber/InputNumber.stories.tsx#Controlled'
            ] = {
              docgenInfo: Controlled.__docgenInfo,
              name: 'Controlled',
              path: 'src/components/InputNumber/InputNumber.stories.tsx#Controlled',
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
    './src/components/Icon/icons/IconAlertCircle/IconAlertCircle.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__('../../node_modules/react/index.js')
        var react_feather_dist_icons_alert_circle__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/react-feather/dist/icons/alert-circle.js'
            ),
          _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Icon/IconBase.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        function IconAlertCircle(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
            {
              icon: react_feather_dist_icons_alert_circle__WEBPACK_IMPORTED_MODULE_3__.Z,
              ...props,
            }
          )
        }
        ;(IconAlertCircle.displayName = 'IconAlertCircle'),
          (__webpack_exports__.Z = IconAlertCircle)
        try {
          ;(IconAlertCircle.displayName = 'IconAlertCircle'),
            (IconAlertCircle.__docgenInfo = {
              description: '',
              displayName: 'IconAlertCircle',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/components/Icon/icons/IconAlertCircle/IconAlertCircle.tsx#IconAlertCircle'
              ] = {
                docgenInfo: IconAlertCircle.__docgenInfo,
                name: 'IconAlertCircle',
                path: 'src/components/Icon/icons/IconAlertCircle/IconAlertCircle.tsx#IconAlertCircle',
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
    './src/components/InputNumber/InputNumber.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/lib/Layout/FormLayout/FormLayout.tsx'),
        _lib_Layout_InputErrorIcon__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./src/lib/Layout/InputErrorIcon.tsx'),
        _lib_Layout_InputIconContainer__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./src/lib/Layout/InputIconContainer.tsx'),
        _Form_FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function InputNumber(_ref) {
        let {
          defaultValue: defaultValue,
          descriptionText: descriptionText,
          error: error,
          icon: icon,
          inputRef: inputRef,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          layout: layout,
          value: value,
          actions: actions,
          size: size = 'medium',
          validation: validation,
          id: id = '',
          name: name = '',
          ...props
        } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
            'inputNumber'
          ),
          {
            formContextOnChange: formContextOnChange,
            values: values,
            errors: errors,
            handleBlur: handleBlur,
            touched: touched,
            fieldLevelValidation: fieldLevelValidation,
          } = (0, _Form_FormContext__WEBPACK_IMPORTED_MODULE_3__.G)()
        values && !value && (value = values[id || name]),
          error ||
            (errors && !error && (error = errors[id || name]),
            (error = touched && touched[id || name] ? error : void 0)),
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            validation && fieldLevelValidation(id, validation(value))
          }, [])
        let inputClasses = [__styles.base]
        return (
          error && inputClasses.push(__styles.variants.error),
          error || inputClasses.push(__styles.variants.standard),
          icon && inputClasses.push(__styles.with_icon),
          size && inputClasses.push(__styles.size[size]),
          props.disabled && inputClasses.push(__styles.disabled),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: props.className,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _lib_Layout_FormLayout__WEBPACK_IMPORTED_MODULE_4__.l,
              {
                label: label,
                afterLabel: afterLabel,
                beforeLabel: beforeLabel,
                labelOptional: labelOptional,
                layout: layout,
                id: id,
                error: error,
                descriptionText: descriptionText,
                style: props.style,
                size: size,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
                  className: __styles.container,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      'input',
                      {
                        id: id,
                        name: name,
                        onChange: function onInputChange(e) {
                          props.onChange && props.onChange(e),
                            formContextOnChange && formContextOnChange(e),
                            validation &&
                              fieldLevelValidation(
                                id,
                                validation(e.target.value)
                              )
                        },
                        onBlur: function handleBlurEvent(e) {
                          handleBlur && handleBlur(e),
                            props.onBlur && props.onBlur(e)
                        },
                        type: 'number',
                        ref: inputRef,
                        value: value,
                        className: inputClasses.join(' '),
                        ...props,
                      }
                    ),
                    icon &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _lib_Layout_InputIconContainer__WEBPACK_IMPORTED_MODULE_5__.Z,
                        { icon: icon }
                      ),
                    error || actions
                      ? (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                          'div',
                          {
                            className: __styles.actions_container,
                            children: [
                              error &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  _lib_Layout_InputErrorIcon__WEBPACK_IMPORTED_MODULE_6__.Z,
                                  { size: size }
                                ),
                              actions && actions,
                            ],
                          }
                        )
                      : null,
                  ],
                }),
              }
            ),
          })
        )
      }
      ;(InputNumber.displayName = 'InputNumber'),
        (__webpack_exports__.Z = InputNumber)
      try {
        ;(InputNumber.displayName = 'InputNumber'),
          (InputNumber.__docgenInfo = {
            description: '',
            displayName: 'InputNumber',
            props: {
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | number' },
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
                type: { name: 'string' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'any' },
              },
              inputRef: {
                defaultValue: null,
                description: '',
                name: 'inputRef',
                required: !1,
                type: { name: 'RefObject<HTMLInputElement>' },
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
                type: { name: 'ReactNode' },
              },
              actions: {
                defaultValue: null,
                description: '',
                name: 'actions',
                required: !1,
                type: { name: 'ReactNode' },
              },
              layout: {
                defaultValue: null,
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
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
              'src/components/InputNumber/InputNumber.tsx#InputNumber'
            ] = {
              docgenInfo: InputNumber.__docgenInfo,
              name: 'InputNumber',
              path: 'src/components/InputNumber/InputNumber.tsx#InputNumber',
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
    './src/lib/Layout/InputErrorIcon.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return InputErrorIcon
        },
      })
      __webpack_require__('../../node_modules/react/index.js')
      var _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Icon/icons/IconAlertCircle/IconAlertCircle.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function InputErrorIcon(_ref) {
        let { style: style, size: size } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
          'inputErrorIcon'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: __styles.base,
          style: style,
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _index__WEBPACK_IMPORTED_MODULE_3__.Z,
            { size: size, strokeWidth: 2, className: '' }
          ),
        })
      }
      InputErrorIcon.displayName = 'InputErrorIcon'
      try {
        ;(InputErrorIcon.displayName = 'InputErrorIcon'),
          (InputErrorIcon.__docgenInfo = {
            description: '',
            displayName: 'InputErrorIcon',
            props: {
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              size: {
                defaultValue: null,
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Layout/InputErrorIcon.tsx#InputErrorIcon'
            ] = {
              docgenInfo: InputErrorIcon.__docgenInfo,
              name: 'InputErrorIcon',
              path: 'src/lib/Layout/InputErrorIcon.tsx#InputErrorIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/lib/Layout/InputIconContainer.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return InputIconContainer
        },
      })
      __webpack_require__('../../node_modules/react/index.js')
      var _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function InputIconContainer(_ref) {
        let { icon: icon } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
          'inputIconContainer'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: __styles.base,
          children: icon,
        })
      }
      InputIconContainer.displayName = 'InputIconContainer'
      try {
        ;(InputIconContainer.displayName = 'InputIconContainer'),
          (InputIconContainer.__docgenInfo = {
            description: '',
            displayName: 'InputIconContainer',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Layout/InputIconContainer.tsx#InputIconContainer'
            ] = {
              docgenInfo: InputIconContainer.__docgenInfo,
              name: 'InputIconContainer',
              path: 'src/lib/Layout/InputIconContainer.tsx#InputIconContainer',
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
  },
])
