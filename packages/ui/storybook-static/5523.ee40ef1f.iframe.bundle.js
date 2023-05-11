'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [5523],
  {
    '../../node_modules/@babel/runtime/helpers/esm/extends.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
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
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return _extends
        },
      })
    },
    '../../node_modules/@radix-ui/primitive/dist/index.module.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      function composeEventHandlers(
        e,
        n,
        { checkForDefaultPrevented: t = !0 } = {}
      ) {
        return function (r) {
          if ((null == e || e(r), !1 === t || !r.defaultPrevented))
            return null == n ? void 0 : n(r)
        }
      }
      __webpack_require__.d(__webpack_exports__, {
        M: function () {
          return composeEventHandlers
        },
      })
    },
    '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          F: function () {
            return composeRefs
          },
          e: function () {
            return useComposedRefs
          },
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        )
        function composeRefs(...o) {
          return (e) =>
            o.forEach((o) =>
              (function (o, e) {
                'function' == typeof o ? o(e) : null != o && (o.current = e)
              })(o, e)
            )
        }
        function useComposedRefs(...e) {
          return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
            composeRefs(...e),
            e
          )
        }
      },
    '../../node_modules/@radix-ui/react-context/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          b: function () {
            return createContextScope
          },
          k: function () {
            return createContext
          },
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        )
        function createContext(t, n) {
          const o = react__WEBPACK_IMPORTED_MODULE_0__.createContext(n)
          function r(t) {
            const { children: n, ...r } = t,
              c = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                () => r,
                Object.values(r)
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              o.Provider,
              { value: c },
              n
            )
          }
          return (
            (r.displayName = t + 'Provider'),
            [
              r,
              function (r) {
                const c = react__WEBPACK_IMPORTED_MODULE_0__.useContext(o)
                if (c) return c
                if (void 0 !== n) return n
                throw new Error(`\`${r}\` must be used within \`${t}\``)
              },
            ]
          )
        }
        function createContextScope(n, o = []) {
          let r = []
          const c = () => {
            const t = r.map((t) =>
              react__WEBPACK_IMPORTED_MODULE_0__.createContext(t)
            )
            return function (o) {
              const r = (null == o ? void 0 : o[n]) || t
              return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                () => ({ [`__scope${n}`]: { ...o, [n]: r } }),
                [o, r]
              )
            }
          }
          return (
            (c.scopeName = n),
            [
              function (t, o) {
                const c = react__WEBPACK_IMPORTED_MODULE_0__.createContext(o),
                  u = r.length
                function s(t) {
                  const { scope: o, children: r, ...s } = t,
                    i = (null == o ? void 0 : o[n][u]) || c,
                    a = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                      () => s,
                      Object.values(s)
                    )
                  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    i.Provider,
                    { value: a },
                    r
                  )
                }
                return (
                  (r = [...r, o]),
                  (s.displayName = t + 'Provider'),
                  [
                    s,
                    function (r, s) {
                      const i = (null == s ? void 0 : s[n][u]) || c,
                        a = react__WEBPACK_IMPORTED_MODULE_0__.useContext(i)
                      if (a) return a
                      if (void 0 !== o) return o
                      throw new Error(`\`${r}\` must be used within \`${t}\``)
                    },
                  ]
                )
              },
              t(c, ...o),
            ]
          )
        }
        function t(...t) {
          const n = t[0]
          if (1 === t.length) return n
          const o = () => {
            const o = t.map((e) => ({ useScope: e(), scopeName: e.scopeName }))
            return function (t) {
              const r = o.reduce(
                (e, { useScope: n, scopeName: o }) => ({
                  ...e,
                  ...n(t)[`__scope${o}`],
                }),
                {}
              )
              return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                () => ({ [`__scope${n.scopeName}`]: r }),
                [r]
              )
            }
          }
          return (o.scopeName = n.scopeName), o
        }
      },
    '../../node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          XB: function () {
            return DismissableLayer
          },
        })
        var index_module = __webpack_require__(
            '../../node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js'
          ),
          react = __webpack_require__('../../node_modules/react/index.js')
        var dist_index_module = __webpack_require__(
          '../../node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js'
        )
        let n,
          o = 0
        var react_compose_refs_dist_index_module = __webpack_require__(
            '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js'
          ),
          react_primitive_dist_index_module = __webpack_require__(
            '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
          ),
          primitive_dist_index_module = __webpack_require__(
            '../../node_modules/@radix-ui/primitive/dist/index.module.js'
          ),
          esm_extends = __webpack_require__(
            '../../node_modules/@babel/runtime/helpers/esm/extends.js'
          )
        const u = react.createContext({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          }),
          DismissableLayer = react.forwardRef((l, m) => {
            const {
                disableOutsidePointerEvents: f = !1,
                onEscapeKeyDown: p,
                onPointerDownOutside: v,
                onFocusOutside: b,
                onInteractOutside: E,
                onDismiss: y,
                ...w
              } = l,
              h = react.useContext(u),
              [D, x] = react.useState(null),
              [, C] = react.useState({}),
              L = (0, react_compose_refs_dist_index_module.e)(m, (e) => x(e)),
              P = Array.from(h.layers),
              [O] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
              g = P.indexOf(O),
              B = D ? P.indexOf(D) : -1,
              R = h.layersWithOutsidePointerEventsDisabled.size > 0,
              F = B >= g,
              S = (function (e) {
                const n = (0, index_module.W)((e) => {
                    const t = e.target,
                      n = [...h.branches].some((e) => e.contains(t))
                    F &&
                      !n &&
                      (null == v || v(e),
                      null == E || E(e),
                      e.defaultPrevented || null == y || y())
                  }),
                  r = react.useRef(!1)
                return (
                  react.useEffect(() => {
                    const e = (e) => {
                        e.target &&
                          !r.current &&
                          d('dismissableLayer.pointerDownOutside', n, {
                            originalEvent: e,
                          }),
                          (r.current = !1)
                      },
                      t = window.setTimeout(() => {
                        document.addEventListener('pointerdown', e)
                      }, 0)
                    return () => {
                      window.clearTimeout(t),
                        document.removeEventListener('pointerdown', e)
                    }
                  }, [n]),
                  { onPointerDownCapture: () => (r.current = !0) }
                )
              })(),
              W = (function (e) {
                const n = (0, index_module.W)((e) => {
                    const t = e.target
                    ;[...h.branches].some((e) => e.contains(t)) ||
                      (null == b || b(e),
                      null == E || E(e),
                      e.defaultPrevented || null == y || y())
                  }),
                  r = react.useRef(!1)
                return (
                  react.useEffect(() => {
                    const e = (e) => {
                      e.target &&
                        !r.current &&
                        d('dismissableLayer.focusOutside', n, {
                          originalEvent: e,
                        })
                    }
                    return (
                      document.addEventListener('focusin', e),
                      () => document.removeEventListener('focusin', e)
                    )
                  }, [n]),
                  {
                    onFocusCapture: () => (r.current = !0),
                    onBlurCapture: () => (r.current = !1),
                  }
                )
              })()
            return (
              (function useEscapeKeydown(n) {
                const o = (0, index_module.W)(n)
                react.useEffect(() => {
                  const e = (e) => {
                    'Escape' === e.key && o(e)
                  }
                  return (
                    document.addEventListener('keydown', e),
                    () => document.removeEventListener('keydown', e)
                  )
                }, [o])
              })((e) => {
                B === h.layers.size - 1 &&
                  (null == p || p(e), e.defaultPrevented || null == y || y())
              }),
              (function useBodyPointerEvents({ disabled: r }) {
                const i = react.useRef(!1)
                ;(0, dist_index_module.b)(() => {
                  if (r) {
                    function e() {
                      o--, 0 === o && (document.body.style.pointerEvents = n)
                    }
                    function t(e) {
                      i.current = 'mouse' !== e.pointerType
                    }
                    return (
                      0 === o && (n = document.body.style.pointerEvents),
                      (document.body.style.pointerEvents = 'none'),
                      o++,
                      document.addEventListener('pointerup', t),
                      () => {
                        i.current
                          ? document.addEventListener('click', e, { once: !0 })
                          : e(),
                          document.removeEventListener('pointerup', t)
                      }
                    )
                  }
                }, [r])
              })({ disabled: f }),
              react.useEffect(() => {
                D &&
                  (f && h.layersWithOutsidePointerEventsDisabled.add(D),
                  h.layers.add(D),
                  c())
              }, [D, f, h]),
              react.useEffect(
                () => () => {
                  D &&
                    (h.layers.delete(D),
                    h.layersWithOutsidePointerEventsDisabled.delete(D),
                    c())
                },
                [D, h]
              ),
              react.useEffect(() => {
                const e = () => C({})
                return (
                  document.addEventListener('dismissableLayer.update', e),
                  () =>
                    document.removeEventListener('dismissableLayer.update', e)
                )
              }, []),
              react.createElement(
                react_primitive_dist_index_module.W.div,
                (0, esm_extends.Z)({}, w, {
                  ref: L,
                  style: {
                    pointerEvents: R ? (F ? 'auto' : 'none') : void 0,
                    ...l.style,
                  },
                  onFocusCapture: (0, primitive_dist_index_module.M)(
                    l.onFocusCapture,
                    W.onFocusCapture
                  ),
                  onBlurCapture: (0, primitive_dist_index_module.M)(
                    l.onBlurCapture,
                    W.onBlurCapture
                  ),
                  onPointerDownCapture: (0, primitive_dist_index_module.M)(
                    l.onPointerDownCapture,
                    S.onPointerDownCapture
                  ),
                })
              )
            )
          })
        function c() {
          const e = new Event('dismissableLayer.update')
          document.dispatchEvent(e)
        }
        function d(e, t, n) {
          const r = n.originalEvent.target,
            s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
          return (
            t && r.addEventListener(e, t, { once: !0 }), !r.dispatchEvent(s)
          )
        }
      },
    '../../node_modules/@radix-ui/react-focus-guards/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          EW: function () {
            return useFocusGuards
          },
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        )
        let t = 0
        function useFocusGuards() {
          react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
            var e, n
            const r = document.querySelectorAll('[data-radix-focus-guard]')
            return (
              document.body.insertAdjacentElement(
                'afterbegin',
                null !== (e = r[0]) && void 0 !== e ? e : o()
              ),
              document.body.insertAdjacentElement(
                'beforeend',
                null !== (n = r[1]) && void 0 !== n ? n : o()
              ),
              t++,
              () => {
                1 === t &&
                  document
                    .querySelectorAll('[data-radix-focus-guard]')
                    .forEach((e) => e.remove()),
                  t--
              }
            )
          }, [])
        }
        function o() {
          const e = document.createElement('span')
          return (
            e.setAttribute('data-radix-focus-guard', ''),
            (e.tabIndex = 0),
            (e.style.cssText =
              'outline: none; opacity: 0; position: fixed; pointer-events: none'),
            e
          )
        }
      },
    '../../node_modules/@radix-ui/react-focus-scope/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          M: function () {
            return FocusScope
          },
        })
        var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          ),
          _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/@babel/runtime/helpers/esm/extends.js'
            )
        const c = { bubbles: !1, cancelable: !0 },
          FocusScope = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((i, f) => {
            const {
                loop: l = !1,
                trapped: m = !1,
                onMountAutoFocus: p,
                onUnmountAutoFocus: v,
                ...E
              } = i,
              [F, S] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
              b = (0,
              _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(
                p
              ),
              T = (0,
              _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(
                v
              ),
              y = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              L = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(
                f,
                (e) => S(e)
              ),
              h = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
                paused: !1,
                pause() {
                  this.paused = !0
                },
                resume() {
                  this.paused = !1
                },
              }).current
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
              if (m) {
                function e(e) {
                  if (h.paused || !F) return
                  const t = e.target
                  F.contains(t) ? (y.current = t) : a(y.current, { select: !0 })
                }
                function t(e) {
                  !h.paused &&
                    F &&
                    (F.contains(e.relatedTarget) ||
                      a(y.current, { select: !0 }))
                }
                return (
                  document.addEventListener('focusin', e),
                  document.addEventListener('focusout', t),
                  () => {
                    document.removeEventListener('focusin', e),
                      document.removeEventListener('focusout', t)
                  }
                )
              }
            }, [m, F, h.paused]),
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                if (F) {
                  d.add(h)
                  const t = document.activeElement
                  if (!F.contains(t)) {
                    const n = new Event('focusScope.autoFocusOnMount', c)
                    F.addEventListener('focusScope.autoFocusOnMount', b),
                      F.dispatchEvent(n),
                      n.defaultPrevented ||
                        ((function (e, { select: t = !1 } = {}) {
                          const n = document.activeElement
                          for (const o of e)
                            if (
                              (a(o, { select: t }),
                              document.activeElement !== n)
                            )
                              return
                        })(
                          r(F).filter((e) => 'A' !== e.tagName),
                          { select: !0 }
                        ),
                        document.activeElement === t && a(F))
                  }
                  return () => {
                    F.removeEventListener('focusScope.autoFocusOnMount', b),
                      setTimeout(() => {
                        const e = new Event('focusScope.autoFocusOnUnmount', c)
                        F.addEventListener('focusScope.autoFocusOnUnmount', T),
                          F.dispatchEvent(e),
                          e.defaultPrevented ||
                            a(null != t ? t : document.body, { select: !0 }),
                          F.removeEventListener(
                            'focusScope.autoFocusOnUnmount',
                            T
                          ),
                          d.remove(h)
                      }, 0)
                  }
                }
              }, [F, b, T, h])
            const N = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
              (e) => {
                if (!l && !m) return
                if (h.paused) return
                const t =
                    'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                  n = document.activeElement
                if (t && n) {
                  const t = e.currentTarget,
                    [o, u] = (function (e) {
                      const t = r(e)
                      return [s(t, e), s(t.reverse(), e)]
                    })(t)
                  o && u
                    ? e.shiftKey || n !== u
                      ? e.shiftKey &&
                        n === o &&
                        (e.preventDefault(), l && a(u, { select: !0 }))
                      : (e.preventDefault(), l && a(o, { select: !0 }))
                    : n === t && e.preventDefault()
                }
              },
              [l, m, h.paused]
            )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.W.div,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                { tabIndex: -1 },
                E,
                { ref: L, onKeyDown: N }
              )
            )
          })
        function r(e) {
          const t = [],
            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
              acceptNode: (e) => {
                const t = 'INPUT' === e.tagName && 'hidden' === e.type
                return e.disabled || e.hidden || t
                  ? NodeFilter.FILTER_SKIP
                  : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP
              },
            })
          for (; n.nextNode(); ) t.push(n.currentNode)
          return t
        }
        function s(e, t) {
          for (const n of e) if (!i(n, { upTo: t })) return n
        }
        function i(e, { upTo: t }) {
          if ('hidden' === getComputedStyle(e).visibility) return !0
          for (; e; ) {
            if (void 0 !== t && e === t) return !1
            if ('none' === getComputedStyle(e).display) return !0
            e = e.parentElement
          }
          return !1
        }
        function a(e, { select: t = !1 } = {}) {
          if (e && e.focus) {
            const n = document.activeElement
            e.focus({ preventScroll: !0 }),
              e !== n &&
                (function (e) {
                  return e instanceof HTMLInputElement && 'select' in e
                })(e) &&
                t &&
                e.select()
          }
        }
        const d = (function () {
          let e = []
          return {
            add(t) {
              const n = e[0]
              t !== n && (null == n || n.pause()), (e = f(e, t)), e.unshift(t)
            },
            remove(t) {
              var n
              ;(e = f(e, t)), null === (n = e[0]) || void 0 === n || n.resume()
            },
          }
        })()
        function f(e, t) {
          const n = [...e],
            o = n.indexOf(t)
          return -1 !== o && n.splice(o, 1), n
        }
      },
    '../../node_modules/@radix-ui/react-id/dist/index.module.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
      __webpack_require__.d(__webpack_exports__, {
        M: function () {
          return useId
        },
      })
      var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        )
      const r =
        (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
          (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
            __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[
          'useId'.toString()
        ] || (() => {})
      let n = 0
      function useId(o) {
        const [u, i] = react__WEBPACK_IMPORTED_MODULE_0__.useState(r())
        return (
          (0,
          _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
            o || i((t) => (null != t ? t : String(n++)))
          }, [o]),
          o || (u ? `radix-${u}` : '')
        )
      }
    },
    '../../node_modules/@radix-ui/react-portal/dist/index.module.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        c: function () {
          return UnstablePortal
        },
        fC: function () {
          return Root
        },
        h_: function () {
          return Portal
        },
      })
      var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-primitive/dist/index.module.js'
          ),
        _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js'
          ),
        react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react-dom/index.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/@babel/runtime/helpers/esm/extends.js'
          )
      const Portal = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((a, i) => {
          var n, d
          const { containerRef: s, style: u, ...c } = a,
            m =
              null !== (n = null == s ? void 0 : s.current) && void 0 !== n
                ? n
                : null === globalThis ||
                  void 0 === globalThis ||
                  null === (d = globalThis.document) ||
                  void 0 === d
                ? void 0
                : d.body,
            [, f] = react__WEBPACK_IMPORTED_MODULE_1__.useState({})
          return (
            (0,
            _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.b)(() => {
              f({})
            }, []),
            m
              ? react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal(
                  react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.W
                      .div,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                      { 'data-radix-portal': '' },
                      c,
                      {
                        ref: i,
                        style:
                          m === document.body
                            ? {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 2147483647,
                                ...u,
                              }
                            : void 0,
                      }
                    )
                  ),
                  m
                )
              : null
          )
        }),
        UnstablePortal = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          (t, a) => {
            var i
            const {
              container: n = null === globalThis ||
              void 0 === globalThis ||
              null === (i = globalThis.document) ||
              void 0 === i
                ? void 0
                : i.body,
              ...d
            } = t
            return n
              ? react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal(
                  react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.W
                      .div,
                    (0,
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                      {},
                      d,
                      { ref: a }
                    )
                  ),
                  n
                )
              : null
          }
        ),
        Root = Portal
    },
    '../../node_modules/@radix-ui/react-presence/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          z: function () {
            return Presence
          },
        })
        var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          )
        const Presence = (u) => {
          const { present: o, children: i } = u,
            s = (function (n) {
              const [u, o] = react__WEBPACK_IMPORTED_MODULE_0__.useState(),
                i = react__WEBPACK_IMPORTED_MODULE_0__.useRef({}),
                s = react__WEBPACK_IMPORTED_MODULE_0__.useRef(n),
                c = react__WEBPACK_IMPORTED_MODULE_0__.useRef('none'),
                a = n ? 'mounted' : 'unmounted',
                [d, m] = (function (e, n) {
                  return react__WEBPACK_IMPORTED_MODULE_0__.useReducer(
                    (e, t) => {
                      const r = n[e][t]
                      return null != r ? r : e
                    },
                    e
                  )
                })(a, {
                  mounted: {
                    UNMOUNT: 'unmounted',
                    ANIMATION_OUT: 'unmountSuspended',
                  },
                  unmountSuspended: {
                    MOUNT: 'mounted',
                    ANIMATION_END: 'unmounted',
                  },
                  unmounted: { MOUNT: 'mounted' },
                })
              return (
                react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                  const e = r(i.current)
                  c.current = 'mounted' === d ? e : 'none'
                }, [d]),
                (0,
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
                  const e = i.current,
                    t = s.current
                  if (t !== n) {
                    const u = c.current,
                      o = r(e)
                    if (n) m('MOUNT')
                    else if (
                      'none' === o ||
                      'none' === (null == e ? void 0 : e.display)
                    )
                      m('UNMOUNT')
                    else {
                      m(t && u !== o ? 'ANIMATION_OUT' : 'UNMOUNT')
                    }
                    s.current = n
                  }
                }, [n, m]),
                (0,
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
                  if (u) {
                    const e = (e) => {
                        const n = r(i.current).includes(e.animationName)
                        e.target === u && n && m('ANIMATION_END')
                      },
                      n = (e) => {
                        e.target === u && (c.current = r(i.current))
                      }
                    return (
                      u.addEventListener('animationstart', n),
                      u.addEventListener('animationcancel', e),
                      u.addEventListener('animationend', e),
                      () => {
                        u.removeEventListener('animationstart', n),
                          u.removeEventListener('animationcancel', e),
                          u.removeEventListener('animationend', e)
                      }
                    )
                  }
                  m('ANIMATION_END')
                }, [u, m]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(d),
                  ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e) => {
                    e && (i.current = getComputedStyle(e)), o(e)
                  }, []),
                }
              )
            })(o),
            c =
              'function' == typeof i
                ? i({ present: s.isPresent })
                : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(i),
            a = (0,
            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(
              s.ref,
              c.ref
            )
          return 'function' == typeof i || s.isPresent
            ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(c, { ref: a })
            : null
        }
        function r(e) {
          return (null == e ? void 0 : e.animationName) || 'none'
        }
        Presence.displayName = 'Presence'
      },
    '../../node_modules/@radix-ui/react-primitive/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          W: function () {
            return Primitive
          },
        })
        var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-slot/dist/index.module.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          ),
          _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/@babel/runtime/helpers/esm/extends.js'
            )
        const Primitive = [
          'a',
          'button',
          'div',
          'h2',
          'h3',
          'img',
          'li',
          'nav',
          'ol',
          'p',
          'span',
          'svg',
          'ul',
        ].reduce(
          (o, i) => ({
            ...o,
            [i]: react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((o, m) => {
              const { asChild: a, ...s } = o,
                n = a ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_1__.g7 : i
              return (
                react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                  window[Symbol.for('radix-ui')] = !0
                }, []),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  n,
                  (0,
                  _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)(
                    {},
                    s,
                    { ref: m }
                  )
                )
              )
            }),
          }),
          {}
        )
      },
    '../../node_modules/@radix-ui/react-slot/dist/index.module.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        g7: function () {
          return Slot
        },
      })
      var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        ),
        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            '../../node_modules/@babel/runtime/helpers/esm/extends.js'
          )
      const Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, o) => {
        const { children: a, ...s } = e
        return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(a).some(l)
          ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0__.Children.map(a, (e) =>
                l(e)
                  ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      n,
                      (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        {},
                        s,
                        { ref: o }
                      ),
                      e.props.children
                    )
                  : e
              )
            )
          : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              n,
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)(
                {},
                s,
                { ref: o }
              ),
              a
            )
      })
      Slot.displayName = 'Slot'
      const n = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((r, n) => {
        const { children: l, ...a } = r
        return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(l)
          ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(l, {
              ...o(a, l.props),
              ref: (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.F)(
                n,
                l.ref
              ),
            })
          : react__WEBPACK_IMPORTED_MODULE_0__.Children.count(l) > 1
          ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
          : null
      })
      n.displayName = 'SlotClone'
      const Slottable = ({ children: e }) =>
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          null,
          e
        )
      function l(e) {
        return (
          react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(e) &&
          e.type === Slottable
        )
      }
      function o(e, t) {
        const r = { ...t }
        for (const n in t) {
          const l = e[n],
            o = t[n]
          ;/^on[A-Z]/.test(n)
            ? (r[n] = (...e) => {
                null == o || o(...e), null == l || l(...e)
              })
            : 'style' === n
            ? (r[n] = { ...l, ...o })
            : 'className' === n && (r[n] = [l, o].filter(Boolean).join(' '))
        }
        return { ...e, ...r }
      }
    },
    '../../node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          W: function () {
            return useCallbackRef
          },
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        )
        function useCallbackRef(r) {
          const t = react__WEBPACK_IMPORTED_MODULE_0__.useRef(r)
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
              t.current = r
            }),
            react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
              () =>
                (...e) => {
                  var r
                  return null === (r = t.current) || void 0 === r
                    ? void 0
                    : r.call(t, ...e)
                },
              []
            )
          )
        }
      },
    '../../node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          T: function () {
            return useControllableState
          },
        })
        var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          )
        function useControllableState({
          prop: o,
          defaultProp: r,
          onChange: n = () => {},
        }) {
          const [a, u] = (function ({ defaultProp: o, onChange: r }) {
              const n = react__WEBPACK_IMPORTED_MODULE_0__.useState(o),
                [a] = n,
                u = react__WEBPACK_IMPORTED_MODULE_0__.useRef(a),
                c = (0,
                _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(
                  r
                )
              return (
                react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                  u.current !== a && (c(a), (u.current = a))
                }, [a, u, c]),
                n
              )
            })({ defaultProp: r, onChange: n }),
            c = void 0 !== o,
            f = c ? o : a,
            l = (0,
            _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(n)
          return [
            f,
            react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
              (e) => {
                if (c) {
                  const r = 'function' == typeof e ? e(o) : e
                  r !== o && l(r)
                } else u(e)
              },
              [c, o, u, l]
            ),
          ]
        }
      },
    '../../node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          b: function () {
            return useLayoutEffect
          },
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/index.js'
        )
        const useLayoutEffect = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
          : () => {}
      },
    '../../node_modules/aria-hidden/dist/es2015/index.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Ry: function () {
          return hideOthers
        },
      })
      var getDefaultParent = function (originalTarget) {
          return 'undefined' == typeof document
            ? null
            : (Array.isArray(originalTarget)
                ? originalTarget[0]
                : originalTarget
              ).ownerDocument.body
        },
        counterMap = new WeakMap(),
        uncontrolledNodes = new WeakMap(),
        markerMap = {},
        lockCount = 0,
        unwrapHost = function (node) {
          return node && (node.host || unwrapHost(node.parentNode))
        },
        applyAttributeToOthers = function (
          originalTarget,
          parentNode,
          markerName,
          controlAttribute
        ) {
          var targets = (function (parent, targets) {
            return targets
              .map(function (target) {
                if (parent.contains(target)) return target
                var correctedTarget = unwrapHost(target)
                return correctedTarget && parent.contains(correctedTarget)
                  ? correctedTarget
                  : (console.error(
                      'aria-hidden',
                      target,
                      'in not contained inside',
                      parent,
                      '. Doing nothing'
                    ),
                    null)
              })
              .filter(function (x) {
                return Boolean(x)
              })
          })(
            parentNode,
            Array.isArray(originalTarget) ? originalTarget : [originalTarget]
          )
          markerMap[markerName] || (markerMap[markerName] = new WeakMap())
          var markerCounter = markerMap[markerName],
            hiddenNodes = [],
            elementsToKeep = new Set(),
            elementsToStop = new Set(targets),
            keep = function (el) {
              el &&
                !elementsToKeep.has(el) &&
                (elementsToKeep.add(el), keep(el.parentNode))
            }
          targets.forEach(keep)
          var deep = function (parent) {
            parent &&
              !elementsToStop.has(parent) &&
              Array.prototype.forEach.call(parent.children, function (node) {
                if (elementsToKeep.has(node)) deep(node)
                else {
                  var attr = node.getAttribute(controlAttribute),
                    alreadyHidden = null !== attr && 'false' !== attr,
                    counterValue = (counterMap.get(node) || 0) + 1,
                    markerValue = (markerCounter.get(node) || 0) + 1
                  counterMap.set(node, counterValue),
                    markerCounter.set(node, markerValue),
                    hiddenNodes.push(node),
                    1 === counterValue &&
                      alreadyHidden &&
                      uncontrolledNodes.set(node, !0),
                    1 === markerValue && node.setAttribute(markerName, 'true'),
                    alreadyHidden || node.setAttribute(controlAttribute, 'true')
                }
              })
          }
          return (
            deep(parentNode),
            elementsToKeep.clear(),
            lockCount++,
            function () {
              hiddenNodes.forEach(function (node) {
                var counterValue = counterMap.get(node) - 1,
                  markerValue = markerCounter.get(node) - 1
                counterMap.set(node, counterValue),
                  markerCounter.set(node, markerValue),
                  counterValue ||
                    (uncontrolledNodes.has(node) ||
                      node.removeAttribute(controlAttribute),
                    uncontrolledNodes.delete(node)),
                  markerValue || node.removeAttribute(markerName)
              }),
                --lockCount ||
                  ((counterMap = new WeakMap()),
                  (counterMap = new WeakMap()),
                  (uncontrolledNodes = new WeakMap()),
                  (markerMap = {}))
            }
          )
        },
        hideOthers = function (originalTarget, parentNode, markerName) {
          void 0 === markerName && (markerName = 'data-aria-hidden')
          var targets = Array.from(
              Array.isArray(originalTarget) ? originalTarget : [originalTarget]
            ),
            activeParentNode = parentNode || getDefaultParent(originalTarget)
          return activeParentNode
            ? (targets.push.apply(
                targets,
                Array.from(activeParentNode.querySelectorAll('[aria-live]'))
              ),
              applyAttributeToOthers(
                targets,
                activeParentNode,
                markerName,
                'aria-hidden'
              ))
            : function () {
                return null
              }
        }
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
    '../../node_modules/react-remove-scroll/dist/es2015/Combination.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          Z: function () {
            return Combination
          },
        })
        var __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p])
                return t
              }),
            __assign.apply(this, arguments)
          )
        }
        function __rest(s, e) {
          var t = {}
          for (var p in s)
            Object.prototype.hasOwnProperty.call(s, p) &&
              e.indexOf(p) < 0 &&
              (t[p] = s[p])
          if (null != s && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0
            for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
              e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
                (t[p[i]] = s[p[i]])
          }
          return t
        }
        Object.create
        Object.create
        var react = __webpack_require__('../../node_modules/react/index.js')
        function useMergeRefs(refs, defaultValue) {
          return (function useCallbackRef(initialValue, callback) {
            var ref = (0, react.useState)(function () {
              return {
                value: initialValue,
                callback: callback,
                facade: {
                  get current() {
                    return ref.value
                  },
                  set current(value) {
                    var last = ref.value
                    last !== value &&
                      ((ref.value = value), ref.callback(value, last))
                  },
                },
              }
            })[0]
            return (ref.callback = callback), ref.facade
          })(defaultValue || null, function (newValue) {
            return refs.forEach(function (ref) {
              return (function assignRef(ref, value) {
                return (
                  'function' == typeof ref
                    ? ref(value)
                    : ref && (ref.current = value),
                  ref
                )
              })(ref, newValue)
            })
          })
        }
        function ItoI(a) {
          return a
        }
        function innerCreateMedium(defaults, middleware) {
          void 0 === middleware && (middleware = ItoI)
          var buffer = [],
            assigned = !1
          return {
            read: function () {
              if (assigned)
                throw new Error(
                  'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                )
              return buffer.length ? buffer[buffer.length - 1] : defaults
            },
            useMedium: function (data) {
              var item = middleware(data, assigned)
              return (
                buffer.push(item),
                function () {
                  buffer = buffer.filter(function (x) {
                    return x !== item
                  })
                }
              )
            },
            assignSyncMedium: function (cb) {
              for (assigned = !0; buffer.length; ) {
                var cbs = buffer
                ;(buffer = []), cbs.forEach(cb)
              }
              buffer = {
                push: function (x) {
                  return cb(x)
                },
                filter: function () {
                  return buffer
                },
              }
            },
            assignMedium: function (cb) {
              assigned = !0
              var pendingQueue = []
              if (buffer.length) {
                var cbs = buffer
                ;(buffer = []), cbs.forEach(cb), (pendingQueue = buffer)
              }
              var executeQueue = function () {
                  var cbs = pendingQueue
                  ;(pendingQueue = []), cbs.forEach(cb)
                },
                cycle = function () {
                  return Promise.resolve().then(executeQueue)
                }
              cycle(),
                (buffer = {
                  push: function (x) {
                    pendingQueue.push(x), cycle()
                  },
                  filter: function (filter) {
                    return (pendingQueue = pendingQueue.filter(filter)), buffer
                  },
                })
            },
          }
        }
        var effectCar = (function createSidecarMedium(options) {
            void 0 === options && (options = {})
            var medium = innerCreateMedium(null)
            return (
              (medium.options = __assign({ async: !0, ssr: !1 }, options)),
              medium
            )
          })(),
          nothing = function () {},
          RemoveScroll = react.forwardRef(function (props, parentRef) {
            var ref = react.useRef(null),
              _a = react.useState({
                onScrollCapture: nothing,
                onWheelCapture: nothing,
                onTouchMoveCapture: nothing,
              }),
              callbacks = _a[0],
              setCallbacks = _a[1],
              forwardProps = props.forwardProps,
              children = props.children,
              className = props.className,
              removeScrollBar = props.removeScrollBar,
              enabled = props.enabled,
              shards = props.shards,
              sideCar = props.sideCar,
              noIsolation = props.noIsolation,
              inert = props.inert,
              allowPinchZoom = props.allowPinchZoom,
              _b = props.as,
              Container = void 0 === _b ? 'div' : _b,
              gapMode = props.gapMode,
              rest = __rest(props, [
                'forwardProps',
                'children',
                'className',
                'removeScrollBar',
                'enabled',
                'shards',
                'sideCar',
                'noIsolation',
                'inert',
                'allowPinchZoom',
                'as',
                'gapMode',
              ]),
              SideCar = sideCar,
              containerRef = useMergeRefs([ref, parentRef]),
              containerProps = __assign(__assign({}, rest), callbacks)
            return react.createElement(
              react.Fragment,
              null,
              enabled &&
                react.createElement(SideCar, {
                  sideCar: effectCar,
                  removeScrollBar: removeScrollBar,
                  shards: shards,
                  noIsolation: noIsolation,
                  inert: inert,
                  setCallbacks: setCallbacks,
                  allowPinchZoom: !!allowPinchZoom,
                  lockRef: ref,
                  gapMode: gapMode,
                }),
              forwardProps
                ? react.cloneElement(
                    react.Children.only(children),
                    __assign(__assign({}, containerProps), {
                      ref: containerRef,
                    })
                  )
                : react.createElement(
                    Container,
                    __assign({}, containerProps, {
                      className: className,
                      ref: containerRef,
                    }),
                    children
                  )
            )
          })
        ;(RemoveScroll.defaultProps = {
          enabled: !0,
          removeScrollBar: !0,
          inert: !1,
        }),
          (RemoveScroll.classNames = {
            fullWidth: 'width-before-scroll-bar',
            zeroRight: 'right-scroll-bar-position',
          })
        var currentNonce,
          SideCar = function (_a) {
            var sideCar = _a.sideCar,
              rest = __rest(_a, ['sideCar'])
            if (!sideCar)
              throw new Error(
                'Sidecar: please provide `sideCar` property to import the right car'
              )
            var Target = sideCar.read()
            if (!Target) throw new Error('Sidecar medium not found')
            return react.createElement(Target, __assign({}, rest))
          }
        SideCar.isSideCarExport = !0
        function makeStyleTag() {
          if (!document) return null
          var tag = document.createElement('style')
          tag.type = 'text/css'
          var nonce = currentNonce || __webpack_require__.nc
          return nonce && tag.setAttribute('nonce', nonce), tag
        }
        var stylesheetSingleton = function () {
            var counter = 0,
              stylesheet = null
            return {
              add: function (style) {
                0 == counter &&
                  (stylesheet = makeStyleTag()) &&
                  (!(function injectStyles(tag, css) {
                    tag.styleSheet
                      ? (tag.styleSheet.cssText = css)
                      : tag.appendChild(document.createTextNode(css))
                  })(stylesheet, style),
                  (function insertStyleTag(tag) {
                    ;(
                      document.head || document.getElementsByTagName('head')[0]
                    ).appendChild(tag)
                  })(stylesheet)),
                  counter++
              },
              remove: function () {
                !--counter &&
                  stylesheet &&
                  (stylesheet.parentNode &&
                    stylesheet.parentNode.removeChild(stylesheet),
                  (stylesheet = null))
              },
            }
          },
          styleSingleton = function () {
            var sheet,
              useStyle =
                ((sheet = stylesheetSingleton()),
                function (styles, isDynamic) {
                  react.useEffect(
                    function () {
                      return (
                        sheet.add(styles),
                        function () {
                          sheet.remove()
                        }
                      )
                    },
                    [styles && isDynamic]
                  )
                })
            return function (_a) {
              var styles = _a.styles,
                dynamic = _a.dynamic
              return useStyle(styles, dynamic), null
            }
          },
          zeroGap = { left: 0, top: 0, right: 0, gap: 0 },
          parse = function (x) {
            return parseInt(x || '', 10) || 0
          },
          getGapWidth = function (gapMode) {
            if (
              (void 0 === gapMode && (gapMode = 'margin'),
              'undefined' == typeof window)
            )
              return zeroGap
            var offsets = (function (gapMode) {
                var cs = window.getComputedStyle(document.body),
                  left =
                    cs['padding' === gapMode ? 'paddingLeft' : 'marginLeft'],
                  top = cs['padding' === gapMode ? 'paddingTop' : 'marginTop'],
                  right =
                    cs['padding' === gapMode ? 'paddingRight' : 'marginRight']
                return [parse(left), parse(top), parse(right)]
              })(gapMode),
              documentWidth = document.documentElement.clientWidth,
              windowWidth = window.innerWidth
            return {
              left: offsets[0],
              top: offsets[1],
              right: offsets[2],
              gap: Math.max(
                0,
                windowWidth - documentWidth + offsets[2] - offsets[0]
              ),
            }
          },
          Style = styleSingleton(),
          getStyles = function (_a, allowRelative, gapMode, important) {
            var left = _a.left,
              top = _a.top,
              right = _a.right,
              gap = _a.gap
            return (
              void 0 === gapMode && (gapMode = 'margin'),
              '\n  .'
                .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
                .concat(important, ';\n   padding-right: ')
                .concat(gap, 'px ')
                .concat(important, ';\n  }\n  body {\n    overflow: hidden ')
                .concat(important, ';\n    overscroll-behavior: contain;\n    ')
                .concat(
                  [
                    allowRelative &&
                      'position: relative '.concat(important, ';'),
                    'margin' === gapMode &&
                      '\n    padding-left: '
                        .concat(left, 'px;\n    padding-top: ')
                        .concat(top, 'px;\n    padding-right: ')
                        .concat(
                          right,
                          'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                        )
                        .concat(gap, 'px ')
                        .concat(important, ';\n    '),
                    'padding' === gapMode &&
                      'padding-right: '
                        .concat(gap, 'px ')
                        .concat(important, ';'),
                  ]
                    .filter(Boolean)
                    .join(''),
                  '\n  }\n  \n  .'
                )
                .concat('right-scroll-bar-position', ' {\n    right: ')
                .concat(gap, 'px ')
                .concat(important, ';\n  }\n  \n  .')
                .concat('width-before-scroll-bar', ' {\n    margin-right: ')
                .concat(gap, 'px ')
                .concat(important, ';\n  }\n  \n  .')
                .concat('right-scroll-bar-position', ' .')
                .concat('right-scroll-bar-position', ' {\n    right: 0 ')
                .concat(important, ';\n  }\n  \n  .')
                .concat('width-before-scroll-bar', ' .')
                .concat('width-before-scroll-bar', ' {\n    margin-right: 0 ')
                .concat(important, ';\n  }\n  \n  body {\n    ')
                .concat('--removed-body-scroll-bar-size', ': ')
                .concat(gap, 'px;\n  }\n')
            )
          },
          RemoveScrollBar = function (props) {
            var noRelative = props.noRelative,
              noImportant = props.noImportant,
              _a = props.gapMode,
              gapMode = void 0 === _a ? 'margin' : _a,
              gap = react.useMemo(
                function () {
                  return getGapWidth(gapMode)
                },
                [gapMode]
              )
            return react.createElement(Style, {
              styles: getStyles(
                gap,
                !noRelative,
                gapMode,
                noImportant ? '' : '!important'
              ),
            })
          },
          passiveSupported = !1
        if ('undefined' != typeof window)
          try {
            var options = Object.defineProperty({}, 'passive', {
              get: function () {
                return (passiveSupported = !0), !0
              },
            })
            window.addEventListener('test', options, options),
              window.removeEventListener('test', options, options)
          } catch (err) {
            passiveSupported = !1
          }
        var nonPassive = !!passiveSupported && { passive: !1 },
          elementCanBeScrolled = function (node, overflow) {
            var styles = window.getComputedStyle(node)
            return (
              'hidden' !== styles[overflow] &&
              !(
                styles.overflowY === styles.overflowX &&
                !(function (node) {
                  return 'TEXTAREA' === node.tagName
                })(node) &&
                'visible' === styles[overflow]
              )
            )
          },
          locationCouldBeScrolled = function (axis, node) {
            var ownerDocument = node.ownerDocument,
              current = node
            do {
              if (
                ('undefined' != typeof ShadowRoot &&
                  current instanceof ShadowRoot &&
                  (current = current.host),
                elementCouldBeScrolled(axis, current))
              ) {
                var _a = getScrollVariables(axis, current)
                if (_a[1] > _a[2]) return !0
              }
              current = current.parentNode
            } while (current && current !== ownerDocument.body)
            return !1
          },
          elementCouldBeScrolled = function (axis, node) {
            return 'v' === axis
              ? (function (node) {
                  return elementCanBeScrolled(node, 'overflowY')
                })(node)
              : (function (node) {
                  return elementCanBeScrolled(node, 'overflowX')
                })(node)
          },
          getScrollVariables = function (axis, node) {
            return 'v' === axis
              ? [(_a = node).scrollTop, _a.scrollHeight, _a.clientHeight]
              : (function (_a) {
                  return [_a.scrollLeft, _a.scrollWidth, _a.clientWidth]
                })(node)
            var _a
          },
          getTouchXY = function (event) {
            return 'changedTouches' in event
              ? [
                  event.changedTouches[0].clientX,
                  event.changedTouches[0].clientY,
                ]
              : [0, 0]
          },
          getDeltaXY = function (event) {
            return [event.deltaX, event.deltaY]
          },
          extractRef = function (ref) {
            return ref && 'current' in ref ? ref.current : ref
          },
          generateStyle = function (id) {
            return '\n  .block-interactivity-'
              .concat(id, ' {pointer-events: none;}\n  .allow-interactivity-')
              .concat(id, ' {pointer-events: all;}\n')
          },
          idCounter = 0,
          lockStack = []
        var sidecar = (function exportSidecar(medium, exported) {
            return medium.useMedium(exported), SideCar
          })(effectCar, function RemoveScrollSideCar(props) {
            var shouldPreventQueue = react.useRef([]),
              touchStartRef = react.useRef([0, 0]),
              activeAxis = react.useRef(),
              id = react.useState(idCounter++)[0],
              Style = react.useState(styleSingleton)[0],
              lastProps = react.useRef(props)
            react.useEffect(
              function () {
                lastProps.current = props
              },
              [props]
            ),
              react.useEffect(
                function () {
                  if (props.inert) {
                    document.body.classList.add(
                      'block-interactivity-'.concat(id)
                    )
                    var allow_1 = (function __spreadArray(to, from, pack) {
                      if (pack || 2 === arguments.length)
                        for (var ar, i = 0, l = from.length; i < l; i++)
                          (!ar && i in from) ||
                            (ar ||
                              (ar = Array.prototype.slice.call(from, 0, i)),
                            (ar[i] = from[i]))
                      return to.concat(ar || Array.prototype.slice.call(from))
                    })(
                      [props.lockRef.current],
                      (props.shards || []).map(extractRef),
                      !0
                    ).filter(Boolean)
                    return (
                      allow_1.forEach(function (el) {
                        return el.classList.add(
                          'allow-interactivity-'.concat(id)
                        )
                      }),
                      function () {
                        document.body.classList.remove(
                          'block-interactivity-'.concat(id)
                        ),
                          allow_1.forEach(function (el) {
                            return el.classList.remove(
                              'allow-interactivity-'.concat(id)
                            )
                          })
                      }
                    )
                  }
                },
                [props.inert, props.lockRef.current, props.shards]
              )
            var shouldCancelEvent = react.useCallback(function (event, parent) {
                if ('touches' in event && 2 === event.touches.length)
                  return !lastProps.current.allowPinchZoom
                var currentAxis,
                  touch = getTouchXY(event),
                  touchStart = touchStartRef.current,
                  deltaX =
                    'deltaX' in event ? event.deltaX : touchStart[0] - touch[0],
                  deltaY =
                    'deltaY' in event ? event.deltaY : touchStart[1] - touch[1],
                  target = event.target,
                  moveDirection =
                    Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v'
                if (
                  'touches' in event &&
                  'h' === moveDirection &&
                  'range' === target.type
                )
                  return !1
                var canBeScrolledInMainDirection = locationCouldBeScrolled(
                  moveDirection,
                  target
                )
                if (!canBeScrolledInMainDirection) return !0
                if (
                  (canBeScrolledInMainDirection
                    ? (currentAxis = moveDirection)
                    : ((currentAxis = 'v' === moveDirection ? 'h' : 'v'),
                      (canBeScrolledInMainDirection = locationCouldBeScrolled(
                        moveDirection,
                        target
                      ))),
                  !canBeScrolledInMainDirection)
                )
                  return !1
                if (
                  (!activeAxis.current &&
                    'changedTouches' in event &&
                    (deltaX || deltaY) &&
                    (activeAxis.current = currentAxis),
                  !currentAxis)
                )
                  return !0
                var cancelingAxis = activeAxis.current || currentAxis
                return (function (
                  axis,
                  endTarget,
                  event,
                  sourceDelta,
                  noOverscroll
                ) {
                  var directionFactor = (function (axis, direction) {
                      return 'h' === axis && 'rtl' === direction ? -1 : 1
                    })(axis, window.getComputedStyle(endTarget).direction),
                    delta = directionFactor * sourceDelta,
                    target = event.target,
                    targetInLock = endTarget.contains(target),
                    shouldCancelScroll = !1,
                    isDeltaPositive = delta > 0,
                    availableScroll = 0,
                    availableScrollTop = 0
                  do {
                    var _a = getScrollVariables(axis, target),
                      position = _a[0],
                      elementScroll = _a[1] - _a[2] - directionFactor * position
                    ;(position || elementScroll) &&
                      elementCouldBeScrolled(axis, target) &&
                      ((availableScroll += elementScroll),
                      (availableScrollTop += position)),
                      (target = target.parentNode)
                  } while ((!targetInLock && target !== document.body) || (targetInLock && (endTarget.contains(target) || endTarget === target)))
                  return (
                    ((isDeltaPositive &&
                      ((noOverscroll && 0 === availableScroll) ||
                        (!noOverscroll && delta > availableScroll))) ||
                      (!isDeltaPositive &&
                        ((noOverscroll && 0 === availableScrollTop) ||
                          (!noOverscroll && -delta > availableScrollTop)))) &&
                      (shouldCancelScroll = !0),
                    shouldCancelScroll
                  )
                })(
                  cancelingAxis,
                  parent,
                  event,
                  'h' === cancelingAxis ? deltaX : deltaY,
                  !0
                )
              }, []),
              shouldPrevent = react.useCallback(function (_event) {
                var event = _event
                if (
                  lockStack.length &&
                  lockStack[lockStack.length - 1] === Style
                ) {
                  var delta =
                      'deltaY' in event ? getDeltaXY(event) : getTouchXY(event),
                    sourceEvent = shouldPreventQueue.current.filter(function (
                      e
                    ) {
                      return (
                        e.name === event.type &&
                        e.target === event.target &&
                        ((x = e.delta),
                        (y = delta),
                        x[0] === y[0] && x[1] === y[1])
                      )
                      var x, y
                    })[0]
                  if (sourceEvent && sourceEvent.should)
                    event.cancelable && event.preventDefault()
                  else if (!sourceEvent) {
                    var shardNodes = (lastProps.current.shards || [])
                      .map(extractRef)
                      .filter(Boolean)
                      .filter(function (node) {
                        return node.contains(event.target)
                      })
                    ;(shardNodes.length > 0
                      ? shouldCancelEvent(event, shardNodes[0])
                      : !lastProps.current.noIsolation) &&
                      event.cancelable &&
                      event.preventDefault()
                  }
                }
              }, []),
              shouldCancel = react.useCallback(function (
                name,
                delta,
                target,
                should
              ) {
                var event = {
                  name: name,
                  delta: delta,
                  target: target,
                  should: should,
                }
                shouldPreventQueue.current.push(event),
                  setTimeout(function () {
                    shouldPreventQueue.current =
                      shouldPreventQueue.current.filter(function (e) {
                        return e !== event
                      })
                  }, 1)
              },
              []),
              scrollTouchStart = react.useCallback(function (event) {
                ;(touchStartRef.current = getTouchXY(event)),
                  (activeAxis.current = void 0)
              }, []),
              scrollWheel = react.useCallback(function (event) {
                shouldCancel(
                  event.type,
                  getDeltaXY(event),
                  event.target,
                  shouldCancelEvent(event, props.lockRef.current)
                )
              }, []),
              scrollTouchMove = react.useCallback(function (event) {
                shouldCancel(
                  event.type,
                  getTouchXY(event),
                  event.target,
                  shouldCancelEvent(event, props.lockRef.current)
                )
              }, [])
            react.useEffect(function () {
              return (
                lockStack.push(Style),
                props.setCallbacks({
                  onScrollCapture: scrollWheel,
                  onWheelCapture: scrollWheel,
                  onTouchMoveCapture: scrollTouchMove,
                }),
                document.addEventListener('wheel', shouldPrevent, nonPassive),
                document.addEventListener(
                  'touchmove',
                  shouldPrevent,
                  nonPassive
                ),
                document.addEventListener(
                  'touchstart',
                  scrollTouchStart,
                  nonPassive
                ),
                function () {
                  ;(lockStack = lockStack.filter(function (inst) {
                    return inst !== Style
                  })),
                    document.removeEventListener(
                      'wheel',
                      shouldPrevent,
                      nonPassive
                    ),
                    document.removeEventListener(
                      'touchmove',
                      shouldPrevent,
                      nonPassive
                    ),
                    document.removeEventListener(
                      'touchstart',
                      scrollTouchStart,
                      nonPassive
                    )
                }
              )
            }, [])
            var removeScrollBar = props.removeScrollBar,
              inert = props.inert
            return react.createElement(
              react.Fragment,
              null,
              inert
                ? react.createElement(Style, { styles: generateStyle(id) })
                : null,
              removeScrollBar
                ? react.createElement(RemoveScrollBar, {
                    gapMode: props.gapMode,
                  })
                : null
            )
          }),
          ReactRemoveScroll = react.forwardRef(function (props, ref) {
            return react.createElement(
              RemoveScroll,
              __assign({}, props, { ref: ref, sideCar: sidecar })
            )
          })
        ReactRemoveScroll.classNames = RemoveScroll.classNames
        var Combination = ReactRemoveScroll
      },
  },
])
