try {
  var i1 = Object.create
  var xa = Object.defineProperty
  var u1 = Object.getOwnPropertyDescriptor
  var s1 = Object.getOwnPropertyNames
  var l1 = Object.getPrototypeOf,
    c1 = Object.prototype.hasOwnProperty
  var fr = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw new Error('Dynamic require of "' + e + '" is not supported')
  })
  var Xe = (e, t) => () => (e && (t = e((e = 0))), t)
  var S = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Bu = (e, t) => {
      for (var r in t) xa(e, r, { get: t[r], enumerable: !0 })
    },
    p1 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of s1(t))
          !c1.call(e, a) &&
            a !== r &&
            xa(e, a, {
              get: () => t[a],
              enumerable: !(n = u1(t, a)) || n.enumerable,
            })
      return e
    }
  var pe = (e, t, r) => (
    (r = e != null ? i1(l1(e)) : {}),
    p1(
      t || !e || !e.__esModule
        ? xa(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  )
  var l = Xe(() => {})
  var c = Xe(() => {})
  var p = Xe(() => {})
  var g,
    on,
    Qe,
    _u,
    kN,
    NN,
    jN,
    Tu,
    MN,
    he,
    hr,
    wa,
    qN,
    LN,
    $N,
    UN,
    Ou,
    zN,
    ye,
    Me,
    HN,
    ge,
    GN,
    Pu,
    nt,
    WN,
    Fe,
    ne,
    VN,
    Bt = Xe(() => {
      l()
      c()
      p()
      ;(g = __REACT__),
        ({
          Children: on,
          Component: Qe,
          Fragment: _u,
          Profiler: kN,
          PureComponent: NN,
          StrictMode: jN,
          Suspense: Tu,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: MN,
          cloneElement: he,
          createContext: hr,
          createElement: wa,
          createFactory: qN,
          createRef: LN,
          forwardRef: $N,
          isValidElement: UN,
          lazy: Ou,
          memo: zN,
          useCallback: ye,
          useContext: Me,
          useDebugValue: HN,
          useEffect: ge,
          useImperativeHandle: GN,
          useLayoutEffect: Pu,
          useMemo: nt,
          useReducer: WN,
          useRef: Fe,
          useState: ne,
          version: VN,
        } = __REACT__)
    })
  var ju = {}
  Bu(ju, {
    A: () => h1,
    ActionBar: () => Oa,
    AddonPanel: () => Pa,
    Badge: () => y1,
    Bar: () => g1,
    Blockquote: () => m1,
    Button: () => b1,
    Code: () => Ra,
    DL: () => A1,
    Div: () => E1,
    DocumentWrapper: () => v1,
    ErrorFormatter: () => Ia,
    FlexBar: () => ka,
    Form: () => Te,
    H1: () => D1,
    H2: () => Na,
    H3: () => ja,
    H4: () => C1,
    H5: () => x1,
    H6: () => S1,
    HR: () => F1,
    IconButton: () => yt,
    IconButtonSkeleton: () => Ma,
    Icons: () => Oe,
    Img: () => w1,
    LI: () => B1,
    Link: () => yr,
    ListItem: () => _1,
    Loader: () => qa,
    OL: () => T1,
    P: () => O1,
    Placeholder: () => P1,
    Pre: () => R1,
    ResetWrapper: () => La,
    ScrollArea: () => I1,
    Separator: () => k1,
    Spaced: () => N1,
    Span: () => j1,
    StorybookIcon: () => M1,
    StorybookLogo: () => q1,
    Symbols: () => L1,
    SyntaxHighlighter: () => un,
    TT: () => $1,
    TabBar: () => U1,
    TabButton: () => z1,
    TabWrapper: () => H1,
    Table: () => G1,
    Tabs: () => W1,
    TabsState: () => $a,
    TooltipLinkList: () => V1,
    TooltipMessage: () => K1,
    TooltipNote: () => Ua,
    UL: () => Y1,
    WithTooltip: () => sn,
    WithTooltipPure: () => za,
    Zoom: () => Ha,
    codeCommon: () => _t,
    components: () => Ga,
    createCopyToClipboardFunction: () => J1,
    default: () => f1,
    getStoryHref: () => Wa,
    icons: () => X1,
    interleaveSeparators: () => Q1,
    nameSpaceClassNames: () => Va,
    resetComponents: () => Z1,
    withReset: () => Tt,
  })
  var f1,
    h1,
    Oa,
    Pa,
    y1,
    g1,
    m1,
    b1,
    Ra,
    A1,
    E1,
    v1,
    Ia,
    ka,
    Te,
    D1,
    Na,
    ja,
    C1,
    x1,
    S1,
    F1,
    yt,
    Ma,
    Oe,
    w1,
    B1,
    yr,
    _1,
    qa,
    T1,
    O1,
    P1,
    R1,
    La,
    I1,
    k1,
    N1,
    j1,
    M1,
    q1,
    L1,
    un,
    $1,
    U1,
    z1,
    H1,
    G1,
    W1,
    $a,
    V1,
    K1,
    Ua,
    Y1,
    sn,
    za,
    Ha,
    _t,
    Ga,
    J1,
    Wa,
    X1,
    Q1,
    Va,
    Z1,
    Tt,
    gr = Xe(() => {
      l()
      c()
      p()
      ;(f1 = __STORYBOOKCOMPONENTS__),
        ({
          A: h1,
          ActionBar: Oa,
          AddonPanel: Pa,
          Badge: y1,
          Bar: g1,
          Blockquote: m1,
          Button: b1,
          Code: Ra,
          DL: A1,
          Div: E1,
          DocumentWrapper: v1,
          ErrorFormatter: Ia,
          FlexBar: ka,
          Form: Te,
          H1: D1,
          H2: Na,
          H3: ja,
          H4: C1,
          H5: x1,
          H6: S1,
          HR: F1,
          IconButton: yt,
          IconButtonSkeleton: Ma,
          Icons: Oe,
          Img: w1,
          LI: B1,
          Link: yr,
          ListItem: _1,
          Loader: qa,
          OL: T1,
          P: O1,
          Placeholder: P1,
          Pre: R1,
          ResetWrapper: La,
          ScrollArea: I1,
          Separator: k1,
          Spaced: N1,
          Span: j1,
          StorybookIcon: M1,
          StorybookLogo: q1,
          Symbols: L1,
          SyntaxHighlighter: un,
          TT: $1,
          TabBar: U1,
          TabButton: z1,
          TabWrapper: H1,
          Table: G1,
          Tabs: W1,
          TabsState: $a,
          TooltipLinkList: V1,
          TooltipMessage: K1,
          TooltipNote: Ua,
          UL: Y1,
          WithTooltip: sn,
          WithTooltipPure: za,
          Zoom: Ha,
          codeCommon: _t,
          components: Ga,
          createCopyToClipboardFunction: J1,
          getStoryHref: Wa,
          icons: X1,
          interleaveSeparators: Q1,
          nameSpaceClassNames: Va,
          resetComponents: Z1,
          withReset: Tt,
        } = __STORYBOOKCOMPONENTS__)
    })
  var Pe,
    mr,
    Ka = Xe(() => {
      l()
      c()
      p()
      ;(Pe = (e) => `control-${e.replace(/\s+/g, '-')}`),
        (mr = (e) => `set-${e.replace(/\s+/g, '-')}`)
    })
  var Pj,
    Rj,
    Ij,
    kj,
    Mu,
    Nj,
    jj,
    qu,
    Mj,
    qj,
    Lj,
    $j,
    Uj,
    zj,
    e2,
    Lu,
    Hj,
    Gj,
    Wj,
    Vj,
    q,
    Ya,
    Kj,
    $u,
    Yj,
    Ja = Xe(() => {
      l()
      c()
      p()
      ;(Pj = __STORYBOOKTHEMING__),
        ({
          CacheProvider: Rj,
          ClassNames: Ij,
          Global: kj,
          ThemeProvider: Mu,
          background: Nj,
          color: jj,
          convert: qu,
          create: Mj,
          createCache: qj,
          createGlobal: Lj,
          createReset: $j,
          css: Uj,
          darken: zj,
          ensure: e2,
          ignoreSsrWarning: Lu,
          isPropValid: Hj,
          jsx: Gj,
          keyframes: Wj,
          lighten: Vj,
          styled: q,
          themes: Ya,
          typography: Kj,
          useTheme: $u,
          withTheme: Yj,
        } = __STORYBOOKTHEMING__)
    })
  var io = S((mq, Ku) => {
    l()
    c()
    p()
    function q2(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e)
      return a
    }
    Ku.exports = q2
  })
  var Ju = S((vq, Yu) => {
    l()
    c()
    p()
    function L2() {
      ;(this.__data__ = []), (this.size = 0)
    }
    Yu.exports = L2
  })
  var cn = S((Sq, Xu) => {
    l()
    c()
    p()
    function $2(e, t) {
      return e === t || (e !== e && t !== t)
    }
    Xu.exports = $2
  })
  var Dr = S((_q, Qu) => {
    l()
    c()
    p()
    var U2 = cn()
    function z2(e, t) {
      for (var r = e.length; r--; ) if (U2(e[r][0], t)) return r
      return -1
    }
    Qu.exports = z2
  })
  var es = S((Rq, Zu) => {
    l()
    c()
    p()
    var H2 = Dr(),
      G2 = Array.prototype,
      W2 = G2.splice
    function V2(e) {
      var t = this.__data__,
        r = H2(t, e)
      if (r < 0) return !1
      var n = t.length - 1
      return r == n ? t.pop() : W2.call(t, r, 1), --this.size, !0
    }
    Zu.exports = V2
  })
  var rs = S((jq, ts) => {
    l()
    c()
    p()
    var K2 = Dr()
    function Y2(e) {
      var t = this.__data__,
        r = K2(t, e)
      return r < 0 ? void 0 : t[r][1]
    }
    ts.exports = Y2
  })
  var as = S(($q, ns) => {
    l()
    c()
    p()
    var J2 = Dr()
    function X2(e) {
      return J2(this.__data__, e) > -1
    }
    ns.exports = X2
  })
  var is = S((Gq, os) => {
    l()
    c()
    p()
    var Q2 = Dr()
    function Z2(e, t) {
      var r = this.__data__,
        n = Q2(r, e)
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
    }
    os.exports = Z2
  })
  var Cr = S((Yq, us) => {
    l()
    c()
    p()
    var eb = Ju(),
      tb = es(),
      rb = rs(),
      nb = as(),
      ab = is()
    function It(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    It.prototype.clear = eb
    It.prototype.delete = tb
    It.prototype.get = rb
    It.prototype.has = nb
    It.prototype.set = ab
    us.exports = It
  })
  var ls = S((Zq, ss) => {
    l()
    c()
    p()
    var ob = Cr()
    function ib() {
      ;(this.__data__ = new ob()), (this.size = 0)
    }
    ss.exports = ib
  })
  var ps = S((nL, cs) => {
    l()
    c()
    p()
    function ub(e) {
      var t = this.__data__,
        r = t.delete(e)
      return (this.size = t.size), r
    }
    cs.exports = ub
  })
  var fs = S((uL, ds) => {
    l()
    c()
    p()
    function sb(e) {
      return this.__data__.get(e)
    }
    ds.exports = sb
  })
  var ys = S((pL, hs) => {
    l()
    c()
    p()
    function lb(e) {
      return this.__data__.has(e)
    }
    hs.exports = lb
  })
  var uo = S((yL, gs) => {
    l()
    c()
    p()
    var cb =
      typeof window == 'object' && window && window.Object === Object && window
    gs.exports = cb
  })
  var qe = S((AL, ms) => {
    l()
    c()
    p()
    var pb = uo(),
      db = typeof self == 'object' && self && self.Object === Object && self,
      fb = pb || db || Function('return this')()
    ms.exports = fb
  })
  var mt = S((CL, bs) => {
    l()
    c()
    p()
    var hb = qe(),
      yb = hb.Symbol
    bs.exports = yb
  })
  var Ds = S((wL, vs) => {
    l()
    c()
    p()
    var As = mt(),
      Es = Object.prototype,
      gb = Es.hasOwnProperty,
      mb = Es.toString,
      xr = As ? As.toStringTag : void 0
    function bb(e) {
      var t = gb.call(e, xr),
        r = e[xr]
      try {
        e[xr] = void 0
        var n = !0
      } catch {}
      var a = mb.call(e)
      return n && (t ? (e[xr] = r) : delete e[xr]), a
    }
    vs.exports = bb
  })
  var xs = S((OL, Cs) => {
    l()
    c()
    p()
    var Ab = Object.prototype,
      Eb = Ab.toString
    function vb(e) {
      return Eb.call(e)
    }
    Cs.exports = vb
  })
  var bt = S((kL, ws) => {
    l()
    c()
    p()
    var Ss = mt(),
      Db = Ds(),
      Cb = xs(),
      xb = '[object Null]',
      Sb = '[object Undefined]',
      Fs = Ss ? Ss.toStringTag : void 0
    function Fb(e) {
      return e == null
        ? e === void 0
          ? Sb
          : xb
        : Fs && Fs in Object(e)
        ? Db(e)
        : Cb(e)
    }
    ws.exports = Fb
  })
  var ze = S((qL, Bs) => {
    l()
    c()
    p()
    function wb(e) {
      var t = typeof e
      return e != null && (t == 'object' || t == 'function')
    }
    Bs.exports = wb
  })
  var so = S((zL, _s) => {
    l()
    c()
    p()
    var Bb = bt(),
      _b = ze(),
      Tb = '[object AsyncFunction]',
      Ob = '[object Function]',
      Pb = '[object GeneratorFunction]',
      Rb = '[object Proxy]'
    function Ib(e) {
      if (!_b(e)) return !1
      var t = Bb(e)
      return t == Ob || t == Pb || t == Tb || t == Rb
    }
    _s.exports = Ib
  })
  var Os = S((VL, Ts) => {
    l()
    c()
    p()
    var kb = qe(),
      Nb = kb['__core-js_shared__']
    Ts.exports = Nb
  })
  var Is = S((XL, Rs) => {
    l()
    c()
    p()
    var lo = Os(),
      Ps = (function () {
        var e = /[^.]+$/.exec((lo && lo.keys && lo.keys.IE_PROTO) || '')
        return e ? 'Symbol(src)_1.' + e : ''
      })()
    function jb(e) {
      return !!Ps && Ps in e
    }
    Rs.exports = jb
  })
  var co = S((t$, ks) => {
    l()
    c()
    p()
    var Mb = Function.prototype,
      qb = Mb.toString
    function Lb(e) {
      if (e != null) {
        try {
          return qb.call(e)
        } catch {}
        try {
          return e + ''
        } catch {}
      }
      return ''
    }
    ks.exports = Lb
  })
  var js = S((o$, Ns) => {
    l()
    c()
    p()
    var $b = so(),
      Ub = Is(),
      zb = ze(),
      Hb = co(),
      Gb = /[\\^$.*+?()[\]{}|]/g,
      Wb = /^\[object .+?Constructor\]$/,
      Vb = Function.prototype,
      Kb = Object.prototype,
      Yb = Vb.toString,
      Jb = Kb.hasOwnProperty,
      Xb = RegExp(
        '^' +
          Yb.call(Jb)
            .replace(Gb, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      )
    function Qb(e) {
      if (!zb(e) || Ub(e)) return !1
      var t = $b(e) ? Xb : Wb
      return t.test(Hb(e))
    }
    Ns.exports = Qb
  })
  var qs = S((l$, Ms) => {
    l()
    c()
    p()
    function Zb(e, t) {
      return e?.[t]
    }
    Ms.exports = Zb
  })
  var ut = S((f$, Ls) => {
    l()
    c()
    p()
    var eA = js(),
      tA = qs()
    function rA(e, t) {
      var r = tA(e, t)
      return eA(r) ? r : void 0
    }
    Ls.exports = rA
  })
  var pn = S((m$, $s) => {
    l()
    c()
    p()
    var nA = ut(),
      aA = qe(),
      oA = nA(aA, 'Map')
    $s.exports = oA
  })
  var Sr = S((v$, Us) => {
    l()
    c()
    p()
    var iA = ut(),
      uA = iA(Object, 'create')
    Us.exports = uA
  })
  var Gs = S((S$, Hs) => {
    l()
    c()
    p()
    var zs = Sr()
    function sA() {
      ;(this.__data__ = zs ? zs(null) : {}), (this.size = 0)
    }
    Hs.exports = sA
  })
  var Vs = S((_$, Ws) => {
    l()
    c()
    p()
    function lA(e) {
      var t = this.has(e) && delete this.__data__[e]
      return (this.size -= t ? 1 : 0), t
    }
    Ws.exports = lA
  })
  var Ys = S((R$, Ks) => {
    l()
    c()
    p()
    var cA = Sr(),
      pA = '__lodash_hash_undefined__',
      dA = Object.prototype,
      fA = dA.hasOwnProperty
    function hA(e) {
      var t = this.__data__
      if (cA) {
        var r = t[e]
        return r === pA ? void 0 : r
      }
      return fA.call(t, e) ? t[e] : void 0
    }
    Ks.exports = hA
  })
  var Xs = S((j$, Js) => {
    l()
    c()
    p()
    var yA = Sr(),
      gA = Object.prototype,
      mA = gA.hasOwnProperty
    function bA(e) {
      var t = this.__data__
      return yA ? t[e] !== void 0 : mA.call(t, e)
    }
    Js.exports = bA
  })
  var Zs = S(($$, Qs) => {
    l()
    c()
    p()
    var AA = Sr(),
      EA = '__lodash_hash_undefined__'
    function vA(e, t) {
      var r = this.__data__
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = AA && t === void 0 ? EA : t),
        this
      )
    }
    Qs.exports = vA
  })
  var tl = S((G$, el) => {
    l()
    c()
    p()
    var DA = Gs(),
      CA = Vs(),
      xA = Ys(),
      SA = Xs(),
      FA = Zs()
    function kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    kt.prototype.clear = DA
    kt.prototype.delete = CA
    kt.prototype.get = xA
    kt.prototype.has = SA
    kt.prototype.set = FA
    el.exports = kt
  })
  var al = S((Y$, nl) => {
    l()
    c()
    p()
    var rl = tl(),
      wA = Cr(),
      BA = pn()
    function _A() {
      ;(this.size = 0),
        (this.__data__ = {
          hash: new rl(),
          map: new (BA || wA)(),
          string: new rl(),
        })
    }
    nl.exports = _A
  })
  var il = S((Z$, ol) => {
    l()
    c()
    p()
    function TA(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    ol.exports = TA
  })
  var Fr = S((nU, ul) => {
    l()
    c()
    p()
    var OA = il()
    function PA(e, t) {
      var r = e.__data__
      return OA(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    ul.exports = PA
  })
  var ll = S((uU, sl) => {
    l()
    c()
    p()
    var RA = Fr()
    function IA(e) {
      var t = RA(this, e).delete(e)
      return (this.size -= t ? 1 : 0), t
    }
    sl.exports = IA
  })
  var pl = S((pU, cl) => {
    l()
    c()
    p()
    var kA = Fr()
    function NA(e) {
      return kA(this, e).get(e)
    }
    cl.exports = NA
  })
  var fl = S((yU, dl) => {
    l()
    c()
    p()
    var jA = Fr()
    function MA(e) {
      return jA(this, e).has(e)
    }
    dl.exports = MA
  })
  var yl = S((AU, hl) => {
    l()
    c()
    p()
    var qA = Fr()
    function LA(e, t) {
      var r = qA(this, e),
        n = r.size
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
    }
    hl.exports = LA
  })
  var dn = S((CU, gl) => {
    l()
    c()
    p()
    var $A = al(),
      UA = ll(),
      zA = pl(),
      HA = fl(),
      GA = yl()
    function Nt(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Nt.prototype.clear = $A
    Nt.prototype.delete = UA
    Nt.prototype.get = zA
    Nt.prototype.has = HA
    Nt.prototype.set = GA
    gl.exports = Nt
  })
  var bl = S((wU, ml) => {
    l()
    c()
    p()
    var WA = Cr(),
      VA = pn(),
      KA = dn(),
      YA = 200
    function JA(e, t) {
      var r = this.__data__
      if (r instanceof WA) {
        var n = r.__data__
        if (!VA || n.length < YA - 1)
          return n.push([e, t]), (this.size = ++r.size), this
        r = this.__data__ = new KA(n)
      }
      return r.set(e, t), (this.size = r.size), this
    }
    ml.exports = JA
  })
  var fn = S((OU, Al) => {
    l()
    c()
    p()
    var XA = Cr(),
      QA = ls(),
      ZA = ps(),
      eE = fs(),
      tE = ys(),
      rE = bl()
    function jt(e) {
      var t = (this.__data__ = new XA(e))
      this.size = t.size
    }
    jt.prototype.clear = QA
    jt.prototype.delete = ZA
    jt.prototype.get = eE
    jt.prototype.has = tE
    jt.prototype.set = rE
    Al.exports = jt
  })
  var vl = S((kU, El) => {
    l()
    c()
    p()
    var nE = '__lodash_hash_undefined__'
    function aE(e) {
      return this.__data__.set(e, nE), this
    }
    El.exports = aE
  })
  var Cl = S((qU, Dl) => {
    l()
    c()
    p()
    function oE(e) {
      return this.__data__.has(e)
    }
    Dl.exports = oE
  })
  var po = S((zU, xl) => {
    l()
    c()
    p()
    var iE = dn(),
      uE = vl(),
      sE = Cl()
    function hn(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.__data__ = new iE(); ++t < r; ) this.add(e[t])
    }
    hn.prototype.add = hn.prototype.push = uE
    hn.prototype.has = sE
    xl.exports = hn
  })
  var Fl = S((VU, Sl) => {
    l()
    c()
    p()
    function lE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0
      return !1
    }
    Sl.exports = lE
  })
  var fo = S((XU, wl) => {
    l()
    c()
    p()
    function cE(e, t) {
      return e.has(t)
    }
    wl.exports = cE
  })
  var ho = S((tz, Bl) => {
    l()
    c()
    p()
    var pE = po(),
      dE = Fl(),
      fE = fo(),
      hE = 1,
      yE = 2
    function gE(e, t, r, n, a, o) {
      var i = r & hE,
        s = e.length,
        u = t.length
      if (s != u && !(i && u > s)) return !1
      var d = o.get(e),
        m = o.get(t)
      if (d && m) return d == t && m == e
      var b = -1,
        h = !0,
        y = r & yE ? new pE() : void 0
      for (o.set(e, t), o.set(t, e); ++b < s; ) {
        var E = e[b],
          A = t[b]
        if (n) var x = i ? n(A, E, b, t, e, o) : n(E, A, b, e, t, o)
        if (x !== void 0) {
          if (x) continue
          h = !1
          break
        }
        if (y) {
          if (
            !dE(t, function (F, R) {
              if (!fE(y, R) && (E === F || a(E, F, r, n, o))) return y.push(R)
            })
          ) {
            h = !1
            break
          }
        } else if (!(E === A || a(E, A, r, n, o))) {
          h = !1
          break
        }
      }
      return o.delete(e), o.delete(t), h
    }
    Bl.exports = gE
  })
  var yo = S((oz, _l) => {
    l()
    c()
    p()
    var mE = qe(),
      bE = mE.Uint8Array
    _l.exports = bE
  })
  var Ol = S((lz, Tl) => {
    l()
    c()
    p()
    function AE(e) {
      var t = -1,
        r = Array(e.size)
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n]
        }),
        r
      )
    }
    Tl.exports = AE
  })
  var yn = S((fz, Pl) => {
    l()
    c()
    p()
    function EE(e) {
      var t = -1,
        r = Array(e.size)
      return (
        e.forEach(function (n) {
          r[++t] = n
        }),
        r
      )
    }
    Pl.exports = EE
  })
  var jl = S((mz, Nl) => {
    l()
    c()
    p()
    var Rl = mt(),
      Il = yo(),
      vE = cn(),
      DE = ho(),
      CE = Ol(),
      xE = yn(),
      SE = 1,
      FE = 2,
      wE = '[object Boolean]',
      BE = '[object Date]',
      _E = '[object Error]',
      TE = '[object Map]',
      OE = '[object Number]',
      PE = '[object RegExp]',
      RE = '[object Set]',
      IE = '[object String]',
      kE = '[object Symbol]',
      NE = '[object ArrayBuffer]',
      jE = '[object DataView]',
      kl = Rl ? Rl.prototype : void 0,
      go = kl ? kl.valueOf : void 0
    function ME(e, t, r, n, a, o, i) {
      switch (r) {
        case jE:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1
          ;(e = e.buffer), (t = t.buffer)
        case NE:
          return !(e.byteLength != t.byteLength || !o(new Il(e), new Il(t)))
        case wE:
        case BE:
        case OE:
          return vE(+e, +t)
        case _E:
          return e.name == t.name && e.message == t.message
        case PE:
        case IE:
          return e == t + ''
        case TE:
          var s = CE
        case RE:
          var u = n & SE
          if ((s || (s = xE), e.size != t.size && !u)) return !1
          var d = i.get(e)
          if (d) return d == t
          ;(n |= FE), i.set(e, t)
          var m = DE(s(e), s(t), n, a, o, i)
          return i.delete(e), m
        case kE:
          if (go) return go.call(e) == go.call(t)
      }
      return !1
    }
    Nl.exports = ME
  })
  var gn = S((vz, Ml) => {
    l()
    c()
    p()
    function qE(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r]
      return e
    }
    Ml.exports = qE
  })
  var He = S((Sz, ql) => {
    l()
    c()
    p()
    var LE = Array.isArray
    ql.exports = LE
  })
  var mo = S((_z, Ll) => {
    l()
    c()
    p()
    var $E = gn(),
      UE = He()
    function zE(e, t, r) {
      var n = t(e)
      return UE(e) ? n : $E(n, r(e))
    }
    Ll.exports = zE
  })
  var Ul = S((Rz, $l) => {
    l()
    c()
    p()
    function HE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        var i = e[r]
        t(i, r, e) && (o[a++] = i)
      }
      return o
    }
    $l.exports = HE
  })
  var bo = S((jz, zl) => {
    l()
    c()
    p()
    function GE() {
      return []
    }
    zl.exports = GE
  })
  var mn = S(($z, Gl) => {
    l()
    c()
    p()
    var WE = Ul(),
      VE = bo(),
      KE = Object.prototype,
      YE = KE.propertyIsEnumerable,
      Hl = Object.getOwnPropertySymbols,
      JE = Hl
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                WE(Hl(e), function (t) {
                  return YE.call(e, t)
                }))
          }
        : VE
    Gl.exports = JE
  })
  var Vl = S((Gz, Wl) => {
    l()
    c()
    p()
    function XE(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
      return n
    }
    Wl.exports = XE
  })
  var et = S((Yz, Kl) => {
    l()
    c()
    p()
    function QE(e) {
      return e != null && typeof e == 'object'
    }
    Kl.exports = QE
  })
  var Jl = S((Zz, Yl) => {
    l()
    c()
    p()
    var ZE = bt(),
      ev = et(),
      tv = '[object Arguments]'
    function rv(e) {
      return ev(e) && ZE(e) == tv
    }
    Yl.exports = rv
  })
  var bn = S((nH, Zl) => {
    l()
    c()
    p()
    var Xl = Jl(),
      nv = et(),
      Ql = Object.prototype,
      av = Ql.hasOwnProperty,
      ov = Ql.propertyIsEnumerable,
      iv = Xl(
        (function () {
          return arguments
        })()
      )
        ? Xl
        : function (e) {
            return nv(e) && av.call(e, 'callee') && !ov.call(e, 'callee')
          }
    Zl.exports = iv
  })
  var tc = S((uH, ec) => {
    l()
    c()
    p()
    function uv() {
      return !1
    }
    ec.exports = uv
  })
  var An = S((wr, Mt) => {
    l()
    c()
    p()
    var sv = qe(),
      lv = tc(),
      ac = typeof wr == 'object' && wr && !wr.nodeType && wr,
      rc = ac && typeof Mt == 'object' && Mt && !Mt.nodeType && Mt,
      cv = rc && rc.exports === ac,
      nc = cv ? sv.Buffer : void 0,
      pv = nc ? nc.isBuffer : void 0,
      dv = pv || lv
    Mt.exports = dv
  })
  var En = S((hH, oc) => {
    l()
    c()
    p()
    var fv = 9007199254740991,
      hv = /^(?:0|[1-9]\d*)$/
    function yv(e, t) {
      var r = typeof e
      return (
        (t = t ?? fv),
        !!t &&
          (r == 'number' || (r != 'symbol' && hv.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      )
    }
    oc.exports = yv
  })
  var vn = S((bH, ic) => {
    l()
    c()
    p()
    var gv = 9007199254740991
    function mv(e) {
      return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= gv
    }
    ic.exports = mv
  })
  var sc = S((DH, uc) => {
    l()
    c()
    p()
    var bv = bt(),
      Av = vn(),
      Ev = et(),
      vv = '[object Arguments]',
      Dv = '[object Array]',
      Cv = '[object Boolean]',
      xv = '[object Date]',
      Sv = '[object Error]',
      Fv = '[object Function]',
      wv = '[object Map]',
      Bv = '[object Number]',
      _v = '[object Object]',
      Tv = '[object RegExp]',
      Ov = '[object Set]',
      Pv = '[object String]',
      Rv = '[object WeakMap]',
      Iv = '[object ArrayBuffer]',
      kv = '[object DataView]',
      Nv = '[object Float32Array]',
      jv = '[object Float64Array]',
      Mv = '[object Int8Array]',
      qv = '[object Int16Array]',
      Lv = '[object Int32Array]',
      $v = '[object Uint8Array]',
      Uv = '[object Uint8ClampedArray]',
      zv = '[object Uint16Array]',
      Hv = '[object Uint32Array]',
      ce = {}
    ce[Nv] =
      ce[jv] =
      ce[Mv] =
      ce[qv] =
      ce[Lv] =
      ce[$v] =
      ce[Uv] =
      ce[zv] =
      ce[Hv] =
        !0
    ce[vv] =
      ce[Dv] =
      ce[Iv] =
      ce[Cv] =
      ce[kv] =
      ce[xv] =
      ce[Sv] =
      ce[Fv] =
      ce[wv] =
      ce[Bv] =
      ce[_v] =
      ce[Tv] =
      ce[Ov] =
      ce[Pv] =
      ce[Rv] =
        !1
    function Gv(e) {
      return Ev(e) && Av(e.length) && !!ce[bv(e)]
    }
    uc.exports = Gv
  })
  var Dn = S((FH, lc) => {
    l()
    c()
    p()
    function Wv(e) {
      return function (t) {
        return e(t)
      }
    }
    lc.exports = Wv
  })
  var Cn = S((Br, qt) => {
    l()
    c()
    p()
    var Vv = uo(),
      cc = typeof Br == 'object' && Br && !Br.nodeType && Br,
      _r = cc && typeof qt == 'object' && qt && !qt.nodeType && qt,
      Kv = _r && _r.exports === cc,
      Ao = Kv && Vv.process,
      Yv = (function () {
        try {
          var e = _r && _r.require && _r.require('util').types
          return e || (Ao && Ao.binding && Ao.binding('util'))
        } catch {}
      })()
    qt.exports = Yv
  })
  var Eo = S((RH, fc) => {
    l()
    c()
    p()
    var Jv = sc(),
      Xv = Dn(),
      pc = Cn(),
      dc = pc && pc.isTypedArray,
      Qv = dc ? Xv(dc) : Jv
    fc.exports = Qv
  })
  var vo = S((jH, hc) => {
    l()
    c()
    p()
    var Zv = Vl(),
      eD = bn(),
      tD = He(),
      rD = An(),
      nD = En(),
      aD = Eo(),
      oD = Object.prototype,
      iD = oD.hasOwnProperty
    function uD(e, t) {
      var r = tD(e),
        n = !r && eD(e),
        a = !r && !n && rD(e),
        o = !r && !n && !a && aD(e),
        i = r || n || a || o,
        s = i ? Zv(e.length, String) : [],
        u = s.length
      for (var d in e)
        (t || iD.call(e, d)) &&
          !(
            i &&
            (d == 'length' ||
              (a && (d == 'offset' || d == 'parent')) ||
              (o &&
                (d == 'buffer' || d == 'byteLength' || d == 'byteOffset')) ||
              nD(d, u))
          ) &&
          s.push(d)
      return s
    }
    hc.exports = uD
  })
  var xn = S(($H, yc) => {
    l()
    c()
    p()
    var sD = Object.prototype
    function lD(e) {
      var t = e && e.constructor,
        r = (typeof t == 'function' && t.prototype) || sD
      return e === r
    }
    yc.exports = lD
  })
  var Do = S((GH, gc) => {
    l()
    c()
    p()
    function cD(e, t) {
      return function (r) {
        return e(t(r))
      }
    }
    gc.exports = cD
  })
  var bc = S((YH, mc) => {
    l()
    c()
    p()
    var pD = Do(),
      dD = pD(Object.keys, Object)
    mc.exports = dD
  })
  var Ec = S((ZH, Ac) => {
    l()
    c()
    p()
    var fD = xn(),
      hD = bc(),
      yD = Object.prototype,
      gD = yD.hasOwnProperty
    function mD(e) {
      if (!fD(e)) return hD(e)
      var t = []
      for (var r in Object(e)) gD.call(e, r) && r != 'constructor' && t.push(r)
      return t
    }
    Ac.exports = mD
  })
  var Co = S((nG, vc) => {
    l()
    c()
    p()
    var bD = so(),
      AD = vn()
    function ED(e) {
      return e != null && AD(e.length) && !bD(e)
    }
    vc.exports = ED
  })
  var Lt = S((uG, Dc) => {
    l()
    c()
    p()
    var vD = vo(),
      DD = Ec(),
      CD = Co()
    function xD(e) {
      return CD(e) ? vD(e) : DD(e)
    }
    Dc.exports = xD
  })
  var xo = S((pG, Cc) => {
    l()
    c()
    p()
    var SD = mo(),
      FD = mn(),
      wD = Lt()
    function BD(e) {
      return SD(e, wD, FD)
    }
    Cc.exports = BD
  })
  var Fc = S((yG, Sc) => {
    l()
    c()
    p()
    var xc = xo(),
      _D = 1,
      TD = Object.prototype,
      OD = TD.hasOwnProperty
    function PD(e, t, r, n, a, o) {
      var i = r & _D,
        s = xc(e),
        u = s.length,
        d = xc(t),
        m = d.length
      if (u != m && !i) return !1
      for (var b = u; b--; ) {
        var h = s[b]
        if (!(i ? h in t : OD.call(t, h))) return !1
      }
      var y = o.get(e),
        E = o.get(t)
      if (y && E) return y == t && E == e
      var A = !0
      o.set(e, t), o.set(t, e)
      for (var x = i; ++b < u; ) {
        h = s[b]
        var F = e[h],
          R = t[h]
        if (n) var j = i ? n(R, F, h, t, e, o) : n(F, R, h, e, t, o)
        if (!(j === void 0 ? F === R || a(F, R, r, n, o) : j)) {
          A = !1
          break
        }
        x || (x = h == 'constructor')
      }
      if (A && !x) {
        var L = e.constructor,
          w = t.constructor
        L != w &&
          'constructor' in e &&
          'constructor' in t &&
          !(
            typeof L == 'function' &&
            L instanceof L &&
            typeof w == 'function' &&
            w instanceof w
          ) &&
          (A = !1)
      }
      return o.delete(e), o.delete(t), A
    }
    Sc.exports = PD
  })
  var Bc = S((AG, wc) => {
    l()
    c()
    p()
    var RD = ut(),
      ID = qe(),
      kD = RD(ID, 'DataView')
    wc.exports = kD
  })
  var Tc = S((CG, _c) => {
    l()
    c()
    p()
    var ND = ut(),
      jD = qe(),
      MD = ND(jD, 'Promise')
    _c.exports = MD
  })
  var So = S((wG, Oc) => {
    l()
    c()
    p()
    var qD = ut(),
      LD = qe(),
      $D = qD(LD, 'Set')
    Oc.exports = $D
  })
  var Rc = S((OG, Pc) => {
    l()
    c()
    p()
    var UD = ut(),
      zD = qe(),
      HD = UD(zD, 'WeakMap')
    Pc.exports = HD
  })
  var Tr = S((kG, Lc) => {
    l()
    c()
    p()
    var Fo = Bc(),
      wo = pn(),
      Bo = Tc(),
      _o = So(),
      To = Rc(),
      qc = bt(),
      $t = co(),
      Ic = '[object Map]',
      GD = '[object Object]',
      kc = '[object Promise]',
      Nc = '[object Set]',
      jc = '[object WeakMap]',
      Mc = '[object DataView]',
      WD = $t(Fo),
      VD = $t(wo),
      KD = $t(Bo),
      YD = $t(_o),
      JD = $t(To),
      At = qc
    ;((Fo && At(new Fo(new ArrayBuffer(1))) != Mc) ||
      (wo && At(new wo()) != Ic) ||
      (Bo && At(Bo.resolve()) != kc) ||
      (_o && At(new _o()) != Nc) ||
      (To && At(new To()) != jc)) &&
      (At = function (e) {
        var t = qc(e),
          r = t == GD ? e.constructor : void 0,
          n = r ? $t(r) : ''
        if (n)
          switch (n) {
            case WD:
              return Mc
            case VD:
              return Ic
            case KD:
              return kc
            case YD:
              return Nc
            case JD:
              return jc
          }
        return t
      })
    Lc.exports = At
  })
  var Kc = S((qG, Vc) => {
    l()
    c()
    p()
    var Oo = fn(),
      XD = ho(),
      QD = jl(),
      ZD = Fc(),
      $c = Tr(),
      Uc = He(),
      zc = An(),
      eC = Eo(),
      tC = 1,
      Hc = '[object Arguments]',
      Gc = '[object Array]',
      Sn = '[object Object]',
      rC = Object.prototype,
      Wc = rC.hasOwnProperty
    function nC(e, t, r, n, a, o) {
      var i = Uc(e),
        s = Uc(t),
        u = i ? Gc : $c(e),
        d = s ? Gc : $c(t)
      ;(u = u == Hc ? Sn : u), (d = d == Hc ? Sn : d)
      var m = u == Sn,
        b = d == Sn,
        h = u == d
      if (h && zc(e)) {
        if (!zc(t)) return !1
        ;(i = !0), (m = !1)
      }
      if (h && !m)
        return (
          o || (o = new Oo()),
          i || eC(e) ? XD(e, t, r, n, a, o) : QD(e, t, u, r, n, a, o)
        )
      if (!(r & tC)) {
        var y = m && Wc.call(e, '__wrapped__'),
          E = b && Wc.call(t, '__wrapped__')
        if (y || E) {
          var A = y ? e.value() : e,
            x = E ? t.value() : t
          return o || (o = new Oo()), a(A, x, r, n, o)
        }
      }
      return h ? (o || (o = new Oo()), ZD(e, t, r, n, a, o)) : !1
    }
    Vc.exports = nC
  })
  var Po = S((zG, Xc) => {
    l()
    c()
    p()
    var aC = Kc(),
      Yc = et()
    function Jc(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!Yc(e) && !Yc(t))
        ? e !== e && t !== t
        : aC(e, t, r, n, Jc, a)
    }
    Xc.exports = Jc
  })
  var Zc = S((VG, Qc) => {
    l()
    c()
    p()
    var oC = fn(),
      iC = Po(),
      uC = 1,
      sC = 2
    function lC(e, t, r, n) {
      var a = r.length,
        o = a,
        i = !n
      if (e == null) return !o
      for (e = Object(e); a--; ) {
        var s = r[a]
        if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
      }
      for (; ++a < o; ) {
        s = r[a]
        var u = s[0],
          d = e[u],
          m = s[1]
        if (i && s[2]) {
          if (d === void 0 && !(u in e)) return !1
        } else {
          var b = new oC()
          if (n) var h = n(d, m, u, e, t, b)
          if (!(h === void 0 ? iC(m, d, uC | sC, n, b) : h)) return !1
        }
      }
      return !0
    }
    Qc.exports = lC
  })
  var Ro = S((XG, ep) => {
    l()
    c()
    p()
    var cC = ze()
    function pC(e) {
      return e === e && !cC(e)
    }
    ep.exports = pC
  })
  var rp = S((tW, tp) => {
    l()
    c()
    p()
    var dC = Ro(),
      fC = Lt()
    function hC(e) {
      for (var t = fC(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n]
        t[r] = [n, a, dC(a)]
      }
      return t
    }
    tp.exports = hC
  })
  var Io = S((oW, np) => {
    l()
    c()
    p()
    function yC(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
      }
    }
    np.exports = yC
  })
  var op = S((lW, ap) => {
    l()
    c()
    p()
    var gC = Zc(),
      mC = rp(),
      bC = Io()
    function AC(e) {
      var t = mC(e)
      return t.length == 1 && t[0][2]
        ? bC(t[0][0], t[0][1])
        : function (r) {
            return r === e || gC(r, e, t)
          }
    }
    ap.exports = AC
  })
  var Or = S((fW, ip) => {
    l()
    c()
    p()
    var EC = bt(),
      vC = et(),
      DC = '[object Symbol]'
    function CC(e) {
      return typeof e == 'symbol' || (vC(e) && EC(e) == DC)
    }
    ip.exports = CC
  })
  var Fn = S((mW, up) => {
    l()
    c()
    p()
    var xC = He(),
      SC = Or(),
      FC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      wC = /^\w*$/
    function BC(e, t) {
      if (xC(e)) return !1
      var r = typeof e
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        e == null ||
        SC(e)
        ? !0
        : wC.test(e) || !FC.test(e) || (t != null && e in Object(t))
    }
    up.exports = BC
  })
  var cp = S((vW, lp) => {
    l()
    c()
    p()
    var sp = dn(),
      _C = 'Expected a function'
    function ko(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(_C)
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache
        if (o.has(a)) return o.get(a)
        var i = e.apply(this, n)
        return (r.cache = o.set(a, i) || o), i
      }
      return (r.cache = new (ko.Cache || sp)()), r
    }
    ko.Cache = sp
    lp.exports = ko
  })
  var dp = S((SW, pp) => {
    l()
    c()
    p()
    var TC = cp(),
      OC = 500
    function PC(e) {
      var t = TC(e, function (n) {
          return r.size === OC && r.clear(), n
        }),
        r = t.cache
      return t
    }
    pp.exports = PC
  })
  var hp = S((_W, fp) => {
    l()
    c()
    p()
    var RC = dp(),
      IC =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      kC = /\\(\\)?/g,
      NC = RC(function (e) {
        var t = []
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(IC, function (r, n, a, o) {
            t.push(a ? o.replace(kC, '$1') : n || r)
          }),
          t
        )
      })
    fp.exports = NC
  })
  var Ep = S((RW, Ap) => {
    l()
    c()
    p()
    var yp = mt(),
      jC = io(),
      MC = He(),
      qC = Or(),
      LC = 1 / 0,
      gp = yp ? yp.prototype : void 0,
      mp = gp ? gp.toString : void 0
    function bp(e) {
      if (typeof e == 'string') return e
      if (MC(e)) return jC(e, bp) + ''
      if (qC(e)) return mp ? mp.call(e) : ''
      var t = e + ''
      return t == '0' && 1 / e == -LC ? '-0' : t
    }
    Ap.exports = bp
  })
  var Dp = S((jW, vp) => {
    l()
    c()
    p()
    var $C = Ep()
    function UC(e) {
      return e == null ? '' : $C(e)
    }
    vp.exports = UC
  })
  var Pr = S(($W, Cp) => {
    l()
    c()
    p()
    var zC = He(),
      HC = Fn(),
      GC = hp(),
      WC = Dp()
    function VC(e, t) {
      return zC(e) ? e : HC(e, t) ? [e] : GC(WC(e))
    }
    Cp.exports = VC
  })
  var Ut = S((GW, xp) => {
    l()
    c()
    p()
    var KC = Or(),
      YC = 1 / 0
    function JC(e) {
      if (typeof e == 'string' || KC(e)) return e
      var t = e + ''
      return t == '0' && 1 / e == -YC ? '-0' : t
    }
    xp.exports = JC
  })
  var wn = S((YW, Sp) => {
    l()
    c()
    p()
    var XC = Pr(),
      QC = Ut()
    function ZC(e, t) {
      t = XC(t, e)
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[QC(t[r++])]
      return r && r == n ? e : void 0
    }
    Sp.exports = ZC
  })
  var wp = S((ZW, Fp) => {
    l()
    c()
    p()
    var ex = wn()
    function tx(e, t, r) {
      var n = e == null ? void 0 : ex(e, t)
      return n === void 0 ? r : n
    }
    Fp.exports = tx
  })
  var _p = S((nV, Bp) => {
    l()
    c()
    p()
    function rx(e, t) {
      return e != null && t in Object(e)
    }
    Bp.exports = rx
  })
  var Op = S((uV, Tp) => {
    l()
    c()
    p()
    var nx = Pr(),
      ax = bn(),
      ox = He(),
      ix = En(),
      ux = vn(),
      sx = Ut()
    function lx(e, t, r) {
      t = nx(t, e)
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var i = sx(t[n])
        if (!(o = e != null && r(e, i))) break
        e = e[i]
      }
      return o || ++n != a
        ? o
        : ((a = e == null ? 0 : e.length),
          !!a && ux(a) && ix(i, a) && (ox(e) || ax(e)))
    }
    Tp.exports = lx
  })
  var No = S((pV, Pp) => {
    l()
    c()
    p()
    var cx = _p(),
      px = Op()
    function dx(e, t) {
      return e != null && px(e, t, cx)
    }
    Pp.exports = dx
  })
  var Ip = S((yV, Rp) => {
    l()
    c()
    p()
    var fx = Po(),
      hx = wp(),
      yx = No(),
      gx = Fn(),
      mx = Ro(),
      bx = Io(),
      Ax = Ut(),
      Ex = 1,
      vx = 2
    function Dx(e, t) {
      return gx(e) && mx(t)
        ? bx(Ax(e), t)
        : function (r) {
            var n = hx(r, e)
            return n === void 0 && n === t ? yx(r, e) : fx(t, n, Ex | vx)
          }
    }
    Rp.exports = Dx
  })
  var jo = S((AV, kp) => {
    l()
    c()
    p()
    function Cx(e) {
      return e
    }
    kp.exports = Cx
  })
  var jp = S((CV, Np) => {
    l()
    c()
    p()
    function xx(e) {
      return function (t) {
        return t?.[e]
      }
    }
    Np.exports = xx
  })
  var qp = S((wV, Mp) => {
    l()
    c()
    p()
    var Sx = wn()
    function Fx(e) {
      return function (t) {
        return Sx(t, e)
      }
    }
    Mp.exports = Fx
  })
  var $p = S((OV, Lp) => {
    l()
    c()
    p()
    var wx = jp(),
      Bx = qp(),
      _x = Fn(),
      Tx = Ut()
    function Ox(e) {
      return _x(e) ? wx(Tx(e)) : Bx(e)
    }
    Lp.exports = Ox
  })
  var Mo = S((kV, Up) => {
    l()
    c()
    p()
    var Px = op(),
      Rx = Ip(),
      Ix = jo(),
      kx = He(),
      Nx = $p()
    function jx(e) {
      return typeof e == 'function'
        ? e
        : e == null
        ? Ix
        : typeof e == 'object'
        ? kx(e)
          ? Rx(e[0], e[1])
          : Px(e)
        : Nx(e)
    }
    Up.exports = jx
  })
  var qo = S((qV, zp) => {
    l()
    c()
    p()
    var Mx = ut(),
      qx = (function () {
        try {
          var e = Mx(Object, 'defineProperty')
          return e({}, '', {}), e
        } catch {}
      })()
    zp.exports = qx
  })
  var Bn = S((zV, Gp) => {
    l()
    c()
    p()
    var Hp = qo()
    function Lx(e, t, r) {
      t == '__proto__' && Hp
        ? Hp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r)
    }
    Gp.exports = Lx
  })
  var _n = S((VV, Wp) => {
    l()
    c()
    p()
    var $x = Bn(),
      Ux = cn(),
      zx = Object.prototype,
      Hx = zx.hasOwnProperty
    function Gx(e, t, r) {
      var n = e[t]
      ;(!(Hx.call(e, t) && Ux(n, r)) || (r === void 0 && !(t in e))) &&
        $x(e, t, r)
    }
    Wp.exports = Gx
  })
  var Yp = S((XV, Kp) => {
    l()
    c()
    p()
    var Wx = _n(),
      Vx = Pr(),
      Kx = En(),
      Vp = ze(),
      Yx = Ut()
    function Jx(e, t, r, n) {
      if (!Vp(e)) return e
      t = Vx(t, e)
      for (var a = -1, o = t.length, i = o - 1, s = e; s != null && ++a < o; ) {
        var u = Yx(t[a]),
          d = r
        if (u === '__proto__' || u === 'constructor' || u === 'prototype')
          return e
        if (a != i) {
          var m = s[u]
          ;(d = n ? n(m, u, s) : void 0),
            d === void 0 && (d = Vp(m) ? m : Kx(t[a + 1]) ? [] : {})
        }
        Wx(s, u, d), (s = s[u])
      }
      return e
    }
    Kp.exports = Jx
  })
  var Lo = S((tK, Jp) => {
    l()
    c()
    p()
    var Xx = wn(),
      Qx = Yp(),
      Zx = Pr()
    function eS(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        var i = t[n],
          s = Xx(e, i)
        r(s, i) && Qx(o, Zx(i, e), s)
      }
      return o
    }
    Jp.exports = eS
  })
  var Tn = S((oK, Xp) => {
    l()
    c()
    p()
    var tS = Do(),
      rS = tS(Object.getPrototypeOf, Object)
    Xp.exports = rS
  })
  var $o = S((lK, Qp) => {
    l()
    c()
    p()
    var nS = gn(),
      aS = Tn(),
      oS = mn(),
      iS = bo(),
      uS = Object.getOwnPropertySymbols,
      sS = uS
        ? function (e) {
            for (var t = []; e; ) nS(t, oS(e)), (e = aS(e))
            return t
          }
        : iS
    Qp.exports = sS
  })
  var ed = S((fK, Zp) => {
    l()
    c()
    p()
    function lS(e) {
      var t = []
      if (e != null) for (var r in Object(e)) t.push(r)
      return t
    }
    Zp.exports = lS
  })
  var rd = S((mK, td) => {
    l()
    c()
    p()
    var cS = ze(),
      pS = xn(),
      dS = ed(),
      fS = Object.prototype,
      hS = fS.hasOwnProperty
    function yS(e) {
      if (!cS(e)) return dS(e)
      var t = pS(e),
        r = []
      for (var n in e)
        (n == 'constructor' && (t || !hS.call(e, n))) || r.push(n)
      return r
    }
    td.exports = yS
  })
  var On = S((vK, nd) => {
    l()
    c()
    p()
    var gS = vo(),
      mS = rd(),
      bS = Co()
    function AS(e) {
      return bS(e) ? gS(e, !0) : mS(e)
    }
    nd.exports = AS
  })
  var Uo = S((SK, ad) => {
    l()
    c()
    p()
    var ES = mo(),
      vS = $o(),
      DS = On()
    function CS(e) {
      return ES(e, DS, vS)
    }
    ad.exports = CS
  })
  var zo = S((_K, od) => {
    l()
    c()
    p()
    var xS = io(),
      SS = Mo(),
      FS = Lo(),
      wS = Uo()
    function BS(e, t) {
      if (e == null) return {}
      var r = xS(wS(e), function (n) {
        return [n]
      })
      return (
        (t = SS(t)),
        FS(e, r, function (n, a) {
          return t(n, a[0])
        })
      )
    }
    od.exports = BS
  })
  var Ir = S((kd, Zo) => {
    l()
    c()
    p()
    ;(function (e) {
      if (typeof kd == 'object' && typeof Zo < 'u') Zo.exports = e()
      else if (typeof define == 'function' && define.amd) define([], e)
      else {
        var t
        typeof window < 'u' || typeof window < 'u'
          ? (t = window)
          : typeof self < 'u'
          ? (t = self)
          : (t = this),
          (t.memoizerific = e())
      }
    })(function () {
      var e, t, r
      return (function n(a, o, i) {
        function s(m, b) {
          if (!o[m]) {
            if (!a[m]) {
              var h = typeof fr == 'function' && fr
              if (!b && h) return h(m, !0)
              if (u) return u(m, !0)
              var y = new Error("Cannot find module '" + m + "'")
              throw ((y.code = 'MODULE_NOT_FOUND'), y)
            }
            var E = (o[m] = { exports: {} })
            a[m][0].call(
              E.exports,
              function (A) {
                var x = a[m][1][A]
                return s(x || A)
              },
              E,
              E.exports,
              n,
              a,
              o,
              i
            )
          }
          return o[m].exports
        }
        for (var u = typeof fr == 'function' && fr, d = 0; d < i.length; d++)
          s(i[d])
        return s
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (i) {
                if (typeof Map != 'function' || i) {
                  var s = n('./similar')
                  return new s()
                } else return new Map()
              }
            },
            { './similar': 2 },
          ],
          2: [
            function (n, a, o) {
              function i() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                )
              }
              ;(i.prototype.get = function (s) {
                var u
                if (this.lastItem && this.isEqual(this.lastItem.key, s))
                  return this.lastItem.val
                if (((u = this.indexOf(s)), u >= 0))
                  return (this.lastItem = this.list[u]), this.list[u].val
              }),
                (i.prototype.set = function (s, u) {
                  var d
                  return this.lastItem && this.isEqual(this.lastItem.key, s)
                    ? ((this.lastItem.val = u), this)
                    : ((d = this.indexOf(s)),
                      d >= 0
                        ? ((this.lastItem = this.list[d]),
                          (this.list[d].val = u),
                          this)
                        : ((this.lastItem = { key: s, val: u }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this))
                }),
                (i.prototype.delete = function (s) {
                  var u
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, s) &&
                      (this.lastItem = void 0),
                    (u = this.indexOf(s)),
                    u >= 0)
                  )
                    return this.size--, this.list.splice(u, 1)[0]
                }),
                (i.prototype.has = function (s) {
                  var u
                  return this.lastItem && this.isEqual(this.lastItem.key, s)
                    ? !0
                    : ((u = this.indexOf(s)),
                      u >= 0 ? ((this.lastItem = this.list[u]), !0) : !1)
                }),
                (i.prototype.forEach = function (s, u) {
                  var d
                  for (d = 0; d < this.size; d++)
                    s.call(u || this, this.list[d].val, this.list[d].key, this)
                }),
                (i.prototype.indexOf = function (s) {
                  var u
                  for (u = 0; u < this.size; u++)
                    if (this.isEqual(this.list[u].key, s)) return u
                  return -1
                }),
                (i.prototype.isEqual = function (s, u) {
                  return s === u || (s !== s && u !== u)
                }),
                (a.exports = i)
            },
            {},
          ],
          3: [
            function (n, a, o) {
              var i = n('map-or-similar')
              a.exports = function (m) {
                var b = new i(!1),
                  h = []
                return function (y) {
                  var E = function () {
                    var A = b,
                      x,
                      F,
                      R = arguments.length - 1,
                      j = Array(R + 1),
                      L = !0,
                      w
                    if ((E.numArgs || E.numArgs === 0) && E.numArgs !== R + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      )
                    for (w = 0; w < R; w++) {
                      if (
                        ((j[w] = { cacheItem: A, arg: arguments[w] }),
                        A.has(arguments[w]))
                      ) {
                        A = A.get(arguments[w])
                        continue
                      }
                      ;(L = !1),
                        (x = new i(!1)),
                        A.set(arguments[w], x),
                        (A = x)
                    }
                    return (
                      L &&
                        (A.has(arguments[R])
                          ? (F = A.get(arguments[R]))
                          : (L = !1)),
                      L ||
                        ((F = y.apply(null, arguments)),
                        A.set(arguments[R], F)),
                      m > 0 &&
                        ((j[R] = { cacheItem: A, arg: arguments[R] }),
                        L ? s(h, j) : h.push(j),
                        h.length > m && u(h.shift())),
                      (E.wasMemoized = L),
                      (E.numArgs = R + 1),
                      F
                    )
                  }
                  return (
                    (E.limit = m),
                    (E.wasMemoized = !1),
                    (E.cache = b),
                    (E.lru = h),
                    E
                  )
                }
              }
              function s(m, b) {
                var h = m.length,
                  y = b.length,
                  E,
                  A,
                  x
                for (A = 0; A < h; A++) {
                  for (E = !0, x = 0; x < y; x++)
                    if (!d(m[A][x].arg, b[x].arg)) {
                      E = !1
                      break
                    }
                  if (E) break
                }
                m.push(m.splice(A, 1)[0])
              }
              function u(m) {
                var b = m.length,
                  h = m[b - 1],
                  y,
                  E
                for (
                  h.cacheItem.delete(h.arg), E = b - 2;
                  E >= 0 &&
                  ((h = m[E]), (y = h.cacheItem.get(h.arg)), !y || !y.size);
                  E--
                )
                  h.cacheItem.delete(h.arg)
              }
              function d(m, b) {
                return m === b || (m !== m && b !== b)
              }
            },
            { 'map-or-similar': 1 },
          ],
        },
        {},
        [3]
      )(3)
    })
  })
  var jd = S((JK, Nd) => {
    l()
    c()
    p()
    function zF(e, t, r, n) {
      for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
        if (t(e[o], o, e)) return o
      return -1
    }
    Nd.exports = zF
  })
  var qd = S((eY, Md) => {
    l()
    c()
    p()
    function HF(e) {
      return e !== e
    }
    Md.exports = HF
  })
  var $d = S((aY, Ld) => {
    l()
    c()
    p()
    function GF(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n
      return -1
    }
    Ld.exports = GF
  })
  var zd = S((sY, Ud) => {
    l()
    c()
    p()
    var WF = jd(),
      VF = qd(),
      KF = $d()
    function YF(e, t, r) {
      return t === t ? KF(e, t, r) : WF(e, VF, r)
    }
    Ud.exports = YF
  })
  var Gd = S((dY, Hd) => {
    l()
    c()
    p()
    var JF = zd()
    function XF(e, t) {
      var r = e == null ? 0 : e.length
      return !!r && JF(e, t, 0) > -1
    }
    Hd.exports = XF
  })
  var Vd = S((gY, Wd) => {
    l()
    c()
    p()
    function QF(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (r(t, e[n])) return !0
      return !1
    }
    Wd.exports = QF
  })
  var Yd = S((EY, Kd) => {
    l()
    c()
    p()
    function ZF() {}
    Kd.exports = ZF
  })
  var Xd = S((xY, Jd) => {
    l()
    c()
    p()
    var ei = So(),
      ew = Yd(),
      tw = yn(),
      rw = 1 / 0,
      nw =
        ei && 1 / tw(new ei([, -0]))[1] == rw
          ? function (e) {
              return new ei(e)
            }
          : ew
    Jd.exports = nw
  })
  var Zd = S((BY, Qd) => {
    l()
    c()
    p()
    var aw = po(),
      ow = Gd(),
      iw = Vd(),
      uw = fo(),
      sw = Xd(),
      lw = yn(),
      cw = 200
    function pw(e, t, r) {
      var n = -1,
        a = ow,
        o = e.length,
        i = !0,
        s = [],
        u = s
      if (r) (i = !1), (a = iw)
      else if (o >= cw) {
        var d = t ? null : sw(e)
        if (d) return lw(d)
        ;(i = !1), (a = uw), (u = new aw())
      } else u = t ? [] : s
      e: for (; ++n < o; ) {
        var m = e[n],
          b = t ? t(m) : m
        if (((m = r || m !== 0 ? m : 0), i && b === b)) {
          for (var h = u.length; h--; ) if (u[h] === b) continue e
          t && u.push(b), s.push(m)
        } else a(u, b, r) || (u !== s && u.push(b), s.push(m))
      }
      return s
    }
    Qd.exports = pw
  })
  var tf = S((PY, ef) => {
    l()
    c()
    p()
    var dw = Zd()
    function fw(e) {
      return e && e.length ? dw(e) : []
    }
    ef.exports = fw
  })
  var nf = S((NY, rf) => {
    l()
    c()
    p()
    function hw(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e
    }
    rf.exports = hw
  })
  var kr = S((LY, af) => {
    l()
    c()
    p()
    var yw = _n(),
      gw = Bn()
    function mw(e, t, r, n) {
      var a = !r
      r || (r = {})
      for (var o = -1, i = t.length; ++o < i; ) {
        var s = t[o],
          u = n ? n(r[s], e[s], s, r, e) : void 0
        u === void 0 && (u = e[s]), a ? gw(r, s, u) : yw(r, s, u)
      }
      return r
    }
    af.exports = mw
  })
  var uf = S((HY, of) => {
    l()
    c()
    p()
    var bw = kr(),
      Aw = Lt()
    function Ew(e, t) {
      return e && bw(t, Aw(t), e)
    }
    of.exports = Ew
  })
  var lf = S((KY, sf) => {
    l()
    c()
    p()
    var vw = kr(),
      Dw = On()
    function Cw(e, t) {
      return e && vw(t, Dw(t), e)
    }
    sf.exports = Cw
  })
  var hf = S((Nr, Ht) => {
    l()
    c()
    p()
    var xw = qe(),
      ff = typeof Nr == 'object' && Nr && !Nr.nodeType && Nr,
      cf = ff && typeof Ht == 'object' && Ht && !Ht.nodeType && Ht,
      Sw = cf && cf.exports === ff,
      pf = Sw ? xw.Buffer : void 0,
      df = pf ? pf.allocUnsafe : void 0
    function Fw(e, t) {
      if (t) return e.slice()
      var r = e.length,
        n = df ? df(r) : new e.constructor(r)
      return e.copy(n), n
    }
    Ht.exports = Fw
  })
  var gf = S((tJ, yf) => {
    l()
    c()
    p()
    function ww(e, t) {
      var r = -1,
        n = e.length
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
      return t
    }
    yf.exports = ww
  })
  var bf = S((oJ, mf) => {
    l()
    c()
    p()
    var Bw = kr(),
      _w = mn()
    function Tw(e, t) {
      return Bw(e, _w(e), t)
    }
    mf.exports = Tw
  })
  var Ef = S((lJ, Af) => {
    l()
    c()
    p()
    var Ow = kr(),
      Pw = $o()
    function Rw(e, t) {
      return Ow(e, Pw(e), t)
    }
    Af.exports = Rw
  })
  var Df = S((fJ, vf) => {
    l()
    c()
    p()
    var Iw = Object.prototype,
      kw = Iw.hasOwnProperty
    function Nw(e) {
      var t = e.length,
        r = new e.constructor(t)
      return (
        t &&
          typeof e[0] == 'string' &&
          kw.call(e, 'index') &&
          ((r.index = e.index), (r.input = e.input)),
        r
      )
    }
    vf.exports = Nw
  })
  var In = S((mJ, xf) => {
    l()
    c()
    p()
    var Cf = yo()
    function jw(e) {
      var t = new e.constructor(e.byteLength)
      return new Cf(t).set(new Cf(e)), t
    }
    xf.exports = jw
  })
  var Ff = S((vJ, Sf) => {
    l()
    c()
    p()
    var Mw = In()
    function qw(e, t) {
      var r = t ? Mw(e.buffer) : e.buffer
      return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    Sf.exports = qw
  })
  var Bf = S((SJ, wf) => {
    l()
    c()
    p()
    var Lw = /\w*$/
    function $w(e) {
      var t = new e.constructor(e.source, Lw.exec(e))
      return (t.lastIndex = e.lastIndex), t
    }
    wf.exports = $w
  })
  var Rf = S((_J, Pf) => {
    l()
    c()
    p()
    var _f = mt(),
      Tf = _f ? _f.prototype : void 0,
      Of = Tf ? Tf.valueOf : void 0
    function Uw(e) {
      return Of ? Object(Of.call(e)) : {}
    }
    Pf.exports = Uw
  })
  var kf = S((RJ, If) => {
    l()
    c()
    p()
    var zw = In()
    function Hw(e, t) {
      var r = t ? zw(e.buffer) : e.buffer
      return new e.constructor(r, e.byteOffset, e.length)
    }
    If.exports = Hw
  })
  var jf = S((jJ, Nf) => {
    l()
    c()
    p()
    var Gw = In(),
      Ww = Ff(),
      Vw = Bf(),
      Kw = Rf(),
      Yw = kf(),
      Jw = '[object Boolean]',
      Xw = '[object Date]',
      Qw = '[object Map]',
      Zw = '[object Number]',
      e5 = '[object RegExp]',
      t5 = '[object Set]',
      r5 = '[object String]',
      n5 = '[object Symbol]',
      a5 = '[object ArrayBuffer]',
      o5 = '[object DataView]',
      i5 = '[object Float32Array]',
      u5 = '[object Float64Array]',
      s5 = '[object Int8Array]',
      l5 = '[object Int16Array]',
      c5 = '[object Int32Array]',
      p5 = '[object Uint8Array]',
      d5 = '[object Uint8ClampedArray]',
      f5 = '[object Uint16Array]',
      h5 = '[object Uint32Array]'
    function y5(e, t, r) {
      var n = e.constructor
      switch (t) {
        case a5:
          return Gw(e)
        case Jw:
        case Xw:
          return new n(+e)
        case o5:
          return Ww(e, r)
        case i5:
        case u5:
        case s5:
        case l5:
        case c5:
        case p5:
        case d5:
        case f5:
        case h5:
          return Yw(e, r)
        case Qw:
          return new n()
        case Zw:
        case r5:
          return new n(e)
        case e5:
          return Vw(e)
        case t5:
          return new n()
        case n5:
          return Kw(e)
      }
    }
    Nf.exports = y5
  })
  var Lf = S(($J, qf) => {
    l()
    c()
    p()
    var g5 = ze(),
      Mf = Object.create,
      m5 = (function () {
        function e() {}
        return function (t) {
          if (!g5(t)) return {}
          if (Mf) return Mf(t)
          e.prototype = t
          var r = new e()
          return (e.prototype = void 0), r
        }
      })()
    qf.exports = m5
  })
  var Uf = S((GJ, $f) => {
    l()
    c()
    p()
    var b5 = Lf(),
      A5 = Tn(),
      E5 = xn()
    function v5(e) {
      return typeof e.constructor == 'function' && !E5(e) ? b5(A5(e)) : {}
    }
    $f.exports = v5
  })
  var Hf = S((YJ, zf) => {
    l()
    c()
    p()
    var D5 = Tr(),
      C5 = et(),
      x5 = '[object Map]'
    function S5(e) {
      return C5(e) && D5(e) == x5
    }
    zf.exports = S5
  })
  var Kf = S((ZJ, Vf) => {
    l()
    c()
    p()
    var F5 = Hf(),
      w5 = Dn(),
      Gf = Cn(),
      Wf = Gf && Gf.isMap,
      B5 = Wf ? w5(Wf) : F5
    Vf.exports = B5
  })
  var Jf = S((nX, Yf) => {
    l()
    c()
    p()
    var _5 = Tr(),
      T5 = et(),
      O5 = '[object Set]'
    function P5(e) {
      return T5(e) && _5(e) == O5
    }
    Yf.exports = P5
  })
  var e0 = S((uX, Zf) => {
    l()
    c()
    p()
    var R5 = Jf(),
      I5 = Dn(),
      Xf = Cn(),
      Qf = Xf && Xf.isSet,
      k5 = Qf ? I5(Qf) : R5
    Zf.exports = k5
  })
  var o0 = S((pX, a0) => {
    l()
    c()
    p()
    var N5 = fn(),
      j5 = nf(),
      M5 = _n(),
      q5 = uf(),
      L5 = lf(),
      $5 = hf(),
      U5 = gf(),
      z5 = bf(),
      H5 = Ef(),
      G5 = xo(),
      W5 = Uo(),
      V5 = Tr(),
      K5 = Df(),
      Y5 = jf(),
      J5 = Uf(),
      X5 = He(),
      Q5 = An(),
      Z5 = Kf(),
      e3 = ze(),
      t3 = e0(),
      r3 = Lt(),
      n3 = On(),
      a3 = 1,
      o3 = 2,
      i3 = 4,
      t0 = '[object Arguments]',
      u3 = '[object Array]',
      s3 = '[object Boolean]',
      l3 = '[object Date]',
      c3 = '[object Error]',
      r0 = '[object Function]',
      p3 = '[object GeneratorFunction]',
      d3 = '[object Map]',
      f3 = '[object Number]',
      n0 = '[object Object]',
      h3 = '[object RegExp]',
      y3 = '[object Set]',
      g3 = '[object String]',
      m3 = '[object Symbol]',
      b3 = '[object WeakMap]',
      A3 = '[object ArrayBuffer]',
      E3 = '[object DataView]',
      v3 = '[object Float32Array]',
      D3 = '[object Float64Array]',
      C3 = '[object Int8Array]',
      x3 = '[object Int16Array]',
      S3 = '[object Int32Array]',
      F3 = '[object Uint8Array]',
      w3 = '[object Uint8ClampedArray]',
      B3 = '[object Uint16Array]',
      _3 = '[object Uint32Array]',
      le = {}
    le[t0] =
      le[u3] =
      le[A3] =
      le[E3] =
      le[s3] =
      le[l3] =
      le[v3] =
      le[D3] =
      le[C3] =
      le[x3] =
      le[S3] =
      le[d3] =
      le[f3] =
      le[n0] =
      le[h3] =
      le[y3] =
      le[g3] =
      le[m3] =
      le[F3] =
      le[w3] =
      le[B3] =
      le[_3] =
        !0
    le[c3] = le[r0] = le[b3] = !1
    function kn(e, t, r, n, a, o) {
      var i,
        s = t & a3,
        u = t & o3,
        d = t & i3
      if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i
      if (!e3(e)) return e
      var m = X5(e)
      if (m) {
        if (((i = K5(e)), !s)) return U5(e, i)
      } else {
        var b = V5(e),
          h = b == r0 || b == p3
        if (Q5(e)) return $5(e, s)
        if (b == n0 || b == t0 || (h && !a)) {
          if (((i = u || h ? {} : J5(e)), !s))
            return u ? H5(e, L5(i, e)) : z5(e, q5(i, e))
        } else {
          if (!le[b]) return a ? e : {}
          i = Y5(e, b, s)
        }
      }
      o || (o = new N5())
      var y = o.get(e)
      if (y) return y
      o.set(e, i),
        t3(e)
          ? e.forEach(function (x) {
              i.add(kn(x, t, r, x, e, o))
            })
          : Z5(e) &&
            e.forEach(function (x, F) {
              i.set(F, kn(x, t, r, F, e, o))
            })
      var E = d ? (u ? W5 : G5) : u ? n3 : r3,
        A = m ? void 0 : E(e)
      return (
        j5(A || e, function (x, F) {
          A && ((F = x), (x = e[F])), M5(i, F, kn(x, t, r, F, e, o))
        }),
        i
      )
    }
    a0.exports = kn
  })
  var u0 = S((yX, i0) => {
    l()
    c()
    p()
    var T3 = o0(),
      O3 = 1,
      P3 = 4
    function R3(e) {
      return T3(e, O3 | P3)
    }
    i0.exports = R3
  })
  var g0 = S((WX, y0) => {
    l()
    c()
    p()
    function pB(e) {
      return function (t, r, n) {
        for (var a = -1, o = Object(t), i = n(t), s = i.length; s--; ) {
          var u = i[e ? s : ++a]
          if (r(o[u], u, o) === !1) break
        }
        return t
      }
    }
    y0.exports = pB
  })
  var b0 = S((JX, m0) => {
    l()
    c()
    p()
    var dB = g0(),
      fB = dB()
    m0.exports = fB
  })
  var E0 = S((eQ, A0) => {
    l()
    c()
    p()
    var hB = b0(),
      yB = Lt()
    function gB(e, t) {
      return e && hB(e, t, yB)
    }
    A0.exports = gB
  })
  var qn = S((aQ, v0) => {
    l()
    c()
    p()
    var mB = Bn(),
      bB = E0(),
      AB = Mo()
    function EB(e, t) {
      var r = {}
      return (
        (t = AB(t, 3)),
        bB(e, function (n, a, o) {
          mB(r, a, t(n, a, o))
        }),
        r
      )
    }
    v0.exports = EB
  })
  var C0 = S((sQ, D0) => {
    l()
    c()
    p()
    var vB = Lo(),
      DB = No()
    function CB(e, t) {
      return vB(e, t, function (r, n) {
        return DB(e, n)
      })
    }
    D0.exports = CB
  })
  var w0 = S((dQ, F0) => {
    l()
    c()
    p()
    var x0 = mt(),
      xB = bn(),
      SB = He(),
      S0 = x0 ? x0.isConcatSpreadable : void 0
    function FB(e) {
      return SB(e) || xB(e) || !!(S0 && e && e[S0])
    }
    F0.exports = FB
  })
  var T0 = S((gQ, _0) => {
    l()
    c()
    p()
    var wB = gn(),
      BB = w0()
    function B0(e, t, r, n, a) {
      var o = -1,
        i = e.length
      for (r || (r = BB), a || (a = []); ++o < i; ) {
        var s = e[o]
        t > 0 && r(s)
          ? t > 1
            ? B0(s, t - 1, r, n, a)
            : wB(a, s)
          : n || (a[a.length] = s)
      }
      return a
    }
    _0.exports = B0
  })
  var P0 = S((EQ, O0) => {
    l()
    c()
    p()
    var _B = T0()
    function TB(e) {
      var t = e == null ? 0 : e.length
      return t ? _B(e, 1) : []
    }
    O0.exports = TB
  })
  var I0 = S((xQ, R0) => {
    l()
    c()
    p()
    function OB(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t)
        case 1:
          return e.call(t, r[0])
        case 2:
          return e.call(t, r[0], r[1])
        case 3:
          return e.call(t, r[0], r[1], r[2])
      }
      return e.apply(t, r)
    }
    R0.exports = OB
  })
  var j0 = S((BQ, N0) => {
    l()
    c()
    p()
    var PB = I0(),
      k0 = Math.max
    function RB(e, t, r) {
      return (
        (t = k0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, o = k0(n.length - t, 0), i = Array(o);
            ++a < o;

          )
            i[a] = n[t + a]
          a = -1
          for (var s = Array(t + 1); ++a < t; ) s[a] = n[a]
          return (s[t] = r(i)), PB(e, this, s)
        }
      )
    }
    N0.exports = RB
  })
  var q0 = S((PQ, M0) => {
    l()
    c()
    p()
    function IB(e) {
      return function () {
        return e
      }
    }
    M0.exports = IB
  })
  var U0 = S((NQ, $0) => {
    l()
    c()
    p()
    var kB = q0(),
      L0 = qo(),
      NB = jo(),
      jB = L0
        ? function (e, t) {
            return L0(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: kB(t),
              writable: !0,
            })
          }
        : NB
    $0.exports = jB
  })
  var H0 = S((LQ, z0) => {
    l()
    c()
    p()
    var MB = 800,
      qB = 16,
      LB = Date.now
    function $B(e) {
      var t = 0,
        r = 0
      return function () {
        var n = LB(),
          a = qB - (n - r)
        if (((r = n), a > 0)) {
          if (++t >= MB) return arguments[0]
        } else t = 0
        return e.apply(void 0, arguments)
      }
    }
    z0.exports = $B
  })
  var W0 = S((HQ, G0) => {
    l()
    c()
    p()
    var UB = U0(),
      zB = H0(),
      HB = zB(UB)
    G0.exports = HB
  })
  var K0 = S((KQ, V0) => {
    l()
    c()
    p()
    var GB = P0(),
      WB = j0(),
      VB = W0()
    function KB(e) {
      return VB(WB(e, void 0, GB), e + '')
    }
    V0.exports = KB
  })
  var J0 = S((QQ, Y0) => {
    l()
    c()
    p()
    var YB = C0(),
      JB = K0(),
      XB = JB(function (e, t) {
        return e == null ? {} : YB(e, t)
      })
    Y0.exports = XB
  })
  var $n = S((rZ, rh) => {
    'use strict'
    l()
    c()
    p()
    function Ln(e) {
      return Array.prototype.slice.apply(e)
    }
    var eh = 'pending',
      X0 = 'resolved',
      Q0 = 'rejected'
    function re(e) {
      ;(this.status = eh),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e &&
          e.call(this, this._continueWith.bind(this), this._failWith.bind(this))
    }
    function qr(e) {
      return e && typeof e.then == 'function'
    }
    function QB(e) {
      return e
    }
    re.prototype = {
      then: function (e, t) {
        var r = re.unresolved()._setParent(this)
        if (this._isRejected()) {
          if (this._paused)
            return (
              this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r
            )
          if (t)
            try {
              var n = t(this._error)
              return qr(n)
                ? (this._chainPromiseData(n, r), r)
                : re.resolve(n)._setParent(this)
            } catch (a) {
              return re.reject(a)._setParent(this)
            }
          return re.reject(this._error)._setParent(this)
        }
        return (
          this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
          this._runResolutions(),
          r
        )
      },
      catch: function (e) {
        if (this._isResolved()) return re.resolve(this._data)._setParent(this)
        var t = re.unresolved()._setParent(this)
        return (
          this._continuations.push({ promise: t, catchFn: e }),
          this._runRejections(),
          t
        )
      },
      finally: function (e) {
        var t = !1
        function r(n, a) {
          if (!t) {
            ;(t = !0), e || (e = QB)
            var o = e(n)
            return qr(o)
              ? o.then(function () {
                  if (a) throw a
                  return n
                })
              : n
          }
        }
        return this.then(function (n) {
          return r(n)
        }).catch(function (n) {
          return r(null, n)
        })
      },
      pause: function () {
        return (this._paused = !0), this
      },
      resume: function () {
        var e = this._findFirstPaused()
        return (
          e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
        )
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = { promise: t.promise, children: t.promise._findAncestry() }
            e.push(r)
          }
          return e
        }, [])
      },
      _setParent: function (e) {
        if (this._parent) throw new Error('parent already set')
        return (this._parent = e), this
      },
      _continueWith: function (e) {
        var t = this._findFirstPending()
        t && ((t._data = e), t._setResolved())
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending()
        })
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused
        })
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent)
        return r
      },
      _failWith: function (e) {
        var t = this._findFirstPending()
        t && ((t._error = e), t._setRejected())
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length)
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e)
                r._handleUserFunctionResult(a, n.promise)
              } catch (o) {
                n.promise.reject(o)
              }
            else n.promise.reject(e)
          })
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations(),
            t = this._data,
            r = this
          if (
            (e.forEach(function (n) {
              if (n.nextFn)
                try {
                  var a = n.nextFn(t)
                  r._handleUserFunctionResult(a, n.promise)
                } catch (o) {
                  r._handleResolutionError(o, n)
                }
              else n.promise && n.promise.resolve(t)
            }),
            qr(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data)
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e)
            return
          } catch (r) {
            e = r
          }
        t.promise && t.promise.reject(e)
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this
        return e
          .then(function (r) {
            ;(t._data = r), t._runResolutions()
          })
          .catch(function (r) {
            ;(t._error = r), t._setRejected(), t._runRejections()
          })
      },
      _handleUserFunctionResult: function (e, t) {
        qr(e) ? this._chainPromiseData(e, t) : t.resolve(e)
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r)
        }).catch(function (r) {
          t.reject(r)
        })
      },
      _setResolved: function () {
        ;(this.status = X0), this._paused || this._runResolutions()
      },
      _setRejected: function () {
        ;(this.status = Q0), this._paused || this._runRejections()
      },
      _isPending: function () {
        return this.status === eh
      },
      _isResolved: function () {
        return this.status === X0
      },
      _isRejected: function () {
        return this.status === Q0
      },
    }
    re.resolve = function (e) {
      return new re(function (t, r) {
        qr(e)
          ? e
              .then(function (n) {
                t(n)
              })
              .catch(function (n) {
                r(n)
              })
          : t(e)
      })
    }
    re.reject = function (e) {
      return new re(function (t, r) {
        r(e)
      })
    }
    re.unresolved = function () {
      return new re(function (e, t) {
        ;(this.resolve = e), (this.reject = t)
      })
    }
    re.all = function () {
      var e = Ln(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && t(n)
                },
                i = !1,
                s = function (u) {
                  i || ((i = !0), r(u))
                }
              e.forEach(function (u, d) {
                re.resolve(u)
                  .then(function (m) {
                    ;(n[d] = m), (a += 1), o()
                  })
                  .catch(function (m) {
                    s(m)
                  })
              })
            })
          : re.resolve([])
      )
    }
    function Z0(e) {
      return typeof window < 'u' && 'AggregateError' in window
        ? new window.AggregateError(e)
        : { errors: e }
    }
    re.any = function () {
      var e = Ln(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && r(Z0(n))
                },
                i = !1,
                s = function (u) {
                  i || ((i = !0), t(u))
                }
              e.forEach(function (u, d) {
                re.resolve(u)
                  .then(function (m) {
                    s(m)
                  })
                  .catch(function (m) {
                    ;(n[d] = m), (a += 1), o()
                  })
              })
            })
          : re.reject(Z0([]))
      )
    }
    re.allSettled = function () {
      var e = Ln(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  ;(n += 1), n === e.length && t(r)
                }
              e.forEach(function (o, i) {
                re.resolve(o)
                  .then(function (s) {
                    ;(r[i] = { status: 'fulfilled', value: s }), a()
                  })
                  .catch(function (s) {
                    ;(r[i] = { status: 'rejected', reason: s }), a()
                  })
              })
            })
          : re.resolve([])
      )
    }
    if (Promise === re)
      throw new Error(
        'Please use SynchronousPromise.installGlobally() to install globally'
      )
    var th = Promise
    re.installGlobally = function (e) {
      if (Promise === re) return e
      var t = ZB(e)
      return (Promise = re), t
    }
    re.uninstallGlobally = function () {
      Promise === re && (Promise = th)
    }
    function ZB(e) {
      if (typeof e > 'u' || e.__patched) return e
      var t = e
      return (
        (e = function () {
          var r = th
          t.apply(this, Ln(arguments))
        }),
        (e.__patched = !0),
        e
      )
    }
    rh.exports = { SynchronousPromise: re }
  })
  var ni = S((hZ, ah) => {
    l()
    c()
    p()
    var e_ = bt(),
      t_ = Tn(),
      r_ = et(),
      n_ = '[object Object]',
      a_ = Function.prototype,
      o_ = Object.prototype,
      nh = a_.toString,
      i_ = o_.hasOwnProperty,
      u_ = nh.call(Object)
    function s_(e) {
      if (!r_(e) || e_(e) != n_) return !1
      var t = t_(e)
      if (t === null) return !0
      var r = i_.call(t, 'constructor') && t.constructor
      return typeof r == 'function' && r instanceof r && nh.call(r) == u_
    }
    ah.exports = s_
  })
  var uh = S((CZ, ih) => {
    l()
    c()
    p()
    ih.exports = b_
    function b_(e, t) {
      if (ai('noDeprecation')) return e
      var r = !1
      function n() {
        if (!r) {
          if (ai('throwDeprecation')) throw new Error(t)
          ai('traceDeprecation') ? console.trace(t) : console.warn(t), (r = !0)
        }
        return e.apply(this, arguments)
      }
      return n
    }
    function ai(e) {
      try {
        if (!window.localStorage) return !1
      } catch {
        return !1
      }
      var t = window.localStorage[e]
      return t == null ? !1 : String(t).toLowerCase() === 'true'
    }
  })
  var hh = S((HZ, fh) => {
    'use strict'
    l()
    c()
    p()
    fh.exports = function () {
      if (
        typeof Symbol != 'function' ||
        typeof Object.getOwnPropertySymbols != 'function'
      )
        return !1
      if (typeof Symbol.iterator == 'symbol') return !0
      var t = {},
        r = Symbol('test'),
        n = Object(r)
      if (
        typeof r == 'string' ||
        Object.prototype.toString.call(r) !== '[object Symbol]' ||
        Object.prototype.toString.call(n) !== '[object Symbol]'
      )
        return !1
      var a = 42
      t[r] = a
      for (r in t) return !1
      if (
        (typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames == 'function' &&
          Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1
      var o = Object.getOwnPropertySymbols(t)
      if (
        o.length !== 1 ||
        o[0] !== r ||
        !Object.prototype.propertyIsEnumerable.call(t, r)
      )
        return !1
      if (typeof Object.getOwnPropertyDescriptor == 'function') {
        var i = Object.getOwnPropertyDescriptor(t, r)
        if (i.value !== a || i.enumerable !== !0) return !1
      }
      return !0
    }
  })
  var mh = S((KZ, gh) => {
    'use strict'
    l()
    c()
    p()
    var yh = typeof Symbol < 'u' && Symbol,
      k_ = hh()
    gh.exports = function () {
      return typeof yh != 'function' ||
        typeof Symbol != 'function' ||
        typeof yh('foo') != 'symbol' ||
        typeof Symbol('bar') != 'symbol'
        ? !1
        : k_()
    }
  })
  var Ah = S((QZ, bh) => {
    'use strict'
    l()
    c()
    p()
    var N_ = 'Function.prototype.bind called on incompatible ',
      si = Array.prototype.slice,
      j_ = Object.prototype.toString,
      M_ = '[object Function]'
    bh.exports = function (t) {
      var r = this
      if (typeof r != 'function' || j_.call(r) !== M_)
        throw new TypeError(N_ + r)
      for (
        var n = si.call(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              var m = r.apply(this, n.concat(si.call(arguments)))
              return Object(m) === m ? m : this
            } else return r.apply(t, n.concat(si.call(arguments)))
          },
          i = Math.max(0, r.length - n.length),
          s = [],
          u = 0;
        u < i;
        u++
      )
        s.push('$' + u)
      if (
        ((a = Function(
          'binder',
          'return function (' +
            s.join(',') +
            '){ return binder.apply(this,arguments); }'
        )(o)),
        r.prototype)
      ) {
        var d = function () {}
        ;(d.prototype = r.prototype),
          (a.prototype = new d()),
          (d.prototype = null)
      }
      return a
    }
  })
  var Wn = S((ree, Eh) => {
    'use strict'
    l()
    c()
    p()
    var q_ = Ah()
    Eh.exports = Function.prototype.bind || q_
  })
  var Dh = S((iee, vh) => {
    'use strict'
    l()
    c()
    p()
    var L_ = Wn()
    vh.exports = L_.call(Function.call, Object.prototype.hasOwnProperty)
  })
  var Yn = S((cee, wh) => {
    'use strict'
    l()
    c()
    p()
    var ee,
      Jt = SyntaxError,
      Fh = Function,
      Yt = TypeError,
      li = function (e) {
        try {
          return Fh('"use strict"; return (' + e + ').constructor;')()
        } catch {}
      },
      Dt = Object.getOwnPropertyDescriptor
    if (Dt)
      try {
        Dt({}, '')
      } catch {
        Dt = null
      }
    var ci = function () {
        throw new Yt()
      },
      $_ = Dt
        ? (function () {
            try {
              return arguments.callee, ci
            } catch {
              try {
                return Dt(arguments, 'callee').get
              } catch {
                return ci
              }
            }
          })()
        : ci,
      Vt = mh()(),
      We =
        Object.getPrototypeOf ||
        function (e) {
          return e.__proto__
        },
      Kt = {},
      U_ = typeof Uint8Array > 'u' ? ee : We(Uint8Array),
      Ct = {
        '%AggregateError%': typeof AggregateError > 'u' ? ee : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? ee : ArrayBuffer,
        '%ArrayIteratorPrototype%': Vt ? We([][Symbol.iterator]()) : ee,
        '%AsyncFromSyncIteratorPrototype%': ee,
        '%AsyncFunction%': Kt,
        '%AsyncGenerator%': Kt,
        '%AsyncGeneratorFunction%': Kt,
        '%AsyncIteratorPrototype%': Kt,
        '%Atomics%': typeof Atomics > 'u' ? ee : Atomics,
        '%BigInt%': typeof BigInt > 'u' ? ee : BigInt,
        '%BigInt64Array%': typeof BigInt64Array > 'u' ? ee : BigInt64Array,
        '%BigUint64Array%': typeof BigUint64Array > 'u' ? ee : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': typeof DataView > 'u' ? ee : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': typeof Float32Array > 'u' ? ee : Float32Array,
        '%Float64Array%': typeof Float64Array > 'u' ? ee : Float64Array,
        '%FinalizationRegistry%':
          typeof FinalizationRegistry > 'u' ? ee : FinalizationRegistry,
        '%Function%': Fh,
        '%GeneratorFunction%': Kt,
        '%Int8Array%': typeof Int8Array > 'u' ? ee : Int8Array,
        '%Int16Array%': typeof Int16Array > 'u' ? ee : Int16Array,
        '%Int32Array%': typeof Int32Array > 'u' ? ee : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': Vt ? We(We([][Symbol.iterator]())) : ee,
        '%JSON%': typeof JSON == 'object' ? JSON : ee,
        '%Map%': typeof Map > 'u' ? ee : Map,
        '%MapIteratorPrototype%':
          typeof Map > 'u' || !Vt ? ee : We(new Map()[Symbol.iterator]()),
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': typeof Promise > 'u' ? ee : Promise,
        '%Proxy%': typeof Proxy > 'u' ? ee : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': typeof Reflect > 'u' ? ee : Reflect,
        '%RegExp%': RegExp,
        '%Set%': typeof Set > 'u' ? ee : Set,
        '%SetIteratorPrototype%':
          typeof Set > 'u' || !Vt ? ee : We(new Set()[Symbol.iterator]()),
        '%SharedArrayBuffer%':
          typeof SharedArrayBuffer > 'u' ? ee : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': Vt ? We(''[Symbol.iterator]()) : ee,
        '%Symbol%': Vt ? Symbol : ee,
        '%SyntaxError%': Jt,
        '%ThrowTypeError%': $_,
        '%TypedArray%': U_,
        '%TypeError%': Yt,
        '%Uint8Array%': typeof Uint8Array > 'u' ? ee : Uint8Array,
        '%Uint8ClampedArray%':
          typeof Uint8ClampedArray > 'u' ? ee : Uint8ClampedArray,
        '%Uint16Array%': typeof Uint16Array > 'u' ? ee : Uint16Array,
        '%Uint32Array%': typeof Uint32Array > 'u' ? ee : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': typeof WeakMap > 'u' ? ee : WeakMap,
        '%WeakRef%': typeof WeakRef > 'u' ? ee : WeakRef,
        '%WeakSet%': typeof WeakSet > 'u' ? ee : WeakSet,
      }
    try {
      null.error
    } catch (e) {
      ;(Ch = We(We(e))), (Ct['%Error.prototype%'] = Ch)
    }
    var Ch,
      z_ = function e(t) {
        var r
        if (t === '%AsyncFunction%') r = li('async function () {}')
        else if (t === '%GeneratorFunction%') r = li('function* () {}')
        else if (t === '%AsyncGeneratorFunction%')
          r = li('async function* () {}')
        else if (t === '%AsyncGenerator%') {
          var n = e('%AsyncGeneratorFunction%')
          n && (r = n.prototype)
        } else if (t === '%AsyncIteratorPrototype%') {
          var a = e('%AsyncGenerator%')
          a && (r = We(a.prototype))
        }
        return (Ct[t] = r), r
      },
      xh = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': [
          'AsyncGeneratorFunction',
          'prototype',
          'prototype',
        ],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype'],
      },
      zr = Wn(),
      Vn = Dh(),
      H_ = zr.call(Function.call, Array.prototype.concat),
      G_ = zr.call(Function.apply, Array.prototype.splice),
      Sh = zr.call(Function.call, String.prototype.replace),
      Kn = zr.call(Function.call, String.prototype.slice),
      W_ = zr.call(Function.call, RegExp.prototype.exec),
      V_ =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      K_ = /\\(\\)?/g,
      Y_ = function (t) {
        var r = Kn(t, 0, 1),
          n = Kn(t, -1)
        if (r === '%' && n !== '%')
          throw new Jt('invalid intrinsic syntax, expected closing `%`')
        if (n === '%' && r !== '%')
          throw new Jt('invalid intrinsic syntax, expected opening `%`')
        var a = []
        return (
          Sh(t, V_, function (o, i, s, u) {
            a[a.length] = s ? Sh(u, K_, '$1') : i || o
          }),
          a
        )
      },
      J_ = function (t, r) {
        var n = t,
          a
        if ((Vn(xh, n) && ((a = xh[n]), (n = '%' + a[0] + '%')), Vn(Ct, n))) {
          var o = Ct[n]
          if ((o === Kt && (o = z_(n)), typeof o > 'u' && !r))
            throw new Yt(
              'intrinsic ' +
                t +
                ' exists, but is not available. Please file an issue!'
            )
          return { alias: a, name: n, value: o }
        }
        throw new Jt('intrinsic ' + t + ' does not exist!')
      }
    wh.exports = function (t, r) {
      if (typeof t != 'string' || t.length === 0)
        throw new Yt('intrinsic name must be a non-empty string')
      if (arguments.length > 1 && typeof r != 'boolean')
        throw new Yt('"allowMissing" argument must be a boolean')
      if (W_(/^%?[^%]*%?$/, t) === null)
        throw new Jt(
          '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
        )
      var n = Y_(t),
        a = n.length > 0 ? n[0] : '',
        o = J_('%' + a + '%', r),
        i = o.name,
        s = o.value,
        u = !1,
        d = o.alias
      d && ((a = d[0]), G_(n, H_([0, 1], d)))
      for (var m = 1, b = !0; m < n.length; m += 1) {
        var h = n[m],
          y = Kn(h, 0, 1),
          E = Kn(h, -1)
        if (
          (y === '"' ||
            y === "'" ||
            y === '`' ||
            E === '"' ||
            E === "'" ||
            E === '`') &&
          y !== E
        )
          throw new Jt('property names with quotes must have matching quotes')
        if (
          ((h === 'constructor' || !b) && (u = !0),
          (a += '.' + h),
          (i = '%' + a + '%'),
          Vn(Ct, i))
        )
          s = Ct[i]
        else if (s != null) {
          if (!(h in s)) {
            if (!r)
              throw new Yt(
                'base intrinsic for ' +
                  t +
                  ' exists, but the property is not available.'
              )
            return
          }
          if (Dt && m + 1 >= n.length) {
            var A = Dt(s, h)
            ;(b = !!A),
              b && 'get' in A && !('originalValue' in A.get)
                ? (s = A.get)
                : (s = s[h])
          } else (b = Vn(s, h)), (s = s[h])
          b && !u && (Ct[i] = s)
        }
      }
      return s
    }
  })
  var Rh = S((hee, Jn) => {
    'use strict'
    l()
    c()
    p()
    var pi = Wn(),
      Xt = Yn(),
      Th = Xt('%Function.prototype.apply%'),
      Oh = Xt('%Function.prototype.call%'),
      Ph = Xt('%Reflect.apply%', !0) || pi.call(Oh, Th),
      Bh = Xt('%Object.getOwnPropertyDescriptor%', !0),
      xt = Xt('%Object.defineProperty%', !0),
      X_ = Xt('%Math.max%')
    if (xt)
      try {
        xt({}, 'a', { value: 1 })
      } catch {
        xt = null
      }
    Jn.exports = function (t) {
      var r = Ph(pi, Oh, arguments)
      if (Bh && xt) {
        var n = Bh(r, 'length')
        n.configurable &&
          xt(r, 'length', {
            value: 1 + X_(0, t.length - (arguments.length - 1)),
          })
      }
      return r
    }
    var _h = function () {
      return Ph(pi, Th, arguments)
    }
    xt ? xt(Jn.exports, 'apply', { value: _h }) : (Jn.exports.apply = _h)
  })
  var jh = S((bee, Nh) => {
    'use strict'
    l()
    c()
    p()
    var Ih = Yn(),
      kh = Rh(),
      Q_ = kh(Ih('String.prototype.indexOf'))
    Nh.exports = function (t, r) {
      var n = Ih(t, !!r)
      return typeof n == 'function' && Q_(t, '.prototype.') > -1 ? kh(n) : n
    }
  })
  var Mh = S(() => {
    l()
    c()
    p()
  })
  var ay = S((wee, ny) => {
    l()
    c()
    p()
    var vi = typeof Map == 'function' && Map.prototype,
      di =
        Object.getOwnPropertyDescriptor && vi
          ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
          : null,
      Qn = vi && di && typeof di.get == 'function' ? di.get : null,
      qh = vi && Map.prototype.forEach,
      Di = typeof Set == 'function' && Set.prototype,
      fi =
        Object.getOwnPropertyDescriptor && Di
          ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
          : null,
      Zn = Di && fi && typeof fi.get == 'function' ? fi.get : null,
      Lh = Di && Set.prototype.forEach,
      Z_ = typeof WeakMap == 'function' && WeakMap.prototype,
      Gr = Z_ ? WeakMap.prototype.has : null,
      eT = typeof WeakSet == 'function' && WeakSet.prototype,
      Wr = eT ? WeakSet.prototype.has : null,
      tT = typeof WeakRef == 'function' && WeakRef.prototype,
      $h = tT ? WeakRef.prototype.deref : null,
      rT = Boolean.prototype.valueOf,
      nT = Object.prototype.toString,
      aT = Function.prototype.toString,
      oT = String.prototype.match,
      Ci = String.prototype.slice,
      pt = String.prototype.replace,
      iT = String.prototype.toUpperCase,
      Uh = String.prototype.toLowerCase,
      Xh = RegExp.prototype.test,
      zh = Array.prototype.concat,
      Ve = Array.prototype.join,
      uT = Array.prototype.slice,
      Hh = Math.floor,
      gi = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
      hi = Object.getOwnPropertySymbols,
      mi =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? Symbol.prototype.toString
          : null,
      Qt = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
      Be =
        typeof Symbol == 'function' &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === Qt || 'symbol')
          ? Symbol.toStringTag
          : null,
      Qh = Object.prototype.propertyIsEnumerable,
      Gh =
        (typeof Reflect == 'function'
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__
            }
          : null)
    function Wh(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e !== e ||
        (e && e > -1e3 && e < 1e3) ||
        Xh.call(/e/, t)
      )
        return t
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
      if (typeof e == 'number') {
        var n = e < 0 ? -Hh(-e) : Hh(e)
        if (n !== e) {
          var a = String(n),
            o = Ci.call(t, a.length + 1)
          return (
            pt.call(a, r, '$&_') +
            '.' +
            pt.call(pt.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
          )
        }
      }
      return pt.call(t, r, '$&_')
    }
    var bi = Mh(),
      Vh = bi.custom,
      Kh = ey(Vh) ? Vh : null
    ny.exports = function e(t, r, n, a) {
      var o = r || {}
      if (
        ct(o, 'quoteStyle') &&
        o.quoteStyle !== 'single' &&
        o.quoteStyle !== 'double'
      )
        throw new TypeError('option "quoteStyle" must be "single" or "double"')
      if (
        ct(o, 'maxStringLength') &&
        (typeof o.maxStringLength == 'number'
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        )
      var i = ct(o, 'customInspect') ? o.customInspect : !0
      if (typeof i != 'boolean' && i !== 'symbol')
        throw new TypeError(
          'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
        )
      if (
        ct(o, 'indent') &&
        o.indent !== null &&
        o.indent !== '	' &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`'
        )
      if (ct(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
        throw new TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`'
        )
      var s = o.numericSeparator
      if (typeof t > 'u') return 'undefined'
      if (t === null) return 'null'
      if (typeof t == 'boolean') return t ? 'true' : 'false'
      if (typeof t == 'string') return ry(t, o)
      if (typeof t == 'number') {
        if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0'
        var u = String(t)
        return s ? Wh(t, u) : u
      }
      if (typeof t == 'bigint') {
        var d = String(t) + 'n'
        return s ? Wh(t, d) : d
      }
      var m = typeof o.depth > 'u' ? 5 : o.depth
      if ((typeof n > 'u' && (n = 0), n >= m && m > 0 && typeof t == 'object'))
        return Ai(t) ? '[Array]' : '[Object]'
      var b = ST(o, n)
      if (typeof a > 'u') a = []
      else if (ty(a, t) >= 0) return '[Circular]'
      function h(W, _, B) {
        if ((_ && ((a = uT.call(a)), a.push(_)), B)) {
          var k = { depth: o.depth }
          return (
            ct(o, 'quoteStyle') && (k.quoteStyle = o.quoteStyle),
            e(W, k, n + 1, a)
          )
        }
        return e(W, o, n + 1, a)
      }
      if (typeof t == 'function' && !Yh(t)) {
        var y = gT(t),
          E = Xn(t, h)
        return (
          '[Function' +
          (y ? ': ' + y : ' (anonymous)') +
          ']' +
          (E.length > 0 ? ' { ' + Ve.call(E, ', ') + ' }' : '')
        )
      }
      if (ey(t)) {
        var A = Qt
          ? pt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1')
          : mi.call(t)
        return typeof t == 'object' && !Qt ? Hr(A) : A
      }
      if (DT(t)) {
        for (
          var x = '<' + Uh.call(String(t.nodeName)),
            F = t.attributes || [],
            R = 0;
          R < F.length;
          R++
        )
          x += ' ' + F[R].name + '=' + Zh(sT(F[R].value), 'double', o)
        return (
          (x += '>'),
          t.childNodes && t.childNodes.length && (x += '...'),
          (x += '</' + Uh.call(String(t.nodeName)) + '>'),
          x
        )
      }
      if (Ai(t)) {
        if (t.length === 0) return '[]'
        var j = Xn(t, h)
        return b && !xT(j)
          ? '[' + Ei(j, b) + ']'
          : '[ ' + Ve.call(j, ', ') + ' ]'
      }
      if (cT(t)) {
        var L = Xn(t, h)
        return !('cause' in Error.prototype) &&
          'cause' in t &&
          !Qh.call(t, 'cause')
          ? '{ [' +
              String(t) +
              '] ' +
              Ve.call(zh.call('[cause]: ' + h(t.cause), L), ', ') +
              ' }'
          : L.length === 0
          ? '[' + String(t) + ']'
          : '{ [' + String(t) + '] ' + Ve.call(L, ', ') + ' }'
      }
      if (typeof t == 'object' && i) {
        if (Kh && typeof t[Kh] == 'function' && bi)
          return bi(t, { depth: m - n })
        if (i !== 'symbol' && typeof t.inspect == 'function') return t.inspect()
      }
      if (mT(t)) {
        var w = []
        return (
          qh &&
            qh.call(t, function (W, _) {
              w.push(h(_, t, !0) + ' => ' + h(W, t))
            }),
          Jh('Map', Qn.call(t), w, b)
        )
      }
      if (ET(t)) {
        var M = []
        return (
          Lh &&
            Lh.call(t, function (W) {
              M.push(h(W, t))
            }),
          Jh('Set', Zn.call(t), M, b)
        )
      }
      if (bT(t)) return yi('WeakMap')
      if (vT(t)) return yi('WeakSet')
      if (AT(t)) return yi('WeakRef')
      if (dT(t)) return Hr(h(Number(t)))
      if (hT(t)) return Hr(h(gi.call(t)))
      if (fT(t)) return Hr(rT.call(t))
      if (pT(t)) return Hr(h(String(t)))
      if (!lT(t) && !Yh(t)) {
        var I = Xn(t, h),
          U = Gh
            ? Gh(t) === Object.prototype
            : t instanceof Object || t.constructor === Object,
          J = t instanceof Object ? '' : 'null prototype',
          z =
            !U && Be && Object(t) === t && Be in t
              ? Ci.call(dt(t), 8, -1)
              : J
              ? 'Object'
              : '',
          ue =
            U || typeof t.constructor != 'function'
              ? ''
              : t.constructor.name
              ? t.constructor.name + ' '
              : '',
          Q =
            ue +
            (z || J
              ? '[' + Ve.call(zh.call([], z || [], J || []), ': ') + '] '
              : '')
        return I.length === 0
          ? Q + '{}'
          : b
          ? Q + '{' + Ei(I, b) + '}'
          : Q + '{ ' + Ve.call(I, ', ') + ' }'
      }
      return String(t)
    }
    function Zh(e, t, r) {
      var n = (r.quoteStyle || t) === 'double' ? '"' : "'"
      return n + e + n
    }
    function sT(e) {
      return pt.call(String(e), /"/g, '&quot;')
    }
    function Ai(e) {
      return (
        dt(e) === '[object Array]' &&
        (!Be || !(typeof e == 'object' && Be in e))
      )
    }
    function lT(e) {
      return (
        dt(e) === '[object Date]' && (!Be || !(typeof e == 'object' && Be in e))
      )
    }
    function Yh(e) {
      return (
        dt(e) === '[object RegExp]' &&
        (!Be || !(typeof e == 'object' && Be in e))
      )
    }
    function cT(e) {
      return (
        dt(e) === '[object Error]' &&
        (!Be || !(typeof e == 'object' && Be in e))
      )
    }
    function pT(e) {
      return (
        dt(e) === '[object String]' &&
        (!Be || !(typeof e == 'object' && Be in e))
      )
    }
    function dT(e) {
      return (
        dt(e) === '[object Number]' &&
        (!Be || !(typeof e == 'object' && Be in e))
      )
    }
    function fT(e) {
      return (
        dt(e) === '[object Boolean]' &&
        (!Be || !(typeof e == 'object' && Be in e))
      )
    }
    function ey(e) {
      if (Qt) return e && typeof e == 'object' && e instanceof Symbol
      if (typeof e == 'symbol') return !0
      if (!e || typeof e != 'object' || !mi) return !1
      try {
        return mi.call(e), !0
      } catch {}
      return !1
    }
    function hT(e) {
      if (!e || typeof e != 'object' || !gi) return !1
      try {
        return gi.call(e), !0
      } catch {}
      return !1
    }
    var yT =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this
      }
    function ct(e, t) {
      return yT.call(e, t)
    }
    function dt(e) {
      return nT.call(e)
    }
    function gT(e) {
      if (e.name) return e.name
      var t = oT.call(aT.call(e), /^function\s*([\w$]+)/)
      return t ? t[1] : null
    }
    function ty(e, t) {
      if (e.indexOf) return e.indexOf(t)
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
      return -1
    }
    function mT(e) {
      if (!Qn || !e || typeof e != 'object') return !1
      try {
        Qn.call(e)
        try {
          Zn.call(e)
        } catch {
          return !0
        }
        return e instanceof Map
      } catch {}
      return !1
    }
    function bT(e) {
      if (!Gr || !e || typeof e != 'object') return !1
      try {
        Gr.call(e, Gr)
        try {
          Wr.call(e, Wr)
        } catch {
          return !0
        }
        return e instanceof WeakMap
      } catch {}
      return !1
    }
    function AT(e) {
      if (!$h || !e || typeof e != 'object') return !1
      try {
        return $h.call(e), !0
      } catch {}
      return !1
    }
    function ET(e) {
      if (!Zn || !e || typeof e != 'object') return !1
      try {
        Zn.call(e)
        try {
          Qn.call(e)
        } catch {
          return !0
        }
        return e instanceof Set
      } catch {}
      return !1
    }
    function vT(e) {
      if (!Wr || !e || typeof e != 'object') return !1
      try {
        Wr.call(e, Wr)
        try {
          Gr.call(e, Gr)
        } catch {
          return !0
        }
        return e instanceof WeakSet
      } catch {}
      return !1
    }
    function DT(e) {
      return !e || typeof e != 'object'
        ? !1
        : typeof HTMLElement < 'u' && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == 'string' && typeof e.getAttribute == 'function'
    }
    function ry(e, t) {
      if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength,
          n = '... ' + r + ' more character' + (r > 1 ? 's' : '')
        return ry(Ci.call(e, 0, t.maxStringLength), t) + n
      }
      var a = pt.call(pt.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, CT)
      return Zh(a, 'single', t)
    }
    function CT(e) {
      var t = e.charCodeAt(0),
        r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t]
      return r
        ? '\\' + r
        : '\\x' + (t < 16 ? '0' : '') + iT.call(t.toString(16))
    }
    function Hr(e) {
      return 'Object(' + e + ')'
    }
    function yi(e) {
      return e + ' { ? }'
    }
    function Jh(e, t, r, n) {
      var a = n ? Ei(r, n) : Ve.call(r, ', ')
      return e + ' (' + t + ') {' + a + '}'
    }
    function xT(e) {
      for (var t = 0; t < e.length; t++)
        if (
          ty(
            e[t],
            `
`
          ) >= 0
        )
          return !1
      return !0
    }
    function ST(e, t) {
      var r
      if (e.indent === '	') r = '	'
      else if (typeof e.indent == 'number' && e.indent > 0)
        r = Ve.call(Array(e.indent + 1), ' ')
      else return null
      return { base: r, prev: Ve.call(Array(t + 1), r) }
    }
    function Ei(e, t) {
      if (e.length === 0) return ''
      var r =
        `
` +
        t.prev +
        t.base
      return (
        r +
        Ve.call(e, ',' + r) +
        `
` +
        t.prev
      )
    }
    function Xn(e, t) {
      var r = Ai(e),
        n = []
      if (r) {
        n.length = e.length
        for (var a = 0; a < e.length; a++) n[a] = ct(e, a) ? t(e[a], e) : ''
      }
      var o = typeof hi == 'function' ? hi(e) : [],
        i
      if (Qt) {
        i = {}
        for (var s = 0; s < o.length; s++) i['$' + o[s]] = o[s]
      }
      for (var u in e)
        ct(e, u) &&
          ((r && String(Number(u)) === u && u < e.length) ||
            (Qt && i['$' + u] instanceof Symbol) ||
            (Xh.call(/[^\w$]/, u)
              ? n.push(t(u, e) + ': ' + t(e[u], e))
              : n.push(u + ': ' + t(e[u], e))))
      if (typeof hi == 'function')
        for (var d = 0; d < o.length; d++)
          Qh.call(e, o[d]) && n.push('[' + t(o[d]) + ']: ' + t(e[o[d]], e))
      return n
    }
  })
  var iy = S((Oee, oy) => {
    'use strict'
    l()
    c()
    p()
    var xi = Yn(),
      Zt = jh(),
      FT = ay(),
      wT = xi('%TypeError%'),
      ea = xi('%WeakMap%', !0),
      ta = xi('%Map%', !0),
      BT = Zt('WeakMap.prototype.get', !0),
      _T = Zt('WeakMap.prototype.set', !0),
      TT = Zt('WeakMap.prototype.has', !0),
      OT = Zt('Map.prototype.get', !0),
      PT = Zt('Map.prototype.set', !0),
      RT = Zt('Map.prototype.has', !0),
      Si = function (e, t) {
        for (var r = e, n; (n = r.next) !== null; r = n)
          if (n.key === t)
            return (r.next = n.next), (n.next = e.next), (e.next = n), n
      },
      IT = function (e, t) {
        var r = Si(e, t)
        return r && r.value
      },
      kT = function (e, t, r) {
        var n = Si(e, t)
        n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r })
      },
      NT = function (e, t) {
        return !!Si(e, t)
      }
    oy.exports = function () {
      var t,
        r,
        n,
        a = {
          assert: function (o) {
            if (!a.has(o))
              throw new wT('Side channel does not contain ' + FT(o))
          },
          get: function (o) {
            if (ea && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return BT(t, o)
            } else if (ta) {
              if (r) return OT(r, o)
            } else if (n) return IT(n, o)
          },
          has: function (o) {
            if (ea && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return TT(t, o)
            } else if (ta) {
              if (r) return RT(r, o)
            } else if (n) return NT(n, o)
            return !1
          },
          set: function (o, i) {
            ea && o && (typeof o == 'object' || typeof o == 'function')
              ? (t || (t = new ea()), _T(t, o, i))
              : ta
              ? (r || (r = new ta()), PT(r, o, i))
              : (n || (n = { key: {}, next: null }), kT(n, o, i))
          },
        }
      return a
    }
  })
  var ra = S((kee, uy) => {
    'use strict'
    l()
    c()
    p()
    var jT = String.prototype.replace,
      MT = /%20/g,
      Fi = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' }
    uy.exports = {
      default: Fi.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return jT.call(e, MT, '+')
        },
        RFC3986: function (e) {
          return String(e)
        },
      },
      RFC1738: Fi.RFC1738,
      RFC3986: Fi.RFC3986,
    }
  })
  var Bi = S((qee, ly) => {
    'use strict'
    l()
    c()
    p()
    var qT = ra(),
      wi = Object.prototype.hasOwnProperty,
      St = Array.isArray,
      Ke = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
        return e
      })(),
      LT = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop]
          if (St(n)) {
            for (var a = [], o = 0; o < n.length; ++o)
              typeof n[o] < 'u' && a.push(n[o])
            r.obj[r.prop] = a
          }
        }
      },
      sy = function (t, r) {
        for (
          var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
          a < t.length;
          ++a
        )
          typeof t[a] < 'u' && (n[a] = t[a])
        return n
      },
      $T = function e(t, r, n) {
        if (!r) return t
        if (typeof r != 'object') {
          if (St(t)) t.push(r)
          else if (t && typeof t == 'object')
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !wi.call(Object.prototype, r)) &&
              (t[r] = !0)
          else return [t, r]
          return t
        }
        if (!t || typeof t != 'object') return [t].concat(r)
        var a = t
        return (
          St(t) && !St(r) && (a = sy(t, n)),
          St(t) && St(r)
            ? (r.forEach(function (o, i) {
                if (wi.call(t, i)) {
                  var s = t[i]
                  s && typeof s == 'object' && o && typeof o == 'object'
                    ? (t[i] = e(s, o, n))
                    : t.push(o)
                } else t[i] = o
              }),
              t)
            : Object.keys(r).reduce(function (o, i) {
                var s = r[i]
                return wi.call(o, i) ? (o[i] = e(o[i], s, n)) : (o[i] = s), o
              }, a)
        )
      },
      UT = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n
        }, t)
      },
      zT = function (e, t, r) {
        var n = e.replace(/\+/g, ' ')
        if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape)
        try {
          return decodeURIComponent(n)
        } catch {
          return n
        }
      },
      HT = function (t, r, n, a, o) {
        if (t.length === 0) return t
        var i = t
        if (
          (typeof t == 'symbol'
            ? (i = Symbol.prototype.toString.call(t))
            : typeof t != 'string' && (i = String(t)),
          n === 'iso-8859-1')
        )
          return escape(i).replace(/%u[0-9a-f]{4}/gi, function (m) {
            return '%26%23' + parseInt(m.slice(2), 16) + '%3B'
          })
        for (var s = '', u = 0; u < i.length; ++u) {
          var d = i.charCodeAt(u)
          if (
            d === 45 ||
            d === 46 ||
            d === 95 ||
            d === 126 ||
            (d >= 48 && d <= 57) ||
            (d >= 65 && d <= 90) ||
            (d >= 97 && d <= 122) ||
            (o === qT.RFC1738 && (d === 40 || d === 41))
          ) {
            s += i.charAt(u)
            continue
          }
          if (d < 128) {
            s = s + Ke[d]
            continue
          }
          if (d < 2048) {
            s = s + (Ke[192 | (d >> 6)] + Ke[128 | (d & 63)])
            continue
          }
          if (d < 55296 || d >= 57344) {
            s =
              s +
              (Ke[224 | (d >> 12)] +
                Ke[128 | ((d >> 6) & 63)] +
                Ke[128 | (d & 63)])
            continue
          }
          ;(u += 1),
            (d = 65536 + (((d & 1023) << 10) | (i.charCodeAt(u) & 1023))),
            (s +=
              Ke[240 | (d >> 18)] +
              Ke[128 | ((d >> 12) & 63)] +
              Ke[128 | ((d >> 6) & 63)] +
              Ke[128 | (d & 63)])
        }
        return s
      },
      GT = function (t) {
        for (
          var r = [{ obj: { o: t }, prop: 'o' }], n = [], a = 0;
          a < r.length;
          ++a
        )
          for (
            var o = r[a], i = o.obj[o.prop], s = Object.keys(i), u = 0;
            u < s.length;
            ++u
          ) {
            var d = s[u],
              m = i[d]
            typeof m == 'object' &&
              m !== null &&
              n.indexOf(m) === -1 &&
              (r.push({ obj: i, prop: d }), n.push(m))
          }
        return LT(r), t
      },
      WT = function (t) {
        return Object.prototype.toString.call(t) === '[object RegExp]'
      },
      VT = function (t) {
        return !t || typeof t != 'object'
          ? !1
          : !!(
              t.constructor &&
              t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            )
      },
      KT = function (t, r) {
        return [].concat(t, r)
      },
      YT = function (t, r) {
        if (St(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]))
          return n
        }
        return r(t)
      }
    ly.exports = {
      arrayToObject: sy,
      assign: UT,
      combine: KT,
      compact: GT,
      decode: zT,
      encode: HT,
      isBuffer: VT,
      isRegExp: WT,
      maybeMap: YT,
      merge: $T,
    }
  })
  var yy = S((zee, hy) => {
    'use strict'
    l()
    c()
    p()
    var dy = iy(),
      na = Bi(),
      Vr = ra(),
      JT = Object.prototype.hasOwnProperty,
      cy = {
        brackets: function (t) {
          return t + '[]'
        },
        comma: 'comma',
        indices: function (t, r) {
          return t + '[' + r + ']'
        },
        repeat: function (t) {
          return t
        },
      },
      rt = Array.isArray,
      XT = Array.prototype.push,
      fy = function (e, t) {
        XT.apply(e, rt(t) ? t : [t])
      },
      QT = Date.prototype.toISOString,
      py = Vr.default,
      _e = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: na.encode,
        encodeValuesOnly: !1,
        format: py,
        formatter: Vr.formatters[py],
        indices: !1,
        serializeDate: function (t) {
          return QT.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      ZT = function (t) {
        return (
          typeof t == 'string' ||
          typeof t == 'number' ||
          typeof t == 'boolean' ||
          typeof t == 'symbol' ||
          typeof t == 'bigint'
        )
      },
      _i = {},
      eO = function e(t, r, n, a, o, i, s, u, d, m, b, h, y, E, A, x) {
        for (
          var F = t, R = x, j = 0, L = !1;
          (R = R.get(_i)) !== void 0 && !L;

        ) {
          var w = R.get(t)
          if (((j += 1), typeof w < 'u')) {
            if (w === j) throw new RangeError('Cyclic object value')
            L = !0
          }
          typeof R.get(_i) > 'u' && (j = 0)
        }
        if (
          (typeof u == 'function'
            ? (F = u(r, F))
            : F instanceof Date
            ? (F = b(F))
            : n === 'comma' &&
              rt(F) &&
              (F = na.maybeMap(F, function (k) {
                return k instanceof Date ? b(k) : k
              })),
          F === null)
        ) {
          if (o) return s && !E ? s(r, _e.encoder, A, 'key', h) : r
          F = ''
        }
        if (ZT(F) || na.isBuffer(F)) {
          if (s) {
            var M = E ? r : s(r, _e.encoder, A, 'key', h)
            return [y(M) + '=' + y(s(F, _e.encoder, A, 'value', h))]
          }
          return [y(r) + '=' + y(String(F))]
        }
        var I = []
        if (typeof F > 'u') return I
        var U
        if (n === 'comma' && rt(F))
          E && s && (F = na.maybeMap(F, s)),
            (U = [{ value: F.length > 0 ? F.join(',') || null : void 0 }])
        else if (rt(u)) U = u
        else {
          var J = Object.keys(F)
          U = d ? J.sort(d) : J
        }
        for (
          var z = a && rt(F) && F.length === 1 ? r + '[]' : r, ue = 0;
          ue < U.length;
          ++ue
        ) {
          var Q = U[ue],
            W = typeof Q == 'object' && typeof Q.value < 'u' ? Q.value : F[Q]
          if (!(i && W === null)) {
            var _ = rt(F)
              ? typeof n == 'function'
                ? n(z, Q)
                : z
              : z + (m ? '.' + Q : '[' + Q + ']')
            x.set(t, j)
            var B = dy()
            B.set(_i, x),
              fy(
                I,
                e(
                  W,
                  _,
                  n,
                  a,
                  o,
                  i,
                  n === 'comma' && E && rt(F) ? null : s,
                  u,
                  d,
                  m,
                  b,
                  h,
                  y,
                  E,
                  A,
                  B
                )
              )
          }
        }
        return I
      },
      tO = function (t) {
        if (!t) return _e
        if (
          t.encoder !== null &&
          typeof t.encoder < 'u' &&
          typeof t.encoder != 'function'
        )
          throw new TypeError('Encoder has to be a function.')
        var r = t.charset || _e.charset
        if (
          typeof t.charset < 'u' &&
          t.charset !== 'utf-8' &&
          t.charset !== 'iso-8859-1'
        )
          throw new TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined'
          )
        var n = Vr.default
        if (typeof t.format < 'u') {
          if (!JT.call(Vr.formatters, t.format))
            throw new TypeError('Unknown format option provided.')
          n = t.format
        }
        var a = Vr.formatters[n],
          o = _e.filter
        return (
          (typeof t.filter == 'function' || rt(t.filter)) && (o = t.filter),
          {
            addQueryPrefix:
              typeof t.addQueryPrefix == 'boolean'
                ? t.addQueryPrefix
                : _e.addQueryPrefix,
            allowDots: typeof t.allowDots > 'u' ? _e.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == 'boolean'
                ? t.charsetSentinel
                : _e.charsetSentinel,
            delimiter: typeof t.delimiter > 'u' ? _e.delimiter : t.delimiter,
            encode: typeof t.encode == 'boolean' ? t.encode : _e.encode,
            encoder: typeof t.encoder == 'function' ? t.encoder : _e.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == 'boolean'
                ? t.encodeValuesOnly
                : _e.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == 'function'
                ? t.serializeDate
                : _e.serializeDate,
            skipNulls:
              typeof t.skipNulls == 'boolean' ? t.skipNulls : _e.skipNulls,
            sort: typeof t.sort == 'function' ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == 'boolean'
                ? t.strictNullHandling
                : _e.strictNullHandling,
          }
        )
      }
    hy.exports = function (e, t) {
      var r = e,
        n = tO(t),
        a,
        o
      typeof n.filter == 'function'
        ? ((o = n.filter), (r = o('', r)))
        : rt(n.filter) && ((o = n.filter), (a = o))
      var i = []
      if (typeof r != 'object' || r === null) return ''
      var s
      t && t.arrayFormat in cy
        ? (s = t.arrayFormat)
        : t && 'indices' in t
        ? (s = t.indices ? 'indices' : 'repeat')
        : (s = 'indices')
      var u = cy[s]
      if (t && 'commaRoundTrip' in t && typeof t.commaRoundTrip != 'boolean')
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent')
      var d = u === 'comma' && t && t.commaRoundTrip
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort)
      for (var m = dy(), b = 0; b < a.length; ++b) {
        var h = a[b]
        ;(n.skipNulls && r[h] === null) ||
          fy(
            i,
            eO(
              r[h],
              h,
              u,
              d,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              m
            )
          )
      }
      var y = i.join(n.delimiter),
        E = n.addQueryPrefix === !0 ? '?' : ''
      return (
        n.charsetSentinel &&
          (n.charset === 'iso-8859-1'
            ? (E += 'utf8=%26%2310003%3B&')
            : (E += 'utf8=%E2%9C%93&')),
        y.length > 0 ? E + y : ''
      )
    }
  })
  var by = S((Vee, my) => {
    'use strict'
    l()
    c()
    p()
    var er = Bi(),
      Ti = Object.prototype.hasOwnProperty,
      rO = Array.isArray,
      De = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: er.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      nO = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10))
        })
      },
      gy = function (e, t) {
        return e && typeof e == 'string' && t.comma && e.indexOf(',') > -1
          ? e.split(',')
          : e
      },
      aO = 'utf8=%26%2310003%3B',
      oO = 'utf8=%E2%9C%93',
      iO = function (t, r) {
        var n = {},
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          i = a.split(r.delimiter, o),
          s = -1,
          u,
          d = r.charset
        if (r.charsetSentinel)
          for (u = 0; u < i.length; ++u)
            i[u].indexOf('utf8=') === 0 &&
              (i[u] === oO ? (d = 'utf-8') : i[u] === aO && (d = 'iso-8859-1'),
              (s = u),
              (u = i.length))
        for (u = 0; u < i.length; ++u)
          if (u !== s) {
            var m = i[u],
              b = m.indexOf(']='),
              h = b === -1 ? m.indexOf('=') : b + 1,
              y,
              E
            h === -1
              ? ((y = r.decoder(m, De.decoder, d, 'key')),
                (E = r.strictNullHandling ? null : ''))
              : ((y = r.decoder(m.slice(0, h), De.decoder, d, 'key')),
                (E = er.maybeMap(gy(m.slice(h + 1), r), function (A) {
                  return r.decoder(A, De.decoder, d, 'value')
                }))),
              E &&
                r.interpretNumericEntities &&
                d === 'iso-8859-1' &&
                (E = nO(E)),
              m.indexOf('[]=') > -1 && (E = rO(E) ? [E] : E),
              Ti.call(n, y) ? (n[y] = er.combine(n[y], E)) : (n[y] = E)
          }
        return n
      },
      uO = function (e, t, r, n) {
        for (var a = n ? t : gy(t, r), o = e.length - 1; o >= 0; --o) {
          var i,
            s = e[o]
          if (s === '[]' && r.parseArrays) i = [].concat(a)
          else {
            i = r.plainObjects ? Object.create(null) : {}
            var u =
                s.charAt(0) === '[' && s.charAt(s.length - 1) === ']'
                  ? s.slice(1, -1)
                  : s,
              d = parseInt(u, 10)
            !r.parseArrays && u === ''
              ? (i = { 0: a })
              : !isNaN(d) &&
                s !== u &&
                String(d) === u &&
                d >= 0 &&
                r.parseArrays &&
                d <= r.arrayLimit
              ? ((i = []), (i[d] = a))
              : u !== '__proto__' && (i[u] = a)
          }
          a = i
        }
        return a
      },
      sO = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
            i = /(\[[^[\]]*])/,
            s = /(\[[^[\]]*])/g,
            u = n.depth > 0 && i.exec(o),
            d = u ? o.slice(0, u.index) : o,
            m = []
          if (d) {
            if (
              !n.plainObjects &&
              Ti.call(Object.prototype, d) &&
              !n.allowPrototypes
            )
              return
            m.push(d)
          }
          for (
            var b = 0;
            n.depth > 0 && (u = s.exec(o)) !== null && b < n.depth;

          ) {
            if (
              ((b += 1),
              !n.plainObjects &&
                Ti.call(Object.prototype, u[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return
            m.push(u[1])
          }
          return u && m.push('[' + o.slice(u.index) + ']'), uO(m, r, n, a)
        }
      },
      lO = function (t) {
        if (!t) return De
        if (
          t.decoder !== null &&
          t.decoder !== void 0 &&
          typeof t.decoder != 'function'
        )
          throw new TypeError('Decoder has to be a function.')
        if (
          typeof t.charset < 'u' &&
          t.charset !== 'utf-8' &&
          t.charset !== 'iso-8859-1'
        )
          throw new TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined'
          )
        var r = typeof t.charset > 'u' ? De.charset : t.charset
        return {
          allowDots: typeof t.allowDots > 'u' ? De.allowDots : !!t.allowDots,
          allowPrototypes:
            typeof t.allowPrototypes == 'boolean'
              ? t.allowPrototypes
              : De.allowPrototypes,
          allowSparse:
            typeof t.allowSparse == 'boolean' ? t.allowSparse : De.allowSparse,
          arrayLimit:
            typeof t.arrayLimit == 'number' ? t.arrayLimit : De.arrayLimit,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel == 'boolean'
              ? t.charsetSentinel
              : De.charsetSentinel,
          comma: typeof t.comma == 'boolean' ? t.comma : De.comma,
          decoder: typeof t.decoder == 'function' ? t.decoder : De.decoder,
          delimiter:
            typeof t.delimiter == 'string' || er.isRegExp(t.delimiter)
              ? t.delimiter
              : De.delimiter,
          depth:
            typeof t.depth == 'number' || t.depth === !1 ? +t.depth : De.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == 'boolean'
              ? t.interpretNumericEntities
              : De.interpretNumericEntities,
          parameterLimit:
            typeof t.parameterLimit == 'number'
              ? t.parameterLimit
              : De.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects:
            typeof t.plainObjects == 'boolean'
              ? t.plainObjects
              : De.plainObjects,
          strictNullHandling:
            typeof t.strictNullHandling == 'boolean'
              ? t.strictNullHandling
              : De.strictNullHandling,
        }
      }
    my.exports = function (e, t) {
      var r = lO(t)
      if (e === '' || e === null || typeof e > 'u')
        return r.plainObjects ? Object.create(null) : {}
      for (
        var n = typeof e == 'string' ? iO(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          i = 0;
        i < o.length;
        ++i
      ) {
        var s = o[i],
          u = sO(s, n[s], r, typeof e == 'string')
        a = er.merge(a, u, r)
      }
      return r.allowSparse === !0 ? a : er.compact(a)
    }
  })
  var aa = S((Xee, Ay) => {
    'use strict'
    l()
    c()
    p()
    var cO = yy(),
      pO = by(),
      dO = ra()
    Ay.exports = { formats: dO, parse: pO, stringify: cO }
  })
  var Wy = S((rne, Gy) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      function e(i) {
        if (i == null) return !1
        switch (i.type) {
          case 'ArrayExpression':
          case 'AssignmentExpression':
          case 'BinaryExpression':
          case 'CallExpression':
          case 'ConditionalExpression':
          case 'FunctionExpression':
          case 'Identifier':
          case 'Literal':
          case 'LogicalExpression':
          case 'MemberExpression':
          case 'NewExpression':
          case 'ObjectExpression':
          case 'SequenceExpression':
          case 'ThisExpression':
          case 'UnaryExpression':
          case 'UpdateExpression':
            return !0
        }
        return !1
      }
      function t(i) {
        if (i == null) return !1
        switch (i.type) {
          case 'DoWhileStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'WhileStatement':
            return !0
        }
        return !1
      }
      function r(i) {
        if (i == null) return !1
        switch (i.type) {
          case 'BlockStatement':
          case 'BreakStatement':
          case 'ContinueStatement':
          case 'DebuggerStatement':
          case 'DoWhileStatement':
          case 'EmptyStatement':
          case 'ExpressionStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'IfStatement':
          case 'LabeledStatement':
          case 'ReturnStatement':
          case 'SwitchStatement':
          case 'ThrowStatement':
          case 'TryStatement':
          case 'VariableDeclaration':
          case 'WhileStatement':
          case 'WithStatement':
            return !0
        }
        return !1
      }
      function n(i) {
        return r(i) || (i != null && i.type === 'FunctionDeclaration')
      }
      function a(i) {
        switch (i.type) {
          case 'IfStatement':
            return i.alternate != null ? i.alternate : i.consequent
          case 'LabeledStatement':
          case 'ForStatement':
          case 'ForInStatement':
          case 'WhileStatement':
          case 'WithStatement':
            return i.body
        }
        return null
      }
      function o(i) {
        var s
        if (i.type !== 'IfStatement' || i.alternate == null) return !1
        s = i.consequent
        do {
          if (s.type === 'IfStatement' && s.alternate == null) return !0
          s = a(s)
        } while (s)
        return !1
      }
      Gy.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      }
    })()
  })
  var Mi = S((ine, Vy) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e, t, r, n, a, o
      ;(t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        })
      function i(x) {
        return 48 <= x && x <= 57
      }
      function s(x) {
        return (
          (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70)
        )
      }
      function u(x) {
        return x >= 48 && x <= 55
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
        8239, 8287, 12288, 65279,
      ]
      function d(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        )
      }
      function m(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233
      }
      function b(x) {
        if (x <= 65535) return String.fromCharCode(x)
        var F = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          R = String.fromCharCode(((x - 65536) % 1024) + 56320)
        return F + R
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] =
          (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] =
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          o === 36 ||
          o === 95
      function h(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(b(x))
      }
      function y(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(b(x))
      }
      function E(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(b(x))
      }
      function A(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(b(x))
      }
      Vy.exports = {
        isDecimalDigit: i,
        isHexDigit: s,
        isOctalDigit: u,
        isWhiteSpace: d,
        isLineTerminator: m,
        isIdentifierStartES5: h,
        isIdentifierPartES5: y,
        isIdentifierStartES6: E,
        isIdentifierPartES6: A,
      }
    })()
  })
  var Yy = S((cne, Ky) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e = Mi()
      function t(h) {
        switch (h) {
          case 'implements':
          case 'interface':
          case 'package':
          case 'private':
          case 'protected':
          case 'public':
          case 'static':
          case 'let':
            return !0
          default:
            return !1
        }
      }
      function r(h, y) {
        return !y && h === 'yield' ? !1 : n(h, y)
      }
      function n(h, y) {
        if (y && t(h)) return !0
        switch (h.length) {
          case 2:
            return h === 'if' || h === 'in' || h === 'do'
          case 3:
            return h === 'var' || h === 'for' || h === 'new' || h === 'try'
          case 4:
            return (
              h === 'this' ||
              h === 'else' ||
              h === 'case' ||
              h === 'void' ||
              h === 'with' ||
              h === 'enum'
            )
          case 5:
            return (
              h === 'while' ||
              h === 'break' ||
              h === 'catch' ||
              h === 'throw' ||
              h === 'const' ||
              h === 'yield' ||
              h === 'class' ||
              h === 'super'
            )
          case 6:
            return (
              h === 'return' ||
              h === 'typeof' ||
              h === 'delete' ||
              h === 'switch' ||
              h === 'export' ||
              h === 'import'
            )
          case 7:
            return h === 'default' || h === 'finally' || h === 'extends'
          case 8:
            return h === 'function' || h === 'continue' || h === 'debugger'
          case 10:
            return h === 'instanceof'
          default:
            return !1
        }
      }
      function a(h, y) {
        return h === 'null' || h === 'true' || h === 'false' || r(h, y)
      }
      function o(h, y) {
        return h === 'null' || h === 'true' || h === 'false' || n(h, y)
      }
      function i(h) {
        return h === 'eval' || h === 'arguments'
      }
      function s(h) {
        var y, E, A
        if (
          h.length === 0 ||
          ((A = h.charCodeAt(0)), !e.isIdentifierStartES5(A))
        )
          return !1
        for (y = 1, E = h.length; y < E; ++y)
          if (((A = h.charCodeAt(y)), !e.isIdentifierPartES5(A))) return !1
        return !0
      }
      function u(h, y) {
        return (h - 55296) * 1024 + (y - 56320) + 65536
      }
      function d(h) {
        var y, E, A, x, F
        if (h.length === 0) return !1
        for (F = e.isIdentifierStartES6, y = 0, E = h.length; y < E; ++y) {
          if (((A = h.charCodeAt(y)), 55296 <= A && A <= 56319)) {
            if (
              (++y,
              y >= E || ((x = h.charCodeAt(y)), !(56320 <= x && x <= 57343)))
            )
              return !1
            A = u(A, x)
          }
          if (!F(A)) return !1
          F = e.isIdentifierPartES6
        }
        return !0
      }
      function m(h, y) {
        return s(h) && !a(h, y)
      }
      function b(h, y) {
        return d(h) && !o(h, y)
      }
      Ky.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: i,
        isIdentifierNameES5: s,
        isIdentifierNameES6: d,
        isIdentifierES5: m,
        isIdentifierES6: b,
      }
    })()
  })
  var qi = S((sa) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      ;(sa.ast = Wy()), (sa.code = Mi()), (sa.keyword = Yy())
    })()
  })
  var Jy = S((bne, vP) => {
    vP.exports = {
      name: 'doctrine',
      description: 'JSDoc parser',
      homepage: 'https://github.com/eslint/doctrine',
      main: 'lib/doctrine.js',
      version: '3.0.0',
      engines: { node: '>=6.0.0' },
      directories: { lib: './lib' },
      files: ['lib'],
      maintainers: [
        {
          name: 'Nicholas C. Zakas',
          email: 'nicholas+npm@nczconsulting.com',
          web: 'https://www.nczonline.net',
        },
        {
          name: 'Yusuke Suzuki',
          email: 'utatane.tea@gmail.com',
          web: 'https://github.com/Constellation',
        },
      ],
      repository: 'eslint/doctrine',
      devDependencies: {
        coveralls: '^3.0.1',
        dateformat: '^1.0.11',
        eslint: '^1.10.3',
        'eslint-release': '^1.0.0',
        linefix: '^0.1.1',
        mocha: '^3.4.2',
        'npm-license': '^0.3.1',
        nyc: '^10.3.2',
        semver: '^5.0.3',
        shelljs: '^0.5.3',
        'shelljs-nodecli': '^0.1.1',
        should: '^5.0.1',
      },
      license: 'Apache-2.0',
      scripts: {
        pretest: 'npm run lint',
        test: 'nyc mocha',
        coveralls: 'nyc report --reporter=text-lcov | coveralls',
        lint: 'eslint lib/',
        'generate-release': 'eslint-generate-release',
        'generate-alpharelease': 'eslint-generate-prerelease alpha',
        'generate-betarelease': 'eslint-generate-prerelease beta',
        'generate-rcrelease': 'eslint-generate-prerelease rc',
        'publish-release': 'eslint-publish-release',
      },
      dependencies: { esutils: '^2.0.2' },
    }
  })
  var Qy = S((Ane, Xy) => {
    l()
    c()
    p()
    function DP(e, t) {
      if (!e) throw new Error(t || 'unknown assertion error')
    }
    Xy.exports = DP
  })
  var Li = S((Jr) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e
      ;(e = Jy().version), (Jr.VERSION = e)
      function t(n) {
        ;(this.name = 'DoctrineError'), (this.message = n)
      }
      ;(t.prototype = (function () {
        var n = function () {}
        return (n.prototype = Error.prototype), new n()
      })()),
        (t.prototype.constructor = t),
        (Jr.DoctrineError = t)
      function r(n) {
        throw new t(n)
      }
      ;(Jr.throwError = r), (Jr.assert = Qy())
    })()
  })
  var Zy = S((Xr) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e, t, r, n, a, o, i, s, u, d, m, b
      ;(u = qi()),
        (d = Li()),
        (e = {
          NullableLiteral: 'NullableLiteral',
          AllLiteral: 'AllLiteral',
          NullLiteral: 'NullLiteral',
          UndefinedLiteral: 'UndefinedLiteral',
          VoidLiteral: 'VoidLiteral',
          UnionType: 'UnionType',
          ArrayType: 'ArrayType',
          RecordType: 'RecordType',
          FieldType: 'FieldType',
          FunctionType: 'FunctionType',
          ParameterType: 'ParameterType',
          RestType: 'RestType',
          NonNullableType: 'NonNullableType',
          OptionalType: 'OptionalType',
          NullableType: 'NullableType',
          NameExpression: 'NameExpression',
          TypeApplication: 'TypeApplication',
          StringLiteralType: 'StringLiteralType',
          NumericLiteralType: 'NumericLiteralType',
          BooleanLiteralType: 'BooleanLiteralType',
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        })
      function h(T) {
        return (
          '><(){}[],:*|?!='.indexOf(String.fromCharCode(T)) === -1 &&
          !u.code.isWhiteSpace(T) &&
          !u.code.isLineTerminator(T)
        )
      }
      function y(T, P, N, O) {
        ;(this._previous = T),
          (this._index = P),
          (this._token = N),
          (this._value = O)
      }
      ;(y.prototype.restore = function () {
        ;(o = this._previous),
          (a = this._index),
          (i = this._token),
          (s = this._value)
      }),
        (y.save = function () {
          return new y(o, a, i, s)
        })
      function E(T, P) {
        return b && (T.range = [P[0] + m, P[1] + m]), T
      }
      function A() {
        var T = r.charAt(a)
        return (a += 1), T
      }
      function x(T) {
        var P,
          N,
          O,
          $ = 0
        for (N = T === 'u' ? 4 : 2, P = 0; P < N; ++P)
          if (a < n && u.code.isHexDigit(r.charCodeAt(a)))
            (O = A()),
              ($ = $ * 16 + '0123456789abcdef'.indexOf(O.toLowerCase()))
          else return ''
        return String.fromCharCode($)
      }
      function F() {
        var T = '',
          P,
          N,
          O,
          $,
          G
        for (P = r.charAt(a), ++a; a < n; )
          if (((N = A()), N === P)) {
            P = ''
            break
          } else if (N === '\\')
            if (((N = A()), u.code.isLineTerminator(N.charCodeAt(0))))
              N === '\r' && r.charCodeAt(a) === 10 && ++a
            else
              switch (N) {
                case 'n':
                  T += `
`
                  break
                case 'r':
                  T += '\r'
                  break
                case 't':
                  T += '	'
                  break
                case 'u':
                case 'x':
                  ;(G = a), ($ = x(N)), $ ? (T += $) : ((a = G), (T += N))
                  break
                case 'b':
                  T += '\b'
                  break
                case 'f':
                  T += '\f'
                  break
                case 'v':
                  T += '\v'
                  break
                default:
                  u.code.isOctalDigit(N.charCodeAt(0))
                    ? ((O = '01234567'.indexOf(N)),
                      a < n &&
                        u.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((O = O * 8 + '01234567'.indexOf(A())),
                        '0123'.indexOf(N) >= 0 &&
                          a < n &&
                          u.code.isOctalDigit(r.charCodeAt(a)) &&
                          (O = O * 8 + '01234567'.indexOf(A()))),
                      (T += String.fromCharCode(O)))
                    : (T += N)
                  break
              }
          else {
            if (u.code.isLineTerminator(N.charCodeAt(0))) break
            T += N
          }
        return P !== '' && d.throwError('unexpected quote'), (s = T), t.STRING
      }
      function R() {
        var T, P
        if (((T = ''), (P = r.charCodeAt(a)), P !== 46)) {
          if (((T = A()), (P = r.charCodeAt(a)), T === '0')) {
            if (P === 120 || P === 88) {
              for (
                T += A();
                a < n && ((P = r.charCodeAt(a)), !!u.code.isHexDigit(P));

              )
                T += A()
              return (
                T.length <= 2 && d.throwError('unexpected token'),
                a < n &&
                  ((P = r.charCodeAt(a)),
                  u.code.isIdentifierStartES5(P) &&
                    d.throwError('unexpected token')),
                (s = parseInt(T, 16)),
                t.NUMBER
              )
            }
            if (u.code.isOctalDigit(P)) {
              for (
                T += A();
                a < n && ((P = r.charCodeAt(a)), !!u.code.isOctalDigit(P));

              )
                T += A()
              return (
                a < n &&
                  ((P = r.charCodeAt(a)),
                  (u.code.isIdentifierStartES5(P) ||
                    u.code.isDecimalDigit(P)) &&
                    d.throwError('unexpected token')),
                (s = parseInt(T, 8)),
                t.NUMBER
              )
            }
            u.code.isDecimalDigit(P) && d.throwError('unexpected token')
          }
          for (; a < n && ((P = r.charCodeAt(a)), !!u.code.isDecimalDigit(P)); )
            T += A()
        }
        if (P === 46)
          for (
            T += A();
            a < n && ((P = r.charCodeAt(a)), !!u.code.isDecimalDigit(P));

          )
            T += A()
        if (P === 101 || P === 69)
          if (
            ((T += A()),
            (P = r.charCodeAt(a)),
            (P === 43 || P === 45) && (T += A()),
            (P = r.charCodeAt(a)),
            u.code.isDecimalDigit(P))
          )
            for (
              T += A();
              a < n && ((P = r.charCodeAt(a)), !!u.code.isDecimalDigit(P));

            )
              T += A()
          else d.throwError('unexpected token')
        return (
          a < n &&
            ((P = r.charCodeAt(a)),
            u.code.isIdentifierStartES5(P) && d.throwError('unexpected token')),
          (s = parseFloat(T)),
          t.NUMBER
        )
      }
      function j() {
        var T, P
        for (s = A(); a < n && h(r.charCodeAt(a)); ) {
          if (((T = r.charCodeAt(a)), T === 46)) {
            if (a + 1 >= n) return t.ILLEGAL
            if (((P = r.charCodeAt(a + 1)), P === 60)) break
          }
          s += A()
        }
        return t.NAME
      }
      function L() {
        var T
        for (o = a; a < n && u.code.isWhiteSpace(r.charCodeAt(a)); ) A()
        if (a >= n) return (i = t.EOF), i
        switch (((T = r.charCodeAt(a)), T)) {
          case 39:
          case 34:
            return (i = F()), i
          case 58:
            return A(), (i = t.COLON), i
          case 44:
            return A(), (i = t.COMMA), i
          case 40:
            return A(), (i = t.LPAREN), i
          case 41:
            return A(), (i = t.RPAREN), i
          case 91:
            return A(), (i = t.LBRACK), i
          case 93:
            return A(), (i = t.RBRACK), i
          case 123:
            return A(), (i = t.LBRACE), i
          case 125:
            return A(), (i = t.RBRACE), i
          case 46:
            if (a + 1 < n) {
              if (((T = r.charCodeAt(a + 1)), T === 60))
                return A(), A(), (i = t.DOT_LT), i
              if (T === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return A(), A(), A(), (i = t.REST), i
              if (u.code.isDecimalDigit(T)) return (i = R()), i
            }
            return (i = t.ILLEGAL), i
          case 60:
            return A(), (i = t.LT), i
          case 62:
            return A(), (i = t.GT), i
          case 42:
            return A(), (i = t.STAR), i
          case 124:
            return A(), (i = t.PIPE), i
          case 63:
            return A(), (i = t.QUESTION), i
          case 33:
            return A(), (i = t.BANG), i
          case 61:
            return A(), (i = t.EQUAL), i
          case 45:
            return (i = R()), i
          default:
            return u.code.isDecimalDigit(T)
              ? ((i = R()), i)
              : (d.assert(h(T)), (i = j()), i)
        }
      }
      function w(T, P) {
        d.assert(i === T, P || 'consumed token not matched'), L()
      }
      function M(T, P) {
        i !== T && d.throwError(P || 'unexpected token'), L()
      }
      function I() {
        var T,
          P = a - 1
        if (
          (w(t.LPAREN, 'UnionType should start with ('),
          (T = []),
          i !== t.RPAREN)
        )
          for (; T.push(V()), i !== t.RPAREN; ) M(t.PIPE)
        return (
          w(t.RPAREN, 'UnionType should end with )'),
          E({ type: e.UnionType, elements: T }, [P, o])
        )
      }
      function U() {
        var T,
          P = a - 1,
          N
        for (
          w(t.LBRACK, 'ArrayType should start with ['), T = [];
          i !== t.RBRACK;

        ) {
          if (i === t.REST) {
            ;(N = a - 3),
              w(t.REST),
              T.push(E({ type: e.RestType, expression: V() }, [N, o]))
            break
          } else T.push(V())
          i !== t.RBRACK && M(t.COMMA)
        }
        return M(t.RBRACK), E({ type: e.ArrayType, elements: T }, [P, o])
      }
      function J() {
        var T = s
        if (i === t.NAME || i === t.STRING) return L(), T
        if (i === t.NUMBER) return w(t.NUMBER), String(T)
        d.throwError('unexpected token')
      }
      function z() {
        var T,
          P = o
        return (
          (T = J()),
          i === t.COLON
            ? (w(t.COLON), E({ type: e.FieldType, key: T, value: V() }, [P, o]))
            : E({ type: e.FieldType, key: T, value: null }, [P, o])
        )
      }
      function ue() {
        var T,
          P = a - 1,
          N
        if (
          (w(t.LBRACE, 'RecordType should start with {'),
          (T = []),
          i === t.COMMA)
        )
          w(t.COMMA)
        else for (; i !== t.RBRACE; ) T.push(z()), i !== t.RBRACE && M(t.COMMA)
        return (
          (N = a), M(t.RBRACE), E({ type: e.RecordType, fields: T }, [P, N])
        )
      }
      function Q() {
        var T = s,
          P = a - T.length
        return (
          M(t.NAME),
          i === t.COLON &&
            (T === 'module' || T === 'external' || T === 'event') &&
            (w(t.COLON), (T += ':' + s), M(t.NAME)),
          E({ type: e.NameExpression, name: T }, [P, o])
        )
      }
      function W() {
        var T = []
        for (T.push(Z()); i === t.COMMA; ) w(t.COMMA), T.push(Z())
        return T
      }
      function _() {
        var T,
          P,
          N = a - s.length
        return (
          (T = Q()),
          i === t.DOT_LT || i === t.LT
            ? (L(),
              (P = W()),
              M(t.GT),
              E({ type: e.TypeApplication, expression: T, applications: P }, [
                N,
                o,
              ]))
            : T
        )
      }
      function B() {
        return (
          w(t.COLON, 'ResultType should start with :'),
          i === t.NAME && s === 'void'
            ? (w(t.NAME), { type: e.VoidLiteral })
            : V()
        )
      }
      function k() {
        for (var T = [], P = !1, N, O = !1, $, G = a - 3, fe; i !== t.RPAREN; )
          i === t.REST && (w(t.REST), (O = !0)),
            ($ = o),
            (N = V()),
            N.type === e.NameExpression &&
              i === t.COLON &&
              ((fe = o - N.name.length),
              w(t.COLON),
              (N = E({ type: e.ParameterType, name: N.name, expression: V() }, [
                fe,
                o,
              ]))),
            i === t.EQUAL
              ? (w(t.EQUAL),
                (N = E({ type: e.OptionalType, expression: N }, [$, o])),
                (P = !0))
              : P && d.throwError('unexpected token'),
            O && (N = E({ type: e.RestType, expression: N }, [G, o])),
            T.push(N),
            i !== t.RPAREN && M(t.COMMA)
        return T
      }
      function H() {
        var T,
          P,
          N,
          O,
          $,
          G = a - s.length
        return (
          d.assert(
            i === t.NAME && s === 'function',
            "FunctionType should start with 'function'"
          ),
          w(t.NAME),
          M(t.LPAREN),
          (T = !1),
          (N = []),
          (P = null),
          i !== t.RPAREN &&
            (i === t.NAME && (s === 'this' || s === 'new')
              ? ((T = s === 'new'),
                w(t.NAME),
                M(t.COLON),
                (P = _()),
                i === t.COMMA && (w(t.COMMA), (N = k())))
              : (N = k())),
          M(t.RPAREN),
          (O = null),
          i === t.COLON && (O = B()),
          ($ = E({ type: e.FunctionType, params: N, result: O }, [G, o])),
          P && (($.this = P), T && ($.new = !0)),
          $
        )
      }
      function X() {
        var T, P
        switch (i) {
          case t.STAR:
            return w(t.STAR), E({ type: e.AllLiteral }, [o - 1, o])
          case t.LPAREN:
            return I()
          case t.LBRACK:
            return U()
          case t.LBRACE:
            return ue()
          case t.NAME:
            if (((P = a - s.length), s === 'null'))
              return w(t.NAME), E({ type: e.NullLiteral }, [P, o])
            if (s === 'undefined')
              return w(t.NAME), E({ type: e.UndefinedLiteral }, [P, o])
            if (s === 'true' || s === 'false')
              return (
                w(t.NAME),
                E({ type: e.BooleanLiteralType, value: s === 'true' }, [P, o])
              )
            if (((T = y.save()), s === 'function'))
              try {
                return H()
              } catch {
                T.restore()
              }
            return _()
          case t.STRING:
            return (
              L(),
              E({ type: e.StringLiteralType, value: s }, [o - s.length - 2, o])
            )
          case t.NUMBER:
            return (
              L(),
              E({ type: e.NumericLiteralType, value: s }, [
                o - String(s).length,
                o,
              ])
            )
          default:
            d.throwError('unexpected token')
        }
      }
      function V() {
        var T, P
        return i === t.QUESTION
          ? ((P = a - 1),
            w(t.QUESTION),
            i === t.COMMA ||
            i === t.EQUAL ||
            i === t.RBRACE ||
            i === t.RPAREN ||
            i === t.PIPE ||
            i === t.EOF ||
            i === t.RBRACK ||
            i === t.GT
              ? E({ type: e.NullableLiteral }, [P, o])
              : E({ type: e.NullableType, expression: X(), prefix: !0 }, [
                  P,
                  o,
                ]))
          : i === t.BANG
          ? ((P = a - 1),
            w(t.BANG),
            E({ type: e.NonNullableType, expression: X(), prefix: !0 }, [P, o]))
          : ((P = o),
            (T = X()),
            i === t.BANG
              ? (w(t.BANG),
                E({ type: e.NonNullableType, expression: T, prefix: !1 }, [
                  P,
                  o,
                ]))
              : i === t.QUESTION
              ? (w(t.QUESTION),
                E({ type: e.NullableType, expression: T, prefix: !1 }, [P, o]))
              : i === t.LBRACK
              ? (w(t.LBRACK),
                M(
                  t.RBRACK,
                  'expected an array-style type declaration (' + s + '[])'
                ),
                E(
                  {
                    type: e.TypeApplication,
                    expression: E({ type: e.NameExpression, name: 'Array' }, [
                      P,
                      o,
                    ]),
                    applications: [T],
                  },
                  [P, o]
                ))
              : T)
      }
      function Z() {
        var T, P
        if (((T = V()), i !== t.PIPE)) return T
        for (P = [T], w(t.PIPE); P.push(V()), i === t.PIPE; ) w(t.PIPE)
        return E({ type: e.UnionType, elements: P }, [0, a])
      }
      function ae() {
        var T
        return i === t.REST
          ? (w(t.REST), E({ type: e.RestType, expression: Z() }, [0, a]))
          : ((T = Z()),
            i === t.EQUAL
              ? (w(t.EQUAL), E({ type: e.OptionalType, expression: T }, [0, a]))
              : T)
      }
      function Ee(T, P) {
        var N
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (b = P && P.range),
          (m = (P && P.startIndex) || 0),
          L(),
          (N = Z()),
          P && P.midstream
            ? { expression: N, index: o }
            : (i !== t.EOF && d.throwError('not reach to EOF'), N)
        )
      }
      function be(T, P) {
        var N
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (b = P && P.range),
          (m = (P && P.startIndex) || 0),
          L(),
          (N = ae()),
          P && P.midstream
            ? { expression: N, index: o }
            : (i !== t.EOF && d.throwError('not reach to EOF'), N)
        )
      }
      function Y(T, P, N) {
        var O, $, G
        switch (T.type) {
          case e.NullableLiteral:
            O = '?'
            break
          case e.AllLiteral:
            O = '*'
            break
          case e.NullLiteral:
            O = 'null'
            break
          case e.UndefinedLiteral:
            O = 'undefined'
            break
          case e.VoidLiteral:
            O = 'void'
            break
          case e.UnionType:
            for (
              N ? (O = '') : (O = '('), $ = 0, G = T.elements.length;
              $ < G;
              ++$
            )
              (O += Y(T.elements[$], P)), $ + 1 !== G && (O += P ? '|' : ' | ')
            N || (O += ')')
            break
          case e.ArrayType:
            for (O = '[', $ = 0, G = T.elements.length; $ < G; ++$)
              (O += Y(T.elements[$], P)), $ + 1 !== G && (O += P ? ',' : ', ')
            O += ']'
            break
          case e.RecordType:
            for (O = '{', $ = 0, G = T.fields.length; $ < G; ++$)
              (O += Y(T.fields[$], P)), $ + 1 !== G && (O += P ? ',' : ', ')
            O += '}'
            break
          case e.FieldType:
            T.value
              ? (O = T.key + (P ? ':' : ': ') + Y(T.value, P))
              : (O = T.key)
            break
          case e.FunctionType:
            for (
              O = P ? 'function(' : 'function (',
                T.this &&
                  (T.new
                    ? (O += P ? 'new:' : 'new: ')
                    : (O += P ? 'this:' : 'this: '),
                  (O += Y(T.this, P)),
                  T.params.length !== 0 && (O += P ? ',' : ', ')),
                $ = 0,
                G = T.params.length;
              $ < G;
              ++$
            )
              (O += Y(T.params[$], P)), $ + 1 !== G && (O += P ? ',' : ', ')
            ;(O += ')'), T.result && (O += (P ? ':' : ': ') + Y(T.result, P))
            break
          case e.ParameterType:
            O = T.name + (P ? ':' : ': ') + Y(T.expression, P)
            break
          case e.RestType:
            ;(O = '...'), T.expression && (O += Y(T.expression, P))
            break
          case e.NonNullableType:
            T.prefix
              ? (O = '!' + Y(T.expression, P))
              : (O = Y(T.expression, P) + '!')
            break
          case e.OptionalType:
            O = Y(T.expression, P) + '='
            break
          case e.NullableType:
            T.prefix
              ? (O = '?' + Y(T.expression, P))
              : (O = Y(T.expression, P) + '?')
            break
          case e.NameExpression:
            O = T.name
            break
          case e.TypeApplication:
            for (
              O = Y(T.expression, P) + '.<', $ = 0, G = T.applications.length;
              $ < G;
              ++$
            )
              (O += Y(T.applications[$], P)),
                $ + 1 !== G && (O += P ? ',' : ', ')
            O += '>'
            break
          case e.StringLiteralType:
            O = '"' + T.value + '"'
            break
          case e.NumericLiteralType:
            O = String(T.value)
            break
          case e.BooleanLiteralType:
            O = String(T.value)
            break
          default:
            d.throwError('Unknown type ' + T.type)
        }
        return O
      }
      function Se(T, P) {
        return P == null && (P = {}), Y(T, P.compact, P.topLevel)
      }
      ;(Xr.parseType = Ee),
        (Xr.parseParamType = be),
        (Xr.stringify = Se),
        (Xr.Syntax = e)
    })()
  })
  var eg = S((Ye) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e, t, r, n, a
      ;(n = qi()), (e = Zy()), (t = Li())
      function o(w, M, I) {
        return w.slice(M, I)
      }
      a = (function () {
        var w = Object.prototype.hasOwnProperty
        return function (I, U) {
          return w.call(I, U)
        }
      })()
      function i(w) {
        var M = {},
          I
        for (I in w) w.hasOwnProperty(I) && (M[I] = w[I])
        return M
      }
      function s(w) {
        return (
          (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57)
        )
      }
      function u(w) {
        return w === 'param' || w === 'argument' || w === 'arg'
      }
      function d(w) {
        return w === 'return' || w === 'returns'
      }
      function m(w) {
        return w === 'property' || w === 'prop'
      }
      function b(w) {
        return (
          u(w) ||
          m(w) ||
          w === 'alias' ||
          w === 'this' ||
          w === 'mixes' ||
          w === 'requires'
        )
      }
      function h(w) {
        return b(w) || w === 'const' || w === 'constant'
      }
      function y(w) {
        return m(w) || u(w)
      }
      function E(w) {
        return m(w) || u(w)
      }
      function A(w) {
        return (
          u(w) ||
          d(w) ||
          w === 'define' ||
          w === 'enum' ||
          w === 'implements' ||
          w === 'this' ||
          w === 'type' ||
          w === 'typedef' ||
          m(w)
        )
      }
      function x(w) {
        return (
          A(w) ||
          w === 'throws' ||
          w === 'const' ||
          w === 'constant' ||
          w === 'namespace' ||
          w === 'member' ||
          w === 'var' ||
          w === 'module' ||
          w === 'constructor' ||
          w === 'class' ||
          w === 'extends' ||
          w === 'augments' ||
          w === 'public' ||
          w === 'private' ||
          w === 'protected'
        )
      }
      var F =
          '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
        R =
          '(' +
          F +
          '*(?:\\*' +
          F +
          `?)?)(.+|[\r
\u2028\u2029])`
      function j(w) {
        return w
          .replace(/^\/\*\*?/, '')
          .replace(/\*\/$/, '')
          .replace(new RegExp(R, 'g'), '$2')
          .replace(/\s*$/, '')
      }
      function L(w, M) {
        for (
          var I = w.replace(/^\/\*\*?/, ''), U = 0, J = new RegExp(R, 'g'), z;
          (z = J.exec(I));

        )
          if (((U += z[1].length), z.index + z[0].length > M + U))
            return M + U + w.length - I.length
        return w.replace(/\*\/$/, '').replace(/\s*$/, '').length
      }
      ;(function (w) {
        var M, I, U, J, z, ue, Q, W, _
        function B() {
          var N = z.charCodeAt(I)
          return (
            (I += 1),
            n.code.isLineTerminator(N) &&
              !(N === 13 && z.charCodeAt(I) === 10) &&
              (U += 1),
            String.fromCharCode(N)
          )
        }
        function k() {
          var N = ''
          for (B(); I < J && s(z.charCodeAt(I)); ) N += B()
          return N
        }
        function H() {
          var N,
            O,
            $ = I
          for (O = !1; $ < J; ) {
            if (
              ((N = z.charCodeAt($)),
              n.code.isLineTerminator(N) &&
                !(N === 13 && z.charCodeAt($ + 1) === 10))
            )
              O = !0
            else if (O) {
              if (N === 64) break
              n.code.isWhiteSpace(N) || (O = !1)
            }
            $ += 1
          }
          return $
        }
        function X(N, O, $) {
          for (var G, fe, oe, se, ve = !1; I < O; )
            if (((G = z.charCodeAt(I)), n.code.isWhiteSpace(G))) B()
            else if (G === 123) {
              B()
              break
            } else {
              ve = !0
              break
            }
          if (ve) return null
          for (fe = 1, oe = ''; I < O; )
            if (((G = z.charCodeAt(I)), n.code.isLineTerminator(G))) B()
            else {
              if (G === 125) {
                if (((fe -= 1), fe === 0)) {
                  B()
                  break
                }
              } else G === 123 && (fe += 1)
              oe === '' && (se = I), (oe += B())
            }
          return fe !== 0
            ? t.throwError('Braces are not balanced')
            : E(N)
            ? e.parseParamType(oe, { startIndex: be(se), range: $ })
            : e.parseType(oe, { startIndex: be(se), range: $ })
        }
        function V(N) {
          var O
          if (
            !n.code.isIdentifierStartES5(z.charCodeAt(I)) &&
            !z[I].match(/[0-9]/)
          )
            return null
          for (O = B(); I < N && n.code.isIdentifierPartES5(z.charCodeAt(I)); )
            O += B()
          return O
        }
        function Z(N) {
          for (
            ;
            I < N &&
            (n.code.isWhiteSpace(z.charCodeAt(I)) ||
              n.code.isLineTerminator(z.charCodeAt(I)));

          )
            B()
        }
        function ae(N, O, $) {
          var G = '',
            fe,
            oe
          if ((Z(N), I >= N)) return null
          if (z.charCodeAt(I) === 91)
            if (O) (fe = !0), (G = B())
            else return null
          if (((G += V(N)), $))
            for (
              z.charCodeAt(I) === 58 &&
                (G === 'module' || G === 'external' || G === 'event') &&
                ((G += B()), (G += V(N))),
                z.charCodeAt(I) === 91 &&
                  z.charCodeAt(I + 1) === 93 &&
                  ((G += B()), (G += B()));
              z.charCodeAt(I) === 46 ||
              z.charCodeAt(I) === 47 ||
              z.charCodeAt(I) === 35 ||
              z.charCodeAt(I) === 45 ||
              z.charCodeAt(I) === 126;

            )
              (G += B()), (G += V(N))
          if (fe) {
            if ((Z(N), z.charCodeAt(I) === 61)) {
              ;(G += B()), Z(N)
              for (var se, ve = 1; I < N; ) {
                if (
                  ((se = z.charCodeAt(I)),
                  n.code.isWhiteSpace(se) &&
                    (oe || (Z(N), (se = z.charCodeAt(I)))),
                  se === 39 && (oe ? oe === "'" && (oe = '') : (oe = "'")),
                  se === 34 && (oe ? oe === '"' && (oe = '') : (oe = '"')),
                  se === 91)
                )
                  ve++
                else if (se === 93 && --ve === 0) break
                G += B()
              }
            }
            if ((Z(N), I >= N || z.charCodeAt(I) !== 93)) return null
            G += B()
          }
          return G
        }
        function Ee() {
          for (; I < J && z.charCodeAt(I) !== 64; ) B()
          return I >= J ? !1 : (t.assert(z.charCodeAt(I) === 64), !0)
        }
        function be(N) {
          return z === ue ? N : L(ue, N)
        }
        function Y(N, O) {
          ;(this._options = N),
            (this._title = O.toLowerCase()),
            (this._tag = { title: O, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = U),
            (this._first = I - O.length - 1),
            (this._last = 0),
            (this._extra = {})
        }
        ;(Y.prototype.addError = function (O) {
          var $ = Array.prototype.slice.call(arguments, 1),
            G = O.replace(/%(\d)/g, function (fe, oe) {
              return (
                t.assert(oe < $.length, 'Message reference must be in range'),
                $[oe]
              )
            })
          return (
            this._tag.errors || (this._tag.errors = []),
            _ && t.throwError(G),
            this._tag.errors.push(G),
            Q
          )
        }),
          (Y.prototype.parseType = function () {
            if (A(this._title))
              try {
                if (
                  ((this._tag.type = X(
                    this._title,
                    this._last,
                    this._options.range
                  )),
                  !this._tag.type &&
                    !u(this._title) &&
                    !d(this._title) &&
                    !this.addError('Missing or invalid tag type'))
                )
                  return !1
              } catch (N) {
                if (((this._tag.type = null), !this.addError(N.message)))
                  return !1
              }
            else if (x(this._title))
              try {
                this._tag.type = X(this._title, this._last, this._options.range)
              } catch {}
            return !0
          }),
          (Y.prototype._parseNamePath = function (N) {
            var O
            return (
              (O = ae(this._last, W && E(this._title), !0)),
              !O && !N && !this.addError('Missing or invalid tag name')
                ? !1
                : ((this._tag.name = O), !0)
            )
          }),
          (Y.prototype.parseNamePath = function () {
            return this._parseNamePath(!1)
          }),
          (Y.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0)
          }),
          (Y.prototype.parseName = function () {
            var N, O
            if (h(this._title))
              if (
                ((this._tag.name = ae(
                  this._last,
                  W && E(this._title),
                  y(this._title)
                )),
                this._tag.name)
              )
                (O = this._tag.name),
                  O.charAt(0) === '[' &&
                    O.charAt(O.length - 1) === ']' &&
                    ((N = O.substring(1, O.length - 1).split('=')),
                    N.length > 1 && (this._tag.default = N.slice(1).join('=')),
                    (this._tag.name = N[0]),
                    this._tag.type &&
                      this._tag.type.type !== 'OptionalType' &&
                      (this._tag.type = {
                        type: 'OptionalType',
                        expression: this._tag.type,
                      }))
              else {
                if (!b(this._title)) return !0
                if (u(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null)
                else if (!this.addError('Missing or invalid tag name'))
                  return !1
              }
            return !0
          }),
          (Y.prototype.parseDescription = function () {
            var O = o(z, I, this._last).trim()
            return (
              O &&
                (/^-\s+/.test(O) && (O = O.substring(2)),
                (this._tag.description = O)),
              !0
            )
          }),
          (Y.prototype.parseCaption = function () {
            var O = o(z, I, this._last).trim(),
              $ = '<caption>',
              G = '</caption>',
              fe = O.indexOf($),
              oe = O.indexOf(G)
            return (
              fe >= 0 && oe >= 0
                ? ((this._tag.caption = O.substring(fe + $.length, oe).trim()),
                  (this._tag.description = O.substring(oe + G.length).trim()))
                : (this._tag.description = O),
              !0
            )
          }),
          (Y.prototype.parseKind = function () {
            var O, $
            return (
              ($ = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (O = o(z, I, this._last).trim()),
              (this._tag.kind = O),
              !(!a($, O) && !this.addError("Invalid kind name '%0'", O))
            )
          }),
          (Y.prototype.parseAccess = function () {
            var O
            return (
              (O = o(z, I, this._last).trim()),
              (this._tag.access = O),
              !(
                O !== 'private' &&
                O !== 'protected' &&
                O !== 'public' &&
                !this.addError("Invalid access name '%0'", O)
              )
            )
          }),
          (Y.prototype.parseThis = function () {
            var O = o(z, I, this._last).trim()
            if (O && O.charAt(0) === '{') {
              var $ = this.parseType()
              return ($ && this._tag.type.type === 'NameExpression') ||
                this._tag.type.type === 'UnionType'
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError('Invalid name for this')
            } else return this.parseNamePath()
          }),
          (Y.prototype.parseVariation = function () {
            var O, $
            return (
              ($ = o(z, I, this._last).trim()),
              (O = parseFloat($, 10)),
              (this._tag.variation = O),
              !(isNaN(O) && !this.addError("Invalid variation '%0'", $))
            )
          }),
          (Y.prototype.ensureEnd = function () {
            var N = o(z, I, this._last).trim()
            return !(N && !this.addError("Unknown content '%0'", N))
          }),
          (Y.prototype.epilogue = function () {
            var O
            return (
              (O = this._tag.description),
              !(
                E(this._title) &&
                !this._tag.type &&
                O &&
                O.charAt(0) === '[' &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !W && !this.addError('Missing or invalid tag name'))
              )
            )
          }),
          (M = {
            access: ['parseAccess'],
            alias: ['parseNamePath', 'ensureEnd'],
            augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            example: ['parseCaption'],
            deprecated: ['parseDescription'],
            global: ['ensureEnd'],
            inner: ['ensureEnd'],
            instance: ['ensureEnd'],
            kind: ['parseKind'],
            mixes: ['parseNamePath', 'ensureEnd'],
            mixin: ['parseNamePathOptional', 'ensureEnd'],
            member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            method: ['parseNamePathOptional', 'ensureEnd'],
            module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            func: ['parseNamePathOptional', 'ensureEnd'],
            function: ['parseNamePathOptional', 'ensureEnd'],
            var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            name: ['parseNamePath', 'ensureEnd'],
            namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            private: ['parseType', 'parseDescription'],
            protected: ['parseType', 'parseDescription'],
            public: ['parseType', 'parseDescription'],
            readonly: ['ensureEnd'],
            requires: ['parseNamePath', 'ensureEnd'],
            since: ['parseDescription'],
            static: ['ensureEnd'],
            summary: ['parseDescription'],
            this: ['parseThis', 'ensureEnd'],
            todo: ['parseDescription'],
            typedef: ['parseType', 'parseNamePathOptional'],
            variation: ['parseVariation'],
            version: ['parseDescription'],
          }),
          (Y.prototype.parse = function () {
            var O, $, G, fe
            if (!this._title && !this.addError('Missing or invalid title'))
              return null
            for (
              this._last = H(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    z.slice(0, this._last).replace(/\s*$/, '').length,
                  ].map(be)),
                a(M, this._title)
                  ? (G = M[this._title])
                  : (G = [
                      'parseType',
                      'parseName',
                      'parseDescription',
                      'epilogue',
                    ]),
                O = 0,
                $ = G.length;
              O < $;
              ++O
            )
              if (((fe = G[O]), !this[fe]())) return null
            return this._tag
          })
        function Se(N) {
          var O, $, G
          if (!Ee()) return null
          for (O = k(), $ = new Y(N, O), G = $.parse(); I < $._last; ) B()
          return G
        }
        function T(N) {
          var O = '',
            $,
            G
          for (G = !0; I < J && (($ = z.charCodeAt(I)), !(G && $ === 64)); )
            n.code.isLineTerminator($)
              ? (G = !0)
              : G && !n.code.isWhiteSpace($) && (G = !1),
              (O += B())
          return N ? O : O.trim()
        }
        function P(N, O) {
          var $ = [],
            G,
            fe,
            oe,
            se,
            ve
          if (
            (O === void 0 && (O = {}),
            typeof O.unwrap == 'boolean' && O.unwrap ? (z = j(N)) : (z = N),
            (ue = N),
            O.tags)
          )
            if (Array.isArray(O.tags))
              for (oe = {}, se = 0, ve = O.tags.length; se < ve; se++)
                typeof O.tags[se] == 'string'
                  ? (oe[O.tags[se]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + O.tags)
            else t.throwError('Invalid "tags" parameter: ' + O.tags)
          for (
            J = z.length,
              I = 0,
              U = 0,
              Q = O.recoverable,
              W = O.sloppy,
              _ = O.strict,
              fe = T(O.preserveWhitespace);
            (G = Se(O)), !!G;

          )
            (!oe || oe.hasOwnProperty(G.title)) && $.push(G)
          return { description: fe, tags: $ }
        }
        w.parse = P
      })((r = {})),
        (Ye.version = t.VERSION),
        (Ye.parse = r.parse),
        (Ye.parseType = e.parseType),
        (Ye.parseParamType = e.parseParamType),
        (Ye.unwrapComment = j),
        (Ye.Syntax = i(e.Syntax)),
        (Ye.Error = t.DoctrineError),
        (Ye.type = {
          Syntax: Ye.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        })
    })()
  })
  function Ft() {
    return (Ft =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t]
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }).apply(this, arguments)
  }
  function Qi(e, t) {
    if (e == null) return {}
    var r,
      n,
      a = {},
      o = Object.keys(e)
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r])
    return a
  }
  function Ki(e) {
    var t = Fe(e),
      r = Fe(function (n) {
        t.current && t.current(n)
      })
    return (t.current = e), r.current
  }
  function Rg(e, t, r) {
    var n = Ki(r),
      a = ne(function () {
        return e.toHsva(t)
      }),
      o = a[0],
      i = a[1],
      s = Fe({ color: t, hsva: o })
    ge(
      function () {
        if (!e.equal(t, s.current.color)) {
          var d = e.toHsva(t)
          ;(s.current = { hsva: d, color: t }), i(d)
        }
      },
      [t, e]
    ),
      ge(
        function () {
          var d
          Og(o, s.current.hsva) ||
            e.equal((d = e.fromHsva(o)), s.current.color) ||
            ((s.current = { hsva: o, color: d }), n(d))
        },
        [o, e, n]
      )
    var u = ye(function (d) {
      i(function (m) {
        return Object.assign({}, m, d)
      })
    }, [])
    return [o, u]
  }
  var lr,
    tn,
    Yi,
    Cg,
    xg,
    Zi,
    rn,
    eu,
    Ce,
    yR,
    gR,
    Ji,
    mR,
    bR,
    AR,
    ER,
    Fg,
    Xi,
    ha,
    wg,
    vR,
    fa,
    DR,
    Bg,
    _g,
    Tg,
    Og,
    Pg,
    CR,
    xR,
    SR,
    FR,
    Sg,
    Ig,
    wR,
    BR,
    kg,
    _R,
    Ng,
    TR,
    jg,
    OR,
    Mg,
    qg = Xe(() => {
      l()
      c()
      p()
      Bt()
      ;(lr = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          r === void 0 && (r = 1),
          e > r ? r : e < t ? t : e
        )
      }),
        (tn = function (e) {
          return 'touches' in e
        }),
        (Yi = function (e) {
          return (e && e.ownerDocument.defaultView) || self
        }),
        (Cg = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = tn(t)
              ? (function (o, i) {
                  for (var s = 0; s < o.length; s++)
                    if (o[s].identifier === i) return o[s]
                  return o[0]
                })(t.touches, r)
              : t
          return {
            left: lr((a.pageX - (n.left + Yi(e).pageXOffset)) / n.width),
            top: lr((a.pageY - (n.top + Yi(e).pageYOffset)) / n.height),
          }
        }),
        (xg = function (e) {
          !tn(e) && e.preventDefault()
        }),
        (Zi = g.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = Qi(e, ['onMove', 'onKey']),
            a = Fe(null),
            o = Ki(t),
            i = Ki(r),
            s = Fe(null),
            u = Fe(!1),
            d = nt(
              function () {
                var y = function (x) {
                    xg(x),
                      (tn(x) ? x.touches.length > 0 : x.buttons > 0) &&
                      a.current
                        ? o(Cg(a.current, x, s.current))
                        : A(!1)
                  },
                  E = function () {
                    return A(!1)
                  }
                function A(x) {
                  var F = u.current,
                    R = Yi(a.current),
                    j = x ? R.addEventListener : R.removeEventListener
                  j(F ? 'touchmove' : 'mousemove', y),
                    j(F ? 'touchend' : 'mouseup', E)
                }
                return [
                  function (x) {
                    var F = x.nativeEvent,
                      R = a.current
                    if (
                      R &&
                      (xg(F),
                      !(function (L, w) {
                        return w && !tn(L)
                      })(F, u.current) && R)
                    ) {
                      if (tn(F)) {
                        u.current = !0
                        var j = F.changedTouches || []
                        j.length && (s.current = j[0].identifier)
                      }
                      R.focus(), o(Cg(R, F, s.current)), A(!0)
                    }
                  },
                  function (x) {
                    var F = x.which || x.keyCode
                    F < 37 ||
                      F > 40 ||
                      (x.preventDefault(),
                      i({
                        left: F === 39 ? 0.05 : F === 37 ? -0.05 : 0,
                        top: F === 40 ? 0.05 : F === 38 ? -0.05 : 0,
                      }))
                  },
                  A,
                ]
              },
              [i, o]
            ),
            m = d[0],
            b = d[1],
            h = d[2]
          return (
            ge(
              function () {
                return h
              },
              [h]
            ),
            g.createElement(
              'div',
              Ft({}, n, {
                onTouchStart: m,
                onMouseDown: m,
                className: 'react-colorful__interactive',
                ref: a,
                onKeyDown: b,
                tabIndex: 0,
                role: 'slider',
              })
            )
          )
        })),
        (rn = function (e) {
          return e.filter(Boolean).join(' ')
        }),
        (eu = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            o = rn(['react-colorful__pointer', e.className])
          return g.createElement(
            'div',
            {
              className: o,
              style: { top: 100 * a + '%', left: 100 * r + '%' },
            },
            g.createElement('div', {
              className: 'react-colorful__pointer-fill',
              style: { backgroundColor: t },
            })
          )
        }),
        (Ce = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = Math.pow(10, t)),
            Math.round(r * e) / r
          )
        }),
        (yR = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
        (gR = function (e) {
          return Bg(Ji(e))
        }),
        (Ji = function (e) {
          return (
            e[0] === '#' && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    e.length === 4 ? Ce(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a:
                    e.length === 8
                      ? Ce(parseInt(e.substring(6, 8), 16) / 255, 2)
                      : 1,
                }
          )
        }),
        (mR = function (e, t) {
          return t === void 0 && (t = 'deg'), Number(e) * (yR[t] || 1)
        }),
        (bR = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            )
          return t
            ? AR({
                h: mR(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 }
        }),
        (AR = function (e) {
          var t = e.s,
            r = e.l
          return {
            h: e.h,
            s:
              (t *= (r < 50 ? r : 100 - r) / 100) > 0
                ? ((2 * t) / (r + t)) * 100
                : 0,
            v: r + t,
            a: e.a,
          }
        }),
        (ER = function (e) {
          return DR(wg(e))
        }),
        (Fg = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100
          return {
            h: Ce(e.h),
            s: Ce(
              a > 0 && a < 200
                ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                : 0
            ),
            l: Ce(a / 2),
            a: Ce(n, 2),
          }
        }),
        (Xi = function (e) {
          var t = Fg(e)
          return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)'
        }),
        (ha = function (e) {
          var t = Fg(e)
          return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')'
        }),
        (wg = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a
          ;(t = (t / 360) * 6), (r /= 100), (n /= 100)
          var o = Math.floor(t),
            i = n * (1 - r),
            s = n * (1 - (t - o) * r),
            u = n * (1 - (1 - t + o) * r),
            d = o % 6
          return {
            r: Ce(255 * [n, s, i, i, u, n][d]),
            g: Ce(255 * [u, n, n, s, i, i][d]),
            b: Ce(255 * [i, i, u, n, n, s][d]),
            a: Ce(a, 2),
          }
        }),
        (vR = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            )
          return t
            ? Bg({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 }
        }),
        (fa = function (e) {
          var t = e.toString(16)
          return t.length < 2 ? '0' + t : t
        }),
        (DR = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = a < 1 ? fa(Ce(255 * a)) : ''
          return '#' + fa(t) + fa(r) + fa(n) + o
        }),
        (Bg = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = Math.max(t, r, n),
            i = o - Math.min(t, r, n),
            s = i
              ? o === t
                ? (r - n) / i
                : o === r
                ? 2 + (n - t) / i
                : 4 + (t - r) / i
              : 0
          return {
            h: Ce(60 * (s < 0 ? s + 6 : s)),
            s: Ce(o ? (i / o) * 100 : 0),
            v: Ce((o / 255) * 100),
            a,
          }
        }),
        (_g = g.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = rn(['react-colorful__hue', e.className])
          return g.createElement(
            'div',
            { className: n },
            g.createElement(
              Zi,
              {
                onMove: function (a) {
                  r({ h: 360 * a.left })
                },
                onKey: function (a) {
                  r({ h: lr(t + 360 * a.left, 0, 360) })
                },
                'aria-label': 'Hue',
                'aria-valuenow': Ce(t),
                'aria-valuemax': '360',
                'aria-valuemin': '0',
              },
              g.createElement(eu, {
                className: 'react-colorful__hue-pointer',
                left: t / 360,
                color: Xi({ h: t, s: 100, v: 100, a: 1 }),
              })
            )
          )
        })),
        (Tg = g.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = { backgroundColor: Xi({ h: t.h, s: 100, v: 100, a: 1 }) }
          return g.createElement(
            'div',
            { className: 'react-colorful__saturation', style: n },
            g.createElement(
              Zi,
              {
                onMove: function (a) {
                  r({ s: 100 * a.left, v: 100 - 100 * a.top })
                },
                onKey: function (a) {
                  r({
                    s: lr(t.s + 100 * a.left, 0, 100),
                    v: lr(t.v - 100 * a.top, 0, 100),
                  })
                },
                'aria-label': 'Color',
                'aria-valuetext':
                  'Saturation ' + Ce(t.s) + '%, Brightness ' + Ce(t.v) + '%',
              },
              g.createElement(eu, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: Xi(t),
              })
            )
          )
        })),
        (Og = function (e, t) {
          if (e === t) return !0
          for (var r in e) if (e[r] !== t[r]) return !1
          return !0
        }),
        (Pg = function (e, t) {
          return e.replace(/\s/g, '') === t.replace(/\s/g, '')
        }),
        (CR = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || Og(Ji(e), Ji(t))
        })
      ;(SR = typeof window < 'u' ? Pu : ge),
        (FR = function () {
          return (
            xR || (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
          )
        }),
        (Sg = new Map()),
        (Ig = function (e) {
          SR(function () {
            var t = e.current ? e.current.ownerDocument : document
            if (t !== void 0 && !Sg.has(t)) {
              var r = t.createElement('style')
              ;(r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                Sg.set(t, r)
              var n = FR()
              n && r.setAttribute('nonce', n), t.head.appendChild(r)
            }
          }, [])
        }),
        (wR = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Qi(e, ['className', 'colorModel', 'color', 'onChange']),
            s = Fe(null)
          Ig(s)
          var u = Rg(r, a, o),
            d = u[0],
            m = u[1],
            b = rn(['react-colorful', t])
          return g.createElement(
            'div',
            Ft({}, i, { ref: s, className: b }),
            g.createElement(Tg, { hsva: d, onChange: m }),
            g.createElement(_g, {
              hue: d.h,
              onChange: m,
              className: 'react-colorful__last-control',
            })
          )
        }),
        (BR = {
          defaultColor: '000',
          toHsva: gR,
          fromHsva: function (e) {
            return ER({ h: e.h, s: e.s, v: e.v, a: 1 })
          },
          equal: CR,
        }),
        (kg = function (e) {
          return g.createElement(wR, Ft({}, e, { colorModel: BR }))
        }),
        (_R = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                'linear-gradient(90deg, ' +
                ha(Object.assign({}, r, { a: 0 })) +
                ', ' +
                ha(Object.assign({}, r, { a: 1 })) +
                ')',
            },
            o = rn(['react-colorful__alpha', t]),
            i = Ce(100 * r.a)
          return g.createElement(
            'div',
            { className: o },
            g.createElement('div', {
              className: 'react-colorful__alpha-gradient',
              style: a,
            }),
            g.createElement(
              Zi,
              {
                onMove: function (s) {
                  n({ a: s.left })
                },
                onKey: function (s) {
                  n({ a: lr(r.a + s.left) })
                },
                'aria-label': 'Alpha',
                'aria-valuetext': i + '%',
                'aria-valuenow': i,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
              },
              g.createElement(eu, {
                className: 'react-colorful__alpha-pointer',
                left: r.a,
                color: ha(r),
              })
            )
          )
        }),
        (Ng = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Qi(e, ['className', 'colorModel', 'color', 'onChange']),
            s = Fe(null)
          Ig(s)
          var u = Rg(r, a, o),
            d = u[0],
            m = u[1],
            b = rn(['react-colorful', t])
          return g.createElement(
            'div',
            Ft({}, i, { ref: s, className: b }),
            g.createElement(Tg, { hsva: d, onChange: m }),
            g.createElement(_g, { hue: d.h, onChange: m }),
            g.createElement(_R, {
              hsva: d,
              onChange: m,
              className: 'react-colorful__last-control',
            })
          )
        }),
        (TR = {
          defaultColor: 'hsla(0, 0%, 0%, 1)',
          toHsva: bR,
          fromHsva: ha,
          equal: Pg,
        }),
        (jg = function (e) {
          return g.createElement(Ng, Ft({}, e, { colorModel: TR }))
        }),
        (OR = {
          defaultColor: 'rgba(0, 0, 0, 1)',
          toHsva: vR,
          fromHsva: function (e) {
            var t = wg(e)
            return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')'
          },
          equal: Pg,
        }),
        (Mg = function (e) {
          return g.createElement(Ng, Ft({}, e, { colorModel: OR }))
        })
    })
  var $g = S((rae, Lg) => {
    'use strict'
    l()
    c()
    p()
    Lg.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    }
  })
  var tu = S((iae, zg) => {
    l()
    c()
    p()
    var nn = $g(),
      Ug = {}
    for (let e of Object.keys(nn)) Ug[nn[e]] = e
    var K = {
      rgb: { channels: 3, labels: 'rgb' },
      hsl: { channels: 3, labels: 'hsl' },
      hsv: { channels: 3, labels: 'hsv' },
      hwb: { channels: 3, labels: 'hwb' },
      cmyk: { channels: 4, labels: 'cmyk' },
      xyz: { channels: 3, labels: 'xyz' },
      lab: { channels: 3, labels: 'lab' },
      lch: { channels: 3, labels: 'lch' },
      hex: { channels: 1, labels: ['hex'] },
      keyword: { channels: 1, labels: ['keyword'] },
      ansi16: { channels: 1, labels: ['ansi16'] },
      ansi256: { channels: 1, labels: ['ansi256'] },
      hcg: { channels: 3, labels: ['h', 'c', 'g'] },
      apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
      gray: { channels: 1, labels: ['gray'] },
    }
    zg.exports = K
    for (let e of Object.keys(K)) {
      if (!('channels' in K[e]))
        throw new Error('missing channels property: ' + e)
      if (!('labels' in K[e]))
        throw new Error('missing channel labels property: ' + e)
      if (K[e].labels.length !== K[e].channels)
        throw new Error('channel and label counts mismatch: ' + e)
      let { channels: t, labels: r } = K[e]
      delete K[e].channels,
        delete K[e].labels,
        Object.defineProperty(K[e], 'channels', { value: t }),
        Object.defineProperty(K[e], 'labels', { value: r })
    }
    K.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        o = Math.max(t, r, n),
        i = o - a,
        s,
        u
      o === a
        ? (s = 0)
        : t === o
        ? (s = (r - n) / i)
        : r === o
        ? (s = 2 + (n - t) / i)
        : n === o && (s = 4 + (t - r) / i),
        (s = Math.min(s * 60, 360)),
        s < 0 && (s += 360)
      let d = (a + o) / 2
      return (
        o === a
          ? (u = 0)
          : d <= 0.5
          ? (u = i / (o + a))
          : (u = i / (2 - o - a)),
        [s, u * 100, d * 100]
      )
    }
    K.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        o,
        i = e[0] / 255,
        s = e[1] / 255,
        u = e[2] / 255,
        d = Math.max(i, s, u),
        m = d - Math.min(i, s, u),
        b = function (h) {
          return (d - h) / 6 / m + 1 / 2
        }
      return (
        m === 0
          ? ((a = 0), (o = 0))
          : ((o = m / d),
            (t = b(i)),
            (r = b(s)),
            (n = b(u)),
            i === d
              ? (a = n - r)
              : s === d
              ? (a = 1 / 3 + t - n)
              : u === d && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, d * 100]
      )
    }
    K.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = K.rgb.hsl(e)[0],
        o = (1 / 255) * Math.min(t, Math.min(r, n))
      return (
        (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100]
      )
    }
    K.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        o = (1 - t - a) / (1 - a) || 0,
        i = (1 - r - a) / (1 - a) || 0,
        s = (1 - n - a) / (1 - a) || 0
      return [o * 100, i * 100, s * 100, a * 100]
    }
    function PR(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2
    }
    K.rgb.keyword = function (e) {
      let t = Ug[e]
      if (t) return t
      let r = 1 / 0,
        n
      for (let a of Object.keys(nn)) {
        let o = nn[a],
          i = PR(e, o)
        i < r && ((r = i), (n = a))
      }
      return n
    }
    K.keyword.rgb = function (e) {
      return nn[e]
    }
    K.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255
      ;(t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92)
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        o = t * 0.2126 + r * 0.7152 + n * 0.0722,
        i = t * 0.0193 + r * 0.1192 + n * 0.9505
      return [a * 100, o * 100, i * 100]
    }
    K.rgb.lab = function (e) {
      let t = K.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2]
      ;(r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116)
      let o = 116 * n - 16,
        i = 500 * (r - n),
        s = 200 * (n - a)
      return [o, i, s]
    }
    K.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i
      if (r === 0) return (i = n * 255), [i, i, i]
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r)
      let s = 2 * n - a,
        u = [0, 0, 0]
      for (let d = 0; d < 3; d++)
        (o = t + (1 / 3) * -(d - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (i = s + (a - s) * 6 * o)
            : 2 * o < 1
            ? (i = a)
            : 3 * o < 2
            ? (i = s + (a - s) * (2 / 3 - o) * 6)
            : (i = s),
          (u[d] = i * 255)
      return u
    }
    K.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        o = Math.max(n, 0.01)
      ;(n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o)
      let i = (n + r) / 2,
        s = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r)
      return [t, s * 100, i * 100]
    }
    K.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        o = t - Math.floor(t),
        i = 255 * n * (1 - r),
        s = 255 * n * (1 - r * o),
        u = 255 * n * (1 - r * (1 - o))
      switch (((n *= 255), a)) {
        case 0:
          return [n, u, i]
        case 1:
          return [s, n, i]
        case 2:
          return [i, n, u]
        case 3:
          return [i, s, n]
        case 4:
          return [u, i, n]
        case 5:
          return [n, i, s]
      }
    }
    K.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        o,
        i
      i = (2 - r) * n
      let s = (2 - r) * a
      return (
        (o = r * a),
        (o /= s <= 1 ? s : 2 - s),
        (o = o || 0),
        (i /= 2),
        [t, o * 100, i * 100]
      )
    }
    K.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        o
      a > 1 && ((r /= a), (n /= a))
      let i = Math.floor(6 * t),
        s = 1 - n
      ;(o = 6 * t - i), i & 1 && (o = 1 - o)
      let u = r + o * (s - r),
        d,
        m,
        b
      switch (i) {
        default:
        case 6:
        case 0:
          ;(d = s), (m = u), (b = r)
          break
        case 1:
          ;(d = u), (m = s), (b = r)
          break
        case 2:
          ;(d = r), (m = s), (b = u)
          break
        case 3:
          ;(d = r), (m = u), (b = s)
          break
        case 4:
          ;(d = u), (m = r), (b = s)
          break
        case 5:
          ;(d = s), (m = r), (b = u)
          break
      }
      return [d * 255, m * 255, b * 255]
    }
    K.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - a) + a),
        i = 1 - Math.min(1, r * (1 - a) + a),
        s = 1 - Math.min(1, n * (1 - a) + a)
      return [o * 255, i * 255, s * 255]
    }
    K.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (i = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (i = Math.min(Math.max(0, i), 1)),
        [a * 255, o * 255, i * 255]
      )
    }
    K.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2]
      ;(t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116)
      let a = 116 * r - 16,
        o = 500 * (t - r),
        i = 200 * (r - n)
      return [a, o, i]
    }
    K.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        o,
        i
      ;(o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200)
      let s = o ** 3,
        u = a ** 3,
        d = i ** 3
      return (
        (o = s > 0.008856 ? s : (o - 16 / 116) / 7.787),
        (a = u > 0.008856 ? u : (a - 16 / 116) / 7.787),
        (i = d > 0.008856 ? d : (i - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (i *= 108.883),
        [a, o, i]
      )
    }
    K.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a
      ;(a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360)
      let i = Math.sqrt(r * r + n * n)
      return [t, i, a]
    }
    K.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        o = r * Math.cos(a),
        i = r * Math.sin(a)
      return [t, o, i]
    }
    K.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        o = t === null ? K.rgb.hsv(e)[2] : t
      if (((o = Math.round(o / 50)), o === 0)) return 30
      let i =
        30 +
        ((Math.round(a / 255) << 2) |
          (Math.round(n / 255) << 1) |
          Math.round(r / 255))
      return o === 2 && (i += 60), i
    }
    K.hsv.ansi16 = function (e) {
      return K.rgb.ansi16(K.hsv.rgb(e), e[2])
    }
    K.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2]
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5)
    }
    K.ansi16.rgb = function (e) {
      let t = e % 10
      if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t]
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        o = ((t >> 2) & 1) * r * 255
      return [n, a, o]
    }
    K.ansi256.rgb = function (e) {
      if (e >= 232) {
        let o = (e - 232) * 10 + 8
        return [o, o, o]
      }
      e -= 16
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255
      return [r, n, a]
    }
    K.rgb.hex = function (e) {
      let r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase()
      return '000000'.substring(r.length) + r
    }
    K.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
      if (!t) return [0, 0, 0]
      let r = t[0]
      t[0].length === 3 &&
        (r = r
          .split('')
          .map((s) => s + s)
          .join(''))
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        o = (n >> 8) & 255,
        i = n & 255
      return [a, o, i]
    }
    K.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        o = Math.min(Math.min(t, r), n),
        i = a - o,
        s,
        u
      return (
        i < 1 ? (s = o / (1 - i)) : (s = 0),
        i <= 0
          ? (u = 0)
          : a === t
          ? (u = ((r - n) / i) % 6)
          : a === r
          ? (u = 2 + (n - t) / i)
          : (u = 4 + (t - r) / i),
        (u /= 6),
        (u %= 1),
        [u * 360, i * 100, s * 100]
      )
    }
    K.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100]
    }
    K.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100]
    }
    K.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100
      if (r === 0) return [n * 255, n * 255, n * 255]
      let a = [0, 0, 0],
        o = (t % 1) * 6,
        i = o % 1,
        s = 1 - i,
        u = 0
      switch (Math.floor(o)) {
        case 0:
          ;(a[0] = 1), (a[1] = i), (a[2] = 0)
          break
        case 1:
          ;(a[0] = s), (a[1] = 1), (a[2] = 0)
          break
        case 2:
          ;(a[0] = 0), (a[1] = 1), (a[2] = i)
          break
        case 3:
          ;(a[0] = 0), (a[1] = s), (a[2] = 1)
          break
        case 4:
          ;(a[0] = i), (a[1] = 0), (a[2] = 1)
          break
        default:
          ;(a[0] = 1), (a[1] = 0), (a[2] = s)
      }
      return (
        (u = (1 - r) * n),
        [(r * a[0] + u) * 255, (r * a[1] + u) * 255, (r * a[2] + u) * 255]
      )
    }
    K.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100]
    }
    K.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0
      return (
        n > 0 && n < 0.5
          ? (a = t / (2 * n))
          : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      )
    }
    K.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t)
      return [e[0], (n - t) * 100, (1 - n) * 100]
    }
    K.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        o = 0
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100]
    }
    K.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255]
    }
    K.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535]
    }
    K.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255]
    }
    K.gray.hsl = function (e) {
      return [0, 0, e[0]]
    }
    K.gray.hsv = K.gray.hsl
    K.gray.hwb = function (e) {
      return [0, 100, e[0]]
    }
    K.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]]
    }
    K.gray.lab = function (e) {
      return [e[0], 0, 0]
    }
    K.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase()
      return '000000'.substring(n.length) + n
    }
    K.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100]
    }
  })
  var Gg = S((cae, Hg) => {
    l()
    c()
    p()
    var ya = tu()
    function RR() {
      let e = {},
        t = Object.keys(ya)
      for (let r = t.length, n = 0; n < r; n++)
        e[t[n]] = { distance: -1, parent: null }
      return e
    }
    function IR(e) {
      let t = RR(),
        r = [e]
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(ya[n])
        for (let o = a.length, i = 0; i < o; i++) {
          let s = a[i],
            u = t[s]
          u.distance === -1 &&
            ((u.distance = t[n].distance + 1), (u.parent = n), r.unshift(s))
        }
      }
      return t
    }
    function kR(e, t) {
      return function (r) {
        return t(e(r))
      }
    }
    function NR(e, t) {
      let r = [t[e].parent, e],
        n = ya[t[e].parent][e],
        a = t[e].parent
      for (; t[a].parent; )
        r.unshift(t[a].parent),
          (n = kR(ya[t[a].parent][a], n)),
          (a = t[a].parent)
      return (n.conversion = r), n
    }
    Hg.exports = function (e) {
      let t = IR(e),
        r = {},
        n = Object.keys(t)
      for (let a = n.length, o = 0; o < a; o++) {
        let i = n[o]
        t[i].parent !== null && (r[i] = NR(i, t))
      }
      return r
    }
  })
  var Vg = S((hae, Wg) => {
    l()
    c()
    p()
    var ru = tu(),
      jR = Gg(),
      cr = {},
      MR = Object.keys(ru)
    function qR(e) {
      let t = function (...r) {
        let n = r[0]
        return n == null ? n : (n.length > 1 && (r = n), e(r))
      }
      return 'conversion' in e && (t.conversion = e.conversion), t
    }
    function LR(e) {
      let t = function (...r) {
        let n = r[0]
        if (n == null) return n
        n.length > 1 && (r = n)
        let a = e(r)
        if (typeof a == 'object')
          for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i])
        return a
      }
      return 'conversion' in e && (t.conversion = e.conversion), t
    }
    MR.forEach((e) => {
      ;(cr[e] = {}),
        Object.defineProperty(cr[e], 'channels', { value: ru[e].channels }),
        Object.defineProperty(cr[e], 'labels', { value: ru[e].labels })
      let t = jR(e)
      Object.keys(t).forEach((n) => {
        let a = t[n]
        ;(cr[e][n] = LR(a)), (cr[e][n].raw = qR(a))
      })
    })
    Wg.exports = cr
  })
  var Yg = S((bae, Kg) => {
    l()
    c()
    p()
    var $R = qe(),
      UR = function () {
        return $R.Date.now()
      }
    Kg.exports = UR
  })
  var Xg = S((Dae, Jg) => {
    l()
    c()
    p()
    var zR = /\s/
    function HR(e) {
      for (var t = e.length; t-- && zR.test(e.charAt(t)); );
      return t
    }
    Jg.exports = HR
  })
  var Zg = S((Fae, Qg) => {
    l()
    c()
    p()
    var GR = Xg(),
      WR = /^\s+/
    function VR(e) {
      return e && e.slice(0, GR(e) + 1).replace(WR, '')
    }
    Qg.exports = VR
  })
  var nm = S((Tae, rm) => {
    l()
    c()
    p()
    var KR = Zg(),
      em = ze(),
      YR = Or(),
      tm = 0 / 0,
      JR = /^[-+]0x[0-9a-f]+$/i,
      XR = /^0b[01]+$/i,
      QR = /^0o[0-7]+$/i,
      ZR = parseInt
    function eI(e) {
      if (typeof e == 'number') return e
      if (YR(e)) return tm
      if (em(e)) {
        var t = typeof e.valueOf == 'function' ? e.valueOf() : e
        e = em(t) ? t + '' : t
      }
      if (typeof e != 'string') return e === 0 ? e : +e
      e = KR(e)
      var r = XR.test(e)
      return r || QR.test(e) ? ZR(e.slice(2), r ? 2 : 8) : JR.test(e) ? tm : +e
    }
    rm.exports = eI
  })
  var im = S((Iae, om) => {
    l()
    c()
    p()
    var tI = ze(),
      nu = Yg(),
      am = nm(),
      rI = 'Expected a function',
      nI = Math.max,
      aI = Math.min
    function oI(e, t, r) {
      var n,
        a,
        o,
        i,
        s,
        u,
        d = 0,
        m = !1,
        b = !1,
        h = !0
      if (typeof e != 'function') throw new TypeError(rI)
      ;(t = am(t) || 0),
        tI(r) &&
          ((m = !!r.leading),
          (b = 'maxWait' in r),
          (o = b ? nI(am(r.maxWait) || 0, t) : o),
          (h = 'trailing' in r ? !!r.trailing : h))
      function y(M) {
        var I = n,
          U = a
        return (n = a = void 0), (d = M), (i = e.apply(U, I)), i
      }
      function E(M) {
        return (d = M), (s = setTimeout(F, t)), m ? y(M) : i
      }
      function A(M) {
        var I = M - u,
          U = M - d,
          J = t - I
        return b ? aI(J, o - U) : J
      }
      function x(M) {
        var I = M - u,
          U = M - d
        return u === void 0 || I >= t || I < 0 || (b && U >= o)
      }
      function F() {
        var M = nu()
        if (x(M)) return R(M)
        s = setTimeout(F, A(M))
      }
      function R(M) {
        return (s = void 0), h && n ? y(M) : ((n = a = void 0), i)
      }
      function j() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = u = a = s = void 0)
      }
      function L() {
        return s === void 0 ? i : R(nu())
      }
      function w() {
        var M = nu(),
          I = x(M)
        if (((n = arguments), (a = this), (u = M), I)) {
          if (s === void 0) return E(u)
          if (b) return clearTimeout(s), (s = setTimeout(F, t)), y(u)
        }
        return s === void 0 && (s = setTimeout(F, t)), i
      }
      return (w.cancel = j), (w.flush = L), w
    }
    om.exports = oI
  })
  var sm = S((Mae, um) => {
    l()
    c()
    p()
    var iI = im(),
      uI = ze(),
      sI = 'Expected a function'
    function lI(e, t, r) {
      var n = !0,
        a = !0
      if (typeof e != 'function') throw new TypeError(sI)
      return (
        uI(r) &&
          ((n = 'leading' in r ? !!r.leading : n),
          (a = 'trailing' in r ? !!r.trailing : a)),
        iI(e, t, { leading: n, maxWait: t, trailing: a })
      )
    }
    um.exports = lI
  })
  var hm = {}
  Bu(hm, { ColorControl: () => fm, default: () => wI })
  var je,
    pm,
    cI,
    pI,
    dI,
    fI,
    hI,
    yI,
    gI,
    lm,
    mI,
    bI,
    dm,
    ga,
    AI,
    EI,
    vI,
    au,
    DI,
    CI,
    ma,
    cm,
    pr,
    xI,
    SI,
    ba,
    FI,
    fm,
    wI,
    ym = Xe(() => {
      l()
      c()
      p()
      Ka()
      Bt()
      qg()
      ;(je = pe(Vg(), 1)), (pm = pe(sm(), 1))
      Ja()
      gr()
      ;(cI = q.div({ position: 'relative', maxWidth: 250 })),
        (pI = q(sn)({ position: 'absolute', zIndex: 1, top: 4, left: 4 })),
        (dI = q.div({
          width: 200,
          margin: 5,
          '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
          '.react-colorful__hue': {
            boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
          },
          '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
        })),
        (fI = q(Ua)(({ theme: e }) => ({
          fontFamily: e.typography.fonts.base,
        }))),
        (hI = q.div({
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (yI = q.div(({ theme: e, active: t }) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (gI = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (lm = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
          let o = `linear-gradient(${e}, ${e}), ${gI}, linear-gradient(#fff, #fff)`
          return g.createElement(yI, {
            ...a,
            active: t,
            onClick: r,
            style: { ...n, backgroundImage: o },
          })
        }),
        (mI = q(Te.Input)(({ theme: e }) => ({
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: 'border-box',
          fontFamily: e.typography.fonts.base,
        }))),
        (bI = q(Oe)(({ theme: e }) => ({
          position: 'absolute',
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: 'border-box',
          cursor: 'pointer',
          color: e.input.color,
        }))),
        (dm = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
          dm || {}
        )),
        (ga = Object.values(dm)),
        (AI = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        (EI =
          /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (vI =
          /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (au = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (DI = /^\s*#?([0-9a-f]{3})\s*$/i),
        (CI = { hex: kg, rgb: Mg, hsl: jg }),
        (ma = {
          hex: 'transparent',
          rgb: 'rgba(0, 0, 0, 0)',
          hsl: 'hsla(0, 0%, 0%, 0)',
        }),
        (cm = (e) => {
          let t = e?.match(AI)
          if (!t) return [0, 0, 0, 1]
          let [, r, n, a, o = 1] = t
          return [r, n, a, o].map(Number)
        }),
        (pr = (e) => {
          if (!e) return
          let t = !0
          if (EI.test(e)) {
            let [i, s, u, d] = cm(e),
              [m, b, h] = je.default.rgb.hsl([i, s, u]) || [0, 0, 0]
            return {
              valid: t,
              value: e,
              keyword: je.default.rgb.keyword([i, s, u]),
              colorSpace: 'rgb',
              rgb: e,
              hsl: `hsla(${m}, ${b}%, ${h}%, ${d})`,
              hex: `#${je.default.rgb.hex([i, s, u]).toLowerCase()}`,
            }
          }
          if (vI.test(e)) {
            let [i, s, u, d] = cm(e),
              [m, b, h] = je.default.hsl.rgb([i, s, u]) || [0, 0, 0]
            return {
              valid: t,
              value: e,
              keyword: je.default.hsl.keyword([i, s, u]),
              colorSpace: 'hsl',
              rgb: `rgba(${m}, ${b}, ${h}, ${d})`,
              hsl: e,
              hex: `#${je.default.hsl.hex([i, s, u]).toLowerCase()}`,
            }
          }
          let r = e.replace('#', ''),
            n = je.default.keyword.rgb(r) || je.default.hex.rgb(r),
            a = je.default.rgb.hsl(n),
            o = e
          if (
            (/[^#a-f0-9]/i.test(e) ? (o = r) : au.test(e) && (o = `#${r}`),
            o.startsWith('#'))
          )
            t = au.test(o)
          else
            try {
              je.default.keyword.hex(o)
            } catch {
              t = !1
            }
          return {
            valid: t,
            value: o,
            keyword: je.default.rgb.keyword(n),
            colorSpace: 'hex',
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: o,
          }
        }),
        (xI = (e, t, r) => {
          if (!e || !t?.valid) return ma[r]
          if (r !== 'hex') return t?.[r] || ma[r]
          if (!t.hex.startsWith('#'))
            try {
              return `#${je.default.keyword.hex(t.hex)}`
            } catch {
              return ma.hex
            }
          let n = t.hex.match(DI)
          if (!n) return au.test(t.hex) ? t.hex : ma.hex
          let [a, o, i] = n[1].split('')
          return `#${a}${a}${o}${o}${i}${i}`
        }),
        (SI = (e, t) => {
          let [r, n] = ne(e || ''),
            [a, o] = ne(() => pr(r)),
            [i, s] = ne(a?.colorSpace || 'hex')
          ge(() => {
            let b = e || '',
              h = pr(b)
            n(b), o(h), s(h?.colorSpace || 'hex')
          }, [e])
          let u = nt(() => xI(r, a, i).toLowerCase(), [r, a, i]),
            d = ye(
              (b) => {
                let h = pr(b),
                  y = h?.value || b || ''
                n(y),
                  y === '' && (o(void 0), t(void 0)),
                  h && (o(h), s(h.colorSpace), t(h.value))
              },
              [t]
            ),
            m = ye(() => {
              let b = ga.indexOf(i) + 1
              b >= ga.length && (b = 0), s(ga[b])
              let h = a?.[ga[b]] || ''
              n(h), t(h)
            }, [a, i, t])
          return {
            value: r,
            realValue: u,
            updateValue: d,
            color: a,
            colorSpace: i,
            cycleColorSpace: m,
          }
        }),
        (ba = (e) => e.replace(/\s*/, '').toLowerCase()),
        (FI = (e, t, r) => {
          let [n, a] = ne(t?.valid ? [t] : [])
          ge(() => {
            t === void 0 && a([])
          }, [t])
          let o = nt(
              () =>
                (e || [])
                  .map((s) =>
                    typeof s == 'string'
                      ? pr(s)
                      : s.title
                      ? { ...pr(s.color), keyword: s.title }
                      : pr(s.color)
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n]
            ),
            i = ye(
              (s) => {
                s?.valid &&
                  (o.some((u) => ba(u[r]) === ba(s[r])) ||
                    a((u) => u.concat(s)))
              },
              [r, o]
            )
          return { presets: o, addPreset: i }
        }),
        (fm = ({
          name: e,
          value: t,
          onChange: r,
          onFocus: n,
          onBlur: a,
          presetColors: o,
          startOpen: i = !1,
        }) => {
          let s = ye((0, pm.default)(r, 200), [r]),
            {
              value: u,
              realValue: d,
              updateValue: m,
              color: b,
              colorSpace: h,
              cycleColorSpace: y,
            } = SI(t, s),
            { presets: E, addPreset: A } = FI(o, b, h),
            x = CI[h]
          return g.createElement(
            cI,
            null,
            g.createElement(
              pI,
              {
                startOpen: i,
                closeOnOutsideClick: !0,
                onVisibleChange: () => A(b),
                tooltip: g.createElement(
                  dI,
                  null,
                  g.createElement(x, {
                    color: d === 'transparent' ? '#000000' : d,
                    onChange: m,
                    onFocus: n,
                    onBlur: a,
                  }),
                  E.length > 0 &&
                    g.createElement(
                      hI,
                      null,
                      E.map((F, R) =>
                        g.createElement(
                          sn,
                          {
                            key: `${F.value}-${R}`,
                            hasChrome: !1,
                            tooltip: g.createElement(fI, {
                              note: F.keyword || F.value,
                            }),
                          },
                          g.createElement(lm, {
                            value: F[h],
                            active: b && ba(F[h]) === ba(b[h]),
                            onClick: () => m(F.value),
                          })
                        )
                      )
                    )
                ),
              },
              g.createElement(lm, { value: d, style: { margin: 4 } })
            ),
            g.createElement(mI, {
              id: Pe(e),
              value: u,
              onChange: (F) => m(F.target.value),
              onFocus: (F) => F.target.select(),
              placeholder: 'Choose color...',
            }),
            u ? g.createElement(bI, { icon: 'markup', onClick: y }) : null
          )
        }),
        (wI = fm)
    })
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  var Sa = 'addon-controls',
    Fa = 'controls'
  Bt()
  l()
  c()
  p()
  var XN = __STORYBOOKAPI__,
    {
      ActiveTabs: QN,
      Consumer: ZN,
      ManagerContext: ej,
      Provider: tj,
      addons: Ba,
      combineParameters: rj,
      controlOrMetaKey: nj,
      controlOrMetaSymbol: aj,
      eventMatchesShortcut: oj,
      eventToShortcut: ij,
      isMacLike: uj,
      isShortcutTaken: sj,
      keyToSymbol: lj,
      merge: cj,
      mockChannel: pj,
      optionOrAltSymbol: dj,
      shortcutMatchesShortcut: fj,
      shortcutToHumanString: hj,
      types: Ru,
      useAddonState: yj,
      useArgTypes: _a,
      useArgs: Iu,
      useChannel: gj,
      useGlobalTypes: mj,
      useGlobals: ku,
      useParameter: Ta,
      useSharedState: bj,
      useStoryPrepared: Aj,
      useStorybookApi: Ej,
      useStorybookState: Nu,
    } = __STORYBOOKAPI__
  gr()
  l()
  c()
  p()
  Ka()
  Bt()
  Ja()
  gr()
  l()
  c()
  p()
  l()
  c()
  p()
  function we() {
    return (
      (we = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }),
      we.apply(this, arguments)
    )
  }
  l()
  c()
  p()
  function Xa(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  l()
  c()
  p()
  l()
  c()
  p()
  function Ze(e, t) {
    return (
      (Ze = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n
          }),
      Ze(e, t)
    )
  }
  function Qa(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Ze(e, t)
  }
  l()
  c()
  p()
  l()
  c()
  p()
  function br(e) {
    return (
      (br = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r)
          }),
      br(e)
    )
  }
  l()
  c()
  p()
  function Za(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  }
  l()
  c()
  p()
  l()
  c()
  p()
  function eo() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1
    if (typeof Proxy == 'function') return !0
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      )
    } catch {
      return !1
    }
  }
  function Ot(e, t, r) {
    return (
      eo()
        ? (Ot = Reflect.construct.bind())
        : (Ot = function (a, o, i) {
            var s = [null]
            s.push.apply(s, o)
            var u = Function.bind.apply(a, s),
              d = new u()
            return i && Ze(d, i.prototype), d
          }),
      Ot.apply(null, arguments)
    )
  }
  function Ar(e) {
    var t = typeof Map == 'function' ? new Map() : void 0
    return (
      (Ar = function (n) {
        if (n === null || !Za(n)) return n
        if (typeof n != 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n)
          t.set(n, a)
        }
        function a() {
          return Ot(n, arguments, br(this).constructor)
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Ze(a, n)
        )
      }),
      Ar(e)
    )
  }
  l()
  c()
  p()
  var Re = (function (e) {
    Qa(t, e)
    function t(r) {
      var n
      if (!0)
        n =
          e.call(
            this,
            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
              r +
              ' for more information.'
          ) || this
      else for (var a, o, i; i < a; i++);
      return Xa(n)
    }
    return t
  })(Ar(Error))
  function Uu(e, t) {
    return e.substr(-t.length) === t
  }
  var t2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  function zu(e) {
    if (typeof e != 'string') return e
    var t = e.match(t2)
    return t ? parseFloat(e) : e
  }
  var r2 = function (t) {
      return function (r, n) {
        n === void 0 && (n = '16px')
        var a = r,
          o = n
        if (typeof r == 'string') {
          if (!Uu(r, 'px')) throw new Re(69, t, r)
          a = zu(r)
        }
        if (typeof n == 'string') {
          if (!Uu(n, 'px')) throw new Re(70, t, n)
          o = zu(n)
        }
        if (typeof a == 'string') throw new Re(71, r, t)
        if (typeof o == 'string') throw new Re(72, n, t)
        return '' + a / o + t
      }
    },
    Gu = r2,
    ZM = Gu('em')
  var eq = Gu('rem')
  function to(e) {
    return Math.round(e * 255)
  }
  function n2(e, t, r) {
    return to(e) + ',' + to(t) + ',' + to(r)
  }
  function Er(e, t, r, n) {
    if ((n === void 0 && (n = n2), t === 0)) return n(r, r, r)
    var a = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * r - 1)) * t,
      i = o * (1 - Math.abs((a % 2) - 1)),
      s = 0,
      u = 0,
      d = 0
    a >= 0 && a < 1
      ? ((s = o), (u = i))
      : a >= 1 && a < 2
      ? ((s = i), (u = o))
      : a >= 2 && a < 3
      ? ((u = o), (d = i))
      : a >= 3 && a < 4
      ? ((u = i), (d = o))
      : a >= 4 && a < 5
      ? ((s = i), (d = o))
      : a >= 5 && a < 6 && ((s = o), (d = i))
    var m = r - o / 2,
      b = s + m,
      h = u + m,
      y = d + m
    return n(b, h, y)
  }
  var Hu = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  }
  function a2(e) {
    if (typeof e != 'string') return e
    var t = e.toLowerCase()
    return Hu[t] ? '#' + Hu[t] : e
  }
  var o2 = /^#[a-fA-F0-9]{6}$/,
    i2 = /^#[a-fA-F0-9]{8}$/,
    u2 = /^#[a-fA-F0-9]{3}$/,
    s2 = /^#[a-fA-F0-9]{4}$/,
    ro = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    l2 =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    c2 =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    p2 =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
  function Pt(e) {
    if (typeof e != 'string') throw new Re(3)
    var t = a2(e)
    if (t.match(o2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      }
    if (t.match(i2)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      }
    }
    if (t.match(u2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      }
    if (t.match(s2)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      }
    }
    var a = ro.exec(t)
    if (a)
      return {
        red: parseInt('' + a[1], 10),
        green: parseInt('' + a[2], 10),
        blue: parseInt('' + a[3], 10),
      }
    var o = l2.exec(t.substring(0, 50))
    if (o)
      return {
        red: parseInt('' + o[1], 10),
        green: parseInt('' + o[2], 10),
        blue: parseInt('' + o[3], 10),
        alpha:
          parseFloat('' + o[4]) > 1
            ? parseFloat('' + o[4]) / 100
            : parseFloat('' + o[4]),
      }
    var i = c2.exec(t)
    if (i) {
      var s = parseInt('' + i[1], 10),
        u = parseInt('' + i[2], 10) / 100,
        d = parseInt('' + i[3], 10) / 100,
        m = 'rgb(' + Er(s, u, d) + ')',
        b = ro.exec(m)
      if (!b) throw new Re(4, t, m)
      return {
        red: parseInt('' + b[1], 10),
        green: parseInt('' + b[2], 10),
        blue: parseInt('' + b[3], 10),
      }
    }
    var h = p2.exec(t.substring(0, 50))
    if (h) {
      var y = parseInt('' + h[1], 10),
        E = parseInt('' + h[2], 10) / 100,
        A = parseInt('' + h[3], 10) / 100,
        x = 'rgb(' + Er(y, E, A) + ')',
        F = ro.exec(x)
      if (!F) throw new Re(4, t, x)
      return {
        red: parseInt('' + F[1], 10),
        green: parseInt('' + F[2], 10),
        blue: parseInt('' + F[3], 10),
        alpha:
          parseFloat('' + h[4]) > 1
            ? parseFloat('' + h[4]) / 100
            : parseFloat('' + h[4]),
      }
    }
    throw new Re(5)
  }
  function d2(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      o = Math.min(t, r, n),
      i = (a + o) / 2
    if (a === o)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: i }
    var s,
      u = a - o,
      d = i > 0.5 ? u / (2 - a - o) : u / (a + o)
    switch (a) {
      case t:
        s = (r - n) / u + (r < n ? 6 : 0)
        break
      case r:
        s = (n - t) / u + 2
        break
      default:
        s = (t - r) / u + 4
        break
    }
    return (
      (s *= 60),
      e.alpha !== void 0
        ? { hue: s, saturation: d, lightness: i, alpha: e.alpha }
        : { hue: s, saturation: d, lightness: i }
    )
  }
  function at(e) {
    return d2(Pt(e))
  }
  var f2 = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t
    },
    ao = f2
  function gt(e) {
    var t = e.toString(16)
    return t.length === 1 ? '0' + t : t
  }
  function no(e) {
    return gt(Math.round(e * 255))
  }
  function h2(e, t, r) {
    return ao('#' + no(e) + no(t) + no(r))
  }
  function ln(e, t, r) {
    return Er(e, t, r, h2)
  }
  function y2(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return ln(e, t, r)
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return ln(e.hue, e.saturation, e.lightness)
    throw new Re(1)
  }
  function g2(e, t, r, n) {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1 ? ln(e, t, r) : 'rgba(' + Er(e, t, r) + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? ln(e.hue, e.saturation, e.lightness)
        : 'rgba(' + Er(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
    throw new Re(2)
  }
  function oo(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return ao('#' + gt(e) + gt(t) + gt(r))
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return ao('#' + gt(e.red) + gt(e.green) + gt(e.blue))
    throw new Re(6)
  }
  function $e(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var a = Pt(e)
      return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')'
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1
          ? oo(e, t, r)
          : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? oo(e.red, e.green, e.blue)
          : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
    }
    throw new Re(7)
  }
  var m2 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    b2 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        typeof t.alpha == 'number'
      )
    },
    A2 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    E2 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        typeof t.alpha == 'number'
      )
    }
  function ot(e) {
    if (typeof e != 'object') throw new Re(8)
    if (b2(e)) return $e(e)
    if (m2(e)) return oo(e)
    if (E2(e)) return g2(e)
    if (A2(e)) return y2(e)
    throw new Re(8)
  }
  function Wu(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments))
      return a.length >= t ? e.apply(this, a) : Wu(e, t, a)
    }
  }
  function Ie(e) {
    return Wu(e, e.length, [])
  }
  function v2(e, t) {
    if (t === 'transparent') return t
    var r = at(t)
    return ot(we({}, r, { hue: r.hue + parseFloat(e) }))
  }
  var tq = Ie(v2)
  function Rt(e, t, r) {
    return Math.max(e, Math.min(t, r))
  }
  function D2(e, t) {
    if (t === 'transparent') return t
    var r = at(t)
    return ot(we({}, r, { lightness: Rt(0, 1, r.lightness - parseFloat(e)) }))
  }
  var C2 = Ie(D2),
    Ue = C2
  function x2(e, t) {
    if (t === 'transparent') return t
    var r = at(t)
    return ot(we({}, r, { saturation: Rt(0, 1, r.saturation - parseFloat(e)) }))
  }
  var rq = Ie(x2)
  function S2(e, t) {
    if (t === 'transparent') return t
    var r = at(t)
    return ot(we({}, r, { lightness: Rt(0, 1, r.lightness + parseFloat(e)) }))
  }
  var F2 = Ie(S2),
    it = F2
  function w2(e, t, r) {
    if (t === 'transparent') return r
    if (r === 'transparent') return t
    if (e === 0) return r
    var n = Pt(t),
      a = we({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
      o = Pt(r),
      i = we({}, o, { alpha: typeof o.alpha == 'number' ? o.alpha : 1 }),
      s = a.alpha - i.alpha,
      u = parseFloat(e) * 2 - 1,
      d = u * s === -1 ? u : u + s,
      m = 1 + u * s,
      b = (d / m + 1) / 2,
      h = 1 - b,
      y = {
        red: Math.floor(a.red * b + i.red * h),
        green: Math.floor(a.green * b + i.green * h),
        blue: Math.floor(a.blue * b + i.blue * h),
        alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
      }
    return $e(y)
  }
  var B2 = Ie(w2),
    Vu = B2
  function _2(e, t) {
    if (t === 'transparent') return t
    var r = Pt(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = we({}, r, { alpha: Rt(0, 1, (n * 100 + parseFloat(e) * 100) / 100) })
    return $e(a)
  }
  var T2 = Ie(_2),
    vr = T2
  function O2(e, t) {
    if (t === 'transparent') return t
    var r = at(t)
    return ot(we({}, r, { saturation: Rt(0, 1, r.saturation + parseFloat(e)) }))
  }
  var nq = Ie(O2)
  function P2(e, t) {
    return t === 'transparent' ? t : ot(we({}, at(t), { hue: parseFloat(e) }))
  }
  var aq = Ie(P2)
  function R2(e, t) {
    return t === 'transparent'
      ? t
      : ot(we({}, at(t), { lightness: parseFloat(e) }))
  }
  var oq = Ie(R2)
  function I2(e, t) {
    return t === 'transparent'
      ? t
      : ot(we({}, at(t), { saturation: parseFloat(e) }))
  }
  var iq = Ie(I2)
  function k2(e, t) {
    return t === 'transparent' ? t : Vu(parseFloat(e), 'rgb(0, 0, 0)', t)
  }
  var uq = Ie(k2)
  function N2(e, t) {
    return t === 'transparent' ? t : Vu(parseFloat(e), 'rgb(255, 255, 255)', t)
  }
  var sq = Ie(N2)
  function j2(e, t) {
    if (t === 'transparent') return t
    var r = Pt(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = we({}, r, {
        alpha: Rt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      })
    return $e(a)
  }
  var M2 = Ie(j2),
    de = M2
  l()
  c()
  p()
  var ie = (() => {
    let e
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    )
  })()
  var Tm = pe(zo(), 1)
  l()
  c()
  p()
  var _S = Object.create,
    ud = Object.defineProperty,
    TS = Object.getOwnPropertyDescriptor,
    OS = Object.getOwnPropertyNames,
    PS = Object.getPrototypeOf,
    RS = Object.prototype.hasOwnProperty,
    IS = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    kS = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of OS(t))
          !RS.call(e, a) &&
            a !== r &&
            ud(e, a, {
              get: () => t[a],
              enumerable: !(n = TS(t, a)) || n.enumerable,
            })
      return e
    },
    NS = (e, t, r) => (
      (r = e != null ? _S(PS(e)) : {}),
      kS(
        t || !e || !e.__esModule
          ? ud(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    jS = IS((e) => {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a))
                }
              : Object.keys
          return function (a, o) {
            return (function i(s, u, d) {
              var m,
                b,
                h,
                y = t.call(s),
                E = t.call(u)
              if (s === u) return !0
              if (s == null || u == null) return !1
              if (d.indexOf(s) > -1 && d.indexOf(u) > -1) return !0
              if (
                (d.push(s, u),
                y != E ||
                  ((m = n(s)),
                  (b = n(u)),
                  m.length != b.length ||
                    m.some(function (A) {
                      return !i(s[A], u[A], d)
                    })))
              )
                return !1
              switch (y.slice(8, -1)) {
                case 'Symbol':
                  return s.valueOf() == u.valueOf()
                case 'Date':
                case 'Number':
                  return +s == +u || (+s != +s && +u != +u)
                case 'RegExp':
                case 'Function':
                case 'String':
                case 'Boolean':
                  return '' + s == '' + u
                case 'Set':
                case 'Map':
                  ;(m = s.entries()), (b = u.entries())
                  do if (!i((h = m.next()).value, b.next().value, d)) return !1
                  while (!h.done)
                  return !0
                case 'ArrayBuffer':
                  ;(s = new Uint8Array(s)), (u = new Uint8Array(u))
                case 'DataView':
                  ;(s = new Uint8Array(s.buffer)),
                    (u = new Uint8Array(u.buffer))
                case 'Float32Array':
                case 'Float64Array':
                case 'Int8Array':
                case 'Int16Array':
                case 'Int32Array':
                case 'Uint8Array':
                case 'Uint16Array':
                case 'Uint32Array':
                case 'Uint8ClampedArray':
                case 'Arguments':
                case 'Array':
                  if (s.length != u.length) return !1
                  for (h = 0; h < s.length; h++)
                    if (
                      (h in s || h in u) &&
                      (h in s != h in u || !i(s[h], u[h], d))
                    )
                      return !1
                  return !0
                case 'Object':
                  return i(r(s), r(u), d)
                default:
                  return !1
              }
            })(a, o, [])
          }
        })())
    })
  var id = NS(jS()),
    sd = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
    MS = (e, t) => {
      let { exists: r, eq: n, neq: a, truthy: o } = e
      if (sd([r, n, a, o]) > 1)
        throw new Error(
          `Invalid conditional test ${JSON.stringify({
            exists: r,
            eq: n,
            neq: a,
          })}`
        )
      if (typeof n < 'u') return (0, id.isEqual)(t, n)
      if (typeof a < 'u') return !(0, id.isEqual)(t, a)
      if (typeof r < 'u') {
        let i = typeof t < 'u'
        return r ? i : !i
      }
      return typeof o > 'u' || o ? !!t : !t
    },
    ld = (e, t, r) => {
      if (!e.if) return !0
      let { arg: n, global: a } = e.if
      if (sd([n, a]) !== 1)
        throw new Error(
          `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`
        )
      let o = n ? t[n] : r[a]
      return MS(e.if, o)
    }
  l()
  c()
  p()
  var jK = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: me,
      logger: Le,
      once: Pn,
      pretty: qS,
    } = __STORYBOOKCLIENTLOGGER__
  l()
  c()
  p()
  Bt()
  function Et() {
    return (
      (Et =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
      Et.apply(this, arguments)
    )
  }
  var LS = ['children', 'options'],
    cd = [
      'allowFullScreen',
      'allowTransparency',
      'autoComplete',
      'autoFocus',
      'autoPlay',
      'cellPadding',
      'cellSpacing',
      'charSet',
      'className',
      'classId',
      'colSpan',
      'contentEditable',
      'contextMenu',
      'crossOrigin',
      'encType',
      'formAction',
      'formEncType',
      'formMethod',
      'formNoValidate',
      'formTarget',
      'frameBorder',
      'hrefLang',
      'inputMode',
      'keyParams',
      'keyType',
      'marginHeight',
      'marginWidth',
      'maxLength',
      'mediaGroup',
      'minLength',
      'noValidate',
      'radioGroup',
      'readOnly',
      'rowSpan',
      'spellCheck',
      'srcDoc',
      'srcLang',
      'srcSet',
      'tabIndex',
      'useMap',
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
    pd = {
      amp: '&',
      apos: "'",
      gt: '>',
      lt: '<',
      nbsp: '\xA0',
      quot: '\u201C',
    },
    $S = ['style', 'script'],
    US =
      /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    zS = /mailto:/i,
    HS = /\n{2,}$/,
    md = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    GS = /^ *> ?/gm,
    WS = /^ {2,}\n/,
    VS = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    bd = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    Ad = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    KS = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    YS = /^(?:\n *)*\n/,
    JS = /\r\n?/g,
    XS = /^\[\^([^\]]+)](:.*)\n/,
    QS = /^\[\^([^\]]+)]/,
    ZS = /\f/g,
    eF = /^\s*?\[(x|\s)\]/,
    Ed = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    vd = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    Ko =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    tF = /&([a-zA-Z]+);/g,
    Dd = /^<!--[\s\S]*?(?:-->)/,
    rF = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    Yo =
      /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    nF = /^\{.*\}$/,
    aF = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    oF = /^<([^ >]+@[^ >]+)>/,
    iF = /^<([^ >]+:\/[^ >]+)>/,
    uF = /-([a-z])?/gi,
    Cd = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    sF = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    lF = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    cF = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    pF = /(\[|\])/g,
    dF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    fF = /\t/g,
    hF = /^ *\| */,
    yF = /(^ *\||\| *$)/g,
    gF = / *$/,
    mF = /^ *:-+: *$/,
    bF = /^ *:-+ *$/,
    AF = /^ *-+: *$/,
    EF =
      /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    vF =
      /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    DF = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
    CF = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    xF = /^\\([^0-9A-Za-z\s])/,
    SF =
      /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    FF = /^\n+/,
    wF = /^([ \t]*)/,
    BF = /\\([^\\])/g,
    dd = / *\n+$/,
    _F = /(?:^|\n)( *)$/,
    Jo = '(?:\\d+\\.)',
    Xo = '(?:[*+-])'
  function xd(e) {
    return '( *)(' + (e === 1 ? Jo : Xo) + ') +'
  }
  var Sd = xd(1),
    Fd = xd(2)
  function wd(e) {
    return new RegExp('^' + (e === 1 ? Sd : Fd))
  }
  var TF = wd(1),
    OF = wd(2)
  function Bd(e) {
    return new RegExp(
      '^' +
        (e === 1 ? Sd : Fd) +
        '[^\\n]*(?:\\n(?!\\1' +
        (e === 1 ? Jo : Xo) +
        ' )[^\\n]*)*(\\n|$)',
      'gm'
    )
  }
  var _d = Bd(1),
    Td = Bd(2)
  function Od(e) {
    let t = e === 1 ? Jo : Xo
    return new RegExp(
      '^( *)(' +
        t +
        ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
        t +
        ' (?!' +
        t +
        ' ))\\n*|\\s*\\n*$)'
    )
  }
  var Pd = Od(1),
    Rd = Od(2)
  function fd(e, t) {
    let r = t === 1,
      n = r ? Pd : Rd,
      a = r ? _d : Td,
      o = r ? TF : OF
    return {
      t(i, s, u) {
        let d = _F.exec(u)
        return d && (s.o || (!s._ && !s.u)) ? n.exec((i = d[1] + i)) : null
      },
      i: te.HIGH,
      l(i, s, u) {
        let d = r ? +i[2] : void 0,
          m = i[0]
            .replace(
              HS,
              `
`
            )
            .match(a),
          b = !1
        return {
          p: m.map(function (h, y) {
            let E = o.exec(h)[0].length,
              A = new RegExp('^ {1,' + E + '}', 'gm'),
              x = h.replace(A, '').replace(o, ''),
              F = y === m.length - 1,
              R =
                x.indexOf(`

`) !== -1 ||
                (F && b)
            b = R
            let j = u._,
              L = u.o,
              w
            ;(u.o = !0),
              R
                ? ((u._ = !1),
                  (w = x.replace(
                    dd,
                    `

`
                  )))
                : ((u._ = !0), (w = x.replace(dd, '')))
            let M = s(w, u)
            return (u._ = j), (u.o = L), M
          }),
          m: r,
          g: d,
        }
      },
      h: (i, s, u) =>
        e(
          i.m ? 'ol' : 'ul',
          { key: u.k, start: i.g },
          i.p.map(function (d, m) {
            return e('li', { key: m }, s(d, u))
          })
        ),
    }
  }
  var PF = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    RF = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    Id = [md, bd, Ad, Ed, vd, Dd, Cd, _d, Pd, Td, Rd],
    IF = [...Id, /^[^\n]+(?:  \n|\n{2,})/, Ko, Yo]
  function kF(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ðÐ]/g, 'd')
      .replace(/[ÈÉÊËéèêë]/g, 'e')
      .replace(/[ÏïÎîÍíÌì]/g, 'i')
      .replace(/[Ññ]/g, 'n')
      .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
      .replace(/[ÜüÛûÚúÙù]/g, 'u')
      .replace(/[ŸÿÝý]/g, 'y')
      .replace(/[^a-z0-9- ]/gi, '')
      .replace(/ /gi, '-')
      .toLowerCase()
  }
  function NF(e) {
    return AF.test(e)
      ? 'right'
      : mF.test(e)
      ? 'center'
      : bF.test(e)
      ? 'left'
      : null
  }
  function hd(e, t, r) {
    let n = r.v
    r.v = !0
    let a = t(e.trim(), r)
    r.v = n
    let o = [[]]
    return (
      a.forEach(function (i, s) {
        i.type === 'tableSeparator'
          ? s !== 0 && s !== a.length - 1 && o.push([])
          : (i.type !== 'text' ||
              (a[s + 1] != null && a[s + 1].type !== 'tableSeparator') ||
              (i.$ = i.$.replace(gF, '')),
            o[o.length - 1].push(i))
      }),
      o
    )
  }
  function jF(e, t, r) {
    r._ = !0
    let n = hd(e[1], t, r),
      a = e[2].replace(yF, '').split('|').map(NF),
      o = (function (i, s, u) {
        return i
          .trim()
          .split(
            `
`
          )
          .map(function (d) {
            return hd(d, s, u)
          })
      })(e[3], t, r)
    return (r._ = !1), { S: a, A: o, L: n, type: 'table' }
  }
  function yd(e, t) {
    return e.S[t] == null ? {} : { textAlign: e.S[t] }
  }
  function st(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null
    }
  }
  function lt(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null
    }
  }
  function tt(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t)
    }
  }
  function Rr(e) {
    return function (t) {
      return e.exec(t)
    }
  }
  function MF(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null
    let n = ''
    e.split(
      `
`
    ).every(
      (o) =>
        !Id.some((i) => i.test(o)) &&
        ((n +=
          o +
          `
`),
        o.trim())
    )
    let a = n.trimEnd()
    return a == '' ? null : [n, a]
  }
  function zt(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, '')
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return null
    } catch {
      return null
    }
    return e
  }
  function gd(e) {
    return e.replace(BF, '$1')
  }
  function Rn(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1
    ;(r._ = !0), (r.u = !0)
    let o = e(t, r)
    return (r._ = n), (r.u = a), o
  }
  function qF(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1
    ;(r._ = !1), (r.u = !0)
    let o = e(t, r)
    return (r._ = n), (r.u = a), o
  }
  function LF(e, t, r) {
    return (
      (r._ = !1),
      e(
        t +
          `

`,
        r
      )
    )
  }
  var Ho = (e, t, r) => ({ $: Rn(t, e[1], r) })
  function Go() {
    return {}
  }
  function Wo() {
    return null
  }
  function $F(...e) {
    return e.filter(Boolean).join(' ')
  }
  function Vo(e, t, r) {
    let n = e,
      a = t.split('.')
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift()
    return n || r
  }
  var te
  function UF(e, t = {}) {
    ;(t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || kF),
      (t.namedCodesToUnicode = t.namedCodesToUnicode
        ? Et({}, pd, t.namedCodesToUnicode)
        : pd)
    let r = t.createElement || wa
    function n(y, E, ...A) {
      let x = Vo(t.overrides, `${y}.props`, {})
      return r(
        (function (F, R) {
          let j = Vo(R, F)
          return j
            ? typeof j == 'function' || (typeof j == 'object' && 'render' in j)
              ? j
              : Vo(R, `${F}.component`, F)
            : F
        })(y, t.overrides),
        Et({}, E, x, { className: $F(E?.className, x.className) || void 0 }),
        ...A
      )
    }
    function a(y) {
      let E = !1
      t.forceInline ? (E = !0) : t.forceBlock || (E = dF.test(y) === !1)
      let A = m(
        d(
          E
            ? y
            : `${y.trimEnd().replace(FF, '')}

`,
          { _: E }
        )
      )
      for (; typeof A[A.length - 1] == 'string' && !A[A.length - 1].trim(); )
        A.pop()
      if (t.wrapper === null) return A
      let x = t.wrapper || (E ? 'span' : 'div'),
        F
      if (A.length > 1 || t.forceWrapper) F = A
      else {
        if (A.length === 1)
          return (
            (F = A[0]),
            typeof F == 'string' ? n('span', { key: 'outer' }, F) : F
          )
        F = null
      }
      return wa(x, { key: 'outer' }, F)
    }
    function o(y) {
      let E = y.match(US)
      return E
        ? E.reduce(function (A, x, F) {
            let R = x.indexOf('=')
            if (R !== -1) {
              let j = (function (I) {
                  return (
                    I.indexOf('-') !== -1 &&
                      I.match(rF) === null &&
                      (I = I.replace(uF, function (U, J) {
                        return J.toUpperCase()
                      })),
                    I
                  )
                })(x.slice(0, R)).trim(),
                L = (function (I) {
                  let U = I[0]
                  return (U === '"' || U === "'") &&
                    I.length >= 2 &&
                    I[I.length - 1] === U
                    ? I.slice(1, -1)
                    : I
                })(x.slice(R + 1).trim()),
                w = cd[j] || j,
                M = (A[w] = (function (I, U) {
                  return I === 'style'
                    ? U.split(/;\s?/).reduce(function (J, z) {
                        let ue = z.slice(0, z.indexOf(':'))
                        return (
                          (J[
                            ue.replace(/(-[a-z])/g, (Q) => Q[1].toUpperCase())
                          ] = z.slice(ue.length + 1).trim()),
                          J
                        )
                      }, {})
                    : I === 'href'
                    ? zt(U)
                    : (U.match(nF) && (U = U.slice(1, U.length - 1)),
                      U === 'true' || (U !== 'false' && U))
                })(j, L))
              typeof M == 'string' &&
                (Ko.test(M) || Yo.test(M)) &&
                (A[w] = he(a(M.trim()), { key: F }))
            } else x !== 'style' && (A[cd[x] || x] = !0)
            return A
          }, {})
        : null
    }
    let i = [],
      s = {},
      u = {
        blockQuote: {
          t: tt(md),
          i: te.HIGH,
          l: (y, E, A) => ({ $: E(y[0].replace(GS, ''), A) }),
          h: (y, E, A) => n('blockquote', { key: A.k }, E(y.$, A)),
        },
        breakLine: {
          t: Rr(WS),
          i: te.HIGH,
          l: Go,
          h: (y, E, A) => n('br', { key: A.k }),
        },
        breakThematic: {
          t: tt(VS),
          i: te.HIGH,
          l: Go,
          h: (y, E, A) => n('hr', { key: A.k }),
        },
        codeBlock: {
          t: tt(Ad),
          i: te.MAX,
          l: (y) => ({
            $: y[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            M: void 0,
          }),
          h: (y, E, A) =>
            n(
              'pre',
              { key: A.k },
              n(
                'code',
                Et({}, y.I, { className: y.M ? `lang-${y.M}` : '' }),
                y.$
              )
            ),
        },
        codeFenced: {
          t: tt(bd),
          i: te.MAX,
          l: (y) => ({
            I: o(y[3] || ''),
            $: y[4],
            M: y[2] || void 0,
            type: 'codeBlock',
          }),
        },
        codeInline: {
          t: lt(KS),
          i: te.LOW,
          l: (y) => ({ $: y[2] }),
          h: (y, E, A) => n('code', { key: A.k }, y.$),
        },
        footnote: {
          t: tt(XS),
          i: te.MAX,
          l: (y) => (i.push({ O: y[2], B: y[1] }), {}),
          h: Wo,
        },
        footnoteReference: {
          t: st(QS),
          i: te.HIGH,
          l: (y) => ({ $: y[1], R: `#${t.slugify(y[1])}` }),
          h: (y, E, A) =>
            n('a', { key: A.k, href: zt(y.R) }, n('sup', { key: A.k }, y.$)),
        },
        gfmTask: {
          t: st(eF),
          i: te.HIGH,
          l: (y) => ({ T: y[1].toLowerCase() === 'x' }),
          h: (y, E, A) =>
            n('input', {
              checked: y.T,
              key: A.k,
              readOnly: !0,
              type: 'checkbox',
            }),
        },
        heading: {
          t: tt(Ed),
          i: te.HIGH,
          l: (y, E, A) => ({
            $: Rn(E, y[2], A),
            j: t.slugify(y[2]),
            C: y[1].length,
          }),
          h: (y, E, A) => n(`h${y.C}`, { id: y.j, key: A.k }, E(y.$, A)),
        },
        headingSetext: {
          t: tt(vd),
          i: te.MAX,
          l: (y, E, A) => ({
            $: Rn(E, y[1], A),
            C: y[2] === '=' ? 1 : 2,
            type: 'heading',
          }),
        },
        htmlComment: { t: Rr(Dd), i: te.HIGH, l: () => ({}), h: Wo },
        image: {
          t: lt(RF),
          i: te.HIGH,
          l: (y) => ({ D: y[1], R: gd(y[2]), N: y[3] }),
          h: (y, E, A) =>
            n('img', {
              key: A.k,
              alt: y.D || void 0,
              title: y.N || void 0,
              src: zt(y.R),
            }),
        },
        link: {
          t: st(PF),
          i: te.LOW,
          l: (y, E, A) => ({ $: qF(E, y[1], A), R: gd(y[2]), N: y[3] }),
          h: (y, E, A) =>
            n('a', { key: A.k, href: zt(y.R), title: y.N }, E(y.$, A)),
        },
        linkAngleBraceStyleDetector: {
          t: st(iF),
          i: te.MAX,
          l: (y) => ({ $: [{ $: y[1], type: 'text' }], R: y[1], type: 'link' }),
        },
        linkBareUrlDetector: {
          t: (y, E) => (E.Z ? null : st(aF)(y, E)),
          i: te.MAX,
          l: (y) => ({
            $: [{ $: y[1], type: 'text' }],
            R: y[1],
            N: void 0,
            type: 'link',
          }),
        },
        linkMailtoDetector: {
          t: st(oF),
          i: te.MAX,
          l(y) {
            let E = y[1],
              A = y[1]
            return (
              zS.test(A) || (A = 'mailto:' + A),
              {
                $: [{ $: E.replace('mailto:', ''), type: 'text' }],
                R: A,
                type: 'link',
              }
            )
          },
        },
        orderedList: fd(n, 1),
        unorderedList: fd(n, 2),
        newlineCoalescer: {
          t: tt(YS),
          i: te.LOW,
          l: Go,
          h: () => `
`,
        },
        paragraph: {
          t: MF,
          i: te.LOW,
          l: Ho,
          h: (y, E, A) => n('p', { key: A.k }, E(y.$, A)),
        },
        ref: {
          t: st(sF),
          i: te.MAX,
          l: (y) => ((s[y[1]] = { R: y[2], N: y[4] }), {}),
          h: Wo,
        },
        refImage: {
          t: lt(lF),
          i: te.MAX,
          l: (y) => ({ D: y[1] || void 0, F: y[2] }),
          h: (y, E, A) =>
            n('img', {
              key: A.k,
              alt: y.D,
              src: zt(s[y.F].R),
              title: s[y.F].N,
            }),
        },
        refLink: {
          t: st(cF),
          i: te.MAX,
          l: (y, E, A) => ({
            $: E(y[1], A),
            P: E(y[0].replace(pF, '\\$1'), A),
            F: y[2],
          }),
          h: (y, E, A) =>
            s[y.F]
              ? n(
                  'a',
                  { key: A.k, href: zt(s[y.F].R), title: s[y.F].N },
                  E(y.$, A)
                )
              : n('span', { key: A.k }, E(y.P, A)),
        },
        table: {
          t: tt(Cd),
          i: te.HIGH,
          l: jF,
          h: (y, E, A) =>
            n(
              'table',
              { key: A.k },
              n(
                'thead',
                null,
                n(
                  'tr',
                  null,
                  y.L.map(function (x, F) {
                    return n('th', { key: F, style: yd(y, F) }, E(x, A))
                  })
                )
              ),
              n(
                'tbody',
                null,
                y.A.map(function (x, F) {
                  return n(
                    'tr',
                    { key: F },
                    x.map(function (R, j) {
                      return n('td', { key: j, style: yd(y, j) }, E(R, A))
                    })
                  )
                })
              )
            ),
        },
        tableSeparator: {
          t: function (y, E) {
            return E.v ? hF.exec(y) : null
          },
          i: te.HIGH,
          l: function () {
            return { type: 'tableSeparator' }
          },
          h: () => ' | ',
        },
        text: {
          t: Rr(SF),
          i: te.MIN,
          l: (y) => ({
            $: y[0].replace(tF, (E, A) =>
              t.namedCodesToUnicode[A] ? t.namedCodesToUnicode[A] : E
            ),
          }),
          h: (y) => y.$,
        },
        textBolded: {
          t: lt(EF),
          i: te.MED,
          l: (y, E, A) => ({ $: E(y[2], A) }),
          h: (y, E, A) => n('strong', { key: A.k }, E(y.$, A)),
        },
        textEmphasized: {
          t: lt(vF),
          i: te.LOW,
          l: (y, E, A) => ({ $: E(y[2], A) }),
          h: (y, E, A) => n('em', { key: A.k }, E(y.$, A)),
        },
        textEscaped: {
          t: lt(xF),
          i: te.HIGH,
          l: (y) => ({ $: y[1], type: 'text' }),
        },
        textMarked: {
          t: lt(DF),
          i: te.LOW,
          l: Ho,
          h: (y, E, A) => n('mark', { key: A.k }, E(y.$, A)),
        },
        textStrikethroughed: {
          t: lt(CF),
          i: te.LOW,
          l: Ho,
          h: (y, E, A) => n('del', { key: A.k }, E(y.$, A)),
        },
      }
    t.disableParsingRawHTML !== !0 &&
      ((u.htmlBlock = {
        t: Rr(Ko),
        i: te.HIGH,
        l(y, E, A) {
          let [, x] = y[3].match(wF),
            F = new RegExp(`^${x}`, 'gm'),
            R = y[3].replace(F, ''),
            j = ((L = R), IF.some((U) => U.test(L)) ? LF : Rn)
          var L
          let w = y[1].toLowerCase(),
            M = $S.indexOf(w) !== -1
          A.Z = A.Z || w === 'a'
          let I = M ? y[3] : j(E, R, A)
          return (A.Z = !1), { I: o(y[2]), $: I, G: M, H: M ? w : y[1] }
        },
        h: (y, E, A) => n(y.H, Et({ key: A.k }, y.I), y.G ? y.$ : E(y.$, A)),
      }),
      (u.htmlSelfClosing = {
        t: Rr(Yo),
        i: te.HIGH,
        l: (y) => ({ I: o(y[2] || ''), H: y[1] }),
        h: (y, E, A) => n(y.H, Et({}, y.I, { key: A.k })),
      }))
    let d = (function (y) {
        let E = Object.keys(y)
        function A(x, F) {
          let R = [],
            j = ''
          for (; x; ) {
            let L = 0
            for (; L < E.length; ) {
              let w = E[L],
                M = y[w],
                I = M.t(x, F, j)
              if (I) {
                let U = I[0]
                x = x.substring(U.length)
                let J = M.l(I, A, F)
                J.type == null && (J.type = w), R.push(J), (j = U)
                break
              }
              L++
            }
          }
          return R
        }
        return (
          E.sort(function (x, F) {
            let R = y[x].i,
              j = y[F].i
            return R !== j ? R - j : x < F ? -1 : 1
          }),
          function (x, F) {
            return A(
              (function (R) {
                return R.replace(
                  JS,
                  `
`
                )
                  .replace(ZS, '')
                  .replace(fF, '    ')
              })(x),
              F
            )
          }
        )
      })(u),
      m =
        ((b = (function (y) {
          return function (E, A, x) {
            return y[E.type].h(E, A, x)
          }
        })(u)),
        function y(E, A = {}) {
          if (Array.isArray(E)) {
            let x = A.k,
              F = [],
              R = !1
            for (let j = 0; j < E.length; j++) {
              A.k = j
              let L = y(E[j], A),
                w = typeof L == 'string'
              w && R ? (F[F.length - 1] += L) : L !== null && F.push(L), (R = w)
            }
            return (A.k = x), F
          }
          return b(E, y, A)
        })
    var b
    let h = a(e)
    return i.length
      ? n(
          'div',
          null,
          h,
          n(
            'footer',
            { key: 'footer' },
            i.map(function (y) {
              return n(
                'div',
                { id: t.slugify(y.B), key: y.B },
                y.B,
                m(d(y.O, { _: !0 }))
              )
            })
          )
        )
      : h
  }
  ;(function (e) {
    ;(e[(e.MAX = 0)] = 'MAX'),
      (e[(e.HIGH = 1)] = 'HIGH'),
      (e[(e.MED = 2)] = 'MED'),
      (e[(e.LOW = 3)] = 'LOW'),
      (e[(e.MIN = 4)] = 'MIN')
  })(te || (te = {}))
  var Qo = (e) => {
    let { children: t, options: r } = e,
      n = (function (a, o) {
        if (a == null) return {}
        var i,
          s,
          u = {},
          d = Object.keys(a)
        for (s = 0; s < d.length; s++)
          o.indexOf((i = d[s])) >= 0 || (u[i] = a[i])
        return u
      })(e, LS)
    return he(UF(t, r), n)
  }
  var Om = pe(Ir(), 1),
    Pm = pe(tf(), 1),
    Rm = pe(u0(), 1)
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  var AX = __STORYBOOKCHANNELS__,
    { Channel: Nn } = __STORYBOOKCHANNELS__
  l()
  c()
  p()
  var xX = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: SX,
      CONFIG_ERROR: I3,
      CURRENT_STORY_WAS_SET: k3,
      DOCS_PREPARED: N3,
      DOCS_RENDERED: j3,
      FORCE_REMOUNT: M3,
      FORCE_RE_RENDER: ti,
      GLOBALS_UPDATED: jn,
      IGNORED_EXCEPTION: FX,
      NAVIGATE_URL: s0,
      PLAY_FUNCTION_THREW_EXCEPTION: q3,
      PRELOAD_ENTRIES: L3,
      PREVIEW_BUILDER_PROGRESS: wX,
      PREVIEW_KEYDOWN: $3,
      REGISTER_SUBSCRIPTION: BX,
      RESET_STORY_ARGS: jr,
      SELECT_STORY: _X,
      SET_CONFIG: TX,
      SET_CURRENT_STORY: U3,
      SET_GLOBALS: z3,
      SET_INDEX: H3,
      SET_STORIES: OX,
      SHARED_STATE_CHANGED: G3,
      SHARED_STATE_SET: W3,
      STORIES_COLLAPSE_ALL: PX,
      STORIES_EXPAND_ALL: RX,
      STORY_ARGS_UPDATED: Gt,
      STORY_CHANGED: V3,
      STORY_ERRORED: K3,
      STORY_INDEX_INVALIDATED: Y3,
      STORY_MISSING: J3,
      STORY_PREPARED: X3,
      STORY_RENDERED: l0,
      STORY_RENDER_PHASE_CHANGED: Q3,
      STORY_SPECIFIED: Z3,
      STORY_THREW_EXCEPTION: eB,
      STORY_UNCHANGED: tB,
      UPDATE_GLOBALS: c0,
      UPDATE_QUERY_PARAMS: rB,
      UPDATE_STORY_ARGS: Mr,
    } = __STORYBOOKCOREEVENTS__
  var aB = Object.create,
    p0 = Object.defineProperty,
    oB = Object.getOwnPropertyDescriptor,
    d0 = Object.getOwnPropertyNames,
    iB = Object.getPrototypeOf,
    uB = Object.prototype.hasOwnProperty,
    Ge = (e, t) =>
      function () {
        return (
          t || (0, e[d0(e)[0]])((t = { exports: {} }).exports, t), t.exports
        )
      },
    sB = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of d0(t))
          !uB.call(e, a) &&
            a !== r &&
            p0(e, a, {
              get: () => t[a],
              enumerable: !(n = oB(t, a)) || n.enumerable,
            })
      return e
    },
    f0 = (e, t, r) => (
      (r = e != null ? aB(iB(e)) : {}),
      sB(
        t || !e || !e.__esModule
          ? p0(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    )
  function h0() {
    let e = { setHandler: () => {}, send: () => {} }
    return new Nn({ transport: e })
  }
  var lB = class {
      constructor() {
        ;(this.getChannel = () => {
          if (!this.channel) {
            let e = h0()
            return this.setChannel(e), e
          }
          return this.channel
        }),
          (this.getServerChannel = () => {
            if (!this.serverChannel)
              throw new Error('Accessing non-existent serverChannel')
            return this.serverChannel
          }),
          (this.ready = () => this.promise),
          (this.hasChannel = () => !!this.channel),
          (this.hasServerChannel = () => !!this.serverChannel),
          (this.setChannel = (e) => {
            ;(this.channel = e), this.resolve()
          }),
          (this.setServerChannel = (e) => {
            this.serverChannel = e
          }),
          (this.promise = new Promise((e) => {
            this.resolve = () => e(this.getChannel())
          }))
      }
    },
    ri = '__STORYBOOK_ADDONS_PREVIEW'
  function cB() {
    return ie[ri] || (ie[ri] = new lB()), ie[ri]
  }
  var Mn = cB()
  var lh = pe(Ir(), 1),
    Lr = pe(qn(), 1),
    T_ = pe(J0(), 1),
    O_ = pe($n(), 1)
  l()
  c()
  p()
  function Wt(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
    var n = Array.from(typeof e == 'string' ? [e] : e)
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
    var a = n.reduce(function (s, u) {
      var d = u.match(/\n([\t ]+|(?!\s).)/g)
      return d
        ? s.concat(
            d.map(function (m) {
              var b, h
              return (h =
                (b = m.match(/[\t ]/g)) === null || b === void 0
                  ? void 0
                  : b.length) !== null && h !== void 0
                ? h
                : 0
            })
          )
        : s
    }, [])
    if (a.length) {
      var o = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          '}',
        'g'
      )
      n = n.map(function (s) {
        return s.replace(
          o,
          `
`
        )
      })
    }
    n[0] = n[0].replace(/^\r?\n/, '')
    var i = n[0]
    return (
      t.forEach(function (s, u) {
        var d = i.match(/(?:^|\n)( *)$/),
          m = d ? d[1] : '',
          b = s
        typeof s == 'string' &&
          s.includes(`
`) &&
          (b = String(s)
            .split(
              `
`
            )
            .map(function (h, y) {
              return y === 0 ? h : '' + m + h
            }).join(`
`)),
          (i += b + n[u + 1])
      }),
      i
    )
  }
  var xe = Wt
  l()
  c()
  p()
  var Gn = pe(ni(), 1)
  l()
  c()
  p()
  var l_ = Object.create,
    oh = Object.defineProperty,
    c_ = Object.getOwnPropertyDescriptor,
    p_ = Object.getOwnPropertyNames,
    d_ = Object.getPrototypeOf,
    f_ = Object.prototype.hasOwnProperty,
    h_ = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    y_ = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of p_(t))
          !f_.call(e, a) &&
            a !== r &&
            oh(e, a, {
              get: () => t[a],
              enumerable: !(n = c_(t, a)) || n.enumerable,
            })
      return e
    },
    g_ = (e, t, r) => (
      (r = e != null ? l_(d_(e)) : {}),
      y_(
        t || !e || !e.__esModule
          ? oh(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    m_ = h_((e) => {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a))
                }
              : Object.keys
          return function (a, o) {
            return (function i(s, u, d) {
              var m,
                b,
                h,
                y = t.call(s),
                E = t.call(u)
              if (s === u) return !0
              if (s == null || u == null) return !1
              if (d.indexOf(s) > -1 && d.indexOf(u) > -1) return !0
              if (
                (d.push(s, u),
                y != E ||
                  ((m = n(s)),
                  (b = n(u)),
                  m.length != b.length ||
                    m.some(function (A) {
                      return !i(s[A], u[A], d)
                    })))
              )
                return !1
              switch (y.slice(8, -1)) {
                case 'Symbol':
                  return s.valueOf() == u.valueOf()
                case 'Date':
                case 'Number':
                  return +s == +u || (+s != +s && +u != +u)
                case 'RegExp':
                case 'Function':
                case 'String':
                case 'Boolean':
                  return '' + s == '' + u
                case 'Set':
                case 'Map':
                  ;(m = s.entries()), (b = u.entries())
                  do if (!i((h = m.next()).value, b.next().value, d)) return !1
                  while (!h.done)
                  return !0
                case 'ArrayBuffer':
                  ;(s = new Uint8Array(s)), (u = new Uint8Array(u))
                case 'DataView':
                  ;(s = new Uint8Array(s.buffer)),
                    (u = new Uint8Array(u.buffer))
                case 'Float32Array':
                case 'Float64Array':
                case 'Int8Array':
                case 'Int16Array':
                case 'Int32Array':
                case 'Uint8Array':
                case 'Uint16Array':
                case 'Uint32Array':
                case 'Uint8ClampedArray':
                case 'Arguments':
                case 'Array':
                  if (s.length != u.length) return !1
                  for (h = 0; h < s.length; h++)
                    if (
                      (h in s || h in u) &&
                      (h in s != h in u || !i(s[h], u[h], d))
                    )
                      return !1
                  return !0
                case 'Object':
                  return i(r(s), r(u), d)
                default:
                  return !1
              }
            })(a, o, [])
          }
        })())
    })
  var bZ = g_(m_())
  var ch = pe(uh(), 1)
  var ph = pe(zo(), 1)
  var kZ = (0, lh.default)(1)((e) =>
    Object.values(e).reduce(
      (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
      {}
    )
  )
  var NZ = Symbol('incompatible')
  var jZ = Symbol('Deeply equal')
  var P_ = Wt`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    MZ = (0, ch.default)(() => {}, P_)
  var vt = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, o) => (
          Object.entries(o).forEach(([i, s]) => {
            let u = a[i]
            Array.isArray(s) || typeof u > 'u'
              ? (a[i] = s)
              : (0, Gn.default)(s) && (0, Gn.default)(u)
              ? (t[i] = !0)
              : typeof s < 'u' && (a[i] = s)
          }),
          a
        ),
        {}
      )
    return (
      Object.keys(t).forEach((a) => {
        let o = r
          .filter(Boolean)
          .map((i) => i[a])
          .filter((i) => typeof i < 'u')
        o.every((i) => (0, Gn.default)(i))
          ? (n[a] = vt(...o))
          : (n[a] = o[o.length - 1])
      }),
      n
    )
  }
  var oi = (e, t, r) => {
      let n = typeof e
      switch (n) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'function':
        case 'symbol':
          return { name: n }
      }
      return e
        ? r.has(e)
          ? (Le.warn(Wt`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            { name: 'other', value: 'cyclic object' })
          : (r.add(e),
            Array.isArray(e)
              ? {
                  name: 'array',
                  value:
                    e.length > 0
                      ? oi(e[0], t, new Set(r))
                      : { name: 'other', value: 'unknown' },
                }
              : {
                  name: 'object',
                  value: (0, Lr.default)(e, (a) => oi(a, t, new Set(r))),
                })
        : { name: 'object', value: {} }
    },
    R_ = (e) => {
      let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
        a = (0, Lr.default)(n, (i, s) => ({
          name: s,
          type: oi(i, `${t}.${s}`, new Set()),
        })),
        o = (0, Lr.default)(r, (i, s) => ({ name: s }))
      return vt(a, o, r)
    }
  R_.secondPass = !0
  var sh = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    Ur = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, ph.default)(e, (n, a) => {
            let o = n.name || a
            return (!t || sh(o, t)) && (!r || !sh(o, r))
          }),
    I_ = (e, t, r) => {
      let { type: n, options: a } = e
      if (n) {
        if (r.color && r.color.test(t)) {
          let o = n.name
          if (o === 'string') return { control: { type: 'color' } }
          o !== 'enum' &&
            Le.warn(
              `Addon controls: Control of type color only supports string, received "${o}" instead`
            )
        }
        if (r.date && r.date.test(t)) return { control: { type: 'date' } }
        switch (n.name) {
          case 'array':
            return { control: { type: 'object' } }
          case 'boolean':
            return { control: { type: 'boolean' } }
          case 'string':
            return { control: { type: 'text' } }
          case 'number':
            return { control: { type: 'number' } }
          case 'enum': {
            let { value: o } = n
            return {
              control: { type: o?.length <= 5 ? 'radio' : 'select' },
              options: o,
            }
          }
          case 'function':
          case 'symbol':
            return null
          default:
            return { control: { type: a ? 'select' : 'object' } }
        }
      }
    },
    dh = (e) => {
      let {
        argTypes: t,
        parameters: {
          __isArgsStory: r,
          controls: {
            include: n = null,
            exclude: a = null,
            matchers: o = {},
          } = {},
        },
      } = e
      if (!r) return t
      let i = Ur(t, n, a),
        s = (0, Lr.default)(i, (u, d) => u?.type && I_(u, d, o))
      return vt(s, i)
    }
  dh.secondPass = !0
  function ii(e) {
    return async (t, r, n) => {
      await e.reduceRight(
        (a, o) => async () => o(t, a, n),
        async () => r(n)
      )()
    }
  }
  function $r(e, t) {
    return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean)
  }
  function Un(e, t, r = {}) {
    return $r(e, t).reduce(
      (n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]),
      []
    )
  }
  function zn(e, t) {
    return Object.assign({}, ...$r(e, t))
  }
  function Hn(e, t) {
    return $r(e, t).pop()
  }
  function ui(e) {
    let t = Un(e, 'argTypesEnhancers'),
      r = $r(e, 'runStep')
    return {
      parameters: vt(...$r(e, 'parameters')),
      decorators: Un(e, 'decorators', {
        reverseFileOrder: !(ie.FEATURES?.legacyDecoratorFileOrder ?? !1),
      }),
      args: zn(e, 'args'),
      argsEnhancers: Un(e, 'argsEnhancers'),
      argTypes: zn(e, 'argTypes'),
      argTypesEnhancers: [
        ...t.filter((n) => !n.secondPass),
        ...t.filter((n) => n.secondPass),
      ],
      globals: zn(e, 'globals'),
      globalTypes: zn(e, 'globalTypes'),
      loaders: Un(e, 'loaders'),
      render: Hn(e, 'render'),
      renderToCanvas: Hn(e, 'renderToCanvas'),
      renderToDOM: Hn(e, 'renderToDOM'),
      applyDecorators: Hn(e, 'applyDecorators'),
      runStep: ii(r),
    }
  }
  var qZ = ui([])
  var hO = pe($n(), 1),
    yO = pe(aa(), 1)
  l()
  c()
  p()
  var mO = pe($n(), 1)
  var bO = pe(aa(), 1),
    AO = pe(ni(), 1),
    Dy = Ge({
      '../../node_modules/entities/lib/maps/entities.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Abreve: '\u0102',
          abreve: '\u0103',
          ac: '\u223E',
          acd: '\u223F',
          acE: '\u223E\u0333',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          Acy: '\u0410',
          acy: '\u0430',
          AElig: '\xC6',
          aelig: '\xE6',
          af: '\u2061',
          Afr: '\u{1D504}',
          afr: '\u{1D51E}',
          Agrave: '\xC0',
          agrave: '\xE0',
          alefsym: '\u2135',
          aleph: '\u2135',
          Alpha: '\u0391',
          alpha: '\u03B1',
          Amacr: '\u0100',
          amacr: '\u0101',
          amalg: '\u2A3F',
          amp: '&',
          AMP: '&',
          andand: '\u2A55',
          And: '\u2A53',
          and: '\u2227',
          andd: '\u2A5C',
          andslope: '\u2A58',
          andv: '\u2A5A',
          ang: '\u2220',
          ange: '\u29A4',
          angle: '\u2220',
          angmsdaa: '\u29A8',
          angmsdab: '\u29A9',
          angmsdac: '\u29AA',
          angmsdad: '\u29AB',
          angmsdae: '\u29AC',
          angmsdaf: '\u29AD',
          angmsdag: '\u29AE',
          angmsdah: '\u29AF',
          angmsd: '\u2221',
          angrt: '\u221F',
          angrtvb: '\u22BE',
          angrtvbd: '\u299D',
          angsph: '\u2222',
          angst: '\xC5',
          angzarr: '\u237C',
          Aogon: '\u0104',
          aogon: '\u0105',
          Aopf: '\u{1D538}',
          aopf: '\u{1D552}',
          apacir: '\u2A6F',
          ap: '\u2248',
          apE: '\u2A70',
          ape: '\u224A',
          apid: '\u224B',
          apos: "'",
          ApplyFunction: '\u2061',
          approx: '\u2248',
          approxeq: '\u224A',
          Aring: '\xC5',
          aring: '\xE5',
          Ascr: '\u{1D49C}',
          ascr: '\u{1D4B6}',
          Assign: '\u2254',
          ast: '*',
          asymp: '\u2248',
          asympeq: '\u224D',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          awconint: '\u2233',
          awint: '\u2A11',
          backcong: '\u224C',
          backepsilon: '\u03F6',
          backprime: '\u2035',
          backsim: '\u223D',
          backsimeq: '\u22CD',
          Backslash: '\u2216',
          Barv: '\u2AE7',
          barvee: '\u22BD',
          barwed: '\u2305',
          Barwed: '\u2306',
          barwedge: '\u2305',
          bbrk: '\u23B5',
          bbrktbrk: '\u23B6',
          bcong: '\u224C',
          Bcy: '\u0411',
          bcy: '\u0431',
          bdquo: '\u201E',
          becaus: '\u2235',
          because: '\u2235',
          Because: '\u2235',
          bemptyv: '\u29B0',
          bepsi: '\u03F6',
          bernou: '\u212C',
          Bernoullis: '\u212C',
          Beta: '\u0392',
          beta: '\u03B2',
          beth: '\u2136',
          between: '\u226C',
          Bfr: '\u{1D505}',
          bfr: '\u{1D51F}',
          bigcap: '\u22C2',
          bigcirc: '\u25EF',
          bigcup: '\u22C3',
          bigodot: '\u2A00',
          bigoplus: '\u2A01',
          bigotimes: '\u2A02',
          bigsqcup: '\u2A06',
          bigstar: '\u2605',
          bigtriangledown: '\u25BD',
          bigtriangleup: '\u25B3',
          biguplus: '\u2A04',
          bigvee: '\u22C1',
          bigwedge: '\u22C0',
          bkarow: '\u290D',
          blacklozenge: '\u29EB',
          blacksquare: '\u25AA',
          blacktriangle: '\u25B4',
          blacktriangledown: '\u25BE',
          blacktriangleleft: '\u25C2',
          blacktriangleright: '\u25B8',
          blank: '\u2423',
          blk12: '\u2592',
          blk14: '\u2591',
          blk34: '\u2593',
          block: '\u2588',
          bne: '=\u20E5',
          bnequiv: '\u2261\u20E5',
          bNot: '\u2AED',
          bnot: '\u2310',
          Bopf: '\u{1D539}',
          bopf: '\u{1D553}',
          bot: '\u22A5',
          bottom: '\u22A5',
          bowtie: '\u22C8',
          boxbox: '\u29C9',
          boxdl: '\u2510',
          boxdL: '\u2555',
          boxDl: '\u2556',
          boxDL: '\u2557',
          boxdr: '\u250C',
          boxdR: '\u2552',
          boxDr: '\u2553',
          boxDR: '\u2554',
          boxh: '\u2500',
          boxH: '\u2550',
          boxhd: '\u252C',
          boxHd: '\u2564',
          boxhD: '\u2565',
          boxHD: '\u2566',
          boxhu: '\u2534',
          boxHu: '\u2567',
          boxhU: '\u2568',
          boxHU: '\u2569',
          boxminus: '\u229F',
          boxplus: '\u229E',
          boxtimes: '\u22A0',
          boxul: '\u2518',
          boxuL: '\u255B',
          boxUl: '\u255C',
          boxUL: '\u255D',
          boxur: '\u2514',
          boxuR: '\u2558',
          boxUr: '\u2559',
          boxUR: '\u255A',
          boxv: '\u2502',
          boxV: '\u2551',
          boxvh: '\u253C',
          boxvH: '\u256A',
          boxVh: '\u256B',
          boxVH: '\u256C',
          boxvl: '\u2524',
          boxvL: '\u2561',
          boxVl: '\u2562',
          boxVL: '\u2563',
          boxvr: '\u251C',
          boxvR: '\u255E',
          boxVr: '\u255F',
          boxVR: '\u2560',
          bprime: '\u2035',
          breve: '\u02D8',
          Breve: '\u02D8',
          brvbar: '\xA6',
          bscr: '\u{1D4B7}',
          Bscr: '\u212C',
          bsemi: '\u204F',
          bsim: '\u223D',
          bsime: '\u22CD',
          bsolb: '\u29C5',
          bsol: '\\',
          bsolhsub: '\u27C8',
          bull: '\u2022',
          bullet: '\u2022',
          bump: '\u224E',
          bumpE: '\u2AAE',
          bumpe: '\u224F',
          Bumpeq: '\u224E',
          bumpeq: '\u224F',
          Cacute: '\u0106',
          cacute: '\u0107',
          capand: '\u2A44',
          capbrcup: '\u2A49',
          capcap: '\u2A4B',
          cap: '\u2229',
          Cap: '\u22D2',
          capcup: '\u2A47',
          capdot: '\u2A40',
          CapitalDifferentialD: '\u2145',
          caps: '\u2229\uFE00',
          caret: '\u2041',
          caron: '\u02C7',
          Cayleys: '\u212D',
          ccaps: '\u2A4D',
          Ccaron: '\u010C',
          ccaron: '\u010D',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          Ccirc: '\u0108',
          ccirc: '\u0109',
          Cconint: '\u2230',
          ccups: '\u2A4C',
          ccupssm: '\u2A50',
          Cdot: '\u010A',
          cdot: '\u010B',
          cedil: '\xB8',
          Cedilla: '\xB8',
          cemptyv: '\u29B2',
          cent: '\xA2',
          centerdot: '\xB7',
          CenterDot: '\xB7',
          cfr: '\u{1D520}',
          Cfr: '\u212D',
          CHcy: '\u0427',
          chcy: '\u0447',
          check: '\u2713',
          checkmark: '\u2713',
          Chi: '\u03A7',
          chi: '\u03C7',
          circ: '\u02C6',
          circeq: '\u2257',
          circlearrowleft: '\u21BA',
          circlearrowright: '\u21BB',
          circledast: '\u229B',
          circledcirc: '\u229A',
          circleddash: '\u229D',
          CircleDot: '\u2299',
          circledR: '\xAE',
          circledS: '\u24C8',
          CircleMinus: '\u2296',
          CirclePlus: '\u2295',
          CircleTimes: '\u2297',
          cir: '\u25CB',
          cirE: '\u29C3',
          cire: '\u2257',
          cirfnint: '\u2A10',
          cirmid: '\u2AEF',
          cirscir: '\u29C2',
          ClockwiseContourIntegral: '\u2232',
          CloseCurlyDoubleQuote: '\u201D',
          CloseCurlyQuote: '\u2019',
          clubs: '\u2663',
          clubsuit: '\u2663',
          colon: ':',
          Colon: '\u2237',
          Colone: '\u2A74',
          colone: '\u2254',
          coloneq: '\u2254',
          comma: ',',
          commat: '@',
          comp: '\u2201',
          compfn: '\u2218',
          complement: '\u2201',
          complexes: '\u2102',
          cong: '\u2245',
          congdot: '\u2A6D',
          Congruent: '\u2261',
          conint: '\u222E',
          Conint: '\u222F',
          ContourIntegral: '\u222E',
          copf: '\u{1D554}',
          Copf: '\u2102',
          coprod: '\u2210',
          Coproduct: '\u2210',
          copy: '\xA9',
          COPY: '\xA9',
          copysr: '\u2117',
          CounterClockwiseContourIntegral: '\u2233',
          crarr: '\u21B5',
          cross: '\u2717',
          Cross: '\u2A2F',
          Cscr: '\u{1D49E}',
          cscr: '\u{1D4B8}',
          csub: '\u2ACF',
          csube: '\u2AD1',
          csup: '\u2AD0',
          csupe: '\u2AD2',
          ctdot: '\u22EF',
          cudarrl: '\u2938',
          cudarrr: '\u2935',
          cuepr: '\u22DE',
          cuesc: '\u22DF',
          cularr: '\u21B6',
          cularrp: '\u293D',
          cupbrcap: '\u2A48',
          cupcap: '\u2A46',
          CupCap: '\u224D',
          cup: '\u222A',
          Cup: '\u22D3',
          cupcup: '\u2A4A',
          cupdot: '\u228D',
          cupor: '\u2A45',
          cups: '\u222A\uFE00',
          curarr: '\u21B7',
          curarrm: '\u293C',
          curlyeqprec: '\u22DE',
          curlyeqsucc: '\u22DF',
          curlyvee: '\u22CE',
          curlywedge: '\u22CF',
          curren: '\xA4',
          curvearrowleft: '\u21B6',
          curvearrowright: '\u21B7',
          cuvee: '\u22CE',
          cuwed: '\u22CF',
          cwconint: '\u2232',
          cwint: '\u2231',
          cylcty: '\u232D',
          dagger: '\u2020',
          Dagger: '\u2021',
          daleth: '\u2138',
          darr: '\u2193',
          Darr: '\u21A1',
          dArr: '\u21D3',
          dash: '\u2010',
          Dashv: '\u2AE4',
          dashv: '\u22A3',
          dbkarow: '\u290F',
          dblac: '\u02DD',
          Dcaron: '\u010E',
          dcaron: '\u010F',
          Dcy: '\u0414',
          dcy: '\u0434',
          ddagger: '\u2021',
          ddarr: '\u21CA',
          DD: '\u2145',
          dd: '\u2146',
          DDotrahd: '\u2911',
          ddotseq: '\u2A77',
          deg: '\xB0',
          Del: '\u2207',
          Delta: '\u0394',
          delta: '\u03B4',
          demptyv: '\u29B1',
          dfisht: '\u297F',
          Dfr: '\u{1D507}',
          dfr: '\u{1D521}',
          dHar: '\u2965',
          dharl: '\u21C3',
          dharr: '\u21C2',
          DiacriticalAcute: '\xB4',
          DiacriticalDot: '\u02D9',
          DiacriticalDoubleAcute: '\u02DD',
          DiacriticalGrave: '`',
          DiacriticalTilde: '\u02DC',
          diam: '\u22C4',
          diamond: '\u22C4',
          Diamond: '\u22C4',
          diamondsuit: '\u2666',
          diams: '\u2666',
          die: '\xA8',
          DifferentialD: '\u2146',
          digamma: '\u03DD',
          disin: '\u22F2',
          div: '\xF7',
          divide: '\xF7',
          divideontimes: '\u22C7',
          divonx: '\u22C7',
          DJcy: '\u0402',
          djcy: '\u0452',
          dlcorn: '\u231E',
          dlcrop: '\u230D',
          dollar: '$',
          Dopf: '\u{1D53B}',
          dopf: '\u{1D555}',
          Dot: '\xA8',
          dot: '\u02D9',
          DotDot: '\u20DC',
          doteq: '\u2250',
          doteqdot: '\u2251',
          DotEqual: '\u2250',
          dotminus: '\u2238',
          dotplus: '\u2214',
          dotsquare: '\u22A1',
          doublebarwedge: '\u2306',
          DoubleContourIntegral: '\u222F',
          DoubleDot: '\xA8',
          DoubleDownArrow: '\u21D3',
          DoubleLeftArrow: '\u21D0',
          DoubleLeftRightArrow: '\u21D4',
          DoubleLeftTee: '\u2AE4',
          DoubleLongLeftArrow: '\u27F8',
          DoubleLongLeftRightArrow: '\u27FA',
          DoubleLongRightArrow: '\u27F9',
          DoubleRightArrow: '\u21D2',
          DoubleRightTee: '\u22A8',
          DoubleUpArrow: '\u21D1',
          DoubleUpDownArrow: '\u21D5',
          DoubleVerticalBar: '\u2225',
          DownArrowBar: '\u2913',
          downarrow: '\u2193',
          DownArrow: '\u2193',
          Downarrow: '\u21D3',
          DownArrowUpArrow: '\u21F5',
          DownBreve: '\u0311',
          downdownarrows: '\u21CA',
          downharpoonleft: '\u21C3',
          downharpoonright: '\u21C2',
          DownLeftRightVector: '\u2950',
          DownLeftTeeVector: '\u295E',
          DownLeftVectorBar: '\u2956',
          DownLeftVector: '\u21BD',
          DownRightTeeVector: '\u295F',
          DownRightVectorBar: '\u2957',
          DownRightVector: '\u21C1',
          DownTeeArrow: '\u21A7',
          DownTee: '\u22A4',
          drbkarow: '\u2910',
          drcorn: '\u231F',
          drcrop: '\u230C',
          Dscr: '\u{1D49F}',
          dscr: '\u{1D4B9}',
          DScy: '\u0405',
          dscy: '\u0455',
          dsol: '\u29F6',
          Dstrok: '\u0110',
          dstrok: '\u0111',
          dtdot: '\u22F1',
          dtri: '\u25BF',
          dtrif: '\u25BE',
          duarr: '\u21F5',
          duhar: '\u296F',
          dwangle: '\u29A6',
          DZcy: '\u040F',
          dzcy: '\u045F',
          dzigrarr: '\u27FF',
          Eacute: '\xC9',
          eacute: '\xE9',
          easter: '\u2A6E',
          Ecaron: '\u011A',
          ecaron: '\u011B',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          ecir: '\u2256',
          ecolon: '\u2255',
          Ecy: '\u042D',
          ecy: '\u044D',
          eDDot: '\u2A77',
          Edot: '\u0116',
          edot: '\u0117',
          eDot: '\u2251',
          ee: '\u2147',
          efDot: '\u2252',
          Efr: '\u{1D508}',
          efr: '\u{1D522}',
          eg: '\u2A9A',
          Egrave: '\xC8',
          egrave: '\xE8',
          egs: '\u2A96',
          egsdot: '\u2A98',
          el: '\u2A99',
          Element: '\u2208',
          elinters: '\u23E7',
          ell: '\u2113',
          els: '\u2A95',
          elsdot: '\u2A97',
          Emacr: '\u0112',
          emacr: '\u0113',
          empty: '\u2205',
          emptyset: '\u2205',
          EmptySmallSquare: '\u25FB',
          emptyv: '\u2205',
          EmptyVerySmallSquare: '\u25AB',
          emsp13: '\u2004',
          emsp14: '\u2005',
          emsp: '\u2003',
          ENG: '\u014A',
          eng: '\u014B',
          ensp: '\u2002',
          Eogon: '\u0118',
          eogon: '\u0119',
          Eopf: '\u{1D53C}',
          eopf: '\u{1D556}',
          epar: '\u22D5',
          eparsl: '\u29E3',
          eplus: '\u2A71',
          epsi: '\u03B5',
          Epsilon: '\u0395',
          epsilon: '\u03B5',
          epsiv: '\u03F5',
          eqcirc: '\u2256',
          eqcolon: '\u2255',
          eqsim: '\u2242',
          eqslantgtr: '\u2A96',
          eqslantless: '\u2A95',
          Equal: '\u2A75',
          equals: '=',
          EqualTilde: '\u2242',
          equest: '\u225F',
          Equilibrium: '\u21CC',
          equiv: '\u2261',
          equivDD: '\u2A78',
          eqvparsl: '\u29E5',
          erarr: '\u2971',
          erDot: '\u2253',
          escr: '\u212F',
          Escr: '\u2130',
          esdot: '\u2250',
          Esim: '\u2A73',
          esim: '\u2242',
          Eta: '\u0397',
          eta: '\u03B7',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          euro: '\u20AC',
          excl: '!',
          exist: '\u2203',
          Exists: '\u2203',
          expectation: '\u2130',
          exponentiale: '\u2147',
          ExponentialE: '\u2147',
          fallingdotseq: '\u2252',
          Fcy: '\u0424',
          fcy: '\u0444',
          female: '\u2640',
          ffilig: '\uFB03',
          fflig: '\uFB00',
          ffllig: '\uFB04',
          Ffr: '\u{1D509}',
          ffr: '\u{1D523}',
          filig: '\uFB01',
          FilledSmallSquare: '\u25FC',
          FilledVerySmallSquare: '\u25AA',
          fjlig: 'fj',
          flat: '\u266D',
          fllig: '\uFB02',
          fltns: '\u25B1',
          fnof: '\u0192',
          Fopf: '\u{1D53D}',
          fopf: '\u{1D557}',
          forall: '\u2200',
          ForAll: '\u2200',
          fork: '\u22D4',
          forkv: '\u2AD9',
          Fouriertrf: '\u2131',
          fpartint: '\u2A0D',
          frac12: '\xBD',
          frac13: '\u2153',
          frac14: '\xBC',
          frac15: '\u2155',
          frac16: '\u2159',
          frac18: '\u215B',
          frac23: '\u2154',
          frac25: '\u2156',
          frac34: '\xBE',
          frac35: '\u2157',
          frac38: '\u215C',
          frac45: '\u2158',
          frac56: '\u215A',
          frac58: '\u215D',
          frac78: '\u215E',
          frasl: '\u2044',
          frown: '\u2322',
          fscr: '\u{1D4BB}',
          Fscr: '\u2131',
          gacute: '\u01F5',
          Gamma: '\u0393',
          gamma: '\u03B3',
          Gammad: '\u03DC',
          gammad: '\u03DD',
          gap: '\u2A86',
          Gbreve: '\u011E',
          gbreve: '\u011F',
          Gcedil: '\u0122',
          Gcirc: '\u011C',
          gcirc: '\u011D',
          Gcy: '\u0413',
          gcy: '\u0433',
          Gdot: '\u0120',
          gdot: '\u0121',
          ge: '\u2265',
          gE: '\u2267',
          gEl: '\u2A8C',
          gel: '\u22DB',
          geq: '\u2265',
          geqq: '\u2267',
          geqslant: '\u2A7E',
          gescc: '\u2AA9',
          ges: '\u2A7E',
          gesdot: '\u2A80',
          gesdoto: '\u2A82',
          gesdotol: '\u2A84',
          gesl: '\u22DB\uFE00',
          gesles: '\u2A94',
          Gfr: '\u{1D50A}',
          gfr: '\u{1D524}',
          gg: '\u226B',
          Gg: '\u22D9',
          ggg: '\u22D9',
          gimel: '\u2137',
          GJcy: '\u0403',
          gjcy: '\u0453',
          gla: '\u2AA5',
          gl: '\u2277',
          glE: '\u2A92',
          glj: '\u2AA4',
          gnap: '\u2A8A',
          gnapprox: '\u2A8A',
          gne: '\u2A88',
          gnE: '\u2269',
          gneq: '\u2A88',
          gneqq: '\u2269',
          gnsim: '\u22E7',
          Gopf: '\u{1D53E}',
          gopf: '\u{1D558}',
          grave: '`',
          GreaterEqual: '\u2265',
          GreaterEqualLess: '\u22DB',
          GreaterFullEqual: '\u2267',
          GreaterGreater: '\u2AA2',
          GreaterLess: '\u2277',
          GreaterSlantEqual: '\u2A7E',
          GreaterTilde: '\u2273',
          Gscr: '\u{1D4A2}',
          gscr: '\u210A',
          gsim: '\u2273',
          gsime: '\u2A8E',
          gsiml: '\u2A90',
          gtcc: '\u2AA7',
          gtcir: '\u2A7A',
          gt: '>',
          GT: '>',
          Gt: '\u226B',
          gtdot: '\u22D7',
          gtlPar: '\u2995',
          gtquest: '\u2A7C',
          gtrapprox: '\u2A86',
          gtrarr: '\u2978',
          gtrdot: '\u22D7',
          gtreqless: '\u22DB',
          gtreqqless: '\u2A8C',
          gtrless: '\u2277',
          gtrsim: '\u2273',
          gvertneqq: '\u2269\uFE00',
          gvnE: '\u2269\uFE00',
          Hacek: '\u02C7',
          hairsp: '\u200A',
          half: '\xBD',
          hamilt: '\u210B',
          HARDcy: '\u042A',
          hardcy: '\u044A',
          harrcir: '\u2948',
          harr: '\u2194',
          hArr: '\u21D4',
          harrw: '\u21AD',
          Hat: '^',
          hbar: '\u210F',
          Hcirc: '\u0124',
          hcirc: '\u0125',
          hearts: '\u2665',
          heartsuit: '\u2665',
          hellip: '\u2026',
          hercon: '\u22B9',
          hfr: '\u{1D525}',
          Hfr: '\u210C',
          HilbertSpace: '\u210B',
          hksearow: '\u2925',
          hkswarow: '\u2926',
          hoarr: '\u21FF',
          homtht: '\u223B',
          hookleftarrow: '\u21A9',
          hookrightarrow: '\u21AA',
          hopf: '\u{1D559}',
          Hopf: '\u210D',
          horbar: '\u2015',
          HorizontalLine: '\u2500',
          hscr: '\u{1D4BD}',
          Hscr: '\u210B',
          hslash: '\u210F',
          Hstrok: '\u0126',
          hstrok: '\u0127',
          HumpDownHump: '\u224E',
          HumpEqual: '\u224F',
          hybull: '\u2043',
          hyphen: '\u2010',
          Iacute: '\xCD',
          iacute: '\xED',
          ic: '\u2063',
          Icirc: '\xCE',
          icirc: '\xEE',
          Icy: '\u0418',
          icy: '\u0438',
          Idot: '\u0130',
          IEcy: '\u0415',
          iecy: '\u0435',
          iexcl: '\xA1',
          iff: '\u21D4',
          ifr: '\u{1D526}',
          Ifr: '\u2111',
          Igrave: '\xCC',
          igrave: '\xEC',
          ii: '\u2148',
          iiiint: '\u2A0C',
          iiint: '\u222D',
          iinfin: '\u29DC',
          iiota: '\u2129',
          IJlig: '\u0132',
          ijlig: '\u0133',
          Imacr: '\u012A',
          imacr: '\u012B',
          image: '\u2111',
          ImaginaryI: '\u2148',
          imagline: '\u2110',
          imagpart: '\u2111',
          imath: '\u0131',
          Im: '\u2111',
          imof: '\u22B7',
          imped: '\u01B5',
          Implies: '\u21D2',
          incare: '\u2105',
          in: '\u2208',
          infin: '\u221E',
          infintie: '\u29DD',
          inodot: '\u0131',
          intcal: '\u22BA',
          int: '\u222B',
          Int: '\u222C',
          integers: '\u2124',
          Integral: '\u222B',
          intercal: '\u22BA',
          Intersection: '\u22C2',
          intlarhk: '\u2A17',
          intprod: '\u2A3C',
          InvisibleComma: '\u2063',
          InvisibleTimes: '\u2062',
          IOcy: '\u0401',
          iocy: '\u0451',
          Iogon: '\u012E',
          iogon: '\u012F',
          Iopf: '\u{1D540}',
          iopf: '\u{1D55A}',
          Iota: '\u0399',
          iota: '\u03B9',
          iprod: '\u2A3C',
          iquest: '\xBF',
          iscr: '\u{1D4BE}',
          Iscr: '\u2110',
          isin: '\u2208',
          isindot: '\u22F5',
          isinE: '\u22F9',
          isins: '\u22F4',
          isinsv: '\u22F3',
          isinv: '\u2208',
          it: '\u2062',
          Itilde: '\u0128',
          itilde: '\u0129',
          Iukcy: '\u0406',
          iukcy: '\u0456',
          Iuml: '\xCF',
          iuml: '\xEF',
          Jcirc: '\u0134',
          jcirc: '\u0135',
          Jcy: '\u0419',
          jcy: '\u0439',
          Jfr: '\u{1D50D}',
          jfr: '\u{1D527}',
          jmath: '\u0237',
          Jopf: '\u{1D541}',
          jopf: '\u{1D55B}',
          Jscr: '\u{1D4A5}',
          jscr: '\u{1D4BF}',
          Jsercy: '\u0408',
          jsercy: '\u0458',
          Jukcy: '\u0404',
          jukcy: '\u0454',
          Kappa: '\u039A',
          kappa: '\u03BA',
          kappav: '\u03F0',
          Kcedil: '\u0136',
          kcedil: '\u0137',
          Kcy: '\u041A',
          kcy: '\u043A',
          Kfr: '\u{1D50E}',
          kfr: '\u{1D528}',
          kgreen: '\u0138',
          KHcy: '\u0425',
          khcy: '\u0445',
          KJcy: '\u040C',
          kjcy: '\u045C',
          Kopf: '\u{1D542}',
          kopf: '\u{1D55C}',
          Kscr: '\u{1D4A6}',
          kscr: '\u{1D4C0}',
          lAarr: '\u21DA',
          Lacute: '\u0139',
          lacute: '\u013A',
          laemptyv: '\u29B4',
          lagran: '\u2112',
          Lambda: '\u039B',
          lambda: '\u03BB',
          lang: '\u27E8',
          Lang: '\u27EA',
          langd: '\u2991',
          langle: '\u27E8',
          lap: '\u2A85',
          Laplacetrf: '\u2112',
          laquo: '\xAB',
          larrb: '\u21E4',
          larrbfs: '\u291F',
          larr: '\u2190',
          Larr: '\u219E',
          lArr: '\u21D0',
          larrfs: '\u291D',
          larrhk: '\u21A9',
          larrlp: '\u21AB',
          larrpl: '\u2939',
          larrsim: '\u2973',
          larrtl: '\u21A2',
          latail: '\u2919',
          lAtail: '\u291B',
          lat: '\u2AAB',
          late: '\u2AAD',
          lates: '\u2AAD\uFE00',
          lbarr: '\u290C',
          lBarr: '\u290E',
          lbbrk: '\u2772',
          lbrace: '{',
          lbrack: '[',
          lbrke: '\u298B',
          lbrksld: '\u298F',
          lbrkslu: '\u298D',
          Lcaron: '\u013D',
          lcaron: '\u013E',
          Lcedil: '\u013B',
          lcedil: '\u013C',
          lceil: '\u2308',
          lcub: '{',
          Lcy: '\u041B',
          lcy: '\u043B',
          ldca: '\u2936',
          ldquo: '\u201C',
          ldquor: '\u201E',
          ldrdhar: '\u2967',
          ldrushar: '\u294B',
          ldsh: '\u21B2',
          le: '\u2264',
          lE: '\u2266',
          LeftAngleBracket: '\u27E8',
          LeftArrowBar: '\u21E4',
          leftarrow: '\u2190',
          LeftArrow: '\u2190',
          Leftarrow: '\u21D0',
          LeftArrowRightArrow: '\u21C6',
          leftarrowtail: '\u21A2',
          LeftCeiling: '\u2308',
          LeftDoubleBracket: '\u27E6',
          LeftDownTeeVector: '\u2961',
          LeftDownVectorBar: '\u2959',
          LeftDownVector: '\u21C3',
          LeftFloor: '\u230A',
          leftharpoondown: '\u21BD',
          leftharpoonup: '\u21BC',
          leftleftarrows: '\u21C7',
          leftrightarrow: '\u2194',
          LeftRightArrow: '\u2194',
          Leftrightarrow: '\u21D4',
          leftrightarrows: '\u21C6',
          leftrightharpoons: '\u21CB',
          leftrightsquigarrow: '\u21AD',
          LeftRightVector: '\u294E',
          LeftTeeArrow: '\u21A4',
          LeftTee: '\u22A3',
          LeftTeeVector: '\u295A',
          leftthreetimes: '\u22CB',
          LeftTriangleBar: '\u29CF',
          LeftTriangle: '\u22B2',
          LeftTriangleEqual: '\u22B4',
          LeftUpDownVector: '\u2951',
          LeftUpTeeVector: '\u2960',
          LeftUpVectorBar: '\u2958',
          LeftUpVector: '\u21BF',
          LeftVectorBar: '\u2952',
          LeftVector: '\u21BC',
          lEg: '\u2A8B',
          leg: '\u22DA',
          leq: '\u2264',
          leqq: '\u2266',
          leqslant: '\u2A7D',
          lescc: '\u2AA8',
          les: '\u2A7D',
          lesdot: '\u2A7F',
          lesdoto: '\u2A81',
          lesdotor: '\u2A83',
          lesg: '\u22DA\uFE00',
          lesges: '\u2A93',
          lessapprox: '\u2A85',
          lessdot: '\u22D6',
          lesseqgtr: '\u22DA',
          lesseqqgtr: '\u2A8B',
          LessEqualGreater: '\u22DA',
          LessFullEqual: '\u2266',
          LessGreater: '\u2276',
          lessgtr: '\u2276',
          LessLess: '\u2AA1',
          lesssim: '\u2272',
          LessSlantEqual: '\u2A7D',
          LessTilde: '\u2272',
          lfisht: '\u297C',
          lfloor: '\u230A',
          Lfr: '\u{1D50F}',
          lfr: '\u{1D529}',
          lg: '\u2276',
          lgE: '\u2A91',
          lHar: '\u2962',
          lhard: '\u21BD',
          lharu: '\u21BC',
          lharul: '\u296A',
          lhblk: '\u2584',
          LJcy: '\u0409',
          ljcy: '\u0459',
          llarr: '\u21C7',
          ll: '\u226A',
          Ll: '\u22D8',
          llcorner: '\u231E',
          Lleftarrow: '\u21DA',
          llhard: '\u296B',
          lltri: '\u25FA',
          Lmidot: '\u013F',
          lmidot: '\u0140',
          lmoustache: '\u23B0',
          lmoust: '\u23B0',
          lnap: '\u2A89',
          lnapprox: '\u2A89',
          lne: '\u2A87',
          lnE: '\u2268',
          lneq: '\u2A87',
          lneqq: '\u2268',
          lnsim: '\u22E6',
          loang: '\u27EC',
          loarr: '\u21FD',
          lobrk: '\u27E6',
          longleftarrow: '\u27F5',
          LongLeftArrow: '\u27F5',
          Longleftarrow: '\u27F8',
          longleftrightarrow: '\u27F7',
          LongLeftRightArrow: '\u27F7',
          Longleftrightarrow: '\u27FA',
          longmapsto: '\u27FC',
          longrightarrow: '\u27F6',
          LongRightArrow: '\u27F6',
          Longrightarrow: '\u27F9',
          looparrowleft: '\u21AB',
          looparrowright: '\u21AC',
          lopar: '\u2985',
          Lopf: '\u{1D543}',
          lopf: '\u{1D55D}',
          loplus: '\u2A2D',
          lotimes: '\u2A34',
          lowast: '\u2217',
          lowbar: '_',
          LowerLeftArrow: '\u2199',
          LowerRightArrow: '\u2198',
          loz: '\u25CA',
          lozenge: '\u25CA',
          lozf: '\u29EB',
          lpar: '(',
          lparlt: '\u2993',
          lrarr: '\u21C6',
          lrcorner: '\u231F',
          lrhar: '\u21CB',
          lrhard: '\u296D',
          lrm: '\u200E',
          lrtri: '\u22BF',
          lsaquo: '\u2039',
          lscr: '\u{1D4C1}',
          Lscr: '\u2112',
          lsh: '\u21B0',
          Lsh: '\u21B0',
          lsim: '\u2272',
          lsime: '\u2A8D',
          lsimg: '\u2A8F',
          lsqb: '[',
          lsquo: '\u2018',
          lsquor: '\u201A',
          Lstrok: '\u0141',
          lstrok: '\u0142',
          ltcc: '\u2AA6',
          ltcir: '\u2A79',
          lt: '<',
          LT: '<',
          Lt: '\u226A',
          ltdot: '\u22D6',
          lthree: '\u22CB',
          ltimes: '\u22C9',
          ltlarr: '\u2976',
          ltquest: '\u2A7B',
          ltri: '\u25C3',
          ltrie: '\u22B4',
          ltrif: '\u25C2',
          ltrPar: '\u2996',
          lurdshar: '\u294A',
          luruhar: '\u2966',
          lvertneqq: '\u2268\uFE00',
          lvnE: '\u2268\uFE00',
          macr: '\xAF',
          male: '\u2642',
          malt: '\u2720',
          maltese: '\u2720',
          Map: '\u2905',
          map: '\u21A6',
          mapsto: '\u21A6',
          mapstodown: '\u21A7',
          mapstoleft: '\u21A4',
          mapstoup: '\u21A5',
          marker: '\u25AE',
          mcomma: '\u2A29',
          Mcy: '\u041C',
          mcy: '\u043C',
          mdash: '\u2014',
          mDDot: '\u223A',
          measuredangle: '\u2221',
          MediumSpace: '\u205F',
          Mellintrf: '\u2133',
          Mfr: '\u{1D510}',
          mfr: '\u{1D52A}',
          mho: '\u2127',
          micro: '\xB5',
          midast: '*',
          midcir: '\u2AF0',
          mid: '\u2223',
          middot: '\xB7',
          minusb: '\u229F',
          minus: '\u2212',
          minusd: '\u2238',
          minusdu: '\u2A2A',
          MinusPlus: '\u2213',
          mlcp: '\u2ADB',
          mldr: '\u2026',
          mnplus: '\u2213',
          models: '\u22A7',
          Mopf: '\u{1D544}',
          mopf: '\u{1D55E}',
          mp: '\u2213',
          mscr: '\u{1D4C2}',
          Mscr: '\u2133',
          mstpos: '\u223E',
          Mu: '\u039C',
          mu: '\u03BC',
          multimap: '\u22B8',
          mumap: '\u22B8',
          nabla: '\u2207',
          Nacute: '\u0143',
          nacute: '\u0144',
          nang: '\u2220\u20D2',
          nap: '\u2249',
          napE: '\u2A70\u0338',
          napid: '\u224B\u0338',
          napos: '\u0149',
          napprox: '\u2249',
          natural: '\u266E',
          naturals: '\u2115',
          natur: '\u266E',
          nbsp: '\xA0',
          nbump: '\u224E\u0338',
          nbumpe: '\u224F\u0338',
          ncap: '\u2A43',
          Ncaron: '\u0147',
          ncaron: '\u0148',
          Ncedil: '\u0145',
          ncedil: '\u0146',
          ncong: '\u2247',
          ncongdot: '\u2A6D\u0338',
          ncup: '\u2A42',
          Ncy: '\u041D',
          ncy: '\u043D',
          ndash: '\u2013',
          nearhk: '\u2924',
          nearr: '\u2197',
          neArr: '\u21D7',
          nearrow: '\u2197',
          ne: '\u2260',
          nedot: '\u2250\u0338',
          NegativeMediumSpace: '\u200B',
          NegativeThickSpace: '\u200B',
          NegativeThinSpace: '\u200B',
          NegativeVeryThinSpace: '\u200B',
          nequiv: '\u2262',
          nesear: '\u2928',
          nesim: '\u2242\u0338',
          NestedGreaterGreater: '\u226B',
          NestedLessLess: '\u226A',
          NewLine: `
`,
          nexist: '\u2204',
          nexists: '\u2204',
          Nfr: '\u{1D511}',
          nfr: '\u{1D52B}',
          ngE: '\u2267\u0338',
          nge: '\u2271',
          ngeq: '\u2271',
          ngeqq: '\u2267\u0338',
          ngeqslant: '\u2A7E\u0338',
          nges: '\u2A7E\u0338',
          nGg: '\u22D9\u0338',
          ngsim: '\u2275',
          nGt: '\u226B\u20D2',
          ngt: '\u226F',
          ngtr: '\u226F',
          nGtv: '\u226B\u0338',
          nharr: '\u21AE',
          nhArr: '\u21CE',
          nhpar: '\u2AF2',
          ni: '\u220B',
          nis: '\u22FC',
          nisd: '\u22FA',
          niv: '\u220B',
          NJcy: '\u040A',
          njcy: '\u045A',
          nlarr: '\u219A',
          nlArr: '\u21CD',
          nldr: '\u2025',
          nlE: '\u2266\u0338',
          nle: '\u2270',
          nleftarrow: '\u219A',
          nLeftarrow: '\u21CD',
          nleftrightarrow: '\u21AE',
          nLeftrightarrow: '\u21CE',
          nleq: '\u2270',
          nleqq: '\u2266\u0338',
          nleqslant: '\u2A7D\u0338',
          nles: '\u2A7D\u0338',
          nless: '\u226E',
          nLl: '\u22D8\u0338',
          nlsim: '\u2274',
          nLt: '\u226A\u20D2',
          nlt: '\u226E',
          nltri: '\u22EA',
          nltrie: '\u22EC',
          nLtv: '\u226A\u0338',
          nmid: '\u2224',
          NoBreak: '\u2060',
          NonBreakingSpace: '\xA0',
          nopf: '\u{1D55F}',
          Nopf: '\u2115',
          Not: '\u2AEC',
          not: '\xAC',
          NotCongruent: '\u2262',
          NotCupCap: '\u226D',
          NotDoubleVerticalBar: '\u2226',
          NotElement: '\u2209',
          NotEqual: '\u2260',
          NotEqualTilde: '\u2242\u0338',
          NotExists: '\u2204',
          NotGreater: '\u226F',
          NotGreaterEqual: '\u2271',
          NotGreaterFullEqual: '\u2267\u0338',
          NotGreaterGreater: '\u226B\u0338',
          NotGreaterLess: '\u2279',
          NotGreaterSlantEqual: '\u2A7E\u0338',
          NotGreaterTilde: '\u2275',
          NotHumpDownHump: '\u224E\u0338',
          NotHumpEqual: '\u224F\u0338',
          notin: '\u2209',
          notindot: '\u22F5\u0338',
          notinE: '\u22F9\u0338',
          notinva: '\u2209',
          notinvb: '\u22F7',
          notinvc: '\u22F6',
          NotLeftTriangleBar: '\u29CF\u0338',
          NotLeftTriangle: '\u22EA',
          NotLeftTriangleEqual: '\u22EC',
          NotLess: '\u226E',
          NotLessEqual: '\u2270',
          NotLessGreater: '\u2278',
          NotLessLess: '\u226A\u0338',
          NotLessSlantEqual: '\u2A7D\u0338',
          NotLessTilde: '\u2274',
          NotNestedGreaterGreater: '\u2AA2\u0338',
          NotNestedLessLess: '\u2AA1\u0338',
          notni: '\u220C',
          notniva: '\u220C',
          notnivb: '\u22FE',
          notnivc: '\u22FD',
          NotPrecedes: '\u2280',
          NotPrecedesEqual: '\u2AAF\u0338',
          NotPrecedesSlantEqual: '\u22E0',
          NotReverseElement: '\u220C',
          NotRightTriangleBar: '\u29D0\u0338',
          NotRightTriangle: '\u22EB',
          NotRightTriangleEqual: '\u22ED',
          NotSquareSubset: '\u228F\u0338',
          NotSquareSubsetEqual: '\u22E2',
          NotSquareSuperset: '\u2290\u0338',
          NotSquareSupersetEqual: '\u22E3',
          NotSubset: '\u2282\u20D2',
          NotSubsetEqual: '\u2288',
          NotSucceeds: '\u2281',
          NotSucceedsEqual: '\u2AB0\u0338',
          NotSucceedsSlantEqual: '\u22E1',
          NotSucceedsTilde: '\u227F\u0338',
          NotSuperset: '\u2283\u20D2',
          NotSupersetEqual: '\u2289',
          NotTilde: '\u2241',
          NotTildeEqual: '\u2244',
          NotTildeFullEqual: '\u2247',
          NotTildeTilde: '\u2249',
          NotVerticalBar: '\u2224',
          nparallel: '\u2226',
          npar: '\u2226',
          nparsl: '\u2AFD\u20E5',
          npart: '\u2202\u0338',
          npolint: '\u2A14',
          npr: '\u2280',
          nprcue: '\u22E0',
          nprec: '\u2280',
          npreceq: '\u2AAF\u0338',
          npre: '\u2AAF\u0338',
          nrarrc: '\u2933\u0338',
          nrarr: '\u219B',
          nrArr: '\u21CF',
          nrarrw: '\u219D\u0338',
          nrightarrow: '\u219B',
          nRightarrow: '\u21CF',
          nrtri: '\u22EB',
          nrtrie: '\u22ED',
          nsc: '\u2281',
          nsccue: '\u22E1',
          nsce: '\u2AB0\u0338',
          Nscr: '\u{1D4A9}',
          nscr: '\u{1D4C3}',
          nshortmid: '\u2224',
          nshortparallel: '\u2226',
          nsim: '\u2241',
          nsime: '\u2244',
          nsimeq: '\u2244',
          nsmid: '\u2224',
          nspar: '\u2226',
          nsqsube: '\u22E2',
          nsqsupe: '\u22E3',
          nsub: '\u2284',
          nsubE: '\u2AC5\u0338',
          nsube: '\u2288',
          nsubset: '\u2282\u20D2',
          nsubseteq: '\u2288',
          nsubseteqq: '\u2AC5\u0338',
          nsucc: '\u2281',
          nsucceq: '\u2AB0\u0338',
          nsup: '\u2285',
          nsupE: '\u2AC6\u0338',
          nsupe: '\u2289',
          nsupset: '\u2283\u20D2',
          nsupseteq: '\u2289',
          nsupseteqq: '\u2AC6\u0338',
          ntgl: '\u2279',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          ntlg: '\u2278',
          ntriangleleft: '\u22EA',
          ntrianglelefteq: '\u22EC',
          ntriangleright: '\u22EB',
          ntrianglerighteq: '\u22ED',
          Nu: '\u039D',
          nu: '\u03BD',
          num: '#',
          numero: '\u2116',
          numsp: '\u2007',
          nvap: '\u224D\u20D2',
          nvdash: '\u22AC',
          nvDash: '\u22AD',
          nVdash: '\u22AE',
          nVDash: '\u22AF',
          nvge: '\u2265\u20D2',
          nvgt: '>\u20D2',
          nvHarr: '\u2904',
          nvinfin: '\u29DE',
          nvlArr: '\u2902',
          nvle: '\u2264\u20D2',
          nvlt: '<\u20D2',
          nvltrie: '\u22B4\u20D2',
          nvrArr: '\u2903',
          nvrtrie: '\u22B5\u20D2',
          nvsim: '\u223C\u20D2',
          nwarhk: '\u2923',
          nwarr: '\u2196',
          nwArr: '\u21D6',
          nwarrow: '\u2196',
          nwnear: '\u2927',
          Oacute: '\xD3',
          oacute: '\xF3',
          oast: '\u229B',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          ocir: '\u229A',
          Ocy: '\u041E',
          ocy: '\u043E',
          odash: '\u229D',
          Odblac: '\u0150',
          odblac: '\u0151',
          odiv: '\u2A38',
          odot: '\u2299',
          odsold: '\u29BC',
          OElig: '\u0152',
          oelig: '\u0153',
          ofcir: '\u29BF',
          Ofr: '\u{1D512}',
          ofr: '\u{1D52C}',
          ogon: '\u02DB',
          Ograve: '\xD2',
          ograve: '\xF2',
          ogt: '\u29C1',
          ohbar: '\u29B5',
          ohm: '\u03A9',
          oint: '\u222E',
          olarr: '\u21BA',
          olcir: '\u29BE',
          olcross: '\u29BB',
          oline: '\u203E',
          olt: '\u29C0',
          Omacr: '\u014C',
          omacr: '\u014D',
          Omega: '\u03A9',
          omega: '\u03C9',
          Omicron: '\u039F',
          omicron: '\u03BF',
          omid: '\u29B6',
          ominus: '\u2296',
          Oopf: '\u{1D546}',
          oopf: '\u{1D560}',
          opar: '\u29B7',
          OpenCurlyDoubleQuote: '\u201C',
          OpenCurlyQuote: '\u2018',
          operp: '\u29B9',
          oplus: '\u2295',
          orarr: '\u21BB',
          Or: '\u2A54',
          or: '\u2228',
          ord: '\u2A5D',
          order: '\u2134',
          orderof: '\u2134',
          ordf: '\xAA',
          ordm: '\xBA',
          origof: '\u22B6',
          oror: '\u2A56',
          orslope: '\u2A57',
          orv: '\u2A5B',
          oS: '\u24C8',
          Oscr: '\u{1D4AA}',
          oscr: '\u2134',
          Oslash: '\xD8',
          oslash: '\xF8',
          osol: '\u2298',
          Otilde: '\xD5',
          otilde: '\xF5',
          otimesas: '\u2A36',
          Otimes: '\u2A37',
          otimes: '\u2297',
          Ouml: '\xD6',
          ouml: '\xF6',
          ovbar: '\u233D',
          OverBar: '\u203E',
          OverBrace: '\u23DE',
          OverBracket: '\u23B4',
          OverParenthesis: '\u23DC',
          para: '\xB6',
          parallel: '\u2225',
          par: '\u2225',
          parsim: '\u2AF3',
          parsl: '\u2AFD',
          part: '\u2202',
          PartialD: '\u2202',
          Pcy: '\u041F',
          pcy: '\u043F',
          percnt: '%',
          period: '.',
          permil: '\u2030',
          perp: '\u22A5',
          pertenk: '\u2031',
          Pfr: '\u{1D513}',
          pfr: '\u{1D52D}',
          Phi: '\u03A6',
          phi: '\u03C6',
          phiv: '\u03D5',
          phmmat: '\u2133',
          phone: '\u260E',
          Pi: '\u03A0',
          pi: '\u03C0',
          pitchfork: '\u22D4',
          piv: '\u03D6',
          planck: '\u210F',
          planckh: '\u210E',
          plankv: '\u210F',
          plusacir: '\u2A23',
          plusb: '\u229E',
          pluscir: '\u2A22',
          plus: '+',
          plusdo: '\u2214',
          plusdu: '\u2A25',
          pluse: '\u2A72',
          PlusMinus: '\xB1',
          plusmn: '\xB1',
          plussim: '\u2A26',
          plustwo: '\u2A27',
          pm: '\xB1',
          Poincareplane: '\u210C',
          pointint: '\u2A15',
          popf: '\u{1D561}',
          Popf: '\u2119',
          pound: '\xA3',
          prap: '\u2AB7',
          Pr: '\u2ABB',
          pr: '\u227A',
          prcue: '\u227C',
          precapprox: '\u2AB7',
          prec: '\u227A',
          preccurlyeq: '\u227C',
          Precedes: '\u227A',
          PrecedesEqual: '\u2AAF',
          PrecedesSlantEqual: '\u227C',
          PrecedesTilde: '\u227E',
          preceq: '\u2AAF',
          precnapprox: '\u2AB9',
          precneqq: '\u2AB5',
          precnsim: '\u22E8',
          pre: '\u2AAF',
          prE: '\u2AB3',
          precsim: '\u227E',
          prime: '\u2032',
          Prime: '\u2033',
          primes: '\u2119',
          prnap: '\u2AB9',
          prnE: '\u2AB5',
          prnsim: '\u22E8',
          prod: '\u220F',
          Product: '\u220F',
          profalar: '\u232E',
          profline: '\u2312',
          profsurf: '\u2313',
          prop: '\u221D',
          Proportional: '\u221D',
          Proportion: '\u2237',
          propto: '\u221D',
          prsim: '\u227E',
          prurel: '\u22B0',
          Pscr: '\u{1D4AB}',
          pscr: '\u{1D4C5}',
          Psi: '\u03A8',
          psi: '\u03C8',
          puncsp: '\u2008',
          Qfr: '\u{1D514}',
          qfr: '\u{1D52E}',
          qint: '\u2A0C',
          qopf: '\u{1D562}',
          Qopf: '\u211A',
          qprime: '\u2057',
          Qscr: '\u{1D4AC}',
          qscr: '\u{1D4C6}',
          quaternions: '\u210D',
          quatint: '\u2A16',
          quest: '?',
          questeq: '\u225F',
          quot: '"',
          QUOT: '"',
          rAarr: '\u21DB',
          race: '\u223D\u0331',
          Racute: '\u0154',
          racute: '\u0155',
          radic: '\u221A',
          raemptyv: '\u29B3',
          rang: '\u27E9',
          Rang: '\u27EB',
          rangd: '\u2992',
          range: '\u29A5',
          rangle: '\u27E9',
          raquo: '\xBB',
          rarrap: '\u2975',
          rarrb: '\u21E5',
          rarrbfs: '\u2920',
          rarrc: '\u2933',
          rarr: '\u2192',
          Rarr: '\u21A0',
          rArr: '\u21D2',
          rarrfs: '\u291E',
          rarrhk: '\u21AA',
          rarrlp: '\u21AC',
          rarrpl: '\u2945',
          rarrsim: '\u2974',
          Rarrtl: '\u2916',
          rarrtl: '\u21A3',
          rarrw: '\u219D',
          ratail: '\u291A',
          rAtail: '\u291C',
          ratio: '\u2236',
          rationals: '\u211A',
          rbarr: '\u290D',
          rBarr: '\u290F',
          RBarr: '\u2910',
          rbbrk: '\u2773',
          rbrace: '}',
          rbrack: ']',
          rbrke: '\u298C',
          rbrksld: '\u298E',
          rbrkslu: '\u2990',
          Rcaron: '\u0158',
          rcaron: '\u0159',
          Rcedil: '\u0156',
          rcedil: '\u0157',
          rceil: '\u2309',
          rcub: '}',
          Rcy: '\u0420',
          rcy: '\u0440',
          rdca: '\u2937',
          rdldhar: '\u2969',
          rdquo: '\u201D',
          rdquor: '\u201D',
          rdsh: '\u21B3',
          real: '\u211C',
          realine: '\u211B',
          realpart: '\u211C',
          reals: '\u211D',
          Re: '\u211C',
          rect: '\u25AD',
          reg: '\xAE',
          REG: '\xAE',
          ReverseElement: '\u220B',
          ReverseEquilibrium: '\u21CB',
          ReverseUpEquilibrium: '\u296F',
          rfisht: '\u297D',
          rfloor: '\u230B',
          rfr: '\u{1D52F}',
          Rfr: '\u211C',
          rHar: '\u2964',
          rhard: '\u21C1',
          rharu: '\u21C0',
          rharul: '\u296C',
          Rho: '\u03A1',
          rho: '\u03C1',
          rhov: '\u03F1',
          RightAngleBracket: '\u27E9',
          RightArrowBar: '\u21E5',
          rightarrow: '\u2192',
          RightArrow: '\u2192',
          Rightarrow: '\u21D2',
          RightArrowLeftArrow: '\u21C4',
          rightarrowtail: '\u21A3',
          RightCeiling: '\u2309',
          RightDoubleBracket: '\u27E7',
          RightDownTeeVector: '\u295D',
          RightDownVectorBar: '\u2955',
          RightDownVector: '\u21C2',
          RightFloor: '\u230B',
          rightharpoondown: '\u21C1',
          rightharpoonup: '\u21C0',
          rightleftarrows: '\u21C4',
          rightleftharpoons: '\u21CC',
          rightrightarrows: '\u21C9',
          rightsquigarrow: '\u219D',
          RightTeeArrow: '\u21A6',
          RightTee: '\u22A2',
          RightTeeVector: '\u295B',
          rightthreetimes: '\u22CC',
          RightTriangleBar: '\u29D0',
          RightTriangle: '\u22B3',
          RightTriangleEqual: '\u22B5',
          RightUpDownVector: '\u294F',
          RightUpTeeVector: '\u295C',
          RightUpVectorBar: '\u2954',
          RightUpVector: '\u21BE',
          RightVectorBar: '\u2953',
          RightVector: '\u21C0',
          ring: '\u02DA',
          risingdotseq: '\u2253',
          rlarr: '\u21C4',
          rlhar: '\u21CC',
          rlm: '\u200F',
          rmoustache: '\u23B1',
          rmoust: '\u23B1',
          rnmid: '\u2AEE',
          roang: '\u27ED',
          roarr: '\u21FE',
          robrk: '\u27E7',
          ropar: '\u2986',
          ropf: '\u{1D563}',
          Ropf: '\u211D',
          roplus: '\u2A2E',
          rotimes: '\u2A35',
          RoundImplies: '\u2970',
          rpar: ')',
          rpargt: '\u2994',
          rppolint: '\u2A12',
          rrarr: '\u21C9',
          Rrightarrow: '\u21DB',
          rsaquo: '\u203A',
          rscr: '\u{1D4C7}',
          Rscr: '\u211B',
          rsh: '\u21B1',
          Rsh: '\u21B1',
          rsqb: ']',
          rsquo: '\u2019',
          rsquor: '\u2019',
          rthree: '\u22CC',
          rtimes: '\u22CA',
          rtri: '\u25B9',
          rtrie: '\u22B5',
          rtrif: '\u25B8',
          rtriltri: '\u29CE',
          RuleDelayed: '\u29F4',
          ruluhar: '\u2968',
          rx: '\u211E',
          Sacute: '\u015A',
          sacute: '\u015B',
          sbquo: '\u201A',
          scap: '\u2AB8',
          Scaron: '\u0160',
          scaron: '\u0161',
          Sc: '\u2ABC',
          sc: '\u227B',
          sccue: '\u227D',
          sce: '\u2AB0',
          scE: '\u2AB4',
          Scedil: '\u015E',
          scedil: '\u015F',
          Scirc: '\u015C',
          scirc: '\u015D',
          scnap: '\u2ABA',
          scnE: '\u2AB6',
          scnsim: '\u22E9',
          scpolint: '\u2A13',
          scsim: '\u227F',
          Scy: '\u0421',
          scy: '\u0441',
          sdotb: '\u22A1',
          sdot: '\u22C5',
          sdote: '\u2A66',
          searhk: '\u2925',
          searr: '\u2198',
          seArr: '\u21D8',
          searrow: '\u2198',
          sect: '\xA7',
          semi: ';',
          seswar: '\u2929',
          setminus: '\u2216',
          setmn: '\u2216',
          sext: '\u2736',
          Sfr: '\u{1D516}',
          sfr: '\u{1D530}',
          sfrown: '\u2322',
          sharp: '\u266F',
          SHCHcy: '\u0429',
          shchcy: '\u0449',
          SHcy: '\u0428',
          shcy: '\u0448',
          ShortDownArrow: '\u2193',
          ShortLeftArrow: '\u2190',
          shortmid: '\u2223',
          shortparallel: '\u2225',
          ShortRightArrow: '\u2192',
          ShortUpArrow: '\u2191',
          shy: '\xAD',
          Sigma: '\u03A3',
          sigma: '\u03C3',
          sigmaf: '\u03C2',
          sigmav: '\u03C2',
          sim: '\u223C',
          simdot: '\u2A6A',
          sime: '\u2243',
          simeq: '\u2243',
          simg: '\u2A9E',
          simgE: '\u2AA0',
          siml: '\u2A9D',
          simlE: '\u2A9F',
          simne: '\u2246',
          simplus: '\u2A24',
          simrarr: '\u2972',
          slarr: '\u2190',
          SmallCircle: '\u2218',
          smallsetminus: '\u2216',
          smashp: '\u2A33',
          smeparsl: '\u29E4',
          smid: '\u2223',
          smile: '\u2323',
          smt: '\u2AAA',
          smte: '\u2AAC',
          smtes: '\u2AAC\uFE00',
          SOFTcy: '\u042C',
          softcy: '\u044C',
          solbar: '\u233F',
          solb: '\u29C4',
          sol: '/',
          Sopf: '\u{1D54A}',
          sopf: '\u{1D564}',
          spades: '\u2660',
          spadesuit: '\u2660',
          spar: '\u2225',
          sqcap: '\u2293',
          sqcaps: '\u2293\uFE00',
          sqcup: '\u2294',
          sqcups: '\u2294\uFE00',
          Sqrt: '\u221A',
          sqsub: '\u228F',
          sqsube: '\u2291',
          sqsubset: '\u228F',
          sqsubseteq: '\u2291',
          sqsup: '\u2290',
          sqsupe: '\u2292',
          sqsupset: '\u2290',
          sqsupseteq: '\u2292',
          square: '\u25A1',
          Square: '\u25A1',
          SquareIntersection: '\u2293',
          SquareSubset: '\u228F',
          SquareSubsetEqual: '\u2291',
          SquareSuperset: '\u2290',
          SquareSupersetEqual: '\u2292',
          SquareUnion: '\u2294',
          squarf: '\u25AA',
          squ: '\u25A1',
          squf: '\u25AA',
          srarr: '\u2192',
          Sscr: '\u{1D4AE}',
          sscr: '\u{1D4C8}',
          ssetmn: '\u2216',
          ssmile: '\u2323',
          sstarf: '\u22C6',
          Star: '\u22C6',
          star: '\u2606',
          starf: '\u2605',
          straightepsilon: '\u03F5',
          straightphi: '\u03D5',
          strns: '\xAF',
          sub: '\u2282',
          Sub: '\u22D0',
          subdot: '\u2ABD',
          subE: '\u2AC5',
          sube: '\u2286',
          subedot: '\u2AC3',
          submult: '\u2AC1',
          subnE: '\u2ACB',
          subne: '\u228A',
          subplus: '\u2ABF',
          subrarr: '\u2979',
          subset: '\u2282',
          Subset: '\u22D0',
          subseteq: '\u2286',
          subseteqq: '\u2AC5',
          SubsetEqual: '\u2286',
          subsetneq: '\u228A',
          subsetneqq: '\u2ACB',
          subsim: '\u2AC7',
          subsub: '\u2AD5',
          subsup: '\u2AD3',
          succapprox: '\u2AB8',
          succ: '\u227B',
          succcurlyeq: '\u227D',
          Succeeds: '\u227B',
          SucceedsEqual: '\u2AB0',
          SucceedsSlantEqual: '\u227D',
          SucceedsTilde: '\u227F',
          succeq: '\u2AB0',
          succnapprox: '\u2ABA',
          succneqq: '\u2AB6',
          succnsim: '\u22E9',
          succsim: '\u227F',
          SuchThat: '\u220B',
          sum: '\u2211',
          Sum: '\u2211',
          sung: '\u266A',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          sup: '\u2283',
          Sup: '\u22D1',
          supdot: '\u2ABE',
          supdsub: '\u2AD8',
          supE: '\u2AC6',
          supe: '\u2287',
          supedot: '\u2AC4',
          Superset: '\u2283',
          SupersetEqual: '\u2287',
          suphsol: '\u27C9',
          suphsub: '\u2AD7',
          suplarr: '\u297B',
          supmult: '\u2AC2',
          supnE: '\u2ACC',
          supne: '\u228B',
          supplus: '\u2AC0',
          supset: '\u2283',
          Supset: '\u22D1',
          supseteq: '\u2287',
          supseteqq: '\u2AC6',
          supsetneq: '\u228B',
          supsetneqq: '\u2ACC',
          supsim: '\u2AC8',
          supsub: '\u2AD4',
          supsup: '\u2AD6',
          swarhk: '\u2926',
          swarr: '\u2199',
          swArr: '\u21D9',
          swarrow: '\u2199',
          swnwar: '\u292A',
          szlig: '\xDF',
          Tab: '	',
          target: '\u2316',
          Tau: '\u03A4',
          tau: '\u03C4',
          tbrk: '\u23B4',
          Tcaron: '\u0164',
          tcaron: '\u0165',
          Tcedil: '\u0162',
          tcedil: '\u0163',
          Tcy: '\u0422',
          tcy: '\u0442',
          tdot: '\u20DB',
          telrec: '\u2315',
          Tfr: '\u{1D517}',
          tfr: '\u{1D531}',
          there4: '\u2234',
          therefore: '\u2234',
          Therefore: '\u2234',
          Theta: '\u0398',
          theta: '\u03B8',
          thetasym: '\u03D1',
          thetav: '\u03D1',
          thickapprox: '\u2248',
          thicksim: '\u223C',
          ThickSpace: '\u205F\u200A',
          ThinSpace: '\u2009',
          thinsp: '\u2009',
          thkap: '\u2248',
          thksim: '\u223C',
          THORN: '\xDE',
          thorn: '\xFE',
          tilde: '\u02DC',
          Tilde: '\u223C',
          TildeEqual: '\u2243',
          TildeFullEqual: '\u2245',
          TildeTilde: '\u2248',
          timesbar: '\u2A31',
          timesb: '\u22A0',
          times: '\xD7',
          timesd: '\u2A30',
          tint: '\u222D',
          toea: '\u2928',
          topbot: '\u2336',
          topcir: '\u2AF1',
          top: '\u22A4',
          Topf: '\u{1D54B}',
          topf: '\u{1D565}',
          topfork: '\u2ADA',
          tosa: '\u2929',
          tprime: '\u2034',
          trade: '\u2122',
          TRADE: '\u2122',
          triangle: '\u25B5',
          triangledown: '\u25BF',
          triangleleft: '\u25C3',
          trianglelefteq: '\u22B4',
          triangleq: '\u225C',
          triangleright: '\u25B9',
          trianglerighteq: '\u22B5',
          tridot: '\u25EC',
          trie: '\u225C',
          triminus: '\u2A3A',
          TripleDot: '\u20DB',
          triplus: '\u2A39',
          trisb: '\u29CD',
          tritime: '\u2A3B',
          trpezium: '\u23E2',
          Tscr: '\u{1D4AF}',
          tscr: '\u{1D4C9}',
          TScy: '\u0426',
          tscy: '\u0446',
          TSHcy: '\u040B',
          tshcy: '\u045B',
          Tstrok: '\u0166',
          tstrok: '\u0167',
          twixt: '\u226C',
          twoheadleftarrow: '\u219E',
          twoheadrightarrow: '\u21A0',
          Uacute: '\xDA',
          uacute: '\xFA',
          uarr: '\u2191',
          Uarr: '\u219F',
          uArr: '\u21D1',
          Uarrocir: '\u2949',
          Ubrcy: '\u040E',
          ubrcy: '\u045E',
          Ubreve: '\u016C',
          ubreve: '\u016D',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ucy: '\u0423',
          ucy: '\u0443',
          udarr: '\u21C5',
          Udblac: '\u0170',
          udblac: '\u0171',
          udhar: '\u296E',
          ufisht: '\u297E',
          Ufr: '\u{1D518}',
          ufr: '\u{1D532}',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uHar: '\u2963',
          uharl: '\u21BF',
          uharr: '\u21BE',
          uhblk: '\u2580',
          ulcorn: '\u231C',
          ulcorner: '\u231C',
          ulcrop: '\u230F',
          ultri: '\u25F8',
          Umacr: '\u016A',
          umacr: '\u016B',
          uml: '\xA8',
          UnderBar: '_',
          UnderBrace: '\u23DF',
          UnderBracket: '\u23B5',
          UnderParenthesis: '\u23DD',
          Union: '\u22C3',
          UnionPlus: '\u228E',
          Uogon: '\u0172',
          uogon: '\u0173',
          Uopf: '\u{1D54C}',
          uopf: '\u{1D566}',
          UpArrowBar: '\u2912',
          uparrow: '\u2191',
          UpArrow: '\u2191',
          Uparrow: '\u21D1',
          UpArrowDownArrow: '\u21C5',
          updownarrow: '\u2195',
          UpDownArrow: '\u2195',
          Updownarrow: '\u21D5',
          UpEquilibrium: '\u296E',
          upharpoonleft: '\u21BF',
          upharpoonright: '\u21BE',
          uplus: '\u228E',
          UpperLeftArrow: '\u2196',
          UpperRightArrow: '\u2197',
          upsi: '\u03C5',
          Upsi: '\u03D2',
          upsih: '\u03D2',
          Upsilon: '\u03A5',
          upsilon: '\u03C5',
          UpTeeArrow: '\u21A5',
          UpTee: '\u22A5',
          upuparrows: '\u21C8',
          urcorn: '\u231D',
          urcorner: '\u231D',
          urcrop: '\u230E',
          Uring: '\u016E',
          uring: '\u016F',
          urtri: '\u25F9',
          Uscr: '\u{1D4B0}',
          uscr: '\u{1D4CA}',
          utdot: '\u22F0',
          Utilde: '\u0168',
          utilde: '\u0169',
          utri: '\u25B5',
          utrif: '\u25B4',
          uuarr: '\u21C8',
          Uuml: '\xDC',
          uuml: '\xFC',
          uwangle: '\u29A7',
          vangrt: '\u299C',
          varepsilon: '\u03F5',
          varkappa: '\u03F0',
          varnothing: '\u2205',
          varphi: '\u03D5',
          varpi: '\u03D6',
          varpropto: '\u221D',
          varr: '\u2195',
          vArr: '\u21D5',
          varrho: '\u03F1',
          varsigma: '\u03C2',
          varsubsetneq: '\u228A\uFE00',
          varsubsetneqq: '\u2ACB\uFE00',
          varsupsetneq: '\u228B\uFE00',
          varsupsetneqq: '\u2ACC\uFE00',
          vartheta: '\u03D1',
          vartriangleleft: '\u22B2',
          vartriangleright: '\u22B3',
          vBar: '\u2AE8',
          Vbar: '\u2AEB',
          vBarv: '\u2AE9',
          Vcy: '\u0412',
          vcy: '\u0432',
          vdash: '\u22A2',
          vDash: '\u22A8',
          Vdash: '\u22A9',
          VDash: '\u22AB',
          Vdashl: '\u2AE6',
          veebar: '\u22BB',
          vee: '\u2228',
          Vee: '\u22C1',
          veeeq: '\u225A',
          vellip: '\u22EE',
          verbar: '|',
          Verbar: '\u2016',
          vert: '|',
          Vert: '\u2016',
          VerticalBar: '\u2223',
          VerticalLine: '|',
          VerticalSeparator: '\u2758',
          VerticalTilde: '\u2240',
          VeryThinSpace: '\u200A',
          Vfr: '\u{1D519}',
          vfr: '\u{1D533}',
          vltri: '\u22B2',
          vnsub: '\u2282\u20D2',
          vnsup: '\u2283\u20D2',
          Vopf: '\u{1D54D}',
          vopf: '\u{1D567}',
          vprop: '\u221D',
          vrtri: '\u22B3',
          Vscr: '\u{1D4B1}',
          vscr: '\u{1D4CB}',
          vsubnE: '\u2ACB\uFE00',
          vsubne: '\u228A\uFE00',
          vsupnE: '\u2ACC\uFE00',
          vsupne: '\u228B\uFE00',
          Vvdash: '\u22AA',
          vzigzag: '\u299A',
          Wcirc: '\u0174',
          wcirc: '\u0175',
          wedbar: '\u2A5F',
          wedge: '\u2227',
          Wedge: '\u22C0',
          wedgeq: '\u2259',
          weierp: '\u2118',
          Wfr: '\u{1D51A}',
          wfr: '\u{1D534}',
          Wopf: '\u{1D54E}',
          wopf: '\u{1D568}',
          wp: '\u2118',
          wr: '\u2240',
          wreath: '\u2240',
          Wscr: '\u{1D4B2}',
          wscr: '\u{1D4CC}',
          xcap: '\u22C2',
          xcirc: '\u25EF',
          xcup: '\u22C3',
          xdtri: '\u25BD',
          Xfr: '\u{1D51B}',
          xfr: '\u{1D535}',
          xharr: '\u27F7',
          xhArr: '\u27FA',
          Xi: '\u039E',
          xi: '\u03BE',
          xlarr: '\u27F5',
          xlArr: '\u27F8',
          xmap: '\u27FC',
          xnis: '\u22FB',
          xodot: '\u2A00',
          Xopf: '\u{1D54F}',
          xopf: '\u{1D569}',
          xoplus: '\u2A01',
          xotime: '\u2A02',
          xrarr: '\u27F6',
          xrArr: '\u27F9',
          Xscr: '\u{1D4B3}',
          xscr: '\u{1D4CD}',
          xsqcup: '\u2A06',
          xuplus: '\u2A04',
          xutri: '\u25B3',
          xvee: '\u22C1',
          xwedge: '\u22C0',
          Yacute: '\xDD',
          yacute: '\xFD',
          YAcy: '\u042F',
          yacy: '\u044F',
          Ycirc: '\u0176',
          ycirc: '\u0177',
          Ycy: '\u042B',
          ycy: '\u044B',
          yen: '\xA5',
          Yfr: '\u{1D51C}',
          yfr: '\u{1D536}',
          YIcy: '\u0407',
          yicy: '\u0457',
          Yopf: '\u{1D550}',
          yopf: '\u{1D56A}',
          Yscr: '\u{1D4B4}',
          yscr: '\u{1D4CE}',
          YUcy: '\u042E',
          yucy: '\u044E',
          yuml: '\xFF',
          Yuml: '\u0178',
          Zacute: '\u0179',
          zacute: '\u017A',
          Zcaron: '\u017D',
          zcaron: '\u017E',
          Zcy: '\u0417',
          zcy: '\u0437',
          Zdot: '\u017B',
          zdot: '\u017C',
          zeetrf: '\u2128',
          ZeroWidthSpace: '\u200B',
          Zeta: '\u0396',
          zeta: '\u03B6',
          zfr: '\u{1D537}',
          Zfr: '\u2128',
          ZHcy: '\u0416',
          zhcy: '\u0436',
          zigrarr: '\u21DD',
          zopf: '\u{1D56B}',
          Zopf: '\u2124',
          Zscr: '\u{1D4B5}',
          zscr: '\u{1D4CF}',
          zwj: '\u200D',
          zwnj: '\u200C',
        }
      },
    }),
    EO = Ge({
      '../../node_modules/entities/lib/maps/legacy.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          AElig: '\xC6',
          aelig: '\xE6',
          Agrave: '\xC0',
          agrave: '\xE0',
          amp: '&',
          AMP: '&',
          Aring: '\xC5',
          aring: '\xE5',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          brvbar: '\xA6',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          cedil: '\xB8',
          cent: '\xA2',
          copy: '\xA9',
          COPY: '\xA9',
          curren: '\xA4',
          deg: '\xB0',
          divide: '\xF7',
          Eacute: '\xC9',
          eacute: '\xE9',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          Egrave: '\xC8',
          egrave: '\xE8',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          frac12: '\xBD',
          frac14: '\xBC',
          frac34: '\xBE',
          gt: '>',
          GT: '>',
          Iacute: '\xCD',
          iacute: '\xED',
          Icirc: '\xCE',
          icirc: '\xEE',
          iexcl: '\xA1',
          Igrave: '\xCC',
          igrave: '\xEC',
          iquest: '\xBF',
          Iuml: '\xCF',
          iuml: '\xEF',
          laquo: '\xAB',
          lt: '<',
          LT: '<',
          macr: '\xAF',
          micro: '\xB5',
          middot: '\xB7',
          nbsp: '\xA0',
          not: '\xAC',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          Oacute: '\xD3',
          oacute: '\xF3',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          Ograve: '\xD2',
          ograve: '\xF2',
          ordf: '\xAA',
          ordm: '\xBA',
          Oslash: '\xD8',
          oslash: '\xF8',
          Otilde: '\xD5',
          otilde: '\xF5',
          Ouml: '\xD6',
          ouml: '\xF6',
          para: '\xB6',
          plusmn: '\xB1',
          pound: '\xA3',
          quot: '"',
          QUOT: '"',
          raquo: '\xBB',
          reg: '\xAE',
          REG: '\xAE',
          sect: '\xA7',
          shy: '\xAD',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          szlig: '\xDF',
          THORN: '\xDE',
          thorn: '\xFE',
          times: '\xD7',
          Uacute: '\xDA',
          uacute: '\xFA',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uml: '\xA8',
          Uuml: '\xDC',
          uuml: '\xFC',
          Yacute: '\xDD',
          yacute: '\xFD',
          yen: '\xA5',
          yuml: '\xFF',
        }
      },
    }),
    Cy = Ge({
      '../../node_modules/entities/lib/maps/xml.json'(e, t) {
        t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' }
      },
    }),
    vO = Ge({
      '../../node_modules/entities/lib/maps/decode.json'(e, t) {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        }
      },
    }),
    DO = Ge({
      '../../node_modules/entities/lib/decode_codepoint.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (o) {
            return o && o.__esModule ? o : { default: o }
          }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var r = t(vO()),
          n =
            String.fromCodePoint ||
            function (o) {
              var i = ''
              return (
                o > 65535 &&
                  ((o -= 65536),
                  (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                  (o = 56320 | (o & 1023))),
                (i += String.fromCharCode(o)),
                i
              )
            }
        function a(o) {
          return (o >= 55296 && o <= 57343) || o > 1114111
            ? '\uFFFD'
            : (o in r.default && (o = r.default[o]), n(o))
        }
        e.default = a
      },
    }),
    Ey = Ge({
      '../../node_modules/entities/lib/decode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (m) {
            return m && m.__esModule ? m : { default: m }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0)
        var r = t(Dy()),
          n = t(EO()),
          a = t(Cy()),
          o = t(DO()),
          i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g
        ;(e.decodeXML = s(a.default)), (e.decodeHTMLStrict = s(r.default))
        function s(m) {
          var b = d(m)
          return function (h) {
            return String(h).replace(i, b)
          }
        }
        var u = function (m, b) {
          return m < b ? 1 : -1
        }
        e.decodeHTML = (function () {
          for (
            var m = Object.keys(n.default).sort(u),
              b = Object.keys(r.default).sort(u),
              h = 0,
              y = 0;
            h < b.length;
            h++
          )
            m[y] === b[h] ? ((b[h] += ';?'), y++) : (b[h] += ';')
          var E = new RegExp(
              '&(?:' + b.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
              'g'
            ),
            A = d(r.default)
          function x(F) {
            return F.substr(-1) !== ';' && (F += ';'), A(F)
          }
          return function (F) {
            return String(F).replace(E, x)
          }
        })()
        function d(m) {
          return function (b) {
            if (b.charAt(1) === '#') {
              var h = b.charAt(2)
              return h === 'X' || h === 'x'
                ? o.default(parseInt(b.substr(3), 16))
                : o.default(parseInt(b.substr(2), 10))
            }
            return m[b.slice(1, -1)] || b
          }
        }
      },
    }),
    vy = Ge({
      '../../node_modules/entities/lib/encode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (R) {
            return R && R.__esModule ? R : { default: R }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0)
        var r = t(Cy()),
          n = u(r.default),
          a = d(n)
        e.encodeXML = F(n)
        var o = t(Dy()),
          i = u(o.default),
          s = d(i)
        ;(e.encodeHTML = y(i, s)), (e.encodeNonAsciiHTML = F(i))
        function u(R) {
          return Object.keys(R)
            .sort()
            .reduce(function (j, L) {
              return (j[R[L]] = '&' + L + ';'), j
            }, {})
        }
        function d(R) {
          for (
            var j = [], L = [], w = 0, M = Object.keys(R);
            w < M.length;
            w++
          ) {
            var I = M[w]
            I.length === 1 ? j.push('\\' + I) : L.push(I)
          }
          j.sort()
          for (var U = 0; U < j.length - 1; U++) {
            for (
              var J = U;
              J < j.length - 1 &&
              j[J].charCodeAt(1) + 1 === j[J + 1].charCodeAt(1);

            )
              J += 1
            var z = 1 + J - U
            z < 3 || j.splice(U, z, j[U] + '-' + j[J])
          }
          return L.unshift('[' + j.join('') + ']'), new RegExp(L.join('|'), 'g')
        }
        var m =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          b =
            String.prototype.codePointAt != null
              ? function (R) {
                  return R.codePointAt(0)
                }
              : function (R) {
                  return (
                    (R.charCodeAt(0) - 55296) * 1024 +
                    R.charCodeAt(1) -
                    56320 +
                    65536
                  )
                }
        function h(R) {
          return (
            '&#x' +
            (R.length > 1 ? b(R) : R.charCodeAt(0)).toString(16).toUpperCase() +
            ';'
          )
        }
        function y(R, j) {
          return function (L) {
            return L.replace(j, function (w) {
              return R[w]
            }).replace(m, h)
          }
        }
        var E = new RegExp(a.source + '|' + m.source, 'g')
        function A(R) {
          return R.replace(E, h)
        }
        e.escape = A
        function x(R) {
          return R.replace(a, h)
        }
        e.escapeUTF8 = x
        function F(R) {
          return function (j) {
            return j.replace(E, function (L) {
              return R[L] || h(L)
            })
          }
        }
      },
    }),
    CO = Ge({
      '../../node_modules/entities/lib/index.js'(e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0)
        var t = Ey(),
          r = vy()
        function n(u, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTML)(u)
        }
        e.decode = n
        function a(u, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTMLStrict)(u)
        }
        e.decodeStrict = a
        function o(u, d) {
          return (!d || d <= 0 ? r.encodeXML : r.encodeHTML)(u)
        }
        e.encode = o
        var i = vy()
        Object.defineProperty(e, 'encodeXML', {
          enumerable: !0,
          get: function () {
            return i.encodeXML
          },
        }),
          Object.defineProperty(e, 'encodeHTML', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML
            },
          }),
          Object.defineProperty(e, 'encodeNonAsciiHTML', {
            enumerable: !0,
            get: function () {
              return i.encodeNonAsciiHTML
            },
          }),
          Object.defineProperty(e, 'escape', {
            enumerable: !0,
            get: function () {
              return i.escape
            },
          }),
          Object.defineProperty(e, 'escapeUTF8', {
            enumerable: !0,
            get: function () {
              return i.escapeUTF8
            },
          }),
          Object.defineProperty(e, 'encodeHTML4', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML
            },
          }),
          Object.defineProperty(e, 'encodeHTML5', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML
            },
          })
        var s = Ey()
        Object.defineProperty(e, 'decodeXML', {
          enumerable: !0,
          get: function () {
            return s.decodeXML
          },
        }),
          Object.defineProperty(e, 'decodeHTML', {
            enumerable: !0,
            get: function () {
              return s.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTMLStrict', {
            enumerable: !0,
            get: function () {
              return s.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeHTML4', {
            enumerable: !0,
            get: function () {
              return s.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTML5', {
            enumerable: !0,
            get: function () {
              return s.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTML4Strict', {
            enumerable: !0,
            get: function () {
              return s.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeHTML5Strict', {
            enumerable: !0,
            get: function () {
              return s.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeXMLStrict', {
            enumerable: !0,
            get: function () {
              return s.decodeXML
            },
          })
      },
    }),
    xO = Ge({
      '../../node_modules/ansi-to-html/lib/ansi_to_html.js'(e, t) {
        function r(_, B) {
          if (!(_ instanceof B))
            throw new TypeError('Cannot call a class as a function')
        }
        function n(_, B) {
          for (var k = 0; k < B.length; k++) {
            var H = B[k]
            ;(H.enumerable = H.enumerable || !1),
              (H.configurable = !0),
              'value' in H && (H.writable = !0),
              Object.defineProperty(_, H.key, H)
          }
        }
        function a(_, B, k) {
          return B && n(_.prototype, B), k && n(_, k), _
        }
        function o(_) {
          if (typeof Symbol > 'u' || _[Symbol.iterator] == null) {
            if (Array.isArray(_) || (_ = i(_))) {
              var B = 0,
                k = function () {}
              return {
                s: k,
                n: function () {
                  return B >= _.length
                    ? { done: !0 }
                    : { done: !1, value: _[B++] }
                },
                e: function (ae) {
                  throw ae
                },
                f: k,
              }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          var H,
            X = !0,
            V = !1,
            Z
          return {
            s: function () {
              H = _[Symbol.iterator]()
            },
            n: function () {
              var ae = H.next()
              return (X = ae.done), ae
            },
            e: function (ae) {
              ;(V = !0), (Z = ae)
            },
            f: function () {
              try {
                !X && H.return != null && H.return()
              } finally {
                if (V) throw Z
              }
            },
          }
        }
        function i(_, B) {
          if (_) {
            if (typeof _ == 'string') return s(_, B)
            var k = Object.prototype.toString.call(_).slice(8, -1)
            if (
              (k === 'Object' && _.constructor && (k = _.constructor.name),
              k === 'Map' || k === 'Set')
            )
              return Array.from(k)
            if (
              k === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)
            )
              return s(_, B)
          }
        }
        function s(_, B) {
          ;(B == null || B > _.length) && (B = _.length)
          for (var k = 0, H = new Array(B); k < B; k++) H[k] = _[k]
          return H
        }
        var u = CO(),
          d = {
            fg: '#FFF',
            bg: '#000',
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: m(),
          }
        function m() {
          var _ = {
            0: '#000',
            1: '#A00',
            2: '#0A0',
            3: '#A50',
            4: '#00A',
            5: '#A0A',
            6: '#0AA',
            7: '#AAA',
            8: '#555',
            9: '#F55',
            10: '#5F5',
            11: '#FF5',
            12: '#55F',
            13: '#F5F',
            14: '#5FF',
            15: '#FFF',
          }
          return (
            R(0, 5).forEach(function (B) {
              R(0, 5).forEach(function (k) {
                R(0, 5).forEach(function (H) {
                  return b(B, k, H, _)
                })
              })
            }),
            R(0, 23).forEach(function (B) {
              var k = B + 232,
                H = h(B * 10 + 8)
              _[k] = '#' + H + H + H
            }),
            _
          )
        }
        function b(_, B, k, H) {
          var X = 16 + _ * 36 + B * 6 + k,
            V = _ > 0 ? _ * 40 + 55 : 0,
            Z = B > 0 ? B * 40 + 55 : 0,
            ae = k > 0 ? k * 40 + 55 : 0
          H[X] = y([V, Z, ae])
        }
        function h(_) {
          for (var B = _.toString(16); B.length < 2; ) B = '0' + B
          return B
        }
        function y(_) {
          var B = [],
            k = o(_),
            H
          try {
            for (k.s(); !(H = k.n()).done; ) {
              var X = H.value
              B.push(h(X))
            }
          } catch (V) {
            k.e(V)
          } finally {
            k.f()
          }
          return '#' + B.join('')
        }
        function E(_, B, k, H) {
          var X
          return (
            B === 'text'
              ? (X = w(k, H))
              : B === 'display'
              ? (X = x(_, k, H))
              : B === 'xterm256'
              ? (X = U(_, H.colors[k]))
              : B === 'rgb' && (X = A(_, k)),
            X
          )
        }
        function A(_, B) {
          B = B.substring(2).slice(0, -1)
          var k = +B.substr(0, 2),
            H = B.substring(5).split(';'),
            X = H.map(function (V) {
              return ('0' + Number(V).toString(16)).substr(-2)
            }).join('')
          return I(_, (k === 38 ? 'color:#' : 'background-color:#') + X)
        }
        function x(_, B, k) {
          B = parseInt(B, 10)
          var H = {
              '-1': function () {
                return '<br/>'
              },
              0: function () {
                return _.length && F(_)
              },
              1: function () {
                return M(_, 'b')
              },
              3: function () {
                return M(_, 'i')
              },
              4: function () {
                return M(_, 'u')
              },
              8: function () {
                return I(_, 'display:none')
              },
              9: function () {
                return M(_, 'strike')
              },
              22: function () {
                return I(
                  _,
                  'font-weight:normal;text-decoration:none;font-style:normal'
                )
              },
              23: function () {
                return z(_, 'i')
              },
              24: function () {
                return z(_, 'u')
              },
              39: function () {
                return U(_, k.fg)
              },
              49: function () {
                return J(_, k.bg)
              },
              53: function () {
                return I(_, 'text-decoration:overline')
              },
            },
            X
          return (
            H[B]
              ? (X = H[B]())
              : 4 < B && B < 7
              ? (X = M(_, 'blink'))
              : 29 < B && B < 38
              ? (X = U(_, k.colors[B - 30]))
              : 39 < B && B < 48
              ? (X = J(_, k.colors[B - 40]))
              : 89 < B && B < 98
              ? (X = U(_, k.colors[8 + (B - 90)]))
              : 99 < B && B < 108 && (X = J(_, k.colors[8 + (B - 100)])),
            X
          )
        }
        function F(_) {
          var B = _.slice(0)
          return (
            (_.length = 0),
            B.reverse()
              .map(function (k) {
                return '</' + k + '>'
              })
              .join('')
          )
        }
        function R(_, B) {
          for (var k = [], H = _; H <= B; H++) k.push(H)
          return k
        }
        function j(_) {
          return function (B) {
            return (_ === null || B.category !== _) && _ !== 'all'
          }
        }
        function L(_) {
          _ = parseInt(_, 10)
          var B = null
          return (
            _ === 0
              ? (B = 'all')
              : _ === 1
              ? (B = 'bold')
              : 2 < _ && _ < 5
              ? (B = 'underline')
              : 4 < _ && _ < 7
              ? (B = 'blink')
              : _ === 8
              ? (B = 'hide')
              : _ === 9
              ? (B = 'strike')
              : (29 < _ && _ < 38) || _ === 39 || (89 < _ && _ < 98)
              ? (B = 'foreground-color')
              : ((39 < _ && _ < 48) || _ === 49 || (99 < _ && _ < 108)) &&
                (B = 'background-color'),
            B
          )
        }
        function w(_, B) {
          return B.escapeXML ? u.encodeXML(_) : _
        }
        function M(_, B, k) {
          return (
            k || (k = ''),
            _.push(B),
            '<'.concat(B).concat(k ? ' style="'.concat(k, '"') : '', '>')
          )
        }
        function I(_, B) {
          return M(_, 'span', B)
        }
        function U(_, B) {
          return M(_, 'span', 'color:' + B)
        }
        function J(_, B) {
          return M(_, 'span', 'background-color:' + B)
        }
        function z(_, B) {
          var k
          if ((_.slice(-1)[0] === B && (k = _.pop()), k)) return '</' + B + '>'
        }
        function ue(_, B, k) {
          var H = !1,
            X = 3
          function V() {
            return ''
          }
          function Z(se, ve) {
            return k('xterm256', ve), ''
          }
          function ae(se) {
            return B.newline ? k('display', -1) : k('text', se), ''
          }
          function Ee(se, ve) {
            ;(H = !0),
              ve.trim().length === 0 && (ve = '0'),
              (ve = ve.trimRight(';').split(';'))
            var an = o(ve),
              wu
            try {
              for (an.s(); !(wu = an.n()).done; ) {
                var a1 = wu.value
                k('display', a1)
              }
            } catch (o1) {
              an.e(o1)
            } finally {
              an.f()
            }
            return ''
          }
          function be(se) {
            return k('text', se), ''
          }
          function Y(se) {
            return k('rgb', se), ''
          }
          var Se = [
            { pattern: /^\x08+/, sub: V },
            { pattern: /^\x1b\[[012]?K/, sub: V },
            { pattern: /^\x1b\[\(B/, sub: V },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: Y },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: Z },
            { pattern: /^\n/, sub: ae },
            { pattern: /^\r+\n/, sub: ae },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Ee },
            { pattern: /^\x1b\[\d?J/, sub: V },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: V },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: V },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: be },
          ]
          function T(se, ve) {
            ;(ve > X && H) || ((H = !1), (_ = _.replace(se.pattern, se.sub)))
          }
          var P = [],
            N = _,
            O = N.length
          e: for (; O > 0; ) {
            for (var $ = 0, G = 0, fe = Se.length; G < fe; $ = ++G) {
              var oe = Se[$]
              if ((T(oe, $), _.length !== O)) {
                O = _.length
                continue e
              }
            }
            if (_.length === O) break
            P.push(0), (O = _.length)
          }
          return P
        }
        function Q(_, B, k) {
          return (
            B !== 'text' &&
              ((_ = _.filter(j(L(k)))),
              _.push({ token: B, data: k, category: L(k) })),
            _
          )
        }
        var W = (function () {
          function _(B) {
            r(this, _),
              (B = B || {}),
              B.colors && (B.colors = Object.assign({}, d.colors, B.colors)),
              (this.options = Object.assign({}, d, B)),
              (this.stack = []),
              (this.stickyStack = [])
          }
          return (
            a(_, [
              {
                key: 'toHtml',
                value: function (B) {
                  var k = this
                  B = typeof B == 'string' ? [B] : B
                  var H = this.stack,
                    X = this.options,
                    V = []
                  return (
                    this.stickyStack.forEach(function (Z) {
                      var ae = E(H, Z.token, Z.data, X)
                      ae && V.push(ae)
                    }),
                    ue(B.join(''), X, function (Z, ae) {
                      var Ee = E(H, Z, ae, X)
                      Ee && V.push(Ee),
                        X.stream && (k.stickyStack = Q(k.stickyStack, Z, ae))
                    }),
                    H.length && V.push(F(H)),
                    V.join('')
                  )
                },
              },
            ]),
            _
          )
        })()
        t.exports = W
      },
    }),
    bte = new Error('prepareAborted'),
    { AbortController: Ate } = globalThis
  var { fetch: Ete } = ie
  var { history: vte, document: Dte } = ie
  var SO = f0(xO()),
    { document: Cte } = ie
  var FO = ((e) => (
    (e.MAIN = 'MAIN'),
    (e.NOPREVIEW = 'NOPREVIEW'),
    (e.PREPARING_STORY = 'PREPARING_STORY'),
    (e.PREPARING_DOCS = 'PREPARING_DOCS'),
    (e.ERROR = 'ERROR'),
    e
  ))(FO || {})
  var xte = new SO.default({ escapeXML: !0 })
  var { document: Ste } = ie
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  var wO = Object.create,
    xy = Object.defineProperty,
    BO = Object.getOwnPropertyDescriptor,
    Sy = Object.getOwnPropertyNames,
    _O = Object.getPrototypeOf,
    TO = Object.prototype.hasOwnProperty,
    ke = (e, t) =>
      function () {
        return (
          t || (0, e[Sy(e)[0]])((t = { exports: {} }).exports, t), t.exports
        )
      },
    OO = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of Sy(t))
          !TO.call(e, a) &&
            a !== r &&
            xy(e, a, {
              get: () => t[a],
              enumerable: !(n = BO(t, a)) || n.enumerable,
            })
      return e
    },
    oa = (e, t, r) => (
      (r = e != null ? wO(_O(e)) : {}),
      OO(
        t || !e || !e.__esModule
          ? xy(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    PO = [
      'bubbles',
      'cancelBubble',
      'cancelable',
      'composed',
      'currentTarget',
      'defaultPrevented',
      'eventPhase',
      'isTrusted',
      'returnValue',
      'srcElement',
      'target',
      'timeStamp',
      'type',
    ],
    RO = ['detail']
  function Fy(e) {
    let t = PO.filter((r) => e[r] !== void 0).reduce(
      (r, n) => ({ ...r, [n]: e[n] }),
      {}
    )
    return (
      e instanceof CustomEvent &&
        RO.filter((r) => e[r] !== void 0).forEach((r) => {
          t[r] = e[r]
        }),
      t
    )
  }
  var $y = pe(Ir(), 1),
    Py = ke({
      'node_modules/has-symbols/shams.js'(e, t) {
        'use strict'
        t.exports = function () {
          if (
            typeof Symbol != 'function' ||
            typeof Object.getOwnPropertySymbols != 'function'
          )
            return !1
          if (typeof Symbol.iterator == 'symbol') return !0
          var n = {},
            a = Symbol('test'),
            o = Object(a)
          if (
            typeof a == 'string' ||
            Object.prototype.toString.call(a) !== '[object Symbol]' ||
            Object.prototype.toString.call(o) !== '[object Symbol]'
          )
            return !1
          var i = 42
          n[a] = i
          for (a in n) return !1
          if (
            (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == 'function' &&
              Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1
          var s = Object.getOwnPropertySymbols(n)
          if (
            s.length !== 1 ||
            s[0] !== a ||
            !Object.prototype.propertyIsEnumerable.call(n, a)
          )
            return !1
          if (typeof Object.getOwnPropertyDescriptor == 'function') {
            var u = Object.getOwnPropertyDescriptor(n, a)
            if (u.value !== i || u.enumerable !== !0) return !1
          }
          return !0
        }
      },
    }),
    Ry = ke({
      'node_modules/has-symbols/index.js'(e, t) {
        'use strict'
        var r = typeof Symbol < 'u' && Symbol,
          n = Py()
        t.exports = function () {
          return typeof r != 'function' ||
            typeof Symbol != 'function' ||
            typeof r('foo') != 'symbol' ||
            typeof Symbol('bar') != 'symbol'
            ? !1
            : n()
        }
      },
    }),
    IO = ke({
      'node_modules/function-bind/implementation.js'(e, t) {
        'use strict'
        var r = 'Function.prototype.bind called on incompatible ',
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = '[object Function]'
        t.exports = function (s) {
          var u = this
          if (typeof u != 'function' || a.call(u) !== o)
            throw new TypeError(r + u)
          for (
            var d = n.call(arguments, 1),
              m,
              b = function () {
                if (this instanceof m) {
                  var x = u.apply(this, d.concat(n.call(arguments)))
                  return Object(x) === x ? x : this
                } else return u.apply(s, d.concat(n.call(arguments)))
              },
              h = Math.max(0, u.length - d.length),
              y = [],
              E = 0;
            E < h;
            E++
          )
            y.push('$' + E)
          if (
            ((m = Function(
              'binder',
              'return function (' +
                y.join(',') +
                '){ return binder.apply(this,arguments); }'
            )(b)),
            u.prototype)
          ) {
            var A = function () {}
            ;(A.prototype = u.prototype),
              (m.prototype = new A()),
              (A.prototype = null)
          }
          return m
        }
      },
    }),
    Pi = ke({
      'node_modules/function-bind/index.js'(e, t) {
        'use strict'
        var r = IO()
        t.exports = Function.prototype.bind || r
      },
    }),
    kO = ke({
      'node_modules/has/src/index.js'(e, t) {
        'use strict'
        var r = Pi()
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
      },
    }),
    Iy = ke({
      'node_modules/get-intrinsic/index.js'(e, t) {
        'use strict'
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          i = function (Q) {
            try {
              return a('"use strict"; return (' + Q + ').constructor;')()
            } catch {}
          },
          s = Object.getOwnPropertyDescriptor
        if (s)
          try {
            s({}, '')
          } catch {
            s = null
          }
        var u = function () {
            throw new o()
          },
          d = s
            ? (function () {
                try {
                  return arguments.callee, u
                } catch {
                  try {
                    return s(arguments, 'callee').get
                  } catch {
                    return u
                  }
                }
              })()
            : u,
          m = Ry()(),
          b =
            Object.getPrototypeOf ||
            function (Q) {
              return Q.__proto__
            },
          h = {},
          y = typeof Uint8Array > 'u' ? r : b(Uint8Array),
          E = {
            '%AggregateError%':
              typeof AggregateError > 'u' ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': m ? b([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': h,
            '%AsyncGenerator%': h,
            '%AsyncGeneratorFunction%': h,
            '%AsyncIteratorPrototype%': h,
            '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
            '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
            '%Boolean%': Boolean,
            '%DataView%': typeof DataView > 'u' ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
            '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
            '%FinalizationRegistry%':
              typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
            '%Function%': a,
            '%GeneratorFunction%': h,
            '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
            '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
            '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': m ? b(b([][Symbol.iterator]())) : r,
            '%JSON%': typeof JSON == 'object' ? JSON : r,
            '%Map%': typeof Map > 'u' ? r : Map,
            '%MapIteratorPrototype%':
              typeof Map > 'u' || !m ? r : b(new Map()[Symbol.iterator]()),
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': typeof Promise > 'u' ? r : Promise,
            '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': typeof Set > 'u' ? r : Set,
            '%SetIteratorPrototype%':
              typeof Set > 'u' || !m ? r : b(new Set()[Symbol.iterator]()),
            '%SharedArrayBuffer%':
              typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': m ? b(''[Symbol.iterator]()) : r,
            '%Symbol%': m ? Symbol : r,
            '%SyntaxError%': n,
            '%ThrowTypeError%': d,
            '%TypedArray%': y,
            '%TypeError%': o,
            '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
            '%Uint8ClampedArray%':
              typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
            '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
            '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
            '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
            '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
          },
          A = function Q(W) {
            var _
            if (W === '%AsyncFunction%') _ = i('async function () {}')
            else if (W === '%GeneratorFunction%') _ = i('function* () {}')
            else if (W === '%AsyncGeneratorFunction%')
              _ = i('async function* () {}')
            else if (W === '%AsyncGenerator%') {
              var B = Q('%AsyncGeneratorFunction%')
              B && (_ = B.prototype)
            } else if (W === '%AsyncIteratorPrototype%') {
              var k = Q('%AsyncGenerator%')
              k && (_ = b(k.prototype))
            }
            return (E[W] = _), _
          },
          x = {
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': [
              'AsyncGeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': [
              'GeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          F = Pi(),
          R = kO(),
          j = F.call(Function.call, Array.prototype.concat),
          L = F.call(Function.apply, Array.prototype.splice),
          w = F.call(Function.call, String.prototype.replace),
          M = F.call(Function.call, String.prototype.slice),
          I = F.call(Function.call, RegExp.prototype.exec),
          U =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          J = /\\(\\)?/g,
          z = function (W) {
            var _ = M(W, 0, 1),
              B = M(W, -1)
            if (_ === '%' && B !== '%')
              throw new n('invalid intrinsic syntax, expected closing `%`')
            if (B === '%' && _ !== '%')
              throw new n('invalid intrinsic syntax, expected opening `%`')
            var k = []
            return (
              w(W, U, function (H, X, V, Z) {
                k[k.length] = V ? w(Z, J, '$1') : X || H
              }),
              k
            )
          },
          ue = function (W, _) {
            var B = W,
              k
            if ((R(x, B) && ((k = x[B]), (B = '%' + k[0] + '%')), R(E, B))) {
              var H = E[B]
              if ((H === h && (H = A(B)), typeof H > 'u' && !_))
                throw new o(
                  'intrinsic ' +
                    W +
                    ' exists, but is not available. Please file an issue!'
                )
              return { alias: k, name: B, value: H }
            }
            throw new n('intrinsic ' + W + ' does not exist!')
          }
        t.exports = function (W, _) {
          if (typeof W != 'string' || W.length === 0)
            throw new o('intrinsic name must be a non-empty string')
          if (arguments.length > 1 && typeof _ != 'boolean')
            throw new o('"allowMissing" argument must be a boolean')
          if (I(/^%?[^%]*%?$/, W) === null)
            throw new n(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
            )
          var B = z(W),
            k = B.length > 0 ? B[0] : '',
            H = ue('%' + k + '%', _),
            X = H.name,
            V = H.value,
            Z = !1,
            ae = H.alias
          ae && ((k = ae[0]), L(B, j([0, 1], ae)))
          for (var Ee = 1, be = !0; Ee < B.length; Ee += 1) {
            var Y = B[Ee],
              Se = M(Y, 0, 1),
              T = M(Y, -1)
            if (
              (Se === '"' ||
                Se === "'" ||
                Se === '`' ||
                T === '"' ||
                T === "'" ||
                T === '`') &&
              Se !== T
            )
              throw new n(
                'property names with quotes must have matching quotes'
              )
            if (
              ((Y === 'constructor' || !be) && (Z = !0),
              (k += '.' + Y),
              (X = '%' + k + '%'),
              R(E, X))
            )
              V = E[X]
            else if (V != null) {
              if (!(Y in V)) {
                if (!_)
                  throw new o(
                    'base intrinsic for ' +
                      W +
                      ' exists, but the property is not available.'
                  )
                return
              }
              if (s && Ee + 1 >= B.length) {
                var P = s(V, Y)
                ;(be = !!P),
                  be && 'get' in P && !('originalValue' in P.get)
                    ? (V = P.get)
                    : (V = V[Y])
              } else (be = R(V, Y)), (V = V[Y])
              be && !Z && (E[X] = V)
            }
          }
          return V
        }
      },
    }),
    NO = ke({
      'node_modules/call-bind/index.js'(e, t) {
        'use strict'
        var r = Pi(),
          n = Iy(),
          a = n('%Function.prototype.apply%'),
          o = n('%Function.prototype.call%'),
          i = n('%Reflect.apply%', !0) || r.call(o, a),
          s = n('%Object.getOwnPropertyDescriptor%', !0),
          u = n('%Object.defineProperty%', !0),
          d = n('%Math.max%')
        if (u)
          try {
            u({}, 'a', { value: 1 })
          } catch {
            u = null
          }
        t.exports = function (h) {
          var y = i(r, o, arguments)
          if (s && u) {
            var E = s(y, 'length')
            E.configurable &&
              u(y, 'length', {
                value: 1 + d(0, h.length - (arguments.length - 1)),
              })
          }
          return y
        }
        var m = function () {
          return i(r, a, arguments)
        }
        u ? u(t.exports, 'apply', { value: m }) : (t.exports.apply = m)
      },
    }),
    jO = ke({
      'node_modules/call-bind/callBound.js'(e, t) {
        'use strict'
        var r = Iy(),
          n = NO(),
          a = n(r('String.prototype.indexOf'))
        t.exports = function (i, s) {
          var u = r(i, !!s)
          return typeof u == 'function' && a(i, '.prototype.') > -1 ? n(u) : u
        }
      },
    }),
    MO = ke({
      'node_modules/has-tostringtag/shams.js'(e, t) {
        'use strict'
        var r = Py()
        t.exports = function () {
          return r() && !!Symbol.toStringTag
        }
      },
    }),
    qO = ke({
      'node_modules/is-regex/index.js'(e, t) {
        'use strict'
        var r = jO(),
          n = MO()(),
          a,
          o,
          i,
          s
        n &&
          ((a = r('Object.prototype.hasOwnProperty')),
          (o = r('RegExp.prototype.exec')),
          (i = {}),
          (u = function () {
            throw i
          }),
          (s = { toString: u, valueOf: u }),
          typeof Symbol.toPrimitive == 'symbol' && (s[Symbol.toPrimitive] = u))
        var u,
          d = r('Object.prototype.toString'),
          m = Object.getOwnPropertyDescriptor,
          b = '[object RegExp]'
        t.exports = n
          ? function (y) {
              if (!y || typeof y != 'object') return !1
              var E = m(y, 'lastIndex'),
                A = E && a(E, 'value')
              if (!A) return !1
              try {
                o(y, s)
              } catch (x) {
                return x === i
              }
            }
          : function (y) {
              return !y || (typeof y != 'object' && typeof y != 'function')
                ? !1
                : d(y) === b
            }
      },
    }),
    LO = ke({
      'node_modules/is-function/index.js'(e, t) {
        t.exports = n
        var r = Object.prototype.toString
        function n(a) {
          if (!a) return !1
          var o = r.call(a)
          return (
            o === '[object Function]' ||
            (typeof a == 'function' && o !== '[object RegExp]') ||
            (typeof window < 'u' &&
              (a === window.setTimeout ||
                a === window.alert ||
                a === window.confirm ||
                a === window.prompt))
          )
        }
      },
    }),
    $O = ke({
      'node_modules/is-symbol/index.js'(e, t) {
        'use strict'
        var r = Object.prototype.toString,
          n = Ry()()
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (i = function (u) {
              return typeof u.valueOf() != 'symbol' ? !1 : o.test(a.call(u))
            }),
            (t.exports = function (u) {
              if (typeof u == 'symbol') return !0
              if (r.call(u) !== '[object Symbol]') return !1
              try {
                return i(u)
              } catch {
                return !1
              }
            }))
          : (t.exports = function (u) {
              return !1
            })
        var a, o, i
      },
    }),
    UO = oa(qO()),
    zO = oa(LO()),
    HO = oa($O())
  function GO(e) {
    return e != null && typeof e == 'object' && Array.isArray(e) === !1
  }
  var WO =
      typeof window == 'object' && window && window.Object === Object && window,
    VO = WO,
    KO = typeof self == 'object' && self && self.Object === Object && self,
    YO = VO || KO || Function('return this')(),
    Ri = YO,
    JO = Ri.Symbol,
    tr = JO,
    ky = Object.prototype,
    XO = ky.hasOwnProperty,
    QO = ky.toString,
    Kr = tr ? tr.toStringTag : void 0
  function ZO(e) {
    var t = XO.call(e, Kr),
      r = e[Kr]
    try {
      e[Kr] = void 0
      var n = !0
    } catch {}
    var a = QO.call(e)
    return n && (t ? (e[Kr] = r) : delete e[Kr]), a
  }
  var e8 = ZO,
    t8 = Object.prototype,
    r8 = t8.toString
  function n8(e) {
    return r8.call(e)
  }
  var a8 = n8,
    o8 = '[object Null]',
    i8 = '[object Undefined]',
    wy = tr ? tr.toStringTag : void 0
  function u8(e) {
    return e == null
      ? e === void 0
        ? i8
        : o8
      : wy && wy in Object(e)
      ? e8(e)
      : a8(e)
  }
  var Ny = u8
  function s8(e) {
    return e != null && typeof e == 'object'
  }
  var l8 = s8,
    c8 = '[object Symbol]'
  function p8(e) {
    return typeof e == 'symbol' || (l8(e) && Ny(e) == c8)
  }
  var Ii = p8
  function d8(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e)
    return a
  }
  var f8 = d8,
    h8 = Array.isArray,
    ki = h8,
    y8 = 1 / 0,
    By = tr ? tr.prototype : void 0,
    _y = By ? By.toString : void 0
  function jy(e) {
    if (typeof e == 'string') return e
    if (ki(e)) return f8(e, jy) + ''
    if (Ii(e)) return _y ? _y.call(e) : ''
    var t = e + ''
    return t == '0' && 1 / e == -y8 ? '-0' : t
  }
  var g8 = jy
  function m8(e) {
    var t = typeof e
    return e != null && (t == 'object' || t == 'function')
  }
  var My = m8,
    b8 = '[object AsyncFunction]',
    A8 = '[object Function]',
    E8 = '[object GeneratorFunction]',
    v8 = '[object Proxy]'
  function D8(e) {
    if (!My(e)) return !1
    var t = Ny(e)
    return t == A8 || t == E8 || t == b8 || t == v8
  }
  var C8 = D8,
    x8 = Ri['__core-js_shared__'],
    Oi = x8,
    Ty = (function () {
      var e = /[^.]+$/.exec((Oi && Oi.keys && Oi.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
  function S8(e) {
    return !!Ty && Ty in e
  }
  var F8 = S8,
    w8 = Function.prototype,
    B8 = w8.toString
  function _8(e) {
    if (e != null) {
      try {
        return B8.call(e)
      } catch {}
      try {
        return e + ''
      } catch {}
    }
    return ''
  }
  var T8 = _8,
    O8 = /[\\^$.*+?()[\]{}|]/g,
    P8 = /^\[object .+?Constructor\]$/,
    R8 = Function.prototype,
    I8 = Object.prototype,
    k8 = R8.toString,
    N8 = I8.hasOwnProperty,
    j8 = RegExp(
      '^' +
        k8
          .call(N8)
          .replace(O8, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    )
  function M8(e) {
    if (!My(e) || F8(e)) return !1
    var t = C8(e) ? j8 : P8
    return t.test(T8(e))
  }
  var q8 = M8
  function L8(e, t) {
    return e?.[t]
  }
  var $8 = L8
  function U8(e, t) {
    var r = $8(e, t)
    return q8(r) ? r : void 0
  }
  var qy = U8
  function z8(e, t) {
    return e === t || (e !== e && t !== t)
  }
  var H8 = z8,
    G8 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    W8 = /^\w*$/
  function V8(e, t) {
    if (ki(e)) return !1
    var r = typeof e
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      Ii(e)
      ? !0
      : W8.test(e) || !G8.test(e) || (t != null && e in Object(t))
  }
  var K8 = V8,
    Y8 = qy(Object, 'create'),
    Yr = Y8
  function J8() {
    ;(this.__data__ = Yr ? Yr(null) : {}), (this.size = 0)
  }
  var X8 = J8
  function Q8(e) {
    var t = this.has(e) && delete this.__data__[e]
    return (this.size -= t ? 1 : 0), t
  }
  var Z8 = Q8,
    e6 = '__lodash_hash_undefined__',
    t6 = Object.prototype,
    r6 = t6.hasOwnProperty
  function n6(e) {
    var t = this.__data__
    if (Yr) {
      var r = t[e]
      return r === e6 ? void 0 : r
    }
    return r6.call(t, e) ? t[e] : void 0
  }
  var a6 = n6,
    o6 = Object.prototype,
    i6 = o6.hasOwnProperty
  function u6(e) {
    var t = this.__data__
    return Yr ? t[e] !== void 0 : i6.call(t, e)
  }
  var s6 = u6,
    l6 = '__lodash_hash_undefined__'
  function c6(e, t) {
    var r = this.__data__
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = Yr && t === void 0 ? l6 : t),
      this
    )
  }
  var p6 = c6
  function rr(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  rr.prototype.clear = X8
  rr.prototype.delete = Z8
  rr.prototype.get = a6
  rr.prototype.has = s6
  rr.prototype.set = p6
  var Oy = rr
  function d6() {
    ;(this.__data__ = []), (this.size = 0)
  }
  var f6 = d6
  function h6(e, t) {
    for (var r = e.length; r--; ) if (H8(e[r][0], t)) return r
    return -1
  }
  var ia = h6,
    y6 = Array.prototype,
    g6 = y6.splice
  function m6(e) {
    var t = this.__data__,
      r = ia(t, e)
    if (r < 0) return !1
    var n = t.length - 1
    return r == n ? t.pop() : g6.call(t, r, 1), --this.size, !0
  }
  var b6 = m6
  function A6(e) {
    var t = this.__data__,
      r = ia(t, e)
    return r < 0 ? void 0 : t[r][1]
  }
  var E6 = A6
  function v6(e) {
    return ia(this.__data__, e) > -1
  }
  var D6 = v6
  function C6(e, t) {
    var r = this.__data__,
      n = ia(r, e)
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
  }
  var x6 = C6
  function nr(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  nr.prototype.clear = f6
  nr.prototype.delete = b6
  nr.prototype.get = E6
  nr.prototype.has = D6
  nr.prototype.set = x6
  var S6 = nr,
    F6 = qy(Ri, 'Map'),
    w6 = F6
  function B6() {
    ;(this.size = 0),
      (this.__data__ = {
        hash: new Oy(),
        map: new (w6 || S6)(),
        string: new Oy(),
      })
  }
  var _6 = B6
  function T6(e) {
    var t = typeof e
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null
  }
  var O6 = T6
  function P6(e, t) {
    var r = e.__data__
    return O6(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
  }
  var ua = P6
  function R6(e) {
    var t = ua(this, e).delete(e)
    return (this.size -= t ? 1 : 0), t
  }
  var I6 = R6
  function k6(e) {
    return ua(this, e).get(e)
  }
  var N6 = k6
  function j6(e) {
    return ua(this, e).has(e)
  }
  var M6 = j6
  function q6(e, t) {
    var r = ua(this, e),
      n = r.size
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
  }
  var L6 = q6
  function ar(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ar.prototype.clear = _6
  ar.prototype.delete = I6
  ar.prototype.get = N6
  ar.prototype.has = M6
  ar.prototype.set = L6
  var Ly = ar,
    $6 = 'Expected a function'
  function Ni(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError($6)
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache
      if (o.has(a)) return o.get(a)
      var i = e.apply(this, n)
      return (r.cache = o.set(a, i) || o), i
    }
    return (r.cache = new (Ni.Cache || Ly)()), r
  }
  Ni.Cache = Ly
  var U6 = Ni,
    z6 = 500
  function H6(e) {
    var t = U6(e, function (n) {
        return r.size === z6 && r.clear(), n
      }),
      r = t.cache
    return t
  }
  var G6 = H6,
    W6 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    V6 = /\\(\\)?/g,
    K6 = G6(function (e) {
      var t = []
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(W6, function (r, n, a, o) {
          t.push(a ? o.replace(V6, '$1') : n || r)
        }),
        t
      )
    }),
    Y6 = K6
  function J6(e) {
    return e == null ? '' : g8(e)
  }
  var X6 = J6
  function Q6(e, t) {
    return ki(e) ? e : K8(e, t) ? [e] : Y6(X6(e))
  }
  var Z6 = Q6,
    eP = 1 / 0
  function tP(e) {
    if (typeof e == 'string' || Ii(e)) return e
    var t = e + ''
    return t == '0' && 1 / e == -eP ? '-0' : t
  }
  var rP = tP
  function nP(e, t) {
    t = Z6(t, e)
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[rP(t[r++])]
    return r && r == n ? e : void 0
  }
  var aP = nP
  function oP(e, t, r) {
    var n = e == null ? void 0 : aP(e, t)
    return n === void 0 ? r : n
  }
  var iP = oP,
    ji = GO,
    uP = (e) => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = ''
      if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !a
            ? e[i] === '"' || e[i] === "'" || e[i] === '`'
              ? (t = e[i])
              : e[i] === '/' && e[i + 1] === '*'
              ? (r = !0)
              : e[i] === '/' && e[i + 1] === '/'
              ? (n = !0)
              : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== '\\') ||
                  (e[i] ===
                    `
` &&
                    t !== '`')) &&
                (t = null),
              a &&
                ((e[i] === '/' && e[i - 1] !== '\\') ||
                  e[i] ===
                    `
`) &&
                (a = !1),
              r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[i])
      else o = e
      return o
    },
    sP = (0, $y.default)(1e4)((e) => uP(e).replace(/\n\s*/g, '').trim()),
    lP = function (t, r) {
      let n = r.slice(0, r.indexOf('{')),
        a = r.slice(r.indexOf('{'))
      if (n.includes('=>') || n.includes('function')) return r
      let o = n
      return (o = o.replace(t, 'function')), o + a
    },
    cP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    Uy = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/)
  function zy(e) {
    if (!ji(e)) return e
    let t = e,
      r = !1
    return (
      typeof Event < 'u' && e instanceof Event && ((t = Fy(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a])
        } catch {
          r = !0
        }
        return n
      }, {})),
      r ? t : e
    )
  }
  var pP = function (t) {
      let r, n, a, o
      return function (s, u) {
        try {
          if (s === '')
            return (
              (o = []), (r = new Map([[u, '[]']])), (n = new Map()), (a = []), u
            )
          let d = n.get(this) || this
          for (; a.length && d !== a[0]; ) a.shift(), o.pop()
          if (typeof u == 'boolean') return u
          if (u === void 0) return t.allowUndefined ? '_undefined_' : void 0
          if (u === null) return null
          if (typeof u == 'number')
            return u === -1 / 0
              ? '_-Infinity_'
              : u === 1 / 0
              ? '_Infinity_'
              : Number.isNaN(u)
              ? '_NaN_'
              : u
          if (typeof u == 'bigint') return `_bigint_${u.toString()}`
          if (typeof u == 'string')
            return cP.test(u) ? (t.allowDate ? `_date_${u}` : void 0) : u
          if ((0, UO.default)(u))
            return t.allowRegExp ? `_regexp_${u.flags}|${u.source}` : void 0
          if ((0, zO.default)(u)) {
            if (!t.allowFunction) return
            let { name: b } = u,
              h = u.toString()
            return h.match(
              /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
            )
              ? `_function_${b}|${(() => {}).toString()}`
              : `_function_${b}|${sP(lP(s, h))}`
          }
          if ((0, HO.default)(u)) {
            if (!t.allowSymbol) return
            let b = Symbol.keyFor(u)
            return b !== void 0
              ? `_gsymbol_${b}`
              : `_symbol_${u.toString().slice(7, -1)}`
          }
          if (a.length >= t.maxDepth)
            return Array.isArray(u) ? `[Array(${u.length})]` : '[Object]'
          if (u === this) return `_duplicate_${JSON.stringify(o)}`
          if (
            u.constructor &&
            u.constructor.name &&
            u.constructor.name !== 'Object' &&
            !Array.isArray(u) &&
            !t.allowClass
          )
            return
          let m = r.get(u)
          if (!m) {
            let b = Array.isArray(u) ? u : zy(u)
            if (
              u.constructor &&
              u.constructor.name &&
              u.constructor.name !== 'Object' &&
              !Array.isArray(u) &&
              t.allowClass
            )
              try {
                Object.assign(b, { '_constructor-name_': u.constructor.name })
              } catch {}
            return (
              o.push(s),
              a.unshift(b),
              r.set(u, JSON.stringify(o)),
              u !== b && n.set(u, b),
              b
            )
          }
          return `_duplicate_${m}`
        } catch {
          return
        }
      }
    },
    dP = function reviver(options) {
      let refs = [],
        root
      return function revive(key, value) {
        if (
          (key === '' &&
            ((root = value),
            refs.forEach(({ target: e, container: t, replacement: r }) => {
              let n = Uy(r) ? JSON.parse(r) : r.split('.')
              n.length === 0 ? (t[e] = root) : (t[e] = iP(root, n))
            })),
          key === '_constructor-name_')
        )
          return value
        if (ji(value) && value['_constructor-name_'] && options.allowFunction) {
          let e = value['_constructor-name_']
          if (e !== 'Object') {
            let t = new Function(
              `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`
            )()
            Object.setPrototypeOf(value, new t())
          }
          return delete value['_constructor-name_'], value
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_function_') &&
          options.allowFunction
        ) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '')
          if (!options.lazyEval) return eval(`(${sourceSanitized})`)
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`)
            return f(...args)
          }
          return (
            Object.defineProperty(result, 'toString', {
              value: () => sourceSanitized,
            }),
            Object.defineProperty(result, 'name', { value: name }),
            result
          )
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_regexp_') &&
          options.allowRegExp
        ) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || []
          return new RegExp(t, e)
        }
        return typeof value == 'string' &&
          value.startsWith('_date_') &&
          options.allowDate
          ? new Date(value.replace('_date_', ''))
          : typeof value == 'string' && value.startsWith('_duplicate_')
          ? (refs.push({
              target: key,
              container: this,
              replacement: value.replace(/^_duplicate_/, ''),
            }),
            null)
          : typeof value == 'string' &&
            value.startsWith('_symbol_') &&
            options.allowSymbol
          ? Symbol(value.replace('_symbol_', ''))
          : typeof value == 'string' &&
            value.startsWith('_gsymbol_') &&
            options.allowSymbol
          ? Symbol.for(value.replace('_gsymbol_', ''))
          : typeof value == 'string' && value === '_-Infinity_'
          ? -1 / 0
          : typeof value == 'string' && value === '_Infinity_'
          ? 1 / 0
          : typeof value == 'string' && value === '_NaN_'
          ? NaN
          : typeof value == 'string' &&
            value.startsWith('_bigint_') &&
            typeof BigInt == 'function'
          ? BigInt(value.replace('_bigint_', ''))
          : value
      }
    },
    Hy = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    fP = (e, t = {}) => {
      let r = { ...Hy, ...t }
      return JSON.stringify(zy(e), pP(r), t.space)
    },
    hP = () => {
      let e = new Map()
      return function t(r) {
        ji(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === '_undefined_'
              ? (r[n] = void 0)
              : e.get(a) || (e.set(a, !0), t(a))
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === '_undefined_'
                ? (e.set(n, !0), (r[a] = void 0))
                : e.get(n) || (e.set(n, !0), t(n))
            })
      }
    },
    yP = (e, t = {}) => {
      let r = { ...Hy, ...t },
        n = JSON.parse(e, dP(r))
      return hP()(n), n
    }
  var gP = pe(aa(), 1),
    { document: zte, location: Hte } = ie
  var { FEATURES: nre } = ie
  l()
  c()
  p()
  var Im = pe(qn(), 1)
  l()
  c()
  p()
  var CP = pe(qn(), 1),
    xP = pe(eg(), 1)
  var SP = ((e) => (
    (e.JAVASCRIPT = 'JavaScript'),
    (e.FLOW = 'Flow'),
    (e.TYPESCRIPT = 'TypeScript'),
    (e.UNKNOWN = 'Unknown'),
    e
  ))(SP || {})
  var la = (e) => {
    if (!e) return ''
    if (typeof e == 'string') return e
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`)
  }
  var tg = 'storybook/docs',
    Nne = `${tg}/panel`
  var FP = `${tg}/snippet-rendered`,
    Qr = ((e) => (
      (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
    ))(Qr || {})
  l()
  c()
  p()
  l()
  c()
  p()
  var wP = Object.create,
    rg = Object.defineProperty,
    BP = Object.getOwnPropertyDescriptor,
    ng = Object.getOwnPropertyNames,
    _P = Object.getPrototypeOf,
    TP = Object.prototype.hasOwnProperty,
    Ne = (e, t) =>
      function () {
        return (
          t || (0, e[ng(e)[0]])((t = { exports: {} }).exports, t), t.exports
        )
      },
    OP = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of ng(t))
          !TP.call(e, a) &&
            a !== r &&
            rg(e, a, {
              get: () => t[a],
              enumerable: !(n = BP(t, a)) || n.enumerable,
            })
      return e
    },
    ca = (e, t, r) => (
      (r = e != null ? wP(_P(e)) : {}),
      OP(
        t || !e || !e.__esModule
          ? rg(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    PP = [
      'bubbles',
      'cancelBubble',
      'cancelable',
      'composed',
      'currentTarget',
      'defaultPrevented',
      'eventPhase',
      'isTrusted',
      'returnValue',
      'srcElement',
      'target',
      'timeStamp',
      'type',
    ],
    RP = ['detail']
  function ag(e) {
    let t = PP.filter((r) => e[r] !== void 0).reduce(
      (r, n) => ({ ...r, [n]: e[n] }),
      {}
    )
    return (
      e instanceof CustomEvent &&
        RP.filter((r) => e[r] !== void 0).forEach((r) => {
          t[r] = e[r]
        }),
      t
    )
  }
  var Ag = pe(Ir(), 1),
    cg = Ne({
      'node_modules/has-symbols/shams.js'(e, t) {
        'use strict'
        t.exports = function () {
          if (
            typeof Symbol != 'function' ||
            typeof Object.getOwnPropertySymbols != 'function'
          )
            return !1
          if (typeof Symbol.iterator == 'symbol') return !0
          var n = {},
            a = Symbol('test'),
            o = Object(a)
          if (
            typeof a == 'string' ||
            Object.prototype.toString.call(a) !== '[object Symbol]' ||
            Object.prototype.toString.call(o) !== '[object Symbol]'
          )
            return !1
          var i = 42
          n[a] = i
          for (a in n) return !1
          if (
            (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == 'function' &&
              Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1
          var s = Object.getOwnPropertySymbols(n)
          if (
            s.length !== 1 ||
            s[0] !== a ||
            !Object.prototype.propertyIsEnumerable.call(n, a)
          )
            return !1
          if (typeof Object.getOwnPropertyDescriptor == 'function') {
            var u = Object.getOwnPropertyDescriptor(n, a)
            if (u.value !== i || u.enumerable !== !0) return !1
          }
          return !0
        }
      },
    }),
    pg = Ne({
      'node_modules/has-symbols/index.js'(e, t) {
        'use strict'
        var r = typeof Symbol < 'u' && Symbol,
          n = cg()
        t.exports = function () {
          return typeof r != 'function' ||
            typeof Symbol != 'function' ||
            typeof r('foo') != 'symbol' ||
            typeof Symbol('bar') != 'symbol'
            ? !1
            : n()
        }
      },
    }),
    IP = Ne({
      'node_modules/function-bind/implementation.js'(e, t) {
        'use strict'
        var r = 'Function.prototype.bind called on incompatible ',
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = '[object Function]'
        t.exports = function (s) {
          var u = this
          if (typeof u != 'function' || a.call(u) !== o)
            throw new TypeError(r + u)
          for (
            var d = n.call(arguments, 1),
              m,
              b = function () {
                if (this instanceof m) {
                  var x = u.apply(this, d.concat(n.call(arguments)))
                  return Object(x) === x ? x : this
                } else return u.apply(s, d.concat(n.call(arguments)))
              },
              h = Math.max(0, u.length - d.length),
              y = [],
              E = 0;
            E < h;
            E++
          )
            y.push('$' + E)
          if (
            ((m = Function(
              'binder',
              'return function (' +
                y.join(',') +
                '){ return binder.apply(this,arguments); }'
            )(b)),
            u.prototype)
          ) {
            var A = function () {}
            ;(A.prototype = u.prototype),
              (m.prototype = new A()),
              (A.prototype = null)
          }
          return m
        }
      },
    }),
    Ui = Ne({
      'node_modules/function-bind/index.js'(e, t) {
        'use strict'
        var r = IP()
        t.exports = Function.prototype.bind || r
      },
    }),
    kP = Ne({
      'node_modules/has/src/index.js'(e, t) {
        'use strict'
        var r = Ui()
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
      },
    }),
    dg = Ne({
      'node_modules/get-intrinsic/index.js'(e, t) {
        'use strict'
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          i = function (Q) {
            try {
              return a('"use strict"; return (' + Q + ').constructor;')()
            } catch {}
          },
          s = Object.getOwnPropertyDescriptor
        if (s)
          try {
            s({}, '')
          } catch {
            s = null
          }
        var u = function () {
            throw new o()
          },
          d = s
            ? (function () {
                try {
                  return arguments.callee, u
                } catch {
                  try {
                    return s(arguments, 'callee').get
                  } catch {
                    return u
                  }
                }
              })()
            : u,
          m = pg()(),
          b =
            Object.getPrototypeOf ||
            function (Q) {
              return Q.__proto__
            },
          h = {},
          y = typeof Uint8Array > 'u' ? r : b(Uint8Array),
          E = {
            '%AggregateError%':
              typeof AggregateError > 'u' ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': m ? b([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': h,
            '%AsyncGenerator%': h,
            '%AsyncGeneratorFunction%': h,
            '%AsyncIteratorPrototype%': h,
            '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
            '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
            '%Boolean%': Boolean,
            '%DataView%': typeof DataView > 'u' ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
            '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
            '%FinalizationRegistry%':
              typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
            '%Function%': a,
            '%GeneratorFunction%': h,
            '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
            '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
            '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': m ? b(b([][Symbol.iterator]())) : r,
            '%JSON%': typeof JSON == 'object' ? JSON : r,
            '%Map%': typeof Map > 'u' ? r : Map,
            '%MapIteratorPrototype%':
              typeof Map > 'u' || !m ? r : b(new Map()[Symbol.iterator]()),
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': typeof Promise > 'u' ? r : Promise,
            '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': typeof Set > 'u' ? r : Set,
            '%SetIteratorPrototype%':
              typeof Set > 'u' || !m ? r : b(new Set()[Symbol.iterator]()),
            '%SharedArrayBuffer%':
              typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': m ? b(''[Symbol.iterator]()) : r,
            '%Symbol%': m ? Symbol : r,
            '%SyntaxError%': n,
            '%ThrowTypeError%': d,
            '%TypedArray%': y,
            '%TypeError%': o,
            '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
            '%Uint8ClampedArray%':
              typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
            '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
            '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
            '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
            '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
          },
          A = function Q(W) {
            var _
            if (W === '%AsyncFunction%') _ = i('async function () {}')
            else if (W === '%GeneratorFunction%') _ = i('function* () {}')
            else if (W === '%AsyncGeneratorFunction%')
              _ = i('async function* () {}')
            else if (W === '%AsyncGenerator%') {
              var B = Q('%AsyncGeneratorFunction%')
              B && (_ = B.prototype)
            } else if (W === '%AsyncIteratorPrototype%') {
              var k = Q('%AsyncGenerator%')
              k && (_ = b(k.prototype))
            }
            return (E[W] = _), _
          },
          x = {
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': [
              'AsyncGeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': [
              'GeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          F = Ui(),
          R = kP(),
          j = F.call(Function.call, Array.prototype.concat),
          L = F.call(Function.apply, Array.prototype.splice),
          w = F.call(Function.call, String.prototype.replace),
          M = F.call(Function.call, String.prototype.slice),
          I = F.call(Function.call, RegExp.prototype.exec),
          U =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          J = /\\(\\)?/g,
          z = function (W) {
            var _ = M(W, 0, 1),
              B = M(W, -1)
            if (_ === '%' && B !== '%')
              throw new n('invalid intrinsic syntax, expected closing `%`')
            if (B === '%' && _ !== '%')
              throw new n('invalid intrinsic syntax, expected opening `%`')
            var k = []
            return (
              w(W, U, function (H, X, V, Z) {
                k[k.length] = V ? w(Z, J, '$1') : X || H
              }),
              k
            )
          },
          ue = function (W, _) {
            var B = W,
              k
            if ((R(x, B) && ((k = x[B]), (B = '%' + k[0] + '%')), R(E, B))) {
              var H = E[B]
              if ((H === h && (H = A(B)), typeof H > 'u' && !_))
                throw new o(
                  'intrinsic ' +
                    W +
                    ' exists, but is not available. Please file an issue!'
                )
              return { alias: k, name: B, value: H }
            }
            throw new n('intrinsic ' + W + ' does not exist!')
          }
        t.exports = function (W, _) {
          if (typeof W != 'string' || W.length === 0)
            throw new o('intrinsic name must be a non-empty string')
          if (arguments.length > 1 && typeof _ != 'boolean')
            throw new o('"allowMissing" argument must be a boolean')
          if (I(/^%?[^%]*%?$/, W) === null)
            throw new n(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
            )
          var B = z(W),
            k = B.length > 0 ? B[0] : '',
            H = ue('%' + k + '%', _),
            X = H.name,
            V = H.value,
            Z = !1,
            ae = H.alias
          ae && ((k = ae[0]), L(B, j([0, 1], ae)))
          for (var Ee = 1, be = !0; Ee < B.length; Ee += 1) {
            var Y = B[Ee],
              Se = M(Y, 0, 1),
              T = M(Y, -1)
            if (
              (Se === '"' ||
                Se === "'" ||
                Se === '`' ||
                T === '"' ||
                T === "'" ||
                T === '`') &&
              Se !== T
            )
              throw new n(
                'property names with quotes must have matching quotes'
              )
            if (
              ((Y === 'constructor' || !be) && (Z = !0),
              (k += '.' + Y),
              (X = '%' + k + '%'),
              R(E, X))
            )
              V = E[X]
            else if (V != null) {
              if (!(Y in V)) {
                if (!_)
                  throw new o(
                    'base intrinsic for ' +
                      W +
                      ' exists, but the property is not available.'
                  )
                return
              }
              if (s && Ee + 1 >= B.length) {
                var P = s(V, Y)
                ;(be = !!P),
                  be && 'get' in P && !('originalValue' in P.get)
                    ? (V = P.get)
                    : (V = V[Y])
              } else (be = R(V, Y)), (V = V[Y])
              be && !Z && (E[X] = V)
            }
          }
          return V
        }
      },
    }),
    NP = Ne({
      'node_modules/call-bind/index.js'(e, t) {
        'use strict'
        var r = Ui(),
          n = dg(),
          a = n('%Function.prototype.apply%'),
          o = n('%Function.prototype.call%'),
          i = n('%Reflect.apply%', !0) || r.call(o, a),
          s = n('%Object.getOwnPropertyDescriptor%', !0),
          u = n('%Object.defineProperty%', !0),
          d = n('%Math.max%')
        if (u)
          try {
            u({}, 'a', { value: 1 })
          } catch {
            u = null
          }
        t.exports = function (h) {
          var y = i(r, o, arguments)
          if (s && u) {
            var E = s(y, 'length')
            E.configurable &&
              u(y, 'length', {
                value: 1 + d(0, h.length - (arguments.length - 1)),
              })
          }
          return y
        }
        var m = function () {
          return i(r, a, arguments)
        }
        u ? u(t.exports, 'apply', { value: m }) : (t.exports.apply = m)
      },
    }),
    jP = Ne({
      'node_modules/call-bind/callBound.js'(e, t) {
        'use strict'
        var r = dg(),
          n = NP(),
          a = n(r('String.prototype.indexOf'))
        t.exports = function (i, s) {
          var u = r(i, !!s)
          return typeof u == 'function' && a(i, '.prototype.') > -1 ? n(u) : u
        }
      },
    }),
    MP = Ne({
      'node_modules/has-tostringtag/shams.js'(e, t) {
        'use strict'
        var r = cg()
        t.exports = function () {
          return r() && !!Symbol.toStringTag
        }
      },
    }),
    qP = Ne({
      'node_modules/is-regex/index.js'(e, t) {
        'use strict'
        var r = jP(),
          n = MP()(),
          a,
          o,
          i,
          s
        n &&
          ((a = r('Object.prototype.hasOwnProperty')),
          (o = r('RegExp.prototype.exec')),
          (i = {}),
          (u = function () {
            throw i
          }),
          (s = { toString: u, valueOf: u }),
          typeof Symbol.toPrimitive == 'symbol' && (s[Symbol.toPrimitive] = u))
        var u,
          d = r('Object.prototype.toString'),
          m = Object.getOwnPropertyDescriptor,
          b = '[object RegExp]'
        t.exports = n
          ? function (y) {
              if (!y || typeof y != 'object') return !1
              var E = m(y, 'lastIndex'),
                A = E && a(E, 'value')
              if (!A) return !1
              try {
                o(y, s)
              } catch (x) {
                return x === i
              }
            }
          : function (y) {
              return !y || (typeof y != 'object' && typeof y != 'function')
                ? !1
                : d(y) === b
            }
      },
    }),
    LP = Ne({
      'node_modules/is-function/index.js'(e, t) {
        t.exports = n
        var r = Object.prototype.toString
        function n(a) {
          if (!a) return !1
          var o = r.call(a)
          return (
            o === '[object Function]' ||
            (typeof a == 'function' && o !== '[object RegExp]') ||
            (typeof window < 'u' &&
              (a === window.setTimeout ||
                a === window.alert ||
                a === window.confirm ||
                a === window.prompt))
          )
        }
      },
    }),
    $P = Ne({
      'node_modules/is-symbol/index.js'(e, t) {
        'use strict'
        var r = Object.prototype.toString,
          n = pg()()
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (i = function (u) {
              return typeof u.valueOf() != 'symbol' ? !1 : o.test(a.call(u))
            }),
            (t.exports = function (u) {
              if (typeof u == 'symbol') return !0
              if (r.call(u) !== '[object Symbol]') return !1
              try {
                return i(u)
              } catch {
                return !1
              }
            }))
          : (t.exports = function (u) {
              return !1
            })
        var a, o, i
      },
    }),
    UP = ca(qP()),
    zP = ca(LP()),
    HP = ca($P())
  function GP(e) {
    return e != null && typeof e == 'object' && Array.isArray(e) === !1
  }
  var WP =
      typeof window == 'object' && window && window.Object === Object && window,
    VP = WP,
    KP = typeof self == 'object' && self && self.Object === Object && self,
    YP = VP || KP || Function('return this')(),
    zi = YP,
    JP = zi.Symbol,
    or = JP,
    fg = Object.prototype,
    XP = fg.hasOwnProperty,
    QP = fg.toString,
    Zr = or ? or.toStringTag : void 0
  function ZP(e) {
    var t = XP.call(e, Zr),
      r = e[Zr]
    try {
      e[Zr] = void 0
      var n = !0
    } catch {}
    var a = QP.call(e)
    return n && (t ? (e[Zr] = r) : delete e[Zr]), a
  }
  var e4 = ZP,
    t4 = Object.prototype,
    r4 = t4.toString
  function n4(e) {
    return r4.call(e)
  }
  var a4 = n4,
    o4 = '[object Null]',
    i4 = '[object Undefined]',
    og = or ? or.toStringTag : void 0
  function u4(e) {
    return e == null
      ? e === void 0
        ? i4
        : o4
      : og && og in Object(e)
      ? e4(e)
      : a4(e)
  }
  var hg = u4
  function s4(e) {
    return e != null && typeof e == 'object'
  }
  var l4 = s4,
    c4 = '[object Symbol]'
  function p4(e) {
    return typeof e == 'symbol' || (l4(e) && hg(e) == c4)
  }
  var Hi = p4
  function d4(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e)
    return a
  }
  var f4 = d4,
    h4 = Array.isArray,
    Gi = h4,
    y4 = 1 / 0,
    ig = or ? or.prototype : void 0,
    ug = ig ? ig.toString : void 0
  function yg(e) {
    if (typeof e == 'string') return e
    if (Gi(e)) return f4(e, yg) + ''
    if (Hi(e)) return ug ? ug.call(e) : ''
    var t = e + ''
    return t == '0' && 1 / e == -y4 ? '-0' : t
  }
  var g4 = yg
  function m4(e) {
    var t = typeof e
    return e != null && (t == 'object' || t == 'function')
  }
  var gg = m4,
    b4 = '[object AsyncFunction]',
    A4 = '[object Function]',
    E4 = '[object GeneratorFunction]',
    v4 = '[object Proxy]'
  function D4(e) {
    if (!gg(e)) return !1
    var t = hg(e)
    return t == A4 || t == E4 || t == b4 || t == v4
  }
  var C4 = D4,
    x4 = zi['__core-js_shared__'],
    $i = x4,
    sg = (function () {
      var e = /[^.]+$/.exec(($i && $i.keys && $i.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
  function S4(e) {
    return !!sg && sg in e
  }
  var F4 = S4,
    w4 = Function.prototype,
    B4 = w4.toString
  function _4(e) {
    if (e != null) {
      try {
        return B4.call(e)
      } catch {}
      try {
        return e + ''
      } catch {}
    }
    return ''
  }
  var T4 = _4,
    O4 = /[\\^$.*+?()[\]{}|]/g,
    P4 = /^\[object .+?Constructor\]$/,
    R4 = Function.prototype,
    I4 = Object.prototype,
    k4 = R4.toString,
    N4 = I4.hasOwnProperty,
    j4 = RegExp(
      '^' +
        k4
          .call(N4)
          .replace(O4, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    )
  function M4(e) {
    if (!gg(e) || F4(e)) return !1
    var t = C4(e) ? j4 : P4
    return t.test(T4(e))
  }
  var q4 = M4
  function L4(e, t) {
    return e?.[t]
  }
  var $4 = L4
  function U4(e, t) {
    var r = $4(e, t)
    return q4(r) ? r : void 0
  }
  var mg = U4
  function z4(e, t) {
    return e === t || (e !== e && t !== t)
  }
  var H4 = z4,
    G4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    W4 = /^\w*$/
  function V4(e, t) {
    if (Gi(e)) return !1
    var r = typeof e
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      Hi(e)
      ? !0
      : W4.test(e) || !G4.test(e) || (t != null && e in Object(t))
  }
  var K4 = V4,
    Y4 = mg(Object, 'create'),
    en = Y4
  function J4() {
    ;(this.__data__ = en ? en(null) : {}), (this.size = 0)
  }
  var X4 = J4
  function Q4(e) {
    var t = this.has(e) && delete this.__data__[e]
    return (this.size -= t ? 1 : 0), t
  }
  var Z4 = Q4,
    e9 = '__lodash_hash_undefined__',
    t9 = Object.prototype,
    r9 = t9.hasOwnProperty
  function n9(e) {
    var t = this.__data__
    if (en) {
      var r = t[e]
      return r === e9 ? void 0 : r
    }
    return r9.call(t, e) ? t[e] : void 0
  }
  var a9 = n9,
    o9 = Object.prototype,
    i9 = o9.hasOwnProperty
  function u9(e) {
    var t = this.__data__
    return en ? t[e] !== void 0 : i9.call(t, e)
  }
  var s9 = u9,
    l9 = '__lodash_hash_undefined__'
  function c9(e, t) {
    var r = this.__data__
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = en && t === void 0 ? l9 : t),
      this
    )
  }
  var p9 = c9
  function ir(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ir.prototype.clear = X4
  ir.prototype.delete = Z4
  ir.prototype.get = a9
  ir.prototype.has = s9
  ir.prototype.set = p9
  var lg = ir
  function d9() {
    ;(this.__data__ = []), (this.size = 0)
  }
  var f9 = d9
  function h9(e, t) {
    for (var r = e.length; r--; ) if (H4(e[r][0], t)) return r
    return -1
  }
  var pa = h9,
    y9 = Array.prototype,
    g9 = y9.splice
  function m9(e) {
    var t = this.__data__,
      r = pa(t, e)
    if (r < 0) return !1
    var n = t.length - 1
    return r == n ? t.pop() : g9.call(t, r, 1), --this.size, !0
  }
  var b9 = m9
  function A9(e) {
    var t = this.__data__,
      r = pa(t, e)
    return r < 0 ? void 0 : t[r][1]
  }
  var E9 = A9
  function v9(e) {
    return pa(this.__data__, e) > -1
  }
  var D9 = v9
  function C9(e, t) {
    var r = this.__data__,
      n = pa(r, e)
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
  }
  var x9 = C9
  function ur(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ur.prototype.clear = f9
  ur.prototype.delete = b9
  ur.prototype.get = E9
  ur.prototype.has = D9
  ur.prototype.set = x9
  var S9 = ur,
    F9 = mg(zi, 'Map'),
    w9 = F9
  function B9() {
    ;(this.size = 0),
      (this.__data__ = {
        hash: new lg(),
        map: new (w9 || S9)(),
        string: new lg(),
      })
  }
  var _9 = B9
  function T9(e) {
    var t = typeof e
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null
  }
  var O9 = T9
  function P9(e, t) {
    var r = e.__data__
    return O9(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
  }
  var da = P9
  function R9(e) {
    var t = da(this, e).delete(e)
    return (this.size -= t ? 1 : 0), t
  }
  var I9 = R9
  function k9(e) {
    return da(this, e).get(e)
  }
  var N9 = k9
  function j9(e) {
    return da(this, e).has(e)
  }
  var M9 = j9
  function q9(e, t) {
    var r = da(this, e),
      n = r.size
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
  }
  var L9 = q9
  function sr(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  sr.prototype.clear = _9
  sr.prototype.delete = I9
  sr.prototype.get = N9
  sr.prototype.has = M9
  sr.prototype.set = L9
  var bg = sr,
    $9 = 'Expected a function'
  function Wi(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError($9)
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache
      if (o.has(a)) return o.get(a)
      var i = e.apply(this, n)
      return (r.cache = o.set(a, i) || o), i
    }
    return (r.cache = new (Wi.Cache || bg)()), r
  }
  Wi.Cache = bg
  var U9 = Wi,
    z9 = 500
  function H9(e) {
    var t = U9(e, function (n) {
        return r.size === z9 && r.clear(), n
      }),
      r = t.cache
    return t
  }
  var G9 = H9,
    W9 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    V9 = /\\(\\)?/g,
    K9 = G9(function (e) {
      var t = []
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(W9, function (r, n, a, o) {
          t.push(a ? o.replace(V9, '$1') : n || r)
        }),
        t
      )
    }),
    Y9 = K9
  function J9(e) {
    return e == null ? '' : g4(e)
  }
  var X9 = J9
  function Q9(e, t) {
    return Gi(e) ? e : K4(e, t) ? [e] : Y9(X9(e))
  }
  var Z9 = Q9,
    eR = 1 / 0
  function tR(e) {
    if (typeof e == 'string' || Hi(e)) return e
    var t = e + ''
    return t == '0' && 1 / e == -eR ? '-0' : t
  }
  var rR = tR
  function nR(e, t) {
    t = Z9(t, e)
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[rR(t[r++])]
    return r && r == n ? e : void 0
  }
  var aR = nR
  function oR(e, t, r) {
    var n = e == null ? void 0 : aR(e, t)
    return n === void 0 ? r : n
  }
  var iR = oR,
    Vi = GP,
    uR = (e) => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = ''
      if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !a
            ? e[i] === '"' || e[i] === "'" || e[i] === '`'
              ? (t = e[i])
              : e[i] === '/' && e[i + 1] === '*'
              ? (r = !0)
              : e[i] === '/' && e[i + 1] === '/'
              ? (n = !0)
              : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== '\\') ||
                  (e[i] ===
                    `
` &&
                    t !== '`')) &&
                (t = null),
              a &&
                ((e[i] === '/' && e[i - 1] !== '\\') ||
                  e[i] ===
                    `
`) &&
                (a = !1),
              r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[i])
      else o = e
      return o
    },
    sR = (0, Ag.default)(1e4)((e) => uR(e).replace(/\n\s*/g, '').trim()),
    lR = function (t, r) {
      let n = r.slice(0, r.indexOf('{')),
        a = r.slice(r.indexOf('{'))
      if (n.includes('=>') || n.includes('function')) return r
      let o = n
      return (o = o.replace(t, 'function')), o + a
    },
    cR = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    pR = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/)
  function Eg(e) {
    if (!Vi(e)) return e
    let t = e,
      r = !1
    return (
      typeof Event < 'u' && e instanceof Event && ((t = ag(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a])
        } catch {
          r = !0
        }
        return n
      }, {})),
      r ? t : e
    )
  }
  var dR = function (t) {
      let r, n, a, o
      return function (s, u) {
        try {
          if (s === '')
            return (
              (o = []), (r = new Map([[u, '[]']])), (n = new Map()), (a = []), u
            )
          let d = n.get(this) || this
          for (; a.length && d !== a[0]; ) a.shift(), o.pop()
          if (typeof u == 'boolean') return u
          if (u === void 0) return t.allowUndefined ? '_undefined_' : void 0
          if (u === null) return null
          if (typeof u == 'number')
            return u === -1 / 0
              ? '_-Infinity_'
              : u === 1 / 0
              ? '_Infinity_'
              : Number.isNaN(u)
              ? '_NaN_'
              : u
          if (typeof u == 'bigint') return `_bigint_${u.toString()}`
          if (typeof u == 'string')
            return cR.test(u) ? (t.allowDate ? `_date_${u}` : void 0) : u
          if ((0, UP.default)(u))
            return t.allowRegExp ? `_regexp_${u.flags}|${u.source}` : void 0
          if ((0, zP.default)(u)) {
            if (!t.allowFunction) return
            let { name: b } = u,
              h = u.toString()
            return h.match(
              /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
            )
              ? `_function_${b}|${(() => {}).toString()}`
              : `_function_${b}|${sR(lR(s, h))}`
          }
          if ((0, HP.default)(u)) {
            if (!t.allowSymbol) return
            let b = Symbol.keyFor(u)
            return b !== void 0
              ? `_gsymbol_${b}`
              : `_symbol_${u.toString().slice(7, -1)}`
          }
          if (a.length >= t.maxDepth)
            return Array.isArray(u) ? `[Array(${u.length})]` : '[Object]'
          if (u === this) return `_duplicate_${JSON.stringify(o)}`
          if (
            u.constructor &&
            u.constructor.name &&
            u.constructor.name !== 'Object' &&
            !Array.isArray(u) &&
            !t.allowClass
          )
            return
          let m = r.get(u)
          if (!m) {
            let b = Array.isArray(u) ? u : Eg(u)
            if (
              u.constructor &&
              u.constructor.name &&
              u.constructor.name !== 'Object' &&
              !Array.isArray(u) &&
              t.allowClass
            )
              try {
                Object.assign(b, { '_constructor-name_': u.constructor.name })
              } catch {}
            return (
              o.push(s),
              a.unshift(b),
              r.set(u, JSON.stringify(o)),
              u !== b && n.set(u, b),
              b
            )
          }
          return `_duplicate_${m}`
        } catch {
          return
        }
      }
    },
    fR = function reviver(options) {
      let refs = [],
        root
      return function revive(key, value) {
        if (
          (key === '' &&
            ((root = value),
            refs.forEach(({ target: e, container: t, replacement: r }) => {
              let n = pR(r) ? JSON.parse(r) : r.split('.')
              n.length === 0 ? (t[e] = root) : (t[e] = iR(root, n))
            })),
          key === '_constructor-name_')
        )
          return value
        if (Vi(value) && value['_constructor-name_'] && options.allowFunction) {
          let e = value['_constructor-name_']
          if (e !== 'Object') {
            let t = new Function(
              `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`
            )()
            Object.setPrototypeOf(value, new t())
          }
          return delete value['_constructor-name_'], value
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_function_') &&
          options.allowFunction
        ) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '')
          if (!options.lazyEval) return eval(`(${sourceSanitized})`)
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`)
            return f(...args)
          }
          return (
            Object.defineProperty(result, 'toString', {
              value: () => sourceSanitized,
            }),
            Object.defineProperty(result, 'name', { value: name }),
            result
          )
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_regexp_') &&
          options.allowRegExp
        ) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || []
          return new RegExp(t, e)
        }
        return typeof value == 'string' &&
          value.startsWith('_date_') &&
          options.allowDate
          ? new Date(value.replace('_date_', ''))
          : typeof value == 'string' && value.startsWith('_duplicate_')
          ? (refs.push({
              target: key,
              container: this,
              replacement: value.replace(/^_duplicate_/, ''),
            }),
            null)
          : typeof value == 'string' &&
            value.startsWith('_symbol_') &&
            options.allowSymbol
          ? Symbol(value.replace('_symbol_', ''))
          : typeof value == 'string' &&
            value.startsWith('_gsymbol_') &&
            options.allowSymbol
          ? Symbol.for(value.replace('_gsymbol_', ''))
          : typeof value == 'string' && value === '_-Infinity_'
          ? -1 / 0
          : typeof value == 'string' && value === '_Infinity_'
          ? 1 / 0
          : typeof value == 'string' && value === '_NaN_'
          ? NaN
          : typeof value == 'string' &&
            value.startsWith('_bigint_') &&
            typeof BigInt == 'function'
          ? BigInt(value.replace('_bigint_', ''))
          : value
      }
    },
    vg = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    Dg = (e, t = {}) => {
      let r = { ...vg, ...t }
      return JSON.stringify(Eg(e), dR(r), t.space)
    },
    hR = () => {
      let e = new Map()
      return function t(r) {
        Vi(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === '_undefined_'
              ? (r[n] = void 0)
              : e.get(a) || (e.set(a, !0), t(a))
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === '_undefined_'
                ? (e.set(n, !0), (r[a] = void 0))
                : e.get(n) || (e.set(n, !0), t(n))
            })
      }
    },
    Wne = (e, t = {}) => {
      let r = { ...vg, ...t },
        n = JSON.parse(e, fR(r))
      return hR()(n), n
    }
  var BI = q.div(Tt, ({ theme: e }) => ({
      backgroundColor:
        e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: '25px 0 40px',
      color: de(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    lu = (e) =>
      g.createElement(BI, {
        ...e,
        className: 'docblock-emptyblock sb-unstyled',
      }),
    _I = q(un)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: '19px',
      margin: '25px 0 40px',
      borderRadius: e.appBorderRadius,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      'pre.prismjs': { padding: 20, background: 'inherit' },
    })),
    TI = q.div(({ theme: e }) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      margin: '25px 0 40px',
      padding: '20px 20px 20px 22px',
    })),
    Aa = q.div(({ theme: e }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: '60%',
      [`&:first-child${Lu}`]: { margin: 0 },
    })),
    OI = () =>
      g.createElement(
        TI,
        null,
        g.createElement(Aa, null),
        g.createElement(Aa, { style: { width: '80%' } }),
        g.createElement(Aa, { style: { width: '30%' } }),
        g.createElement(Aa, { style: { width: '80%' } })
      ),
    mu = ({
      isLoading: e,
      error: t,
      language: r,
      code: n,
      dark: a,
      format: o,
      ...i
    }) => {
      if (e) return g.createElement(OI, null)
      if (t) return g.createElement(lu, null, t)
      let s = g.createElement(
        _I,
        {
          bordered: !0,
          copyable: !0,
          format: o,
          language: r,
          className: 'docblock-source sb-unstyled',
          ...i,
        },
        n
      )
      if (typeof a > 'u') return s
      let u = a ? Ya.dark : Ya.light
      return g.createElement(Mu, { theme: qu(u) }, s)
    }
  mu.defaultProps = { format: !1 }
  var Ae = (e) =>
      `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
    bu = 600,
    doe = q.h1(Tt, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: '32px',
      [`@media (min-width: ${bu}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: '36px',
        marginBottom: '16px',
      },
    })),
    foe = q.h2(Tt, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: '20px',
      borderBottom: 'none',
      marginBottom: 15,
      [`@media (min-width: ${bu}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      },
      color: de(0.25, e.color.defaultText),
    })),
    hoe = q.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitOverflowScrolling: 'touch',
        },
        r = {
          margin: '20px 0 8px',
          padding: 0,
          cursor: 'text',
          position: 'relative',
          color: e.color.defaultText,
          '&:first-of-type': { marginTop: 0, paddingTop: 0 },
          '&:hover a.anchor': { textDecoration: 'none' },
          '& code': { fontSize: 'inherit' },
        },
        n = {
          lineHeight: 1,
          margin: '0 2px',
          padding: '3px 5px',
          whiteSpace: 'nowrap',
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === 'light'
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === 'light'
              ? de(0.1, e.color.defaultText)
              : de(0.3, e.color.defaultText),
          backgroundColor:
            e.base === 'light' ? e.color.lighter : e.color.border,
        }
      return {
        maxWidth: 1e3,
        width: '100%',
        [Ae('a')]: {
          ...t,
          fontSize: 'inherit',
          lineHeight: '24px',
          color: e.color.secondary,
          textDecoration: 'none',
          '&.absent': { color: '#cc0000' },
          '&.anchor': {
            display: 'block',
            paddingLeft: 30,
            marginLeft: -30,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [Ae('blockquote')]: {
          ...t,
          margin: '16px 0',
          borderLeft: `4px solid ${e.color.medium}`,
          padding: '0 15px',
          color: e.color.dark,
          '& > :first-of-type': { marginTop: 0 },
          '& > :last-child': { marginBottom: 0 },
        },
        [Ae('div')]: t,
        [Ae('dl')]: {
          ...t,
          margin: '16px 0',
          padding: 0,
          '& dt': {
            fontSize: '14px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            padding: 0,
            margin: '16px 0 4px',
          },
          '& dt:first-of-type': { padding: 0 },
          '& dt > :first-of-type': { marginTop: 0 },
          '& dt > :last-child': { marginBottom: 0 },
          '& dd': { margin: '0 0 16px', padding: '0 15px' },
          '& dd > :first-of-type': { marginTop: 0 },
          '& dd > :last-child': { marginBottom: 0 },
        },
        [Ae('h1')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [Ae('h2')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [Ae('h3')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [Ae('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [Ae('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [Ae('h6')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [Ae('hr')]: {
          border: '0 none',
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [Ae('img')]: { maxWidth: '100%' },
        [Ae('li')]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: '24px',
          '& + li': { marginTop: '.25em' },
          '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
          '& code': n,
        },
        [Ae('ol')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
        },
        [Ae('p')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          color: e.color.defaultText,
          '& code': n,
        },
        [Ae('pre')]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '18px',
          padding: '11px 1rem',
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          borderRadius: 3,
          margin: '1rem 0',
          '&:not(.prismjs)': {
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          '& pre, &.prismjs': {
            padding: 15,
            margin: 0,
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            fontSize: '13px',
            lineHeight: '19px',
            code: { color: 'inherit', fontSize: 'inherit' },
          },
          '& code': { whiteSpace: 'pre' },
          '& code, & tt': { border: 'none' },
        },
        [Ae('span')]: {
          ...t,
          '&.frame': {
            display: 'block',
            overflow: 'hidden',
            '& > span': {
              border: `1px solid ${e.color.medium}`,
              display: 'block',
              float: 'left',
              overflow: 'hidden',
              margin: '13px 0 0',
              padding: 7,
              width: 'auto',
            },
            '& span img': { display: 'block', float: 'left' },
            '& span span': {
              clear: 'both',
              color: e.color.darkest,
              display: 'block',
              padding: '5px 0 0',
            },
          },
          '&.align-center': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'center',
            },
            '& span img': { margin: '0 auto', textAlign: 'center' },
          },
          '&.align-right': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px 0 0',
              textAlign: 'right',
            },
            '& span img': { margin: 0, textAlign: 'right' },
          },
          '&.float-left': {
            display: 'block',
            marginRight: 13,
            overflow: 'hidden',
            float: 'left',
            '& span': { margin: '13px 0 0' },
          },
          '&.float-right': {
            display: 'block',
            marginLeft: 13,
            overflow: 'hidden',
            float: 'right',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'right',
            },
          },
        },
        [Ae('table')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          padding: 0,
          borderCollapse: 'collapse',
          '& tr': {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          '& tr:nth-of-type(2n)': {
            backgroundColor:
              e.base === 'dark' ? e.color.darker : e.color.lighter,
          },
          '& tr th': {
            fontWeight: 'bold',
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr td': {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
          '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
        },
        [Ae('ul')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
          listStyle: 'disc',
        },
      }
    }),
    yoe = q.div(({ theme: e }) => ({
      background: e.background.content,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      [`@media (min-width: ${bu}px)`]: {},
    }))
  var Da = (e) => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      border: `1px solid ${e.appBorderColor}`,
    }),
    PI = ({ zoom: e, resetZoom: t }) =>
      g.createElement(
        g.Fragment,
        null,
        g.createElement(
          yt,
          {
            key: 'zoomin',
            onClick: (r) => {
              r.preventDefault(), e(0.8)
            },
            title: 'Zoom in',
          },
          g.createElement(Oe, { icon: 'zoom' })
        ),
        g.createElement(
          yt,
          {
            key: 'zoomout',
            onClick: (r) => {
              r.preventDefault(), e(1.25)
            },
            title: 'Zoom out',
          },
          g.createElement(Oe, { icon: 'zoomout' })
        ),
        g.createElement(
          yt,
          {
            key: 'zoomreset',
            onClick: (r) => {
              r.preventDefault(), t()
            },
            title: 'Reset zoom',
          },
          g.createElement(Oe, { icon: 'zoomreset' })
        )
      ),
    RI = q(ka)({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      transition: 'transform .2s linear',
    }),
    II = ({
      isLoading: e,
      storyId: t,
      baseUrl: r,
      zoom: n,
      resetZoom: a,
      ...o
    }) =>
      g.createElement(
        RI,
        { ...o },
        g.createElement(
          _u,
          { key: 'left' },
          e
            ? [1, 2, 3].map((i) => g.createElement(Ma, { key: i }))
            : g.createElement(PI, { zoom: n, resetZoom: a })
        )
      ),
    km = hr({ scale: 1 }),
    { window: kI } = ie,
    NI = class extends Qe {
      constructor() {
        super(...arguments), (this.iframe = null)
      }
      componentDidMount() {
        let { id: e } = this.props
        this.iframe = kI.document.getElementById(e)
      }
      shouldComponentUpdate(e) {
        let { scale: t } = e
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: 'top left',
            }),
          !1
        )
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e)
      }
      render() {
        let {
          id: e,
          title: t,
          src: r,
          allowFullScreen: n,
          scale: a,
          ...o
        } = this.props
        return g.createElement('iframe', {
          id: e,
          title: t,
          src: r,
          ...(n ? { allow: 'fullscreen' } : {}),
          loading: 'lazy',
          ...o,
        })
      }
    },
    { PREVIEW_URL: jI } = ie,
    MI = jI || 'iframe.html',
    cu = ({ story: e, primary: t }) => `story--${e.id}${t ? '--primary' : ''}`,
    qI = (e) => {
      let t = Fe(),
        [r, n] = ne(!0),
        [a, o] = ne(),
        {
          story: i,
          height: s,
          autoplay: u,
          forceInitialArgs: d,
          renderStoryToElement: m,
        } = e
      ge(() => {
        if (!(i && t.current)) return () => {}
        let h = t.current,
          y = m(
            i,
            h,
            {
              showMain: () => {},
              showError: ({ title: E, description: A }) =>
                o(new Error(`${E} - ${A}`)),
              showException: (E) => o(E),
            },
            { autoplay: u, forceInitialArgs: d }
          )
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => y())
          }
        )
      }, [u, m, i])
      let b = '<span></span>'
      return a
        ? g.createElement('pre', null, g.createElement(Ia, { error: a }))
        : g.createElement(
            g.Fragment,
            null,
            s
              ? g.createElement(
                  'style',
                  null,
                  `#${cu(
                    e
                  )} { min-height: ${s}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && g.createElement(Au, null),
            g.createElement('div', {
              ref: t,
              id: `${cu(e)}-inner`,
              'data-name': i.name,
              dangerouslySetInnerHTML: { __html: b },
            })
          )
    },
    LI = ({ story: e, height: t = '500px' }) =>
      g.createElement(
        'div',
        { style: { width: '100%', height: t } },
        g.createElement(km.Consumer, null, ({ scale: r }) =>
          g.createElement(NI, {
            key: 'iframe',
            id: `iframe--${e.id}`,
            title: e.name,
            src: Wa(MI, e.id, { viewMode: 'story' }),
            allowFullScreen: !0,
            scale: r,
            style: { width: '100%', height: '100%', border: '0 none' },
          })
        )
      ),
    $I = (e) => {
      let { inline: t } = e
      return g.createElement(
        'div',
        { id: cu(e), className: 'sb-story sb-unstyled' },
        t ? g.createElement(qI, { ...e }) : g.createElement(LI, { ...e })
      )
    },
    Au = () => g.createElement(qa, null),
    UI = q.div(
      ({ isColumn: e, columns: t, layout: r }) => ({
        display: e || !t ? 'block' : 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        overflow: 'auto',
        flexDirection: e ? 'column' : 'row',
        '& .innerZoomElementWrapper > *': e
          ? {
              width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'block',
            }
          : {
              maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'inline-block',
            },
      }),
      ({ layout: e = 'padded' }) =>
        e === 'centered' || e === 'padded'
          ? {
              padding: '30px 20px',
              margin: -10,
              '& .innerZoomElementWrapper > *': {
                width: 'auto',
                border: '10px solid transparent!important',
              },
            }
          : {},
      ({ layout: e = 'padded' }) =>
        e === 'centered'
          ? {
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }
          : {},
      ({ columns: e }) =>
        e && e > 1
          ? {
              '.innerZoomElementWrapper > *': {
                minWidth: `calc(100% / ${e} - 20px)`,
              },
            }
          : {}
    ),
    gm = q(mu)(({ theme: e }) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: 'none',
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : Ue(0.05, e.background.content),
      color: e.color.lightest,
      button: {
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : Ue(0.05, e.background.content),
      },
    })),
    zI = q.div(
      ({ theme: e, withSource: t, isExpanded: r }) => ({
        position: 'relative',
        overflow: 'hidden',
        margin: '25px 0 40px',
        ...Da(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
        'h3 + &': { marginTop: '16px' },
      }),
      ({ withToolbar: e }) => e && { paddingTop: 40 }
    ),
    HI = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: 'No code available',
              className: 'docblock-code-toggle docblock-code-toggle--disabled',
              disabled: !0,
              onClick: () => r(!1),
            },
          }
        case t:
          return {
            source: g.createElement(gm, { ...e, dark: !0 }),
            actionItem: {
              title: 'Hide code',
              className: 'docblock-code-toggle docblock-code-toggle--expanded',
              onClick: () => r(!1),
            },
          }
        default:
          return {
            source: g.createElement(gm, { ...e, dark: !0 }),
            actionItem: {
              title: 'Show code',
              className: 'docblock-code-toggle',
              onClick: () => r(!0),
            },
          }
      }
    }
  function GI(e) {
    if (on.count(e) === 1) {
      let t = e
      if (t.props) return t.props.id
    }
    return null
  }
  var WI = q(II)({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 40,
    }),
    VI = q.div({ overflow: 'hidden', position: 'relative' }),
    pu = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: o = !1,
      isExpanded: i = !1,
      additionalActions: s,
      className: u,
      layout: d = 'padded',
      ...m
    }) => {
      let [b, h] = ne(i),
        { source: y, actionItem: E } = HI(a, b, h),
        [A, x] = ne(1),
        F = [u].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
        R = a ? [E] : [],
        [j, L] = ne(s ? [...s] : []),
        w = [...R, ...j],
        { window: M } = ie,
        I = ye(async (J) => {
          let { createCopyToClipboardFunction: z } =
            await Promise.resolve().then(() => (gr(), ju))
          z()
        }, []),
        U = (J) => {
          let z = M.getSelection()
          ;(z && z.type === 'Range') ||
            (J.preventDefault(),
            j.filter((ue) => ue.title === 'Copied').length === 0 &&
              I(y.props.code).then(() => {
                L([...j, { title: 'Copied', onClick: () => {} }]),
                  M.setTimeout(
                    () => L(j.filter((ue) => ue.title !== 'Copied')),
                    1500
                  )
              }))
        }
      return g.createElement(
        zI,
        { withSource: a, withToolbar: o, ...m, className: F.join(' ') },
        o &&
          g.createElement(WI, {
            isLoading: e,
            border: !0,
            zoom: (J) => x(A * J),
            resetZoom: () => x(1),
            storyId: GI(n),
            baseUrl: './iframe.html',
          }),
        g.createElement(
          km.Provider,
          { value: { scale: A } },
          g.createElement(
            VI,
            { className: 'docs-story', onCopyCapture: a && U },
            g.createElement(
              UI,
              { isColumn: t || !Array.isArray(n), columns: r, layout: d },
              g.createElement(
                Ha.Element,
                { scale: A },
                Array.isArray(n)
                  ? n.map((J, z) => g.createElement('div', { key: z }, J))
                  : g.createElement('div', null, n)
              )
            ),
            g.createElement(Oa, { actionItems: w })
          )
        ),
        a && b && y
      )
    },
    KI = q(pu)(() => ({
      '.docs-story': { paddingTop: 32, paddingBottom: 40 },
    })),
    YI = () =>
      g.createElement(
        KI,
        { isLoading: !0, withToolbar: !0 },
        g.createElement(Au, null)
      ),
    JI = q.table(({ theme: e }) => ({
      '&&': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        border: 'none',
        tr: { border: 'none !important', background: 'none' },
        'td, th': { padding: 0, border: 'none', width: 'auto!important' },
        marginTop: 0,
        marginBottom: 0,
        'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
        'th:last-of-type, td:last-of-type': { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: 'none', border: 'none' },
        code: _t({ theme: e }),
        div: { span: { fontWeight: 'bold' } },
        '& code': {
          margin: 0,
          display: 'inline-block',
          fontSize: e.typography.size.s1,
        },
      },
    })),
    XI = ({ tags: e }) => {
      let t = (e.params || []).filter((o) => o.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null
      return !r && !a && !n
        ? null
        : g.createElement(
            g.Fragment,
            null,
            g.createElement(
              JI,
              null,
              g.createElement(
                'tbody',
                null,
                n &&
                  g.createElement(
                    'tr',
                    { key: 'deprecated' },
                    g.createElement(
                      'td',
                      { colSpan: 2 },
                      g.createElement('strong', null, 'Deprecated'),
                      ': ',
                      e.deprecated
                    )
                  ),
                r &&
                  t.map((o) =>
                    g.createElement(
                      'tr',
                      { key: o.name },
                      g.createElement(
                        'td',
                        null,
                        g.createElement('code', null, o.name)
                      ),
                      g.createElement('td', null, o.description)
                    )
                  ),
                a &&
                  g.createElement(
                    'tr',
                    { key: 'returns' },
                    g.createElement(
                      'td',
                      null,
                      g.createElement('code', null, 'Returns')
                    ),
                    g.createElement('td', null, e.returns.description)
                  )
              )
            )
          )
    },
    du = 8,
    mm = q.div(({ isExpanded: e }) => ({
      display: 'flex',
      flexDirection: e ? 'column' : 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginBottom: '-4px',
      minWidth: 100,
    })),
    QI = q.span(_t, ({ theme: e, simple: t = !1 }) => ({
      flex: '0 0 auto',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      maxWidth: '100%',
      margin: 0,
      marginRight: '4px',
      marginBottom: '4px',
      paddingTop: '2px',
      paddingBottom: '2px',
      lineHeight: '13px',
      ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 }),
    })),
    ZI = q.button(({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: '4px',
      background: 'none',
      border: 'none',
    })),
    e7 = q.div(_t, ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
    })),
    t7 = q.div(({ theme: e, width: t }) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: 'content-box',
      '& code': { padding: '0 !important' },
    })),
    r7 = q(Oe)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
    n7 = () => g.createElement('span', null, '-'),
    Nm = ({ text: e, simple: t }) => g.createElement(QI, { simple: t }, e),
    a7 = (0, Om.default)(1e3)((e) => {
      let t = e.split(/\r?\n/)
      return `${Math.max(...t.map((r) => r.length))}ch`
    }),
    o7 = (e) => {
      if (!e) return [e]
      let t = e.split('|').map((r) => r.trim())
      return (0, Pm.default)(t)
    },
    bm = (e, t = !0) => {
      let r = e
      return (
        t || (r = e.slice(0, du)),
        r.map((n) => g.createElement(Nm, { key: n, text: n === '' ? '""' : n }))
      )
    },
    i7 = ({ value: e, initialExpandedArgs: t }) => {
      let { summary: r, detail: n } = e,
        [a, o] = ne(!1),
        [i, s] = ne(t || !1)
      if (r == null) return null
      let u = typeof r.toString == 'function' ? r.toString() : r
      if (n == null) {
        if (/[(){}[\]<>]/.test(u)) return g.createElement(Nm, { text: u })
        let d = o7(u),
          m = d.length
        return m > du
          ? g.createElement(
              mm,
              { isExpanded: i },
              bm(d, i),
              g.createElement(
                ZI,
                { onClick: () => s(!i) },
                i ? 'Show less...' : `Show ${m - du} more...`
              )
            )
          : g.createElement(mm, null, bm(d))
      }
      return g.createElement(
        za,
        {
          closeOnOutsideClick: !0,
          placement: 'bottom',
          visible: a,
          onVisibleChange: (d) => {
            o(d)
          },
          tooltip: g.createElement(
            t7,
            { width: a7(n) },
            g.createElement(un, { language: 'jsx', format: !1 }, n)
          ),
        },
        g.createElement(
          e7,
          { className: 'sbdocs-expandable' },
          g.createElement('span', null, u),
          g.createElement(r7, { icon: a ? 'arrowup' : 'arrowdown' })
        )
      )
    },
    ou = ({ value: e, initialExpandedArgs: t }) =>
      e == null
        ? g.createElement(n7, null)
        : g.createElement(i7, { value: e, initialExpandedArgs: t }),
    u7 = q.label(({ theme: e }) => ({
      lineHeight: '18px',
      alignItems: 'center',
      marginBottom: 8,
      display: 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      background: e.boolean.background,
      borderRadius: '3em',
      padding: 1,
      input: {
        appearance: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '3em',
        '&:focus': {
          outline: 'none',
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: 'center',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: '1',
        cursor: 'pointer',
        display: 'inline-block',
        padding: '7px 15px',
        transition: 'all 100ms ease-out',
        userSelect: 'none',
        borderRadius: '3em',
        color: de(0.5, e.color.defaultText),
        background: 'transparent',
        '&:hover': {
          boxShadow: `${vr(0.3, e.appBorderColor)} 0 0 0 1px inset`,
        },
        '&:active': {
          boxShadow: `${vr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: vr(1, e.appBorderColor),
        },
        '&:first-of-type': { paddingRight: 8 },
        '&:last-of-type': { paddingLeft: 8 },
      },
      'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
        {
          background: e.boolean.selectedBackground,
          boxShadow:
            e.base === 'light'
              ? `${vr(0.1, e.appBorderColor)} 0 0 2px`
              : `${e.appBorderColor} 0 0 0 1px`,
          color: e.color.defaultText,
          padding: '7px 15px',
        },
    })),
    s7 = (e) => e === 'true',
    l7 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
      let o = ye(() => r(!1), [r])
      if (t === void 0)
        return g.createElement(
          Te.Button,
          { id: mr(e), onClick: o },
          'Set boolean'
        )
      let i = Pe(e),
        s = typeof t == 'string' ? s7(t) : t
      return g.createElement(
        u7,
        { htmlFor: i, title: s ? 'Change to false' : 'Change to true' },
        g.createElement('input', {
          id: i,
          type: 'checkbox',
          onChange: (u) => r(u.target.checked),
          checked: s,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        g.createElement('span', null, 'False'),
        g.createElement('span', null, 'True')
      )
    },
    c7 = (e) => {
      let [t, r, n] = e.split('-'),
        a = new Date()
      return (
        a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
      )
    },
    p7 = (e) => {
      let [t, r] = e.split(':'),
        n = new Date()
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n
    },
    d7 = (e) => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2)
      return `${r}-${n}-${a}`
    },
    f7 = (e) => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2)
      return `${r}:${n}`
    },
    h7 = q.div(({ theme: e }) => ({
      flex: 1,
      display: 'flex',
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        '&::-webkit-calendar-picker-indicator': {
          opacity: 0.5,
          height: 12,
          filter: e.base === 'light' ? void 0 : 'invert(1)',
        },
      },
      'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
      'input:last-of-type': { flexGrow: 3 },
    })),
    y7 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
      let [o, i] = ne(!0),
        s = Fe(),
        u = Fe()
      ge(() => {
        o !== !1 &&
          (s && s.current && (s.current.value = d7(t)),
          u && u.current && (u.current.value = f7(t)))
      }, [t])
      let d = (h) => {
          let y = c7(h.target.value),
            E = new Date(t)
          E.setFullYear(y.getFullYear(), y.getMonth(), y.getDate())
          let A = E.getTime()
          A && r(A), i(!!A)
        },
        m = (h) => {
          let y = p7(h.target.value),
            E = new Date(t)
          E.setHours(y.getHours()), E.setMinutes(y.getMinutes())
          let A = E.getTime()
          A && r(A), i(!!A)
        },
        b = Pe(e)
      return g.createElement(
        h7,
        null,
        g.createElement(Te.Input, {
          type: 'date',
          max: '9999-12-31',
          ref: s,
          id: `${b}-date`,
          name: `${b}-date`,
          onChange: d,
          onFocus: n,
          onBlur: a,
        }),
        g.createElement(Te.Input, {
          type: 'time',
          id: `${b}-time`,
          name: `${b}-time`,
          ref: u,
          onChange: m,
          onFocus: n,
          onBlur: a,
        }),
        o ? null : g.createElement('div', null, 'invalid')
      )
    },
    g7 = q.label({ display: 'flex' }),
    m7 = (e) => {
      let t = parseFloat(e)
      return Number.isNaN(t) ? void 0 : t
    }
  var b7 = ({
      name: e,
      value: t,
      onChange: r,
      min: n,
      max: a,
      step: o,
      onBlur: i,
      onFocus: s,
    }) => {
      let [u, d] = ne(typeof t == 'number' ? t : ''),
        [m, b] = ne(!1),
        [h, y] = ne(null),
        E = ye(
          (F) => {
            d(F.target.value)
            let R = parseFloat(F.target.value)
            Number.isNaN(R)
              ? y(new Error(`'${F.target.value}' is not a number`))
              : (r(R), y(null))
          },
          [r, y]
        ),
        A = ye(() => {
          d('0'), r(0), b(!0)
        }, [b]),
        x = Fe(null)
      return (
        ge(() => {
          m && x.current && x.current.select()
        }, [m]),
        ge(() => {
          u !== (typeof t == 'number' ? t : '') && d(t)
        }, [t]),
        !m && t === void 0
          ? g.createElement(Te.Button, { id: mr(e), onClick: A }, 'Set number')
          : g.createElement(
              g7,
              null,
              g.createElement(Te.Input, {
                ref: x,
                id: Pe(e),
                type: 'number',
                onChange: E,
                size: 'flex',
                placeholder: 'Edit number...',
                value: u,
                valid: h ? 'error' : null,
                autoFocus: m,
                name: e,
                min: n,
                max: a,
                step: o,
                onFocus: s,
                onBlur: i,
              })
            )
      )
    },
    jm = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e)
      return r ? r[0] : void 0
    },
    fu = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter((r) => e.includes(r[1]))
            .map((r) => r[0])
        : [],
    Mm = (e, t) => e && t && e.map((r) => t[r]),
    A7 = q.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } }
    ),
    E7 = q.span({}),
    v7 = q.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Am = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          Le.warn(`Checkbox with no options: ${e}`),
          g.createElement(g.Fragment, null, '-')
        )
      let o = fu(r, t),
        [i, s] = ne(o),
        u = (m) => {
          let b = m.target.value,
            h = [...i]
          h.includes(b) ? h.splice(h.indexOf(b), 1) : h.push(b),
            n(Mm(h, t)),
            s(h)
        }
      ge(() => {
        s(fu(r, t))
      }, [r])
      let d = Pe(e)
      return g.createElement(
        A7,
        { isInline: a },
        Object.keys(t).map((m, b) => {
          let h = `${d}-${b}`
          return g.createElement(
            v7,
            { key: h, htmlFor: h },
            g.createElement('input', {
              type: 'checkbox',
              id: h,
              name: h,
              value: m,
              onChange: u,
              checked: i?.includes(m),
            }),
            g.createElement(E7, null, m)
          )
        })
      )
    },
    D7 = q.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } }
    ),
    C7 = q.span({}),
    x7 = q.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Em = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          Le.warn(`Radio with no options: ${e}`),
          g.createElement(g.Fragment, null, '-')
        )
      let o = jm(r, t),
        i = Pe(e)
      return g.createElement(
        D7,
        { isInline: a },
        Object.keys(t).map((s, u) => {
          let d = `${i}-${u}`
          return g.createElement(
            x7,
            { key: d, htmlFor: d },
            g.createElement('input', {
              type: 'radio',
              id: d,
              name: d,
              value: s,
              onChange: (m) => n(t[m.currentTarget.value]),
              checked: s === o,
            }),
            g.createElement(C7, null, s)
          )
        })
      )
    },
    S7 = {
      appearance: 'none',
      border: '0 none',
      boxSizing: 'inherit',
      display: ' block',
      margin: ' 0',
      background: 'transparent',
      padding: 0,
      fontSize: 'inherit',
      position: 'relative',
    },
    qm = q.select(({ theme: e }) => ({
      ...S7,
      boxSizing: 'border-box',
      position: 'relative',
      padding: '6px 10px',
      width: '100%',
      color: e.input.color || 'inherit',
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      '&:focus': {
        boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
        outline: 'none',
      },
      '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
      '::placeholder': { color: e.textMutedColor },
      '&[multiple]': {
        overflow: 'auto',
        padding: 0,
        option: {
          display: 'block',
          padding: '6px 10px',
          marginLeft: 1,
          marginRight: 1,
        },
      },
    })),
    Lm = q.span(({ theme: e }) => ({
      display: 'inline-block',
      lineHeight: 'normal',
      overflow: 'hidden',
      position: 'relative',
      verticalAlign: 'top',
      width: '100%',
      svg: {
        position: 'absolute',
        zIndex: 1,
        pointerEvents: 'none',
        height: '12px',
        marginTop: '-6px',
        right: '12px',
        top: '50%',
        fill: e.textMutedColor,
        path: { fill: e.textMutedColor },
      },
    })),
    vm = 'Choose option...',
    F7 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (s) => {
          n(r[s.currentTarget.value])
        },
        o = jm(t, r) || vm,
        i = Pe(e)
      return g.createElement(
        Lm,
        null,
        g.createElement(Oe, { icon: 'arrowdown' }),
        g.createElement(
          qm,
          { id: i, value: o, onChange: a },
          g.createElement('option', { key: 'no-selection', disabled: !0 }, vm),
          Object.keys(r).map((s) => g.createElement('option', { key: s }, s))
        )
      )
    },
    w7 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (s) => {
          let u = Array.from(s.currentTarget.options)
            .filter((d) => d.selected)
            .map((d) => d.value)
          n(Mm(u, r))
        },
        o = fu(t, r),
        i = Pe(e)
      return g.createElement(
        Lm,
        null,
        g.createElement(
          qm,
          { id: i, multiple: !0, value: o, onChange: a },
          Object.keys(r).map((s) => g.createElement('option', { key: s }, s))
        )
      )
    },
    Dm = (e) => {
      let { name: t, options: r } = e
      return r
        ? e.isMulti
          ? g.createElement(w7, { ...e })
          : g.createElement(F7, { ...e })
        : (Le.warn(`Select with no options: ${t}`),
          g.createElement(g.Fragment, null, '-'))
    },
    B7 = (e, t) =>
      Array.isArray(e)
        ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
        : e,
    _7 = {
      check: Am,
      'inline-check': Am,
      radio: Em,
      'inline-radio': Em,
      select: Dm,
      'multi-select': Dm,
    },
    dr = (e) => {
      let { type: t = 'select', labels: r, argType: n } = e,
        a = {
          ...e,
          options: n ? B7(n.options, r) : {},
          isInline: t.includes('inline'),
          isMulti: t.includes('multi'),
        },
        o = _7[t]
      if (o) return g.createElement(o, { ...a })
      throw new Error(`Unknown options type: ${t}`)
    },
    Eu = 'value',
    T7 = 'key',
    O7 = 'Error',
    P7 = 'Object',
    R7 = 'Array',
    I7 = 'String',
    k7 = 'Number',
    N7 = 'Boolean',
    j7 = 'Date',
    M7 = 'Null',
    q7 = 'Undefined',
    L7 = 'Function',
    $7 = 'Symbol',
    $m = 'ADD_DELTA_TYPE',
    Um = 'REMOVE_DELTA_TYPE',
    zm = 'UPDATE_DELTA_TYPE'
  function ht(e) {
    return e !== null &&
      typeof e == 'object' &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] == 'function'
      ? 'Iterable'
      : Object.prototype.toString.call(e).slice(8, -1)
  }
  function Hm(e, t) {
    let r = ht(e),
      n = ht(t)
    return (r === 'Function' || n === 'Function') && n !== r
  }
  var vu = class extends Qe {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this))
    }
    componentDidMount() {
      let { inputRefKey: e, inputRefValue: t } = this.state,
        { onlyValue: r } = this.props
      e && typeof e.focus == 'function' && e.focus(),
        r && t && typeof t.focus == 'function' && t.focus(),
        document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.onSubmit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.props.handleCancel()))
    }
    onSubmit() {
      let {
          handleAdd: e,
          onlyValue: t,
          onSubmitValueParser: r,
          keyPath: n,
          deep: a,
        } = this.props,
        { inputRefKey: o, inputRefValue: i } = this.state,
        s = {}
      if (!t) {
        if (!o.value) return
        s.key = o.value
      }
      ;(s.newValue = r(!1, n, a, s.key, i.value)), e(s)
    }
    refInputKey(e) {
      this.state.inputRefKey = e
    }
    refInputValue(e) {
      this.state.inputRefValue = e
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: o,
          deep: i,
        } = this.props,
        s = he(r, { onClick: this.onSubmit }),
        u = he(n, { onClick: e }),
        d = a(Eu, o, i),
        m = he(d, { placeholder: 'Value', ref: this.refInputValue }),
        b = null
      if (!t) {
        let h = a(T7, o, i)
        b = he(h, { placeholder: 'Key', ref: this.refInputKey })
      }
      return g.createElement(
        'span',
        { className: 'rejt-add-value-node' },
        b,
        m,
        u,
        s
      )
    }
  }
  vu.defaultProps = {
    onlyValue: !1,
    addButtonElement: g.createElement('button', null, '+'),
    cancelButtonElement: g.createElement('button', null, 'c'),
  }
  var Gm = class extends Qe {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state
      ;(r[e] = t), this.setState({ data: r })
      let { onUpdate: a } = this.props,
        o = n.length
      a(n[o - 1], r)
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 })
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }))
    }
    handleRemoveItem(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e]
        t(e, a, o, i)
          .then(() => {
            let s = { keyPath: a, deep: o, key: e, oldValue: i, type: Um }
            n.splice(e, 1), this.setState({ data: n })
            let { onUpdate: u, onDeltaUpdate: d } = this.props
            u(a[a.length - 1], n), d(s)
          })
          .catch(r.error)
      }
    }
    handleAddValueAdd({ newValue: e }) {
      let { data: t, keyPath: r, nextDeep: n } = this.state,
        { beforeAddAction: a, logger: o } = this.props
      a(t.length, r, n, e)
        .then(() => {
          let i = [...t, e]
          this.setState({ data: i }), this.handleAddValueCancel()
          let { onUpdate: s, onDeltaUpdate: u } = this.props
          s(r[r.length - 1], i),
            u({ type: $m, keyPath: r, deep: n, key: i.length - 1, newValue: e })
        })
        .catch(o.error)
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 })
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: s } = this.state,
          u = o[e]
        a(e, i, s, u, t)
          .then(() => {
            ;(o[e] = t), this.setState({ data: o })
            let { onUpdate: d, onDeltaUpdate: m } = this.props
            d(i[i.length - 1], o),
              m({
                type: zm,
                keyPath: i,
                deep: s,
                key: e,
                newValue: t,
                oldValue: u,
              }),
              r(void 0)
          })
          .catch(n)
      })
    }
    renderCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          getStyle: i,
          dataType: s,
          minusMenuElement: u,
        } = this.props,
        { minus: d, collapsed: m } = i(e, t, r, n, s),
        b = o(e, t, r, n, s),
        h = he(u, { onClick: a, className: 'rejt-minus-menu', style: d })
      return g.createElement(
        'span',
        { className: 'rejt-collapsed' },
        g.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: m,
            onClick: this.handleCollapseMode,
          },
          '[...] ',
          t.length,
          ' ',
          t.length === 1 ? 'item' : 'items'
        ),
        !b && h
      )
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          addFormVisible: a,
          nextDeep: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: s,
          onDeltaUpdate: u,
          readOnly: d,
          getStyle: m,
          dataType: b,
          addButtonElement: h,
          cancelButtonElement: y,
          editButtonElement: E,
          inputElementGenerator: A,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: R,
          beforeRemoveAction: j,
          beforeAddAction: L,
          beforeUpdateAction: w,
          logger: M,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: U,
          plus: J,
          delimiter: z,
          ul: ue,
          addForm: Q,
        } = m(e, t, r, n, b),
        W = d(e, t, r, n, b),
        _ = he(R, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: J,
        }),
        B = he(F, { onClick: s, className: 'rejt-minus-menu', style: U }),
        k = !0,
        H = '[',
        X = ']'
      return g.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: z },
          H
        ),
        !a && _,
        g.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: ue },
          t.map((V, Z) =>
            g.createElement(Ca, {
              key: Z,
              name: `${Z}`,
              data: V,
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveItem(Z),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: u,
              readOnly: d,
              getStyle: m,
              addButtonElement: h,
              cancelButtonElement: y,
              editButtonElement: E,
              inputElementGenerator: A,
              textareaElementGenerator: x,
              minusMenuElement: F,
              plusMenuElement: R,
              beforeRemoveAction: j,
              beforeAddAction: L,
              beforeUpdateAction: w,
              logger: M,
              onSubmitValueParser: I,
            })
          )
        ),
        !W &&
          a &&
          g.createElement(
            'div',
            { className: 'rejt-add-form', style: Q },
            g.createElement(vu, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: k,
              addButtonElement: h,
              cancelButtonElement: y,
              inputElementGenerator: A,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: z },
          X
        ),
        !W && B
      )
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { dataType: o, getStyle: i } = this.props,
        s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        u = i(e, r, n, a, o)
      return g.createElement(
        'div',
        { className: 'rejt-array-node' },
        g.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          g.createElement(
            'span',
            { className: 'rejt-name', style: u.name },
            e,
            ' :',
            ' '
          )
        ),
        s
      )
    }
  }
  Gm.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: g.createElement('span', null, ' - '),
    plusMenuElement: g.createElement('span', null, ' + '),
  }
  var Wm = class extends Qe {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: s } = this.props,
        u = i(r, n, a, o, s)
      e && !u && typeof t.focus == 'function' && t.focus()
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()))
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: s } = this.state
      if (!o) return
      let u = n(!0, a, s, i, o.value)
      e({ value: u, key: i })
        .then(() => {
          Hm(t, u) || this.handleCancelEdit()
        })
        .catch(r.error)
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 })
    }
    refInput(e) {
      this.state.inputRef = e
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 })
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: s,
          dataType: u,
          getStyle: d,
          editButtonElement: m,
          cancelButtonElement: b,
          textareaElementGenerator: h,
          minusMenuElement: y,
          keyPath: E,
        } = this.props,
        A = d(e, i, n, a, u),
        x = null,
        F = null,
        R = s(e, i, n, a, u)
      if (r && !R) {
        let j = h(Eu, E, a, e, i, u),
          L = he(m, { onClick: this.handleEdit }),
          w = he(b, { onClick: this.handleCancelEdit }),
          M = he(j, { ref: this.refInput, defaultValue: i })
        ;(x = g.createElement(
          'span',
          { className: 'rejt-edit-form', style: A.editForm },
          M,
          ' ',
          w,
          L
        )),
          (F = null)
      } else {
        x = g.createElement(
          'span',
          {
            className: 'rejt-value',
            style: A.value,
            onClick: R ? null : this.handleEditMode,
          },
          t
        )
        let j = he(y, {
          onClick: o,
          className: 'rejt-minus-menu',
          style: A.minus,
        })
        F = R ? null : j
      }
      return g.createElement(
        'li',
        { className: 'rejt-function-value-node', style: A.li },
        g.createElement(
          'span',
          { className: 'rejt-name', style: A.name },
          e,
          ' :',
          ' '
        ),
        x,
        F
      )
    }
  }
  Wm.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: g.createElement('button', null, 'e'),
    cancelButtonElement: g.createElement('button', null, 'c'),
    minusMenuElement: g.createElement('span', null, ' - '),
  }
  var Ca = class extends Qe {
    constructor(e) {
      super(e),
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: e.keyPath,
          deep: e.deep,
        })
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null
    }
    render() {
      let { data: e, name: t, keyPath: r, deep: n } = this.state,
        {
          isCollapsed: a,
          handleRemove: o,
          handleUpdateValue: i,
          onUpdate: s,
          onDeltaUpdate: u,
          readOnly: d,
          getStyle: m,
          addButtonElement: b,
          cancelButtonElement: h,
          editButtonElement: y,
          inputElementGenerator: E,
          textareaElementGenerator: A,
          minusMenuElement: x,
          plusMenuElement: F,
          beforeRemoveAction: R,
          beforeAddAction: j,
          beforeUpdateAction: L,
          logger: w,
          onSubmitValueParser: M,
        } = this.props,
        I = () => !0,
        U = ht(e)
      switch (U) {
        case O7:
          return g.createElement(hu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: s,
            onDeltaUpdate: u,
            readOnly: I,
            dataType: U,
            getStyle: m,
            addButtonElement: b,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            textareaElementGenerator: A,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: R,
            beforeAddAction: j,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: M,
          })
        case P7:
          return g.createElement(hu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: s,
            onDeltaUpdate: u,
            readOnly: d,
            dataType: U,
            getStyle: m,
            addButtonElement: b,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            textareaElementGenerator: A,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: R,
            beforeAddAction: j,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: M,
          })
        case R7:
          return g.createElement(Gm, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: s,
            onDeltaUpdate: u,
            readOnly: d,
            dataType: U,
            getStyle: m,
            addButtonElement: b,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            textareaElementGenerator: A,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: R,
            beforeAddAction: j,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: M,
          })
        case I7:
          return g.createElement(ft, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        case k7:
          return g.createElement(ft, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        case N7:
          return g.createElement(ft, {
            name: t,
            value: e ? 'true' : 'false',
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        case j7:
          return g.createElement(ft, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: I,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        case M7:
          return g.createElement(ft, {
            name: t,
            value: 'null',
            originalValue: 'null',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        case q7:
          return g.createElement(ft, {
            name: t,
            value: 'undefined',
            originalValue: 'undefined',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        case L7:
          return g.createElement(Wm, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            textareaElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        case $7:
          return g.createElement(ft, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: I,
            dataType: U,
            getStyle: m,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          })
        default:
          return null
      }
    }
  }
  Ca.defaultProps = { keyPath: [], deep: 0 }
  var hu = class extends Qe {
    constructor(e) {
      super(e)
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name]
      ;(this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state
      ;(r[e] = t), this.setState({ data: r })
      let { onUpdate: a } = this.props,
        o = n.length
      a(n[o - 1], r)
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 })
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 })
    }
    handleAddValueAdd({ key: e, newValue: t }) {
      let { data: r, keyPath: n, nextDeep: a } = this.state,
        { beforeAddAction: o, logger: i } = this.props
      o(e, n, a, t)
        .then(() => {
          ;(r[e] = t), this.setState({ data: r }), this.handleAddValueCancel()
          let { onUpdate: s, onDeltaUpdate: u } = this.props
          s(n[n.length - 1], r),
            u({ type: $m, keyPath: n, deep: a, key: e, newValue: t })
        })
        .catch(i.error)
    }
    handleRemoveValue(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e]
        t(e, a, o, i)
          .then(() => {
            let s = { keyPath: a, deep: o, key: e, oldValue: i, type: Um }
            delete n[e], this.setState({ data: n })
            let { onUpdate: u, onDeltaUpdate: d } = this.props
            u(a[a.length - 1], n), d(s)
          })
          .catch(r.error)
      }
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }))
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: s } = this.state,
          u = o[e]
        a(e, i, s, u, t)
          .then(() => {
            ;(o[e] = t), this.setState({ data: o })
            let { onUpdate: d, onDeltaUpdate: m } = this.props
            d(i[i.length - 1], o),
              m({
                type: zm,
                keyPath: i,
                deep: s,
                key: e,
                newValue: t,
                oldValue: u,
              }),
              r()
          })
          .catch(n)
      })
    }
    renderCollapsed() {
      let { name: e, keyPath: t, deep: r, data: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          dataType: i,
          getStyle: s,
          minusMenuElement: u,
        } = this.props,
        { minus: d, collapsed: m } = s(e, n, t, r, i),
        b = Object.getOwnPropertyNames(n),
        h = o(e, n, t, r, i),
        y = he(u, { onClick: a, className: 'rejt-minus-menu', style: d })
      return g.createElement(
        'span',
        { className: 'rejt-collapsed' },
        g.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: m,
            onClick: this.handleCollapseMode,
          },
          '{...}',
          ' ',
          b.length,
          ' ',
          b.length === 1 ? 'key' : 'keys'
        ),
        !h && y
      )
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          nextDeep: a,
          addFormVisible: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: s,
          onDeltaUpdate: u,
          readOnly: d,
          getStyle: m,
          dataType: b,
          addButtonElement: h,
          cancelButtonElement: y,
          editButtonElement: E,
          inputElementGenerator: A,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: R,
          beforeRemoveAction: j,
          beforeAddAction: L,
          beforeUpdateAction: w,
          logger: M,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: U,
          plus: J,
          addForm: z,
          ul: ue,
          delimiter: Q,
        } = m(e, t, r, n, b),
        W = Object.getOwnPropertyNames(t),
        _ = d(e, t, r, n, b),
        B = he(R, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: J,
        }),
        k = he(F, { onClick: s, className: 'rejt-minus-menu', style: U }),
        H = W.map((Z) =>
          g.createElement(Ca, {
            key: Z,
            name: Z,
            data: t[Z],
            keyPath: r,
            deep: a,
            isCollapsed: i,
            handleRemove: this.handleRemoveValue(Z),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: u,
            readOnly: d,
            getStyle: m,
            addButtonElement: h,
            cancelButtonElement: y,
            editButtonElement: E,
            inputElementGenerator: A,
            textareaElementGenerator: x,
            minusMenuElement: F,
            plusMenuElement: R,
            beforeRemoveAction: j,
            beforeAddAction: L,
            beforeUpdateAction: w,
            logger: M,
            onSubmitValueParser: I,
          })
        ),
        X = '{',
        V = '}'
      return g.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: Q },
          X
        ),
        !_ && B,
        g.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: ue },
          H
        ),
        !_ &&
          o &&
          g.createElement(
            'div',
            { className: 'rejt-add-form', style: z },
            g.createElement(vu, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: h,
              cancelButtonElement: y,
              inputElementGenerator: A,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: Q },
          V
        ),
        !_ && k
      )
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { getStyle: o, dataType: i } = this.props,
        s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        u = o(e, r, n, a, i)
      return g.createElement(
        'div',
        { className: 'rejt-object-node' },
        g.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          g.createElement(
            'span',
            { className: 'rejt-name', style: u.name },
            e,
            ' :',
            ' '
          )
        ),
        s
      )
    }
  }
  hu.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: g.createElement('span', null, ' - '),
    plusMenuElement: g.createElement('span', null, ' + '),
  }
  var ft = class extends Qe {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: s } = this.props,
        u = i(r, n, a, o, s)
      e && !u && typeof t.focus == 'function' && t.focus()
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()))
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: s } = this.state
      if (!o) return
      let u = n(!0, a, s, i, o.value)
      e({ value: u, key: i })
        .then(() => {
          Hm(t, u) || this.handleCancelEdit()
        })
        .catch(r.error)
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 })
    }
    refInput(e) {
      this.state.inputRef = e
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 })
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: s,
          dataType: u,
          getStyle: d,
          editButtonElement: m,
          cancelButtonElement: b,
          inputElementGenerator: h,
          minusMenuElement: y,
          keyPath: E,
        } = this.props,
        A = d(e, i, n, a, u),
        x = s(e, i, n, a, u),
        F = r && !x,
        R = h(Eu, E, a, e, i, u),
        j = he(m, { onClick: this.handleEdit }),
        L = he(b, { onClick: this.handleCancelEdit }),
        w = he(R, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
        M = he(y, { onClick: o, className: 'rejt-minus-menu', style: A.minus })
      return g.createElement(
        'li',
        { className: 'rejt-value-node', style: A.li },
        g.createElement(
          'span',
          { className: 'rejt-name', style: A.name },
          e,
          ' : '
        ),
        F
          ? g.createElement(
              'span',
              { className: 'rejt-edit-form', style: A.editForm },
              w,
              ' ',
              L,
              j
            )
          : g.createElement(
              'span',
              {
                className: 'rejt-value',
                style: A.value,
                onClick: x ? null : this.handleEditMode,
              },
              String(t)
            ),
        !x && !F && M
      )
    }
  }
  ft.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: g.createElement('button', null, 'e'),
    cancelButtonElement: g.createElement('button', null, 'c'),
    minusMenuElement: g.createElement('span', null, ' - '),
  }
  var U7 = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    z7 = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    H7 = {
      minus: { color: 'red' },
      editForm: {},
      value: { color: '#7bba3d' },
      li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
      name: { color: '#2287CD' },
    }
  function G7(e) {
    let t = e
    if (t.indexOf('function') === 0) return (0, eval)(`(${t})`)
    try {
      t = JSON.parse(e)
    } catch {}
    return t
  }
  var Vm = class extends Qe {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? { data: e.data, rootName: e.rootName }
        : null
    }
    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t)
    }
    removeRoot() {
      this.onUpdate(null, null)
    }
    render() {
      let { data: e, rootName: t } = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: o,
          addButtonElement: i,
          cancelButtonElement: s,
          editButtonElement: u,
          inputElement: d,
          textareaElement: m,
          minusMenuElement: b,
          plusMenuElement: h,
          beforeRemoveAction: y,
          beforeAddAction: E,
          beforeUpdateAction: A,
          logger: x,
          onSubmitValueParser: F,
          fallback: R = null,
        } = this.props,
        j = ht(e),
        L = a
      ht(a) === 'Boolean' && (L = () => a)
      let w = d
      d && ht(d) !== 'Function' && (w = () => d)
      let M = m
      return (
        m && ht(m) !== 'Function' && (M = () => m),
        j === 'Object' || j === 'Array'
          ? g.createElement(
              'div',
              { className: 'rejt-tree' },
              g.createElement(Ca, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: L,
                getStyle: o,
                addButtonElement: i,
                cancelButtonElement: s,
                editButtonElement: u,
                inputElementGenerator: w,
                textareaElementGenerator: M,
                minusMenuElement: b,
                plusMenuElement: h,
                handleRemove: this.removeRoot,
                beforeRemoveAction: y,
                beforeAddAction: E,
                beforeUpdateAction: A,
                logger: x,
                onSubmitValueParser: F,
              })
            )
          : R
      )
    }
  }
  Vm.defaultProps = {
    rootName: 'root',
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case 'Object':
        case 'Error':
          return U7
        case 'Array':
          return z7
        default:
          return H7
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => G7(a),
    inputElement: () => g.createElement('input', null),
    textareaElement: () => g.createElement('textarea', null),
    fallback: null,
  }
  var { window: W7 } = ie,
    V7 = q.div(({ theme: e }) => ({
      position: 'relative',
      display: 'flex',
      '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
      '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
        { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
      '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
        { '& > svg': { opacity: 1 } },
      '.rejt-edit-form button': { display: 'none' },
      '.rejt-add-form': { marginLeft: 10 },
      '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
      '.rejt-name': { lineHeight: '22px' },
      '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
      '.rejt-plus-menu': { marginLeft: 5 },
      '.rejt-object-node > span > *': { position: 'relative', zIndex: 2 },
      '.rejt-object-node, .rejt-array-node': { position: 'relative' },
      '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
        {
          content: '""',
          position: 'absolute',
          top: 0,
          display: 'block',
          width: '100%',
          marginLeft: '-1rem',
          padding: '0 4px 0 1rem',
          height: 22,
        },
      '.rejt-collapsed::before, .rejt-not-collapsed::before': {
        zIndex: 1,
        background: 'transparent',
        borderRadius: 4,
        transition: 'background 0.2s',
        pointerEvents: 'none',
        opacity: 0.1,
      },
      '.rejt-object-node:hover, .rejt-array-node:hover': {
        '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
          background: e.color.secondary,
        },
      },
      '.rejt-collapsed::after, .rejt-not-collapsed::after': {
        content: '""',
        position: 'absolute',
        display: 'inline-block',
        pointerEvents: 'none',
        width: 0,
        height: 0,
      },
      '.rejt-collapsed::after': {
        left: -8,
        top: 8,
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderLeft: '3px solid rgba(153,153,153,0.6)',
      },
      '.rejt-not-collapsed::after': {
        left: -10,
        top: 10,
        borderTop: '3px solid rgba(153,153,153,0.6)',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
      },
      '.rejt-value': {
        display: 'inline-block',
        border: '1px solid transparent',
        borderRadius: 4,
        margin: '1px 0',
        padding: '0 4px',
        cursor: 'text',
        color: e.color.defaultText,
      },
      '.rejt-value-node:hover > .rejt-value': {
        background: e.color.lighter,
        borderColor: e.appBorderColor,
      },
    })),
    iu = q.button(({ theme: e, primary: t }) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : 'transparent',
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? 'bold' : 'normal',
      cursor: 'pointer',
      order: t ? 'initial' : 9,
    })),
    Cm = q(Oe)(({ theme: e, icon: t, disabled: r }) => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? 'not-allowed' : 'pointer',
      color: e.textMutedColor,
      '&:hover': r
        ? {}
        : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
      'svg + &': { marginLeft: 0 },
    })),
    xm = q.input(({ theme: e, placeholder: t }) => ({
      outline: 0,
      margin: t ? 1 : '1px 0',
      padding: '3px 4px',
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: '14px',
      width: t === 'Key' ? 80 : 120,
      '&:focus': { border: `1px solid ${e.color.secondary}` },
    })),
    K7 = q(yt)(({ theme: e }) => ({
      position: 'absolute',
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: '0 3px',
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: '9px',
      fontWeight: 'bold',
      textDecoration: 'none',
      span: { marginLeft: 3, marginTop: 1 },
    })),
    Y7 = q(Te.Textarea)(({ theme: e }) => ({
      flex: 1,
      padding: '7px 6px',
      fontFamily: e.typography.fonts.mono,
      fontSize: '12px',
      lineHeight: '18px',
      '&::placeholder': {
        fontFamily: e.typography.fonts.base,
        fontSize: '13px',
      },
      '&:placeholder-shown': { padding: '7px 10px' },
    })),
    J7 = {
      bubbles: !0,
      cancelable: !0,
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    },
    X7 = (e) => {
      e.currentTarget.dispatchEvent(new W7.KeyboardEvent('keydown', J7))
    },
    Q7 = (e) => {
      e.currentTarget.select()
    },
    Z7 = (e) => () => ({
      name: { color: e.color.secondary },
      collapsed: { color: e.color.dark },
      ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
      li: { outline: 0 },
    }),
    Sm = ({ name: e, value: t, onChange: r }) => {
      let n = $u(),
        a = nt(() => t && (0, Rm.default)(t), [t]),
        o = a != null,
        [i, s] = ne(!o),
        [u, d] = ne(null),
        m = ye(
          (x) => {
            try {
              x && r(JSON.parse(x)), d(void 0)
            } catch (F) {
              d(F)
            }
          },
          [r]
        ),
        [b, h] = ne(!1),
        y = ye(() => {
          r({}), h(!0)
        }, [h]),
        E = Fe(null)
      if (
        (ge(() => {
          b && E.current && E.current.select()
        }, [b]),
        !o)
      )
        return g.createElement(
          Te.Button,
          { id: mr(e), onClick: y },
          'Set object'
        )
      let A = g.createElement(Y7, {
        ref: E,
        id: Pe(e),
        name: e,
        defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
        onBlur: (x) => m(x.target.value),
        placeholder: 'Edit JSON string...',
        autoFocus: b,
        valid: u ? 'error' : null,
      })
      return g.createElement(
        V7,
        null,
        ['Object', 'Array'].includes(ht(a)) &&
          g.createElement(
            K7,
            {
              href: '#',
              onClick: (x) => {
                x.preventDefault(), s((F) => !F)
              },
            },
            g.createElement(Oe, { icon: i ? 'eyeclose' : 'eye' }),
            g.createElement('span', null, 'RAW')
          ),
        i
          ? A
          : g.createElement(Vm, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: Z7(n),
              cancelButtonElement: g.createElement(
                iu,
                { type: 'button' },
                'Cancel'
              ),
              editButtonElement: g.createElement(
                iu,
                { type: 'submit' },
                'Save'
              ),
              addButtonElement: g.createElement(
                iu,
                { type: 'submit', primary: !0 },
                'Save'
              ),
              plusMenuElement: g.createElement(Cm, { icon: 'add' }),
              minusMenuElement: g.createElement(Cm, { icon: 'subtract' }),
              inputElement: (x, F, R, j) =>
                j
                  ? g.createElement(xm, { onFocus: Q7, onBlur: X7 })
                  : g.createElement(xm, null),
              fallback: A,
            })
      )
    },
    ek = q.input(({ theme: e, min: t, max: r, value: n }) => ({
      '&': {
        width: '100%',
        backgroundColor: 'transparent',
        appearance: 'none',
      },
      '&::-webkit-slider-runnable-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${it(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${it(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
      },
      '&::-webkit-slider-thumb': {
        marginTop: '-6px',
        width: 16,
        height: 16,
        border: `1px solid ${$e(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${$e(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        appearance: 'none',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${Ue(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&:focus': {
        outline: 'none',
        '&::-webkit-slider-runnable-track': {
          borderColor: $e(e.color.secondary, 0.4),
        },
        '&::-webkit-slider-thumb': {
          borderColor: e.color.secondary,
          boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
        },
      },
      '&::-moz-range-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${it(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${it(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
        outline: 'none',
      },
      '&::-moz-range-thumb': {
        width: 16,
        height: 16,
        border: `1px solid ${$e(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${$e(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${Ue(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&::-ms-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${it(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${it(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: 'transparent',
        width: '100%',
        height: '6px',
        cursor: 'pointer',
      },
      '&::-ms-fill-lower': { borderRadius: 6 },
      '&::-ms-fill-upper': { borderRadius: 6 },
      '&::-ms-thumb': {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${$e(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: 'grab',
        marginTop: 0,
      },
      '@supports (-ms-ime-align:auto)': {
        'input[type=range]': { margin: '0' },
      },
    })),
    Km = q.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: 'nowrap',
      fontFeatureSettings: 'tnum',
      fontVariantNumeric: 'tabular-nums',
    }),
    tk = q(Km)(({ numberOFDecimalsPlaces: e, max: t }) => ({
      width: `${e + t.toString().length * 2 + 3}ch`,
      textAlign: 'right',
      flexShrink: 0,
    })),
    rk = q.div({ display: 'flex', alignItems: 'center', width: '100%' })
  function nk(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
  }
  var ak = ({
      name: e,
      value: t,
      onChange: r,
      min: n = 0,
      max: a = 100,
      step: o = 1,
      onBlur: i,
      onFocus: s,
    }) => {
      let u = (b) => {
          r(m7(b.target.value))
        },
        d = t !== void 0,
        m = nt(() => nk(o), [o])
      return g.createElement(
        rk,
        null,
        g.createElement(Km, null, n),
        g.createElement(ek, {
          id: Pe(e),
          type: 'range',
          onChange: u,
          name: e,
          value: t,
          min: n,
          max: a,
          step: o,
          onFocus: s,
          onBlur: i,
        }),
        g.createElement(
          tk,
          { numberOFDecimalsPlaces: m, max: a },
          `${d ? t.toFixed(m) : '--'}`,
          ' / ',
          a
        )
      )
    },
    ok = q.label({ display: 'flex' }),
    ik = q.div(({ isMaxed: e }) => ({
      marginLeft: '0.75rem',
      paddingTop: '0.35rem',
      color: e ? 'red' : void 0,
    })),
    uk = ({
      name: e,
      value: t,
      onChange: r,
      onFocus: n,
      onBlur: a,
      maxLength: o,
    }) => {
      let i = (b) => {
          r(b.target.value)
        },
        [s, u] = ne(!1),
        d = ye(() => {
          r(''), u(!0)
        }, [u])
      if (t === void 0)
        return g.createElement(
          Te.Button,
          { id: mr(e), onClick: d },
          'Set string'
        )
      let m = typeof t == 'string'
      return g.createElement(
        ok,
        null,
        g.createElement(Te.Textarea, {
          id: Pe(e),
          maxLength: o,
          onChange: i,
          size: 'flex',
          placeholder: 'Edit string...',
          autoFocus: s,
          valid: m ? null : 'error',
          name: e,
          value: m ? t : '',
          onFocus: n,
          onBlur: a,
        }),
        o &&
          g.createElement(
            ik,
            { isMaxed: t?.length === o },
            t?.length ?? 0,
            ' / ',
            o
          )
      )
    },
    sk = q(Te.Input)({ padding: 10 })
  function lk(e) {
    e.forEach((t) => {
      t.startsWith('blob:') && URL.revokeObjectURL(t)
    })
  }
  var ck = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
      let a = Fe(null)
      function o(i) {
        if (!i.target.files) return
        let s = Array.from(i.target.files).map((u) => URL.createObjectURL(u))
        e(s), lk(n)
      }
      return (
        ge(() => {
          n == null && a.current && (a.current.value = null)
        }, [n, t]),
        g.createElement(sk, {
          ref: a,
          id: Pe(t),
          type: 'file',
          name: t,
          multiple: !0,
          onChange: o,
          accept: r,
          size: 'flex',
        })
      )
    },
    pk = Ou(() => Promise.resolve().then(() => (ym(), hm))),
    dk = (e) =>
      g.createElement(
        Tu,
        { fallback: g.createElement('div', null) },
        g.createElement(pk, { ...e })
      ),
    fk = {
      array: Sm,
      object: Sm,
      boolean: l7,
      color: dk,
      date: y7,
      number: b7,
      check: dr,
      'inline-check': dr,
      radio: dr,
      'inline-radio': dr,
      select: dr,
      'multi-select': dr,
      range: ak,
      text: uk,
      file: ck,
    },
    Fm = () => g.createElement(g.Fragment, null, '-'),
    hk = ({ row: e, arg: t, updateArgs: r }) => {
      let { key: n, control: a } = e,
        [o, i] = ne(!1),
        [s, u] = ne({ value: t })
      ge(() => {
        o || u({ value: t })
      }, [o, t])
      let d = ye((E) => (u({ value: E }), r({ [n]: E }), E), [r, n]),
        m = ye(() => i(!1), []),
        b = ye(() => i(!0), [])
      if (!a || a.disable) return g.createElement(Fm, null)
      let h = {
          name: n,
          argType: e,
          value: s.value,
          onChange: d,
          onBlur: m,
          onFocus: b,
        },
        y = fk[a.type] || Fm
      return g.createElement(y, { ...h, ...a, controlType: a.type })
    },
    yk = q.span({ fontWeight: 'bold' }),
    gk = q.span(({ theme: e }) => ({
      color: e.color.negative,
      fontFamily: e.typography.fonts.mono,
      cursor: 'help',
    })),
    mk = q.div(({ theme: e }) => ({
      '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
      code: {
        ..._t({ theme: e }),
        fontSize: 12,
        fontFamily: e.typography.fonts.mono,
      },
      '& code': { margin: 0, display: 'inline-block' },
      '& pre > code': { whiteSpace: 'pre-wrap' },
    })),
    bk = q.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === 'light'
          ? de(0.1, e.color.defaultText)
          : de(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    Ak = q.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === 'light'
          ? de(0.1, e.color.defaultText)
          : de(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    Ek = q.td(({ theme: e, expandable: t }) => ({
      paddingLeft: t ? '40px !important' : '20px !important',
    })),
    Ea = (e) => {
      let {
          row: t,
          updateArgs: r,
          compact: n,
          expandable: a,
          initialExpandedArgs: o,
        } = e,
        { name: i, description: s } = t,
        u = t.table || {},
        d = u.type || t.type,
        m = u.defaultValue || t.defaultValue,
        b = t.type?.required,
        h = s != null && s !== ''
      return g.createElement(
        'tr',
        null,
        g.createElement(
          Ek,
          { expandable: a },
          g.createElement(yk, null, i),
          b ? g.createElement(gk, { title: 'Required' }, '*') : null
        ),
        n
          ? null
          : g.createElement(
              'td',
              null,
              h && g.createElement(mk, null, g.createElement(Qo, null, s)),
              u.jsDocTags != null
                ? g.createElement(
                    g.Fragment,
                    null,
                    g.createElement(
                      Ak,
                      { hasDescription: h },
                      g.createElement(ou, { value: d, initialExpandedArgs: o })
                    ),
                    g.createElement(XI, { tags: u.jsDocTags })
                  )
                : g.createElement(
                    bk,
                    { hasDescription: h },
                    g.createElement(ou, { value: d, initialExpandedArgs: o })
                  )
            ),
        n
          ? null
          : g.createElement(
              'td',
              null,
              g.createElement(ou, { value: m, initialExpandedArgs: o })
            ),
        r ? g.createElement('td', null, g.createElement(hk, { ...e })) : null
      )
    },
    vk = q(Oe)(({ theme: e }) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color:
        e.base === 'light'
          ? de(0.25, e.color.defaultText)
          : de(0.3, e.color.defaultText),
      border: 'none',
      display: 'inline-block',
    })),
    Dk = q.span(({ theme: e }) => ({
      display: 'flex',
      lineHeight: '20px',
      alignItems: 'center',
    })),
    Ck = q.td(({ theme: e }) => ({
      position: 'relative',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      '& ~ td': { background: `${e.background.app} !important` },
    })),
    xk = q.td(({ theme: e }) => ({
      position: 'relative',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.app,
    })),
    Sk = q.td(() => ({ position: 'relative' })),
    Fk = q.tr(({ theme: e }) => ({
      '&:hover > td': {
        backgroundColor: `${it(0.005, e.background.app)} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: 'row-resize',
      },
    })),
    wm = q.button(() => ({
      background: 'none',
      border: 'none',
      padding: '0',
      font: 'inherit',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      color: 'transparent',
      cursor: 'row-resize !important',
    })),
    uu = ({
      level: e = 'section',
      label: t,
      children: r,
      initialExpanded: n = !0,
      colSpan: a = 3,
    }) => {
      let [o, i] = ne(n),
        s = e === 'subsection' ? xk : Ck,
        u = r?.length || 0,
        d = e === 'subsection' ? `${u} item${u !== 1 ? 's' : ''}` : '',
        m = o ? 'arrowdown' : 'arrowright',
        b = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? u : t} item${
          u !== 1 ? 's' : ''
        }`
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          Fk,
          { title: b },
          g.createElement(
            s,
            { colSpan: 1 },
            g.createElement(wm, { onClick: (h) => i(!o), tabIndex: 0 }, b),
            g.createElement(Dk, null, g.createElement(vk, { icon: m }), t)
          ),
          g.createElement(
            Sk,
            { colSpan: a - 1 },
            g.createElement(
              wm,
              {
                onClick: (h) => i(!o),
                tabIndex: -1,
                style: { outline: 'none' },
              },
              b
            ),
            o ? null : d
          )
        ),
        o ? r : null
      )
    },
    wk = q.table(
      ({ theme: e, compact: t, inAddonPanel: r }) => ({
        '&&': {
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': { width: '25%' },
          'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : { width: '35%' }),
          },
          'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : { width: '25%' }),
          },
          th: {
            color:
              e.base === 'light'
                ? de(0.25, e.color.defaultText)
                : de(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
            '&:last-of-type': { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === 'light'
                      ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                      : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                }),
            '> tr > *': {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  '> tr:first-of-type > *': {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:last-of-type > *': {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:first-of-type': {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:last-of-type': {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:first-of-type > td:first-of-type': {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  '> tr:first-of-type > td:last-of-type': {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:first-of-type': {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:last-of-type': {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      }),
      ({ isLoading: e, theme: t }) =>
        e
          ? {
              'th span, td span, td button': {
                display: 'inline',
                backgroundColor: t.appBorderColor,
                animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
                color: 'transparent',
                boxShadow: 'none',
                borderRadius: 0,
              },
            }
          : {}
    ),
    Bk = q(yt)(({ theme: e }) => ({
      color: e.barTextColor,
      margin: '-4px -12px -4px 0',
    })),
    _k = q.span({ display: 'flex', justifyContent: 'space-between' }),
    Tk = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) =>
        +!!t.type?.required - +!!e.type?.required ||
        e.name.localeCompare(t.name),
      none: void 0,
    },
    su = (e) => ({
      key: e,
      name: 'propertyName',
      description: 'This is a short description',
      control: { type: 'text' },
      table: {
        type: { summary: 'summary' },
        defaultValue: { summary: 'defaultValue' },
      },
    }),
    Ok = { rows: { row1: su('row1'), row2: su('row2'), row3: su('row3') } },
    Pk = (e, t) => {
      let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} }
      if (!e) return r
      Object.entries(e).forEach(([o, i]) => {
        let { category: s, subcategory: u } = i?.table || {}
        if (s) {
          let d = r.sections[s] || { ungrouped: [], subsections: {} }
          if (!u) d.ungrouped.push({ key: o, ...i })
          else {
            let m = d.subsections[u] || []
            m.push({ key: o, ...i }), (d.subsections[u] = m)
          }
          r.sections[s] = d
        } else if (u) {
          let d = r.ungroupedSubsections[u] || []
          d.push({ key: o, ...i }), (r.ungroupedSubsections[u] = d)
        } else r.ungrouped.push({ key: o, ...i })
      })
      let n = Tk[t],
        a = (o) =>
          n
            ? Object.keys(o).reduce((i, s) => ({ ...i, [s]: o[s].sort(n) }), {})
            : o
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (o, i) => ({
            ...o,
            [i]: {
              ungrouped: r.sections[i].ungrouped.sort(n),
              subsections: a(r.sections[i].subsections),
            },
          }),
          {}
        ),
      }
    },
    Rk = (e, t, r) => {
      try {
        return ld(e, t, r)
      } catch (n) {
        return Pn.warn(n.message), !1
      }
    },
    wt = (e) => {
      if ('error' in e)
        return g.createElement(
          lu,
          null,
          e.error,
          '\xA0',
          g.createElement(
            yr,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs'
          )
        )
      let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
          sort: i = 'none',
        } = e,
        s = 'isLoading' in e,
        { rows: u, args: d, globals: m } = 'rows' in e ? e : Ok,
        b = Pk(
          (0, Tm.default)(
            u,
            (A) => !A?.table?.disable && Rk(A, d || {}, m || {})
          ),
          i
        )
      if (
        b.ungrouped.length === 0 &&
        Object.entries(b.sections).length === 0 &&
        Object.entries(b.ungroupedSubsections).length === 0
      )
        return g.createElement(
          lu,
          null,
          'No inputs found for this component.\xA0',
          g.createElement(
            yr,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs'
          )
        )
      let h = 1
      t && (h += 1), n || (h += 2)
      let y = Object.keys(b.sections).length > 0,
        E = {
          updateArgs: t,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
        }
      return g.createElement(
        La,
        null,
        g.createElement(
          wk,
          {
            'aria-hidden': s,
            compact: n,
            inAddonPanel: a,
            isLoading: s,
            className: 'docblock-argstable sb-unstyled',
          },
          g.createElement(
            'thead',
            { className: 'docblock-argstable-head' },
            g.createElement(
              'tr',
              null,
              g.createElement(
                'th',
                null,
                g.createElement('span', null, 'Name')
              ),
              n
                ? null
                : g.createElement(
                    'th',
                    null,
                    g.createElement('span', null, 'Description')
                  ),
              n
                ? null
                : g.createElement(
                    'th',
                    null,
                    g.createElement('span', null, 'Default')
                  ),
              t
                ? g.createElement(
                    'th',
                    null,
                    g.createElement(
                      _k,
                      null,
                      'Control',
                      ' ',
                      !s &&
                        r &&
                        g.createElement(
                          Bk,
                          { onClick: () => r(), title: 'Reset controls' },
                          g.createElement(Oe, {
                            icon: 'undo',
                            'aria-hidden': !0,
                          })
                        )
                    )
                  )
                : null
            )
          ),
          g.createElement(
            'tbody',
            { className: 'docblock-argstable-body' },
            b.ungrouped.map((A) =>
              g.createElement(Ea, {
                key: A.key,
                row: A,
                arg: d && d[A.key],
                ...E,
              })
            ),
            Object.entries(b.ungroupedSubsections).map(([A, x]) =>
              g.createElement(
                uu,
                { key: A, label: A, level: 'subsection', colSpan: h },
                x.map((F) =>
                  g.createElement(Ea, {
                    key: F.key,
                    row: F,
                    arg: d && d[F.key],
                    expandable: y,
                    ...E,
                  })
                )
              )
            ),
            Object.entries(b.sections).map(([A, x]) =>
              g.createElement(
                uu,
                { key: A, label: A, level: 'section', colSpan: h },
                x.ungrouped.map((F) =>
                  g.createElement(Ea, {
                    key: F.key,
                    row: F,
                    arg: d && d[F.key],
                    ...E,
                  })
                ),
                Object.entries(x.subsections).map(([F, R]) =>
                  g.createElement(
                    uu,
                    { key: F, label: F, level: 'subsection', colSpan: h },
                    R.map((j) =>
                      g.createElement(Ea, {
                        key: j.key,
                        row: j,
                        arg: d && d[j.key],
                        expandable: y,
                        ...E,
                      })
                    )
                  )
                )
              )
            )
          )
        )
      )
    },
    Ym = ({ tabs: e, ...t }) => {
      let r = Object.entries(e)
      return r.length === 1
        ? g.createElement(wt, { ...r[0][1], ...t })
        : g.createElement(
            $a,
            null,
            r.map((n) => {
              let [a, o] = n,
                i = `prop_table_div_${a}`
              return g.createElement(
                'div',
                { key: i, id: i, title: a },
                ({ active: s }) =>
                  s
                    ? g.createElement(wt, {
                        key: `prop_table_${a}`,
                        ...o,
                        ...t,
                      })
                    : null
              )
            })
          )
    },
    Ik = q.div(({ theme: e }) => ({
      background: e.background.warning,
      color: e.color.darkest,
      padding: '10px 15px',
      lineHeight: '20px',
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
    })),
    Jm = () =>
      g.createElement(
        Ik,
        null,
        'This story is not configured to handle controls.',
        ' ',
        g.createElement(
          yr,
          {
            href: 'https://storybook.js.org/docs/react/essentials/controls',
            target: '_blank',
            cancel: !1,
            withArrow: !0,
          },
          'Learn how to add controls'
        )
      ),
    goe = q.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    moe = q.div({
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }),
    boe = q.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      '&:not(:last-child)': { marginBottom: '1rem' },
    }),
    Aoe = q.div(Tt, ({ theme: e }) => ({
      ...Da(e),
      margin: '25px 0 40px',
      padding: '30px 20px',
    }))
  var Eoe = q.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    })),
    voe = q.div(({ theme: e }) => ({
      color:
        e.base === 'light'
          ? de(0.2, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    Doe = q.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
    Coe = q.div(({ theme: e }) => ({
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: { display: 'block', marginTop: 2 },
    })),
    xoe = q.div({ display: 'flex', flexDirection: 'row' }),
    Soe = q.div(({ background: e }) => ({
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""',
      },
    })),
    Foe = q.div(({ theme: e }) => ({
      ...Da(e),
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    })),
    woe = q.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative',
      marginBottom: 30,
    }),
    Boe = q.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
    _oe = q.div({ display: 'flex', alignItems: 'flex-start' }),
    Toe = q.div({ flex: '0 0 30%' }),
    Ooe = q.div({ flex: 1 }),
    Poe = q.div(({ theme: e }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    Roe = q.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    }))
  var Ioe = q.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    koe = q.div(({ theme: e }) => ({
      ...Da(e),
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 },
    })),
    Noe = q.div({
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 1 calc(20% - 10px)',
      minWidth: 120,
      margin: '0px 10px 30px 0',
    }),
    joe = q.div({ display: 'flex', flexFlow: 'row wrap' })
  var kk = (e) => `anchor--${e}`,
    Nk = ({ storyId: e, children: t }) =>
      g.createElement('div', { id: kk(e), className: 'sb-anchor' }, t)
  ie &&
    ie.__DOCS_CONTEXT__ === void 0 &&
    ((ie.__DOCS_CONTEXT__ = hr(null)),
    (ie.__DOCS_CONTEXT__.displayName = 'DocsContext'))
  var Je = ie ? ie.__DOCS_CONTEXT__ : hr(null),
    Du = (e, t) => Me(Je).resolveOf(e, t)
  var Cu = '^',
    jk = (e) =>
      e
        .split('-')
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(''),
    Xm = (e) => {
      if (e)
        return typeof e == 'string'
          ? e.includes('-')
            ? jk(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name
    }
  function Qm(e, t) {
    let r = xu([e], t)
    return r && r[0]
  }
  function xu(e, t) {
    let [r, n] = ne({})
    return (
      ge(() => {
        Promise.all(
          e.map(async (a) => {
            let o = await t.loadStory(a)
            n((i) => (i[a] === o ? i : { ...i, [a]: o }))
          })
        )
      }),
      e.map((a) => {
        if (r[a]) return r[a]
        try {
          return t.storyById(a)
        } catch {
          return null
        }
      })
    )
  }
  var Mk = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = ne(r.args)
      ge(() => {
        let s = (u) => {
          u.storyId === e && a(u.args)
        }
        return t.channel.on(Gt, s), () => t.channel.off(Gt, s)
      }, [e])
      let o = ye(
          (s) => t.channel.emit(Mr, { storyId: e, updatedArgs: s }),
          [e]
        ),
        i = ye((s) => t.channel.emit(jr, { storyId: e, argNames: s }), [e])
      return [n, o, i]
    },
    qk = (e) => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = ne(t.globals)
      return (
        ge(() => {
          let a = (o) => {
            n(o.globals)
          }
          return e.channel.on(jn, a), () => e.channel.off(jn, a)
        }, []),
        [r]
      )
    },
    Zm = (e, t, r, n) => {
      let { extractArgTypes: a } = t.docs || {}
      if (!a)
        throw new Error(
          'Args unsupported. See Args documentation for your framework.'
        )
      let o = a(e)
      return (o = Ur(o, r, n)), o
    },
    Bm = (e) => e && [Cu].includes(e),
    Lk = (e = {}, t) => {
      let { of: r } = e,
        { story: n } = e
      if (Bm(r) || Bm(n)) return t || null
      if (!r) throw new Error('No component found.')
      return r
    },
    yu = (e, t, r, n, a, o) => ({
      ...e,
      ...(0, Im.default)(t, (i) => ({ rows: Zm(i, r, n, a), sort: o })),
    }),
    $k = (e) => {
      let t = Me(Je),
        {
          story: r,
          component: n,
          subcomponents: a,
          showComponent: o,
          include: i,
          exclude: s,
          sort: u,
        } = e
      try {
        let d
        switch (r) {
          case Cu: {
            d = t.storyById().id
            break
          }
          default:
            d = t.storyIdByName(r)
        }
        let m = Qm(d, t),
          [b, h, y] = Mk(d, t),
          [E] = qk(t)
        if (!m)
          return g.createElement(wt, {
            isLoading: !0,
            updateArgs: h,
            resetArgs: y,
          })
        let A = Ur(m.argTypes, i, s),
          x = Xm(n) || 'Story',
          F = {
            [x]: { rows: A, args: b, globals: E, updateArgs: h, resetArgs: y },
          },
          R = A && Object.values(A).find((j) => !!j?.control)
        if (
          (R || ((h = null), (y = null), (F = {})),
          n && (!R || o) && (F = yu(F, { [x]: n }, m.parameters, i, s)),
          a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.'
            )
          F = yu(F, a, m.parameters, i, s)
        }
        return g.createElement(Ym, { tabs: F, sort: u })
      } catch (d) {
        return g.createElement(wt, { error: d.message })
      }
    },
    _m = (e) => {
      let { components: t, include: r, exclude: n, sort: a, parameters: o } = e,
        i = yu({}, t, o, r, n)
      return g.createElement(Ym, { tabs: i, sort: a })
    },
    Uk = (e) => {
      me(xe`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `)
      let t = Me(Je),
        r,
        n,
        a
      try {
        ;({ parameters: r, component: n, subcomponents: a } = t.storyById())
      } catch {
        let { of: y } = e
        if ('of' in e && y === void 0)
          throw new Error(
            'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
          )
        ;({
          projectAnnotations: { parameters: r },
        } = t.resolveOf(y, ['component']))
      }
      let { include: o, exclude: i, components: s, sort: u } = e,
        { story: d } = e,
        m = u || r.controls?.sort,
        b = Lk(e, n)
      if (d)
        return g.createElement($k, {
          ...e,
          component: b,
          subcomponents: a,
          sort: m,
        })
      if (!s && !a) {
        let y
        try {
          y = { rows: Zm(b, r, o, i) }
        } catch (E) {
          y = { error: E.message }
        }
        return g.createElement(wt, { ...y, sort: m })
      }
      if (s)
        return g.createElement(_m, {
          ...e,
          components: s,
          sort: m,
          parameters: r,
        })
      let h = Xm(b)
      return g.createElement(_m, {
        ...e,
        components: { [h]: b, ...a },
        sort: m,
        parameters: r,
      })
    }
  Uk.defaultProps = { of: Cu }
  function zk(e) {
    return Dg(e)
  }
  var Hk = hr({ sources: {} }),
    Gk = '--unknown--'
  var Wk = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: n } = e || { id: 'none' },
      [a, o] = ne(r.args)
    ge(() => {
      let u = (d) => {
        d.storyId === n && o(d.args)
      }
      return t.channel.on(Gt, u), () => t.channel.off(Gt, u)
    }, [n, t.channel])
    let i = ye(
        (u) => t.channel.emit(Mr, { storyId: n, updatedArgs: u }),
        [n, t.channel]
      ),
      s = ye(
        (u) => t.channel.emit(jr, { storyId: n, argNames: u }),
        [n, t.channel]
      )
    return e && [a, i, s]
  }
  function Vk(e, t) {
    return e.map((r) => Wk(r, t))
  }
  var Kk = ((e) => (
      (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
    ))(Kk || {}),
    Yk = (e) => {
      let t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean)
      return t.length === 0 ? 'closed' : t[0]
    },
    Jk = (e, t, r) => {
      let { sources: n } = r,
        a = n?.[e]
      return a?.[zk(t)] || a?.[Gk] || { code: '' }
    },
    Xk = ({
      snippet: e,
      storyContext: t,
      typeFromProps: r,
      transformFromProps: n,
    }) => {
      let { __isArgsStory: a } = t.parameters,
        o = t.parameters.docs?.source || {},
        i = r || o.type || Qr.AUTO
      if (o.code !== void 0) return o.code
      let s =
        i === Qr.DYNAMIC || (i === Qr.AUTO && e && a)
          ? e
          : o.originalSource || ''
      return (
        o.transformSource &&
          me(xe`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.docs?.transformSource &&
          me(xe`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.jsx?.transformSource &&
          me(xe`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        (
          n ??
          o.transform ??
          o.transformSource ??
          t.parameters.docs?.transformSource ??
          t.parameters.jsx?.transformSource
        )?.(s, t) || s
      )
    },
    e1 = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = xu(n, t),
        o = a,
        { of: i } = e
      if ('of' in e && i === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      if (i) o = [t.resolveOf(i, ['story']).story]
      else if (o.length === 0)
        try {
          o = [t.storyById()]
        } catch {}
      let s = Vk(o, t)
      if (!a.every(Boolean))
        return { error: 'Oh no! The source is not available.', state: 'none' }
      let u = o[0]?.parameters?.docs?.source || {},
        { code: d } = e,
        m = e.format ?? u.format,
        b = e.language ?? u.language ?? 'jsx',
        h = e.dark ?? u.dark ?? !1
      d ||
        (d = o.map((E, A) => {
          if (!E) return ''
          let [x] = s[A] || [],
            F = t.getStoryContext(E),
            R = e.__forceInitialArgs ? F.initialArgs : x,
            j = Jk(E.id, R, r)
          return (
            A === 0 &&
              (m = j.format ?? E.parameters.docs?.source?.format ?? !1),
            Xk({
              snippet: j.code,
              storyContext: { ...F, args: R },
              typeFromProps: e.type,
              transformFromProps: e.transform,
            })
          )
        }).join(`

`))
      let y = Yk(o)
      return d
        ? { code: d, format: m, language: b, dark: h, state: y }
        : { error: 'Oh no! The source is not available.', state: y }
    }
  var t1 = (e, t) => {
      let { id: r, of: n, meta: a, story: o } = e
      if ('of' in e && n === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      if (r)
        return (
          me(xe`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        )
      let { name: i } = e
      return i
        ? (me(xe`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(i))
        : (o &&
            me(xe`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || o || 'story', ['story']).story.id)
    },
    Qk = (e, t, r) => {
      let { parameters: n = {} } = t || {},
        { docs: a = {} } = n,
        o = a.story || {}
      if (a.disable) return null
      let { inlineStories: i, iframeHeight: s } = a
      typeof i < 'u' &&
        me(xe`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `)
      let u = e.inline ?? o.inline ?? i ?? !1
      if (
        (typeof s < 'u' &&
          me(xe`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        u)
      ) {
        let m = e.height ?? o.height,
          b = e.autoplay ?? o.autoplay ?? !1
        return {
          story: t,
          inline: !0,
          height: m,
          autoplay: b,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        }
      }
      let d = e.height ?? o.height ?? o.iframeHeight ?? s ?? '100px'
      return { story: t, inline: !1, height: d, primary: !!e.__primary }
    },
    Zk = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
      let t = Me(Je),
        r = t1(e, t),
        n = Qm(r, t)
      if (!n) return g.createElement(Au, null)
      let a = Qk(e, n, t)
      return a ? g.createElement($I, { ...a }) : null
    },
    eN = (
      { withSource: e, mdxSource: t, children: r, layout: n, ...a },
      o,
      i
    ) => {
      let s = on
          .toArray(r)
          .filter((h) => h.props && (h.props.id || h.props.name || h.props.of))
          .map((h) => t1(h.props, o)),
        u = xu(s, o),
        d = u.some((h) => !h),
        m = e1(
          {
            ...(t ? { code: decodeURI(t) } : { ids: s }),
            ...(a.of && { of: a.of }),
          },
          o,
          i
        )
      if (e === 'none') return { isLoading: d, previewProps: a }
      let b = n
      return (
        on.forEach(r, (h) => {
          b || (b = h?.props?.parameters?.layout)
        }),
        u.forEach((h) => {
          b ||
            !h ||
            (b = h?.parameters.layout ?? h.parameters.docs?.canvas?.layout)
        }),
        {
          isLoading: d,
          previewProps: {
            ...a,
            layout: b ?? 'padded',
            withSource: m,
            isExpanded: (e || m.state) === 'open',
          },
        }
      )
    },
    tN = (e) => {
      let t = Me(Je),
        r = Me(Hk),
        { children: n, of: a, source: o } = e
      if ('of' in e && a === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      let { isLoading: i, previewProps: s } = eN(e, t, r),
        u,
        d,
        m
      try {
        ;({ story: u } = Du(a || 'story', ['story']))
      } catch (x) {
        n || (m = x)
      }
      try {
        d = e1({ ...o, ...(a && { of: a }) }, t, r)
      } catch (x) {
        n || (m = x)
      }
      if (m) throw m
      if (
        (e.withSource &&
          me(xe`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          me(xe`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          me(xe`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          me(xe`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          i ? g.createElement(YI, null) : g.createElement(pu, { ...s }, n)
        )
      let b =
          e.layout ??
          u.parameters.layout ??
          u.parameters.docs?.canvas?.layout ??
          'padded',
        h = e.withToolbar ?? u.parameters.docs?.canvas?.withToolbar ?? !1,
        y = e.additionalActions ?? u.parameters.docs?.canvas?.additionalActions,
        E = e.sourceState ?? u.parameters.docs?.canvas?.sourceState ?? 'hidden',
        A = e.className ?? u.parameters.docs?.canvas?.className
      return g.createElement(
        pu,
        {
          withSource: E === 'none' ? void 0 : d,
          isExpanded: E === 'shown',
          withToolbar: h,
          additionalActions: y,
          className: A,
          layout: b,
        },
        g.createElement(Zk, {
          of: a || u.moduleExport,
          meta: e.meta,
          ...e.story,
        })
      )
    }
  var { document: r1 } = ie
  var rN = ({ className: e, children: t, ...r }) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return g.createElement(Ra, null, t)
    let n = e && e.split('-')
    return g.createElement(mu, {
      language: (n && n[1]) || 'plaintext',
      format: !1,
      code: t,
      ...r,
    })
  }
  function Su(e, t) {
    e.channel.emit(s0, t)
  }
  var gu = Ga.a,
    nN = ({ hash: e, children: t }) => {
      let r = Me(Je)
      return g.createElement(
        gu,
        {
          href: e,
          target: '_self',
          onClick: (n) => {
            let a = e.substring(1)
            r1.getElementById(a) && Su(r, e)
          },
        },
        t
      )
    },
    aN = (e) => {
      let { href: t, target: r, children: n, ...a } = e,
        o = Me(Je)
      if (t) {
        if (t.startsWith('#')) return g.createElement(nN, { hash: t }, n)
        if (r !== '_blank' && !t.startsWith('https://'))
          return g.createElement(
            gu,
            {
              href: t,
              onClick: (i) => {
                i.button === 0 &&
                  !i.altKey &&
                  !i.ctrlKey &&
                  !i.metaKey &&
                  !i.shiftKey &&
                  (i.preventDefault(),
                  Su(o, i.currentTarget.getAttribute('href')))
              },
              target: r,
              ...a,
            },
            n
          )
      }
      return g.createElement(gu, { ...e })
    },
    n1 = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    oN = n1.reduce(
      (e, t) => ({
        ...e,
        [t]: q(t)({
          '& svg': {
            position: 'relative',
            top: '-0.1em',
            visibility: 'hidden',
          },
          '&:hover svg': { visibility: 'visible' },
        }),
      }),
      {}
    ),
    iN = q.a(() => ({
      float: 'left',
      lineHeight: 'inherit',
      paddingRight: '10px',
      marginLeft: '-24px',
      color: 'inherit',
    })),
    uN = ({ as: e, id: t, children: r, ...n }) => {
      let a = Me(Je),
        o = oN[e],
        i = `#${t}`
      return g.createElement(
        o,
        { id: t, ...n },
        g.createElement(
          iN,
          {
            'aria-hidden': 'true',
            href: i,
            tabIndex: -1,
            target: '_self',
            onClick: (s) => {
              r1.getElementById(t) && Su(a, i)
            },
          },
          g.createElement(Oe, { icon: 'link' })
        ),
        r
      )
    },
    Fu = (e) => {
      let { as: t, id: r, children: n, ...a } = e
      if (r) return g.createElement(uN, { as: t, id: r, ...a }, n)
      let o = t,
        { as: i, ...s } = e
      return g.createElement(o, { ...Va(s, t) })
    },
    sN = n1.reduce(
      (e, t) => ({ ...e, [t]: (r) => g.createElement(Fu, { as: t, ...r }) }),
      {}
    ),
    lN = (e) => {
      if (!e.children) return null
      if (typeof e.children != 'string')
        throw new Error(xe`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `)
      return g.createElement(Qo, {
        ...e,
        options: {
          forceBlock: !0,
          overrides: { code: rN, a: aN, ...sN, ...e?.options?.overrides },
          ...e?.options,
        },
      })
    },
    cN = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(cN || {}),
    va =
      'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
    pN = (e) => e && (typeof e == 'string' ? e : la(e.markdown) || la(e.text)),
    dN = (e) => e && (typeof e == 'string' ? e : la(e.text)),
    fN = (e) => null,
    hN = (e) => {
      switch (e.type) {
        case 'story':
          return e.story.parameters.docs?.description?.story || null
        case 'meta': {
          let { parameters: t, component: r } = e.preparedMeta
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, {
              component: r,
              parameters: t,
            }) ||
            null
          )
        }
        case 'component': {
          let {
            component: t,
            projectAnnotations: { parameters: r },
          } = e
          return (
            r.docs?.extractComponentDescription?.(t, {
              component: t,
              parameters: r,
            }) || null
          )
        }
        default:
          throw new Error(
            `Unrecognized module type resolved from 'useOf', got: ${e.type}`
          )
      }
    },
    yN = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
      let { component: a, parameters: o } = n()
      if (r || t) return r || t
      let { notes: i, info: s, docs: u } = o
      ;(i || s) &&
        me(
          `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${va}`
        )
      let { extractComponentDescription: d = fN, description: m } = u || {},
        b = m?.component
      if (b) return b
      switch (e) {
        case 'info':
          return dN(s)
        case 'notes':
          return pN(i)
        case 'docgen':
        case 'auto':
        default:
          return d(a, { component: a, ...o })
      }
    },
    gN = (e) => {
      let { of: t, type: r, markdown: n, children: a } = e
      if ('of' in e && t === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      let o = Me(Je),
        i = Du(t || 'meta'),
        s
      return (
        r || n || a ? (s = yN(e, o)) : (s = hN(i)),
        r &&
          me(`Manually specifying description type is deprecated. See ${va}`),
        n &&
          me(
            `The 'markdown' prop on the Description block is deprecated. See ${va}`
          ),
        a &&
          me(
            `The 'children' prop on the Description block is deprecated. See ${va}`
          ),
        s ? g.createElement(lN, null, s) : null
      )
    },
    { document: Moe, window: qoe } = ie
  var mN = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != 'string') return g.createElement(ja, null, e)
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
      return g.createElement(Fu, { as: 'h3', id: r }, e)
    },
    bN = ({
      of: e,
      expanded: t = !0,
      withToolbar: r = !1,
      __forceInitialArgs: n = !1,
      __primary: a = !1,
    }) => {
      let { story: o } = Du(e || 'story', ['story']),
        i = o.parameters.docs?.canvas?.withToolbar ?? r
      return g.createElement(
        Nk,
        { storyId: o.id },
        t &&
          g.createElement(
            g.Fragment,
            null,
            g.createElement(mN, null, o.name),
            g.createElement(gN, { of: e })
          ),
        g.createElement(tN, {
          of: e,
          withToolbar: i,
          story: { __forceInitialArgs: n, __primary: a },
          source: { __forceInitialArgs: n },
        })
      )
    }
  var AN = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != 'string') return g.createElement(Na, null, e)
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
      return g.createElement(Fu, { as: 'h2', id: n, ...r }, e)
    },
    EN = q(AN)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: '16px',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: e.textMutedColor,
      border: 0,
      marginBottom: '12px',
      '&:first-of-type': { marginTop: '56px' },
    })),
    vN = ({ title: e, includePrimary: t = !0 }) => {
      let { componentStories: r } = Me(Je),
        n = r().filter((a) => !a.parameters?.docs?.disable)
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : g.createElement(
              g.Fragment,
              null,
              g.createElement(EN, null, e),
              n.map(
                (a) =>
                  a &&
                  g.createElement(bN, {
                    key: a.id,
                    of: a.moduleExport,
                    expanded: !0,
                    __forceInitialArgs: !0,
                  })
              )
            )
      )
    }
  vN.defaultProps = { title: 'Stories' }
  var DN = () => {
    let [e, t, r] = Iu(),
      [n] = ku(),
      a = _a(),
      o = Ta('__isArgsStory', !1),
      {
        expanded: i,
        sort: s,
        presetColors: u,
        hideNoControlsWarning: d = !1,
      } = Ta(Fa, {}),
      { path: m } = Nu(),
      b = Object.values(a).some((E) => E?.control),
      h = !(b && o) && !d,
      y = Object.entries(a).reduce(
        (E, [A, x]) => (
          x?.control?.type !== 'color' || x?.control?.presetColors
            ? (E[A] = x)
            : (E[A] = { ...x, control: { ...x.control, presetColors: u } }),
          E
        ),
        {}
      )
    return g.createElement(
      g.Fragment,
      null,
      h && g.createElement(Jm, null),
      g.createElement(wt, {
        key: m,
        compact: !i && b,
        rows: y,
        args: e,
        globals: n,
        updateArgs: t,
        resetArgs: r,
        inAddonPanel: !0,
        sort: s,
      })
    )
  }
  function CN() {
    let e = _a(),
      t = Object.values(e).filter(
        (n) => n?.control && !n?.table?.disable
      ).length,
      r = t === 0 ? '' : ` (${t})`
    return g.createElement(g.Fragment, null, 'Controls', r)
  }
  Ba.register(Sa, (e) => {
    Ba.addPanel(Sa, {
      title: g.createElement(CN, null),
      id: 'controls',
      type: Ru.PANEL,
      paramKey: Fa,
      render: ({ key: t, active: r }) =>
        !r || !e.getCurrentStoryData()
          ? null
          : g.createElement(
              Pa,
              { key: t, active: r },
              g.createElement(DN, null)
            ),
    })
  })
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
//# sourceMappingURL=manager-bundle.js.map
