'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [7374],
  {
    '../../node_modules/@radix-ui/react-dialog/dist/index.module.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        VY: function () {
          return Content
        },
        aV: function () {
          return Overlay
        },
        fC: function () {
          return Root
        },
        h_: function () {
          return Portal
        },
        xz: function () {
          return Trigger
        },
      })
      var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-slot/dist/index.module.js'
          ),
        aria_hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          '../../node_modules/aria-hidden/dist/es2015/index.js'
        ),
        react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          '../../node_modules/react-remove-scroll/dist/es2015/Combination.js'
        ),
        _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-focus-guards/dist/index.module.js'
          ),
        _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
          ),
        _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-presence/dist/index.module.js'
          ),
        _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-portal/dist/index.module.js'
          ),
        _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-focus-scope/dist/index.module.js'
          ),
        _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js'
          ),
        _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js'
          ),
        _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          '../../node_modules/@radix-ui/react-id/dist/index.module.js'
        ),
        _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-context/dist/index.module.js'
          ),
        _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js'
          ),
        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          '../../node_modules/@radix-ui/primitive/dist/index.module.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            '../../node_modules/@babel/runtime/helpers/esm/extends.js'
          )
      const [x, C] = (0,
        _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)('Dialog'),
        [v, E] = x('Dialog'),
        DialogTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (e, o) => {
            const { __scopeDialog: t, ...r } = e,
              a = E('DialogTrigger', t),
              i = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(
                o,
                a.triggerRef
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.W.button,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
                {
                  type: 'button',
                  'aria-haspopup': 'dialog',
                  'aria-expanded': a.open,
                  'aria-controls': a.contentId,
                  'data-state': b(a.open),
                },
                r,
                {
                  ref: i,
                  onClick: (0,
                  _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(
                    e.onClick,
                    a.onOpenToggle
                  ),
                }
              )
            )
          }
        ),
        DialogOverlay = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (e, o) => {
            const { forceMount: t, ...r } = e,
              n = E('DialogOverlay', e.__scopeDialog)
            return n.modal
              ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.z,
                  { present: t || n.open },
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    R,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
                      {},
                      r,
                      { ref: o }
                    )
                  )
                )
              : null
          }
        ),
        R = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((o, r) => {
          const { __scopeDialog: a, ...i } = o,
            l = E('DialogOverlay', a)
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__.Z,
            {
              as: _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__.g7,
              allowPinchZoom: l.allowPinchZoom,
              shards: [l.contentRef],
            },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.W.div,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
                { 'data-state': b(l.open) },
                i,
                { ref: r, style: { pointerEvents: 'auto', ...i.style } }
              )
            )
          )
        }),
        DialogContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (e, o) => {
            const { forceMount: t, ...r } = e,
              n = E('DialogContent', e.__scopeDialog)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.z,
              { present: t || n.open },
              n.modal
                ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    _,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
                      {},
                      r,
                      { ref: o }
                    )
                  )
                : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    O,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
                      {},
                      r,
                      { ref: o }
                    )
                  )
            )
          }
        ),
        _ = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, t) => {
          const r = E('DialogContent', e.__scopeDialog),
            n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
            a = (0,
            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(
              t,
              r.contentRef,
              n
            )
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
              const e = n.current
              if (e) return (0, aria_hidden__WEBPACK_IMPORTED_MODULE_12__.Ry)(e)
            }, []),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              h,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
                {},
                e,
                {
                  ref: a,
                  trapFocus: r.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: (0,
                  _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(
                    e.onCloseAutoFocus,
                    (e) => {
                      var o
                      e.preventDefault(),
                        null === (o = r.triggerRef.current) ||
                          void 0 === o ||
                          o.focus()
                    }
                  ),
                  onPointerDownOutside: (0,
                  _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      const o = e.detail.originalEvent,
                        t = 0 === o.button && !0 === o.ctrlKey
                      ;(2 === o.button || t) && e.preventDefault()
                    }
                  ),
                  onFocusOutside: (0,
                  _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(
                    e.onFocusOutside,
                    (e) => e.preventDefault()
                  ),
                }
              )
            )
          )
        }),
        O = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, o) => {
          const t = E('DialogContent', e.__scopeDialog),
            r = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1)
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            h,
            (0,
            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
              {},
              e,
              {
                ref: o,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: (o) => {
                  var n, a
                  null === (n = e.onCloseAutoFocus) ||
                    void 0 === n ||
                    n.call(e, o),
                    o.defaultPrevented ||
                      (r.current ||
                        null === (a = t.triggerRef.current) ||
                        void 0 === a ||
                        a.focus(),
                      o.preventDefault()),
                    (r.current = !1)
                },
                onInteractOutside: (o) => {
                  var n, a
                  null === (n = e.onInteractOutside) ||
                    void 0 === n ||
                    n.call(e, o),
                    o.defaultPrevented || (r.current = !0)
                  const i = o.target
                  ;(null === (a = t.triggerRef.current) || void 0 === a
                    ? void 0
                    : a.contains(i)) && o.preventDefault()
                },
              }
            )
          )
        }),
        h = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, o) => {
          const {
              __scopeDialog: t,
              trapFocus: n,
              onOpenAutoFocus: a,
              onCloseAutoFocus: i,
              ...s
            } = e,
            u = E('DialogContent', t),
            p = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
            d = (0,
            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(o, p)
          return (
            (0,
            _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__.EW)(),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__.M,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: n,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: i,
                },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__.XB,
                  (0,
                  _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)(
                    {
                      role: 'dialog',
                      id: u.contentId,
                      'aria-describedby': u.descriptionId,
                      'aria-labelledby': u.titleId,
                      'data-state': b(u.open),
                    },
                    s,
                    { ref: d, onDismiss: () => u.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          )
        })
      function b(e) {
        return e ? 'open' : 'closed'
      }
      const [w, F] = (0,
        _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)(
          'DialogTitleWarning',
          {
            contentName: 'DialogContent',
            titleName: 'DialogTitle',
            docsSlug: 'dialog',
          }
        ),
        Root = (e) => {
          const {
              __scopeDialog: o,
              children: t,
              open: r,
              defaultOpen: n,
              onOpenChange: a,
              modal: i = !0,
              allowPinchZoom: l,
            } = e,
            c = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
            p = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
            [d = !1, f] = (0,
            _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__.T)(
              { prop: r, defaultProp: n, onChange: a }
            )
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            v,
            {
              scope: o,
              triggerRef: c,
              contentRef: p,
              contentId: (0,
              _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.M)(),
              titleId: (0, _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.M)(),
              descriptionId: (0,
              _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.M)(),
              open: d,
              onOpenChange: f,
              onOpenToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                () => f((e) => !e),
                [f]
              ),
              modal: i,
              allowPinchZoom: l,
            },
            t
          )
        },
        Trigger = DialogTrigger,
        Portal = (e) => {
          const {
              __scopeDialog: o,
              forceMount: t,
              children: r,
              container: n,
            } = e,
            l = E('DialogPortal', o)
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0__.Children.map(r, (e) =>
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.z,
                { present: t || l.open },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__.c,
                  { asChild: !0, container: n },
                  e
                )
              )
            )
          )
        },
        Overlay = DialogOverlay,
        Content = DialogContent
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
    './src/components/SidePanel/SidePanel.stories.tsx': function (
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
          customFooter: function () {
            return customFooter
          },
          default: function () {
            return SidePanel_stories
          },
          hideFooter: function () {
            return hideFooter
          },
          leftAligned: function () {
            return leftAligned
          },
          leftAlignedFooter: function () {
            return leftAlignedFooter
          },
          longContent: function () {
            return longContent
          },
          nestedSidepanels: function () {
            return nestedSidepanels
          },
          triggerElement: function () {
            return triggerElement
          },
          withWideLayout: function () {
            return withWideLayout
          },
        })
      var dist = __webpack_require__(
          '../../node_modules/@storybook/addon-actions/dist/index.mjs'
        ),
        react = __webpack_require__('../../node_modules/react/index.js'),
        Button = __webpack_require__('./src/components/Button.tsx'),
        Space = __webpack_require__('./src/components/Space.tsx'),
        index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-dialog/dist/index.module.js'
        ),
        handler = __webpack_require__('./src/theme/handler.ts'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const SidePanel = (_ref) => {
        let {
          id: id,
          className: className,
          children: children,
          header: header,
          visible: visible,
          open: open,
          size: size = 'medium',
          loading: loading,
          align: align = 'right',
          hideFooter: hideFooter = !1,
          customFooter: customFooter,
          onConfirm: onConfirm,
          onCancel: onCancel,
          confirmText: confirmText = 'Confirm',
          cancelText: cancelText = 'Cancel',
          triggerElement: triggerElement,
          defaultOpen: defaultOpen,
          ...props
        } = _ref
        const __styles = (0, handler.Z)('sidepanel'),
          footerContent =
            customFooter ||
            (0, jsx_runtime.jsxs)('div', {
              className: __styles.footer,
              children: [
                (0, jsx_runtime.jsx)(Button.z, {
                  disabled: loading,
                  type: 'default',
                  onClick: () => (onCancel ? onCancel() : null),
                  children: cancelText,
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  loading: loading,
                  onClick: () => (onConfirm ? onConfirm() : null),
                  children: confirmText,
                }),
              ],
            })
        return (
          (open = open || visible),
          (0, jsx_runtime.jsxs)(index_module.fC, {
            open: open,
            onOpenChange: function handleOpenChange(open) {
              void 0 === visible || open || (onCancel && onCancel())
            },
            defaultOpen: defaultOpen,
            children: [
              triggerElement &&
                (0, jsx_runtime.jsx)(index_module.xz, {
                  className: __styles.trigger,
                  children: triggerElement,
                }),
              (0, jsx_runtime.jsxs)(index_module.h_, {
                children: [
                  (0, jsx_runtime.jsx)(index_module.aV, {
                    className: __styles.overlay,
                  }),
                  (0, jsx_runtime.jsxs)(index_module.VY, {
                    className: [
                      __styles.base,
                      __styles.size[size],
                      __styles.align[align],
                      className && className,
                    ].join(' '),
                    onOpenAutoFocus: props.onOpenAutoFocus,
                    onCloseAutoFocus: props.onCloseAutoFocus,
                    onEscapeKeyDown: props.onEscapeKeyDown,
                    onPointerDownOutside: props.onPointerDownOutside,
                    onInteractOutside: props.onInteractOutside,
                    children: [
                      header &&
                        (0, jsx_runtime.jsx)('header', {
                          className: __styles.header,
                          children: header,
                        }),
                      (0, jsx_runtime.jsx)('div', {
                        className: __styles.contents,
                        children: children,
                      }),
                      !hideFooter && footerContent,
                    ],
                  }),
                ],
              }),
            ],
          })
        )
      }
      function Seperator() {
        let __styles = (0, handler.Z)('sidepanel')
        return (0, jsx_runtime.jsx)('div', { className: __styles.seperator })
      }
      function Content(_ref2) {
        let { children: children } = _ref2,
          __styles = (0, handler.Z)('sidepanel')
        return (0, jsx_runtime.jsx)('div', {
          className: __styles.content,
          children: children,
        })
      }
      ;(SidePanel.displayName = 'SidePanel'),
        (Seperator.displayName = 'Seperator'),
        (Content.displayName = 'Content'),
        (SidePanel.Content = Content),
        (SidePanel.Seperator = Seperator)
      var SidePanel_SidePanel = SidePanel
      try {
        ;(Content.displayName = 'Content'),
          (Content.__docgenInfo = {
            description: '',
            displayName: 'Content',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.tsx#Content'
            ] = {
              docgenInfo: Content.__docgenInfo,
              name: 'Content',
              path: 'src/components/SidePanel/SidePanel.tsx#Content',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(SidePanel.displayName = 'SidePanel'),
          (SidePanel.__docgenInfo = {
            description: '',
            displayName: 'SidePanel',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'String' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'String' },
              },
              header: {
                defaultValue: null,
                description: '',
                name: 'header',
                required: !1,
                type: { name: 'ReactNode' },
              },
              visible: {
                defaultValue: null,
                description: '',
                name: 'visible',
                required: !0,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"medium"' }, { value: '"large"' }],
                },
              },
              loading: {
                defaultValue: null,
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              align: {
                defaultValue: { value: 'right' },
                description: '',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"left"' }, { value: '"right"' }],
                },
              },
              hideFooter: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hideFooter',
                required: !1,
                type: { name: 'boolean' },
              },
              customFooter: {
                defaultValue: { value: 'undefined' },
                description: '',
                name: 'customFooter',
                required: !1,
                type: { name: 'ReactNode' },
              },
              onCancel: {
                defaultValue: null,
                description: '',
                name: 'onCancel',
                required: !1,
                type: { name: '() => void' },
              },
              cancelText: {
                defaultValue: { value: 'Cancel' },
                description: '',
                name: 'cancelText',
                required: !1,
                type: { name: 'String' },
              },
              onConfirm: {
                defaultValue: null,
                description: '',
                name: 'onConfirm',
                required: !1,
                type: { name: '() => void' },
              },
              confirmText: {
                defaultValue: { value: 'Confirm' },
                description: '',
                name: 'confirmText',
                required: !1,
                type: { name: 'String' },
              },
              triggerElement: {
                defaultValue: null,
                description: '',
                name: 'triggerElement',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.tsx#SidePanel'
            ] = {
              docgenInfo: SidePanel.__docgenInfo,
              name: 'SidePanel',
              path: 'src/components/SidePanel/SidePanel.tsx#SidePanel',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var SidePanel_stories = {
        title: 'Overlays/SidePanel',
        component: SidePanel_SidePanel,
      }
      const content = (0, jsx_runtime.jsxs)('span', {
          className: 'text-scale-900 text-sm',
          children: [
            'SidePanel content is inserted here, if you need to insert anything into the SidePanel you can do so via',
            (0, jsx_runtime.jsx)('span', {
              className: 'text-code',
              children: 'children',
            }),
          ],
        }),
        Default = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
              ...args,
              header: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)('h3', {
                    className: 'text-base text-scale-1200',
                    children: 'This is the title',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    className: 'text-xs text-scale-900',
                    children: 'This is the title',
                  }),
                ],
              }),
              children: content,
            }),
          }),
        withWideLayout = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
              ...args,
              children: content,
            }),
          }),
        leftAlignedFooter = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
              ...args,
              children: content,
            }),
          }),
        leftAligned = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
              ...args,
              children: content,
            }),
          }),
        hideFooter = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
              ...args,
              children: content,
            }),
          }),
        customFooter = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
              ...args,
              children: content,
            }),
          }),
        triggerElement = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
              ...args,
              children: (0, jsx_runtime.jsx)('span', {
                className: 'text-scale-900',
                children: 'This was opened with a trigger element',
              }),
            }),
          }),
        nestedSidepanels = (args) => {
          const [panel1Visible, setPanel1Visible] = (0, react.useState)(!1),
            [panel2Visible, setPanel2Visible] = (0, react.useState)(!1)
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)('div', {
                className:
                  ' p-3 px-5  bg-scale-300 border border-scale-600 rounded flex gap-4  justify-between items-center fixed top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2',
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    children: [
                      (0, jsx_runtime.jsx)('h4', {
                        className: 'text-scale-1200 text-base',
                        children: 'Shall we nest some components?',
                      }),
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-scale-1100 text-sm',
                        children: 'yea sure, go on then.',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    type: 'secondary',
                    onClick: () => setPanel1Visible(!0),
                    children: 'Open sidepanel',
                  }),
                ],
              }),
              (0, jsx_runtime.jsxs)(SidePanel_SidePanel, {
                visible: panel1Visible,
                onCancel: () => setPanel1Visible(!1),
                onConfirm: () => setPanel1Visible(!1),
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'space-y-3',
                    children: [
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-sm text-scale-900 font-light',
                        children:
                          'This Sidepanel was opened with a trigger element',
                      }),
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-sm text-scale-1200',
                        children:
                          'You can open a nested panel by clicking the button below',
                      }),
                      (0, jsx_runtime.jsx)(Button.z, {
                        type: 'secondary',
                        onClick: () => setPanel2Visible(!0),
                        children: 'Open nested sidepanel',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(SidePanel_SidePanel, {
                    visible: panel2Visible,
                    onCancel: () => setPanel2Visible(!1),
                    onConfirm: () => setPanel2Visible(!1),
                    children: (0, jsx_runtime.jsx)(Button.z, {
                      type: 'secondary',
                      onClick: () => setPanel2Visible(!1),
                      children: 'Close nested sidepanel',
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        longContent = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)(SidePanel_SidePanel, {
              ...args,
              children: [
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-scale-900',
                  children: 'This is a paragraph',
                }),
              ],
            }),
          })
      ;(Default.args = {
        visible: !0,
        onCancel: (0, dist.aD)('onCancel'),
        onConfirm: (0, dist.aD)('onConfirm'),
        title: 'This is the title of the SidePanel',
        description: 'And i am the description',
      }),
        (withWideLayout.args = {
          visible: !0,
          size: 'large',
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the SidePanel',
          description: 'And i am the description',
        }),
        (leftAlignedFooter.args = {
          visible: !0,
          alignFooter: 'left',
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the SidePanel',
          description: 'And i am the description',
        }),
        (leftAligned.args = {
          visible: !0,
          align: 'left',
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the SidePanel',
          description: 'And i am the description',
        }),
        (hideFooter.args = {
          visible: !0,
          hideFooter: !0,
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the SidePanel',
          description: 'And i am the description',
        }),
        (customFooter.args = {
          visible: !0,
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the SidePanel',
          description: 'And i am the description',
          customFooter: [
            (0, jsx_runtime.jsxs)(Space.T, {
              children: [
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
        (triggerElement.args = {
          visible: !0,
          onCancel: (0, dist.aD)('onCancel'),
          onConfirm: (0, dist.aD)('onConfirm'),
          title: 'This is the title of the SidePanel',
          description: 'And i am the description',
          triggerElement: (0, jsx_runtime.jsx)(Button.z, {
            as: 'span',
            children: 'Open',
          }),
        }),
        (longContent.args = { visible: !0, header: 'Long content' }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args} header={<>\n          <h3 className="text-base text-scale-1200">This is the title</h3>\n          <p className="text-xs text-scale-900">This is the title</p>\n        </>}>\n      {content}\n    </SidePanel>\n  </>',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (withWideLayout.parameters = {
          ...withWideLayout.parameters,
          docs: {
            ...withWideLayout.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args}>{content}</SidePanel>\n  </>',
              ...withWideLayout.parameters?.docs?.source,
            },
          },
        }),
        (leftAlignedFooter.parameters = {
          ...leftAlignedFooter.parameters,
          docs: {
            ...leftAlignedFooter.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args}>{content}</SidePanel>\n  </>',
              ...leftAlignedFooter.parameters?.docs?.source,
            },
          },
        }),
        (leftAligned.parameters = {
          ...leftAligned.parameters,
          docs: {
            ...leftAligned.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args}>{content}</SidePanel>\n  </>',
              ...leftAligned.parameters?.docs?.source,
            },
          },
        }),
        (hideFooter.parameters = {
          ...hideFooter.parameters,
          docs: {
            ...hideFooter.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args}>{content}</SidePanel>\n  </>',
              ...hideFooter.parameters?.docs?.source,
            },
          },
        }),
        (customFooter.parameters = {
          ...customFooter.parameters,
          docs: {
            ...customFooter.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args}>{content}</SidePanel>\n  </>',
              ...customFooter.parameters?.docs?.source,
            },
          },
        }),
        (triggerElement.parameters = {
          ...triggerElement.parameters,
          docs: {
            ...triggerElement.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args}>\n      <span className="text-scale-900">\n        This was opened with a trigger element\n      </span>\n    </SidePanel>\n  </>',
              ...triggerElement.parameters?.docs?.source,
            },
          },
        }),
        (nestedSidepanels.parameters = {
          ...nestedSidepanels.parameters,
          docs: {
            ...nestedSidepanels.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  const [panel1Visible, setPanel1Visible] = useState(false);\n  const [panel2Visible, setPanel2Visible] = useState(false);\n  return <>\n      <div className="\n          p-3 px-5 \n          bg-scale-300 border border-scale-600 rounded flex gap-4 \n          justify-between\n          items-center\n          \n          fixed\n          top-1/2\n          left-1/2\n          w-3/4\n\n          -translate-x-1/2\n          -translate-y-1/2">\n        <div>\n          <h4 className="text-scale-1200 text-base">\n            Shall we nest some components?\n          </h4>\n          <p className="text-scale-1100 text-sm">yea sure, go on then.</p>\n        </div>\n        <Button type="secondary" onClick={() => setPanel1Visible(true)}>\n          Open sidepanel\n        </Button>\n      </div>\n      <SidePanel visible={panel1Visible} onCancel={() => setPanel1Visible(false)} onConfirm={() => setPanel1Visible(false)}>\n        <div className="space-y-3">\n          <p className="text-sm text-scale-900 font-light">\n            This Sidepanel was opened with a trigger element\n          </p>\n\n          <p className="text-sm text-scale-1200">\n            You can open a nested panel by clicking the button below\n          </p>\n\n          <Button type="secondary" onClick={() => setPanel2Visible(true)}>\n            Open nested sidepanel\n          </Button>\n        </div>\n        <SidePanel visible={panel2Visible} onCancel={() => setPanel2Visible(false)} onConfirm={() => setPanel2Visible(false)}>\n          <Button type="secondary" onClick={() => setPanel2Visible(false)}>\n            Close nested sidepanel\n          </Button>\n        </SidePanel>\n      </SidePanel>\n    </>;\n}',
              ...nestedSidepanels.parameters?.docs?.source,
            },
          },
        }),
        (longContent.parameters = {
          ...longContent.parameters,
          docs: {
            ...longContent.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <>\n    <SidePanel {...args}>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n      <p className="text-scale-900">This is a paragraph</p>\n    </SidePanel>\n  </>',
              ...longContent.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'withWideLayout',
        'leftAlignedFooter',
        'leftAligned',
        'hideFooter',
        'customFooter',
        'triggerElement',
        'nestedSidepanels',
        'longContent',
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
              'src/components/SidePanel/SidePanel.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#Default',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withWideLayout.displayName = 'withWideLayout'),
          (withWideLayout.__docgenInfo = {
            description: '',
            displayName: 'withWideLayout',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.stories.tsx#withWideLayout'
            ] = {
              docgenInfo: withWideLayout.__docgenInfo,
              name: 'withWideLayout',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#withWideLayout',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(leftAlignedFooter.displayName = 'leftAlignedFooter'),
          (leftAlignedFooter.__docgenInfo = {
            description: '',
            displayName: 'leftAlignedFooter',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.stories.tsx#leftAlignedFooter'
            ] = {
              docgenInfo: leftAlignedFooter.__docgenInfo,
              name: 'leftAlignedFooter',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#leftAlignedFooter',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(leftAligned.displayName = 'leftAligned'),
          (leftAligned.__docgenInfo = {
            description: '',
            displayName: 'leftAligned',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.stories.tsx#leftAligned'
            ] = {
              docgenInfo: leftAligned.__docgenInfo,
              name: 'leftAligned',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#leftAligned',
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
              'src/components/SidePanel/SidePanel.stories.tsx#hideFooter'
            ] = {
              docgenInfo: hideFooter.__docgenInfo,
              name: 'hideFooter',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#hideFooter',
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
              'src/components/SidePanel/SidePanel.stories.tsx#customFooter'
            ] = {
              docgenInfo: customFooter.__docgenInfo,
              name: 'customFooter',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#customFooter',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(triggerElement.displayName = 'triggerElement'),
          (triggerElement.__docgenInfo = {
            description: '',
            displayName: 'triggerElement',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.stories.tsx#triggerElement'
            ] = {
              docgenInfo: triggerElement.__docgenInfo,
              name: 'triggerElement',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#triggerElement',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(nestedSidepanels.displayName = 'nestedSidepanels'),
          (nestedSidepanels.__docgenInfo = {
            description: '',
            displayName: 'nestedSidepanels',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.stories.tsx#nestedSidepanels'
            ] = {
              docgenInfo: nestedSidepanels.__docgenInfo,
              name: 'nestedSidepanels',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#nestedSidepanels',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(longContent.displayName = 'longContent'),
          (longContent.__docgenInfo = {
            description: '',
            displayName: 'longContent',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SidePanel/SidePanel.stories.tsx#longContent'
            ] = {
              docgenInfo: longContent.__docgenInfo,
              name: 'longContent',
              path: 'src/components/SidePanel/SidePanel.stories.tsx#longContent',
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
