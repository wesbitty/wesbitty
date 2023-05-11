'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [9705],
  {
    './src/components/Popover/Popover.stories.tsx': function (
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
            return Popover_stories
          },
        })
      var Button = __webpack_require__('./src/components/Button.tsx'),
        IconChevronDown = __webpack_require__(
          './src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx'
        ),
        index_module =
          (__webpack_require__('../../node_modules/react/index.js'),
          __webpack_require__(
            '../../node_modules/@radix-ui/react-popover/dist/index.module.js'
          )),
        IconX = __webpack_require__(
          './src/components/Icon/icons/IconX/IconX.tsx'
        ),
        handler = __webpack_require__('./src/theme/handler.ts'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Popover(_ref) {
        let {
          align: align = 'center',
          ariaLabel: ariaLabel,
          arrow: arrow = !1,
          children: children,
          className: className,
          defaultOpen: defaultOpen = !1,
          modal: modal,
          onOpenChange: onOpenChange,
          open: open,
          overlay: overlay,
          portalled: portalled,
          side: side = 'bottom',
          sideOffset: sideOffset = 6,
          style: style,
          header: header,
          footer: footer,
          size: size = 'content',
        } = _ref
        const __styles = (0, handler.Z)('popover')
        let classes = [__styles.content, __styles.size[size]]
        return (
          className && classes.push(className),
          (0, jsx_runtime.jsxs)(index_module.fC, {
            defaultOpen: defaultOpen,
            modal: modal,
            onOpenChange: onOpenChange,
            open: open,
            children: [
              (0, jsx_runtime.jsx)(index_module.xz, {
                className: __styles.trigger,
                'aria-label': ariaLabel,
                children: children,
              }),
              (0, jsx_runtime.jsxs)(index_module.VY, {
                sideOffset: sideOffset,
                side: side,
                align: align,
                className: classes.join(' '),
                style: style,
                portalled: portalled,
                children: [
                  arrow &&
                    (0, jsx_runtime.jsx)(index_module.Eh, { offset: 10 }),
                  header &&
                    (0, jsx_runtime.jsx)('div', {
                      className: __styles.header,
                      children: header,
                    }),
                  overlay,
                  footer &&
                    (0, jsx_runtime.jsx)('div', {
                      className: __styles.footer,
                      children: footer,
                    }),
                ],
              }),
            ],
          })
        )
      }
      function Close() {
        const __styles = (0, handler.Z)('popover')
        return (0, jsx_runtime.jsx)(index_module.x8, {
          className: __styles.close,
          children: (0, jsx_runtime.jsx)(IconX.Z, { size: 14, strokeWidth: 2 }),
        })
      }
      function Seperator() {
        const __styles = (0, handler.Z)('popover')
        return (0, jsx_runtime.jsx)('div', { className: __styles.seperator })
      }
      ;(Popover.displayName = 'Popover'),
        (Close.displayName = 'Close'),
        (Seperator.displayName = 'Seperator'),
        (Popover.Seperator = Seperator),
        (Popover.Close = Close)
      var Popover_Popover = Popover
      try {
        ;(Popover.displayName = 'Popover'),
          (Popover.__docgenInfo = {
            description: '',
            displayName: 'Popover',
            props: {
              align: {
                defaultValue: { value: 'center' },
                description: '',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"start"' },
                    { value: '"end"' },
                  ],
                },
              },
              ariaLabel: {
                defaultValue: null,
                description: '',
                name: 'ariaLabel',
                required: !1,
                type: { name: 'string' },
              },
              arrow: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'arrow',
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
              defaultOpen: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'defaultOpen',
                required: !1,
                type: { name: 'boolean' },
              },
              modal: {
                defaultValue: null,
                description: '',
                name: 'modal',
                required: !1,
                type: { name: 'boolean' },
              },
              onOpenChange: {
                defaultValue: null,
                description: '',
                name: 'onOpenChange',
                required: !1,
                type: { name: '(open: boolean) => void' },
              },
              open: {
                defaultValue: null,
                description: '',
                name: 'open',
                required: !1,
                type: { name: 'boolean' },
              },
              overlay: {
                defaultValue: null,
                description: '',
                name: 'overlay',
                required: !1,
                type: { name: 'ReactNode' },
              },
              portalled: {
                defaultValue: null,
                description: '',
                name: 'portalled',
                required: !1,
                type: { name: 'boolean' },
              },
              showClose: {
                defaultValue: null,
                description: '',
                name: 'showClose',
                required: !1,
                type: { name: 'boolean' },
              },
              side: {
                defaultValue: { value: 'bottom' },
                description: '',
                name: 'side',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"top"' },
                    { value: '"bottom"' },
                  ],
                },
              },
              sideOffset: {
                defaultValue: { value: '6' },
                description: '',
                name: 'sideOffset',
                required: !1,
                type: { name: 'number' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              header: {
                defaultValue: null,
                description: '',
                name: 'header',
                required: !1,
                type: { name: 'ReactNode' },
              },
              footer: {
                defaultValue: null,
                description: '',
                name: 'footer',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: { value: 'content' },
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
                    { value: '"content"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Popover/Popover.tsx#Popover'
            ] = {
              docgenInfo: Popover.__docgenInfo,
              name: 'Popover',
              path: 'src/components/Popover/Popover.tsx#Popover',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Input = __webpack_require__('./src/components/Input/Input.tsx'),
        Popover_stories = {
          title: 'Navigation/Popover',
          component: Popover_Popover,
        }
      const Default = (args) =>
        (0, jsx_runtime.jsx)('div', {
          className: 'flex justify-center',
          children: (0, jsx_runtime.jsx)(Popover_Popover, {
            ...args,
            side: 'bottom',
            align: 'end',
            size: 'content',
            portalled: !0,
            showClose: !0,
            header: (0, jsx_runtime.jsxs)('div', {
              className: 'flex justify-between items-center',
              children: [
                (0, jsx_runtime.jsx)(Button.z, {
                  type: 'default',
                  size: 'tiny',
                  children: 'Clear',
                }),
                (0, jsx_runtime.jsx)('h5', {
                  className: 'text-sm text-scale-1200',
                  children: 'Filter',
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  type: 'primary',
                  children: 'Save',
                }),
              ],
            }),
            overlay: [
              (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'py-6 space-y-4',
                  children: [
                    (0, jsx_runtime.jsx)(Input.Z, {
                      className: 'px-3',
                      size: 'tiny',
                      label: 'Width',
                      defaultValue: '100%',
                      descriptionText: 'Set the width of something',
                      layout: 'horizontal',
                    }),
                    (0, jsx_runtime.jsx)(Popover_Popover.Seperator, {}),
                    (0, jsx_runtime.jsx)(Input.Z, {
                      className: 'px-3',
                      size: 'tiny',
                      label: 'Width',
                      defaultValue: '100%',
                      descriptionText: 'Set the width of something',
                      layout: 'horizontal',
                    }),
                    (0, jsx_runtime.jsx)(Popover_Popover.Seperator, {}),
                    (0, jsx_runtime.jsx)(Input.Z, {
                      className: 'px-3',
                      size: 'tiny',
                      label: 'Width',
                      defaultValue: '100%',
                      descriptionText: 'Set the width of something',
                      layout: 'horizontal',
                    }),
                  ],
                }),
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'default',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for Popover',
            }),
          }),
        })
      ;(Default.displayName = 'Default'),
        (Default.args = {}),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <div className="flex justify-center">\n    <Popover {...args} side="bottom" align="end" size="content" portalled showClose header={<div className="flex justify-between items-center">\n          <Button type="default" size="tiny">\n            Clear\n          </Button>\n          <h5 className="text-sm text-scale-1200">Filter</h5>\n          <Button type="primary">Save</Button>\n        </div>} overlay={[<>\n          <div className="py-6 space-y-4">\n            <Input className="px-3" size="tiny" label="Width" defaultValue="100%" descriptionText="Set the width of something" layout="horizontal" />\n            <Popover.Seperator />\n            <Input className="px-3" size="tiny" label="Width" defaultValue="100%" descriptionText="Set the width of something" layout="horizontal" />\n            <Popover.Seperator />\n            <Input className="px-3" size="tiny" label="Width" defaultValue="100%" descriptionText="Set the width of something" layout="horizontal" />\n          </div>\n        </>]}>\n      <Button as="span" type="default" iconRight={<IconChevronDown />}>\n        Click for Popover\n      </Button>\n    </Popover>\n  </div>',
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
              'src/components/Popover/Popover.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/Popover/Popover.stories.tsx#Default',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__('../../node_modules/react/index.js')
        var react_feather_dist_icons_chevron_down__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/react-feather/dist/icons/chevron-down.js'
            ),
          _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Icon/IconBase.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        function IconChevronDown(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
            {
              icon: react_feather_dist_icons_chevron_down__WEBPACK_IMPORTED_MODULE_3__.Z,
              ...props,
            }
          )
        }
        ;(IconChevronDown.displayName = 'IconChevronDown'),
          (__webpack_exports__.Z = IconChevronDown)
        try {
          ;(IconChevronDown.displayName = 'IconChevronDown'),
            (IconChevronDown.__docgenInfo = {
              description: '',
              displayName: 'IconChevronDown',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx#IconChevronDown'
              ] = {
                docgenInfo: IconChevronDown.__docgenInfo,
                name: 'IconChevronDown',
                path: 'src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx#IconChevronDown',
              })
        } catch (__react_docgen_typescript_loader_error) {}
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
  },
])
