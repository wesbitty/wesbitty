'use strict'
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [3358],
  {
    './src/components/Image/Image.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Circle: function () {
            return Circle
          },
          Normal: function () {
            return Normal
          },
          Responsive: function () {
            return Responsive
          },
          Rounded: function () {
            return Rounded
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          default: function () {
            return Image_stories
          },
        })
      __webpack_require__('../../node_modules/react/index.js')
      var jsx_runtime = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      )
      function Image(_ref) {
        let {
          source: source,
          style: style,
          className: className,
          type: type,
          alt: alt,
          responsive: responsive,
        } = _ref
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: (0, jsx_runtime.jsx)('img', {
            src: source,
            style: style,
            alt: alt,
          }),
        })
      }
      try {
        ;(Image.displayName = 'Image'),
          (Image.__docgenInfo = {
            description: '',
            displayName: 'Image',
            props: {
              source: {
                defaultValue: null,
                description: '',
                name: 'source',
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
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"circle"' }, { value: '"rounded"' }],
                },
              },
              alt: {
                defaultValue: null,
                description: '',
                name: 'alt',
                required: !1,
                type: { name: 'string' },
              },
              responsive: {
                defaultValue: null,
                description: '',
                name: 'responsive',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Image/Image.tsx#Image'] = {
              docgenInfo: Image.__docgenInfo,
              name: 'Image',
              path: 'src/components/Image/Image.tsx#Image',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Image_stories = { title: 'General/Image', component: Image }
      const Normal = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Image, { ...args }),
          }),
        Circle = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Image, { ...args }),
          }),
        Rounded = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Image, { ...args }),
          }),
        Responsive = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(Image, { ...args }),
          })
      ;(Normal.args = {
        active: !0,
        source: 'https://via.placeholder.com/300',
      }),
        (Circle.args = {
          active: !0,
          type: 'circle',
          source: 'https://via.placeholder.com/300',
        }),
        (Rounded.args = {
          active: !0,
          type: 'rounded',
          source: 'https://via.placeholder.com/300',
        }),
        (Responsive.args = {
          active: !0,
          type: 'normal',
          source: 'https://via.placeholder.com/300',
          responsive: !0,
        }),
        (Normal.parameters = {
          ...Normal.parameters,
          docs: {
            ...Normal.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Image {...args} />\n    </>;\n}',
              ...Normal.parameters?.docs?.source,
            },
          },
        }),
        (Circle.parameters = {
          ...Circle.parameters,
          docs: {
            ...Circle.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Image {...args} />\n    </>;\n}',
              ...Circle.parameters?.docs?.source,
            },
          },
        }),
        (Rounded.parameters = {
          ...Rounded.parameters,
          docs: {
            ...Rounded.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Image {...args} />\n    </>;\n}',
              ...Rounded.parameters?.docs?.source,
            },
          },
        }),
        (Responsive.parameters = {
          ...Responsive.parameters,
          docs: {
            ...Responsive.parameters?.docs,
            source: {
              originalSource:
                '(args: any) => {\n  return <>\n      <Image {...args} />\n    </>;\n}',
              ...Responsive.parameters?.docs?.source,
            },
          },
        })
      const __namedExportsOrder = ['Normal', 'Circle', 'Rounded', 'Responsive']
      try {
        ;(Normal.displayName = 'Normal'),
          (Normal.__docgenInfo = {
            description: '',
            displayName: 'Normal',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Image/Image.stories.tsx#Normal'
            ] = {
              docgenInfo: Normal.__docgenInfo,
              name: 'Normal',
              path: 'src/components/Image/Image.stories.tsx#Normal',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Circle.displayName = 'Circle'),
          (Circle.__docgenInfo = {
            description: '',
            displayName: 'Circle',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Image/Image.stories.tsx#Circle'
            ] = {
              docgenInfo: Circle.__docgenInfo,
              name: 'Circle',
              path: 'src/components/Image/Image.stories.tsx#Circle',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Rounded.displayName = 'Rounded'),
          (Rounded.__docgenInfo = {
            description: '',
            displayName: 'Rounded',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Image/Image.stories.tsx#Rounded'
            ] = {
              docgenInfo: Rounded.__docgenInfo,
              name: 'Rounded',
              path: 'src/components/Image/Image.stories.tsx#Rounded',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Responsive.displayName = 'Responsive'),
          (Responsive.__docgenInfo = {
            description: '',
            displayName: 'Responsive',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Image/Image.stories.tsx#Responsive'
            ] = {
              docgenInfo: Responsive.__docgenInfo,
              name: 'Responsive',
              path: 'src/components/Image/Image.stories.tsx#Responsive',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
