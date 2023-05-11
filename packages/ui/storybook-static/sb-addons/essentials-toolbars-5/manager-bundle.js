try {
  var l = __REACT__,
    {
      Children: ne,
      Component: ie,
      Fragment: se,
      Profiler: ce,
      PureComponent: ue,
      StrictMode: pe,
      Suspense: me,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: de,
      cloneElement: be,
      createContext: Se,
      createElement: Te,
      createFactory: ye,
      createRef: fe,
      forwardRef: Oe,
      isValidElement: _e,
      lazy: ve,
      memo: Ce,
      useCallback: v,
      useContext: Ie,
      useDebugValue: ge,
      useEffect: E,
      useImperativeHandle: Ee,
      useLayoutEffect: he,
      useMemo: xe,
      useReducer: ke,
      useRef: R,
      useState: B,
      version: Ae,
    } = __REACT__
  var Ne = __STORYBOOKAPI__,
    {
      ActiveTabs: we,
      Consumer: Me,
      ManagerContext: Ge,
      Provider: He,
      addons: h,
      combineParameters: Ve,
      controlOrMetaKey: De,
      controlOrMetaSymbol: Fe,
      eventMatchesShortcut: Ke,
      eventToShortcut: We,
      isMacLike: Ye,
      isShortcutTaken: $e,
      keyToSymbol: Ue,
      merge: ze,
      mockChannel: je,
      optionOrAltSymbol: qe,
      shortcutMatchesShortcut: Ze,
      shortcutToHumanString: Je,
      types: P,
      useAddonState: Qe,
      useArgTypes: Xe,
      useArgs: et,
      useChannel: tt,
      useGlobalTypes: N,
      useGlobals: x,
      useParameter: ot,
      useSharedState: rt,
      useStoryPrepared: at,
      useStorybookApi: w,
      useStorybookState: lt,
    } = __STORYBOOKAPI__
  var ut = __STORYBOOKCOMPONENTS__,
    {
      A: pt,
      ActionBar: mt,
      AddonPanel: dt,
      Badge: bt,
      Bar: St,
      Blockquote: Tt,
      Button: yt,
      Code: ft,
      DL: Ot,
      Div: _t,
      DocumentWrapper: vt,
      ErrorFormatter: Ct,
      FlexBar: It,
      Form: gt,
      H1: Et,
      H2: ht,
      H3: xt,
      H4: kt,
      H5: At,
      H6: Lt,
      HR: Rt,
      IconButton: M,
      IconButtonSkeleton: Bt,
      Icons: k,
      Img: Pt,
      LI: Nt,
      Link: wt,
      ListItem: Mt,
      Loader: Gt,
      OL: Ht,
      P: Vt,
      Placeholder: Dt,
      Pre: Ft,
      ResetWrapper: Kt,
      ScrollArea: Wt,
      Separator: G,
      Spaced: Yt,
      Span: $t,
      StorybookIcon: Ut,
      StorybookLogo: zt,
      Symbols: jt,
      SyntaxHighlighter: qt,
      TT: Zt,
      TabBar: Jt,
      TabButton: Qt,
      TabWrapper: Xt,
      Table: eo,
      Tabs: to,
      TabsState: oo,
      TooltipLinkList: H,
      TooltipMessage: ro,
      TooltipNote: ao,
      UL: lo,
      WithTooltip: V,
      WithTooltipPure: no,
      Zoom: io,
      codeCommon: so,
      components: co,
      createCopyToClipboardFunction: uo,
      getStoryHref: po,
      icons: mo,
      interleaveSeparators: bo,
      nameSpaceClassNames: So,
      resetComponents: To,
      withReset: yo,
    } = __STORYBOOKCOMPONENTS__
  var Co = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: A,
      logger: Io,
      once: go,
      pretty: Eo,
    } = __STORYBOOKCLIENTLOGGER__
  var K = ({ active: o, title: t, icon: e, description: r, onClick: a }) =>
      l.createElement(
        M,
        { active: o, title: r, onClick: a },
        e && l.createElement(k, { icon: e }),
        t ? `\xA0${t}` : null
      ),
    W = ['reset'],
    Y = (o) => o.filter((t) => !W.includes(t.type)).map((t) => t.value),
    y = 'addon-toolbars',
    $ = async (o, t, e) => {
      e &&
        e.next &&
        (await o.setAddonShortcut(y, {
          label: e.next.label,
          defaultShortcut: e.next.keys,
          actionName: `${t}:next`,
          action: e.next.action,
        })),
        e &&
          e.previous &&
          (await o.setAddonShortcut(y, {
            label: e.previous.label,
            defaultShortcut: e.previous.keys,
            actionName: `${t}:previous`,
            action: e.previous.action,
          })),
        e &&
          e.reset &&
          (await o.setAddonShortcut(y, {
            label: e.reset.label,
            defaultShortcut: e.reset.keys,
            actionName: `${t}:reset`,
            action: e.reset.action,
          }))
    },
    U = (o) => (t) => {
      let {
          id: e,
          toolbar: { items: r, shortcuts: a },
        } = t,
        d = w(),
        [f, s] = x(),
        n = R([]),
        c = f[e],
        C = v(() => {
          s({ [e]: '' })
        }, [s]),
        I = v(() => {
          let m = n.current,
            u = m.indexOf(c),
            i = u === m.length - 1 ? 0 : u + 1,
            O = n.current[i]
          s({ [e]: O })
        }, [n, c, s]),
        p = v(() => {
          let m = n.current,
            u = m.indexOf(c),
            i = u > -1 ? u : 0,
            O = i === 0 ? m.length - 1 : i - 1,
            _ = n.current[O]
          s({ [e]: _ })
        }, [n, c, s])
      return (
        E(() => {
          a &&
            $(d, e, {
              next: { ...a.next, action: I },
              previous: { ...a.previous, action: p },
              reset: { ...a.reset, action: C },
            })
        }, [d, e, a, I, p, C]),
        E(() => {
          n.current = Y(r)
        }, []),
        l.createElement(o, { cycleValues: n.current, ...t })
      )
    },
    D = ({ currentValue: o, items: t }) =>
      o != null && t.find((e) => e.value === o),
    z = ({ currentValue: o, items: t }) => {
      let e = D({ currentValue: o, items: t })
      if (e) return e.icon
    },
    j = ({ currentValue: o, items: t }) => {
      let e = D({ currentValue: o, items: t })
      if (e) return e.title
    },
    q = ({
      left: o,
      right: t,
      title: e,
      value: r,
      icon: a,
      hideIcon: d,
      onClick: f,
      currentValue: s,
    }) => {
      let n = a && l.createElement(k, { style: { opacity: 1 }, icon: a }),
        c = {
          id: r || s,
          active: s === r,
          right: t,
          title: e,
          left: o,
          onClick: f,
        }
      return a && !d && (c.left = n), c
    },
    Z = U(
      ({
        id: o,
        name: t,
        description: e,
        toolbar: {
          icon: r,
          items: a,
          title: d,
          preventDynamicIcon: f,
          dynamicTitle: s,
        },
      }) => {
        let [n, c] = x(),
          [C, I] = B(!1),
          p = n[o],
          m = !!p,
          u = r,
          i = d
        f || (u = z({ currentValue: p, items: a }) || u),
          i
            ? !u &&
              !i &&
              ((i = t),
              A(
                `Using the \`name\` "${t}" as toolbar title for backward compatibility. \`name\` will stop having dual purposes in the future. Please specify either a \`title\` or an \`icon\` in \`globalTypes\` instead.`
              ))
            : ((i = t),
              A(
                '`showName` is deprecated as `name` will stop having dual purposes in the future. Please specify a `title` in `globalTypes` instead.'
              )),
          s && (i = j({ currentValue: p, items: a }) || i)
        let O = v(
          (_) => {
            c({ [o]: _ })
          },
          [p, c]
        )
        return l.createElement(
          V,
          {
            placement: 'top',
            tooltip: ({ onHide: _ }) => {
              let F = a
                .filter(({ type: g }) => {
                  let L = !0
                  return g === 'reset' && !p && (L = !1), L
                })
                .map((g) =>
                  q({
                    ...g,
                    currentValue: p,
                    onClick: () => {
                      O(g.value), _()
                    },
                  })
                )
              return l.createElement(H, { links: F })
            },
            closeOnOutsideClick: !0,
            onVisibleChange: I,
          },
          l.createElement(K, {
            active: C || m,
            description: e || '',
            icon: u,
            title: i || '',
          })
        )
      }
    ),
    J = { type: 'item', value: '' },
    Q = (o, t) => ({
      ...t,
      name: t.name || o,
      description: t.description || o,
      toolbar: {
        ...t.toolbar,
        items: t.toolbar.items.map((e) => {
          let r = typeof e == 'string' ? { value: e, title: e } : e
          return (
            r.type === 'reset' &&
              t.toolbar.icon &&
              ((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
            { ...J, ...r }
          )
        }),
      },
    }),
    X = () => {
      let o = N(),
        t = Object.keys(o).filter((e) => !!o[e].toolbar)
      return t.length
        ? l.createElement(
            l.Fragment,
            null,
            l.createElement(G, null),
            t.map((e) => {
              let r = Q(e, o[e])
              return l.createElement(Z, { key: e, id: e, ...r })
            })
          )
        : null
    }
  h.register(y, () =>
    h.add(y, {
      title: y,
      id: 'toolbar',
      type: P.TOOL,
      match: () => !0,
      render: () => l.createElement(X, null),
    })
  )
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
//# sourceMappingURL=manager-bundle.js.map
