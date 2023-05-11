'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [8256],
  {
    './src/stories/Button.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomTag: function () {
            return CustomTag
          },
          Icon: function () {
            return Icon
          },
          Primary: function () {
            return Primary
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          allButtonsWithSizes: function () {
            return allButtonsWithSizes
          },
          centeredLoading: function () {
            return centeredLoading
          },
          customStyle: function () {
            return customStyle
          },
          default: function () {
            return Button_stories
          },
          forwardRef: function () {
            return forwardRef
          },
          fullwidth: function () {
            return fullwidth
          },
          loading: function () {
            return loading
          },
          onlyIcon: function () {
            return onlyIcon
          },
          rightIcon: function () {
            return rightIcon
          },
        })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        Button = __webpack_require__('./src/components/Button.tsx'),
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
      var Briefcase = (0, react.forwardRef)(function (_ref, ref) {
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
          react.createElement('rect', {
            x: '2',
            y: '7',
            width: '20',
            height: '14',
            rx: '2',
            ry: '2',
          }),
          react.createElement('path', {
            d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
          })
        )
      })
      ;(Briefcase.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (Briefcase.displayName = 'Briefcase')
      var briefcase = Briefcase,
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconBriefcase(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: briefcase, ...props })
      }
      IconBriefcase.displayName = 'IconBriefcase'
      var IconBriefcase_IconBriefcase = IconBriefcase
      try {
        ;(IconBriefcase.displayName = 'IconBriefcase'),
          (IconBriefcase.__docgenInfo = {
            description: '',
            displayName: 'IconBriefcase',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconBriefcase/IconBriefcase.tsx#IconBriefcase'
            ] = {
              docgenInfo: IconBriefcase.__docgenInfo,
              name: 'IconBriefcase',
              path: 'src/components/Icon/icons/IconBriefcase/IconBriefcase.tsx#IconBriefcase',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var IconChevronRight = __webpack_require__(
          './src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx'
        ),
        Button_stories = {
          title: 'Elements/Button',
          component: Button.z,
          tags: ['autodocs'],
        }
      const Primary = (args) =>
        (0, jsx_runtime.jsx)(Button.z, { ...args, children: 'Primary' })
      Primary.displayName = 'Primary'
      const customStyle = (args) =>
        (0, jsx_runtime.jsx)(Button.z, { ...args, children: 'Custom Style' })
      customStyle.displayName = 'customStyle'
      const Icon = (args) =>
        (0, jsx_runtime.jsx)(Button.z, { ...args, children: 'Button' })
      Icon.displayName = 'Icon'
      const rightIcon = (args) =>
        (0, jsx_runtime.jsx)(Button.z, { ...args, children: 'Button' })
      rightIcon.displayName = 'rightIcon'
      const fullwidth = (args) =>
        (0, jsx_runtime.jsx)(Button.z, {
          ...args,
          children: 'Fullwidth Button',
        })
      fullwidth.displayName = 'fullwidth'
      const onlyIcon = (args) => (0, jsx_runtime.jsx)(Button.z, { ...args })
      onlyIcon.displayName = 'onlyIcon'
      const loading = (args) => (0, jsx_runtime.jsx)(Button.z, { ...args })
      loading.displayName = 'loading'
      const centeredLoading = (args) =>
        (0, jsx_runtime.jsx)(Button.z, {
          ...args,
          children: 'Loading icon is centered',
        })
      centeredLoading.displayName = 'centeredLoading'
      const forwardRef = () => {
          const buttonRef = (0, react.useRef)(null),
            [msg, setMsg] = (0, react.useState)(
              'Click button to console.log Ref'
            )
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(Button.z, {
                ref: buttonRef,
                onClick: function onClick() {
                  setMsg(`button:${buttonRef?.current}  `)
                },
                children: 'forwardRef Button',
              }),
              (0, jsx_runtime.jsx)('p', {
                style: { color: '#666666' },
                children: msg,
              }),
            ],
          })
        },
        allButtonsWithSizes = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)('div', {
              className: 'flex flex-col space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex space-x-4',
                  children: [
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      children: 'Primary',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'default',
                      children: 'Default',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'secondary',
                      children: 'Secondary',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'alternative',
                      children: 'Alternative',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'link',
                      children: 'Link',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'text',
                      children: 'Text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'dashed',
                      children: 'Dashed',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'outline',
                      children: 'Outline',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'danger',
                      children: 'Danger',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'tiny',
                      type: 'warning',
                      children: 'Warning',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex space-x-4',
                  children: [
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      children: 'Primary',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'default',
                      children: 'Default',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'secondary',
                      children: 'Secondary',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'alternative',
                      children: 'Alternative',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'link',
                      children: 'Link',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'text',
                      children: 'Text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'dashed',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'outline',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'danger',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'small',
                      type: 'warning',
                      children: 'Button text',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex space-x-4',
                  children: [
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'default',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'secondary',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'alternative',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'link',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'text',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'dashed',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'outline',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'danger',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'medium',
                      type: 'warning',
                      children: 'Button text',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex space-x-4',
                  children: [
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'default',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'secondary',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'alternative',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'link',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'text',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'dashed',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'outline',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'danger',
                      children: 'Button text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'large',
                      type: 'warning',
                      children: 'Button text',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex space-x-4',
                  children: [
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      children: 'Primary',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'default',
                      children: 'Default',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'secondary',
                      children: 'Secondary',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'alternative',
                      children: 'Alternative',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'link',
                      children: 'Link',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'text',
                      children: 'Text',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'dashed',
                      children: 'Dashed',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'outline',
                      children: 'Outline',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'danger',
                      children: 'Danger',
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      ...args,
                      size: 'xlarge',
                      type: 'warning',
                      children: 'Warning',
                    }),
                  ],
                }),
              ],
            }),
          }),
        CustomTag = (args) =>
          (0, jsx_runtime.jsx)(Button.z, { ...args, children: 'Button text' })
      CustomTag.displayName = 'CustomTag'
      const icon = (0, jsx_runtime.jsx)(IconBriefcase_IconBriefcase, {})
      ;(Icon.args = { type: 'primary', icon: icon }),
        (customStyle.args = {
          type: 'primary',
          style: { backgroundColor: 'blue', color: 'white' },
        }),
        (rightIcon.args = {
          type: 'primary',
          iconRight: (0, jsx_runtime.jsx)(IconChevronRight.Z, {
            strokeWidth: 2,
          }),
        }),
        (fullwidth.args = { type: 'primary', block: !0 }),
        (onlyIcon.args = { icon: icon }),
        (loading.args = { loading: !0 }),
        (centeredLoading.args = { loading: !0, loadingCentered: !0 }),
        (allButtonsWithSizes.args = { loading: !1, danger: !1 }),
        (CustomTag.args = { as: 'span' }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...Primary.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Button {...args}>Primary</Button>',
              ...Primary.parameters?.docs?.source,
            },
          },
        }),
        (customStyle.parameters = {
          ...customStyle.parameters,
          docs: {
            ...customStyle.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Button {...args}>Custom Style</Button>',
              ...customStyle.parameters?.docs?.source,
            },
          },
        }),
        (Icon.parameters = {
          ...Icon.parameters,
          docs: {
            ...Icon.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Button {...args}>Button</Button>',
              ...Icon.parameters?.docs?.source,
            },
          },
        }),
        (rightIcon.parameters = {
          ...rightIcon.parameters,
          docs: {
            ...rightIcon.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Button {...args}>Button</Button>',
              ...rightIcon.parameters?.docs?.source,
            },
          },
        }),
        (fullwidth.parameters = {
          ...fullwidth.parameters,
          docs: {
            ...fullwidth.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Button {...args}>Fullwidth Button</Button>',
              ...fullwidth.parameters?.docs?.source,
            },
          },
        }),
        (onlyIcon.parameters = {
          ...onlyIcon.parameters,
          docs: {
            ...onlyIcon.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Button {...args} />',
              ...onlyIcon.parameters?.docs?.source,
            },
          },
        }),
        (loading.parameters = {
          ...loading.parameters,
          docs: {
            ...loading.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Button {...args} />',
              ...loading.parameters?.docs?.source,
            },
          },
        }),
        (centeredLoading.parameters = {
          ...centeredLoading.parameters,
          docs: {
            ...centeredLoading.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Button {...args}>Loading icon is centered</Button>',
              ...centeredLoading.parameters?.docs?.source,
            },
          },
        }),
        (forwardRef.parameters = {
          ...forwardRef.parameters,
          docs: {
            ...forwardRef.parameters?.docs,
            source: {
              originalSource:
                "() => {\n  const buttonRef = useRef(null);\n  const [msg, setMsg] = useState('Click button to console.log Ref');\n  function onClick() {\n    const message = `button:${buttonRef?.current}  `;\n    setMsg(message);\n  }\n  return <>\n      <Button ref={buttonRef} onClick={onClick}>\n        forwardRef Button\n      </Button>\n\n      <p style={{\n      color: '#666666'\n    }}>{msg}</p>\n    </>;\n}",
              ...forwardRef.parameters?.docs?.source,
            },
          },
        }),
        (allButtonsWithSizes.parameters = {
          ...allButtonsWithSizes.parameters,
          docs: {
            ...allButtonsWithSizes.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <div className="flex flex-col space-y-4">\n      <div className="flex space-x-4">\n        <Button {...args} size="tiny">\n          Primary\n        </Button>\n        <Button {...args} size="tiny" type="default">\n          Default\n        </Button>\n        <Button {...args} size="tiny" type="secondary">\n          Secondary\n        </Button>\n        <Button {...args} size="tiny" type="alternative">\n          Alternative\n        </Button>\n        <Button {...args} size="tiny" type="link">\n          Link\n        </Button>\n        <Button {...args} size="tiny" type="text">\n          Text\n        </Button>\n        <Button {...args} size="tiny" type="dashed">\n          Dashed\n        </Button>\n        <Button {...args} size="tiny" type="outline">\n          Outline\n        </Button>\n        <Button {...args} size="tiny" type="danger">\n          Danger\n        </Button>\n        <Button {...args} size="tiny" type="warning">\n          Warning\n        </Button>\n      </div>\n\n      <div className="flex space-x-4">\n        <Button {...args} size="small">\n          Primary\n        </Button>\n        <Button {...args} size="small" type="default">\n          Default\n        </Button>\n        <Button {...args} size="small" type="secondary">\n          Secondary\n        </Button>\n        <Button {...args} size="small" type="alternative">\n          Alternative\n        </Button>\n        <Button {...args} size="small" type="link">\n          Link\n        </Button>\n        <Button {...args} size="small" type="text">\n          Text\n        </Button>\n        <Button {...args} size="small" type="dashed">\n          Button text\n        </Button>\n        <Button {...args} size="small" type="outline">\n          Button text\n        </Button>\n        <Button {...args} size="small" type="danger">\n          Button text\n        </Button>\n        <Button {...args} size="small" type="warning">\n          Button text\n        </Button>\n      </div>\n      <div className="flex space-x-4">\n        <Button {...args} size="medium">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="default">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="secondary">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="alternative">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="link">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="text">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="dashed">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="outline">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="danger">\n          Button text\n        </Button>\n        <Button {...args} size="medium" type="warning">\n          Button text\n        </Button>\n      </div>\n      <div className="flex space-x-4">\n        <Button {...args} size="large">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="default">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="secondary">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="alternative">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="link">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="text">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="dashed">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="outline">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="danger">\n          Button text\n        </Button>\n        <Button {...args} size="large" type="warning">\n          Button text\n        </Button>\n      </div>\n      <div className="flex space-x-4">\n        <Button {...args} size="xlarge">\n          Primary\n        </Button>\n        <Button {...args} size="xlarge" type="default">\n          Default\n        </Button>\n        <Button {...args} size="xlarge" type="secondary">\n          Secondary\n        </Button>\n        <Button {...args} size="xlarge" type="alternative">\n          Alternative\n        </Button>\n        <Button {...args} size="xlarge" type="link">\n          Link\n        </Button>\n        <Button {...args} size="xlarge" type="text">\n          Text\n        </Button>\n        <Button {...args} size="xlarge" type="dashed">\n          Dashed\n        </Button>\n        <Button {...args} size="xlarge" type="outline">\n          Outline\n        </Button>\n        <Button {...args} size="xlarge" type="danger">\n          Danger\n        </Button>\n        <Button {...args} size="xlarge" type="warning">\n          Warning\n        </Button>\n      </div>\n    </div>\n  </>',
              ...allButtonsWithSizes.parameters?.docs?.source,
            },
          },
        }),
        (CustomTag.parameters = {
          ...CustomTag.parameters,
          docs: {
            ...CustomTag.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Button {...args}>Button text</Button>',
              ...CustomTag.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Primary',
        'customStyle',
        'Icon',
        'rightIcon',
        'fullwidth',
        'onlyIcon',
        'loading',
        'centeredLoading',
        'forwardRef',
        'allButtonsWithSizes',
        'CustomTag',
      ]
      try {
        ;(Primary.displayName = 'Primary'),
          (Primary.__docgenInfo = {
            description: '',
            displayName: 'Primary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Button.stories.tsx#Primary'] =
              {
                docgenInfo: Primary.__docgenInfo,
                name: 'Primary',
                path: 'src/stories/Button.stories.tsx#Primary',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(customStyle.displayName = 'customStyle'),
          (customStyle.__docgenInfo = {
            description: '',
            displayName: 'customStyle',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Button.stories.tsx#customStyle'
            ] = {
              docgenInfo: customStyle.__docgenInfo,
              name: 'customStyle',
              path: 'src/stories/Button.stories.tsx#customStyle',
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
            (STORYBOOK_REACT_CLASSES['src/stories/Button.stories.tsx#Icon'] = {
              docgenInfo: Icon.__docgenInfo,
              name: 'Icon',
              path: 'src/stories/Button.stories.tsx#Icon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(rightIcon.displayName = 'rightIcon'),
          (rightIcon.__docgenInfo = {
            description: '',
            displayName: 'rightIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Button.stories.tsx#rightIcon'
            ] = {
              docgenInfo: rightIcon.__docgenInfo,
              name: 'rightIcon',
              path: 'src/stories/Button.stories.tsx#rightIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(fullwidth.displayName = 'fullwidth'),
          (fullwidth.__docgenInfo = {
            description: '',
            displayName: 'fullwidth',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Button.stories.tsx#fullwidth'
            ] = {
              docgenInfo: fullwidth.__docgenInfo,
              name: 'fullwidth',
              path: 'src/stories/Button.stories.tsx#fullwidth',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(onlyIcon.displayName = 'onlyIcon'),
          (onlyIcon.__docgenInfo = {
            description: '',
            displayName: 'onlyIcon',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Button.stories.tsx#onlyIcon'
            ] = {
              docgenInfo: onlyIcon.__docgenInfo,
              name: 'onlyIcon',
              path: 'src/stories/Button.stories.tsx#onlyIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(loading.displayName = 'loading'),
          (loading.__docgenInfo = {
            description: '',
            displayName: 'loading',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Button.stories.tsx#loading'] =
              {
                docgenInfo: loading.__docgenInfo,
                name: 'loading',
                path: 'src/stories/Button.stories.tsx#loading',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(centeredLoading.displayName = 'centeredLoading'),
          (centeredLoading.__docgenInfo = {
            description: '',
            displayName: 'centeredLoading',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Button.stories.tsx#centeredLoading'
            ] = {
              docgenInfo: centeredLoading.__docgenInfo,
              name: 'centeredLoading',
              path: 'src/stories/Button.stories.tsx#centeredLoading',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(allButtonsWithSizes.displayName = 'allButtonsWithSizes'),
          (allButtonsWithSizes.__docgenInfo = {
            description: '',
            displayName: 'allButtonsWithSizes',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Button.stories.tsx#allButtonsWithSizes'
            ] = {
              docgenInfo: allButtonsWithSizes.__docgenInfo,
              name: 'allButtonsWithSizes',
              path: 'src/stories/Button.stories.tsx#allButtonsWithSizes',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(CustomTag.displayName = 'CustomTag'),
          (CustomTag.__docgenInfo = {
            description: '',
            displayName: 'CustomTag',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Button.stories.tsx#CustomTag'
            ] = {
              docgenInfo: CustomTag.__docgenInfo,
              name: 'CustomTag',
              path: 'src/stories/Button.stories.tsx#CustomTag',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Button.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return Button
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        IconContext = __webpack_require__(
          './src/components/Icon/IconContext.tsx'
        ),
        IconLoader = __webpack_require__(
          './src/components/Icon/icons/IconLoader/IconLoader.tsx'
        ),
        handler = __webpack_require__('./src/theme/handler.ts')
      var warning = function warn(assert, scope, message) {
          0
        },
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const Button = react.forwardRef((_ref, ref) => {
        let {
          block: block,
          className: className,
          children: children,
          danger: danger,
          disabled: disabled = !1,
          onClick: onClick,
          icon: icon,
          iconRight: iconRight,
          loading: loading = !1,
          loadingCentered: loadingCentered = !1,
          shadow: shadow = !0,
          size: size = 'tiny',
          style: style,
          type: type = 'primary',
          htmlType: htmlType = 'button',
          ariaSelected: ariaSelected,
          ariaControls: ariaControls,
          tabIndex: tabIndex,
          role: role,
          as: as,
          textAlign: textAlign = 'center',
          ...props
        } = _ref
        const hasIcon = loading || icon
        warning(
          hasIcon && !props['aria-label'] && !children,
          'Button',
          'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
        )
        const buttonRef = (0, react.useRef)(null)
        ;(0, react.useImperativeHandle)(ref, () => ({
          button: () => buttonRef.current,
        }))
        let __styles = (0, handler.Z)('button'),
          classes = [__styles.base],
          containerClasses = [__styles.container]
        classes.push(__styles.type[type]),
          block &&
            (containerClasses.push(__styles.block),
            classes.push(__styles.block)),
          shadow &&
            'link' !== type &&
            'text' !== type &&
            classes.push(__styles.shadow),
          size && classes.push(__styles.size[size]),
          className && classes.push(className),
          disabled && classes.push(__styles.disabled)
        const iconLoaderClasses = [__styles.loading],
          CustomButton = (_ref2) => {
            let { ...props } = _ref2
            const Tag = as
            return (0, jsx_runtime.jsx)(Tag, { ...props })
          },
          buttonContent = (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              hasIcon &&
                (loading
                  ? (0, jsx_runtime.jsx)(IconLoader.Z, {
                      size: size,
                      className: iconLoaderClasses.join(' '),
                    })
                  : icon
                  ? (0, jsx_runtime.jsx)(IconContext.P.Provider, {
                      value: { contextSize: size },
                      children: icon,
                    })
                  : null),
              children &&
                (0, jsx_runtime.jsx)('span', {
                  className: __styles.label,
                  children: children,
                }),
              iconRight &&
                !loading &&
                (0, jsx_runtime.jsx)(IconContext.P.Provider, {
                  value: { contextSize: size },
                  children: iconRight,
                }),
            ],
          })
        return as
          ? (0, jsx_runtime.jsx)(CustomButton, {
              ...props,
              className: classes.join(' '),
              onClick: onClick,
              style: style,
              children: buttonContent,
            })
          : (0, jsx_runtime.jsx)('button', {
              ...props,
              ref: buttonRef,
              className: classes.join(' '),
              disabled: loading || (disabled && !0),
              onClick: onClick,
              style: style,
              type: htmlType,
              'aria-selected': ariaSelected,
              'aria-controls': ariaControls,
              tabIndex: tabIndex,
              role: role,
              form: props.form,
              children: buttonContent,
            })
      })
      try {
        ;(Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
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
              danger: {
                defaultValue: null,
                description: '',
                name: 'danger',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: 'MouseEventHandler<HTMLButtonElement>' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              iconRight: {
                defaultValue: null,
                description: '',
                name: 'iconRight',
                required: !1,
                type: { name: 'ReactNode' },
              },
              loading: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              loadingCentered: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'loadingCentered',
                required: !1,
                type: { name: 'boolean' },
              },
              shadow: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'shadow',
                required: !1,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: { value: 'tiny' },
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
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              type: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"danger"' },
                    { value: '"primary"' },
                    { value: '"default"' },
                    { value: '"secondary"' },
                    { value: '"alternative"' },
                    { value: '"outline"' },
                    { value: '"dashed"' },
                    { value: '"link"' },
                    { value: '"text"' },
                    { value: '"warning"' },
                  ],
                },
              },
              htmlType: {
                defaultValue: { value: 'button' },
                description: '',
                name: 'htmlType',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"button"' },
                    { value: '"submit"' },
                    { value: '"reset"' },
                  ],
                },
              },
              ariaSelected: {
                defaultValue: null,
                description: '',
                name: 'ariaSelected',
                required: !1,
                type: { name: 'boolean' },
              },
              ariaControls: {
                defaultValue: null,
                description: '',
                name: 'ariaControls',
                required: !1,
                type: { name: 'string' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '0' }, { value: '-1' }],
                },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              as: {
                defaultValue: null,
                description: '',
                name: 'as',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"symbol"' },
                    { value: '"object"' },
                    { value: '"small"' },
                    { value: '"style"' },
                    { value: '"link"' },
                    { value: '"text"' },
                    { value: '"button"' },
                    { value: '"a"' },
                    { value: '"abbr"' },
                    { value: '"address"' },
                    { value: '"area"' },
                    { value: '"article"' },
                    { value: '"aside"' },
                    { value: '"audio"' },
                    { value: '"b"' },
                    { value: '"base"' },
                    { value: '"bdi"' },
                    { value: '"bdo"' },
                    { value: '"big"' },
                    { value: '"blockquote"' },
                    { value: '"body"' },
                    { value: '"br"' },
                    { value: '"canvas"' },
                    { value: '"caption"' },
                    { value: '"center"' },
                    { value: '"cite"' },
                    { value: '"code"' },
                    { value: '"col"' },
                    { value: '"colgroup"' },
                    { value: '"data"' },
                    { value: '"datalist"' },
                    { value: '"dd"' },
                    { value: '"del"' },
                    { value: '"details"' },
                    { value: '"dfn"' },
                    { value: '"dialog"' },
                    { value: '"div"' },
                    { value: '"dl"' },
                    { value: '"dt"' },
                    { value: '"em"' },
                    { value: '"embed"' },
                    { value: '"fieldset"' },
                    { value: '"figcaption"' },
                    { value: '"figure"' },
                    { value: '"footer"' },
                    { value: '"form"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"head"' },
                    { value: '"header"' },
                    { value: '"hgroup"' },
                    { value: '"hr"' },
                    { value: '"html"' },
                    { value: '"i"' },
                    { value: '"iframe"' },
                    { value: '"img"' },
                    { value: '"input"' },
                    { value: '"ins"' },
                    { value: '"kbd"' },
                    { value: '"keygen"' },
                    { value: '"label"' },
                    { value: '"legend"' },
                    { value: '"li"' },
                    { value: '"main"' },
                    { value: '"map"' },
                    { value: '"mark"' },
                    { value: '"menu"' },
                    { value: '"menuitem"' },
                    { value: '"meta"' },
                    { value: '"meter"' },
                    { value: '"nav"' },
                    { value: '"noindex"' },
                    { value: '"noscript"' },
                    { value: '"ol"' },
                    { value: '"optgroup"' },
                    { value: '"option"' },
                    { value: '"output"' },
                    { value: '"p"' },
                    { value: '"param"' },
                    { value: '"picture"' },
                    { value: '"pre"' },
                    { value: '"progress"' },
                    { value: '"q"' },
                    { value: '"rp"' },
                    { value: '"rt"' },
                    { value: '"ruby"' },
                    { value: '"s"' },
                    { value: '"samp"' },
                    { value: '"slot"' },
                    { value: '"script"' },
                    { value: '"section"' },
                    { value: '"select"' },
                    { value: '"source"' },
                    { value: '"span"' },
                    { value: '"strong"' },
                    { value: '"sub"' },
                    { value: '"summary"' },
                    { value: '"sup"' },
                    { value: '"table"' },
                    { value: '"template"' },
                    { value: '"tbody"' },
                    { value: '"td"' },
                    { value: '"textarea"' },
                    { value: '"tfoot"' },
                    { value: '"th"' },
                    { value: '"thead"' },
                    { value: '"time"' },
                    { value: '"title"' },
                    { value: '"tr"' },
                    { value: '"track"' },
                    { value: '"u"' },
                    { value: '"ul"' },
                    { value: '"var"' },
                    { value: '"video"' },
                    { value: '"wbr"' },
                    { value: '"webview"' },
                    { value: '"svg"' },
                    { value: '"animate"' },
                    { value: '"animateMotion"' },
                    { value: '"animateTransform"' },
                    { value: '"circle"' },
                    { value: '"clipPath"' },
                    { value: '"defs"' },
                    { value: '"desc"' },
                    { value: '"ellipse"' },
                    { value: '"feBlend"' },
                    { value: '"feColorMatrix"' },
                    { value: '"feComponentTransfer"' },
                    { value: '"feComposite"' },
                    { value: '"feConvolveMatrix"' },
                    { value: '"feDiffuseLighting"' },
                    { value: '"feDisplacementMap"' },
                    { value: '"feDistantLight"' },
                    { value: '"feDropShadow"' },
                    { value: '"feFlood"' },
                    { value: '"feFuncA"' },
                    { value: '"feFuncB"' },
                    { value: '"feFuncG"' },
                    { value: '"feFuncR"' },
                    { value: '"feGaussianBlur"' },
                    { value: '"feImage"' },
                    { value: '"feMerge"' },
                    { value: '"feMergeNode"' },
                    { value: '"feMorphology"' },
                    { value: '"feOffset"' },
                    { value: '"fePointLight"' },
                    { value: '"feSpecularLighting"' },
                    { value: '"feSpotLight"' },
                    { value: '"feTile"' },
                    { value: '"feTurbulence"' },
                    { value: '"filter"' },
                    { value: '"foreignObject"' },
                    { value: '"g"' },
                    { value: '"image"' },
                    { value: '"line"' },
                    { value: '"linearGradient"' },
                    { value: '"marker"' },
                    { value: '"mask"' },
                    { value: '"metadata"' },
                    { value: '"mpath"' },
                    { value: '"path"' },
                    { value: '"pattern"' },
                    { value: '"polygon"' },
                    { value: '"polyline"' },
                    { value: '"radialGradient"' },
                    { value: '"rect"' },
                    { value: '"stop"' },
                    { value: '"switch"' },
                    { value: '"textPath"' },
                    { value: '"tspan"' },
                    { value: '"use"' },
                    { value: '"view"' },
                  ],
                },
              },
              form: {
                defaultValue: null,
                description: '',
                name: 'form',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: { value: 'center' },
                description: '',
                name: 'textAlign',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"center"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/components/Button.tsx#Button',
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
    './src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__('../../node_modules/react/index.js')
        var react_feather_dist_icons_chevron_right__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/react-feather/dist/icons/chevron-right.js'
            ),
          _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Icon/IconBase.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        function IconChevronRight(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
            {
              icon: react_feather_dist_icons_chevron_right__WEBPACK_IMPORTED_MODULE_3__.Z,
              ...props,
            }
          )
        }
        ;(IconChevronRight.displayName = 'IconChevronRight'),
          (__webpack_exports__.Z = IconChevronRight)
        try {
          ;(IconChevronRight.displayName = 'IconChevronRight'),
            (IconChevronRight.__docgenInfo = {
              description: '',
              displayName: 'IconChevronRight',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx#IconChevronRight'
              ] = {
                docgenInfo: IconChevronRight.__docgenInfo,
                name: 'IconChevronRight',
                path: 'src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx#IconChevronRight',
              })
        } catch (__react_docgen_typescript_loader_error) {}
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
    '../../node_modules/react-feather/dist/icons/chevron-right.js': function (
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
      var ChevronRight = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
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
            react__WEBPACK_IMPORTED_MODULE_0__.createElement('polyline', {
              points: '9 18 15 12 9 6',
            })
          )
        }
      )
      ;(ChevronRight.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (ChevronRight.displayName = 'ChevronRight'),
        (__webpack_exports__.Z = ChevronRight)
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
