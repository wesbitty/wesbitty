'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [3268],
  {
    '../../node_modules/@radix-ui/react-popover/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          Eh: function () {
            return Arrow
          },
          VY: function () {
            return Content
          },
          fC: function () {
            return Root
          },
          x8: function () {
            return Close
          },
          xz: function () {
            return Trigger
          },
        })
        var aria_hidden__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            '../../node_modules/aria-hidden/dist/es2015/index.js'
          ),
          react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              '../../node_modules/react-remove-scroll/dist/es2015/Combination.js'
            ),
          _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            '../../node_modules/@radix-ui/react-id/dist/index.module.js'
          ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
            ),
          _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-presence/dist/index.module.js'
            ),
          _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-focus-guards/dist/index.module.js'
            ),
          _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_11__ =
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
          _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-popper/dist/index.module.js'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-context/dist/index.module.js'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__ =
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
          _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/@babel/runtime/helpers/esm/extends.js'
            )
        const [C, g] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)('Popover', [
            _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.D7,
          ]),
          x = (0, _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.D7)(),
          [h, E] = C('Popover'),
          PopoverTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (e, o) => {
              const { __scopePopover: r, ...n } = e,
                c = E('PopoverTrigger', r),
                a = x(r),
                s = (0,
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.e)(
                  o,
                  c.triggerRef
                ),
                i = react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.W
                    .button,
                  (0,
                  _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                    {
                      type: 'button',
                      'aria-haspopup': 'dialog',
                      'aria-expanded': c.open,
                      'aria-controls': c.contentId,
                      'data-state': w(c.open),
                    },
                    n,
                    {
                      ref: s,
                      onClick: (0,
                      _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                        e.onClick,
                        c.onOpenToggle
                      ),
                    }
                  )
                )
              return c.hasCustomAnchor
                ? i
                : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.ee,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                      { asChild: !0 },
                      a
                    ),
                    i
                  )
            }
          ),
          PopoverContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (e, o) => {
              const { forceMount: r, ...t } = e,
                c = E('PopoverContent', e.__scopePopover)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__.z,
                { present: r || c.open },
                c.modal
                  ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      A,
                      (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                        {},
                        t,
                        { ref: o }
                      )
                    )
                  : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      O,
                      (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                        {},
                        t,
                        { ref: o }
                      )
                    )
              )
            }
          ),
          A = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((r, t) => {
            const { allowPinchZoom: n, portalled: c = !0, ...s } = r,
              i = E('PopoverContent', r.__scopePopover),
              p = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              u = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.e)(
                t,
                p
              ),
              l = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1)
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
              const o = p.current
              if (o) return (0, aria_hidden__WEBPACK_IMPORTED_MODULE_10__.Ry)(o)
            }, [])
            const d = c
              ? _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_11__.h_
              : react__WEBPACK_IMPORTED_MODULE_0__.Fragment
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              d,
              null,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__.Z,
                { allowPinchZoom: n },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  R,
                  (0,
                  _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                    {},
                    s,
                    {
                      ref: u,
                      trapFocus: i.open,
                      disableOutsidePointerEvents: !0,
                      onCloseAutoFocus: (0,
                      _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                        r.onCloseAutoFocus,
                        (e) => {
                          var o
                          e.preventDefault(),
                            l.current ||
                              null === (o = i.triggerRef.current) ||
                              void 0 === o ||
                              o.focus()
                        }
                      ),
                      onPointerDownOutside: (0,
                      _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                        r.onPointerDownOutside,
                        (e) => {
                          const o = e.detail.originalEvent,
                            r = 0 === o.button && !0 === o.ctrlKey,
                            t = 2 === o.button || r
                          l.current = t
                        },
                        { checkForDefaultPrevented: !1 }
                      ),
                      onFocusOutside: (0,
                      _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                        r.onFocusOutside,
                        (e) => e.preventDefault(),
                        { checkForDefaultPrevented: !1 }
                      ),
                    }
                  )
                )
              )
            )
          }),
          O = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, o) => {
            const { portalled: r = !0, ...t } = e,
              n = E('PopoverContent', e.__scopePopover),
              c = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
              s = r
                ? _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_11__.h_
                : react__WEBPACK_IMPORTED_MODULE_0__.Fragment
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              s,
              null,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                R,
                (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                  {},
                  t,
                  {
                    ref: o,
                    trapFocus: !1,
                    disableOutsidePointerEvents: !1,
                    onCloseAutoFocus: (o) => {
                      var r, t
                      null === (r = e.onCloseAutoFocus) ||
                        void 0 === r ||
                        r.call(e, o),
                        o.defaultPrevented ||
                          (c.current ||
                            null === (t = n.triggerRef.current) ||
                            void 0 === t ||
                            t.focus(),
                          o.preventDefault()),
                        (c.current = !1)
                    },
                    onInteractOutside: (o) => {
                      var r, t
                      null === (r = e.onInteractOutside) ||
                        void 0 === r ||
                        r.call(e, o),
                        o.defaultPrevented || (c.current = !0)
                      const a = o.target
                      ;(null === (t = n.triggerRef.current) || void 0 === t
                        ? void 0
                        : t.contains(a)) && o.preventDefault()
                    },
                  }
                )
              )
            )
          }),
          R = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, o) => {
            const {
                __scopePopover: r,
                trapFocus: t,
                onOpenAutoFocus: n,
                onCloseAutoFocus: a,
                disableOutsidePointerEvents: u,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: m,
                onInteractOutside: f,
                ...C
              } = e,
              g = E('PopoverContent', r),
              h = x(r)
            return (
              (0,
              _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__.EW)(),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__.M,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: t,
                  onMountAutoFocus: n,
                  onUnmountAutoFocus: a,
                },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: u,
                    onInteractOutside: f,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: d,
                    onFocusOutside: m,
                    onDismiss: () => g.onOpenChange(!1),
                  },
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.VY,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                      {
                        'data-state': w(g.open),
                        role: 'dialog',
                        id: g.contentId,
                      },
                      h,
                      C,
                      {
                        ref: o,
                        style: {
                          ...C.style,
                          '--radix-popover-content-transform-origin':
                            'var(--radix-popper-transform-origin)',
                        },
                      }
                    )
                  )
                )
              )
            )
          })
        function w(e) {
          return e ? 'open' : 'closed'
        }
        const Root = (e) => {
            const {
                __scopePopover: o,
                children: t,
                open: n,
                defaultOpen: c,
                onOpenChange: a,
                modal: s = !1,
              } = e,
              i = x(o),
              u = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              [d, m] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),
              [f = !1, P] = (0,
              _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)(
                { prop: n, defaultProp: c, onChange: a }
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.fC,
              i,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                h,
                {
                  scope: o,
                  contentId: (0,
                  _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.M)(),
                  triggerRef: u,
                  open: f,
                  onOpenChange: P,
                  onOpenToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                    () => P((e) => !e),
                    [P]
                  ),
                  hasCustomAnchor: d,
                  onCustomAnchorAdd:
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                      () => m(!0),
                      []
                    ),
                  onCustomAnchorRemove:
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                      () => m(!1),
                      []
                    ),
                  modal: s,
                },
                t
              )
            )
          },
          Trigger = PopoverTrigger,
          Content = PopoverContent,
          Close = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, o) => {
            const { __scopePopover: r, ...n } = e,
              c = E('PopoverClose', r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.W.button,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                { type: 'button' },
                n,
                {
                  ref: o,
                  onClick: (0,
                  _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(
                    e.onClick,
                    () => c.onOpenChange(!1)
                  ),
                }
              )
            )
          }),
          Arrow = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, o) => {
            const { __scopePopover: r, ...t } = e,
              n = x(r)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.Eh,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)(
                {},
                n,
                t,
                { ref: o }
              )
            )
          })
      },
    '../../node_modules/@radix-ui/react-popper/dist/index.module.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        ee: function () {
          return Anchor
        },
        Eh: function () {
          return index_module_Arrow
        },
        VY: function () {
          return Content
        },
        fC: function () {
          return index_module_Root
        },
        D7: function () {
          return l
        },
      })
      var index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
        ),
        react = __webpack_require__('../../node_modules/react/index.js'),
        esm_extends = __webpack_require__(
          '../../node_modules/@babel/runtime/helpers/esm/extends.js'
        )
      const Arrow = react.forwardRef((o, i) => {
          const { children: n, width: s = 10, height: m = 5, ...p } = o
          return react.createElement(
            index_module.W.svg,
            (0, esm_extends.Z)({}, p, {
              ref: i,
              width: s,
              height: m,
              viewBox: '0 0 30 10',
              preserveAspectRatio: 'none',
            }),
            o.asChild
              ? n
              : react.createElement('polygon', { points: '0,0 30,0 15,10' })
          )
        }),
        Root = Arrow
      function useSize(r) {
        const [i, t] = react.useState(void 0)
        return (
          react.useEffect(() => {
            if (r) {
              const e = new ResizeObserver((e) => {
                if (!Array.isArray(e)) return
                if (!e.length) return
                const i = e[0]
                let o, n
                if ('borderBoxSize' in i) {
                  const e = i.borderBoxSize,
                    r = Array.isArray(e) ? e[0] : e
                  ;(o = r.inlineSize), (n = r.blockSize)
                } else {
                  const e = r.getBoundingClientRect()
                  ;(o = e.width), (n = e.height)
                }
                t({ width: o, height: n })
              })
              return e.observe(r, { box: 'border-box' }), () => e.unobserve(r)
            }
            t(void 0)
          }, [r]),
          i
        )
      }
      function observeElementRect(n, o) {
        const i = e.get(n)
        return (
          void 0 === i
            ? (e.set(n, { rect: {}, callbacks: [o] }),
              1 === e.size && (t = requestAnimationFrame(c)))
            : (i.callbacks.push(o), o(n.getBoundingClientRect())),
          () => {
            const c = e.get(n)
            if (void 0 === c) return
            const i = c.callbacks.indexOf(o)
            i > -1 && c.callbacks.splice(i, 1),
              0 === c.callbacks.length &&
                (e.delete(n), 0 === e.size && cancelAnimationFrame(t))
          }
        )
      }
      let t
      const e = new Map()
      function c() {
        const n = []
        e.forEach((t, e) => {
          const c = e.getBoundingClientRect()
          var o, i
          ;(i = c),
            ((o = t.rect).width !== i.width ||
              o.height !== i.height ||
              o.top !== i.top ||
              o.right !== i.right ||
              o.bottom !== i.bottom ||
              o.left !== i.left) &&
              ((t.rect = c), n.push(t))
        }),
          n.forEach((t) => {
            t.callbacks.forEach((e) => e(t.rect))
          }),
          (t = requestAnimationFrame(c))
      }
      var dist_index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-context/dist/index.module.js'
        ),
        react_compose_refs_dist_index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js'
        )
      function getPlacementData({
        anchorRect: p,
        popperSize: c,
        arrowSize: f,
        arrowOffset: l = 0,
        side: d,
        sideOffset: h = 0,
        align: x,
        alignOffset: g = 0,
        shouldAvoidCollisions: u = !0,
        collisionBoundariesRect: w,
        collisionTolerance: m = 0,
      }) {
        if (!p || !c || !w) return { popperStyles: o, arrowStyles: n }
        const y = (function (e, r, o = 0, n = 0, i) {
            const p = i ? i.height : 0,
              a = index_module_t(r, e, 'x'),
              s = index_module_t(r, e, 'y'),
              c = s.before - o - p,
              f = s.after + o + p,
              l = a.before - o - p,
              d = a.after + o + p
            return {
              top: {
                start: { x: a.start + n, y: c },
                center: { x: a.center, y: c },
                end: { x: a.end - n, y: c },
              },
              right: {
                start: { x: d, y: s.start + n },
                center: { x: d, y: s.center },
                end: { x: d, y: s.end - n },
              },
              bottom: {
                start: { x: a.start + n, y: f },
                center: { x: a.center, y: f },
                end: { x: a.end - n, y: f },
              },
              left: {
                start: { x: l, y: s.start + n },
                center: { x: l, y: s.center },
                end: { x: l, y: s.end - n },
              },
            }
          })(c, p, h, g, f),
          b = y[d][x]
        if (!1 === u) {
          const t = index_module_e(b)
          let o = n
          return (
            f &&
              (o = i({
                popperSize: c,
                arrowSize: f,
                arrowOffset: l,
                side: d,
                align: x,
              })),
            {
              popperStyles: {
                ...t,
                '--radix-popper-transform-origin': r(c, d, x, l, f),
              },
              arrowStyles: o,
              placedSide: d,
              placedAlign: x,
            }
          )
        }
        const S = DOMRect.fromRect({ ...c, ...b }),
          $ =
            ((O = w),
            (z = m),
            DOMRect.fromRect({
              width: O.width - 2 * z,
              height: O.height - 2 * z,
              x: O.left + z,
              y: O.top + z,
            }))
        var O, z
        const R = s(S, $),
          M = y[a(d)][x],
          D = (function (t, e, r) {
            const o = a(t)
            return e[t] && !r[o] ? o : t
          })(d, R, s(DOMRect.fromRect({ ...c, ...M }), $)),
          A = (function (t, e, r, o, n) {
            const i = 'top' === r || 'bottom' === r,
              p = i ? 'left' : 'top',
              a = i ? 'right' : 'bottom',
              s = i ? 'width' : 'height',
              c = e[s] > t[s]
            return ('start' !== o && 'center' !== o) ||
              !((n[p] && c) || (n[a] && !c))
              ? ('end' !== o && 'center' !== o) ||
                !((n[a] && c) || (n[p] && !c))
                ? o
                : 'start'
              : 'end'
          })(c, p, d, x, R),
          I = index_module_e(y[D][A])
        let C = n
        return (
          f &&
            (C = i({
              popperSize: c,
              arrowSize: f,
              arrowOffset: l,
              side: D,
              align: A,
            })),
          {
            popperStyles: {
              ...I,
              '--radix-popper-transform-origin': r(c, D, A, l, f),
            },
            arrowStyles: C,
            placedSide: D,
            placedAlign: A,
          }
        )
      }
      function index_module_t(t, e, r) {
        const o = t['x' === r ? 'left' : 'top'],
          n = 'x' === r ? 'width' : 'height',
          i = t[n],
          p = e[n]
        return {
          before: o - p,
          start: o,
          center: o + (i - p) / 2,
          end: o + i - p,
          after: o + i,
        }
      }
      function index_module_e(t) {
        return {
          position: 'absolute',
          top: 0,
          left: 0,
          minWidth: 'max-content',
          willChange: 'transform',
          transform: `translate3d(${Math.round(
            t.x + window.scrollX
          )}px, ${Math.round(t.y + window.scrollY)}px, 0)`,
        }
      }
      function r(t, e, r, o, n) {
        const i = 'top' === e || 'bottom' === e,
          p = n ? n.width : 0,
          a = n ? n.height : 0,
          s = p / 2 + o
        let c = '',
          f = ''
        return (
          i
            ? ((c = {
                start: `${s}px`,
                center: 'center',
                end: t.width - s + 'px',
              }[r]),
              (f = 'top' === e ? `${t.height + a}px` : -a + 'px'))
            : ((c = 'left' === e ? `${t.width + a}px` : -a + 'px'),
              (f = {
                start: `${s}px`,
                center: 'center',
                end: t.height - s + 'px',
              }[r])),
          `${c} ${f}`
        )
      }
      const o = {
          position: 'fixed',
          top: 0,
          left: 0,
          opacity: 0,
          transform: 'translate3d(0, -200%, 0)',
        },
        n = { position: 'absolute', opacity: 0 }
      function i({
        popperSize: t,
        arrowSize: e,
        arrowOffset: r,
        side: o,
        align: n,
      }) {
        const i = (t.width - e.width) / 2,
          a = (t.height - e.width) / 2,
          s = { top: 0, right: 90, bottom: 180, left: -90 }[o],
          c = Math.max(e.width, e.height),
          f = {
            width: `${c}px`,
            height: `${c}px`,
            transform: `rotate(${s}deg)`,
            willChange: 'transform',
            position: 'absolute',
            [o]: '100%',
            direction: p(o, n),
          }
        return (
          ('top' !== o && 'bottom' !== o) ||
            ('start' === n && (f.left = `${r}px`),
            'center' === n && (f.left = `${i}px`),
            'end' === n && (f.right = `${r}px`)),
          ('left' !== o && 'right' !== o) ||
            ('start' === n && (f.top = `${r}px`),
            'center' === n && (f.top = `${a}px`),
            'end' === n && (f.bottom = `${r}px`)),
          f
        )
      }
      function p(t, e) {
        return (('top' !== t && 'right' !== t) || 'end' !== e) &&
          (('bottom' !== t && 'left' !== t) || 'end' === e)
          ? 'ltr'
          : 'rtl'
      }
      function a(t) {
        return { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[t]
      }
      function s(t, e) {
        return {
          top: t.top < e.top,
          right: t.right > e.right,
          bottom: t.bottom > e.bottom,
          left: t.left < e.left,
        }
      }
      const [index_module_c, l] = (0, dist_index_module.b)('Popper'),
        [f, d] = index_module_c('Popper'),
        PopperAnchor = react.forwardRef((e, r) => {
          const { __scopePopper: t, virtualRef: n, ...p } = e,
            c = d('PopperAnchor', t),
            l = react.useRef(null),
            f = (0, react_compose_refs_dist_index_module.e)(r, l)
          return (
            react.useEffect(() => {
              c.onAnchorChange((null == n ? void 0 : n.current) || l.current)
            }),
            n
              ? null
              : react.createElement(
                  index_module.W.div,
                  (0, esm_extends.Z)({}, p, { ref: f })
                )
          )
        }),
        [u, m] = index_module_c('PopperContent'),
        PopperContent = react.forwardRef((e, n) => {
          const {
              __scopePopper: c,
              side: l = 'bottom',
              sideOffset: f,
              align: m = 'center',
              alignOffset: w,
              collisionTolerance: h,
              avoidCollisions: x = !0,
              ...v
            } = e,
            P = d('PopperContent', c),
            [A, g] = react.useState(),
            E = (function useRect(e) {
              const [o, c] = react.useState()
              return (
                react.useEffect(() => {
                  if (e) {
                    const r = observeElementRect(e, c)
                    return () => {
                      c(void 0), r()
                    }
                  }
                }, [e]),
                o
              )
            })(P.anchor),
            [y, C] = react.useState(null),
            S = useSize(y),
            [R, O] = react.useState(null),
            _ = useSize(R),
            b = (0, react_compose_refs_dist_index_module.e)(n, (e) => C(e)),
            z = (function () {
              const [e, o] = react.useState(void 0)
              return (
                react.useEffect(() => {
                  let e
                  function r() {
                    o({ width: window.innerWidth, height: window.innerHeight })
                  }
                  function t() {
                    window.clearTimeout(e), (e = window.setTimeout(r, 100))
                  }
                  return (
                    r(),
                    window.addEventListener('resize', t),
                    () => window.removeEventListener('resize', t)
                  )
                }, []),
                e
              )
            })(),
            T = z ? DOMRect.fromRect({ ...z, x: 0, y: 0 }) : void 0,
            {
              popperStyles: k,
              arrowStyles: L,
              placedSide: B,
              placedAlign: D,
            } = getPlacementData({
              anchorRect: E,
              popperSize: S,
              arrowSize: _,
              arrowOffset: A,
              side: l,
              sideOffset: f,
              align: m,
              alignOffset: w,
              shouldAvoidCollisions: x,
              collisionBoundariesRect: T,
              collisionTolerance: h,
            }),
            H = void 0 !== B
          return react.createElement(
            'div',
            { style: k, 'data-radix-popper-content-wrapper': '' },
            react.createElement(
              u,
              {
                scope: c,
                arrowStyles: L,
                onArrowChange: O,
                onArrowOffsetChange: g,
              },
              react.createElement(
                index_module.W.div,
                (0, esm_extends.Z)({ 'data-side': B, 'data-align': D }, v, {
                  style: { ...v.style, animation: H ? void 0 : 'none' },
                  ref: b,
                })
              )
            )
          )
        }),
        PopperArrow = react.forwardRef(function (o, r) {
          const { __scopePopper: t, offset: n, ...i } = o,
            p = m('PopperArrow', t),
            { onArrowOffsetChange: c } = p
          return (
            react.useEffect(() => c(n), [c, n]),
            react.createElement(
              'span',
              { style: { ...p.arrowStyles, pointerEvents: 'none' } },
              react.createElement(
                'span',
                {
                  ref: p.onArrowChange,
                  style: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    pointerEvents: 'auto',
                  },
                },
                react.createElement(
                  Root,
                  (0, esm_extends.Z)({}, i, {
                    ref: r,
                    style: { ...i.style, display: 'block' },
                  })
                )
              )
            )
          )
        }),
        index_module_Root = (e) => {
          const { __scopePopper: o, children: r } = e,
            [t, n] = react.useState(null)
          return react.createElement(
            f,
            { scope: o, anchor: t, onAnchorChange: n },
            r
          )
        },
        Anchor = PopperAnchor,
        Content = PopperContent,
        index_module_Arrow = PopperArrow
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
    '../../node_modules/react-feather/dist/icons/chevron-down.js': function (
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
      var ChevronDown = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
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
              points: '6 9 12 15 18 9',
            })
          )
        }
      )
      ;(ChevronDown.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (ChevronDown.displayName = 'ChevronDown'),
        (__webpack_exports__.Z = ChevronDown)
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
