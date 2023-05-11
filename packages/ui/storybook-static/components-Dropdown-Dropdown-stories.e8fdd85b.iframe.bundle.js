'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [9451],
  {
    './src/components/Dropdown/Dropdown.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checkbox: function () {
            return Checkbox
          },
          Default: function () {
            return Default
          },
          DefaultFull: function () {
            return DefaultFull
          },
          Nested: function () {
            return Nested
          },
          Radio: function () {
            return Radio
          },
          SearchList: function () {
            return SearchList
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          default: function () {
            return Dropdown_stories
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
        hard_drive = __webpack_require__(
          '../../node_modules/react-feather/dist/icons/hard-drive.js'
        ),
        IconBase = __webpack_require__('./src/components/Icon/IconBase.tsx'),
        jsx_runtime = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        )
      function IconHardDrive(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, {
          icon: hard_drive.Z,
          ...props,
        })
      }
      IconHardDrive.displayName = 'IconHardDrive'
      var IconHardDrive_IconHardDrive = IconHardDrive
      try {
        ;(IconHardDrive.displayName = 'IconHardDrive'),
          (IconHardDrive.__docgenInfo = {
            description: '',
            displayName: 'IconHardDrive',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconHardDrive/IconHardDrive.tsx#IconHardDrive'
            ] = {
              docgenInfo: IconHardDrive.__docgenInfo,
              name: 'IconHardDrive',
              path: 'src/components/Icon/icons/IconHardDrive/IconHardDrive.tsx#IconHardDrive',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var IconChevronRight = __webpack_require__(
          './src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx'
        ),
        IconChevronDown = __webpack_require__(
          './src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx'
        ),
        IconLogOut = __webpack_require__(
          './src/components/Icon/icons/IconLogOut/IconLogOut.tsx'
        ),
        IconSettings = __webpack_require__(
          './src/components/Icon/icons/IconSettings/IconSettings.tsx'
        ),
        Typography = __webpack_require__(
          './src/components/Typography/index.tsx'
        ),
        Dropdown = __webpack_require__(
          './src/components/Dropdown/Dropdown.tsx'
        ),
        IconLogIn = __webpack_require__(
          './src/components/Icon/icons/IconLogIn/IconLogIn.tsx'
        ),
        Input = __webpack_require__('./src/components/Input/Input.tsx'),
        search = __webpack_require__(
          '../../node_modules/react-feather/dist/icons/search.js'
        )
      function IconSearch(props) {
        return (0, jsx_runtime.jsx)(IconBase.Z, { icon: search.Z, ...props })
      }
      IconSearch.displayName = 'IconSearch'
      var IconSearch_IconSearch = IconSearch
      try {
        ;(IconSearch.displayName = 'IconSearch'),
          (IconSearch.__docgenInfo = {
            description: '',
            displayName: 'IconSearch',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Icon/icons/IconSearch/IconSearch.tsx#IconSearch'
            ] = {
              docgenInfo: IconSearch.__docgenInfo,
              name: 'IconSearch',
              path: 'src/components/Icon/icons/IconSearch/IconSearch.tsx#IconSearch',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Dropdown_stories = {
        title: 'Navigation/Dropdown',
        component: Dropdown.ZP,
      }
      const DemoContainer = (_ref) => {
        let { children: children } = _ref
        return (0, jsx_runtime.jsx)('div', {
          className: ' flex justify-center items-center w-screen h-screen ',
          children: (0, jsx_runtime.jsxs)('div', {
            className:
              ' p-3 px-5  bg-scale-300 border border-scale-600 rounded flex gap-4  justify-between items-center w-3/4 ',
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
              (0, jsx_runtime.jsx)('div', {
                className: 'relative',
                children: children,
              }),
            ],
          }),
        })
      }
      DemoContainer.displayName = 'DemoContainer'
      const DefaultFull = (args) => {
        const [checked, setChecked] = (0, react.useState)(!1),
          [value, setValue] = (0, react.useState)('red')
        return (0, jsx_runtime.jsx)(DemoContainer, {
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            side: 'bottom',
            align: 'end',
            overlay: [
              (0, jsx_runtime.jsx)(Dropdown.ZP.Misc, {
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
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Label, {
                children: 'Group label',
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                onClick: () => console.log('clicked'),
                children: 'Account',
              }),
              (0, jsx_runtime.jsxs)(Dropdown.ZP.Item, {
                children: [
                  'Settings ',
                  (0, jsx_runtime.jsx)(Dropdown.ZP.RightSlot, {
                    children: '⌘+T',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Checkbox, {
                checked: checked,
                onChange: setChecked,
                children: 'Show subtitles',
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsxs)(Dropdown.ZP.RadioGroup, {
                value: value,
                onChange: setValue,
                children: [
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                    value: 'red',
                    children: 'Red',
                  }),
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                    value: 'blue',
                    children: 'Blue',
                  }),
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                    value: 'green',
                    children: 'Green',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP, {
                isNested: !0,
                overlay: [
                  (0, jsx_runtime.jsxs)(Dropdown.ZP.RadioGroup, {
                    value: value,
                    onChange: setValue,
                    children: [
                      (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                        value: 'red',
                        children: 'Red',
                      }),
                      (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                        value: 'blue',
                        children: 'Blue',
                      }),
                      (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                        value: 'green',
                        children: 'Green',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Label, {
                    children: 'Group label',
                  }),
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                    onClick: () => console.log('clicked'),
                    children: 'Account',
                  }),
                  (0, jsx_runtime.jsxs)(Dropdown.ZP.Item, {
                    children: [
                      'Settings ',
                      (0, jsx_runtime.jsx)(Dropdown.ZP.RightSlot, {
                        children: '⌘+T',
                      }),
                    ],
                  }),
                ],
                children: (0, jsx_runtime.jsxs)(Dropdown.ZP.TriggerItem, {
                  icon: (0, jsx_runtime.jsx)(IconHardDrive_IconHardDrive, {}),
                  children: [
                    'Open sub menu',
                    ' ',
                    (0, jsx_runtime.jsx)(Dropdown.ZP.RightSlot, {
                      children: (0, jsx_runtime.jsx)(IconChevronRight.Z, {
                        size: 14,
                      }),
                    }),
                  ],
                }),
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                icon: (0, jsx_runtime.jsx)(IconLogIn.Z, { size: 'tiny' }),
                children: 'Log out',
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'default',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
          }),
        })
      }
      DefaultFull.displayName = 'DefaultFull'
      const Default = (args) =>
        (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsx)(Dropdown.ZP.Misc, {
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
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Label, {
                children: 'Group label',
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                onClick: () => console.log('clicked'),
                children: 'Account',
              }),
              (0, jsx_runtime.jsxs)(Dropdown.ZP.Item, {
                children: [
                  'Settings ',
                  (0, jsx_runtime.jsx)(Dropdown.ZP.RightSlot, {
                    children: '⌘+T',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                icon: (0, jsx_runtime.jsx)(IconLogIn.Z, { size: 'tiny' }),
                children: 'Log out',
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'secondary',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
          }),
        })
      ;(Default.displayName = 'Default'), (Default.args = {})
      const doNotcloseOverlay = (args) =>
        (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsxs)(Dropdown.ZP.Misc, {
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
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, { children: 'Account' }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, { children: 'Settings' }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                children: (0, jsx_runtime.jsx)(Button.z, {
                  icon: (0, jsx_runtime.jsx)(IconLogOut.Z, {}),
                  children: 'Log out',
                }),
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'outline',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
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
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            overlayStyle: { minWidth: '500px' },
            placement: 'bottomRight',
            ...args,
            overlay: [
              (0, jsx_runtime.jsxs)(Dropdown.ZP.Item, {
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
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, { children: 'Account' }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, { children: 'Settings' }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                children: (0, jsx_runtime.jsx)(Button.z, {
                  type: 'default',
                  icon: (0, jsx_runtime.jsx)(IconLogOut.Z, {}),
                  children: 'Log out',
                }),
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'outline',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
          }),
        })
      ;(withCustomStyles.displayName = 'withCustomStyles'),
        (withCustomStyles.args = {})
      const SearchList = (args) =>
        (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                children: (0, jsx_runtime.jsx)(Input.Z, {
                  size: 'tiny',
                  icon: (0, jsx_runtime.jsx)(IconSearch_IconSearch, {}),
                  autofocus: !1,
                }),
              }),
              (0, jsx_runtime.jsxs)(Dropdown.ZP.Item, {
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
              (0, jsx_runtime.jsxs)(Dropdown.ZP.Item, {
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
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                icon: (0, jsx_runtime.jsx)(IconLogIn.Z, {}),
                children: (0, jsx_runtime.jsx)(Typography.default.Text, {
                  children: 'Log out',
                }),
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'outline',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
          }),
        })
      ;(SearchList.displayName = 'SearchList'), (SearchList.args = {})
      const Checkbox = (args) => {
        const [checked, setChecked] = (0, react.useState)(!1)
        return (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, {
                icon: (0, jsx_runtime.jsx)(IconSettings.Z, { size: 'small' }),
                children: 'Account',
              }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Item, { children: 'Settings' }),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Seperator, {}),
              (0, jsx_runtime.jsx)(Dropdown.ZP.Checkbox, {
                checked: checked,
                onChange: setChecked,
                children: 'Show subtitles',
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'outline',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
          }),
        })
      }
      Checkbox.displayName = 'Checkbox'
      const Radio = (args) => {
        const [value, setValue] = (0, react.useState)('red')
        return (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            ...args,
            overlay: [
              (0, jsx_runtime.jsxs)(Dropdown.ZP.RadioGroup, {
                value: value,
                onChange: setValue,
                children: [
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                    value: 'red',
                    children: 'Red',
                  }),
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                    value: 'blue',
                    children: 'Blue',
                  }),
                  (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                    value: 'green',
                    children: 'Green',
                  }),
                ],
              }),
            ],
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'outline',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
          }),
        })
      }
      Radio.displayName = 'Radio'
      const Nested = (args) => {
        const [value, setValue] = (0, react.useState)('red')
        return (0, jsx_runtime.jsx)('div', {
          style: { margin: '0 auto', minHeight: '420px', marginTop: '220px' },
          children: (0, jsx_runtime.jsx)(Dropdown.ZP, {
            ...args,
            overlay: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)(Dropdown.ZP.RadioGroup, {
                  value: value,
                  onChange: setValue,
                  children: [
                    (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                      value: 'red',
                      children: 'Red',
                    }),
                    (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                      value: 'blue',
                      children: 'Blue',
                    }),
                    (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                      value: 'green',
                      children: 'Green',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Dropdown.ZP, {
                  isNested: !0,
                  overlay: [
                    (0, jsx_runtime.jsxs)(Dropdown.ZP.RadioGroup, {
                      value: value,
                      onChange: setValue,
                      children: [
                        (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                          value: 'red',
                          children: 'Red',
                        }),
                        (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                          value: 'blue',
                          children: 'Blue',
                        }),
                        (0, jsx_runtime.jsx)(Dropdown.ZP.Radio, {
                          value: 'green',
                          children: 'Green',
                        }),
                      ],
                    }),
                  ],
                  children: (0, jsx_runtime.jsx)(Dropdown.ZP.TriggerItem, {
                    children: 'Open sub menu',
                  }),
                }),
                (0, jsx_runtime.jsx)(Dropdown.ZP.Item, { children: 'hello' }),
              ],
            }),
            children: (0, jsx_runtime.jsx)(Button.z, {
              as: 'span',
              type: 'outline',
              iconRight: (0, jsx_runtime.jsx)(IconChevronDown.Z, {}),
              children: 'Click for dropdown',
            }),
          }),
        })
      }
      ;(Nested.displayName = 'Nested'),
        (DefaultFull.parameters = {
          ...DefaultFull.parameters,
          docs: {
            ...DefaultFull.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => {\n  const [checked, setChecked] = useState(false);\n  const [value, setValue] = useState('red');\n  return <DemoContainer>\n      <Dropdown side=\"bottom\" align=\"end\" overlay={[<Dropdown.Misc>\n            <div>\n              <Typography.Text small className=\"block\">\n                Signed in as{' '}\n              </Typography.Text>\n\n              <Typography.Text small strong>\n                tom@example.com{' '}\n              </Typography.Text>\n            </div>\n          </Dropdown.Misc>, <Dropdown.Seperator />, <Dropdown.Label>Group label</Dropdown.Label>, <Dropdown.Item onClick={() => console.log('clicked')}>\n            Account\n          </Dropdown.Item>, <Dropdown.Item>\n            Settings <Dropdown.RightSlot>⌘+T</Dropdown.RightSlot>\n          </Dropdown.Item>, <Dropdown.Seperator />, <Dropdown.Checkbox checked={checked} onChange={setChecked}>\n            Show subtitles\n          </Dropdown.Checkbox>, <Dropdown.Seperator />, <Dropdown.RadioGroup value={value} onChange={setValue}>\n            <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>\n            <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>\n            <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>\n          </Dropdown.RadioGroup>, <Dropdown.Seperator />, <Dropdown isNested overlay={[<Dropdown.RadioGroup value={value} onChange={setValue}>\n                <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>\n                <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>\n                <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>\n              </Dropdown.RadioGroup>, <Dropdown.Seperator />, <Dropdown.Label>Group label</Dropdown.Label>, <Dropdown.Item onClick={() => console.log('clicked')}>\n                Account\n              </Dropdown.Item>, <Dropdown.Item>\n                Settings <Dropdown.RightSlot>⌘+T</Dropdown.RightSlot>\n              </Dropdown.Item>]}>\n            <Dropdown.TriggerItem icon={<IconHardDrive />}>\n              Open sub menu{' '}\n              <Dropdown.RightSlot>\n                <IconChevronRight size={14} />\n              </Dropdown.RightSlot>\n            </Dropdown.TriggerItem>\n          </Dropdown>, <Dropdown.Seperator />, <Dropdown.Item icon={<IconLogIn size=\"tiny\" />}>\n            Log out\n          </Dropdown.Item>]}>\n        <Button as=\"span\" type=\"default\" iconRight={<IconChevronDown />}>\n          Click for dropdown\n        </Button>\n      </Dropdown>\n    </DemoContainer>;\n}",
              ...DefaultFull.parameters?.docs?.source,
            },
          },
        }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => <div style={{\n  margin: '0 auto',\n  minHeight: '420px',\n  marginTop: '220px'\n}}>\n    <Dropdown {...args} overlay={[<Dropdown.Misc>\n          <div>\n            <Typography.Text small className=\"block\">\n              Signed in as{' '}\n            </Typography.Text>\n\n            <Typography.Text small strong>\n              tom@example.com{' '}\n            </Typography.Text>\n          </div>\n        </Dropdown.Misc>, <Dropdown.Seperator />, <Dropdown.Label>Group label</Dropdown.Label>, <Dropdown.Item onClick={() => console.log('clicked')}>\n          Account\n        </Dropdown.Item>, <Dropdown.Item>\n          Settings <Dropdown.RightSlot>⌘+T</Dropdown.RightSlot>\n        </Dropdown.Item>, <Dropdown.Seperator />, <Dropdown.Item icon={<IconLogIn size=\"tiny\" />}>Log out</Dropdown.Item>]}>\n      <Button as=\"span\" type=\"secondary\" iconRight={<IconChevronDown />}>\n        Click for dropdown\n      </Button>\n    </Dropdown>\n  </div>",
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
                "(args: any) => <div style={{\n  margin: '0 auto',\n  minHeight: '420px',\n  marginTop: '220px'\n}}>\n    <Dropdown {...args} overlay={[<Dropdown.Misc>\n          <Typography.Text>Signed in as </Typography.Text>\n          <Typography.Text strong>tom@example.com </Typography.Text>\n        </Dropdown.Misc>, <Dropdown.Seperator />, <Dropdown.Item>Account</Dropdown.Item>, <Dropdown.Item>Settings</Dropdown.Item>, <Dropdown.Item>\n          <Button icon={<IconLogOut />}>Log out</Button>\n        </Dropdown.Item>]}>\n      <Button as=\"span\" type=\"outline\" iconRight={<IconChevronDown />}>\n        Click for dropdown\n      </Button>\n    </Dropdown>\n  </div>",
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
                "(args: any) => <div style={{\n  margin: '0 auto',\n  minHeight: '420px',\n  marginTop: '220px',\n  marginLeft: '400px'\n}}>\n    <Dropdown overlayStyle={{\n    minWidth: '500px'\n  }} placement=\"bottomRight\" {...args} overlay={[<Dropdown.Item>\n          <Typography.Text>Signed in as </Typography.Text>\n          <Typography.Text strong>tom@example.com </Typography.Text>\n        </Dropdown.Item>, <Dropdown.Seperator />, <Dropdown.Item>Account</Dropdown.Item>, <Dropdown.Item>Settings</Dropdown.Item>, <Dropdown.Seperator />, <Dropdown.Item>\n          <Button type=\"default\" icon={<IconLogOut />}>\n            Log out\n          </Button>\n        </Dropdown.Item>]}>\n      <Button as=\"span\" type=\"outline\" iconRight={<IconChevronDown />}>\n        Click for dropdown\n      </Button>\n    </Dropdown>\n  </div>",
              ...withCustomStyles.parameters?.docs?.source,
            },
          },
        }),
        (SearchList.parameters = {
          ...SearchList.parameters,
          docs: {
            ...SearchList.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => <div style={{\n  margin: \'0 auto\',\n  minHeight: \'420px\',\n  marginTop: \'220px\'\n}}>\n    <Dropdown {...args} overlay={[<Dropdown.Item>\n          <Input size="tiny" icon={<IconSearch />} autofocus={false} />\n        </Dropdown.Item>, <Dropdown.Item>\n          <Typography.Text>Signed in as </Typography.Text>\n          <Typography.Text strong>tom@example.com </Typography.Text>\n        </Dropdown.Item>, <Dropdown.Item>\n          <Typography.Text>Signed in as </Typography.Text>\n          <Typography.Text strong>tom@example.com </Typography.Text>\n        </Dropdown.Item>, <Dropdown.Seperator />, <Dropdown.Item icon={<IconLogIn />}>\n          <Typography.Text>Log out</Typography.Text>\n        </Dropdown.Item>]}>\n      <Button as="span" type="outline" iconRight={<IconChevronDown />}>\n        Click for dropdown\n      </Button>\n    </Dropdown>\n  </div>',
              ...SearchList.parameters?.docs?.source,
            },
          },
        }),
        (Checkbox.parameters = {
          ...Checkbox.parameters,
          docs: {
            ...Checkbox.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    margin: \'0 auto\',\n    minHeight: \'420px\',\n    marginTop: \'220px\'\n  }}>\n      <Dropdown {...args} overlay={[<Dropdown.Item icon={<IconSettings size="small" />}>\n            Account\n          </Dropdown.Item>, <Dropdown.Item>Settings</Dropdown.Item>, <Dropdown.Seperator />, <Dropdown.Checkbox checked={checked} onChange={setChecked}>\n            Show subtitles\n          </Dropdown.Checkbox>]}>\n        <Button as="span" type="outline" iconRight={<IconChevronDown />}>\n          Click for dropdown\n        </Button>\n      </Dropdown>\n    </div>;\n}',
              ...Checkbox.parameters?.docs?.source,
            },
          },
        }),
        (Radio.parameters = {
          ...Radio.parameters,
          docs: {
            ...Radio.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => {\n  const [value, setValue] = useState('red');\n  return <div style={{\n    margin: '0 auto',\n    minHeight: '420px',\n    marginTop: '220px'\n  }}>\n      <Dropdown {...args} overlay={[<Dropdown.RadioGroup value={value} onChange={setValue}>\n            <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>\n            <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>\n            <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>\n          </Dropdown.RadioGroup>]}>\n        <Button as=\"span\" type=\"outline\" iconRight={<IconChevronDown />}>\n          Click for dropdown\n        </Button>\n      </Dropdown>\n    </div>;\n}",
              ...Radio.parameters?.docs?.source,
            },
          },
        }),
        (Nested.parameters = {
          ...Nested.parameters,
          docs: {
            ...Nested.parameters?.docs,
            source: {
              originalSource:
                "(args: any) => {\n  const [value, setValue] = useState('red');\n  return <div style={{\n    margin: '0 auto',\n    minHeight: '420px',\n    marginTop: '220px'\n  }}>\n      <Dropdown {...args} overlay={<>\n            <Dropdown.RadioGroup value={value} onChange={setValue}>\n              <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>\n              <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>\n              <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>\n            </Dropdown.RadioGroup>\n\n            <Dropdown isNested overlay={[<Dropdown.RadioGroup value={value} onChange={setValue}>\n                  <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>\n                  <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>\n                  <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>\n                </Dropdown.RadioGroup>]}>\n              <Dropdown.TriggerItem>Open sub menu</Dropdown.TriggerItem>\n            </Dropdown>\n            <Dropdown.Item>hello</Dropdown.Item>\n          </>}>\n        <Button as=\"span\" type=\"outline\" iconRight={<IconChevronDown />}>\n          Click for dropdown\n        </Button>\n      </Dropdown>\n    </div>;\n}",
              ...Nested.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = [
        'DefaultFull',
        'Default',
        'doNotcloseOverlay',
        'withCustomStyles',
        'SearchList',
        'Checkbox',
        'Radio',
        'Nested',
      ]
      try {
        ;(DefaultFull.displayName = 'DefaultFull'),
          (DefaultFull.__docgenInfo = {
            description: '',
            displayName: 'DefaultFull',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.stories.tsx#DefaultFull'
            ] = {
              docgenInfo: DefaultFull.__docgenInfo,
              name: 'DefaultFull',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#DefaultFull',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#Default',
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
              'src/components/Dropdown/Dropdown.stories.tsx#doNotcloseOverlay'
            ] = {
              docgenInfo: doNotcloseOverlay.__docgenInfo,
              name: 'doNotcloseOverlay',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#doNotcloseOverlay',
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
              'src/components/Dropdown/Dropdown.stories.tsx#withCustomStyles'
            ] = {
              docgenInfo: withCustomStyles.__docgenInfo,
              name: 'withCustomStyles',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#withCustomStyles',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(SearchList.displayName = 'SearchList'),
          (SearchList.__docgenInfo = {
            description: '',
            displayName: 'SearchList',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.stories.tsx#SearchList'
            ] = {
              docgenInfo: SearchList.__docgenInfo,
              name: 'SearchList',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#SearchList',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Checkbox.displayName = 'Checkbox'),
          (Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.stories.tsx#Checkbox'
            ] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#Checkbox',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Radio.displayName = 'Radio'),
          (Radio.__docgenInfo = {
            description: '',
            displayName: 'Radio',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.stories.tsx#Radio'
            ] = {
              docgenInfo: Radio.__docgenInfo,
              name: 'Radio',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#Radio',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Nested.displayName = 'Nested'),
          (Nested.__docgenInfo = {
            description: '',
            displayName: 'Nested',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Dropdown/Dropdown.stories.tsx#Nested'
            ] = {
              docgenInfo: Nested.__docgenInfo,
              name: 'Nested',
              path: 'src/components/Dropdown/Dropdown.stories.tsx#Nested',
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
    './src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__('../../node_modules/react/index.js')
        var react_feather_dist_icons_chevron_down__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/react-feather/dist/icons/chevron-down.js'
            ),
          _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Icon/IconBase.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        function IconChevronDown(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
            {
              icon: react_feather_dist_icons_chevron_down__WEBPACK_IMPORTED_MODULE_3__.Z,
              ...props,
            }
          )
        }
        ;(IconChevronDown.displayName = 'IconChevronDown'),
          (__webpack_exports__.Z = IconChevronDown)
        try {
          ;(IconChevronDown.displayName = 'IconChevronDown'),
            (IconChevronDown.__docgenInfo = {
              description: '',
              displayName: 'IconChevronDown',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx#IconChevronDown'
              ] = {
                docgenInfo: IconChevronDown.__docgenInfo,
                name: 'IconChevronDown',
                path: 'src/components/Icon/icons/IconChevronDown/IconChevronDown.tsx#IconChevronDown',
              })
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__('../../node_modules/react/index.js')
        var react_feather_dist_icons_chevron_right__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/react-feather/dist/icons/chevron-right.js'
            ),
          _IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Icon/IconBase.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        function IconChevronRight(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _IconBase__WEBPACK_IMPORTED_MODULE_2__.Z,
            {
              icon: react_feather_dist_icons_chevron_right__WEBPACK_IMPORTED_MODULE_3__.Z,
              ...props,
            }
          )
        }
        ;(IconChevronRight.displayName = 'IconChevronRight'),
          (__webpack_exports__.Z = IconChevronRight)
        try {
          ;(IconChevronRight.displayName = 'IconChevronRight'),
            (IconChevronRight.__docgenInfo = {
              description: '',
              displayName: 'IconChevronRight',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx#IconChevronRight'
              ] = {
                docgenInfo: IconChevronRight.__docgenInfo,
                name: 'IconChevronRight',
                path: 'src/components/Icon/icons/IconChevronRight/IconChevronRight.tsx#IconChevronRight',
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
  },
])
