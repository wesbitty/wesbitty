'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [8377],
  {
    './src/components/Menu/Menu.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BorderAndGroups: function () {
            return BorderAndGroups
          },
          CustomNode: function () {
            return CustomNode
          },
          Default: function () {
            return Default
          },
          Groups: function () {
            return Groups
          },
          PillsAndGroups: function () {
            return PillsAndGroups
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          border: function () {
            return border
          },
          default: function () {
            return Menu_stories
          },
          pills: function () {
            return pills
          },
          withActiveState: function () {
            return withActiveState
          },
        })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        Divider = __webpack_require__('./src/components/Divider.tsx'),
        IconMail = __webpack_require__(
          './src/components/Icon/icons/IconMail/IconMail.tsx'
        ),
        Typography = __webpack_require__(
          './src/components/Typography/index.tsx'
        ),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      const MenuContext = (0, react.createContext)({ type: 'text' }),
        MenuContextProvider = (props) => {
          const { type: type } = props,
            value = { type: type }
          return (0, jsx_runtime.jsx)(MenuContext.Provider, {
            value: value,
            children: props.children,
          })
        }
      MenuContextProvider.displayName = 'MenuContextProvider'
      const useMenuContext = () => {
        const context = (0, react.useContext)(MenuContext)
        if (void 0 === context)
          throw new Error(
            'MenuContext must be used within a MenuContextProvider.'
          )
        return context
      }
      try {
        ;(MenuContextProvider.displayName = 'MenuContextProvider'),
          (MenuContextProvider.__docgenInfo = {
            description: '',
            displayName: 'MenuContextProvider',
            props: {
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"text"' },
                    { value: '"pills"' },
                    { value: '"border"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Menu/MenuContext.tsx#MenuContextProvider'
            ] = {
              docgenInfo: MenuContextProvider.__docgenInfo,
              name: 'MenuContextProvider',
              path: 'src/components/Menu/MenuContext.tsx#MenuContextProvider',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var handler = __webpack_require__('./src/theme/handler.ts')
      function Menu(_ref) {
        let {
          children: children,
          className: className,
          style: style,
          type: type = 'text',
        } = _ref
        return (0, jsx_runtime.jsx)('nav', {
          role: 'menu',
          'aria-label': 'Sidebar',
          'aria-orientation': 'vertical',
          'aria-labelledby': 'options-menu',
          className: className,
          style: style,
          children: (0, jsx_runtime.jsx)(MenuContextProvider, {
            type: type,
            children: (0, jsx_runtime.jsx)('ul', { children: children }),
          }),
        })
      }
      function Item(_ref2) {
        let {
          children: children,
          icon: icon,
          active: active,
          rounded: rounded,
          onClick: onClick,
          doNotCloseOverlay: doNotCloseOverlay = !1,
          showActiveBar: showActiveBar = !1,
          style: style,
        } = _ref2
        const __styles = (0, handler.Z)('menu'),
          { type: type } = useMenuContext()
        let classes = [__styles.item.base]
        classes.push(__styles.item.variants[type].base),
          active
            ? classes.push(__styles.item.variants[type].active)
            : classes.push(__styles.item.variants[type].normal)
        let contentClasses = [__styles.item.content.base]
        active
          ? contentClasses.push(__styles.item.content.active)
          : contentClasses.push(__styles.item.content.normal)
        let iconClasses = [__styles.item.icon.base]
        return (
          active
            ? iconClasses.push(__styles.item.icon.active)
            : iconClasses.push(__styles.item.icon.normal),
          (0, jsx_runtime.jsx)('li', {
            role: 'menuitem',
            className: 'outline-none',
            children: (0, jsx_runtime.jsxs)('a', {
              style: style,
              className: classes.join(' '),
              onClick: onClick,
              'aria-current': active ? 'page' : void 0,
              children: [
                icon &&
                  (0, jsx_runtime.jsx)('span', {
                    className: iconClasses.join(' '),
                    children: icon,
                  }),
                (0, jsx_runtime.jsx)('span', {
                  className: contentClasses.join(' '),
                  children: children,
                }),
              ],
            }),
          })
        )
      }
      function Group(_ref3) {
        let { children: children, icon: icon, title: title } = _ref3
        const __styles = (0, handler.Z)('menu'),
          { type: type } = useMenuContext()
        return (0, jsx_runtime.jsxs)('div', {
          className: [__styles.group.base, __styles.group.variants[type]].join(
            ' '
          ),
          children: [
            icon &&
              (0, jsx_runtime.jsx)('span', {
                className: __styles.group.icon,
                children: icon,
              }),
            (0, jsx_runtime.jsx)('span', {
              className: __styles.group.content,
              children: title,
            }),
            children,
          ],
        })
      }
      function Misc(_ref4) {
        let { children: children } = _ref4
        return (0, jsx_runtime.jsx)('div', {
          children: (0, jsx_runtime.jsx)(Typography.default.Text, {
            children: (0, jsx_runtime.jsx)('span', { children: children }),
          }),
        })
      }
      ;(Menu.displayName = 'Menu'),
        (Item.displayName = 'Item'),
        (Group.displayName = 'Group'),
        (Misc.displayName = 'Misc'),
        (Menu.Item = Item),
        (Menu.Group = Group),
        (Menu.Misc = Misc)
      var Menu_Menu = Menu
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
              active: {
                defaultValue: null,
                description: '',
                name: 'active',
                required: !1,
                type: { name: 'boolean' },
              },
              rounded: {
                defaultValue: null,
                description: '',
                name: 'rounded',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: 'any' },
              },
              doNotCloseOverlay: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'doNotCloseOverlay',
                required: !1,
                type: { name: 'boolean' },
              },
              showActiveBar: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'showActiveBar',
                required: !1,
                type: { name: 'boolean' },
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
            (STORYBOOK_REACT_CLASSES['src/components/Menu/Menu.tsx#Item'] = {
              docgenInfo: Item.__docgenInfo,
              name: 'Item',
              path: 'src/components/Menu/Menu.tsx#Item',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Group.displayName = 'Group'),
          (Group.__docgenInfo = {
            description: '',
            displayName: 'Group',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Menu/Menu.tsx#Group'] = {
              docgenInfo: Group.__docgenInfo,
              name: 'Group',
              path: 'src/components/Menu/Menu.tsx#Group',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Misc.displayName = 'Misc'),
          (Misc.__docgenInfo = {
            description: '',
            displayName: 'Misc',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Menu/Menu.tsx#Misc'] = {
              docgenInfo: Misc.__docgenInfo,
              name: 'Misc',
              path: 'src/components/Menu/Menu.tsx#Misc',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Menu.displayName = 'Menu'),
          (Menu.__docgenInfo = {
            description: '',
            displayName: 'Menu',
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
                defaultValue: { value: 'text' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"text"' },
                    { value: '"pills"' },
                    { value: '"border"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Menu/Menu.tsx#Menu'] = {
              docgenInfo: Menu.__docgenInfo,
              name: 'Menu',
              path: 'src/components/Menu/Menu.tsx#Menu',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Button = __webpack_require__('./src/components/Button.tsx'),
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
      var menu_Menu = (0, react.forwardRef)(function (_ref, ref) {
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
          react.createElement('line', {
            x1: '3',
            y1: '12',
            x2: '21',
            y2: '12',
          }),
          react.createElement('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
          react.createElement('line', { x1: '3', y1: '18', x2: '21', y2: '18' })
        )
      })
      ;(menu_Menu.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (menu_Menu.displayName = 'Menu')
      var menu = menu_Menu,
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx')
      function IconMenu(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: menu, ...props })
      }
      IconMenu.displayName = 'IconMenu'
      var IconMenu_IconMenu = IconMenu
      try {
        ;(IconMenu.displayName = 'IconMenu'),
          (IconMenu.__docgenInfo = {
            description: '',
            displayName: 'IconMenu',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconMenu/IconMenu.tsx#IconMenu'
            ] = {
              docgenInfo: IconMenu.__docgenInfo,
              name: 'IconMenu',
              path: 'src/components/Icon/icons/IconMenu/IconMenu.tsx#IconMenu',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function refresh_ccw_extends() {
        return (
          (refresh_ccw_extends =
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
          refresh_ccw_extends.apply(this, arguments)
        )
      }
      function refresh_ccw_objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function refresh_ccw_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
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
      var RefreshCcw = (0, react.forwardRef)(function (_ref, ref) {
        var _ref$color = _ref.color,
          color = void 0 === _ref$color ? 'currentColor' : _ref$color,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 24 : _ref$size,
          rest = refresh_ccw_objectWithoutProperties(_ref, ['color', 'size'])
        return react.createElement(
          'svg',
          refresh_ccw_extends(
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
          react.createElement('polyline', { points: '1 4 1 10 7 10' }),
          react.createElement('polyline', { points: '23 20 23 14 17 14' }),
          react.createElement('path', {
            d: 'M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15',
          })
        )
      })
      ;(RefreshCcw.propTypes = {
        color: prop_types_default().string,
        size: prop_types_default().oneOfType([
          prop_types_default().string,
          prop_types_default().number,
        ]),
      }),
        (RefreshCcw.displayName = 'RefreshCcw')
      var refresh_ccw = RefreshCcw
      function IconRefreshCcw(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: refresh_ccw, ...props })
      }
      IconRefreshCcw.displayName = 'IconRefreshCcw'
      var IconRefreshCcw_IconRefreshCcw = IconRefreshCcw
      try {
        ;(IconRefreshCcw.displayName = 'IconRefreshCcw'),
          (IconRefreshCcw.__docgenInfo = {
            description: '',
            displayName: 'IconRefreshCcw',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconRefreshCcw/IconRefreshCcw.tsx#IconRefreshCcw'
            ] = {
              docgenInfo: IconRefreshCcw.__docgenInfo,
              name: 'IconRefreshCcw',
              path: 'src/components/Icon/icons/IconRefreshCcw/IconRefreshCcw.tsx#IconRefreshCcw',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Menu_stories = { title: 'Navigation/Menu', component: Menu_Menu }
      const SampleIcon = () =>
        (0, jsx_runtime.jsx)(IconMail.Z, { size: 14, strokeWidth: 2 })
      SampleIcon.displayName = 'SampleIcon'
      const Default = (args) =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'text',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Divider.i, {}),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      Default.displayName = 'Default'
      const withActiveState = (args) =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'text',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Divider.i, {}),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              active: !0,
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      withActiveState.displayName = 'withActiveState'
      const pills = (args) =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'pills',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Divider.i, {}),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              active: !0,
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      pills.displayName = 'pills'
      const border = (args) =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'border',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Divider.i, {}),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              active: !0,
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      border.displayName = 'border'
      const Groups = () =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'text',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Group, { title: 'First group' }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Group, { title: 'Second group' }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      Groups.displayName = 'Groups'
      const PillsAndGroups = () =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'pills',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Group, { title: 'First group' }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              active: !0,
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Group, { title: 'Second group' }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      PillsAndGroups.displayName = 'PillsAndGroups'
      const BorderAndGroups = () =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'border',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Group, { title: 'First group' }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              active: !0,
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Group, { title: 'Second group' }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      BorderAndGroups.displayName = 'BorderAndGroups'
      const CustomNode = () =>
        (0, jsx_runtime.jsxs)(Menu_Menu, {
          type: 'border',
          children: [
            (0, jsx_runtime.jsx)(Menu_Menu.Group, {
              title: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'w-full flex items-center justify-between',
                  children: [
                    (0, jsx_runtime.jsx)('span', { children: 'All tables' }),
                    (0, jsx_runtime.jsx)('button', {
                      className: 'cursor-pointer',
                      children: (0, jsx_runtime.jsx)(
                        IconRefreshCcw_IconRefreshCcw,
                        { className: 'animate-spin', size: 14 }
                      ),
                    }),
                  ],
                }),
              }),
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, jsx_runtime.jsx)('span', {
                    children: 'Account settings',
                  }),
                  (0, jsx_runtime.jsx)(Button.z, {
                    type: 'default',
                    children: 'Button',
                  }),
                ],
              }),
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, jsx_runtime.jsx)('span', {
                    children: 'Account settings',
                  }),
                  (0, jsx_runtime.jsx)(IconMenu_IconMenu, {
                    size: 14,
                    strokeWidth: 1.5,
                  }),
                ],
              }),
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              active: !0,
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Group, { title: 'Second group' }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
            (0, jsx_runtime.jsx)(Menu_Menu.Item, {
              icon: (0, jsx_runtime.jsx)(SampleIcon, {}),
              children: 'Account settings',
            }),
          ],
        })
      ;(CustomNode.displayName = 'CustomNode'),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Menu type="text">\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Divider />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (withActiveState.parameters = {
          ...withActiveState.parameters,
          docs: {
            ...withActiveState.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Menu type="text">\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Divider />\n    <Menu.Item active icon={<SampleIcon />}>\n      Account settings\n    </Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...withActiveState.parameters?.docs?.source,
            },
          },
        }),
        (pills.parameters = {
          ...pills.parameters,
          docs: {
            ...pills.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Menu type="pills">\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Divider />\n    <Menu.Item active icon={<SampleIcon />}>\n      Account settings\n    </Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...pills.parameters?.docs?.source,
            },
          },
        }),
        (border.parameters = {
          ...border.parameters,
          docs: {
            ...border.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <Menu type="border">\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Divider />\n    <Menu.Item active icon={<SampleIcon />}>\n      Account settings\n    </Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...border.parameters?.docs?.source,
            },
          },
        }),
        (Groups.parameters = {
          ...Groups.parameters,
          docs: {
            ...Groups.parameters?.docs,
            source: {
              originalSource:
                '() => <Menu type="text">\n    <Menu.Group title="First group" />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Group title="Second group" />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...Groups.parameters?.docs?.source,
            },
          },
        }),
        (PillsAndGroups.parameters = {
          ...PillsAndGroups.parameters,
          docs: {
            ...PillsAndGroups.parameters?.docs,
            source: {
              originalSource:
                '() => <Menu type="pills">\n    <Menu.Group title="First group" />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />} active>\n      Account settings\n    </Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Group title="Second group" />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...PillsAndGroups.parameters?.docs?.source,
            },
          },
        }),
        (BorderAndGroups.parameters = {
          ...BorderAndGroups.parameters,
          docs: {
            ...BorderAndGroups.parameters?.docs,
            source: {
              originalSource:
                '() => <Menu type="border">\n    <Menu.Group title="First group" />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />} active>\n      Account settings\n    </Menu.Item>\n    <Menu.Group title="Second group" />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...BorderAndGroups.parameters?.docs?.source,
            },
          },
        }),
        (CustomNode.parameters = {
          ...CustomNode.parameters,
          docs: {
            ...CustomNode.parameters?.docs,
            source: {
              originalSource:
                '() => <Menu type="border">\n    <Menu.Group\n  // @ts-ignore\n  title={<>\n          <div className="w-full flex items-center justify-between">\n            <span>All tables</span>\n            <button className="cursor-pointer">\n              <IconRefreshCcw className={\'animate-spin\'} size={14} />\n            </button>\n          </div>\n        </>} />\n    <Menu.Item icon={<SampleIcon />}>\n      <div className="flex items-center gap-2">\n        <span>Account settings</span>\n        <Button type="default">Button</Button>\n      </div>\n    </Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>\n      <div className="flex items-center gap-2">\n        <span>Account settings</span>\n        <IconMenu size={14} strokeWidth={1.5} />\n      </div>\n    </Menu.Item>\n    <Menu.Item icon={<SampleIcon />} active>\n      Account settings\n    </Menu.Item>\n    <Menu.Group title="Second group" />\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>\n  </Menu>',
              ...CustomNode.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'withActiveState',
        'pills',
        'border',
        'Groups',
        'PillsAndGroups',
        'BorderAndGroups',
        'CustomNode',
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
              'src/components/Menu/Menu.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/Menu/Menu.stories.tsx#Default',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(withActiveState.displayName = 'withActiveState'),
          (withActiveState.__docgenInfo = {
            description: '',
            displayName: 'withActiveState',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Menu/Menu.stories.tsx#withActiveState'
            ] = {
              docgenInfo: withActiveState.__docgenInfo,
              name: 'withActiveState',
              path: 'src/components/Menu/Menu.stories.tsx#withActiveState',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(pills.displayName = 'pills'),
          (pills.__docgenInfo = {
            description: '',
            displayName: 'pills',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Menu/Menu.stories.tsx#pills'
            ] = {
              docgenInfo: pills.__docgenInfo,
              name: 'pills',
              path: 'src/components/Menu/Menu.stories.tsx#pills',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(border.displayName = 'border'),
          (border.__docgenInfo = {
            description: '',
            displayName: 'border',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Menu/Menu.stories.tsx#border'
            ] = {
              docgenInfo: border.__docgenInfo,
              name: 'border',
              path: 'src/components/Menu/Menu.stories.tsx#border',
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
    '../../node_modules/react-feather/dist/icons/mail.js': function (
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
  },
])
