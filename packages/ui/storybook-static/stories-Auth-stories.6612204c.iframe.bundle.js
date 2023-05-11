'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [2053],
  {
    './src/stories/Auth.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ChangeViewState: function () {
            return ChangeViewState
          },
          Default: function () {
            return Default
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          allSocialAuth: function () {
            return allSocialAuth
          },
          colouredSocialAuth: function () {
            return colouredSocialAuth
          },
          default: function () {
            return Auth_stories
          },
          horizontalSocialAuth: function () {
            return horizontalSocialAuth
          },
          largeButtonSocialAuth: function () {
            return largeButtonSocialAuth
          },
          socialAuth: function () {
            return socialAuth
          },
          updatePassword: function () {
            return updatePassword
          },
        })
      var AuthIcons_namespaceObject = {}
      __webpack_require__.r(AuthIcons_namespaceObject),
        __webpack_require__.d(AuthIcons_namespaceObject, {
          apple: function () {
            return apple
          },
          azure: function () {
            return azure
          },
          bitbucket: function () {
            return bitbucket
          },
          discord: function () {
            return discord
          },
          facebook: function () {
            return facebook
          },
          github: function () {
            return github
          },
          gitlab: function () {
            return gitlab
          },
          google: function () {
            return google
          },
          twitch: function () {
            return twitch
          },
          twitter: function () {
            return twitter
          },
        })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        Space = __webpack_require__('./src/components/Space.tsx'),
        Typography = __webpack_require__(
          './src/components/Typography/Typography.tsx'
        ),
        Button = __webpack_require__('./src/components/Button.tsx'),
        Divider = __webpack_require__('./src/components/Divider.tsx'),
        Input = __webpack_require__('./src/components/Input/Input.tsx'),
        IconMail = __webpack_require__(
          './src/components/Icon/icons/IconMail/IconMail.tsx'
        ),
        key = __webpack_require__(
          '../../node_modules/react-feather/dist/icons/key.js'
        ),
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconKey(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: key.Z, ...props })
      }
      IconKey.displayName = 'IconKey'
      var IconKey_IconKey = IconKey
      try {
        ;(IconKey.displayName = 'IconKey'),
          (IconKey.__docgenInfo = {
            description: '',
            displayName: 'IconKey',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconKey/IconKey.tsx#IconKey'
            ] = {
              docgenInfo: IconKey.__docgenInfo,
              name: 'IconKey',
              path: 'src/components/Icon/icons/IconKey/IconKey.tsx#IconKey',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Checkbox = __webpack_require__('./src/components/Checkbox.tsx'),
        lock = __webpack_require__(
          '../../node_modules/react-feather/dist/icons/lock.js'
        )
      function IconLock(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: lock.Z, ...props })
      }
      IconLock.displayName = 'IconLock'
      var IconLock_IconLock = IconLock
      try {
        ;(IconLock.displayName = 'IconLock'),
          (IconLock.__docgenInfo = {
            description: '',
            displayName: 'IconLock',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconLock/IconLock.tsx#IconLock'
            ] = {
              docgenInfo: IconLock.__docgenInfo,
              name: 'IconLock',
              path: 'src/components/Icon/icons/IconLock/IconLock.tsx#IconLock',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var inbox = __webpack_require__(
        '../../node_modules/react-feather/dist/icons/inbox.js'
      )
      function IconInbox(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: inbox.Z, ...props })
      }
      IconInbox.displayName = 'IconInbox'
      var IconInbox_IconInbox = IconInbox
      try {
        ;(IconInbox.displayName = 'IconInbox'),
          (IconInbox.__docgenInfo = {
            description: '',
            displayName: 'IconInbox',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconInbox/IconInbox.tsx#IconInbox'
            ] = {
              docgenInfo: IconInbox.__docgenInfo,
              name: 'IconInbox',
              path: 'src/components/Icon/icons/IconInbox/IconInbox.tsx#IconInbox',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      const UserContext = (0, react.createContext)({
          user: null,
          session: null,
        }),
        Auth_UserContextProvider = (props) => {
          const { wesbittyOauth: wesbittyOauth } = props,
            [session, setSession] = (0, react.useState)(
              wesbittyOauth.auth.session()
            ),
            [user, setUser] = (0, react.useState)(session?.user ?? null)
          ;(0, react.useEffect)(() => {
            const { data: authListener } = wesbittyOauth.auth.onAuthStateChange(
              async (event, session) => {
                setSession(session), setUser(session?.user ?? null)
              }
            )
            return () => {
              authListener?.unsubscribe()
            }
          }, [])
          const value = { session: session, user: user }
          return (0, jsx_runtime.jsx)(UserContext.Provider, {
            value: value,
            ...props,
          })
        }
      Auth_UserContextProvider.displayName = 'UserContextProvider'
      try {
        ;(Auth_UserContextProvider.displayName = 'UserContextProvider'),
          (Auth_UserContextProvider.__docgenInfo = {
            description: '',
            displayName: 'UserContextProvider',
            props: {
              wesbittyOauth: {
                defaultValue: null,
                description: '',
                name: 'wesbittyOauth',
                required: !0,
                type: { name: 'SupabaseClient' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Shared/Context/Auth.tsx#UserContextProvider'
            ] = {
              docgenInfo: Auth_UserContextProvider.__docgenInfo,
              name: 'UserContextProvider',
              path: 'src/components/Shared/Context/Auth.tsx#UserContextProvider',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      const google = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'google',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 488 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z',
          }),
        })
      google.displayName = 'google'
      const facebook = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'facebook-square',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 448 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z',
          }),
        })
      facebook.displayName = 'facebook'
      const twitter = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'twitter',
          className: 'svg-inline--fa fa-twitter fa-w-16',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 512 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
          }),
        })
      twitter.displayName = 'twitter'
      const apple = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'apple',
          className: 'svg-inline--fa fa-apple fa-w-16',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 512 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z',
          }),
        })
      apple.displayName = 'apple'
      const github = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'github',
          className: 'svg-inline--fa fa-github fa-w-16',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 496 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
          }),
        })
      github.displayName = 'github'
      const gitlab = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'gitlab',
          className: 'svg-inline--fa fa-gitlab fa-w-16',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 512 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z',
          }),
        })
      gitlab.displayName = 'gitlab'
      const bitbucket = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'bitbucket',
          className: 'svg-inline--fa fa-bitbucket fa-w-16',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 512 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z',
          }),
        })
      bitbucket.displayName = 'bitbucket'
      const discord = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          height: 21,
          viewBox: '0 0 71 55',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, jsx_runtime.jsx)('g', {
            clipPath: 'url(#clip0)',
            children: (0, jsx_runtime.jsx)('path', {
              d: 'M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z',
              fill: 'currentColor',
            }),
          }),
        })
      discord.displayName = 'discord'
      const azure = () =>
        (0, jsx_runtime.jsxs)('svg', {
          width: 21,
          height: 21,
          viewBox: '0 0 96 96',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, jsx_runtime.jsxs)('defs', {
              children: [
                (0, jsx_runtime.jsxs)('linearGradient', {
                  id: 'e399c19f-b68f-429d-b176-18c2117ff73c',
                  x1: '-1032.172',
                  x2: '-1059.213',
                  y1: '145.312',
                  y2: '65.426',
                  gradientTransform: 'matrix(1 0 0 -1 1075 158)',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '0',
                      stopColor: '#fff',
                    }),
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '1',
                      stopColor: '#fff',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('linearGradient', {
                  id: 'ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15',
                  x1: '-1023.725',
                  x2: '-1029.98',
                  y1: '108.083',
                  y2: '105.968',
                  gradientTransform: 'matrix(1 0 0 -1 1075 158)',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '0',
                      stopOpacity: '.3',
                    }),
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '.071',
                      stopOpacity: '.2',
                    }),
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '.321',
                      stopOpacity: '.1',
                    }),
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '.623',
                      stopOpacity: '.05',
                    }),
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '1',
                      stopOpacity: '0',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('linearGradient', {
                  id: 'a7fee970-a784-4bb1-af8d-63d18e5f7db9',
                  x1: '-1027.165',
                  x2: '-997.482',
                  y1: '147.642',
                  y2: '68.561',
                  gradientTransform: 'matrix(1 0 0 -1 1075 158)',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '0',
                      stopColor: '#fff',
                    }),
                    (0, jsx_runtime.jsx)('stop', {
                      offset: '1',
                      stopColor: '#fff',
                    }),
                  ],
                }),
              ],
            }),
            (0, jsx_runtime.jsx)('path', {
              fill: 'url(#e399c19f-b68f-429d-b176-18c2117ff73c)',
              d: 'M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z',
            }),
            (0, jsx_runtime.jsx)('path', {
              fill: 'currentColor',
              d: 'M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.38z',
            }),
            (0, jsx_runtime.jsx)('path', {
              fill: 'currentColor',
              d: 'M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z',
            }),
            (0, jsx_runtime.jsx)('path', {
              fill: 'currentColor',
              d: 'M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z',
            }),
          ],
        })
      azure.displayName = 'azure'
      const twitch = () =>
        (0, jsx_runtime.jsx)('svg', {
          width: 21,
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fab',
          'data-icon': 'twitch',
          className: 'svg-inline--fa fa-twitch fa-w-16',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 512 512',
          children: (0, jsx_runtime.jsx)('path', {
            fill: 'currentColor',
            d: 'M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z',
          }),
        })
      twitch.displayName = 'twitch'
      var handler = __webpack_require__('./src/theme/handler.ts')
      const VIEWS = {
        SIGN_IN: 'sign_in',
        SIGN_UP: 'sign_up',
        FORGOTTEN_PASSWORD: 'forgotten_password',
        MAGIC_LINK: 'magic_link',
        UPDATE_PASSWORD: 'update_password',
      }
      function Auth(_ref) {
        let {
          wesbittyOauth: wesbittyOauth,
          className: className,
          style: style,
          socialLayout: socialLayout = 'vertical',
          socialColors: socialColors = !1,
          socialButtonSize: socialButtonSize = 'medium',
          providers: providers,
          view: view = 'sign_in',
          redirectTo: redirectTo,
          onlyThirdPartyProviders: onlyThirdPartyProviders = !1,
          magicLink: magicLink = !1,
        } = _ref
        const [authView, setAuthView] = (0, react.useState)(view),
          [defaultEmail, setDefaultEmail] = (0, react.useState)(''),
          [defaultPassword, setDefaultPassword] = (0, react.useState)(''),
          verticalSocialLayout = 'vertical' === socialLayout
        let containerClasses = [(0, handler.Z)('auth').base]
        className && containerClasses.push(className)
        const Container = (props) =>
          (0, jsx_runtime.jsx)('div', {
            className: containerClasses.join(' '),
            style: style,
            children: (0, jsx_runtime.jsxs)(Space.T, {
              size: 8,
              direction: 'vertical',
              children: [
                (0, jsx_runtime.jsx)(SocialAuth, {
                  wesbittyOauth: wesbittyOauth,
                  verticalSocialLayout: verticalSocialLayout,
                  providers: providers,
                  socialLayout: socialLayout,
                  socialButtonSize: socialButtonSize,
                  socialColors: socialColors,
                  redirectTo: redirectTo,
                  onlyThirdPartyProviders: onlyThirdPartyProviders,
                  magicLink: magicLink,
                }),
                !onlyThirdPartyProviders && props.children,
              ],
            }),
          })
        switch (
          ((0, react.useEffect)(() => {
            setAuthView(view)
          }, [view]),
          authView)
        ) {
          case VIEWS.SIGN_IN:
          case VIEWS.SIGN_UP:
            return (0, jsx_runtime.jsx)(Container, {
              children: (0, jsx_runtime.jsx)(EmailAuth, {
                id:
                  authView === VIEWS.SIGN_UP ? 'auth-sign-up' : 'auth-sign-in',
                wesbittyOauth: wesbittyOauth,
                authView: authView,
                setAuthView: setAuthView,
                defaultEmail: defaultEmail,
                defaultPassword: defaultPassword,
                setDefaultEmail: setDefaultEmail,
                setDefaultPassword: setDefaultPassword,
                redirectTo: redirectTo,
                magicLink: magicLink,
              }),
            })
          case VIEWS.FORGOTTEN_PASSWORD:
            return (0, jsx_runtime.jsx)(Container, {
              children: (0, jsx_runtime.jsx)(ForgottenPassword, {
                wesbittyOauth: wesbittyOauth,
                setAuthView: setAuthView,
                redirectTo: redirectTo,
              }),
            })
          case VIEWS.MAGIC_LINK:
            return (0, jsx_runtime.jsx)(Container, {
              children: (0, jsx_runtime.jsx)(MagicLink, {
                wesbittyOauth: wesbittyOauth,
                setAuthView: setAuthView,
                redirectTo: redirectTo,
              }),
            })
          case VIEWS.UPDATE_PASSWORD:
            return (0, jsx_runtime.jsx)(Container, {
              children: (0, jsx_runtime.jsx)(UpdatePassword, {
                wesbittyOauth: wesbittyOauth,
              }),
            })
          default:
            return null
        }
      }
      function SocialAuth(_ref2) {
        let {
          className: className,
          style: style,
          wesbittyOauth: wesbittyOauth,
          children: children,
          socialLayout: socialLayout = 'vertical',
          socialColors: socialColors = !1,
          socialButtonSize: socialButtonSize,
          providers: providers,
          verticalSocialLayout: verticalSocialLayout,
          redirectTo: redirectTo,
          onlyThirdPartyProviders: onlyThirdPartyProviders,
          magicLink: magicLink,
          ...props
        } = _ref2
        const buttonStyles = {
            azure: { backgroundColor: '#008AD7', color: 'white' },
            bitbucket: { backgroundColor: '#205081', color: 'white' },
            facebook: { backgroundColor: '#4267B2', color: 'white' },
            github: { backgroundColor: '#333', color: 'white' },
            gitlab: { backgroundColor: '#FC6D27', color: 'white' },
            google: { backgroundColor: '#ce4430', color: 'white' },
            twitter: { backgroundColor: '#1DA1F2', color: 'white' },
            apple: { backgroundColor: '#000', color: 'white' },
            discord: { backgroundColor: '#404fec', color: 'white' },
            twitch: { backgroundColor: '#9146ff', color: 'white' },
          },
          [loading, setLoading] = (0, react.useState)(!1),
          [error, setError] = (0, react.useState)('')
        let __styles = (0, handler.Z)('auth')
        return (0, jsx_runtime.jsx)(Space.T, {
          size: 8,
          direction: 'vertical',
          children:
            providers &&
            providers.length > 0 &&
            (0, jsx_runtime.jsxs)(react.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)(Space.T, {
                  size: 4,
                  direction: 'vertical',
                  children: [
                    (0, jsx_runtime.jsx)(Typography.Z.Text, {
                      type: 'secondary',
                      className: __styles.label,
                      children: 'Sign in with',
                    }),
                    (0, jsx_runtime.jsx)(Space.T, {
                      size: 2,
                      direction: socialLayout,
                      children: providers.map((provider) => {
                        const AuthIcon = AuthIcons_namespaceObject[provider]
                        return (0, jsx_runtime.jsx)(
                          'div',
                          {
                            style: verticalSocialLayout ? {} : { flexGrow: 1 },
                            children: (0, jsx_runtime.jsx)(Button.z, {
                              block: !0,
                              type: 'default',
                              shadow: !0,
                              size: socialButtonSize,
                              style: socialColors ? buttonStyles[provider] : {},
                              icon: (0, jsx_runtime.jsx)(AuthIcon, {}),
                              loading: loading,
                              onClick: () =>
                                (async (provider) => {
                                  setLoading(!0)
                                  const { error: error } =
                                    await wesbittyOauth.auth.signIn(
                                      { provider: provider },
                                      { redirectTo: redirectTo }
                                    )
                                  error && setError(error.message),
                                    setLoading(!1)
                                })(provider),
                              className: 'flex items-center',
                              children:
                                verticalSocialLayout &&
                                'Sign up with ' + provider,
                            }),
                          },
                          provider
                        )
                      }),
                    }),
                  ],
                }),
                !onlyThirdPartyProviders &&
                  (0, jsx_runtime.jsx)(Divider.i, {
                    children: 'or continue with',
                  }),
              ],
            }),
        })
      }
      function EmailAuth(_ref3) {
        let {
          authView: authView,
          defaultEmail: defaultEmail,
          defaultPassword: defaultPassword,
          id: id,
          setAuthView: setAuthView,
          setDefaultEmail: setDefaultEmail,
          setDefaultPassword: setDefaultPassword,
          wesbittyOauth: wesbittyOauth,
          redirectTo: redirectTo,
          magicLink: magicLink,
        } = _ref3
        const isMounted = (0, react.useRef)(!0),
          [email, setEmail] = (0, react.useState)(defaultEmail),
          [password, setPassword] = (0, react.useState)(defaultPassword),
          [rememberMe, setRememberMe] = (0, react.useState)(!1),
          [error, setError] = (0, react.useState)(''),
          [loading, setLoading] = (0, react.useState)(!1),
          [message, setMessage] = (0, react.useState)('')
        ;(0, react.useEffect)(
          () => (
            setEmail(defaultEmail),
            setPassword(defaultPassword),
            () => {
              isMounted.current = !1
            }
          ),
          [authView]
        )
        const handleViewChange = (newView) => {
          setDefaultEmail(email),
            setDefaultPassword(password),
            setAuthView(newView)
        }
        return (0, jsx_runtime.jsx)('form', {
          id: id,
          onSubmit: async (e) => {
            switch (
              (e.preventDefault(), setError(''), setLoading(!0), authView)
            ) {
              case 'sign_in':
                const { error: signInError } = await wesbittyOauth.auth.signIn(
                  { email: email, password: password },
                  { redirectTo: redirectTo }
                )
                signInError && setError(signInError.message)
                break
              case 'sign_up':
                const {
                  user: signUpUser,
                  session: signUpSession,
                  error: signUpError,
                } = await wesbittyOauth.auth.signUp(
                  { email: email, password: password },
                  { redirectTo: redirectTo }
                )
                signUpError
                  ? setError(signUpError.message)
                  : signUpUser &&
                    !signUpSession &&
                    setMessage('Check your email for the confirmation link.')
            }
            isMounted.current && setLoading(!1)
          },
          children: (0, jsx_runtime.jsxs)(Space.T, {
            size: 6,
            direction: 'vertical',
            children: [
              (0, jsx_runtime.jsxs)(Space.T, {
                size: 3,
                direction: 'vertical',
                children: [
                  (0, jsx_runtime.jsx)(Input.Z, {
                    label: 'Email address',
                    autoComplete: 'email',
                    defaultValue: email,
                    icon: (0, jsx_runtime.jsx)(IconMail.Z, {
                      size: 21,
                      stroke: '#666666',
                    }),
                    onChange: (e) => setEmail(e.target.value),
                  }),
                  (0, jsx_runtime.jsx)(Input.Z, {
                    label: 'Password',
                    type: 'password',
                    defaultValue: password,
                    autoComplete: 'current-password',
                    icon: (0, jsx_runtime.jsx)(IconKey_IconKey, {
                      size: 21,
                      stroke: '#666666',
                    }),
                    onChange: (e) => setPassword(e.target.value),
                  }),
                ],
              }),
              (0, jsx_runtime.jsxs)(Space.T, {
                direction: 'vertical',
                size: 6,
                children: [
                  (0, jsx_runtime.jsxs)(Space.T, {
                    style: { justifyContent: 'space-between' },
                    children: [
                      (0, jsx_runtime.jsx)(Checkbox.X, {
                        label: 'Remember me',
                        name: 'remember_me',
                        id: 'remember_me',
                        onChange: (value) =>
                          setRememberMe(value.target.checked),
                      }),
                      authView === VIEWS.SIGN_IN &&
                        (0, jsx_runtime.jsx)(Typography.Z.Link, {
                          href: '#auth-forgot-password',
                          onClick: (e) => {
                            e.preventDefault(),
                              setAuthView(VIEWS.FORGOTTEN_PASSWORD)
                          },
                          children: 'Forgot your password?',
                        }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    htmlType: 'submit',
                    type: 'primary',
                    size: 'large',
                    icon: (0, jsx_runtime.jsx)(IconLock_IconLock, { size: 21 }),
                    loading: loading,
                    block: !0,
                    children:
                      authView === VIEWS.SIGN_IN ? 'Sign in' : 'Sign up',
                  }),
                ],
              }),
              (0, jsx_runtime.jsxs)(Space.T, {
                direction: 'vertical',
                style: { textAlign: 'center' },
                children: [
                  authView === VIEWS.SIGN_IN &&
                    magicLink &&
                    (0, jsx_runtime.jsx)(Typography.Z.Link, {
                      href: '#auth-magic-link',
                      onClick: (e) => {
                        e.preventDefault(), setAuthView(VIEWS.MAGIC_LINK)
                      },
                      children: 'Sign in with magic link',
                    }),
                  authView === VIEWS.SIGN_IN
                    ? (0, jsx_runtime.jsx)(Typography.Z.Link, {
                        href: '#auth-sign-up',
                        onClick: (e) => {
                          e.preventDefault(), handleViewChange(VIEWS.SIGN_UP)
                        },
                        children: "Don't have an account? Sign up",
                      })
                    : (0, jsx_runtime.jsx)(Typography.Z.Link, {
                        href: '#auth-sign-in',
                        onClick: (e) => {
                          e.preventDefault(), handleViewChange(VIEWS.SIGN_IN)
                        },
                        children: 'Do you have an account? Sign in',
                      }),
                  message &&
                    (0, jsx_runtime.jsx)(Typography.Z.Text, {
                      children: message,
                    }),
                  error &&
                    (0, jsx_runtime.jsx)(Typography.Z.Text, {
                      type: 'danger',
                      children: error,
                    }),
                ],
              }),
            ],
          }),
        })
      }
      function MagicLink(_ref4) {
        let {
          setAuthView: setAuthView,
          wesbittyOauth: wesbittyOauth,
          redirectTo: redirectTo,
        } = _ref4
        const [email, setEmail] = (0, react.useState)(''),
          [error, setError] = (0, react.useState)(''),
          [message, setMessage] = (0, react.useState)(''),
          [loading, setLoading] = (0, react.useState)(!1)
        return (0, jsx_runtime.jsx)('form', {
          id: 'auth-magic-link',
          onSubmit: async (e) => {
            e.preventDefault(), setError(''), setMessage(''), setLoading(!0)
            const { error: error } = await wesbittyOauth.auth.signIn(
              { email: email },
              { redirectTo: redirectTo }
            )
            error
              ? setError(error.message)
              : setMessage('Check your email for the magic link'),
              setLoading(!1)
          },
          children: (0, jsx_runtime.jsxs)(Space.T, {
            size: 4,
            direction: 'vertical',
            children: [
              (0, jsx_runtime.jsxs)(Space.T, {
                size: 3,
                direction: 'vertical',
                children: [
                  (0, jsx_runtime.jsx)(Input.Z, {
                    label: 'Email address',
                    placeholder: 'Your email address',
                    icon: (0, jsx_runtime.jsx)(IconMail.Z, {
                      size: 21,
                      stroke: '#666666',
                    }),
                    onChange: (e) => setEmail(e.target.value),
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    block: !0,
                    size: 'large',
                    htmlType: 'submit',
                    icon: (0, jsx_runtime.jsx)(IconInbox_IconInbox, {
                      size: 21,
                    }),
                    loading: loading,
                    children: 'Send magic link',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Typography.Z.Link, {
                href: '#auth-sign-in',
                onClick: (e) => {
                  e.preventDefault(), setAuthView(VIEWS.SIGN_IN)
                },
                children: 'Sign in with password',
              }),
              message &&
                (0, jsx_runtime.jsx)(Typography.Z.Text, { children: message }),
              error &&
                (0, jsx_runtime.jsx)(Typography.Z.Text, {
                  type: 'danger',
                  children: error,
                }),
            ],
          }),
        })
      }
      function ForgottenPassword(_ref5) {
        let {
          setAuthView: setAuthView,
          wesbittyOauth: wesbittyOauth,
          redirectTo: redirectTo,
        } = _ref5
        const [email, setEmail] = (0, react.useState)(''),
          [error, setError] = (0, react.useState)(''),
          [message, setMessage] = (0, react.useState)(''),
          [loading, setLoading] = (0, react.useState)(!1)
        return (0, jsx_runtime.jsx)('form', {
          id: 'auth-forgot-password',
          onSubmit: async (e) => {
            e.preventDefault(), setError(''), setMessage(''), setLoading(!0)
            const { error: error } =
              await wesbittyOauth.auth.api.resetPasswordForEmail(email, {
                redirectTo: redirectTo,
              })
            error
              ? setError(error.message)
              : setMessage('Check your email for the password reset link'),
              setLoading(!1)
          },
          children: (0, jsx_runtime.jsxs)(Space.T, {
            size: 4,
            direction: 'vertical',
            children: [
              (0, jsx_runtime.jsxs)(Space.T, {
                size: 3,
                direction: 'vertical',
                children: [
                  (0, jsx_runtime.jsx)(Input.Z, {
                    label: 'Email address',
                    placeholder: 'Your email address',
                    icon: (0, jsx_runtime.jsx)(IconMail.Z, {
                      size: 21,
                      stroke: '#666666',
                    }),
                    onChange: (e) => setEmail(e.target.value),
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    block: !0,
                    size: 'large',
                    htmlType: 'submit',
                    icon: (0, jsx_runtime.jsx)(IconInbox_IconInbox, {
                      size: 21,
                    }),
                    loading: loading,
                    children: 'Send reset password instructions',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Typography.Z.Link, {
                href: '#auth-sign-in',
                onClick: (e) => {
                  e.preventDefault(), setAuthView(VIEWS.SIGN_IN)
                },
                children: 'Go back to sign in',
              }),
              message &&
                (0, jsx_runtime.jsx)(Typography.Z.Text, { children: message }),
              error &&
                (0, jsx_runtime.jsx)(Typography.Z.Text, {
                  type: 'danger',
                  children: error,
                }),
            ],
          }),
        })
      }
      function UpdatePassword(_ref6) {
        let { wesbittyOauth: wesbittyOauth } = _ref6
        const [password, setPassword] = (0, react.useState)(''),
          [error, setError] = (0, react.useState)(''),
          [message, setMessage] = (0, react.useState)(''),
          [loading, setLoading] = (0, react.useState)(!1)
        return (0, jsx_runtime.jsx)('form', {
          id: 'auth-update-password',
          onSubmit: async (e) => {
            e.preventDefault(), setError(''), setMessage(''), setLoading(!0)
            const { error: error } = await wesbittyOauth.auth.update({
              password: password,
            })
            error
              ? setError(error.message)
              : setMessage('Your password has been updated'),
              setLoading(!1)
          },
          children: (0, jsx_runtime.jsxs)(Space.T, {
            size: 4,
            direction: 'vertical',
            children: [
              (0, jsx_runtime.jsxs)(Space.T, {
                size: 3,
                direction: 'vertical',
                children: [
                  (0, jsx_runtime.jsx)(Input.Z, {
                    label: 'New password',
                    placeholder: 'Enter your new password',
                    type: 'password',
                    icon: (0, jsx_runtime.jsx)(IconKey_IconKey, {
                      size: 21,
                      stroke: '#666666',
                    }),
                    onChange: (e) => setPassword(e.target.value),
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    block: !0,
                    size: 'large',
                    htmlType: 'submit',
                    icon: (0, jsx_runtime.jsx)(IconKey_IconKey, { size: 21 }),
                    loading: loading,
                    children: 'Update password',
                  }),
                ],
              }),
              message &&
                (0, jsx_runtime.jsx)(Typography.Z.Text, { children: message }),
              error &&
                (0, jsx_runtime.jsx)(Typography.Z.Text, {
                  type: 'danger',
                  children: error,
                }),
            ],
          }),
        })
      }
      ;(SocialAuth.displayName = 'SocialAuth'),
        (EmailAuth.displayName = 'EmailAuth'),
        (MagicLink.displayName = 'MagicLink'),
        (ForgottenPassword.displayName = 'ForgottenPassword'),
        (UpdatePassword.displayName = 'UpdatePassword'),
        (Auth.ForgottenPassword = ForgottenPassword),
        (Auth.UpdatePassword = UpdatePassword),
        (Auth.MagicLink = MagicLink),
        (Auth.UserContextProvider = Auth_UserContextProvider),
        (Auth.useUser = () => {
          const context = (0, react.useContext)(UserContext)
          if (void 0 === context)
            throw new Error(
              'useUser must be used within a UserContextProvider.'
            )
          return context
        })
      try {
        ;(Auth.displayName = 'Auth'),
          (Auth.__docgenInfo = {
            description: '',
            displayName: 'Auth',
            props: {
              wesbittyOauth: {
                defaultValue: null,
                description: '',
                name: 'wesbittyOauth',
                required: !0,
                type: { name: 'SupabaseClient' },
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
              socialLayout: {
                defaultValue: { value: 'vertical' },
                description: '',
                name: 'socialLayout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              socialColors: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'socialColors',
                required: !1,
                type: { name: 'boolean' },
              },
              socialButtonSize: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'socialButtonSize',
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
              providers: {
                defaultValue: null,
                description: '',
                name: 'providers',
                required: !1,
                type: { name: 'Provider[]' },
              },
              verticalSocialLayout: {
                defaultValue: null,
                description: '',
                name: 'verticalSocialLayout',
                required: !1,
                type: { name: 'any' },
              },
              view: {
                defaultValue: { value: 'sign_in' },
                description: '',
                name: 'view',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"sign_in"' },
                    { value: '"sign_up"' },
                    { value: '"forgotten_password"' },
                    { value: '"magic_link"' },
                    { value: '"update_password"' },
                  ],
                },
              },
              redirectTo: {
                defaultValue: null,
                description: '',
                name: 'redirectTo',
                required: !1,
                type: { name: 'string' },
              },
              onlyThirdPartyProviders: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'onlyThirdPartyProviders',
                required: !1,
                type: { name: 'boolean' },
              },
              magicLink: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'magicLink',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Auth.tsx#Auth'] = {
              docgenInfo: Auth.__docgenInfo,
              name: 'Auth',
              path: 'src/components/Auth.tsx#Auth',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ForgottenPassword.displayName = 'Auth.ForgottenPassword'),
          (ForgottenPassword.__docgenInfo = {
            description: '',
            displayName: 'Auth.ForgottenPassword',
            props: {
              setAuthView: {
                defaultValue: null,
                description: '',
                name: 'setAuthView',
                required: !0,
                type: { name: 'any' },
              },
              wesbittyOauth: {
                defaultValue: null,
                description: '',
                name: 'wesbittyOauth',
                required: !0,
                type: { name: 'SupabaseClient' },
              },
              redirectTo: {
                defaultValue: null,
                description: '',
                name: 'redirectTo',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Auth.tsx#Auth.ForgottenPassword'
            ] = {
              docgenInfo: Auth.ForgottenPassword.__docgenInfo,
              name: 'Auth.ForgottenPassword',
              path: 'src/components/Auth.tsx#Auth.ForgottenPassword',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(UpdatePassword.displayName = 'Auth.UpdatePassword'),
          (UpdatePassword.__docgenInfo = {
            description: '',
            displayName: 'Auth.UpdatePassword',
            props: {
              wesbittyOauth: {
                defaultValue: null,
                description: '',
                name: 'wesbittyOauth',
                required: !0,
                type: { name: 'SupabaseClient' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Auth.tsx#Auth.UpdatePassword'
            ] = {
              docgenInfo: Auth.UpdatePassword.__docgenInfo,
              name: 'Auth.UpdatePassword',
              path: 'src/components/Auth.tsx#Auth.UpdatePassword',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(MagicLink.displayName = 'Auth.MagicLink'),
          (MagicLink.__docgenInfo = {
            description: '',
            displayName: 'Auth.MagicLink',
            props: {
              setAuthView: {
                defaultValue: null,
                description: '',
                name: 'setAuthView',
                required: !0,
                type: { name: 'any' },
              },
              wesbittyOauth: {
                defaultValue: null,
                description: '',
                name: 'wesbittyOauth',
                required: !0,
                type: { name: 'SupabaseClient' },
              },
              redirectTo: {
                defaultValue: null,
                description: '',
                name: 'redirectTo',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Auth.tsx#Auth.MagicLink'] =
              {
                docgenInfo: Auth.MagicLink.__docgenInfo,
                name: 'Auth.MagicLink',
                path: 'src/components/Auth.tsx#Auth.MagicLink',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(UserContextProvider.displayName = 'Auth.UserContextProvider'),
          (UserContextProvider.__docgenInfo = {
            description: '',
            displayName: 'Auth.UserContextProvider',
            props: {
              wesbittyOauth: {
                defaultValue: null,
                description: '',
                name: 'wesbittyOauth',
                required: !0,
                type: { name: 'SupabaseClient' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Auth.tsx#Auth.UserContextProvider'
            ] = {
              docgenInfo: Auth.UserContextProvider.__docgenInfo,
              name: 'Auth.UserContextProvider',
              path: 'src/components/Auth.tsx#Auth.UserContextProvider',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      const wesbitty = (0,
      __webpack_require__(
        '../../node_modules/@supabase/supabase-js/dist/module/index.js'
      ).eI)(
        'https://auth.wesbitty.org',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
      )
      var Auth_stories = { title: 'Feedback/Auth', component: Auth }
      const Container = (props) => {
          const { user: user } = Auth.useUser()
          return user
            ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsxs)(Typography.Z.Text, {
                    children: ['Signed in: ', user.email],
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    block: !0,
                    onClick: () => props.wesbittyOauth.auth.signOut(),
                    children: 'Sign out',
                  }),
                ],
              })
            : props.children
        },
        Default = (args) =>
          (0, jsx_runtime.jsx)(Auth.UserContextProvider, {
            ...args,
            children: (0, jsx_runtime.jsx)(Container, {
              ...args,
              children: (0, jsx_runtime.jsx)(Auth, { ...args }),
            }),
          })
      Default.displayName = 'Default'
      const socialAuth = (args) =>
        (0, jsx_runtime.jsx)(Auth.UserContextProvider, {
          ...args,
          children: (0, jsx_runtime.jsx)(Container, {
            ...args,
            children: (0, jsx_runtime.jsx)(Auth, { ...args }),
          }),
        })
      socialAuth.displayName = 'socialAuth'
      const allSocialAuth = (args) =>
        (0, jsx_runtime.jsx)(Auth.UserContextProvider, {
          ...args,
          children: (0, jsx_runtime.jsx)(Container, {
            ...args,
            children: (0, jsx_runtime.jsx)(Auth, { ...args }),
          }),
        })
      allSocialAuth.displayName = 'allSocialAuth'
      const largeButtonSocialAuth = (args) =>
        (0, jsx_runtime.jsx)(Auth.UserContextProvider, {
          ...args,
          children: (0, jsx_runtime.jsx)(Container, {
            ...args,
            children: (0, jsx_runtime.jsx)(Auth, { ...args }),
          }),
        })
      largeButtonSocialAuth.displayName = 'largeButtonSocialAuth'
      const colouredSocialAuth = (args) =>
        (0, jsx_runtime.jsx)(Auth.UserContextProvider, {
          ...args,
          children: (0, jsx_runtime.jsx)(Container, {
            ...args,
            children: (0, jsx_runtime.jsx)(Auth, { ...args }),
          }),
        })
      colouredSocialAuth.displayName = 'colouredSocialAuth'
      const horizontalSocialAuth = (args) =>
        (0, jsx_runtime.jsx)(Auth.UserContextProvider, {
          ...args,
          children: (0, jsx_runtime.jsx)(Container, {
            ...args,
            children: (0, jsx_runtime.jsx)(Auth, { ...args }),
          }),
        })
      horizontalSocialAuth.displayName = 'horizontalSocialAuth'
      const updatePassword = (args) =>
        (0, jsx_runtime.jsx)(Auth.UpdatePassword, { ...args })
      updatePassword.displayName = 'updatePassword'
      const ChangeViewState = (args) => {
        const [view, setView] = (0, react.useState)('sign_in')
        return (0, jsx_runtime.jsxs)('div', {
          children: [
            (0, jsx_runtime.jsxs)(Space.T, {
              children: [
                (0, jsx_runtime.jsx)(Button.z, {
                  type: 'sign_up' === view ? 'primary' : 'default',
                  onClick: () => setView('sign_up'),
                  children: 'Sign up',
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  type: 'sign_in' === view ? 'primary' : 'default',
                  onClick: () => setView('sign_in'),
                  children: 'Sign in',
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  type: 'forgotten_password' === view ? 'primary' : 'default',
                  onClick: () => setView('forgotten_password'),
                  children: 'Forgotten password',
                }),
                (0, jsx_runtime.jsx)(Button.z, {
                  type: 'magic_link' === view ? 'primary' : 'default',
                  onClick: () => setView('magic_link'),
                  children: 'Magic link',
                }),
              ],
            }),
            (0, jsx_runtime.jsx)(Auth.UserContextProvider, {
              wesbittyOauth: wesbitty,
              children: (0, jsx_runtime.jsx)(Container, {
                wesbittyOauth: wesbitty,
                children: (0, jsx_runtime.jsx)(Auth, {
                  wesbittyOauth: wesbitty,
                  view: view,
                }),
              }),
            }),
          ],
        })
      }
      ;(ChangeViewState.displayName = 'ChangeViewState'),
        (Default.args = { wesbittyOauth: wesbitty }),
        (socialAuth.args = {
          wesbittyOauth: wesbitty,
          providers: ['facebook', 'google'],
        }),
        (allSocialAuth.args = {
          wesbittyOauth: wesbitty,
          providers: [
            'apple',
            'azure',
            'bitbucket',
            'discord',
            'facebook',
            'github',
            'gitlab',
            'google',
            'twitch',
            'twitter',
          ],
        }),
        (largeButtonSocialAuth.args = {
          wesbittyOauth: wesbitty,
          providers: [
            'apple',
            'azure',
            'bitbucket',
            'discord',
            'facebook',
            'github',
            'gitlab',
            'google',
            'twitch',
            'twitter',
          ],
          socialButtonSize: 'large',
        }),
        (colouredSocialAuth.args = {
          wesbittyOauth: wesbitty,
          socialColors: !0,
          providers: [
            'apple',
            'azure',
            'bitbucket',
            'discord',
            'facebook',
            'github',
            'gitlab',
            'google',
            'twitch',
            'twitter',
          ],
        }),
        (horizontalSocialAuth.args = {
          wesbittyOauth: wesbitty,
          providers: ['facebook', 'google'],
          socialLayout: 'horizontal',
        }),
        (updatePassword.args = { wesbittyOauth: wesbitty }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Auth.UserContextProvider {...args}>\n    <Container {...args}>\n      <Auth {...args} />\n    </Container>\n  </Auth.UserContextProvider>',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (socialAuth.parameters = {
          ...socialAuth.parameters,
          docs: {
            ...socialAuth.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Auth.UserContextProvider {...args}>\n    <Container {...args}>\n      <Auth {...args} />\n    </Container>\n  </Auth.UserContextProvider>',
              ...socialAuth.parameters?.docs?.source,
            },
          },
        }),
        (allSocialAuth.parameters = {
          ...allSocialAuth.parameters,
          docs: {
            ...allSocialAuth.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Auth.UserContextProvider {...args}>\n    <Container {...args}>\n      <Auth {...args} />\n    </Container>\n  </Auth.UserContextProvider>',
              ...allSocialAuth.parameters?.docs?.source,
            },
          },
        }),
        (largeButtonSocialAuth.parameters = {
          ...largeButtonSocialAuth.parameters,
          docs: {
            ...largeButtonSocialAuth.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Auth.UserContextProvider {...args}>\n    <Container {...args}>\n      <Auth {...args} />\n    </Container>\n  </Auth.UserContextProvider>',
              ...largeButtonSocialAuth.parameters?.docs?.source,
            },
          },
        }),
        (colouredSocialAuth.parameters = {
          ...colouredSocialAuth.parameters,
          docs: {
            ...colouredSocialAuth.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Auth.UserContextProvider {...args}>\n    <Container {...args}>\n      <Auth {...args} />\n    </Container>\n  </Auth.UserContextProvider>',
              ...colouredSocialAuth.parameters?.docs?.source,
            },
          },
        }),
        (horizontalSocialAuth.parameters = {
          ...horizontalSocialAuth.parameters,
          docs: {
            ...horizontalSocialAuth.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Auth.UserContextProvider {...args}>\n    <Container {...args}>\n      <Auth {...args} />\n    </Container>\n  </Auth.UserContextProvider>',
              ...horizontalSocialAuth.parameters?.docs?.source,
            },
          },
        }),
        (updatePassword.parameters = {
          ...updatePassword.parameters,
          docs: {
            ...updatePassword.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Auth.UpdatePassword {...args} />',
              ...updatePassword.parameters?.docs?.source,
            },
          },
        }),
        (ChangeViewState.parameters = {
          ...ChangeViewState.parameters,
          docs: {
            ...ChangeViewState.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => {\n  const [view, setView] = useState<'sign_in' | 'sign_up' | 'forgotten_password' | 'magic_link'>('sign_in');\n  return <div>\n      <Space>\n        <Button type={view === 'sign_up' ? 'primary' : 'default'} onClick={() => setView('sign_up')}>\n          Sign up\n        </Button>\n        <Button type={view === 'sign_in' ? 'primary' : 'default'} onClick={() => setView('sign_in')}>\n          Sign in\n        </Button>\n        <Button type={view === 'forgotten_password' ? 'primary' : 'default'} onClick={() => setView('forgotten_password')}>\n          Forgotten password\n        </Button>\n        <Button type={view === 'magic_link' ? 'primary' : 'default'} onClick={() => setView('magic_link')}>\n          Magic link\n        </Button>\n      </Space>\n      <Auth.UserContextProvider wesbittyOauth={wesbitty}>\n        <Container wesbittyOauth={wesbitty}>\n          <Auth wesbittyOauth={wesbitty} view={view} />\n        </Container>\n      </Auth.UserContextProvider>\n    </div>;\n}",
              ...ChangeViewState.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'socialAuth',
        'allSocialAuth',
        'largeButtonSocialAuth',
        'colouredSocialAuth',
        'horizontalSocialAuth',
        'updatePassword',
        'ChangeViewState',
      ]
      try {
        ;(Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Auth.stories.tsx#Default'] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/stories/Auth.stories.tsx#Default',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(socialAuth.displayName = 'socialAuth'),
          (socialAuth.__docgenInfo = {
            description: '',
            displayName: 'socialAuth',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Auth.stories.tsx#socialAuth'
            ] = {
              docgenInfo: socialAuth.__docgenInfo,
              name: 'socialAuth',
              path: 'src/stories/Auth.stories.tsx#socialAuth',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(allSocialAuth.displayName = 'allSocialAuth'),
          (allSocialAuth.__docgenInfo = {
            description: '',
            displayName: 'allSocialAuth',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Auth.stories.tsx#allSocialAuth'
            ] = {
              docgenInfo: allSocialAuth.__docgenInfo,
              name: 'allSocialAuth',
              path: 'src/stories/Auth.stories.tsx#allSocialAuth',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(largeButtonSocialAuth.displayName = 'largeButtonSocialAuth'),
          (largeButtonSocialAuth.__docgenInfo = {
            description: '',
            displayName: 'largeButtonSocialAuth',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Auth.stories.tsx#largeButtonSocialAuth'
            ] = {
              docgenInfo: largeButtonSocialAuth.__docgenInfo,
              name: 'largeButtonSocialAuth',
              path: 'src/stories/Auth.stories.tsx#largeButtonSocialAuth',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(colouredSocialAuth.displayName = 'colouredSocialAuth'),
          (colouredSocialAuth.__docgenInfo = {
            description: '',
            displayName: 'colouredSocialAuth',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Auth.stories.tsx#colouredSocialAuth'
            ] = {
              docgenInfo: colouredSocialAuth.__docgenInfo,
              name: 'colouredSocialAuth',
              path: 'src/stories/Auth.stories.tsx#colouredSocialAuth',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(horizontalSocialAuth.displayName = 'horizontalSocialAuth'),
          (horizontalSocialAuth.__docgenInfo = {
            description: '',
            displayName: 'horizontalSocialAuth',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Auth.stories.tsx#horizontalSocialAuth'
            ] = {
              docgenInfo: horizontalSocialAuth.__docgenInfo,
              name: 'horizontalSocialAuth',
              path: 'src/stories/Auth.stories.tsx#horizontalSocialAuth',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(updatePassword.displayName = 'updatePassword'),
          (updatePassword.__docgenInfo = {
            description: '',
            displayName: 'updatePassword',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Auth.stories.tsx#updatePassword'
            ] = {
              docgenInfo: updatePassword.__docgenInfo,
              name: 'updatePassword',
              path: 'src/stories/Auth.stories.tsx#updatePassword',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(ChangeViewState.displayName = 'ChangeViewState'),
          (ChangeViewState.__docgenInfo = {
            description: '',
            displayName: 'ChangeViewState',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/Auth.stories.tsx#ChangeViewState'
            ] = {
              docgenInfo: ChangeViewState.__docgenInfo,
              name: 'ChangeViewState',
              path: 'src/stories/Auth.stories.tsx#ChangeViewState',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/components/Checkbox.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        X: function () {
          return Checkbox
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        FormLayout = __webpack_require__(
          './src/lib/Layout/FormLayout/FormLayout.tsx'
        )
      const CheckboxContext = (0, react.createContext)({
        parentCallback: (e) => {},
        parentSize: '',
      })
      var FormContext = __webpack_require__(
          './src/components/Form/FormContext.tsx'
        ),
        handler = __webpack_require__('./src/theme/handler.ts'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function Group(_ref) {
        let {
          id: id,
          layout: layout = 'vertical',
          error: error,
          descriptionText: descriptionText,
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          children: children,
          className: className,
          options: options,
          onChange: onChange,
          size: size = 'medium',
        } = _ref
        const __styles = (0, handler.Z)('checkbox')
        return (0, jsx_runtime.jsx)(FormLayout.l, {
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          labelOptional: labelOptional,
          layout: layout,
          id: id,
          error: error,
          descriptionText: descriptionText,
          className: className,
          size: size,
          children: (0, jsx_runtime.jsx)(CheckboxContext.Provider, {
            value: {
              parentCallback: (e) => {
                onChange && onChange(e)
              },
              parentSize: size,
            },
            children: (0, jsx_runtime.jsx)('div', {
              className: __styles.group,
              children: options
                ? options.map((option) =>
                    (0, jsx_runtime.jsx)(Checkbox, {
                      id: option.id,
                      value: option.value,
                      label: option.label,
                      beforeLabel: option.beforeLabel,
                      afterLabel: option.afterLabel,
                      checked: option.checked,
                      name: option.name,
                      description: option.description,
                    })
                  )
                : children,
            }),
          }),
        })
      }
      function Checkbox(_ref2) {
        let {
          className: className,
          id: id = '',
          name: name = '',
          label: label,
          afterLabel: afterLabel,
          beforeLabel: beforeLabel,
          description: description,
          checked: checked,
          value: value,
          onChange: onChange,
          onFocus: onFocus,
          onBlur: onBlur,
          size: size = 'medium',
          disabled: disabled = !1,
          ...props
        } = _ref2
        const {
            formContextOnChange: formContextOnChange,
            values: values,
            handleBlur: handleBlur,
          } = (0, FormContext.G)(),
          __styles = (0, handler.Z)('checkbox')
        return (0, jsx_runtime.jsx)(CheckboxContext.Consumer, {
          children: (_ref3) => {
            let { parentCallback: parentCallback, parentSize: parentSize } =
              _ref3
            const markupId =
              id ||
              name ||
              (label
                ? label
                    .toLowerCase()
                    .replace(/^[^A-Z0-9]+/gi, '')
                    .replace(/ /g, '-')
                : void 0)
            size = parentSize || size
            const markupName = name || markupId
            let active = checked ?? void 0,
              containerClasses = [__styles.container]
            return (
              className && containerClasses.push(className),
              values && void 0 === checked && (active = values[id || name]),
              (0, jsx_runtime.jsxs)('div', {
                className: containerClasses.join(' '),
                children: [
                  (0, jsx_runtime.jsx)('input', {
                    id: markupId,
                    name: markupName,
                    type: 'checkbox',
                    className: [__styles.base, __styles.size[size]].join(' '),
                    onChange: function onInputChange(e) {
                      parentCallback && parentCallback(e),
                        onChange && onChange(e),
                        formContextOnChange && formContextOnChange(e)
                    },
                    onFocus: onFocus ? (event) => onFocus(event) : void 0,
                    onBlur: function handleBlurEvent(e) {
                      handleBlur && handleBlur(e), onBlur && onBlur(e)
                    },
                    checked: active,
                    value: value || markupId,
                    disabled: disabled,
                    ...props,
                  }),
                  (0, jsx_runtime.jsxs)('label', {
                    className: [__styles.label.base, __styles.label[size]].join(
                      ' '
                    ),
                    htmlFor: markupId,
                    children: [
                      (0, jsx_runtime.jsxs)('span', {
                        children: [
                          beforeLabel &&
                            (0, jsx_runtime.jsx)('span', {
                              className: [
                                __styles.label_before.base,
                                __styles.label_before[size],
                              ].join(' '),
                              children: beforeLabel,
                            }),
                          label,
                          afterLabel &&
                            (0, jsx_runtime.jsx)('span', {
                              className: [
                                __styles.label_after.base,
                                __styles.label_after[size],
                              ].join(' '),
                              children: afterLabel,
                            }),
                        ],
                      }),
                      description &&
                        (0, jsx_runtime.jsx)('p', {
                          className: [
                            __styles.description.base,
                            __styles.description[size],
                          ].join(' '),
                          children: description,
                        }),
                    ],
                  }),
                ],
              })
            )
          },
        })
      }
      ;(Group.displayName = 'Group'),
        (Checkbox.displayName = 'Checkbox'),
        (Checkbox.Group = Group)
      try {
        ;(Checkbox.displayName = 'Checkbox'),
          (Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
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
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Checkbox.tsx#Checkbox'] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/components/Checkbox.tsx#Checkbox',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Group.displayName = 'Checkbox.Group'),
          (Group.__docgenInfo = {
            description: '',
            displayName: 'Checkbox.Group',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              layout: {
                defaultValue: { value: 'vertical' },
                description: '',
                name: 'layout',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"horizontal"' }],
                },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'any' },
              },
              descriptionText: {
                defaultValue: null,
                description: '',
                name: 'descriptionText',
                required: !1,
                type: { name: 'any' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'any' },
              },
              afterLabel: {
                defaultValue: null,
                description: '',
                name: 'afterLabel',
                required: !1,
                type: { name: 'string' },
              },
              beforeLabel: {
                defaultValue: null,
                description: '',
                name: 'beforeLabel',
                required: !1,
                type: { name: 'string' },
              },
              labelOptional: {
                defaultValue: null,
                description: '',
                name: 'labelOptional',
                required: !1,
                type: { name: 'any' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !1,
                type: { name: 'any' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'any' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !1,
                type: { name: 'InputProps[]' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(x: ChangeEvent<HTMLInputElement>) => void' },
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
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Checkbox.tsx#Checkbox.Group'
            ] = {
              docgenInfo: Checkbox.Group.__docgenInfo,
              name: 'Checkbox.Group',
              path: 'src/components/Checkbox.tsx#Checkbox.Group',
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
    './src/components/Icon/icons/IconMail/IconMail.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__('../../node_modules/react/index.js')
      var react_feather_dist_icons_mail__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/react-feather/dist/icons/mail.js'
          ),
        _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/components/Icon/IconBase.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconMail(props) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            icon: react_feather_dist_icons_mail__WEBPACK_IMPORTED_MODULE_3__.Z,
            ...props,
          }
        )
      }
      ;(IconMail.displayName = 'IconMail'), (__webpack_exports__.Z = IconMail)
      try {
        ;(IconMail.displayName = 'IconMail'),
          (IconMail.__docgenInfo = {
            description: '',
            displayName: 'IconMail',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconMail/IconMail.tsx#IconMail'
            ] = {
              docgenInfo: IconMail.__docgenInfo,
              name: 'IconMail',
              path: 'src/components/Icon/icons/IconMail/IconMail.tsx#IconMail',
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
  },
])
