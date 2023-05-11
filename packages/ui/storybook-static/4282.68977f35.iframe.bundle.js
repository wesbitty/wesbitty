;(self.webpackChunkui = self.webpackChunkui || []).push([
  [4282],
  {
    '../../node_modules/@supabase/supabase-js/dist/module/index.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        eI: function () {
          return createClient
        },
      })
      const DEFAULT_HEADERS = { 'X-Client-Info': 'supabase-js/1.35.7' }
      const constants_DEFAULT_HEADERS = { 'X-Client-Info': 'gotrue-js/1.24.0' },
        NETWORK_FAILURE_ERROR_MESSAGE = 'Request Failed',
        NETWORK_FAILURE_MAX_RETRIES = 10,
        NETWORK_FAILURE_RETRY_INTERVAL = 2,
        COOKIE_OPTIONS = {
          name: 'sb',
          lifetime: 28800,
          domain: '',
          path: '/',
          sameSite: 'lax',
        }
      var __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      const _getErrorMessage = (err) =>
          err.msg ||
          err.message ||
          err.error_description ||
          err.error ||
          JSON.stringify(err),
        handleError = (error, reject) =>
          (null == error ? void 0 : error.status)
            ? 'function' != typeof error.json
              ? reject(error)
              : void error.json().then((err) =>
                  reject({
                    message: _getErrorMessage(err),
                    status: (null == error ? void 0 : error.status) || 500,
                  })
                )
            : reject({ message: NETWORK_FAILURE_ERROR_MESSAGE }),
        _getRequestParams = (method, options, body) => {
          const params = {
            method: method,
            headers: (null == options ? void 0 : options.headers) || {},
          }
          return (
            'GET' === method ||
              ((params.headers = Object.assign(
                { 'Content-Type': 'application/json;charset=UTF-8' },
                null == options ? void 0 : options.headers
              )),
              (params.body = JSON.stringify(body))),
            params
          )
        }
      function _handleRequest(fetcher, method, url, options, body) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            fetcher(url, _getRequestParams(method, options, body))
              .then((result) => {
                if (!result.ok) throw result
                return (null == options ? void 0 : options.noResolveJson)
                  ? resolve
                  : result.json()
              })
              .then((data) => resolve(data))
              .catch((error) => handleError(error, reject))
          })
        })
      }
      function get(fetcher, url, options) {
        return __awaiter(this, void 0, void 0, function* () {
          return _handleRequest(fetcher, 'GET', url, options)
        })
      }
      function post(fetcher, url, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
          return _handleRequest(fetcher, 'POST', url, options, body)
        })
      }
      function put(fetcher, url, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
          return _handleRequest(fetcher, 'PUT', url, options, body)
        })
      }
      function serializeCookie(cookie, secure) {
        var _a, _b, _c
        return (function serialize(name, val, options) {
          const opt = options || {},
            enc = encodeURIComponent,
            fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
          if ('function' != typeof enc)
            throw new TypeError('option encode is invalid')
          if (!fieldContentRegExp.test(name))
            throw new TypeError('argument name is invalid')
          const value = enc(val)
          if (value && !fieldContentRegExp.test(value))
            throw new TypeError('argument val is invalid')
          let str = name + '=' + value
          if (null != opt.maxAge) {
            const maxAge = opt.maxAge - 0
            if (isNaN(maxAge) || !isFinite(maxAge))
              throw new TypeError('option maxAge is invalid')
            str += '; Max-Age=' + Math.floor(maxAge)
          }
          if (opt.domain) {
            if (!fieldContentRegExp.test(opt.domain))
              throw new TypeError('option domain is invalid')
            str += '; Domain=' + opt.domain
          }
          if (opt.path) {
            if (!fieldContentRegExp.test(opt.path))
              throw new TypeError('option path is invalid')
            str += '; Path=' + opt.path
          }
          if (opt.expires) {
            if ('function' != typeof opt.expires.toUTCString)
              throw new TypeError('option expires is invalid')
            str += '; Expires=' + opt.expires.toUTCString()
          }
          if (
            (opt.httpOnly && (str += '; HttpOnly'),
            opt.secure && (str += '; Secure'),
            opt.sameSite)
          )
            switch (
              'string' == typeof opt.sameSite
                ? opt.sameSite.toLowerCase()
                : opt.sameSite
            ) {
              case 'lax':
                str += '; SameSite=Lax'
                break
              case 'strict':
                str += '; SameSite=Strict'
                break
              case 'none':
                str += '; SameSite=None'
                break
              default:
                throw new TypeError('option sameSite is invalid')
            }
          return str
        })(cookie.name, cookie.value, {
          maxAge: cookie.maxAge,
          expires: new Date(Date.now() + 1e3 * cookie.maxAge),
          httpOnly: !0,
          secure: secure,
          path: null !== (_a = cookie.path) && void 0 !== _a ? _a : '/',
          domain: null !== (_b = cookie.domain) && void 0 !== _b ? _b : '',
          sameSite:
            null !== (_c = cookie.sameSite) && void 0 !== _c ? _c : 'lax',
        })
      }
      function getCookieString(req, res, cookies) {
        const strCookies = cookies.map((c) =>
            serializeCookie(
              c,
              (function isSecureEnvironment(req) {
                if (!req || !req.headers || !req.headers.host)
                  throw new Error('The "host" request header is not available')
                const host =
                  (req.headers.host.indexOf(':') > -1 &&
                    req.headers.host.split(':')[0]) ||
                  req.headers.host
                return !(
                  ['localhost', '127.0.0.1'].indexOf(host) > -1 ||
                  host.endsWith('.local')
                )
              })(req)
            )
          ),
          previousCookies = res.getHeader('Set-Cookie')
        return (
          previousCookies &&
            (previousCookies instanceof Array
              ? Array.prototype.push.apply(strCookies, previousCookies)
              : 'string' == typeof previousCookies &&
                strCookies.push(previousCookies)),
          strCookies
        )
      }
      function setCookies(req, res, cookies) {
        res.setHeader('Set-Cookie', getCookieString(req, res, cookies))
      }
      var helpers_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      function expiresAt(expiresIn) {
        return Math.round(Date.now() / 1e3) + expiresIn
      }
      const helpers_isBrowser = () => 'undefined' != typeof window
      function getParameterByName(name, url) {
        var _a
        url ||
          (url =
            (null ===
              (_a =
                null === window || void 0 === window
                  ? void 0
                  : window.location) || void 0 === _a
              ? void 0
              : _a.href) || ''),
          (name = name.replace(/[\[\]]/g, '\\$&'))
        const results = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)').exec(
          url
        )
        return results
          ? results[2]
            ? decodeURIComponent(results[2].replace(/\+/g, ' '))
            : ''
          : null
      }
      const resolveFetch = (customFetch) => {
        let _fetch
        return (
          (_fetch =
            customFetch ||
            ('undefined' == typeof fetch
              ? (...args) =>
                  helpers_awaiter(void 0, void 0, void 0, function* () {
                    return yield (yield __webpack_require__
                      .e(6279)
                      .then(
                        __webpack_require__.t.bind(
                          __webpack_require__,
                          '../../node_modules/cross-fetch/dist/browser-ponyfill.js',
                          23
                        )
                      )).fetch(...args)
                  })
              : fetch)),
          (...args) => _fetch(...args)
        )
      }
      var GoTrueApi_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      class GoTrueApi {
        constructor({
          url: url = '',
          headers: headers = {},
          cookieOptions: cookieOptions,
          fetch: fetch,
        }) {
          ;(this.url = url),
            (this.headers = headers),
            (this.cookieOptions = Object.assign(
              Object.assign({}, COOKIE_OPTIONS),
              cookieOptions
            )),
            (this.fetch = resolveFetch(fetch))
        }
        _createRequestHeaders(jwt) {
          const headers = Object.assign({}, this.headers)
          return (headers.Authorization = `Bearer ${jwt}`), headers
        }
        cookieName() {
          var _a
          return null !== (_a = this.cookieOptions.name) && void 0 !== _a
            ? _a
            : ''
        }
        getUrlForProvider(provider, options) {
          const urlParams = [`provider=${encodeURIComponent(provider)}`]
          if (
            ((null == options ? void 0 : options.redirectTo) &&
              urlParams.push(
                `redirect_to=${encodeURIComponent(options.redirectTo)}`
              ),
            (null == options ? void 0 : options.scopes) &&
              urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`),
            null == options ? void 0 : options.queryParams)
          ) {
            const query = new URLSearchParams(options.queryParams)
            urlParams.push(`${query}`)
          }
          return `${this.url}/authorize?${urlParams.join('&')}`
        }
        signUpWithEmail(email, password, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers)
              let queryString = ''
              options.redirectTo &&
                (queryString =
                  '?redirect_to=' + encodeURIComponent(options.redirectTo))
              const data = yield post(
                  this.fetch,
                  `${this.url}/signup${queryString}`,
                  {
                    email: email,
                    password: password,
                    data: options.data,
                    gotrue_meta_security: {
                      captcha_token: options.captchaToken,
                    },
                  },
                  { headers: headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        signInWithEmail(email, password, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers)
              let queryString = '?grant_type=password'
              options.redirectTo &&
                (queryString +=
                  '&redirect_to=' + encodeURIComponent(options.redirectTo))
              const data = yield post(
                  this.fetch,
                  `${this.url}/token${queryString}`,
                  {
                    email: email,
                    password: password,
                    gotrue_meta_security: {
                      captcha_token: options.captchaToken,
                    },
                  },
                  { headers: headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        signUpWithPhone(phone, password, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers),
                data = yield post(
                  this.fetch,
                  `${this.url}/signup`,
                  {
                    phone: phone,
                    password: password,
                    data: options.data,
                    gotrue_meta_security: {
                      captcha_token: options.captchaToken,
                    },
                  },
                  { headers: headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        signInWithPhone(phone, password, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers),
                queryString = '?grant_type=password',
                data = yield post(
                  this.fetch,
                  `${this.url}/token${queryString}`,
                  {
                    phone: phone,
                    password: password,
                    gotrue_meta_security: {
                      captcha_token: options.captchaToken,
                    },
                  },
                  { headers: headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        signInWithOpenIDConnect({
          id_token: id_token,
          nonce: nonce,
          client_id: client_id,
          issuer: issuer,
          provider: provider,
        }) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers),
                queryString = '?grant_type=id_token',
                data = yield post(
                  this.fetch,
                  `${this.url}/token${queryString}`,
                  {
                    id_token: id_token,
                    nonce: nonce,
                    client_id: client_id,
                    issuer: issuer,
                    provider: provider,
                  },
                  { headers: headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        sendMagicLinkEmail(email, options = {}) {
          var _a
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers)
              let queryString = ''
              options.redirectTo &&
                (queryString +=
                  '?redirect_to=' + encodeURIComponent(options.redirectTo))
              const shouldCreateUser =
                null === (_a = options.shouldCreateUser) || void 0 === _a || _a
              return {
                data: yield post(
                  this.fetch,
                  `${this.url}/otp${queryString}`,
                  {
                    email: email,
                    create_user: shouldCreateUser,
                    gotrue_meta_security: {
                      captcha_token: options.captchaToken,
                    },
                  },
                  { headers: headers }
                ),
                error: null,
              }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        sendMobileOTP(phone, options = {}) {
          var _a
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const shouldCreateUser =
                  null === (_a = options.shouldCreateUser) ||
                  void 0 === _a ||
                  _a,
                headers = Object.assign({}, this.headers)
              return {
                data: yield post(
                  this.fetch,
                  `${this.url}/otp`,
                  {
                    phone: phone,
                    create_user: shouldCreateUser,
                    gotrue_meta_security: {
                      captcha_token: options.captchaToken,
                    },
                  },
                  { headers: headers }
                ),
                error: null,
              }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        signOut(jwt) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              return (
                yield post(
                  this.fetch,
                  `${this.url}/logout`,
                  {},
                  {
                    headers: this._createRequestHeaders(jwt),
                    noResolveJson: !0,
                  }
                ),
                { error: null }
              )
            } catch (e) {
              return { error: e }
            }
          })
        }
        verifyMobileOTP(phone, token, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers),
                data = yield post(
                  this.fetch,
                  `${this.url}/verify`,
                  {
                    phone: phone,
                    token: token,
                    type: 'sms',
                    redirect_to: options.redirectTo,
                  },
                  { headers: headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        verifyOTP(
          { email: email, phone: phone, token: token, type: type = 'sms' },
          options = {}
        ) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers),
                data = yield post(
                  this.fetch,
                  `${this.url}/verify`,
                  {
                    email: email,
                    phone: phone,
                    token: token,
                    type: type,
                    redirect_to: options.redirectTo,
                  },
                  { headers: headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        inviteUserByEmail(email, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers)
              let queryString = ''
              options.redirectTo &&
                (queryString +=
                  '?redirect_to=' + encodeURIComponent(options.redirectTo))
              return {
                data: yield post(
                  this.fetch,
                  `${this.url}/invite${queryString}`,
                  { email: email, data: options.data },
                  { headers: headers }
                ),
                error: null,
              }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        resetPasswordForEmail(email, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const headers = Object.assign({}, this.headers)
              let queryString = ''
              options.redirectTo &&
                (queryString +=
                  '?redirect_to=' + encodeURIComponent(options.redirectTo))
              return {
                data: yield post(
                  this.fetch,
                  `${this.url}/recover${queryString}`,
                  {
                    email: email,
                    gotrue_meta_security: {
                      captcha_token: options.captchaToken,
                    },
                  },
                  { headers: headers }
                ),
                error: null,
              }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        refreshAccessToken(refreshToken) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield post(
                  this.fetch,
                  `${this.url}/token?grant_type=refresh_token`,
                  { refresh_token: refreshToken },
                  { headers: this.headers }
                ),
                session = Object.assign({}, data)
              return (
                session.expires_in &&
                  (session.expires_at = expiresAt(data.expires_in)),
                { data: session, error: null }
              )
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        setAuthCookie(req, res) {
          'POST' !== req.method &&
            (res.setHeader('Allow', 'POST'),
            res.status(405).end('Method Not Allowed'))
          const { event: event, session: session } = req.body
          if (!event) throw new Error('Auth event missing!')
          if ('SIGNED_IN' === event) {
            if (!session) throw new Error('Auth session missing!')
            setCookies(
              req,
              res,
              [
                { key: 'access-token', value: session.access_token },
                { key: 'refresh-token', value: session.refresh_token },
              ].map((token) => {
                var _a
                return {
                  name: `${this.cookieName()}-${token.key}`,
                  value: token.value,
                  domain: this.cookieOptions.domain,
                  maxAge:
                    null !== (_a = this.cookieOptions.lifetime) && void 0 !== _a
                      ? _a
                      : 0,
                  path: this.cookieOptions.path,
                  sameSite: this.cookieOptions.sameSite,
                }
              })
            )
          }
          'SIGNED_OUT' === event &&
            setCookies(
              req,
              res,
              ['access-token', 'refresh-token'].map((key) => ({
                name: `${this.cookieName()}-${key}`,
                value: '',
                maxAge: -1,
              }))
            ),
            res.status(200).json({})
        }
        deleteAuthCookie(req, res, { redirectTo: redirectTo = '/' }) {
          return (
            setCookies(
              req,
              res,
              ['access-token', 'refresh-token'].map((key) => ({
                name: `${this.cookieName()}-${key}`,
                value: '',
                maxAge: -1,
              }))
            ),
            res.redirect(307, redirectTo)
          )
        }
        getAuthCookieString(req, res) {
          'POST' !== req.method &&
            (res.setHeader('Allow', 'POST'),
            res.status(405).end('Method Not Allowed'))
          const { event: event, session: session } = req.body
          if (!event) throw new Error('Auth event missing!')
          if ('SIGNED_IN' === event) {
            if (!session) throw new Error('Auth session missing!')
            return getCookieString(
              req,
              res,
              [
                { key: 'access-token', value: session.access_token },
                { key: 'refresh-token', value: session.refresh_token },
              ].map((token) => {
                var _a
                return {
                  name: `${this.cookieName()}-${token.key}`,
                  value: token.value,
                  domain: this.cookieOptions.domain,
                  maxAge:
                    null !== (_a = this.cookieOptions.lifetime) && void 0 !== _a
                      ? _a
                      : 0,
                  path: this.cookieOptions.path,
                  sameSite: this.cookieOptions.sameSite,
                }
              })
            )
          }
          return 'SIGNED_OUT' === event
            ? getCookieString(
                req,
                res,
                ['access-token', 'refresh-token'].map((key) => ({
                  name: `${this.cookieName()}-${key}`,
                  value: '',
                  maxAge: -1,
                }))
              )
            : res.getHeader('Set-Cookie')
        }
        generateLink(type, email, options = {}) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield post(
                  this.fetch,
                  `${this.url}/admin/generate_link`,
                  {
                    type: type,
                    email: email,
                    password: options.password,
                    data: options.data,
                    redirect_to: options.redirectTo,
                  },
                  { headers: this.headers }
                ),
                error: null,
              }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        createUser(attributes) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield post(
                this.fetch,
                `${this.url}/admin/users`,
                attributes,
                { headers: this.headers }
              )
              return { user: data, data: data, error: null }
            } catch (e) {
              return { user: null, data: null, error: e }
            }
          })
        }
        listUsers() {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: (yield get(this.fetch, `${this.url}/admin/users`, {
                  headers: this.headers,
                })).users,
                error: null,
              }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        getUserById(uid) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield get(this.fetch, `${this.url}/admin/users/${uid}`, {
                  headers: this.headers,
                }),
                error: null,
              }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        getUserByCookie(req, res) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              if (!req.cookies)
                throw new Error(
                  'Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!'
                )
              const access_token =
                  req.cookies[`${this.cookieName()}-access-token`],
                refresh_token =
                  req.cookies[`${this.cookieName()}-refresh-token`]
              if (!access_token) throw new Error('No cookie found!')
              const { user: user, error: getUserError } = yield this.getUser(
                access_token
              )
              if (getUserError) {
                if (!refresh_token)
                  throw new Error('No refresh_token cookie found!')
                if (!res)
                  throw new Error(
                    'You need to pass the res object to automatically refresh the session!'
                  )
                const { data: data, error: error } =
                  yield this.refreshAccessToken(refresh_token)
                if (error) throw error
                if (data)
                  return (
                    setCookies(
                      req,
                      res,
                      [
                        { key: 'access-token', value: data.access_token },
                        { key: 'refresh-token', value: data.refresh_token },
                      ].map((token) => {
                        var _a
                        return {
                          name: `${this.cookieName()}-${token.key}`,
                          value: token.value,
                          domain: this.cookieOptions.domain,
                          maxAge:
                            null !== (_a = this.cookieOptions.lifetime) &&
                            void 0 !== _a
                              ? _a
                              : 0,
                          path: this.cookieOptions.path,
                          sameSite: this.cookieOptions.sameSite,
                        }
                      })
                    ),
                    {
                      token: data.access_token,
                      user: data.user,
                      data: data.user,
                      error: null,
                    }
                  )
              }
              return {
                token: access_token,
                user: user,
                data: user,
                error: null,
              }
            } catch (e) {
              return { token: null, user: null, data: null, error: e }
            }
          })
        }
        updateUserById(uid, attributes) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield put(
                this.fetch,
                `${this.url}/admin/users/${uid}`,
                attributes,
                { headers: this.headers }
              )
              return { user: data, data: data, error: null }
            } catch (e) {
              return { user: null, data: null, error: e }
            }
          })
        }
        deleteUser(uid) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield (function remove(fetcher, url, body, options) {
                return __awaiter(this, void 0, void 0, function* () {
                  return _handleRequest(fetcher, 'DELETE', url, options, body)
                })
              })(
                this.fetch,
                `${this.url}/admin/users/${uid}`,
                {},
                { headers: this.headers }
              )
              return { user: data, data: data, error: null }
            } catch (e) {
              return { user: null, data: null, error: e }
            }
          })
        }
        getUser(jwt) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield get(this.fetch, `${this.url}/user`, {
                headers: this._createRequestHeaders(jwt),
              })
              return { user: data, data: data, error: null }
            } catch (e) {
              return { user: null, data: null, error: e }
            }
          })
        }
        updateUser(jwt, attributes) {
          return GoTrueApi_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield put(
                this.fetch,
                `${this.url}/user`,
                attributes,
                { headers: this._createRequestHeaders(jwt) }
              )
              return { user: data, data: data, error: null }
            } catch (e) {
              return { user: null, data: null, error: e }
            }
          })
        }
      }
      var GoTrueClient_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      !(function polyfillGlobalThis() {
        if ('object' != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, '__magic__', {
              get: function () {
                return this
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__
          } catch (e) {
            'undefined' != typeof self && (self.globalThis = self)
          }
      })()
      const DEFAULT_OPTIONS = {
        url: 'http://localhost:9999',
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        multiTab: !0,
        headers: constants_DEFAULT_HEADERS,
      }
      class GoTrueClient {
        constructor(options) {
          ;(this.stateChangeEmitters = new Map()), (this.networkRetries = 0)
          const settings = Object.assign(
            Object.assign({}, DEFAULT_OPTIONS),
            options
          )
          ;(this.currentUser = null),
            (this.currentSession = null),
            (this.autoRefreshToken = settings.autoRefreshToken),
            (this.persistSession = settings.persistSession),
            (this.multiTab = settings.multiTab),
            (this.localStorage =
              settings.localStorage || globalThis.localStorage),
            (this.api = new GoTrueApi({
              url: settings.url,
              headers: settings.headers,
              cookieOptions: settings.cookieOptions,
              fetch: settings.fetch,
            })),
            this._recoverSession(),
            this._recoverAndRefresh(),
            this._listenForMultiTabEvents(),
            this._handleVisibilityChange(),
            settings.detectSessionInUrl &&
              helpers_isBrowser() &&
              getParameterByName('access_token') &&
              this.getSessionFromUrl({ storeSession: !0 }).then(
                ({ error: error }) => {
                  if (error) throw new Error('Error getting session from URL.')
                }
              )
        }
        signUp(
          { email: email, password: password, phone: phone },
          options = {}
        ) {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              this._removeSession()
              const { data: data, error: error } =
                phone && password
                  ? yield this.api.signUpWithPhone(phone, password, {
                      data: options.data,
                      captchaToken: options.captchaToken,
                    })
                  : yield this.api.signUpWithEmail(email, password, {
                      redirectTo: options.redirectTo,
                      data: options.data,
                      captchaToken: options.captchaToken,
                    })
              if (error) throw error
              if (!data) throw 'An error occurred on sign up.'
              let session = null,
                user = null
              return (
                data.access_token &&
                  ((session = data),
                  (user = session.user),
                  this._saveSession(session),
                  this._notifyAllSubscribers('SIGNED_IN')),
                data.id && (user = data),
                { user: user, session: session, error: null }
              )
            } catch (e) {
              return { user: null, session: null, error: e }
            }
          })
        }
        signIn(
          {
            email: email,
            phone: phone,
            password: password,
            refreshToken: refreshToken,
            provider: provider,
            oidc: oidc,
          },
          options = {}
        ) {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              if ((this._removeSession(), email && !password)) {
                const { error: error } = yield this.api.sendMagicLinkEmail(
                  email,
                  {
                    redirectTo: options.redirectTo,
                    shouldCreateUser: options.shouldCreateUser,
                    captchaToken: options.captchaToken,
                  }
                )
                return { user: null, session: null, error: error }
              }
              if (email && password)
                return this._handleEmailSignIn(email, password, {
                  redirectTo: options.redirectTo,
                  captchaToken: options.captchaToken,
                })
              if (phone && !password) {
                const { error: error } = yield this.api.sendMobileOTP(phone, {
                  shouldCreateUser: options.shouldCreateUser,
                  captchaToken: options.captchaToken,
                })
                return { user: null, session: null, error: error }
              }
              if (phone && password)
                return this._handlePhoneSignIn(phone, password)
              if (refreshToken) {
                const { error: error } = yield this._callRefreshToken(
                  refreshToken
                )
                if (error) throw error
                return {
                  user: this.currentUser,
                  session: this.currentSession,
                  error: null,
                }
              }
              if (provider)
                return this._handleProviderSignIn(provider, {
                  redirectTo: options.redirectTo,
                  scopes: options.scopes,
                  queryParams: options.queryParams,
                })
              if (oidc) return this._handleOpenIDConnectSignIn(oidc)
              throw new Error(
                'You must provide either an email, phone number, a third-party provider or OpenID Connect.'
              )
            } catch (e) {
              return { user: null, session: null, error: e }
            }
          })
        }
        verifyOTP(params, options = {}) {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              this._removeSession()
              const { data: data, error: error } = yield this.api.verifyOTP(
                params,
                options
              )
              if (error) throw error
              if (!data) throw 'An error occurred on token verification.'
              let session = null,
                user = null
              return (
                data.access_token &&
                  ((session = data),
                  (user = session.user),
                  this._saveSession(session),
                  this._notifyAllSubscribers('SIGNED_IN')),
                data.id && (user = data),
                { user: user, session: session, error: null }
              )
            } catch (e) {
              return { user: null, session: null, error: e }
            }
          })
        }
        user() {
          return this.currentUser
        }
        session() {
          return this.currentSession
        }
        refreshSession() {
          var _a
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              if (
                !(null === (_a = this.currentSession) || void 0 === _a
                  ? void 0
                  : _a.access_token)
              )
                throw new Error('Not logged in.')
              const { error: error } = yield this._callRefreshToken()
              if (error) throw error
              return {
                data: this.currentSession,
                user: this.currentUser,
                error: null,
              }
            } catch (e) {
              return { data: null, user: null, error: e }
            }
          })
        }
        update(attributes) {
          var _a
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              if (
                !(null === (_a = this.currentSession) || void 0 === _a
                  ? void 0
                  : _a.access_token)
              )
                throw new Error('Not logged in.')
              const { user: user, error: error } = yield this.api.updateUser(
                this.currentSession.access_token,
                attributes
              )
              if (error) throw error
              if (!user) throw Error('Invalid user data.')
              const session = Object.assign(
                Object.assign({}, this.currentSession),
                { user: user }
              )
              return (
                this._saveSession(session),
                this._notifyAllSubscribers('USER_UPDATED'),
                { data: user, user: user, error: null }
              )
            } catch (e) {
              return { data: null, user: null, error: e }
            }
          })
        }
        setSession(arg0) {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            let session
            if ('string' == typeof arg0) {
              const refresh_token = arg0,
                { data: data, error: error } =
                  yield this.api.refreshAccessToken(refresh_token)
              if (error) return { session: null, error: error }
              session = data
            } else {
              const timeNow = Math.round(Date.now() / 1e3)
              let { refresh_token: refresh_token, access_token: access_token } =
                  arg0,
                expires_at = 0,
                expires_in = 0
              const tokenParts = access_token.split('.')
              if (3 !== tokenParts.length)
                throw new Error('access_token is not a proper JWT')
              const bodyJSON = ((value) => {
                try {
                  return atob(value.replace(/[-]/g, '+').replace(/[_]/g, '/'))
                } catch (e) {
                  if (e instanceof ReferenceError)
                    return Buffer.from(value, 'base64').toString('utf-8')
                  throw e
                }
              })(tokenParts[1])
              let parsed
              try {
                parsed = JSON.parse(bodyJSON)
              } catch (e) {
                throw new Error(
                  'access_token is not a proper JWT, invalid JSON in body'
                )
              }
              if (
                'object' != typeof parsed ||
                !parsed ||
                'number' != typeof parsed.exp
              )
                throw new Error(
                  'access_token is not a proper JWT, missing exp claim'
                )
              if (
                ((expires_at = parsed.exp),
                (expires_in = timeNow - parsed.exp),
                timeNow > expires_at)
              ) {
                const { data: data, error: error } =
                  yield this.api.refreshAccessToken(refresh_token)
                if (error) return { session: null, error: error }
                session = data
              } else {
                const { user: user, error: error } = yield this.api.getUser(
                  access_token
                )
                if (error) throw error
                session = {
                  access_token: access_token,
                  expires_in: expires_in,
                  expires_at: expires_at,
                  refresh_token: refresh_token,
                  token_type: 'bearer',
                  user: user,
                }
              }
            }
            try {
              return (
                this._saveSession(session),
                this._notifyAllSubscribers('SIGNED_IN'),
                { session: session, error: null }
              )
            } catch (e) {
              return { error: e, session: null }
            }
          })
        }
        setAuth(access_token) {
          return (
            (this.currentSession = Object.assign(
              Object.assign({}, this.currentSession),
              {
                access_token: access_token,
                token_type: 'bearer',
                user: this.user(),
              }
            )),
            this._notifyAllSubscribers('TOKEN_REFRESHED'),
            this.currentSession
          )
        }
        getSessionFromUrl(options) {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              if (!helpers_isBrowser()) throw new Error('No browser detected.')
              const error_description = getParameterByName('error_description')
              if (error_description) throw new Error(error_description)
              const provider_token = getParameterByName('provider_token'),
                provider_refresh_token = getParameterByName(
                  'provider_refresh_token'
                ),
                access_token = getParameterByName('access_token')
              if (!access_token) throw new Error('No access_token detected.')
              const expires_in = getParameterByName('expires_in')
              if (!expires_in) throw new Error('No expires_in detected.')
              const refresh_token = getParameterByName('refresh_token')
              if (!refresh_token) throw new Error('No refresh_token detected.')
              const token_type = getParameterByName('token_type')
              if (!token_type) throw new Error('No token_type detected.')
              const expires_at =
                  Math.round(Date.now() / 1e3) + parseInt(expires_in),
                { user: user, error: error } = yield this.api.getUser(
                  access_token
                )
              if (error) throw error
              const session = {
                provider_token: provider_token,
                provider_refresh_token: provider_refresh_token,
                access_token: access_token,
                expires_in: parseInt(expires_in),
                expires_at: expires_at,
                refresh_token: refresh_token,
                token_type: token_type,
                user: user,
              }
              if (null == options ? void 0 : options.storeSession) {
                this._saveSession(session)
                const recoveryMode = getParameterByName('type')
                this._notifyAllSubscribers('SIGNED_IN'),
                  'recovery' === recoveryMode &&
                    this._notifyAllSubscribers('PASSWORD_RECOVERY')
              }
              return (window.location.hash = ''), { data: session, error: null }
            } catch (e) {
              return { data: null, error: e }
            }
          })
        }
        signOut() {
          var _a
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            const accessToken =
              null === (_a = this.currentSession) || void 0 === _a
                ? void 0
                : _a.access_token
            if (
              (this._removeSession(),
              this._notifyAllSubscribers('SIGNED_OUT'),
              accessToken)
            ) {
              const { error: error } = yield this.api.signOut(accessToken)
              if (error) return { error: error }
            }
            return { error: null }
          })
        }
        onAuthStateChange(callback) {
          try {
            const id = (function helpers_uuid() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                  /[xy]/g,
                  function (c) {
                    const r = (16 * Math.random()) | 0
                    return ('x' == c ? r : (3 & r) | 8).toString(16)
                  }
                )
              })(),
              subscription = {
                id: id,
                callback: callback,
                unsubscribe: () => {
                  this.stateChangeEmitters.delete(id)
                },
              }
            return (
              this.stateChangeEmitters.set(id, subscription),
              { data: subscription, error: null }
            )
          } catch (e) {
            return { data: null, error: e }
          }
        }
        _handleEmailSignIn(email, password, options = {}) {
          var _a, _b
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              const { data: data, error: error } =
                yield this.api.signInWithEmail(email, password, {
                  redirectTo: options.redirectTo,
                  captchaToken: options.captchaToken,
                })
              return error || !data
                ? { data: null, user: null, session: null, error: error }
                : (((null === (_a = null == data ? void 0 : data.user) ||
                  void 0 === _a
                    ? void 0
                    : _a.confirmed_at) ||
                    (null === (_b = null == data ? void 0 : data.user) ||
                    void 0 === _b
                      ? void 0
                      : _b.email_confirmed_at)) &&
                    (this._saveSession(data),
                    this._notifyAllSubscribers('SIGNED_IN')),
                  { data: data, user: data.user, session: data, error: null })
            } catch (e) {
              return { data: null, user: null, session: null, error: e }
            }
          })
        }
        _handlePhoneSignIn(phone, password, options = {}) {
          var _a
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              const { data: data, error: error } =
                yield this.api.signInWithPhone(phone, password, options)
              return error || !data
                ? { data: null, user: null, session: null, error: error }
                : ((null === (_a = null == data ? void 0 : data.user) ||
                  void 0 === _a
                    ? void 0
                    : _a.phone_confirmed_at) &&
                    (this._saveSession(data),
                    this._notifyAllSubscribers('SIGNED_IN')),
                  { data: data, user: data.user, session: data, error: null })
            } catch (e) {
              return { data: null, user: null, session: null, error: e }
            }
          })
        }
        _handleProviderSignIn(provider, options = {}) {
          const url = this.api.getUrlForProvider(provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes,
            queryParams: options.queryParams,
          })
          try {
            return (
              helpers_isBrowser() && (window.location.href = url),
              {
                provider: provider,
                url: url,
                data: null,
                session: null,
                user: null,
                error: null,
              }
            )
          } catch (e) {
            return url
              ? {
                  provider: provider,
                  url: url,
                  data: null,
                  session: null,
                  user: null,
                  error: null,
                }
              : { data: null, user: null, session: null, error: e }
          }
        }
        _handleOpenIDConnectSignIn({
          id_token: id_token,
          nonce: nonce,
          client_id: client_id,
          issuer: issuer,
          provider: provider,
        }) {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            if (id_token && nonce && ((client_id && issuer) || provider))
              try {
                const { data: data, error: error } =
                  yield this.api.signInWithOpenIDConnect({
                    id_token: id_token,
                    nonce: nonce,
                    client_id: client_id,
                    issuer: issuer,
                    provider: provider,
                  })
                return error || !data
                  ? { user: null, session: null, error: error }
                  : (this._saveSession(data),
                    this._notifyAllSubscribers('SIGNED_IN'),
                    { user: data.user, session: data, error: null })
              } catch (e) {
                return { user: null, session: null, error: e }
              }
            throw new Error(
              'You must provide a OpenID Connect provider with your id token and nonce.'
            )
          })
        }
        _recoverSession() {
          try {
            const data = ((storage, key) => {
              const value =
                helpers_isBrowser() &&
                (null == storage ? void 0 : storage.getItem(key))
              if (!value || 'string' != typeof value) return null
              try {
                return JSON.parse(value)
              } catch (_a) {
                return value
              }
            })(this.localStorage, 'supabase.auth.token')
            if (!data) return null
            const { currentSession: currentSession, expiresAt: expiresAt } =
              data
            expiresAt >= Math.round(Date.now() / 1e3) + 10 &&
              (null == currentSession ? void 0 : currentSession.user) &&
              (this._saveSession(currentSession),
              this._notifyAllSubscribers('SIGNED_IN'))
          } catch (error) {
            console.log('error', error)
          }
        }
        _recoverAndRefresh() {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield ((storage = this.localStorage),
              (key = 'supabase.auth.token'),
              helpers_awaiter(void 0, void 0, void 0, function* () {
                const value =
                  helpers_isBrowser() &&
                  (yield null == storage ? void 0 : storage.getItem(key))
                if (!value) return null
                try {
                  return JSON.parse(value)
                } catch (_a) {
                  return value
                }
              }))
              if (!data) return null
              const { currentSession: currentSession, expiresAt: expiresAt } =
                data
              if (expiresAt < Math.round(Date.now() / 1e3) + 10)
                if (this.autoRefreshToken && currentSession.refresh_token) {
                  this.networkRetries++
                  const { error: error } = yield this._callRefreshToken(
                    currentSession.refresh_token
                  )
                  if (error) {
                    if (
                      (console.log(error.message),
                      error.message === NETWORK_FAILURE_ERROR_MESSAGE &&
                        this.networkRetries < NETWORK_FAILURE_MAX_RETRIES)
                    )
                      return (
                        this.refreshTokenTimer &&
                          clearTimeout(this.refreshTokenTimer),
                        void (this.refreshTokenTimer = setTimeout(
                          () => this._recoverAndRefresh(),
                          100 *
                            Math.pow(
                              NETWORK_FAILURE_RETRY_INTERVAL,
                              this.networkRetries
                            )
                        ))
                      )
                    yield this._removeSession()
                  }
                  this.networkRetries = 0
                } else this._removeSession()
              else
                currentSession
                  ? (this._saveSession(currentSession),
                    this._notifyAllSubscribers('SIGNED_IN'))
                  : (console.log('Current session is missing data.'),
                    this._removeSession())
            } catch (err) {
              return console.error(err), null
            }
            var storage, key
          })
        }
        _callRefreshToken(refresh_token) {
          var _a
          return (
            void 0 === refresh_token &&
              (refresh_token =
                null === (_a = this.currentSession) || void 0 === _a
                  ? void 0
                  : _a.refresh_token),
            GoTrueClient_awaiter(this, void 0, void 0, function* () {
              try {
                if (!refresh_token) throw new Error('No current session.')
                const { data: data, error: error } =
                  yield this.api.refreshAccessToken(refresh_token)
                if (error) throw error
                if (!data) throw Error('Invalid session data.')
                return (
                  this._saveSession(data),
                  this._notifyAllSubscribers('TOKEN_REFRESHED'),
                  this._notifyAllSubscribers('SIGNED_IN'),
                  { data: data, error: null }
                )
              } catch (e) {
                return { data: null, error: e }
              }
            })
          )
        }
        _notifyAllSubscribers(event) {
          this.stateChangeEmitters.forEach((x) =>
            x.callback(event, this.currentSession)
          )
        }
        _saveSession(session) {
          ;(this.currentSession = session), (this.currentUser = session.user)
          const expiresAt = session.expires_at
          if (expiresAt) {
            const expiresIn = expiresAt - Math.round(Date.now() / 1e3),
              refreshDurationBeforeExpires = expiresIn > 10 ? 10 : 0.5
            this._startAutoRefreshToken(
              1e3 * (expiresIn - refreshDurationBeforeExpires)
            )
          }
          this.persistSession &&
            session.expires_at &&
            this._persistSession(this.currentSession)
        }
        _persistSession(currentSession) {
          const data = {
            currentSession: currentSession,
            expiresAt: currentSession.expires_at,
          }
          ;((storage, key, data) => {
            helpers_awaiter(void 0, void 0, void 0, function* () {
              helpers_isBrowser() &&
                (yield null == storage
                  ? void 0
                  : storage.setItem(key, JSON.stringify(data)))
            })
          })(this.localStorage, 'supabase.auth.token', data)
        }
        _removeSession() {
          return GoTrueClient_awaiter(this, void 0, void 0, function* () {
            var storage, key
            ;(this.currentSession = null),
              (this.currentUser = null),
              this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
              (storage = this.localStorage),
              (key = 'supabase.auth.token'),
              helpers_awaiter(void 0, void 0, void 0, function* () {
                helpers_isBrowser() &&
                  (yield null == storage ? void 0 : storage.removeItem(key))
              })
          })
        }
        _startAutoRefreshToken(value) {
          this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
            value <= 0 ||
              !this.autoRefreshToken ||
              ((this.refreshTokenTimer = setTimeout(
                () =>
                  GoTrueClient_awaiter(this, void 0, void 0, function* () {
                    this.networkRetries++
                    const { error: error } = yield this._callRefreshToken()
                    error || (this.networkRetries = 0),
                      (null == error ? void 0 : error.message) ===
                        NETWORK_FAILURE_ERROR_MESSAGE &&
                        this.networkRetries < NETWORK_FAILURE_MAX_RETRIES &&
                        this._startAutoRefreshToken(
                          100 *
                            Math.pow(
                              NETWORK_FAILURE_RETRY_INTERVAL,
                              this.networkRetries
                            )
                        )
                  }),
                value
              )),
              'function' == typeof this.refreshTokenTimer.unref &&
                this.refreshTokenTimer.unref())
        }
        _listenForMultiTabEvents() {
          if (
            !this.multiTab ||
            !helpers_isBrowser() ||
            !(null === window || void 0 === window
              ? void 0
              : window.addEventListener)
          )
            return !1
          try {
            null === window ||
              void 0 === window ||
              window.addEventListener('storage', (e) => {
                var _a
                if ('supabase.auth.token' === e.key) {
                  const newSession = JSON.parse(String(e.newValue))
                  ;(
                    null ===
                      (_a =
                        null == newSession
                          ? void 0
                          : newSession.currentSession) || void 0 === _a
                      ? void 0
                      : _a.access_token
                  )
                    ? (this._saveSession(newSession.currentSession),
                      this._notifyAllSubscribers('SIGNED_IN'))
                    : (this._removeSession(),
                      this._notifyAllSubscribers('SIGNED_OUT'))
                }
              })
          } catch (error) {
            console.error('_listenForMultiTabEvents', error)
          }
        }
        _handleVisibilityChange() {
          if (
            !this.multiTab ||
            !helpers_isBrowser() ||
            !(null === window || void 0 === window
              ? void 0
              : window.addEventListener)
          )
            return !1
          try {
            null === window ||
              void 0 === window ||
              window.addEventListener('visibilitychange', () => {
                'visible' === document.visibilityState &&
                  this._recoverAndRefresh()
              })
          } catch (error) {
            console.error('_handleVisibilityChange', error)
          }
        }
      }
      class SupabaseAuthClient extends GoTrueClient {
        constructor(options) {
          super(options)
        }
      }
      var types_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      class PostgrestBuilder {
        constructor(builder) {
          let _fetch
          Object.assign(this, builder),
            (_fetch = builder.fetch
              ? builder.fetch
              : 'undefined' == typeof fetch
              ? (...args) =>
                  types_awaiter(this, void 0, void 0, function* () {
                    return yield (yield __webpack_require__
                      .e(6279)
                      .then(
                        __webpack_require__.t.bind(
                          __webpack_require__,
                          '../../node_modules/cross-fetch/dist/browser-ponyfill.js',
                          23
                        )
                      )).fetch(...args)
                  })
              : fetch),
            (this.fetch = (...args) => _fetch(...args)),
            (this.shouldThrowOnError = builder.shouldThrowOnError || !1),
            (this.allowEmpty = builder.allowEmpty || !1)
        }
        throwOnError(throwOnError) {
          return (
            null == throwOnError && (throwOnError = !0),
            (this.shouldThrowOnError = throwOnError),
            this
          )
        }
        then(onfulfilled, onrejected) {
          void 0 === this.schema ||
            (['GET', 'HEAD'].includes(this.method)
              ? (this.headers['Accept-Profile'] = this.schema)
              : (this.headers['Content-Profile'] = this.schema)),
            'GET' !== this.method &&
              'HEAD' !== this.method &&
              (this.headers['Content-Type'] = 'application/json')
          let res = this.fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
          }).then((res) =>
            types_awaiter(this, void 0, void 0, function* () {
              var _a, _b, _c, _d
              let error = null,
                data = null,
                count = null,
                status = res.status,
                statusText = res.statusText
              if (res.ok) {
                const isReturnMinimal =
                  null === (_a = this.headers.Prefer) || void 0 === _a
                    ? void 0
                    : _a.split(',').includes('return=minimal')
                if ('HEAD' !== this.method && !isReturnMinimal) {
                  const text = yield res.text()
                  text &&
                    (data =
                      'text/csv' === this.headers.Accept
                        ? text
                        : JSON.parse(text))
                }
                const countHeader =
                    null === (_b = this.headers.Prefer) || void 0 === _b
                      ? void 0
                      : _b.match(/count=(exact|planned|estimated)/),
                  contentRange =
                    null === (_c = res.headers.get('content-range')) ||
                    void 0 === _c
                      ? void 0
                      : _c.split('/')
                countHeader &&
                  contentRange &&
                  contentRange.length > 1 &&
                  (count = parseInt(contentRange[1]))
              } else {
                const body = yield res.text()
                try {
                  error = JSON.parse(body)
                } catch (_e) {
                  error = { message: body }
                }
                if (
                  (error &&
                    this.allowEmpty &&
                    (null === (_d = null == error ? void 0 : error.details) ||
                    void 0 === _d
                      ? void 0
                      : _d.includes('Results contain 0 rows')) &&
                    ((error = null), (status = 200), (statusText = 'OK')),
                  error && this.shouldThrowOnError)
                )
                  throw error
              }
              return {
                error: error,
                data: data,
                count: count,
                status: status,
                statusText: statusText,
                body: data,
              }
            })
          )
          return (
            this.shouldThrowOnError ||
              (res = res.catch((fetchError) => ({
                error: {
                  message: `FetchError: ${fetchError.message}`,
                  details: '',
                  hint: '',
                  code: fetchError.code || '',
                },
                data: null,
                body: null,
                count: null,
                status: 400,
                statusText: 'Bad Request',
              }))),
            res.then(onfulfilled, onrejected)
          )
        }
      }
      class PostgrestTransformBuilder extends PostgrestBuilder {
        select(columns = '*') {
          let quoted = !1
          const cleanedColumns = columns
            .split('')
            .map((c) =>
              /\s/.test(c) && !quoted
                ? ''
                : ('"' === c && (quoted = !quoted), c)
            )
            .join('')
          return this.url.searchParams.set('select', cleanedColumns), this
        }
        order(
          column,
          {
            ascending: ascending = !0,
            nullsFirst: nullsFirst = !1,
            foreignTable: foreignTable,
          } = {}
        ) {
          const key =
              void 0 === foreignTable ? 'order' : `${foreignTable}.order`,
            existingOrder = this.url.searchParams.get(key)
          return (
            this.url.searchParams.set(
              key,
              `${existingOrder ? `${existingOrder},` : ''}${column}.${
                ascending ? 'asc' : 'desc'
              }.${nullsFirst ? 'nullsfirst' : 'nullslast'}`
            ),
            this
          )
        }
        limit(count, { foreignTable: foreignTable } = {}) {
          const key =
            void 0 === foreignTable ? 'limit' : `${foreignTable}.limit`
          return this.url.searchParams.set(key, `${count}`), this
        }
        range(from, to, { foreignTable: foreignTable } = {}) {
          const keyOffset =
              void 0 === foreignTable ? 'offset' : `${foreignTable}.offset`,
            keyLimit =
              void 0 === foreignTable ? 'limit' : `${foreignTable}.limit`
          return (
            this.url.searchParams.set(keyOffset, `${from}`),
            this.url.searchParams.set(keyLimit, '' + (to - from + 1)),
            this
          )
        }
        abortSignal(signal) {
          return (this.signal = signal), this
        }
        single() {
          return (
            (this.headers.Accept = 'application/vnd.pgrst.object+json'), this
          )
        }
        maybeSingle() {
          return (
            (this.headers.Accept = 'application/vnd.pgrst.object+json'),
            (this.allowEmpty = !0),
            this
          )
        }
        csv() {
          return (this.headers.Accept = 'text/csv'), this
        }
      }
      class PostgrestFilterBuilder extends PostgrestTransformBuilder {
        constructor() {
          super(...arguments),
            (this.cs = this.contains),
            (this.cd = this.containedBy),
            (this.sl = this.rangeLt),
            (this.sr = this.rangeGt),
            (this.nxl = this.rangeGte),
            (this.nxr = this.rangeLte),
            (this.adj = this.rangeAdjacent),
            (this.ov = this.overlaps)
        }
        not(column, operator, value) {
          return (
            this.url.searchParams.append(
              `${column}`,
              `not.${operator}.${value}`
            ),
            this
          )
        }
        or(filters, { foreignTable: foreignTable } = {}) {
          const key = void 0 === foreignTable ? 'or' : `${foreignTable}.or`
          return this.url.searchParams.append(key, `(${filters})`), this
        }
        eq(column, value) {
          return this.url.searchParams.append(`${column}`, `eq.${value}`), this
        }
        neq(column, value) {
          return this.url.searchParams.append(`${column}`, `neq.${value}`), this
        }
        gt(column, value) {
          return this.url.searchParams.append(`${column}`, `gt.${value}`), this
        }
        gte(column, value) {
          return this.url.searchParams.append(`${column}`, `gte.${value}`), this
        }
        lt(column, value) {
          return this.url.searchParams.append(`${column}`, `lt.${value}`), this
        }
        lte(column, value) {
          return this.url.searchParams.append(`${column}`, `lte.${value}`), this
        }
        like(column, pattern) {
          return (
            this.url.searchParams.append(`${column}`, `like.${pattern}`), this
          )
        }
        ilike(column, pattern) {
          return (
            this.url.searchParams.append(`${column}`, `ilike.${pattern}`), this
          )
        }
        is(column, value) {
          return this.url.searchParams.append(`${column}`, `is.${value}`), this
        }
        in(column, values) {
          const cleanedValues = values
            .map((s) =>
              'string' == typeof s && new RegExp('[,()]').test(s)
                ? `"${s}"`
                : `${s}`
            )
            .join(',')
          return (
            this.url.searchParams.append(`${column}`, `in.(${cleanedValues})`),
            this
          )
        }
        contains(column, value) {
          return (
            'string' == typeof value
              ? this.url.searchParams.append(`${column}`, `cs.${value}`)
              : Array.isArray(value)
              ? this.url.searchParams.append(
                  `${column}`,
                  `cs.{${value.join(',')}}`
                )
              : this.url.searchParams.append(
                  `${column}`,
                  `cs.${JSON.stringify(value)}`
                ),
            this
          )
        }
        containedBy(column, value) {
          return (
            'string' == typeof value
              ? this.url.searchParams.append(`${column}`, `cd.${value}`)
              : Array.isArray(value)
              ? this.url.searchParams.append(
                  `${column}`,
                  `cd.{${value.join(',')}}`
                )
              : this.url.searchParams.append(
                  `${column}`,
                  `cd.${JSON.stringify(value)}`
                ),
            this
          )
        }
        rangeLt(column, range) {
          return this.url.searchParams.append(`${column}`, `sl.${range}`), this
        }
        rangeGt(column, range) {
          return this.url.searchParams.append(`${column}`, `sr.${range}`), this
        }
        rangeGte(column, range) {
          return this.url.searchParams.append(`${column}`, `nxl.${range}`), this
        }
        rangeLte(column, range) {
          return this.url.searchParams.append(`${column}`, `nxr.${range}`), this
        }
        rangeAdjacent(column, range) {
          return this.url.searchParams.append(`${column}`, `adj.${range}`), this
        }
        overlaps(column, value) {
          return (
            'string' == typeof value
              ? this.url.searchParams.append(`${column}`, `ov.${value}`)
              : this.url.searchParams.append(
                  `${column}`,
                  `ov.{${value.join(',')}}`
                ),
            this
          )
        }
        textSearch(column, query, { config: config, type: type = null } = {}) {
          let typePart = ''
          'plain' === type
            ? (typePart = 'pl')
            : 'phrase' === type
            ? (typePart = 'ph')
            : 'websearch' === type && (typePart = 'w')
          const configPart = void 0 === config ? '' : `(${config})`
          return (
            this.url.searchParams.append(
              `${column}`,
              `${typePart}fts${configPart}.${query}`
            ),
            this
          )
        }
        fts(column, query, { config: config } = {}) {
          const configPart = void 0 === config ? '' : `(${config})`
          return (
            this.url.searchParams.append(
              `${column}`,
              `fts${configPart}.${query}`
            ),
            this
          )
        }
        plfts(column, query, { config: config } = {}) {
          const configPart = void 0 === config ? '' : `(${config})`
          return (
            this.url.searchParams.append(
              `${column}`,
              `plfts${configPart}.${query}`
            ),
            this
          )
        }
        phfts(column, query, { config: config } = {}) {
          const configPart = void 0 === config ? '' : `(${config})`
          return (
            this.url.searchParams.append(
              `${column}`,
              `phfts${configPart}.${query}`
            ),
            this
          )
        }
        wfts(column, query, { config: config } = {}) {
          const configPart = void 0 === config ? '' : `(${config})`
          return (
            this.url.searchParams.append(
              `${column}`,
              `wfts${configPart}.${query}`
            ),
            this
          )
        }
        filter(column, operator, value) {
          return (
            this.url.searchParams.append(`${column}`, `${operator}.${value}`),
            this
          )
        }
        match(query) {
          return (
            Object.keys(query).forEach((key) => {
              this.url.searchParams.append(`${key}`, `eq.${query[key]}`)
            }),
            this
          )
        }
      }
      class PostgrestQueryBuilder extends PostgrestBuilder {
        constructor(
          url,
          {
            headers: headers = {},
            schema: schema,
            fetch: fetch,
            shouldThrowOnError: shouldThrowOnError,
          } = {}
        ) {
          super({ fetch: fetch, shouldThrowOnError: shouldThrowOnError }),
            (this.url = new URL(url)),
            (this.headers = Object.assign({}, headers)),
            (this.schema = schema)
        }
        select(columns = '*', { head: head = !1, count: count = null } = {}) {
          this.method = 'GET'
          let quoted = !1
          const cleanedColumns = columns
            .split('')
            .map((c) =>
              /\s/.test(c) && !quoted
                ? ''
                : ('"' === c && (quoted = !quoted), c)
            )
            .join('')
          return (
            this.url.searchParams.set('select', cleanedColumns),
            count && (this.headers.Prefer = `count=${count}`),
            head && (this.method = 'HEAD'),
            new PostgrestFilterBuilder(this)
          )
        }
        insert(
          values,
          {
            upsert: upsert = !1,
            onConflict: onConflict,
            returning: returning = 'representation',
            count: count = null,
          } = {}
        ) {
          this.method = 'POST'
          const prefersHeaders = [`return=${returning}`]
          if (
            (upsert && prefersHeaders.push('resolution=merge-duplicates'),
            upsert &&
              void 0 !== onConflict &&
              this.url.searchParams.set('on_conflict', onConflict),
            (this.body = values),
            count && prefersHeaders.push(`count=${count}`),
            this.headers.Prefer && prefersHeaders.unshift(this.headers.Prefer),
            (this.headers.Prefer = prefersHeaders.join(',')),
            Array.isArray(values))
          ) {
            const columns = values.reduce(
              (acc, x) => acc.concat(Object.keys(x)),
              []
            )
            if (columns.length > 0) {
              const uniqueColumns = [...new Set(columns)].map(
                (column) => `"${column}"`
              )
              this.url.searchParams.set('columns', uniqueColumns.join(','))
            }
          }
          return new PostgrestFilterBuilder(this)
        }
        upsert(
          values,
          {
            onConflict: onConflict,
            returning: returning = 'representation',
            count: count = null,
            ignoreDuplicates: ignoreDuplicates = !1,
          } = {}
        ) {
          this.method = 'POST'
          const prefersHeaders = [
            `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`,
            `return=${returning}`,
          ]
          return (
            void 0 !== onConflict &&
              this.url.searchParams.set('on_conflict', onConflict),
            (this.body = values),
            count && prefersHeaders.push(`count=${count}`),
            this.headers.Prefer && prefersHeaders.unshift(this.headers.Prefer),
            (this.headers.Prefer = prefersHeaders.join(',')),
            new PostgrestFilterBuilder(this)
          )
        }
        update(
          values,
          { returning: returning = 'representation', count: count = null } = {}
        ) {
          this.method = 'PATCH'
          const prefersHeaders = [`return=${returning}`]
          return (
            (this.body = values),
            count && prefersHeaders.push(`count=${count}`),
            this.headers.Prefer && prefersHeaders.unshift(this.headers.Prefer),
            (this.headers.Prefer = prefersHeaders.join(',')),
            new PostgrestFilterBuilder(this)
          )
        }
        delete({
          returning: returning = 'representation',
          count: count = null,
        } = {}) {
          this.method = 'DELETE'
          const prefersHeaders = [`return=${returning}`]
          return (
            count && prefersHeaders.push(`count=${count}`),
            this.headers.Prefer && prefersHeaders.unshift(this.headers.Prefer),
            (this.headers.Prefer = prefersHeaders.join(',')),
            new PostgrestFilterBuilder(this)
          )
        }
      }
      class PostgrestRpcBuilder extends PostgrestBuilder {
        constructor(
          url,
          {
            headers: headers = {},
            schema: schema,
            fetch: fetch,
            shouldThrowOnError: shouldThrowOnError,
          } = {}
        ) {
          super({ fetch: fetch, shouldThrowOnError: shouldThrowOnError }),
            (this.url = new URL(url)),
            (this.headers = Object.assign({}, headers)),
            (this.schema = schema)
        }
        rpc(params, { head: head = !1, count: count = null } = {}) {
          return (
            head
              ? ((this.method = 'HEAD'),
                params &&
                  Object.entries(params).forEach(([name, value]) => {
                    this.url.searchParams.append(name, value)
                  }))
              : ((this.method = 'POST'), (this.body = params)),
            count &&
              (void 0 !== this.headers.Prefer
                ? (this.headers.Prefer += `,count=${count}`)
                : (this.headers.Prefer = `count=${count}`)),
            new PostgrestFilterBuilder(this)
          )
        }
      }
      const lib_constants_DEFAULT_HEADERS = {
        'X-Client-Info': 'postgrest-js/0.37.4',
      }
      class PostgrestClient {
        constructor(
          url,
          {
            headers: headers = {},
            schema: schema,
            fetch: fetch,
            throwOnError: throwOnError,
          } = {}
        ) {
          ;(this.url = url),
            (this.headers = Object.assign(
              Object.assign({}, lib_constants_DEFAULT_HEADERS),
              headers
            )),
            (this.schema = schema),
            (this.fetch = fetch),
            (this.shouldThrowOnError = throwOnError)
        }
        auth(token) {
          return (this.headers.Authorization = `Bearer ${token}`), this
        }
        from(table) {
          const url = `${this.url}/${table}`
          return new PostgrestQueryBuilder(url, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError,
          })
        }
        rpc(fn, params, { head: head = !1, count: count = null } = {}) {
          const url = `${this.url}/rpc/${fn}`
          return new PostgrestRpcBuilder(url, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError,
          }).rpc(params, { head: head, count: count })
        }
      }
      var PostgresTypes
      !(function (PostgresTypes) {
        ;(PostgresTypes.abstime = 'abstime'),
          (PostgresTypes.bool = 'bool'),
          (PostgresTypes.date = 'date'),
          (PostgresTypes.daterange = 'daterange'),
          (PostgresTypes.float4 = 'float4'),
          (PostgresTypes.float8 = 'float8'),
          (PostgresTypes.int2 = 'int2'),
          (PostgresTypes.int4 = 'int4'),
          (PostgresTypes.int4range = 'int4range'),
          (PostgresTypes.int8 = 'int8'),
          (PostgresTypes.int8range = 'int8range'),
          (PostgresTypes.json = 'json'),
          (PostgresTypes.jsonb = 'jsonb'),
          (PostgresTypes.money = 'money'),
          (PostgresTypes.numeric = 'numeric'),
          (PostgresTypes.oid = 'oid'),
          (PostgresTypes.reltime = 'reltime'),
          (PostgresTypes.text = 'text'),
          (PostgresTypes.time = 'time'),
          (PostgresTypes.timestamp = 'timestamp'),
          (PostgresTypes.timestamptz = 'timestamptz'),
          (PostgresTypes.timetz = 'timetz'),
          (PostgresTypes.tsrange = 'tsrange'),
          (PostgresTypes.tstzrange = 'tstzrange')
      })(PostgresTypes || (PostgresTypes = {}))
      const convertChangeData = (columns, record, options = {}) => {
          var _a
          const skipTypes =
            null !== (_a = options.skipTypes) && void 0 !== _a ? _a : []
          return Object.keys(record).reduce(
            (acc, rec_key) => (
              (acc[rec_key] = convertColumn(
                rec_key,
                columns,
                record,
                skipTypes
              )),
              acc
            ),
            {}
          )
        },
        convertColumn = (columnName, columns, record, skipTypes) => {
          const column = columns.find((x) => x.name === columnName),
            colType = null == column ? void 0 : column.type,
            value = record[columnName]
          return colType && !skipTypes.includes(colType)
            ? convertCell(colType, value)
            : noop(value)
        },
        convertCell = (type, value) => {
          if ('_' === type.charAt(0)) {
            const dataType = type.slice(1, type.length)
            return toArray(value, dataType)
          }
          switch (type) {
            case PostgresTypes.bool:
              return toBoolean(value)
            case PostgresTypes.float4:
            case PostgresTypes.float8:
            case PostgresTypes.int2:
            case PostgresTypes.int4:
            case PostgresTypes.int8:
            case PostgresTypes.numeric:
            case PostgresTypes.oid:
              return toNumber(value)
            case PostgresTypes.json:
            case PostgresTypes.jsonb:
              return toJson(value)
            case PostgresTypes.timestamp:
              return toTimestampString(value)
            case PostgresTypes.abstime:
            case PostgresTypes.date:
            case PostgresTypes.daterange:
            case PostgresTypes.int4range:
            case PostgresTypes.int8range:
            case PostgresTypes.money:
            case PostgresTypes.reltime:
            case PostgresTypes.text:
            case PostgresTypes.time:
            case PostgresTypes.timestamptz:
            case PostgresTypes.timetz:
            case PostgresTypes.tsrange:
            case PostgresTypes.tstzrange:
            default:
              return noop(value)
          }
        },
        noop = (value) => value,
        toBoolean = (value) => {
          switch (value) {
            case 't':
              return !0
            case 'f':
              return !1
            default:
              return value
          }
        },
        toNumber = (value) => {
          if ('string' == typeof value) {
            const parsedValue = parseFloat(value)
            if (!Number.isNaN(parsedValue)) return parsedValue
          }
          return value
        },
        toJson = (value) => {
          if ('string' == typeof value)
            try {
              return JSON.parse(value)
            } catch (error) {
              return console.log(`JSON parse error: ${error}`), value
            }
          return value
        },
        toArray = (value, type) => {
          if ('string' != typeof value) return value
          const lastIdx = value.length - 1,
            closeBrace = value[lastIdx]
          if ('{' === value[0] && '}' === closeBrace) {
            let arr
            const valTrim = value.slice(1, lastIdx)
            try {
              arr = JSON.parse('[' + valTrim + ']')
            } catch (_) {
              arr = valTrim ? valTrim.split(',') : []
            }
            return arr.map((val) => convertCell(type, val))
          }
          return value
        },
        toTimestampString = (value) =>
          'string' == typeof value ? value.replace(' ', 'T') : value
      var browser = __webpack_require__(
        '../../node_modules/websocket/lib/browser.js'
      )
      const module_lib_constants_DEFAULT_HEADERS = {
        'X-Client-Info': 'realtime-js/1.7.5',
      }
      var SOCKET_STATES,
        CHANNEL_STATES,
        CHANNEL_EVENTS,
        TRANSPORTS,
        CONNECTION_STATE
      !(function (SOCKET_STATES) {
        ;(SOCKET_STATES[(SOCKET_STATES.connecting = 0)] = 'connecting'),
          (SOCKET_STATES[(SOCKET_STATES.open = 1)] = 'open'),
          (SOCKET_STATES[(SOCKET_STATES.closing = 2)] = 'closing'),
          (SOCKET_STATES[(SOCKET_STATES.closed = 3)] = 'closed')
      })(SOCKET_STATES || (SOCKET_STATES = {})),
        (function (CHANNEL_STATES) {
          ;(CHANNEL_STATES.closed = 'closed'),
            (CHANNEL_STATES.errored = 'errored'),
            (CHANNEL_STATES.joined = 'joined'),
            (CHANNEL_STATES.joining = 'joining'),
            (CHANNEL_STATES.leaving = 'leaving')
        })(CHANNEL_STATES || (CHANNEL_STATES = {})),
        (function (CHANNEL_EVENTS) {
          ;(CHANNEL_EVENTS.close = 'phx_close'),
            (CHANNEL_EVENTS.error = 'phx_error'),
            (CHANNEL_EVENTS.join = 'phx_join'),
            (CHANNEL_EVENTS.reply = 'phx_reply'),
            (CHANNEL_EVENTS.leave = 'phx_leave'),
            (CHANNEL_EVENTS.access_token = 'access_token')
        })(CHANNEL_EVENTS || (CHANNEL_EVENTS = {})),
        (function (TRANSPORTS) {
          TRANSPORTS.websocket = 'websocket'
        })(TRANSPORTS || (TRANSPORTS = {})),
        (function (CONNECTION_STATE) {
          ;(CONNECTION_STATE.Connecting = 'connecting'),
            (CONNECTION_STATE.Open = 'open'),
            (CONNECTION_STATE.Closing = 'closing'),
            (CONNECTION_STATE.Closed = 'closed')
        })(CONNECTION_STATE || (CONNECTION_STATE = {}))
      class Timer {
        constructor(callback, timerCalc) {
          ;(this.callback = callback),
            (this.timerCalc = timerCalc),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = callback),
            (this.timerCalc = timerCalc)
        }
        reset() {
          ;(this.tries = 0), clearTimeout(this.timer)
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              ;(this.tries = this.tries + 1), this.callback()
            }, this.timerCalc(this.tries + 1)))
        }
      }
      class Serializer {
        constructor() {
          this.HEADER_LENGTH = 1
        }
        decode(rawPayload, callback) {
          return rawPayload.constructor === ArrayBuffer
            ? callback(this._binaryDecode(rawPayload))
            : callback(
                'string' == typeof rawPayload ? JSON.parse(rawPayload) : {}
              )
        }
        _binaryDecode(buffer) {
          const view = new DataView(buffer),
            decoder = new TextDecoder()
          return this._decodeBroadcast(buffer, view, decoder)
        }
        _decodeBroadcast(buffer, view, decoder) {
          const topicSize = view.getUint8(1),
            eventSize = view.getUint8(2)
          let offset = this.HEADER_LENGTH + 2
          const topic = decoder.decode(buffer.slice(offset, offset + topicSize))
          offset += topicSize
          const event = decoder.decode(buffer.slice(offset, offset + eventSize))
          offset += eventSize
          return {
            ref: null,
            topic: topic,
            event: event,
            payload: JSON.parse(
              decoder.decode(buffer.slice(offset, buffer.byteLength))
            ),
          }
        }
      }
      class Push {
        constructor(channel, event, payload = {}, timeout = 1e4) {
          ;(this.channel = channel),
            (this.event = event),
            (this.payload = payload),
            (this.timeout = timeout),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ''),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null)
        }
        resend(timeout) {
          ;(this.timeout = timeout),
            this._cancelRefEvent(),
            (this.ref = ''),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send()
        }
        send() {
          this._hasReceived('timeout') ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel.joinRef(),
            }))
        }
        updatePayload(payload) {
          this.payload = Object.assign(Object.assign({}, this.payload), payload)
        }
        receive(status, callback) {
          var _a
          return (
            this._hasReceived(status) &&
              callback(
                null === (_a = this.receivedResp) || void 0 === _a
                  ? void 0
                  : _a.response
              ),
            this.recHooks.push({ status: status, callback: callback }),
            this
          )
        }
        startTimeout() {
          if (this.timeoutTimer) return
          ;(this.ref = this.channel.socket.makeRef()),
            (this.refEvent = this.channel.replyEventName(this.ref))
          this.channel.on(this.refEvent, (payload) => {
            this._cancelRefEvent(),
              this._cancelTimeout(),
              (this.receivedResp = payload),
              this._matchReceive(payload)
          }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger('timeout', {})
            }, this.timeout))
        }
        trigger(status, response) {
          this.refEvent &&
            this.channel.trigger(this.refEvent, {
              status: status,
              response: response,
            })
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout()
        }
        _cancelRefEvent() {
          this.refEvent && this.channel.off(this.refEvent)
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0)
        }
        _matchReceive({ status: status, response: response }) {
          this.recHooks
            .filter((h) => h.status === status)
            .forEach((h) => h.callback(response))
        }
        _hasReceived(status) {
          return this.receivedResp && this.receivedResp.status === status
        }
      }
      class RealtimeSubscription {
        constructor(topic, params = {}, socket) {
          ;(this.topic = topic),
            (this.params = params),
            (this.socket = socket),
            (this.bindings = []),
            (this.state = CHANNEL_STATES.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new Push(
              this,
              CHANNEL_EVENTS.join,
              this.params,
              this.timeout
            )),
            (this.rejoinTimer = new Timer(
              () => this.rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive('ok', () => {
              ;(this.state = CHANNEL_STATES.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((pushEvent) => pushEvent.send()),
                (this.pushBuffer = [])
            }),
            this.onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  'channel',
                  `close ${this.topic} ${this.joinRef()}`
                ),
                (this.state = CHANNEL_STATES.closed),
                this.socket.remove(this)
            }),
            this.onError((reason) => {
              this.isLeaving() ||
                this.isClosed() ||
                (this.socket.log('channel', `error ${this.topic}`, reason),
                (this.state = CHANNEL_STATES.errored),
                this.rejoinTimer.scheduleTimeout())
            }),
            this.joinPush.receive('timeout', () => {
              this.isJoining() &&
                (this.socket.log(
                  'channel',
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = CHANNEL_STATES.errored),
                this.rejoinTimer.scheduleTimeout())
            }),
            this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
              this.trigger(this.replyEventName(ref), payload)
            })
        }
        rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this.rejoin()
        }
        subscribe(timeout = this.timeout) {
          if (this.joinedOnce)
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"
          return (this.joinedOnce = !0), this.rejoin(timeout), this.joinPush
        }
        onClose(callback) {
          this.on(CHANNEL_EVENTS.close, callback)
        }
        onError(callback) {
          this.on(CHANNEL_EVENTS.error, (reason) => callback(reason))
        }
        on(event, callback) {
          this.bindings.push({ event: event, callback: callback })
        }
        off(event) {
          this.bindings = this.bindings.filter((bind) => bind.event !== event)
        }
        canPush() {
          return this.socket.isConnected() && this.isJoined()
        }
        push(event, payload, timeout = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`
          let pushEvent = new Push(this, event, payload, timeout)
          return (
            this.canPush()
              ? pushEvent.send()
              : (pushEvent.startTimeout(), this.pushBuffer.push(pushEvent)),
            pushEvent
          )
        }
        updateJoinPayload(payload) {
          this.joinPush.updatePayload(payload)
        }
        unsubscribe(timeout = this.timeout) {
          this.state = CHANNEL_STATES.leaving
          let onClose = () => {
            this.socket.log('channel', `leave ${this.topic}`),
              this.trigger(CHANNEL_EVENTS.close, 'leave', this.joinRef())
          }
          this.joinPush.destroy()
          let leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout)
          return (
            leavePush
              .receive('ok', () => onClose())
              .receive('timeout', () => onClose()),
            leavePush.send(),
            this.canPush() || leavePush.trigger('ok', {}),
            leavePush
          )
        }
        onMessage(event, payload, ref) {
          return payload
        }
        isMember(topic) {
          return this.topic === topic
        }
        joinRef() {
          return this.joinPush.ref
        }
        rejoin(timeout = this.timeout) {
          this.isLeaving() ||
            (this.socket.leaveOpenTopic(this.topic),
            (this.state = CHANNEL_STATES.joining),
            this.joinPush.resend(timeout))
        }
        trigger(event, payload, ref) {
          let {
            close: close,
            error: error,
            leave: leave,
            join: join,
          } = CHANNEL_EVENTS
          if (
            ref &&
            [close, error, leave, join].indexOf(event) >= 0 &&
            ref !== this.joinRef()
          )
            return
          let handledPayload = this.onMessage(event, payload, ref)
          if (payload && !handledPayload)
            throw 'channel onMessage callbacks must return the payload, modified or unmodified'
          this.bindings
            .filter((bind) =>
              '*' === bind.event
                ? event === (null == payload ? void 0 : payload.type)
                : bind.event === event
            )
            .map((bind) => bind.callback(handledPayload, ref))
        }
        replyEventName(ref) {
          return `chan_reply_${ref}`
        }
        isClosed() {
          return this.state === CHANNEL_STATES.closed
        }
        isErrored() {
          return this.state === CHANNEL_STATES.errored
        }
        isJoined() {
          return this.state === CHANNEL_STATES.joined
        }
        isJoining() {
          return this.state === CHANNEL_STATES.joining
        }
        isLeaving() {
          return this.state === CHANNEL_STATES.leaving
        }
      }
      var RealtimeClient_awaiter = function (
        thisArg,
        _arguments,
        P,
        generator
      ) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      const RealtimeClient_noop = () => {}
      class RealtimeClient {
        constructor(endPoint, options) {
          ;(this.accessToken = null),
            (this.channels = []),
            (this.endPoint = ''),
            (this.headers = module_lib_constants_DEFAULT_HEADERS),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.transport = browser.w3cwebsocket),
            (this.heartbeatIntervalMs = 3e4),
            (this.longpollerTimeout = 2e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = RealtimeClient_noop),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new Serializer()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`),
            (null == options ? void 0 : options.params) &&
              (this.params = options.params),
            (null == options ? void 0 : options.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                options.headers
              )),
            (null == options ? void 0 : options.timeout) &&
              (this.timeout = options.timeout),
            (null == options ? void 0 : options.logger) &&
              (this.logger = options.logger),
            (null == options ? void 0 : options.transport) &&
              (this.transport = options.transport),
            (null == options ? void 0 : options.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = options.heartbeatIntervalMs),
            (null == options ? void 0 : options.longpollerTimeout) &&
              (this.longpollerTimeout = options.longpollerTimeout),
            (this.reconnectAfterMs = (
              null == options ? void 0 : options.reconnectAfterMs
            )
              ? options.reconnectAfterMs
              : (tries) => [1e3, 2e3, 5e3, 1e4][tries - 1] || 1e4),
            (this.encode = (null == options ? void 0 : options.encode)
              ? options.encode
              : (payload, callback) => callback(JSON.stringify(payload))),
            (this.decode = (null == options ? void 0 : options.decode)
              ? options.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new Timer(
              () =>
                RealtimeClient_awaiter(this, void 0, void 0, function* () {
                  yield this.disconnect(), this.connect()
                }),
              this.reconnectAfterMs
            ))
        }
        connect() {
          this.conn ||
            ((this.conn = new this.transport(
              this.endPointURL(),
              [],
              null,
              this.headers
            )),
            this.conn &&
              ((this.conn.binaryType = 'arraybuffer'),
              (this.conn.onopen = () => this._onConnOpen()),
              (this.conn.onerror = (error) => this._onConnError(error)),
              (this.conn.onmessage = (event) => this.onConnMessage(event)),
              (this.conn.onclose = (event) => this._onConnClose(event))))
        }
        disconnect(code, reason) {
          return new Promise((resolve, _reject) => {
            try {
              this.conn &&
                ((this.conn.onclose = function () {}),
                code ? this.conn.close(code, reason || '') : this.conn.close(),
                (this.conn = null),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.reset()),
                resolve({ error: null, data: !0 })
            } catch (error) {
              resolve({ error: error, data: !1 })
            }
          })
        }
        log(kind, msg, data) {
          this.logger(kind, msg, data)
        }
        onOpen(callback) {
          this.stateChangeCallbacks.open.push(callback)
        }
        onClose(callback) {
          this.stateChangeCallbacks.close.push(callback)
        }
        onError(callback) {
          this.stateChangeCallbacks.error.push(callback)
        }
        onMessage(callback) {
          this.stateChangeCallbacks.message.push(callback)
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case SOCKET_STATES.connecting:
              return CONNECTION_STATE.Connecting
            case SOCKET_STATES.open:
              return CONNECTION_STATE.Open
            case SOCKET_STATES.closing:
              return CONNECTION_STATE.Closing
            default:
              return CONNECTION_STATE.Closed
          }
        }
        isConnected() {
          return this.connectionState() === CONNECTION_STATE.Open
        }
        remove(channel) {
          this.channels = this.channels.filter(
            (c) => c.joinRef() !== channel.joinRef()
          )
        }
        channel(topic, chanParams = {}) {
          const chan = new RealtimeSubscription(topic, chanParams, this)
          return this.channels.push(chan), chan
        }
        push(data) {
          const {
            topic: topic,
            event: event,
            payload: payload,
            ref: ref,
          } = data
          let callback = () => {
            this.encode(data, (result) => {
              var _a
              null === (_a = this.conn) || void 0 === _a || _a.send(result)
            })
          }
          this.log('push', `${topic} ${event} (${ref})`, payload),
            this.isConnected() ? callback() : this.sendBuffer.push(callback)
        }
        onConnMessage(rawMessage) {
          this.decode(rawMessage.data, (msg) => {
            let { topic: topic, event: event, payload: payload, ref: ref } = msg
            ;((ref && ref === this.pendingHeartbeatRef) ||
              event === (null == payload ? void 0 : payload.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                'receive',
                `${payload.status || ''} ${topic} ${event} ${
                  (ref && '(' + ref + ')') || ''
                }`,
                payload
              ),
              this.channels
                .filter((channel) => channel.isMember(topic))
                .forEach((channel) => channel.trigger(event, payload, ref)),
              this.stateChangeCallbacks.message.forEach((callback) =>
                callback(msg)
              )
          })
        }
        endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: '1.0.0' })
          )
        }
        makeRef() {
          let newRef = this.ref + 1
          return (
            newRef === this.ref ? (this.ref = 0) : (this.ref = newRef),
            this.ref.toString()
          )
        }
        setAuth(token) {
          ;(this.accessToken = token),
            this.channels.forEach((channel) => {
              token && channel.updateJoinPayload({ user_token: token }),
                channel.joinedOnce &&
                  channel.isJoined() &&
                  channel.push(CHANNEL_EVENTS.access_token, {
                    access_token: token,
                  })
            })
        }
        leaveOpenTopic(topic) {
          let dupChannel = this.channels.find(
            (c) => c.topic === topic && (c.isJoined() || c.isJoining())
          )
          dupChannel &&
            (this.log('transport', `leaving duplicate topic "${topic}"`),
            dupChannel.unsubscribe())
        }
        _onConnOpen() {
          this.log('transport', `connected to ${this.endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((callback) => callback())
        }
        _onConnClose(event) {
          this.log('transport', 'close', event),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((callback) =>
              callback(event)
            )
        }
        _onConnError(error) {
          this.log('transport', error.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((callback) =>
              callback(error)
            )
        }
        _triggerChanError() {
          this.channels.forEach((channel) =>
            channel.trigger(CHANNEL_EVENTS.error)
          )
        }
        _appendParams(url, params) {
          if (0 === Object.keys(params).length) return url
          const prefix = url.match(/\?/) ? '&' : '?'
          return `${url}${prefix}${new URLSearchParams(params)}`
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((callback) => callback()),
            (this.sendBuffer = []))
        }
        _sendHeartbeat() {
          var _a
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef)
              return (
                (this.pendingHeartbeatRef = null),
                this.log(
                  'transport',
                  'heartbeat timeout. Attempting to re-establish connection'
                ),
                void (
                  null === (_a = this.conn) ||
                  void 0 === _a ||
                  _a.close(1e3, 'hearbeat timeout')
                )
              )
            ;(this.pendingHeartbeatRef = this.makeRef()),
              this.push({
                topic: 'phoenix',
                event: 'heartbeat',
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken)
          }
        }
      }
      class SupabaseRealtimeClient {
        constructor(socket, headers, schema, tableName) {
          const chanParams = {},
            topic =
              '*' === tableName
                ? `realtime:${schema}`
                : `realtime:${schema}:${tableName}`,
            userToken = headers.Authorization.split(' ')[1]
          userToken && (chanParams.user_token = userToken),
            (this.subscription = socket.channel(topic, chanParams))
        }
        getPayloadRecords(payload) {
          const records = { new: {}, old: {} }
          return (
            ('INSERT' !== payload.type && 'UPDATE' !== payload.type) ||
              (records.new = convertChangeData(
                payload.columns,
                payload.record
              )),
            ('UPDATE' !== payload.type && 'DELETE' !== payload.type) ||
              (records.old = convertChangeData(
                payload.columns,
                payload.old_record
              )),
            records
          )
        }
        on(event, callback) {
          return (
            this.subscription.on(event, (payload) => {
              let enrichedPayload = {
                schema: payload.schema,
                table: payload.table,
                commit_timestamp: payload.commit_timestamp,
                eventType: payload.type,
                new: {},
                old: {},
                errors: payload.errors,
              }
              ;(enrichedPayload = Object.assign(
                Object.assign({}, enrichedPayload),
                this.getPayloadRecords(payload)
              )),
                callback(enrichedPayload)
            }),
            this
          )
        }
        subscribe(callback = () => {}) {
          return (
            this.subscription.onError((e) => callback('SUBSCRIPTION_ERROR', e)),
            this.subscription.onClose(() => callback('CLOSED')),
            this.subscription
              .subscribe()
              .receive('ok', () => callback('SUBSCRIBED'))
              .receive('error', (e) => callback('SUBSCRIPTION_ERROR', e))
              .receive('timeout', () => callback('RETRYING_AFTER_TIMEOUT')),
            this.subscription
          )
        }
      }
      class SupabaseQueryBuilder extends PostgrestQueryBuilder {
        constructor(
          url,
          {
            headers: headers = {},
            schema: schema,
            realtime: realtime,
            table: table,
            fetch: fetch,
            shouldThrowOnError: shouldThrowOnError,
          }
        ) {
          super(url, {
            headers: headers,
            schema: schema,
            fetch: fetch,
            shouldThrowOnError: shouldThrowOnError,
          }),
            (this._subscription = null),
            (this._realtime = realtime),
            (this._headers = headers),
            (this._schema = schema),
            (this._table = table)
        }
        on(event, callback) {
          return (
            this._realtime.isConnected() || this._realtime.connect(),
            this._subscription ||
              (this._subscription = new SupabaseRealtimeClient(
                this._realtime,
                this._headers,
                this._schema,
                this._table
              )),
            this._subscription.on(event, callback)
          )
        }
      }
      const dist_module_lib_constants_DEFAULT_HEADERS = {
        'X-Client-Info': 'storage-js/1.7.3',
      }
      var fetch_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      const fetch_getErrorMessage = (err) =>
          err.msg ||
          err.message ||
          err.error_description ||
          err.error ||
          JSON.stringify(err),
        fetch_handleError = (error, reject) => {
          if ('function' != typeof error.json) return reject(error)
          error.json().then((err) =>
            reject({
              message: fetch_getErrorMessage(err),
              status: (null == error ? void 0 : error.status) || 500,
            })
          )
        },
        fetch_getRequestParams = (method, options, parameters, body) => {
          const params = {
            method: method,
            headers: (null == options ? void 0 : options.headers) || {},
          }
          return 'GET' === method
            ? params
            : ((params.headers = Object.assign(
                { 'Content-Type': 'application/json' },
                null == options ? void 0 : options.headers
              )),
              (params.body = JSON.stringify(body)),
              Object.assign(Object.assign({}, params), parameters))
        }
      function fetch_handleRequest(
        fetcher,
        method,
        url,
        options,
        parameters,
        body
      ) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            fetcher(
              url,
              fetch_getRequestParams(method, options, parameters, body)
            )
              .then((result) => {
                if (!result.ok) throw result
                return (null == options ? void 0 : options.noResolveJson)
                  ? resolve(result)
                  : result.json()
              })
              .then((data) => resolve(data))
              .catch((error) => fetch_handleError(error, reject))
          })
        })
      }
      function fetch_get(fetcher, url, options, parameters) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return fetch_handleRequest(fetcher, 'GET', url, options, parameters)
        })
      }
      function fetch_post(fetcher, url, body, options, parameters) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return fetch_handleRequest(
            fetcher,
            'POST',
            url,
            options,
            parameters,
            body
          )
        })
      }
      function fetch_remove(fetcher, url, body, options, parameters) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return fetch_handleRequest(
            fetcher,
            'DELETE',
            url,
            options,
            parameters,
            body
          )
        })
      }
      var lib_helpers_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      const helpers_resolveFetch = (customFetch) => {
        let _fetch
        return (
          (_fetch =
            customFetch ||
            ('undefined' == typeof fetch
              ? (...args) =>
                  lib_helpers_awaiter(void 0, void 0, void 0, function* () {
                    return yield (yield __webpack_require__
                      .e(6279)
                      .then(
                        __webpack_require__.t.bind(
                          __webpack_require__,
                          '../../node_modules/cross-fetch/dist/browser-ponyfill.js',
                          23
                        )
                      )).fetch(...args)
                  })
              : fetch)),
          (...args) => _fetch(...args)
        )
      }
      var StorageBucketApi_awaiter = function (
        thisArg,
        _arguments,
        P,
        generator
      ) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      class StorageBucketApi {
        constructor(url, headers = {}, fetch) {
          ;(this.url = url),
            (this.headers = Object.assign(
              Object.assign({}, dist_module_lib_constants_DEFAULT_HEADERS),
              headers
            )),
            (this.fetch = helpers_resolveFetch(fetch))
        }
        listBuckets() {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fetch_get(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
                }),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        getBucket(id) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fetch_get(this.fetch, `${this.url}/bucket/${id}`, {
                  headers: this.headers,
                }),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        createBucket(id, options = { public: !1 }) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: (yield fetch_post(
                  this.fetch,
                  `${this.url}/bucket`,
                  { id: id, name: id, public: options.public },
                  { headers: this.headers }
                )).name,
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        updateBucket(id, options) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              const data = yield (function fetch_put(
                fetcher,
                url,
                body,
                options,
                parameters
              ) {
                return fetch_awaiter(this, void 0, void 0, function* () {
                  return fetch_handleRequest(
                    fetcher,
                    'PUT',
                    url,
                    options,
                    parameters,
                    body
                  )
                })
              })(
                this.fetch,
                `${this.url}/bucket/${id}`,
                { id: id, name: id, public: options.public },
                { headers: this.headers }
              )
              return { data: data, error: null }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        emptyBucket(id) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fetch_post(
                  this.fetch,
                  `${this.url}/bucket/${id}/empty`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        deleteBucket(id) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fetch_remove(
                  this.fetch,
                  `${this.url}/bucket/${id}`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
      }
      var StorageFileApi_awaiter = function (
        thisArg,
        _arguments,
        P,
        generator
      ) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      const DEFAULT_SEARCH_OPTIONS = {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        },
        DEFAULT_FILE_OPTIONS = {
          cacheControl: '3600',
          contentType: 'text/plain;charset=UTF-8',
          upsert: !1,
        }
      class StorageFileApi {
        constructor(url, headers = {}, bucketId, fetch) {
          ;(this.url = url),
            (this.headers = headers),
            (this.bucketId = bucketId),
            (this.fetch = helpers_resolveFetch(fetch))
        }
        uploadOrUpdate(method, path, fileBody, fileOptions) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let body
              const options = Object.assign(
                  Object.assign({}, DEFAULT_FILE_OPTIONS),
                  fileOptions
                ),
                headers = Object.assign(
                  Object.assign({}, this.headers),
                  'POST' === method && { 'x-upsert': String(options.upsert) }
                )
              'undefined' != typeof Blob && fileBody instanceof Blob
                ? ((body = new FormData()),
                  body.append('cacheControl', options.cacheControl),
                  body.append('', fileBody))
                : 'undefined' != typeof FormData && fileBody instanceof FormData
                ? ((body = fileBody),
                  body.append('cacheControl', options.cacheControl))
                : ((body = fileBody),
                  (headers[
                    'cache-control'
                  ] = `max-age=${options.cacheControl}`),
                  (headers['content-type'] = options.contentType))
              const cleanPath = this._removeEmptyFolders(path),
                _path = this._getFinalPath(cleanPath),
                res = yield this.fetch(`${this.url}/object/${_path}`, {
                  method: method,
                  body: body,
                  headers: headers,
                })
              if (res.ok) return { data: { Key: _path }, error: null }
              return { data: null, error: yield res.json() }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        upload(path, fileBody, fileOptions) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate('POST', path, fileBody, fileOptions)
          })
        }
        update(path, fileBody, fileOptions) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate('PUT', path, fileBody, fileOptions)
          })
        }
        move(fromPath, toPath) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fetch_post(
                  this.fetch,
                  `${this.url}/object/move`,
                  {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                  },
                  { headers: this.headers }
                ),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        copy(fromPath, toPath) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fetch_post(
                  this.fetch,
                  `${this.url}/object/copy`,
                  {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                  },
                  { headers: this.headers }
                ),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        createSignedUrl(path, expiresIn) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              const _path = this._getFinalPath(path)
              let data = yield fetch_post(
                this.fetch,
                `${this.url}/object/sign/${_path}`,
                { expiresIn: expiresIn },
                { headers: this.headers }
              )
              const signedURL = `${this.url}${data.signedURL}`
              return (
                (data = { signedURL: signedURL }),
                { data: data, error: null, signedURL: signedURL }
              )
            } catch (error) {
              return { data: null, error: error, signedURL: null }
            }
          })
        }
        createSignedUrls(paths, expiresIn) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: (yield fetch_post(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: expiresIn, paths: paths },
                  { headers: this.headers }
                )).map((datum) =>
                  Object.assign(Object.assign({}, datum), {
                    signedURL: datum.signedURL
                      ? `${this.url}${datum.signedURL}`
                      : null,
                  })
                ),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        download(path) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              const _path = this._getFinalPath(path),
                res = yield fetch_get(
                  this.fetch,
                  `${this.url}/object/${_path}`,
                  { headers: this.headers, noResolveJson: !0 }
                )
              return { data: yield res.blob(), error: null }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        getPublicUrl(path) {
          try {
            const _path = this._getFinalPath(path),
              publicURL = `${this.url}/object/public/${_path}`
            return {
              data: { publicURL: publicURL },
              error: null,
              publicURL: publicURL,
            }
          } catch (error) {
            return { data: null, error: error, publicURL: null }
          }
        }
        remove(paths) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fetch_remove(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  { prefixes: paths },
                  { headers: this.headers }
                ),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        list(path, options, parameters) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              const body = Object.assign(
                Object.assign(
                  Object.assign({}, DEFAULT_SEARCH_OPTIONS),
                  options
                ),
                { prefix: path || '' }
              )
              return {
                data: yield fetch_post(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  body,
                  { headers: this.headers },
                  parameters
                ),
                error: null,
              }
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
        _getFinalPath(path) {
          return `${this.bucketId}/${path}`
        }
        _removeEmptyFolders(path) {
          return path.replace(/^\/|\/$/g, '').replace(/\/+/g, '/')
        }
      }
      class StorageClient extends StorageBucketApi {
        constructor(url, headers = {}, fetch) {
          super(url, headers, fetch)
        }
        from(id) {
          return new StorageFileApi(this.url, this.headers, id, this.fetch)
        }
      }
      var helper_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      var module_awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      class FunctionsClient {
        constructor(
          url,
          { headers: headers = {}, customFetch: customFetch } = {}
        ) {
          ;(this.url = url),
            (this.headers = headers),
            (this.fetch = ((customFetch) => {
              let _fetch
              return (
                (_fetch =
                  customFetch ||
                  ('undefined' == typeof fetch
                    ? (...args) =>
                        helper_awaiter(void 0, void 0, void 0, function* () {
                          return yield (yield __webpack_require__
                            .e(6279)
                            .then(
                              __webpack_require__.t.bind(
                                __webpack_require__,
                                '../../node_modules/cross-fetch/dist/browser-ponyfill.js',
                                23
                              )
                            )).fetch(...args)
                        })
                    : fetch)),
                (...args) => _fetch(...args)
              )
            })(customFetch))
        }
        setAuth(token) {
          this.headers.Authorization = `Bearer ${token}`
        }
        invoke(functionName, invokeOptions) {
          return module_awaiter(this, void 0, void 0, function* () {
            try {
              const { headers: headers, body: body } =
                  null != invokeOptions ? invokeOptions : {},
                response = yield this.fetch(`${this.url}/${functionName}`, {
                  method: 'POST',
                  headers: Object.assign({}, this.headers, headers),
                  body: body,
                }),
                isRelayError = response.headers.get('x-relay-error')
              if (isRelayError && 'true' === isRelayError)
                return { data: null, error: new Error(yield response.text()) }
              let data
              const { responseType: responseType } =
                null != invokeOptions ? invokeOptions : {}
              return (
                (data =
                  responseType && 'json' !== responseType
                    ? 'arrayBuffer' === responseType
                      ? yield response.arrayBuffer()
                      : 'blob' === responseType
                      ? yield response.blob()
                      : yield response.text()
                    : yield response.json()),
                { data: data, error: null }
              )
            } catch (error) {
              return { data: null, error: error }
            }
          })
        }
      }
      var SupabaseClient_awaiter = function (
        thisArg,
        _arguments,
        P,
        generator
      ) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : (function adopt(value) {
                  return value instanceof P
                    ? value
                    : new P(function (resolve) {
                        resolve(value)
                      })
                })(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
      const SupabaseClient_DEFAULT_OPTIONS = {
        schema: 'public',
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        multiTab: !0,
        headers: DEFAULT_HEADERS,
      }
      class SupabaseClient {
        constructor(supabaseUrl, supabaseKey, options) {
          if (
            ((this.supabaseUrl = supabaseUrl),
            (this.supabaseKey = supabaseKey),
            !supabaseUrl)
          )
            throw new Error('supabaseUrl is required.')
          if (!supabaseKey) throw new Error('supabaseKey is required.')
          const _supabaseUrl = (function stripTrailingSlash(url) {
              return url.replace(/\/$/, '')
            })(supabaseUrl),
            settings = Object.assign(
              Object.assign({}, SupabaseClient_DEFAULT_OPTIONS),
              options
            )
          ;(this.restUrl = `${_supabaseUrl}/rest/v1`),
            (this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace(
              'http',
              'ws'
            )),
            (this.authUrl = `${_supabaseUrl}/auth/v1`),
            (this.storageUrl = `${_supabaseUrl}/storage/v1`)
          if (_supabaseUrl.match(/(supabase\.co)|(supabase\.in)/)) {
            const urlParts = _supabaseUrl.split('.')
            this.functionsUrl = `${urlParts[0]}.functions.${urlParts[1]}.${urlParts[2]}`
          } else this.functionsUrl = `${_supabaseUrl}/functions/v1`
          ;(this.schema = settings.schema),
            (this.multiTab = settings.multiTab),
            (this.fetch = settings.fetch),
            (this.headers = Object.assign(
              Object.assign({}, DEFAULT_HEADERS),
              null == options ? void 0 : options.headers
            )),
            (this.shouldThrowOnError = settings.shouldThrowOnError || !1),
            (this.auth = this._initSupabaseAuthClient(settings)),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, settings.realtime)
            )),
            this._listenForAuthEvents(),
            this._listenForMultiTabEvents()
        }
        get functions() {
          return new FunctionsClient(this.functionsUrl, {
            headers: this._getAuthHeaders(),
            customFetch: this.fetch,
          })
        }
        get storage() {
          return new StorageClient(
            this.storageUrl,
            this._getAuthHeaders(),
            this.fetch
          )
        }
        from(table) {
          const url = `${this.restUrl}/${table}`
          return new SupabaseQueryBuilder(url, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            realtime: this.realtime,
            table: table,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError,
          })
        }
        rpc(fn, params, { head: head = !1, count: count = null } = {}) {
          return this._initPostgRESTClient().rpc(fn, params, {
            head: head,
            count: count,
          })
        }
        removeAllSubscriptions() {
          return SupabaseClient_awaiter(this, void 0, void 0, function* () {
            const allSubs = this.getSubscriptions().slice(),
              allSubPromises = allSubs.map((sub) =>
                this.removeSubscription(sub)
              )
            return (yield Promise.all(allSubPromises)).map(
              ({ error: error }, i) => ({
                data: { subscription: allSubs[i] },
                error: error,
              })
            )
          })
        }
        removeSubscription(subscription) {
          return SupabaseClient_awaiter(this, void 0, void 0, function* () {
            const { error: error } = yield this._closeSubscription(
                subscription
              ),
              allSubs = this.getSubscriptions(),
              openSubCount = allSubs.filter((chan) => chan.isJoined()).length
            return (
              0 === allSubs.length && (yield this.realtime.disconnect()),
              { data: { openSubscriptions: openSubCount }, error: error }
            )
          })
        }
        _closeSubscription(subscription) {
          return SupabaseClient_awaiter(this, void 0, void 0, function* () {
            let error = null
            if (!subscription.isClosed()) {
              const { error: unsubError } = yield this._unsubscribeSubscription(
                subscription
              )
              error = unsubError
            }
            return this.realtime.remove(subscription), { error: error }
          })
        }
        _unsubscribeSubscription(subscription) {
          return new Promise((resolve) => {
            subscription
              .unsubscribe()
              .receive('ok', () => resolve({ error: null }))
              .receive('error', (error) => resolve({ error: error }))
              .receive('timeout', () =>
                resolve({ error: new Error('timed out') })
              )
          })
        }
        getSubscriptions() {
          return this.realtime.channels
        }
        _initSupabaseAuthClient({
          autoRefreshToken: autoRefreshToken,
          persistSession: persistSession,
          detectSessionInUrl: detectSessionInUrl,
          localStorage: localStorage,
          headers: headers,
          fetch: fetch,
          cookieOptions: cookieOptions,
          multiTab: multiTab,
        }) {
          const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          }
          return new SupabaseAuthClient({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, headers), authHeaders),
            autoRefreshToken: autoRefreshToken,
            persistSession: persistSession,
            detectSessionInUrl: detectSessionInUrl,
            localStorage: localStorage,
            fetch: fetch,
            cookieOptions: cookieOptions,
            multiTab: multiTab,
          })
        }
        _initRealtimeClient(options) {
          return new RealtimeClient(
            this.realtimeUrl,
            Object.assign(Object.assign({}, options), {
              params: Object.assign(
                Object.assign({}, null == options ? void 0 : options.params),
                { apikey: this.supabaseKey }
              ),
            })
          )
        }
        _initPostgRESTClient() {
          return new PostgrestClient(this.restUrl, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            fetch: this.fetch,
            throwOnError: this.shouldThrowOnError,
          })
        }
        _getAuthHeaders() {
          var _a, _b
          const headers = Object.assign({}, this.headers),
            authBearer =
              null !==
                (_b =
                  null === (_a = this.auth.session()) || void 0 === _a
                    ? void 0
                    : _a.access_token) && void 0 !== _b
                ? _b
                : this.supabaseKey
          return (
            (headers.apikey = this.supabaseKey),
            (headers.Authorization =
              headers.Authorization || `Bearer ${authBearer}`),
            headers
          )
        }
        _listenForMultiTabEvents() {
          if (
            !this.multiTab ||
            'undefined' == typeof window ||
            !(null === window || void 0 === window
              ? void 0
              : window.addEventListener)
          )
            return null
          try {
            return null === window || void 0 === window
              ? void 0
              : window.addEventListener('storage', (e) => {
                  var _a, _b, _c
                  if ('supabase.auth.token' === e.key) {
                    const newSession = JSON.parse(String(e.newValue)),
                      accessToken =
                        null !==
                          (_b =
                            null ===
                              (_a =
                                null == newSession
                                  ? void 0
                                  : newSession.currentSession) || void 0 === _a
                              ? void 0
                              : _a.access_token) && void 0 !== _b
                          ? _b
                          : void 0,
                      previousAccessToken =
                        null === (_c = this.auth.session()) || void 0 === _c
                          ? void 0
                          : _c.access_token
                    accessToken
                      ? !previousAccessToken && accessToken
                        ? this._handleTokenChanged(
                            'SIGNED_IN',
                            accessToken,
                            'STORAGE'
                          )
                        : previousAccessToken !== accessToken &&
                          this._handleTokenChanged(
                            'TOKEN_REFRESHED',
                            accessToken,
                            'STORAGE'
                          )
                      : this._handleTokenChanged(
                          'SIGNED_OUT',
                          accessToken,
                          'STORAGE'
                        )
                  }
                })
          } catch (error) {
            return console.error('_listenForMultiTabEvents', error), null
          }
        }
        _listenForAuthEvents() {
          let { data: data } = this.auth.onAuthStateChange((event, session) => {
            this._handleTokenChanged(
              event,
              null == session ? void 0 : session.access_token,
              'CLIENT'
            )
          })
          return data
        }
        _handleTokenChanged(event, token, source) {
          ;('TOKEN_REFRESHED' !== event && 'SIGNED_IN' !== event) ||
          this.changedAccessToken === token
            ? ('SIGNED_OUT' !== event && 'USER_DELETED' !== event) ||
              (this.realtime.setAuth(this.supabaseKey),
              'STORAGE' == source && this.auth.signOut())
            : (this.realtime.setAuth(token),
              'STORAGE' == source && this.auth.setAuth(token),
              (this.changedAccessToken = token))
        }
      }
      const createClient = (supabaseUrl, supabaseKey, options) =>
        new SupabaseClient(supabaseUrl, supabaseKey, options)
    },
    '../../node_modules/es5-ext/global.js': function (module) {
      var naiveFallback = function () {
        if ('object' == typeof self && self) return self
        if ('object' == typeof window && window) return window
        throw new Error('Unable to resolve global `this`')
      }
      module.exports = (function () {
        if (this) return this
        if ('object' == typeof globalThis && globalThis) return globalThis
        try {
          Object.defineProperty(Object.prototype, '__global__', {
            get: function () {
              return this
            },
            configurable: !0,
          })
        } catch (error) {
          return naiveFallback()
        }
        try {
          return __global__ || naiveFallback()
        } finally {
          delete Object.prototype.__global__
        }
      })()
    },
    '../../node_modules/react-feather/dist/icons/alert-circle.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
    '../../node_modules/react-feather/dist/icons/copy.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
    '../../node_modules/react-feather/dist/icons/inbox.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
      var Inbox = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('polyline', {
            points: '22 12 16 12 14 15 10 15 8 12 2 12',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
          })
        )
      })
      ;(Inbox.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Inbox.displayName = 'Inbox'),
        (__webpack_exports__.Z = Inbox)
    },
    '../../node_modules/react-feather/dist/icons/key.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
      var Key = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
            d: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
          })
        )
      })
      ;(Key.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Key.displayName = 'Key'),
        (__webpack_exports__.Z = Key)
    },
    '../../node_modules/react-feather/dist/icons/loader.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
    '../../node_modules/react-feather/dist/icons/lock.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
      var Lock = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
            x: '3',
            y: '11',
            width: '18',
            height: '11',
            rx: '2',
            ry: '2',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M7 11V7a5 5 0 0 1 10 0v4',
          })
        )
      })
      ;(Lock.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Lock.displayName = 'Lock'),
        (__webpack_exports__.Z = Lock)
    },
    '../../node_modules/react-feather/dist/icons/mail.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
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
      var Mail = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (
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
            d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('polyline', {
            points: '22,6 12,13 2,6',
          })
        )
      })
      ;(Mail.propTypes = {
        color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,
        ]),
      }),
        (Mail.displayName = 'Mail'),
        (__webpack_exports__.Z = Mail)
    },
    '../../node_modules/websocket/lib/browser.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var _globalThis
      if ('object' == typeof globalThis) _globalThis = globalThis
      else
        try {
          _globalThis = __webpack_require__(
            '../../node_modules/es5-ext/global.js'
          )
        } catch (error) {
        } finally {
          if (
            (_globalThis ||
              'undefined' == typeof window ||
              (_globalThis = window),
            !_globalThis)
          )
            throw new Error('Could not determine global this')
        }
      var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket,
        websocket_version = __webpack_require__(
          '../../node_modules/websocket/lib/version.js'
        )
      function W3CWebSocket(uri, protocols) {
        return protocols
          ? new NativeWebSocket(uri, protocols)
          : new NativeWebSocket(uri)
      }
      NativeWebSocket &&
        ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (prop) {
          Object.defineProperty(W3CWebSocket, prop, {
            get: function () {
              return NativeWebSocket[prop]
            },
          })
        }),
        (module.exports = {
          w3cwebsocket: NativeWebSocket ? W3CWebSocket : null,
          version: websocket_version,
        })
    },
    '../../node_modules/websocket/lib/version.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__(
        '../../node_modules/websocket/package.json'
      ).version
    },
    '../../node_modules/websocket/package.json': function (module) {
      'use strict'
      module.exports = { version: '1.0.34' }
    },
  },
])
