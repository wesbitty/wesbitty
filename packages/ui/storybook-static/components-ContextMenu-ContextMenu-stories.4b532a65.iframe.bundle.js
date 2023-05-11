'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [2899],
  {
    './src/components/ContextMenu/ContextMenu.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checkbox: function () {
            return ContextMenu_stories_Checkbox
          },
          Default: function () {
            return Default
          },
          Radio: function () {
            return ContextMenu_stories_Radio
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          default: function () {
            return ContextMenu_stories
          },
          doNotcloseOverlay: function () {
            return doNotcloseOverlay
          },
          withCustomStyles: function () {
            return withCustomStyles
          },
        })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        Button = __webpack_require__('./src/components/Button.tsx'),
        Divider = __webpack_require__('./src/components/Divider.tsx'),
        IconLogOut = __webpack_require__(
          './src/components/Icon/icons/IconLogOut/IconLogOut.tsx'
        ),
        IconSettings = __webpack_require__(
          './src/components/Icon/icons/IconSettings/IconSettings.tsx'
        ),
        Typography = __webpack_require__(
          './src/components/Typography/index.tsx'
        ),
        IconCheck = __webpack_require__(
          './src/components/Icon/icons/IconCheck/IconCheck.tsx'
        ),
        index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js'
        ),
        dist_index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-menu/dist/index.module.js'
        ),
        react_primitive_dist_index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
        ),
        react_context_dist_index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-context/dist/index.module.js'
        ),
        primitive_dist_index_module = __webpack_require__(
          '../../node_modules/@radix-ui/primitive/dist/index.module.js'
        ),
        esm_extends = __webpack_require__(
          '../../node_modules/@babel/runtime/helpers/esm/extends.js'
        )
      const [s, i] = (0, react_context_dist_index_module.b)('ContextMenu', [
          dist_index_module.Wf,
        ]),
        x = (0, dist_index_module.Wf)(),
        [p, C] = s('ContextMenu'),
        ContextMenuTrigger = react.forwardRef((e, n) => {
          const { __scopeContextMenu: r, ...s } = e,
            i = C('ContextMenuTrigger', r),
            p = x(r),
            l = react.useRef({ x: 0, y: 0 }),
            f = react.useRef({
              getBoundingClientRect: () =>
                DOMRect.fromRect({ width: 0, height: 0, ...l.current }),
            }),
            M = react.useRef(0),
            R = react.useCallback(() => window.clearTimeout(M.current), []),
            _ = (e) => {
              ;(l.current = { x: e.clientX, y: e.clientY }), i.onOpenChange(!0)
            }
          return (
            react.useEffect(() => R, [R]),
            react.createElement(
              m,
              { scope: r, isInsideContent: !1 },
              react.createElement(
                dist_index_module.ee,
                (0, esm_extends.Z)({}, p, { virtualRef: f })
              ),
              react.createElement(
                react_primitive_dist_index_module.W.span,
                (0, esm_extends.Z)({}, s, {
                  ref: n,
                  style: { WebkitTouchCallout: 'none', ...e.style },
                  onContextMenu: (0, primitive_dist_index_module.M)(
                    e.onContextMenu,
                    (e) => {
                      R(), e.preventDefault(), _(e)
                    }
                  ),
                  onPointerDown: (0, primitive_dist_index_module.M)(
                    e.onPointerDown,
                    d((e) => {
                      R(), (M.current = window.setTimeout(() => _(e), 700))
                    })
                  ),
                  onPointerMove: (0, primitive_dist_index_module.M)(
                    e.onPointerMove,
                    d(R)
                  ),
                  onPointerCancel: (0, primitive_dist_index_module.M)(
                    e.onPointerCancel,
                    d(R)
                  ),
                  onPointerUp: (0, primitive_dist_index_module.M)(
                    e.onPointerUp,
                    d(R)
                  ),
                })
              )
            )
          )
        }),
        [m, l] = s('ContextMenuContent', { isInsideContent: !1 }),
        ContextMenuContent = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = C('ContextMenuContent', o),
            s = x(o),
            i = {
              ...r,
              style: {
                ...e.style,
                '--radix-context-menu-content-transform-origin':
                  'var(--radix-popper-transform-origin)',
              },
            }
          return react.createElement(
            m,
            { scope: o, isInsideContent: !0 },
            c.isRootMenu
              ? react.createElement(
                  f,
                  (0, esm_extends.Z)({ __scopeContextMenu: o }, i, { ref: n })
                )
              : react.createElement(
                  dist_index_module.VY,
                  (0, esm_extends.Z)({}, s, i, { ref: n })
                )
          )
        }),
        f = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = C('ContextMenuContent', o),
            s = x(o),
            i = react.useRef(!1)
          return react.createElement(
            dist_index_module.VY,
            (0, esm_extends.Z)({}, s, r, {
              ref: n,
              portalled: !0,
              side: 'right',
              sideOffset: 2,
              align: 'start',
              onCloseAutoFocus: (t) => {
                var n
                null === (n = e.onCloseAutoFocus) ||
                  void 0 === n ||
                  n.call(e, t),
                  !t.defaultPrevented && i.current && t.preventDefault(),
                  (i.current = !1)
              },
              onInteractOutside: (t) => {
                var n
                null === (n = e.onInteractOutside) ||
                  void 0 === n ||
                  n.call(e, t),
                  t.defaultPrevented || c.modal || (i.current = !0)
              },
            })
          )
        })
      function d(e) {
        return (t) => ('mouse' !== t.pointerType ? e(t) : void 0)
      }
      const Root = (n) => {
          const {
              __scopeContextMenu: o,
              children: r,
              onOpenChange: c,
              dir: s,
              modal: i = !0,
            } = n,
            [C, m] = react.useState(!1),
            f = l('ContextMenu', o),
            d = x(o),
            M = (0, index_module.W)(c),
            R = react.useCallback(
              (e) => {
                m(e), M(e)
              },
              [M]
            )
          return f.isInsideContent
            ? react.createElement(
                p,
                {
                  scope: o,
                  isRootMenu: !1,
                  open: C,
                  onOpenChange: R,
                  modal: i,
                },
                react.createElement(
                  dist_index_module.Tr,
                  (0, esm_extends.Z)({}, d, { open: C, onOpenChange: R }),
                  r
                )
              )
            : react.createElement(
                p,
                {
                  scope: o,
                  isRootMenu: !0,
                  open: C,
                  onOpenChange: R,
                  modal: i,
                },
                react.createElement(
                  dist_index_module.fC,
                  (0, esm_extends.Z)({}, d, {
                    dir: s,
                    open: C,
                    onOpenChange: R,
                    modal: i,
                  }),
                  r
                )
              )
        },
        Trigger = ContextMenuTrigger,
        Content = ContextMenuContent,
        Label = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = x(o)
          return react.createElement(
            dist_index_module.__,
            (0, esm_extends.Z)({}, c, r, { ref: n })
          )
        }),
        Item = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = x(o)
          return react.createElement(
            dist_index_module.ck,
            (0, esm_extends.Z)({}, c, r, { ref: n })
          )
        }),
        CheckboxItem = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = x(o)
          return react.createElement(
            dist_index_module.oC,
            (0, esm_extends.Z)({}, c, r, { ref: n })
          )
        }),
        RadioGroup = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = x(o)
          return react.createElement(
            dist_index_module.Ee,
            (0, esm_extends.Z)({}, c, r, { ref: n })
          )
        }),
        RadioItem = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = x(o)
          return react.createElement(
            dist_index_module.Rk,
            (0, esm_extends.Z)({}, c, r, { ref: n })
          )
        }),
        index_module_ItemIndicator = react.forwardRef((e, n) => {
          const { __scopeContextMenu: o, ...r } = e,
            c = x(o)
          return react.createElement(
            dist_index_module.wU,
            (0, esm_extends.Z)({}, c, r, { ref: n })
          )
        })
      var jsx_runtime = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      )
      function ContextMenu_ContextMenu(_ref) {
        let {
          onOpenChange: onOpenChange,
          alignOffset: alignOffset = 6,
          overlay: overlay,
          children: children,
          className: className,
          style: style,
        } = _ref
        return (0, jsx_runtime.jsxs)(Root, {
          onOpenChange: onOpenChange,
          children: [
            (0, jsx_runtime.jsx)(Trigger, { children: children }),
            (0, jsx_runtime.jsx)(Content, {
              sideOffset: alignOffset,
              style: style,
              children: overlay,
            }),
          ],
        })
      }
      function ContextMenu_Item(_ref2) {
        let {
          children: children,
          icon: icon,
          disabled: disabled,
          onClick: onClick,
        } = _ref2
        return (0, jsx_runtime.jsxs)(Item, {
          disabled: disabled,
          onSelect: onClick,
          children: [
            icon && icon,
            (0, jsx_runtime.jsx)('span', { children: children }),
          ],
        })
      }
      function Misc(_ref3) {
        let { children: children, icon: icon } = _ref3
        return (0, jsx_runtime.jsxs)('div', {
          children: [icon && icon, children],
        })
      }
      function Checkbox(_ref4) {
        let {
          children: children,
          checked: propsChecked,
          onChange: onChange,
          disabled: disabled,
          ItemIndicator: ItemIndicator,
        } = _ref4
        const [checked, setChecked] = (0, react.useState)(propsChecked || !1)
        return (0, jsx_runtime.jsxs)(CheckboxItem, {
          checked: checked,
          onCheckedChange: (e) => {
            onChange && onChange(e), setChecked(e)
          },
          disabled: disabled,
          children: [
            (0, jsx_runtime.jsxs)(index_module_ItemIndicator, {
              children: [
                ItemIndicator ||
                  (0, jsx_runtime.jsx)(IconCheck.Z, { size: 'tiny' }),
                (0, jsx_runtime.jsx)(CheckboxItem, {}),
              ],
            }),
            (0, jsx_runtime.jsx)('span', { children: children }),
          ],
        })
      }
      function Radio(_ref5) {
        let {
          children: children,
          value: value,
          ItemIndicator: ItemIndicator,
        } = _ref5
        return (0, jsx_runtime.jsxs)(RadioItem, {
          value: value,
          children: [
            (0, jsx_runtime.jsx)(index_module_ItemIndicator, {
              children:
                ItemIndicator ||
                (0, jsx_runtime.jsx)(IconCheck.Z, { size: 'tiny' }),
            }),
            (0, jsx_runtime.jsx)('span', { children: children }),
          ],
        })
      }
      function ContextMenu_RadioGroup(_ref6) {
        let {
          children: children,
          value: propsValue,
          onChange: onChange,
        } = _ref6
        const [value, setValue] = (0, react.useState)(propsValue || '')
        return (0, jsx_runtime.jsx)(RadioGroup, {
          value: value,
          onValueChange: (e) => {
            onChange && onChange(e), setValue(e)
          },
          children: children,
        })
      }
      function ContextMenu_Label(_ref7) {
        let { children: children } = _ref7
        return (0, jsx_runtime.jsx)(Label, { children: children })
      }
      ;(ContextMenu_ContextMenu.displayName = 'ContextMenu'),
        (ContextMenu_Item.displayName = 'Item'),
        (Misc.displayName = 'Misc'),
        (Checkbox.displayName = 'Checkbox'),
        (Radio.displayName = 'Radio'),
        (ContextMenu_RadioGroup.displayName = 'RadioGroup'),
        (ContextMenu_Label.displayName = 'Label'),
        (ContextMenu_ContextMenu.Item = ContextMenu_Item),
        (ContextMenu_ContextMenu.Misc = Misc),
        (ContextMenu_ContextMenu.Checkbox = Checkbox),
        (ContextMenu_ContextMenu.Radio = Radio),
        (ContextMenu_ContextMenu.RadioGroup = ContextMenu_RadioGroup),
        (ContextMenu_ContextMenu.Label = ContextMenu_Label)
      var components_ContextMenu_ContextMenu = ContextMenu_ContextMenu
      try {
        ;(ContextMenu_Item.displayName = 'Item'),
          (ContextMenu_Item.__docgenInfo = {
            description: '',
            displayName: 'Item',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              disabled: {
                defaultValue: null,
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
                type: { name: '(event: Event) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.tsx#Item'
            ] = {
              docgenInfo: ContextMenu_Item.__docgenInfo,
              name: 'Item',
              path: 'src/components/ContextMenu/ContextMenu.tsx#Item',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Misc.displayName = 'Misc'),
          (Misc.__docgenInfo = {
            description: '',
            displayName: 'Misc',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              disabled: {
                defaultValue: null,
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
                type: { name: '(event: Event) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.tsx#Misc'
            ] = {
              docgenInfo: Misc.__docgenInfo,
              name: 'Misc',
              path: 'src/components/ContextMenu/ContextMenu.tsx#Misc',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Checkbox.displayName = 'Checkbox'),
          (Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {
              checked: {
                defaultValue: null,
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(x: boolean) => void' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              ItemIndicator: {
                defaultValue: null,
                description: '',
                name: 'ItemIndicator',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.tsx#Checkbox'
            ] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/components/ContextMenu/ContextMenu.tsx#Checkbox',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Radio.displayName = 'Radio'),
          (Radio.__docgenInfo = {
            description: '',
            displayName: 'Radio',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' },
              },
              ItemIndicator: {
                defaultValue: null,
                description: '',
                name: 'ItemIndicator',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.tsx#Radio'
            ] = {
              docgenInfo: Radio.__docgenInfo,
              name: 'Radio',
              path: 'src/components/ContextMenu/ContextMenu.tsx#Radio',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ContextMenu_RadioGroup.displayName = 'RadioGroup'),
          (ContextMenu_RadioGroup.__docgenInfo = {
            description: '',
            displayName: 'RadioGroup',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(x: string) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.tsx#RadioGroup'
            ] = {
              docgenInfo: ContextMenu_RadioGroup.__docgenInfo,
              name: 'RadioGroup',
              path: 'src/components/ContextMenu/ContextMenu.tsx#RadioGroup',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ContextMenu_Label.displayName = 'Label'),
          (ContextMenu_Label.__docgenInfo = {
            description: '',
            displayName: 'Label',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.tsx#Label'
            ] = {
              docgenInfo: ContextMenu_Label.__docgenInfo,
              name: 'Label',
              path: 'src/components/ContextMenu/ContextMenu.tsx#Label',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ContextMenu_ContextMenu.displayName = 'ContextMenu'),
          (ContextMenu_ContextMenu.__docgenInfo = {
            description: '',
            displayName: 'ContextMenu',
            props: {
              onOpenChange: {
                defaultValue: null,
                description: '',
                name: 'onOpenChange',
                required: !1,
                type: { name: '(x: boolean) => void' },
              },
              alignOffset: {
                defaultValue: { value: '6' },
                description: '',
                name: 'alignOffset',
                required: !1,
                type: { name: 'number' },
              },
              overlay: {
                defaultValue: null,
                description: '',
                name: 'overlay',
                required: !1,
                type: { name: 'ReactNode' },
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.tsx#ContextMenu'
            ] = {
              docgenInfo: ContextMenu_ContextMenu.__docgenInfo,
              name: 'ContextMenu',
              path: 'src/components/ContextMenu/ContextMenu.tsx#ContextMenu',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var IconLogIn = __webpack_require__(
          './src/components/Icon/icons/IconLogIn/IconLogIn.tsx'
        ),
        ContextMenu_stories = {
          title: 'Navigation/ContextMenu',
          component: components_ContextMenu_ContextMenu,
        }
      const triggerArea = (0, jsx_runtime.jsx)('div', {
          style: {
            background: 'gray',
            width: '280px',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children: (0, jsx_runtime.jsx)('span', {
            children: 'Right click this area',
          }),
        }),
        Default = (args) =>
          (0, jsx_runtime.jsx)('div', {
            style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
            children: (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu, {
              ...args,
              overlay: [
                (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Misc, {
                  children: (0, jsx_runtime.jsxs)('div', {
                    children: [
                      (0, jsx_runtime.jsxs)(Typography.default.Text, {
                        small: !0,
                        className: 'block',
                        children: ['Signed in as', ' '],
                      }),
                      (0, jsx_runtime.jsxs)(Typography.default.Text, {
                        small: !0,
                        strong: !0,
                        children: ['tom@example.com', ' '],
                      }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsx)(Divider.i, { light: !0 }),
                (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Label, {
                  children: 'Group label',
                }),
                (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                  onClick: () => console.log('clicked'),
                  children: 'Account',
                }),
                (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                  children: 'Settings',
                }),
                (0, jsx_runtime.jsx)(Divider.i, { light: !0 }),
                (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                  icon: (0, jsx_runtime.jsx)(IconLogIn.Z, { size: 'tiny' }),
                  children: 'Log out',
                }),
              ],
              children: triggerArea,
            }),
          })
      ;(Default.displayName = 'Default'), (Default.args = {})
      const doNotcloseOverlay = (args) =>
        (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsxs)(components_ContextMenu_ContextMenu.Misc, {
                children: [
                  (0, jsx_runtime.jsx)(Typography.default.Text, {
                    children: 'Signed in as ',
                  }),
                  (0, jsx_runtime.jsx)(Typography.default.Text, {
                    strong: !0,
                    children: 'tom@example.com ',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Divider.i, { light: !0 }),
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                children: 'Account',
              }),
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                children: 'Settings',
              }),
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                children: (0, jsx_runtime.jsx)(Button.z, {
                  icon: (0, jsx_runtime.jsx)(IconLogOut.Z, {}),
                  children: 'Log out',
                }),
              }),
            ],
            children: triggerArea,
          }),
        })
      ;(doNotcloseOverlay.displayName = 'doNotcloseOverlay'),
        (doNotcloseOverlay.args = {})
      const withCustomStyles = (args) =>
        (0, jsx_runtime.jsx)('div', {
          style: {
            margin: '0 auto',
            minHeight: '420px',
            marginTop: '220px',
            marginLeft: '400px',
          },
          children: (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu, {
            overlayStyle: { minWidth: '500px' },
            placement: 'bottomRight',
            ...args,
            overlay: [
              (0, jsx_runtime.jsxs)(components_ContextMenu_ContextMenu.Item, {
                children: [
                  (0, jsx_runtime.jsx)(Typography.default.Text, {
                    children: 'Signed in as ',
                  }),
                  (0, jsx_runtime.jsx)(Typography.default.Text, {
                    strong: !0,
                    children: 'tom@example.com ',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Divider.i, { light: !0 }),
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                children: 'Account',
              }),
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                children: 'Settings',
              }),
              (0, jsx_runtime.jsx)(Divider.i, { light: !0 }),
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                children: (0, jsx_runtime.jsx)(Button.z, {
                  type: 'default',
                  icon: (0, jsx_runtime.jsx)(IconLogOut.Z, {}),
                  children: 'Log out',
                }),
              }),
            ],
            children: triggerArea,
          }),
        })
      ;(withCustomStyles.displayName = 'withCustomStyles'),
        (withCustomStyles.args = {})
      const ContextMenu_stories_Checkbox = (args) => {
        const [checked, setChecked] = (0, react.useState)(!1)
        return (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                icon: (0, jsx_runtime.jsx)(IconSettings.Z, { size: 'small' }),
                children: 'Account',
              }),
              (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu.Item, {
                children: 'Settings',
              }),
              (0, jsx_runtime.jsx)(Divider.i, { light: !0 }),
              (0, jsx_runtime.jsx)(
                components_ContextMenu_ContextMenu.Checkbox,
                {
                  checked: checked,
                  onChange: setChecked,
                  children: 'Show subtitles',
                }
              ),
            ],
            children: triggerArea,
          }),
        })
      }
      ContextMenu_stories_Checkbox.displayName = 'Checkbox'
      const ContextMenu_stories_Radio = (args) => {
        const [value, setValue] = (0, react.useState)('red')
        return (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(components_ContextMenu_ContextMenu, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsxs)(
                components_ContextMenu_ContextMenu.RadioGroup,
                {
                  value: value,
                  onChange: setValue,
                  children: [
                    (0, jsx_runtime.jsx)(
                      components_ContextMenu_ContextMenu.Radio,
                      { value: 'red', children: 'Red' }
                    ),
                    (0, jsx_runtime.jsx)(
                      components_ContextMenu_ContextMenu.Radio,
                      { value: 'blue', children: 'Blue' }
                    ),
                    (0, jsx_runtime.jsx)(
                      components_ContextMenu_ContextMenu.Radio,
                      { value: 'green', children: 'Green' }
                    ),
                  ],
                }
              ),
            ],
            children: triggerArea,
          }),
        })
      }
      ;(ContextMenu_stories_Radio.displayName = 'Radio'),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <div style={{\n  margin: '0 auto',\n  minHeight: '420px',\n  marginTop: '220px'\n}}>\n    <ContextMenu {...args} overlay={[<ContextMenu.Misc>\n          <div>\n            <Typography.Text small className=\"block\">\n              Signed in as{' '}\n            </Typography.Text>\n\n            <Typography.Text small strong>\n              tom@example.com{' '}\n            </Typography.Text>\n          </div>\n        </ContextMenu.Misc>, <Divider light />, <ContextMenu.Label>Group label</ContextMenu.Label>, <ContextMenu.Item onClick={() => console.log('clicked')}>\n          Account\n        </ContextMenu.Item>, <ContextMenu.Item>Settings</ContextMenu.Item>, <Divider light />, <ContextMenu.Item icon={<IconLogIn size=\"tiny\" />}>\n          Log out\n        </ContextMenu.Item>]}>\n      {triggerArea}\n    </ContextMenu>\n  </div>",
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (doNotcloseOverlay.parameters = {
          ...doNotcloseOverlay.parameters,
          docs: {
            ...doNotcloseOverlay.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <div style={{\n  margin: '0 auto',\n  minHeight: '420px',\n  marginTop: '220px'\n}}>\n    <ContextMenu {...args} overlay={[<ContextMenu.Misc>\n          <Typography.Text>Signed in as </Typography.Text>\n          <Typography.Text strong>tom@example.com </Typography.Text>\n        </ContextMenu.Misc>, <Divider light />, <ContextMenu.Item>Account</ContextMenu.Item>, <ContextMenu.Item>Settings</ContextMenu.Item>, <ContextMenu.Item>\n          <Button icon={<IconLogOut />}>Log out</Button>\n        </ContextMenu.Item>]}>\n      {triggerArea}\n    </ContextMenu>\n  </div>",
              ...doNotcloseOverlay.parameters?.docs?.source,
            },
          },
        }),
        (withCustomStyles.parameters = {
          ...withCustomStyles.parameters,
          docs: {
            ...withCustomStyles.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <div style={{\n  margin: '0 auto',\n  minHeight: '420px',\n  marginTop: '220px',\n  marginLeft: '400px'\n}}>\n    <ContextMenu overlayStyle={{\n    minWidth: '500px'\n  }} placement=\"bottomRight\" {...args} overlay={[<ContextMenu.Item>\n          <Typography.Text>Signed in as </Typography.Text>\n          <Typography.Text strong>tom@example.com </Typography.Text>\n        </ContextMenu.Item>, <Divider light />, <ContextMenu.Item>Account</ContextMenu.Item>, <ContextMenu.Item>Settings</ContextMenu.Item>, <Divider light />, <ContextMenu.Item>\n          <Button type=\"default\" icon={<IconLogOut />}>\n            Log out\n          </Button>\n        </ContextMenu.Item>]}>\n      {triggerArea}\n    </ContextMenu>\n  </div>",
              ...withCustomStyles.parameters?.docs?.source,
            },
          },
        }),
        (ContextMenu_stories_Checkbox.parameters = {
          ...ContextMenu_stories_Checkbox.parameters,
          docs: {
            ...ContextMenu_stories_Checkbox.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    margin: '0 auto',\n    minHeight: '420px',\n    marginTop: '220px'\n  }}>\n      <ContextMenu {...args} overlay={[<ContextMenu.Item icon={<IconSettings size=\"small\" />}>\n            Account\n          </ContextMenu.Item>, <ContextMenu.Item>Settings</ContextMenu.Item>, <Divider light />, <ContextMenu.Checkbox checked={checked} onChange={setChecked}>\n            Show subtitles\n          </ContextMenu.Checkbox>]}>\n        {triggerArea}\n      </ContextMenu>\n    </div>;\n}",
              ...ContextMenu_stories_Checkbox.parameters?.docs?.source,
            },
          },
        }),
        (ContextMenu_stories_Radio.parameters = {
          ...ContextMenu_stories_Radio.parameters,
          docs: {
            ...ContextMenu_stories_Radio.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => {\n  const [value, setValue] = useState('red');\n  return <div style={{\n    margin: '0 auto',\n    minHeight: '420px',\n    marginTop: '220px'\n  }}>\n      <ContextMenu {...args} overlay={[<ContextMenu.RadioGroup value={value} onChange={setValue}>\n            <ContextMenu.Radio value={'red'}>Red</ContextMenu.Radio>\n            <ContextMenu.Radio value={'blue'}>Blue</ContextMenu.Radio>\n            <ContextMenu.Radio value={'green'}>Green</ContextMenu.Radio>\n          </ContextMenu.RadioGroup>]}>\n        {triggerArea}\n      </ContextMenu>\n    </div>;\n}",
              ...ContextMenu_stories_Radio.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'doNotcloseOverlay',
        'withCustomStyles',
        'Checkbox',
        'Radio',
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
              'src/components/ContextMenu/ContextMenu.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/ContextMenu/ContextMenu.stories.tsx#Default',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(doNotcloseOverlay.displayName = 'doNotcloseOverlay'),
          (doNotcloseOverlay.__docgenInfo = {
            description: '',
            displayName: 'doNotcloseOverlay',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.stories.tsx#doNotcloseOverlay'
            ] = {
              docgenInfo: doNotcloseOverlay.__docgenInfo,
              name: 'doNotcloseOverlay',
              path: 'src/components/ContextMenu/ContextMenu.stories.tsx#doNotcloseOverlay',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withCustomStyles.displayName = 'withCustomStyles'),
          (withCustomStyles.__docgenInfo = {
            description: '',
            displayName: 'withCustomStyles',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.stories.tsx#withCustomStyles'
            ] = {
              docgenInfo: withCustomStyles.__docgenInfo,
              name: 'withCustomStyles',
              path: 'src/components/ContextMenu/ContextMenu.stories.tsx#withCustomStyles',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ContextMenu_stories_Checkbox.displayName = 'Checkbox'),
          (ContextMenu_stories_Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.stories.tsx#Checkbox'
            ] = {
              docgenInfo: ContextMenu_stories_Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/components/ContextMenu/ContextMenu.stories.tsx#Checkbox',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ContextMenu_stories_Radio.displayName = 'Radio'),
          (ContextMenu_stories_Radio.__docgenInfo = {
            description: '',
            displayName: 'Radio',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ContextMenu/ContextMenu.stories.tsx#Radio'
            ] = {
              docgenInfo: ContextMenu_stories_Radio.__docgenInfo,
              name: 'Radio',
              path: 'src/components/ContextMenu/ContextMenu.stories.tsx#Radio',
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
    './src/components/Divider.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        i: function () {
          return Divider
        },
      })
      __webpack_require__('../../node_modules/react/index.js')
      var _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Divider(_ref) {
        let {
            children: children,
            className: className,
            light: light = !1,
            orientation: orientation = 'center',
            style: style,
            type: type = 'horizontal',
          } = _ref,
          __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
            'divider'
          ),
          classes = ['horizontal' === type ? __styles.base : __styles.vertical]
        return (
          light && classes.push(__styles.light),
          children
            ? classes.push(__styles.orientation[orientation])
            : children ||
              'horizontal' !== type ||
              classes.push(__styles.no_text),
          className && classes.push(className),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: classes.join(' '),
            role: 'seperator',
            style: style,
            children:
              children &&
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                className: __styles.span,
                children: children,
              }),
          })
        )
      }
      Divider.displayName = 'Divider'
      try {
        ;(Divider.displayName = 'Divider'),
          (Divider.__docgenInfo = {
            description: '',
            displayName: 'Divider',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              light: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'light',
                required: !1,
                type: { name: 'boolean' },
              },
              orientation: {
                defaultValue: { value: 'center' },
                description: '',
                name: 'orientation',
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
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              type: {
                defaultValue: { value: 'horizontal' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Divider.tsx#Divider'] = {
              docgenInfo: Divider.__docgenInfo,
              name: 'Divider',
              path: 'src/components/Divider.tsx#Divider',
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
    './src/components/Icon/icons/IconCheck/IconCheck.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_check__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/check.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconCheck(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_check__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconCheck.displayName = 'IconCheck'),
        (__webpack_exports__.Z = IconCheck)
      try {
        ;(IconCheck.displayName = 'IconCheck'),
          (IconCheck.__docgenInfo = {
            description: '',
            displayName: 'IconCheck',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconCheck/IconCheck.tsx#IconCheck'
            ] = {
              docgenInfo: IconCheck.__docgenInfo,
              name: 'IconCheck',
              path: 'src/components/Icon/icons/IconCheck/IconCheck.tsx#IconCheck',
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
    './src/components/Icon/icons/IconLogIn/IconLogIn.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_log_in__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/log-in.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconLogIn(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_log_in__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconLogIn.displayName = 'IconLogIn'),
        (__webpack_exports__.Z = IconLogIn)
      try {
        ;(IconLogIn.displayName = 'IconLogIn'),
          (IconLogIn.__docgenInfo = {
            description: '',
            displayName: 'IconLogIn',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconLogIn/IconLogIn.tsx#IconLogIn'
            ] = {
              docgenInfo: IconLogIn.__docgenInfo,
              name: 'IconLogIn',
              path: 'src/components/Icon/icons/IconLogIn/IconLogIn.tsx#IconLogIn',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconLogOut/IconLogOut.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_log_out__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/log-out.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconLogOut(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_log_out__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconLogOut.displayName = 'IconLogOut'),
        (__webpack_exports__.Z = IconLogOut)
      try {
        ;(IconLogOut.displayName = 'IconLogOut'),
          (IconLogOut.__docgenInfo = {
            description: '',
            displayName: 'IconLogOut',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconLogOut/IconLogOut.tsx#IconLogOut'
            ] = {
              docgenInfo: IconLogOut.__docgenInfo,
              name: 'IconLogOut',
              path: 'src/components/Icon/icons/IconLogOut/IconLogOut.tsx#IconLogOut',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Icon/icons/IconSettings/IconSettings.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_settings__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/settings.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconSettings(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_settings__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconSettings.displayName = 'IconSettings'),
        (__webpack_exports__.Z = IconSettings)
      try {
        ;(IconSettings.displayName = 'IconSettings'),
          (IconSettings.__docgenInfo = {
            description: '',
            displayName: 'IconSettings',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconSettings/IconSettings.tsx#IconSettings'
            ] = {
              docgenInfo: IconSettings.__docgenInfo,
              name: 'IconSettings',
              path: 'src/components/Icon/icons/IconSettings/IconSettings.tsx#IconSettings',
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
    '../../node_modules/react-feather/dist/icons/log-in.js': function (
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
      var LogIn = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('polyline', {
            points: '10 17 15 12 10 7',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '15',
            y1: '12',
            x2: '3',
            y2: '12',
          })
        )
      })
      ;(LogIn.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (LogIn.displayName = 'LogIn'),
        (__webpack_exports__.Z = LogIn)
    },
    '../../node_modules/react-feather/dist/icons/log-out.js': function (
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
      var LogOut = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('polyline', {
            points: '16 17 21 12 16 7',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('line', {
            x1: '21',
            y1: '12',
            x2: '9',
            y2: '12',
          })
        )
      })
      ;(LogOut.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (LogOut.displayName = 'LogOut'),
        (__webpack_exports__.Z = LogOut)
    },
    '../../node_modules/react-feather/dist/icons/settings.js': function (
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
      var Settings = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
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
              r: '3',
            }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
              d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
            })
          )
        }
      )
      ;(Settings.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Settings.displayName = 'Settings'),
        (__webpack_exports__.Z = Settings)
    },
  },
])
