'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [3668],
  {
    '../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          Ee: function () {
            return RadioGroup
          },
          Eh: function () {
            return Arrow
          },
          Rk: function () {
            return RadioItem
          },
          VY: function () {
            return Content
          },
          Z0: function () {
            return Separator
          },
          __: function () {
            return Label
          },
          ce: function () {
            return TriggerItem
          },
          ck: function () {
            return Item
          },
          fC: function () {
            return Root
          },
          oC: function () {
            return CheckboxItem
          },
          wU: function () {
            return ItemIndicator
          },
          xz: function () {
            return Trigger
          },
        })
        var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-id/dist/index.module.js'
            ),
          _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-menu/dist/index.module.js'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-context/dist/index.module.js'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js'
            ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/primitive/dist/index.module.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          ),
          _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/@babel/runtime/helpers/esm/extends.js'
            )
        const [s, i] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)(
            'DropdownMenu',
            [_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Wf]
          ),
          l = (0, _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Wf)(),
          [m, w] = s('DropdownMenu'),
          f = (n) => {
            const {
                __scopeDropdownMenu: r,
                children: t,
                dir: p,
                open: d,
                onOpenChange: a,
                onOpenToggle: s,
                modal: i = !0,
              } = n,
              w = l(r),
              f = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              m,
              {
                scope: r,
                isRootMenu: !0,
                triggerId: (0,
                _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__.M)(),
                triggerRef: f,
                contentId: (0,
                _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__.M)(),
                open: d,
                onOpenChange: a,
                onOpenToggle: s,
                modal: i,
              },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.fC,
                (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  {},
                  w,
                  { open: d, onOpenChange: a, dir: p, modal: i }
                ),
                t
              )
            )
          },
          DropdownMenuTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (e, n) => {
              const { __scopeDropdownMenu: t, disabled: p = !1, ...s } = e,
                i = w('DropdownMenuTrigger', t),
                m = l(t)
              return i.isRootMenu
                ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ee,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                      { asChild: !0 },
                      m
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.W
                        .button,
                      (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        {
                          type: 'button',
                          id: i.triggerId,
                          'aria-haspopup': 'menu',
                          'aria-expanded': !!i.open || void 0,
                          'aria-controls': i.open ? i.contentId : void 0,
                          'data-state': i.open ? 'open' : 'closed',
                          'data-disabled': p ? '' : void 0,
                          disabled: p,
                        },
                        s,
                        {
                          ref: (0,
                          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_7__.F)(
                            n,
                            i.triggerRef
                          ),
                          onPointerDown: (0,
                          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                            e.onPointerDown,
                            (e) => {
                              p ||
                                0 !== e.button ||
                                !1 !== e.ctrlKey ||
                                (i.open || e.preventDefault(), i.onOpenToggle())
                            }
                          ),
                          onKeyDown: (0,
                          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                            e.onKeyDown,
                            (e) => {
                              p ||
                                (['Enter', ' '].includes(e.key) &&
                                  i.onOpenToggle(),
                                'ArrowDown' === e.key && i.onOpenChange(!0),
                                [' ', 'ArrowDown'].includes(e.key) &&
                                  e.preventDefault())
                            }
                          ),
                        }
                      )
                    )
                  )
                : null
            }
          ),
          [D, M] = s('DropdownMenuContent', { isInsideContent: !1 }),
          DropdownMenuContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (e, n) => {
              const { __scopeDropdownMenu: r, ...t } = e,
                p = w('DropdownMenuContent', r),
                d = l(r),
                a = {
                  ...t,
                  style: {
                    ...e.style,
                    '--radix-dropdown-menu-content-transform-origin':
                      'var(--radix-popper-transform-origin)',
                  },
                }
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                D,
                { scope: r, isInsideContent: !0 },
                p.isRootMenu
                  ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      g,
                      (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        { __scopeDropdownMenu: r },
                        a,
                        { ref: n }
                      )
                    )
                  : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.VY,
                      (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        {},
                        d,
                        a,
                        { ref: n }
                      )
                    )
              )
            }
          ),
          g = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
            const { __scopeDropdownMenu: r, portalled: t = !0, ...p } = e,
              d = w('DropdownMenuContent', r),
              s = l(r),
              i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1)
            return d.isRootMenu
              ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.VY,
                  (0,
                  _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    { id: d.contentId, 'aria-labelledby': d.triggerId },
                    s,
                    p,
                    {
                      ref: n,
                      portalled: t,
                      onCloseAutoFocus: (0,
                      _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                        e.onCloseAutoFocus,
                        (e) => {
                          var o
                          i.current ||
                            null === (o = d.triggerRef.current) ||
                            void 0 === o ||
                            o.focus(),
                            (i.current = !1),
                            e.preventDefault()
                        }
                      ),
                      onInteractOutside: (0,
                      _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                        e.onInteractOutside,
                        (e) => {
                          const o = e.detail.originalEvent,
                            n = 0 === o.button && !0 === o.ctrlKey,
                            r = 2 === o.button || n
                          ;(d.modal && !r) || (i.current = !0)
                        }
                      ),
                    }
                  )
                )
              : null
          }),
          Root = (e) => {
            const {
                __scopeDropdownMenu: n,
                children: r,
                open: p,
                defaultOpen: d,
                onOpenChange: a,
              } = e,
              s = M('DropdownMenu', n),
              i = l(n),
              [w = !1, D] = (0,
              _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)(
                { prop: p, defaultProp: d, onChange: a }
              ),
              g = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                () => D((e) => !e),
                [D]
              )
            return s.isInsideContent
              ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  m,
                  {
                    scope: n,
                    isRootMenu: !1,
                    open: w,
                    onOpenChange: D,
                    onOpenToggle: g,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Tr,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                      {},
                      i,
                      { open: w, onOpenChange: D }
                    ),
                    r
                  )
                )
              : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  f,
                  (0,
                  _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    {},
                    e,
                    { open: w, onOpenChange: D, onOpenToggle: g }
                  ),
                  r
                )
          },
          Trigger = DropdownMenuTrigger,
          Content = DropdownMenuContent,
          Label = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
            const { __scopeDropdownMenu: r, ...t } = e,
              p = l(r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.__,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                p,
                t,
                { ref: n }
              )
            )
          }),
          Item = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
            const { __scopeDropdownMenu: r, ...t } = e,
              p = l(r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ck,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                p,
                t,
                { ref: n }
              )
            )
          }),
          TriggerItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (e, n) => {
              const { __scopeDropdownMenu: r, ...t } = e,
                p = l(r)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.fF,
                (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  {},
                  p,
                  t,
                  { ref: n }
                )
              )
            }
          ),
          CheckboxItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (e, n) => {
              const { __scopeDropdownMenu: r, ...t } = e,
                p = l(r)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.oC,
                (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  {},
                  p,
                  t,
                  { ref: n }
                )
              )
            }
          ),
          RadioGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
            const { __scopeDropdownMenu: r, ...t } = e,
              p = l(r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Ee,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                p,
                t,
                { ref: n }
              )
            )
          }),
          RadioItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
            const { __scopeDropdownMenu: r, ...t } = e,
              p = l(r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Rk,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                p,
                t,
                { ref: n }
              )
            )
          }),
          ItemIndicator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (e, n) => {
              const { __scopeDropdownMenu: r, ...t } = e,
                p = l(r)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.wU,
                (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  {},
                  p,
                  t,
                  { ref: n }
                )
              )
            }
          ),
          Separator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
            const { __scopeDropdownMenu: r, ...t } = e,
              p = l(r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Z0,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                p,
                t,
                { ref: n }
              )
            )
          }),
          Arrow = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
            const { __scopeDropdownMenu: r, ...t } = e,
              p = l(r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Eh,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                p,
                t,
                { ref: n }
              )
            )
          })
      },
    '../../node_modules/@storybook/addon-actions/dist/index.mjs': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        aD: function () {
          return chunk_OPEUWD42.aD
        },
      })
      var chunk_OPEUWD42 = __webpack_require__(
        '../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs'
      )
      __webpack_require__(
        '../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs'
      )
    },
    './src/components/Modal/Modal.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default
          },
          LongModal: function () {
            return LongModal
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          customFooter: function () {
            return customFooter
          },
          customFooterOneButton: function () {
            return customFooterOneButton
          },
          customFooterVertical: function () {
            return customFooterVertical
          },
          default: function () {
            return Modal_stories
          },
          hideFooter: function () {
            return hideFooter
          },
          modalWithDropdowns: function () {
            return modalWithDropdowns
          },
          rightAlignedFooter: function () {
            return rightAlignedFooter
          },
          withCloseButton: function () {
            return withCloseButton
          },
          withFooterBackground: function () {
            return withFooterBackground
          },
          withIcon: function () {
            return withIcon
          },
          withUseState: function () {
            return withUseState
          },
          withVerticalLayout: function () {
            return withVerticalLayout
          },
        })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        dist = __webpack_require__(
          '../../node_modules/@storybook/addon-actions/dist/index.mjs'
        ),
        Modal = __webpack_require__('./src/components/Modal/Modal.tsx'),
        Typography = __webpack_require__(
          './src/components/Typography/index.tsx'
        ),
        Badge = __webpack_require__('./src/components/Badge.tsx'),
        Form = __webpack_require__('./src/components/Form/Form.tsx'),
        Button = __webpack_require__('./src/components/Button.tsx'),
        Space = __webpack_require__('./src/components/Space.tsx'),
        IconTrash = __webpack_require__(
          './src/components/Icon/icons/IconTrash/IconTrash.tsx'
        ),
        IconAlertCircle = __webpack_require__(
          './src/components/Icon/icons/IconAlertCircle/IconAlertCircle.tsx'
        ),
        IconCheck = __webpack_require__(
          './src/components/Icon/icons/IconCheck/IconCheck.tsx'
        ),
        Dropdown = __webpack_require__(
          './src/components/Dropdown/Dropdown.tsx'
        ),
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
      var Link2 = (0, react.forwardRef)(function (_ref, ref) {
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
            d: 'M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3',
          }),
          react.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
        )
      })
      ;(Link2.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (Link2.displayName = 'Link2')
      var link_2 = Link2,
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconLink2(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: link_2, ...props })
      }
      IconLink2.displayName = 'IconLink2'
      var IconLink2_IconLink2 = IconLink2
      try {
        ;(IconLink2.displayName = 'IconLink2'),
          (IconLink2.__docgenInfo = {
            description: '',
            displayName: 'IconLink2',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconLink2/IconLink2.tsx#IconLink2'
            ] = {
              docgenInfo: IconLink2.__docgenInfo,
              name: 'IconLink2',
              path: 'src/components/Icon/icons/IconLink2/IconLink2.tsx#IconLink2',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Input = __webpack_require__('./src/components/Input/Input.tsx'),
        Modal_stories = {
          title: 'Overlays/Modal',
          component: Modal.Z,
          argTypes: { onClick: { action: 'clicked' } },
        }
      const withUseState = () => {
          const [visible, setVisible] = (0, react.useState)(!1)
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)('div', {
                className:
                  ' py-4 px-8 bg-scale-300  border  border-scale-500  rounded flex gap-4  shadow-sm justify-between items-center fixed top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2',
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    children: [
                      (0, jsx_runtime.jsx)('h4', {
                        className: 'text-scale-1200 text-base',
                        children: 'Delete your project',
                      }),
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-scale-1100 text-sm',
                        children: 'It will be sad to see you go',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    type: 'default',
                    onClick: () => setVisible(!visible),
                    icon: (0, jsx_runtime.jsx)(IconTrash.Z, {}),
                    children: 'Delete this project',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)('div', {
                children: (0, jsx_runtime.jsx)(Modal.Z, {
                  size: 'small',
                  visible: visible,
                  onCancel: () => setVisible(!visible),
                  header: (0, jsx_runtime.jsx)('div', {
                    className: 'flex items-center gap-2 text-scale-1200',
                    children: (0, jsx_runtime.jsxs)('div', {
                      className: 'flex items-baseline gap-2',
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: 'text-sm',
                          children: 'Delete your project',
                        }),
                        (0, jsx_runtime.jsx)('span', {
                          className: 'text-xs text-scale-900',
                          children: 'Are you sure?',
                        }),
                      ],
                    }),
                  }),
                  contentStyle: { padding: 0 },
                  hideFooter: !0,
                  children: (0, jsx_runtime.jsx)(Form.Z, {
                    initialValues: { name: '' },
                    onSubmit: (values, _ref) => {
                      let { setSubmitting: setSubmitting } = _ref
                      setTimeout(() => {
                        setSubmitting(!1), setVisible(!1)
                      }, 400)
                    },
                    validate: (values) => {
                      const errors = {}
                      return (
                        values.name
                          ? 'MyProject' !== values.name &&
                            (errors.name = 'Does not match project name')
                          : (errors.name = 'Project name is required'),
                        errors
                      )
                    },
                    children: (_ref2) => {
                      let {
                        isSubmitting: isSubmitting,
                        errors: errors,
                        touched: touched,
                      } = _ref2
                      return (
                        console.log('errors in form', errors),
                        console.log('touched in form', touched),
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'space-y-4 mb-4',
                          children: [
                            (0, jsx_runtime.jsx)('div', {
                              className:
                                'px-5 py-3 bg-amber-100 border-t border-b border-amber-300',
                              children: (0, jsx_runtime.jsxs)('span', {
                                className:
                                  'flex gap-3 items-center text-xs text-amber-900',
                                children: [
                                  (0, jsx_runtime.jsx)(IconAlertCircle.Z, {
                                    strokeWidth: 2,
                                  }),
                                  (0, jsx_runtime.jsx)('span', {
                                    children:
                                      'Once deleted, this project cannot be restored. Please proceed carefully.',
                                  }),
                                ],
                              }),
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'px-5',
                              children: (0, jsx_runtime.jsxs)('p', {
                                className: 'text-sm text-scale-1100',
                                children: [
                                  'This action cannot be undone. This will permanently delete the project',
                                  ' ',
                                  (0, jsx_runtime.jsx)('span', {
                                    className: 'text-scale-1200 font-regular',
                                    children: 'MyProject',
                                  }),
                                  '.',
                                ],
                              }),
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className:
                                'border-t border-scale-300 dark:border-scale-500',
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'px-5',
                              children: (0, jsx_runtime.jsx)(Input.Z, {
                                id: 'name',
                                size: 'small',
                                placeholder: 'Name of your project',
                                label: 'Please type MyProject to confirm.',
                              }),
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className:
                                'border-t border-scale-300 dark:border-scale-500',
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'px-5',
                              children: (0, jsx_runtime.jsx)(Button.z, {
                                type: 'danger',
                                htmlType: 'submit',
                                block: !0,
                                size: 'medium',
                                loading: isSubmitting,
                                children: 'I understand, delete this project',
                              }),
                            }),
                          ],
                        })
                      )
                    },
                  }),
                }),
              }),
            ],
          })
        },
        Default = (args) =>
          (0, jsx_runtime.jsx)(Modal.Z, {
            ...args,
            header: (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-2 text-scale-1200',
              children: [
                (0, jsx_runtime.jsx)('div', {
                  className: 'text-brand-700',
                  children: (0, jsx_runtime.jsx)(IconLink2_IconLink2, {}),
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex items-baseline gap-2',
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      children: 'This is the title',
                    }),
                    (0, jsx_runtime.jsx)('span', {
                      className: 'text-xs text-scale-900',
                      children: 'This is the title',
                    }),
                  ],
                }),
              ],
            }),
            children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
              type: 'secondary',
              children: [
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                ' ',
                (0, jsx_runtime.jsx)(Typography.default.Text, {
                  code: !0,
                  children: '{children}',
                }),
              ],
            }),
          })
      Default.displayName = 'Default'
      const withIcon = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
              ' ',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      withIcon.displayName = 'withIcon'
      const withVerticalLayout = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
              ' ',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      withVerticalLayout.displayName = 'withVerticalLayout'
      const withCloseButton = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'This Modal has a close button on the top right',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      withCloseButton.displayName = 'withCloseButton'
      const rightAlignedFooter = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
              ' ',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      rightAlignedFooter.displayName = 'rightAlignedFooter'
      const hideFooter = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
              ' ',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      hideFooter.displayName = 'hideFooter'
      const withFooterBackground = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
              ' ',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      withFooterBackground.displayName = 'withFooterBackground'
      const customFooter = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
              ' ',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      customFooter.displayName = 'customFooter'
      const customFooterVertical = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, {
          ...args,
          children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
            type: 'secondary',
            children: [
              'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
              ' ',
              (0, jsx_runtime.jsx)(Typography.default.Text, {
                code: !0,
                children: '{children}',
              }),
            ],
          }),
        })
      customFooterVertical.displayName = 'customFooterVertical'
      const LongModal = () =>
        (0, jsx_runtime.jsxs)('div', {
          children: [
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)('p', {
              children:
                'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
            }),
            (0, jsx_runtime.jsx)(Modal.Z, {
              visible: !0,
              children: (0, jsx_runtime.jsxs)(Typography.default.Text, {
                type: 'secondary',
                children: [
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    children:
                      'Modal content is inserted here, if you need to insert anything into the Modal you can do so via',
                  }),
                  (0, jsx_runtime.jsx)(Typography.default.Text, {
                    code: !0,
                    children: '{children}',
                  }),
                ],
              }),
            }),
          ],
        })
      LongModal.displayName = 'LongModal'
      const customFooterOneButton = (args) =>
        (0, jsx_runtime.jsx)(Modal.Z, { ...args })
      customFooterOneButton.displayName = 'customFooterOneButton'
      const modalWithDropdowns = () => {
        const [visible, setVisible] = (0, react.useState)(!1)
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)(Button.z, {
              onClick: () => setVisible(!visible),
              children: 'Open',
            }),
            (0, jsx_runtime.jsx)(Modal.Z, {
              visible: visible,
              onCancel: () => setVisible(!visible),
              hideFooter: !0,
              children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
                overlay: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                      onClick: () => console.log('item 1 clicked'),
                      children: 'Item 1',
                    }),
                    (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                      onClick: () => console.log('item 2 clicked'),
                      children: 'Item 2',
                    }),
                  ],
                }),
                children: (0, jsx_runtime.jsx)(Button.z, {
                  as: 'span',
                  children: 'Trigger dropdown',
                }),
              }),
            }),
          ],
        })
      }
      ;(Default.args = {
        visible: !0,
        onCancel: (0, dist.aD)('onCancel'),
        onConfirm: (0, dist.aD)('onConfirm'),
        title: 'This is the title of the modal',
        description: 'And i am the description',
        size: 'medium',
      }),
        (withFooterBackground.args = {
          visible: !0,
          footerBackground: !0,
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the modal',
          description: 'And i am the description',
        })
      const icon = (0, jsx_runtime.jsx)(IconAlertCircle.Z, {
        background: 'brand',
        size: 'xlarge',
      })
      ;(withIcon.args = {
        visible: !0,
        showIcon: !0,
        onCancel: (0, dist.aD)('onCancel'),
        onConfirm: (0, dist.aD)('onConfirm'),
        title: 'This is the title of the modal',
        description: 'And i am the description',
        icon: icon,
      }),
        (withCloseButton.args = {
          visible: !0,
          closable: !0,
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This Modal has a close button on the top right',
          description: 'And i am the description',
        }),
        (withVerticalLayout.args = {
          visible: !0,
          size: 'small',
          layout: 'vertical',
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the modal',
          description: 'And i am the description',
          icon: icon,
        }),
        (rightAlignedFooter.args = {
          visible: !0,
          alignFooter: 'right',
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the modal',
          description: 'And i am the description',
        }),
        (hideFooter.args = {
          visible: !0,
          hideFooter: !0,
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the modal',
          description: 'And i am the description',
        }),
        (customFooter.args = {
          visible: !0,
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the modal',
          description: 'And i am the description',
          customFooter: [
            (0, jsx_runtime.jsxs)(Space.T, {
              children: [
                (0, jsx_runtime.jsx)('div', {
                  children: (0, jsx_runtime.jsx)(Badge.C, {
                    color: 'red',
                    dot: !0,
                    size: 'small',
                    children: 'Proceed with caution',
                  }),
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  type: 'secondary',
                  children: 'Cancel',
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  danger: !0,
                  children: 'Delete',
                }),
              ],
            }),
          ],
        }),
        (customFooterVertical.args = {
          visible: !0,
          size: 'small',
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the modal',
          description: 'And i am the description',
          layout: 'vertical',
          customFooter: [
            (0, jsx_runtime.jsxs)(Space.T, {
              style: { width: '100%' },
              children: [
                (0, jsx_runtime.jsx)(Button.z, {
                  size: 'medium',
                  block: !0,
                  type: 'secondary',
                  children: 'Cancel',
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  size: 'medium',
                  block: !0,
                  danger: !0,
                  icon: (0, jsx_runtime.jsx)(IconTrash.Z, {}),
                  children: 'Delete',
                }),
              ],
            }),
          ],
        }),
        (customFooterOneButton.args = {
          visible: !0,
          size: 'small',
          icon: (0, jsx_runtime.jsx)(IconCheck.Z, {
            background: 'brand',
            size: 'xxxlarge',
          }),
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'Payment succesful',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
          layout: 'vertical',
          customFooter: [
            (0, jsx_runtime.jsx)(Space.T, {
              style: { width: '100%' },
              children: (0, jsx_runtime.jsx)(Button.z, {
                size: 'medium',
                block: !0,
                icon: (0, jsx_runtime.jsx)(IconCheck.Z, {}),
                children: 'Confirm',
              }),
            }),
          ],
        }),
        (withUseState.parameters = {
          ...withUseState.parameters,
          docs: {
            ...withUseState.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [visible, setVisible] = useState(false);\n  return <>\n      <div className="\n          py-4 px-8\n          bg-scale-300 \n          border \n          border-scale-500 \n          rounded flex gap-4 \n          shadow-sm\n          justify-between\n          items-center\n          \n          fixed\n          top-1/2\n          left-1/2\n          w-3/4\n\n          -translate-x-1/2\n          -translate-y-1/2">\n        <div>\n          <h4 className="text-scale-1200 text-base">Delete your project</h4>\n          <p className="text-scale-1100 text-sm">\n            It will be sad to see you go\n          </p>\n        </div>\n        <Button type="default" onClick={() => setVisible(!visible)} icon={<IconTrash />}>\n          Delete this project\n        </Button>\n      </div>\n      <div>\n        <Modal size="small" visible={visible} onCancel={() => setVisible(!visible)} header={<div className="flex items-center gap-2 text-scale-1200">\n              {/* <div className="text-scale-600">\n               <IconTrash strokeWidth={2} />\n               </div> */}\n              <div className="flex items-baseline gap-2">\n                <h3 className="text-sm">Delete your project</h3>\n                <span className="text-xs text-scale-900">Are you sure?</span>\n              </div>\n            </div>} contentStyle={{\n        padding: 0\n      }} hideFooter>\n          <Form initialValues={{\n          name: \'\'\n        }} onSubmit={(values: any, {\n          setSubmitting\n        }: any) => {\n          setTimeout(() => {\n            // alert(JSON.stringify(values, null, 2))\n            setSubmitting(false);\n            setVisible(false);\n          }, 400);\n        }} validate={values => {\n          const errors: any = {};\n          if (!values.name) {\n            errors.name = \'Project name is required\';\n          } else if (values.name !== \'MyProject\') {\n            errors.name = \'Does not match project name\';\n          }\n          return errors;\n        }}>\n            {({\n            isSubmitting,\n            errors,\n            touched\n          }: any) => {\n            console.log(\'errors in form\', errors);\n            console.log(\'touched in form\', touched);\n            return <div className="space-y-4 mb-4">\n                  <div className="px-5 py-3 bg-amber-100 border-t border-b border-amber-300">\n                    <span className="flex gap-3 items-center text-xs text-amber-900">\n                      <IconAlertCircle strokeWidth={2} />\n                      <span>\n                        Once deleted, this project cannot be restored. Please\n                        proceed carefully.\n                      </span>\n                    </span>\n                  </div>\n                  <div className="px-5">\n                    <p className="text-sm text-scale-1100">\n                      This action cannot be undone. This will permanently delete\n                      the project{\' \'}\n                      <span className="text-scale-1200 font-regular">\n                        MyProject\n                      </span>\n                      .\n                    </p>\n                  </div>\n                  <div className="border-t border-scale-300 dark:border-scale-500"></div>\n                  <div className="px-5">\n                    <Input id="name" size="small" placeholder="Name of your project" label="Please type MyProject to confirm." />\n                  </div>\n                  <div className="border-t border-scale-300 dark:border-scale-500"></div>\n                  <div className="px-5">\n                    <Button type="danger" htmlType="submit" block size="medium" loading={isSubmitting}>\n                      I understand, delete this project\n                    </Button>\n                  </div>\n                </div>;\n          }}\n          </Form>\n        </Modal>\n      </div>\n    </>;\n}',
              ...withUseState.parameters?.docs?.source,
            },
          },
        }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Modal {...args} header={<div className="flex items-center gap-2 text-scale-1200">\n        <div className="text-brand-700">\n          <IconLink2 />\n        </div>\n        <div className="flex items-baseline gap-2">\n          <h3>This is the title</h3>\n          <span className="text-xs text-scale-900">This is the title</span>\n        </div>\n      </div>}>\n    <Typography.Text type="secondary">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{\' \'}\n      <Typography.Text code>{\'{children}\'}</Typography.Text>\n    </Typography.Text>\n  </Modal>',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (withIcon.parameters = {
          ...withIcon.parameters,
          docs: {
            ...withIcon.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Modal {...args}>\n    <Typography.Text type=\"secondary\">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{' '}\n      <Typography.Text code>{'{children}'}</Typography.Text>\n    </Typography.Text>\n  </Modal>",
              ...withIcon.parameters?.docs?.source,
            },
          },
        }),
        (withVerticalLayout.parameters = {
          ...withVerticalLayout.parameters,
          docs: {
            ...withVerticalLayout.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Modal {...args}>\n    <Typography.Text type=\"secondary\">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{' '}\n      <Typography.Text code>{'{children}'}</Typography.Text>\n    </Typography.Text>\n  </Modal>",
              ...withVerticalLayout.parameters?.docs?.source,
            },
          },
        }),
        (withCloseButton.parameters = {
          ...withCloseButton.parameters,
          docs: {
            ...withCloseButton.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Modal {...args}>\n    <Typography.Text type="secondary">\n      This Modal has a close button on the top right\n      <Typography.Text code>{\'{children}\'}</Typography.Text>\n    </Typography.Text>\n  </Modal>',
              ...withCloseButton.parameters?.docs?.source,
            },
          },
        }),
        (rightAlignedFooter.parameters = {
          ...rightAlignedFooter.parameters,
          docs: {
            ...rightAlignedFooter.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Modal {...args}>\n    <Typography.Text type=\"secondary\">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{' '}\n      <Typography.Text code>{'{children}'}</Typography.Text>\n    </Typography.Text>\n  </Modal>",
              ...rightAlignedFooter.parameters?.docs?.source,
            },
          },
        }),
        (hideFooter.parameters = {
          ...hideFooter.parameters,
          docs: {
            ...hideFooter.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Modal {...args}>\n    <Typography.Text type=\"secondary\">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{' '}\n      <Typography.Text code>{'{children}'}</Typography.Text>\n    </Typography.Text>\n  </Modal>",
              ...hideFooter.parameters?.docs?.source,
            },
          },
        }),
        (withFooterBackground.parameters = {
          ...withFooterBackground.parameters,
          docs: {
            ...withFooterBackground.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Modal {...args}>\n    <Typography.Text type=\"secondary\">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{' '}\n      <Typography.Text code>{'{children}'}</Typography.Text>\n    </Typography.Text>\n  </Modal>",
              ...withFooterBackground.parameters?.docs?.source,
            },
          },
        }),
        (customFooter.parameters = {
          ...customFooter.parameters,
          docs: {
            ...customFooter.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Modal {...args}>\n    <Typography.Text type=\"secondary\">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{' '}\n      <Typography.Text code>{'{children}'}</Typography.Text>\n    </Typography.Text>\n  </Modal>",
              ...customFooter.parameters?.docs?.source,
            },
          },
        }),
        (customFooterVertical.parameters = {
          ...customFooterVertical.parameters,
          docs: {
            ...customFooterVertical.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <Modal {...args}>\n    <Typography.Text type=\"secondary\">\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via{' '}\n      <Typography.Text code>{'{children}'}</Typography.Text>\n    </Typography.Text>\n  </Modal>",
              ...customFooterVertical.parameters?.docs?.source,
            },
          },
        }),
        (LongModal.parameters = {
          ...LongModal.parameters,
          docs: {
            ...LongModal.parameters?.docs,
            source: {
              originalSource:
                '() => <div>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <p>\n      Modal content is inserted here, if you need to insert anything into the\n      Modal you can do so via\n    </p>\n    <Modal visible={true}>\n      <Typography.Text type="secondary">\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <p>\n          Modal content is inserted here, if you need to insert anything into\n          the Modal you can do so via\n        </p>\n        <Typography.Text code>{\'{children}\'}</Typography.Text>\n      </Typography.Text>\n    </Modal>\n  </div>',
              ...LongModal.parameters?.docs?.source,
            },
          },
        }),
        (customFooterOneButton.parameters = {
          ...customFooterOneButton.parameters,
          docs: {
            ...customFooterOneButton.parameters?.docs,
            source: {
              originalSource: '(args: any) => <Modal {...args} />',
              ...customFooterOneButton.parameters?.docs?.source,
            },
          },
        }),
        (modalWithDropdowns.parameters = {
          ...modalWithDropdowns.parameters,
          docs: {
            ...modalWithDropdowns.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [visible, setVisible] = useState(false);\n  return <>\n      <Button onClick={() => setVisible(!visible)}>Open</Button>\n      <Modal visible={visible} onCancel={() => setVisible(!visible)} hideFooter\n    // className="pointer-events-auto"\n    >\n        <Dropdown\n      // className="pointer-events-auto"\n      overlay={<>\n              <Dropdown.Item onClick={() => console.log(\'item 1 clicked\')}>\n                Item 1\n              </Dropdown.Item>\n              <Dropdown.Item onClick={() => console.log(\'item 2 clicked\')}>\n                Item 2\n              </Dropdown.Item>\n            </>}>\n          <Button as="span">Trigger dropdown</Button>\n        </Dropdown>\n      </Modal>\n    </>;\n}',
              ...modalWithDropdowns.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'withUseState',
        'Default',
        'withIcon',
        'withVerticalLayout',
        'withCloseButton',
        'rightAlignedFooter',
        'hideFooter',
        'withFooterBackground',
        'customFooter',
        'customFooterVertical',
        'LongModal',
        'customFooterOneButton',
        'modalWithDropdowns',
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
              'src/components/Modal/Modal.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/Modal/Modal.stories.tsx#Default',
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
              'src/components/Modal/Modal.stories.tsx#withIcon'
            ] = {
              docgenInfo: withIcon.__docgenInfo,
              name: 'withIcon',
              path: 'src/components/Modal/Modal.stories.tsx#withIcon',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withVerticalLayout.displayName = 'withVerticalLayout'),
          (withVerticalLayout.__docgenInfo = {
            description: '',
            displayName: 'withVerticalLayout',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#withVerticalLayout'
            ] = {
              docgenInfo: withVerticalLayout.__docgenInfo,
              name: 'withVerticalLayout',
              path: 'src/components/Modal/Modal.stories.tsx#withVerticalLayout',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withCloseButton.displayName = 'withCloseButton'),
          (withCloseButton.__docgenInfo = {
            description: '',
            displayName: 'withCloseButton',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#withCloseButton'
            ] = {
              docgenInfo: withCloseButton.__docgenInfo,
              name: 'withCloseButton',
              path: 'src/components/Modal/Modal.stories.tsx#withCloseButton',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(rightAlignedFooter.displayName = 'rightAlignedFooter'),
          (rightAlignedFooter.__docgenInfo = {
            description: '',
            displayName: 'rightAlignedFooter',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#rightAlignedFooter'
            ] = {
              docgenInfo: rightAlignedFooter.__docgenInfo,
              name: 'rightAlignedFooter',
              path: 'src/components/Modal/Modal.stories.tsx#rightAlignedFooter',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(hideFooter.displayName = 'hideFooter'),
          (hideFooter.__docgenInfo = {
            description: '',
            displayName: 'hideFooter',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#hideFooter'
            ] = {
              docgenInfo: hideFooter.__docgenInfo,
              name: 'hideFooter',
              path: 'src/components/Modal/Modal.stories.tsx#hideFooter',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withFooterBackground.displayName = 'withFooterBackground'),
          (withFooterBackground.__docgenInfo = {
            description: '',
            displayName: 'withFooterBackground',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#withFooterBackground'
            ] = {
              docgenInfo: withFooterBackground.__docgenInfo,
              name: 'withFooterBackground',
              path: 'src/components/Modal/Modal.stories.tsx#withFooterBackground',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(customFooter.displayName = 'customFooter'),
          (customFooter.__docgenInfo = {
            description: '',
            displayName: 'customFooter',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#customFooter'
            ] = {
              docgenInfo: customFooter.__docgenInfo,
              name: 'customFooter',
              path: 'src/components/Modal/Modal.stories.tsx#customFooter',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(customFooterVertical.displayName = 'customFooterVertical'),
          (customFooterVertical.__docgenInfo = {
            description: '',
            displayName: 'customFooterVertical',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#customFooterVertical'
            ] = {
              docgenInfo: customFooterVertical.__docgenInfo,
              name: 'customFooterVertical',
              path: 'src/components/Modal/Modal.stories.tsx#customFooterVertical',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(customFooterOneButton.displayName = 'customFooterOneButton'),
          (customFooterOneButton.__docgenInfo = {
            description: '',
            displayName: 'customFooterOneButton',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Modal/Modal.stories.tsx#customFooterOneButton'
            ] = {
              docgenInfo: customFooterOneButton.__docgenInfo,
              name: 'customFooterOneButton',
              path: 'src/components/Modal/Modal.stories.tsx#customFooterOneButton',
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
    './src/components/Dropdown/Dropdown.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        ZP: function () {
          return Dropdown_Dropdown
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js'
        ),
        IconCheck = __webpack_require__(
          './src/components/Icon/icons/IconCheck/IconCheck.tsx'
        ),
        handler = __webpack_require__('./src/theme/handler.ts'),
        target = __webpack_require__(
          '../../node_modules/react-feather/dist/icons/target.js'
        ),
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconTarget(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: target.Z, ...props })
      }
      IconTarget.displayName = 'IconTarget'
      var IconTarget_IconTarget = IconTarget
      try {
        ;(IconTarget.displayName = 'IconTarget'),
          (IconTarget.__docgenInfo = {
            description: '',
            displayName: 'IconTarget',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconTarget/IconTarget.tsx#IconTarget'
            ] = {
              docgenInfo: IconTarget.__docgenInfo,
              name: 'IconTarget',
              path: 'src/components/Icon/icons/IconTarget/IconTarget.tsx#IconTarget',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function Dropdown(_ref) {
        let {
            open: open,
            onOpenChange: onOpenChange,
            align: align = 'center',
            side: side = 'bottom',
            sideOffset: sideOffset = 6,
            overlay: overlay,
            children: children,
            size: size = 'medium',
            className: className,
            style: style,
            arrow: arrow,
            isNested: isNested,
          } = _ref,
          __styles = (0, handler.Z)('dropdown'),
          classes = [__styles.content, __styles.size[size]]
        return (
          className && classes.push(className),
          (0, jsx_runtime.jsxs)(index_module.fC, {
            onOpenChange: onOpenChange,
            open: open,
            children: [
              isNested
                ? (0, jsx_runtime.jsx)(index_module.ce, {
                    className: [__styles.item_nested].join(' '),
                    children: children,
                  })
                : (0, jsx_runtime.jsx)(index_module.xz, {
                    className: __styles.trigger,
                    children: children,
                  }),
              (0, jsx_runtime.jsxs)(index_module.VY, {
                portalled: !0,
                sideOffset: sideOffset,
                side: side,
                align: align,
                className: classes.join(' '),
                style: style,
                children: [
                  arrow &&
                    (0, jsx_runtime.jsx)(index_module.Eh, {
                      className: __styles.arrow,
                      offset: 10,
                    }),
                  overlay,
                ],
              }),
            ],
          })
        )
      }
      function RightSlot(_ref2) {
        let { children: children } = _ref2,
          __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsx)('div', {
          className: __styles.right_slot,
          children: children,
        })
      }
      function Item(_ref3) {
        let {
            children: children,
            icon: icon,
            disabled: disabled,
            onClick: onClick,
            rightSlot: rightSlot,
          } = _ref3,
          __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsxs)(index_module.ck, {
          className: __styles.item,
          disabled: disabled,
          onSelect: onClick,
          children: [
            icon && icon,
            (0, jsx_runtime.jsx)('span', { children: children }),
          ],
        })
      }
      function TriggerItem(_ref4) {
        let { children: children, icon: icon, disabled: disabled } = _ref4,
          __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsxs)('div', {
          className: __styles.item,
          children: [
            icon && icon,
            (0, jsx_runtime.jsx)('span', { children: children }),
          ],
        })
      }
      function Misc(_ref5) {
        let { children: children, icon: icon } = _ref5,
          __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsxs)('div', {
          className: __styles.misc,
          children: [icon && icon, children],
        })
      }
      function Seperator() {
        let __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsx)(index_module.Z0, {
          className: __styles.seperator,
        })
      }
      function Checkbox(_ref6) {
        let {
          children: children,
          checked: propsChecked,
          onChange: onChange,
          disabled: disabled,
          ItemIndicator: ItemIndicator,
        } = _ref6
        const [checked, setChecked] = (0, react.useState)(propsChecked || !1)
        let __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsxs)(index_module.oC, {
          checked: checked,
          onCheckedChange: (e) => {
            onChange && onChange(e), setChecked(e)
          },
          className: `${__styles.item} ${__styles.input}`,
          disabled: disabled,
          children: [
            (0, jsx_runtime.jsxs)(index_module.wU, {
              className: __styles.check,
              children: [
                ItemIndicator ||
                  (0, jsx_runtime.jsx)(IconCheck.Z, {
                    size: 'tiny',
                    strokeWidth: 3,
                  }),
                (0, jsx_runtime.jsx)(index_module.oC, {}),
              ],
            }),
            (0, jsx_runtime.jsx)('span', { children: children }),
          ],
        })
      }
      function Radio(_ref7) {
        let {
            children: children,
            value: value,
            ItemIndicator: ItemIndicator,
          } = _ref7,
          __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsxs)(index_module.Rk, {
          value: value,
          className: `${__styles.item} ${__styles.input}`,
          children: [
            (0, jsx_runtime.jsx)(index_module.wU, {
              className: __styles.check,
              children:
                ItemIndicator ||
                (0, jsx_runtime.jsx)(IconTarget_IconTarget, {
                  strokeWidth: 6,
                  size: 10,
                }),
            }),
            (0, jsx_runtime.jsx)('span', { children: children }),
          ],
        })
      }
      function RadioGroup(_ref8) {
        let {
          children: children,
          value: propsValue,
          onChange: onChange,
        } = _ref8
        const [value, setValue] = (0, react.useState)(propsValue || '')
        return (0, jsx_runtime.jsx)(index_module.Ee, {
          value: value,
          onValueChange: (e) => {
            onChange && onChange(e), setValue(e)
          },
          children: children,
        })
      }
      function Label(_ref9) {
        let { children: children } = _ref9,
          __styles = (0, handler.Z)('dropdown')
        return (0, jsx_runtime.jsx)(index_module.__, {
          className: __styles.label,
          children: children,
        })
      }
      ;(Dropdown.displayName = 'Dropdown'),
        (RightSlot.displayName = 'RightSlot'),
        (Item.displayName = 'Item'),
        (TriggerItem.displayName = 'TriggerItem'),
        (Misc.displayName = 'Misc'),
        (Seperator.displayName = 'Seperator'),
        (Checkbox.displayName = 'Checkbox'),
        (Radio.displayName = 'Radio'),
        (RadioGroup.displayName = 'RadioGroup'),
        (Label.displayName = 'Label'),
        (Dropdown.Item = Item),
        (Dropdown.Misc = Misc),
        (Dropdown.Checkbox = Checkbox),
        (Dropdown.Radio = Radio),
        (Dropdown.RadioGroup = RadioGroup),
        (Dropdown.Label = Label),
        (Dropdown.Seperator = Seperator),
        (Dropdown.RightSlot = RightSlot),
        (Dropdown.TriggerItem = TriggerItem)
      var Dropdown_Dropdown = Dropdown
      try {
        ;(RightSlot.displayName = 'RightSlot'),
          (RightSlot.__docgenInfo = {
            description: '',
            displayName: 'RightSlot',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.tsx#RightSlot'
            ] = {
              docgenInfo: RightSlot.__docgenInfo,
              name: 'RightSlot',
              path: 'src/components/Dropdown/Dropdown.tsx#RightSlot',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Item.displayName = 'Item'),
          (Item.__docgenInfo = {
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
              rightSlot: {
                defaultValue: null,
                description: '',
                name: 'rightSlot',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.tsx#Item'
            ] = {
              docgenInfo: Item.__docgenInfo,
              name: 'Item',
              path: 'src/components/Dropdown/Dropdown.tsx#Item',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(TriggerItem.displayName = 'TriggerItem'),
          (TriggerItem.__docgenInfo = {
            description: '',
            displayName: 'TriggerItem',
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
              rightSlot: {
                defaultValue: null,
                description: '',
                name: 'rightSlot',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.tsx#TriggerItem'
            ] = {
              docgenInfo: TriggerItem.__docgenInfo,
              name: 'TriggerItem',
              path: 'src/components/Dropdown/Dropdown.tsx#TriggerItem',
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
              rightSlot: {
                defaultValue: null,
                description: '',
                name: 'rightSlot',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.tsx#Misc'
            ] = {
              docgenInfo: Misc.__docgenInfo,
              name: 'Misc',
              path: 'src/components/Dropdown/Dropdown.tsx#Misc',
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
              'src/components/Dropdown/Dropdown.tsx#Checkbox'
            ] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/components/Dropdown/Dropdown.tsx#Checkbox',
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
              'src/components/Dropdown/Dropdown.tsx#Radio'
            ] = {
              docgenInfo: Radio.__docgenInfo,
              name: 'Radio',
              path: 'src/components/Dropdown/Dropdown.tsx#Radio',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(RadioGroup.displayName = 'RadioGroup'),
          (RadioGroup.__docgenInfo = {
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
              'src/components/Dropdown/Dropdown.tsx#RadioGroup'
            ] = {
              docgenInfo: RadioGroup.__docgenInfo,
              name: 'RadioGroup',
              path: 'src/components/Dropdown/Dropdown.tsx#RadioGroup',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Label.displayName = 'Label'),
          (Label.__docgenInfo = {
            description: '',
            displayName: 'Label',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.tsx#Label'
            ] = {
              docgenInfo: Label.__docgenInfo,
              name: 'Label',
              path: 'src/components/Dropdown/Dropdown.tsx#Label',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Dropdown.displayName = 'Dropdown'),
          (Dropdown.__docgenInfo = {
            description: '',
            displayName: 'Dropdown',
            props: {
              open: {
                defaultValue: null,
                description: '',
                name: 'open',
                required: !1,
                type: { name: 'boolean' },
              },
              arrow: {
                defaultValue: null,
                description: '',
                name: 'arrow',
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
              sideOffset: {
                defaultValue: { value: '6' },
                description: '',
                name: 'sideOffset',
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
                    { value: '"content"' },
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
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              isNested: {
                defaultValue: null,
                description: '',
                name: 'isNested',
                required: !1,
                type: { name: 'Boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.tsx#Dropdown'
            ] = {
              docgenInfo: Dropdown.__docgenInfo,
              name: 'Dropdown',
              path: 'src/components/Dropdown/Dropdown.tsx#Dropdown',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Form/Form.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return Form
        },
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/formik/dist/formik.esm.js'
        ),
        _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function errorReducer(state, action) {
        if (!action.error) {
          const payload = state
          return delete payload[action.key], payload
        }
        if (action) return { ...state, [action.key]: action.error }
        throw new Error()
      }
      function Form(_ref) {
        let { validate: validate, ...props } = _ref
        const [fieldLevelErrors, dispatchErrors] = (0,
        react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(errorReducer, null)
        const formik = (0, formik__WEBPACK_IMPORTED_MODULE_1__.TA)({
          validateOnBlur: !0,
          ...props,
          validationSchema: props.validationSchema,
          initialValues: props.initialValues,
          onSubmit: props.onSubmit,
          validate:
            validate ||
            function () {
              return fieldLevelErrors
            },
        })
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('form', {
          id: props.id,
          name: props.name,
          onSubmit: formik.handleSubmit,
          className: props.className,
          style: props.style,
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _FormContext__WEBPACK_IMPORTED_MODULE_3__.o,
            {
              values: formik.values,
              errors: formik.errors,
              formContextOnChange: formik.handleChange,
              handleBlur: formik.handleBlur,
              touched: formik.touched,
              fieldLevelValidation: function handleFieldLevelValidation(
                key,
                error
              ) {
                dispatchErrors({ key: key, error: error })
              },
              children: props.children({
                errors: formik.errors,
                touched: formik.touched,
                isSubmitting: formik.isSubmitting,
                isValidating: formik.isValidating,
                submitCount: formik.submitCount,
                initialValues: formik.initialValues,
                values: formik.values,
                handleReset: formik.handleReset,
                resetForm: formik.resetForm,
              }),
            }
          ),
        })
      }
      Form.displayName = 'Form'
      try {
        ;(Form.displayName = 'Form'),
          (Form.__docgenInfo = {
            description: '',
            displayName: 'Form',
            props: {
              children: {
                defaultValue: null,
                description: 'React children or child render callback',
                name: 'children',
                required: !0,
                type: { name: 'any' },
              },
              handleIsSubmitting: {
                defaultValue: null,
                description: '',
                name: 'handleIsSubmitting',
                required: !1,
                type: { name: 'any' },
              },
              handleIsValidating: {
                defaultValue: null,
                description: '',
                name: 'handleIsValidating',
                required: !1,
                type: { name: 'any' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !1,
                type: { name: 'string' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Form/Form.tsx#Form'] = {
              docgenInfo: Form.__docgenInfo,
              name: 'Form',
              path: 'src/components/Form/Form.tsx#Form',
            })
      } catch (__react_docgen_typescript_loader_error) {}
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
    './src/components/Icon/icons/IconTrash/IconTrash.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/trash.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconTrash(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconTrash.displayName = 'IconTrash'),
        (__webpack_exports__.Z = IconTrash)
      try {
        ;(IconTrash.displayName = 'IconTrash'),
          (IconTrash.__docgenInfo = {
            description: '',
            displayName: 'IconTrash',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconTrash/IconTrash.tsx#IconTrash'
            ] = {
              docgenInfo: IconTrash.__docgenInfo,
              name: 'IconTrash',
              path: 'src/components/Icon/icons/IconTrash/IconTrash.tsx#IconTrash',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Modal/Modal.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/components/Space.tsx'
        ),
        _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/components/Button.tsx'
        ),
        _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-dialog/dist/index.module.js'
          ),
        _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const Modal = (_ref) => {
        let {
          children: children,
          customFooter: customFooter,
          closable: closable,
          description: description,
          hideFooter: hideFooter = !1,
          alignFooter: alignFooter = 'left',
          layout: layout = 'horizontal',
          loading: loading = !1,
          cancelText: cancelText = 'Cancel',
          onConfirm: onConfirm = () => {},
          onCancel: onCancel = () => {},
          confirmText: confirmText = 'Confirm',
          showIcon: showIcon = !1,
          title: title,
          footerBackground: footerBackground,
          icon: icon,
          variant: variant = 'success',
          visible: visible = !1,
          size: size = 'large',
          style: style,
          overlayStyle: overlayStyle,
          contentStyle: contentStyle,
          className: className = '',
          overlayClassName: overlayClassName,
          triggerElement: triggerElement,
          header: header,
          ...props
        } = _ref
        const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
            visible || !1
          ),
          __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)('modal')
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
          setOpen(visible)
        }, [visible])
        __styles.base
        const footerContent =
          customFooter ||
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            _index__WEBPACK_IMPORTED_MODULE_3__.T,
            {
              style: {
                width: '100%',
                justifyContent:
                  'vertical' === layout
                    ? 'center'
                    : 'right' === alignFooter
                    ? 'flex-end'
                    : 'flex-start',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _index__WEBPACK_IMPORTED_MODULE_4__.z,
                  {
                    type: 'secondary',
                    onClick: onCancel,
                    disabled: loading,
                    children: cancelText,
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _index__WEBPACK_IMPORTED_MODULE_4__.z,
                  {
                    onClick: onConfirm,
                    loading: loading,
                    danger: 'danger' === variant,
                    children: confirmText,
                  }
                ),
              ],
            }
          )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.fC,
          {
            open: open,
            onOpenChange: function handleOpenChange(open) {
              void 0 === visible || open ? setOpen(open) : onCancel()
            },
            children: [
              triggerElement &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.xz,
                  { children: triggerElement }
                ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.h_,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.aV,
                      { className: __styles.overlay }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.aV,
                      {
                        className: __styles.scroll_overlay,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                          _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.VY,
                          {
                            className: [
                              __styles.base,
                              __styles.size[size],
                            ].join(' '),
                            onInteractOutside: props.onInteractOutside,
                            children: [
                              header &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  'div',
                                  {
                                    className: __styles.header,
                                    children: header,
                                  }
                                ),
                              children,
                              !hideFooter &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  'div',
                                  {
                                    className: __styles.footer,
                                    children: footerContent,
                                  }
                                ),
                            ],
                          }
                        ),
                      }
                    ),
                  ],
                }
              ),
            ],
          }
        )
      }
      function Content(_ref2) {
        let { children: children } = _ref2
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
          'modal'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: __styles.content,
          children: children,
        })
      }
      function Seperator() {
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
          'modal'
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: __styles.seperator,
        })
      }
      ;(Modal.displayName = 'Modal'),
        (Content.displayName = 'Content'),
        (Seperator.displayName = 'Seperator'),
        (Modal.Content = Content),
        (Modal.Seperator = Seperator),
        (__webpack_exports__.Z = Modal)
      try {
        ;(Modal.displayName = 'Modal'),
          (Modal.__docgenInfo = {
            description: '',
            displayName: 'Modal',
            props: {
              customFooter: {
                defaultValue: { value: 'undefined' },
                description: '',
                name: 'customFooter',
                required: !1,
                type: { name: 'ReactNode' },
              },
              closable: {
                defaultValue: null,
                description: '',
                name: 'closable',
                required: !1,
                type: { name: 'boolean' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              hideFooter: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hideFooter',
                required: !1,
                type: { name: 'boolean' },
              },
              alignFooter: {
                defaultValue: { value: 'left' },
                description: '',
                name: 'alignFooter',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"left"' }, { value: '"right"' }],
                },
              },
              layout: {
                defaultValue: { value: 'horizontal' },
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
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
              onCancel: {
                defaultValue: { value: '() => {}' },
                description: '',
                name: 'onCancel',
                required: !1,
                type: { name: 'any' },
              },
              cancelText: {
                defaultValue: { value: 'Cancel' },
                description: '',
                name: 'cancelText',
                required: !1,
                type: { name: 'string' },
              },
              onConfirm: {
                defaultValue: { value: '() => {}' },
                description: '',
                name: 'onConfirm',
                required: !1,
                type: { name: 'any' },
              },
              confirmText: {
                defaultValue: { value: 'Confirm' },
                description: '',
                name: 'confirmText',
                required: !1,
                type: { name: 'string' },
              },
              showIcon: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'showIcon',
                required: !1,
                type: { name: 'boolean' },
              },
              footerBackground: {
                defaultValue: null,
                description: '',
                name: 'footerBackground',
                required: !1,
                type: { name: 'boolean' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'ReactNode' },
              },
              variant: {
                defaultValue: { value: 'success' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"danger"' },
                    { value: '"warning"' },
                    { value: '"success"' },
                  ],
                },
              },
              visible: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'visible',
                required: !1,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: { value: 'large' },
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
                    { value: '"xxlarge"' },
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
              overlayStyle: {
                defaultValue: null,
                description: '',
                name: 'overlayStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              contentStyle: {
                defaultValue: null,
                description: '',
                name: 'contentStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              overlayClassName: {
                defaultValue: null,
                description: '',
                name: 'overlayClassName',
                required: !1,
                type: { name: 'string' },
              },
              transition: {
                defaultValue: null,
                description: '',
                name: 'transition',
                required: !1,
                type: { name: 'AnimationTailwindClasses' },
              },
              transitionOverlay: {
                defaultValue: null,
                description: '',
                name: 'transitionOverlay',
                required: !1,
                type: { name: 'AnimationTailwindClasses' },
              },
              triggerElement: {
                defaultValue: null,
                description: '',
                name: 'triggerElement',
                required: !1,
                type: { name: 'ReactNode' },
              },
              header: {
                defaultValue: null,
                description: '',
                name: 'header',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Modal/Modal.tsx#Modal'] = {
              docgenInfo: Modal.__docgenInfo,
              name: 'Modal',
              path: 'src/components/Modal/Modal.tsx#Modal',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Space.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        T: function () {
          return Space
        },
      })
      __webpack_require__('../../node_modules/react/index.js')
      var _theme_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/theme/handler.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Space(_ref) {
        let {
          direction: direction,
          size: size = 2,
          className: className,
          block: block,
          style: style,
          minus: minus,
          children: children,
        } = _ref
        const __styles = (0, _theme_handler__WEBPACK_IMPORTED_MODULE_2__.Z)(
            'space'
          ),
          classes = [__styles.base]
        return (
          classes.push('vertical' === direction ? __styles.col : __styles.row),
          classes.push(
            __styles[
              'wsb-' +
                (minus ? 'minus-' : '') +
                'space-' +
                ('vertical' === direction ? 'y' : 'x') +
                '-' +
                size
            ]
          ),
          block && classes.push(__styles.block),
          className && classes.push(className),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: classes.join(' '),
            style: style,
            children: children,
          })
        )
      }
      Space.displayName = 'Space'
      try {
        ;(Space.displayName = 'Space'),
          (Space.__docgenInfo = {
            description: '',
            displayName: 'Space',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Space.tsx#Space'] = {
              docgenInfo: Space.__docgenInfo,
              name: 'Space',
              path: 'src/components/Space.tsx#Space',
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
    '../../node_modules/react-feather/dist/icons/target.js': function (
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
      var Target = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('circle', {
            cx: '12',
            cy: '12',
            r: '10',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('circle', {
            cx: '12',
            cy: '12',
            r: '6',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('circle', {
            cx: '12',
            cy: '12',
            r: '2',
          })
        )
      })
      ;(Target.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Target.displayName = 'Target'),
        (__webpack_exports__.Z = Target)
    },
  },
])
