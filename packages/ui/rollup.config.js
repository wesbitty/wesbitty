import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'

import icons from './src/lib/Icon/icons'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: {
      index: 'src/index.tsx',
      button: 'src/components/Button.tsx',
      icon: 'src/components/Icon/index.tsx',
      card: 'src/components/Card/index.tsx',
      badge: 'src/components/Badge.tsx',
      header: 'src/components/Header.tsx',
      // colorscheme: 'src/theme/ColorScheme/index.tsx',
      alert: 'src/components/Alert.tsx',
      accordion: 'src/components/Accordion.tsx',
      tabs: 'src/components/Tabs.tsx',
      menu: 'src/components/Menu/index.tsx',
      modal: 'src/components/Modal/index.tsx',
      popover: 'src/components/Popover/index.tsx',
      sidepanel: 'src/components/SidePanel/index.tsx',
      dropdown: 'src/components/Dropdown/index.tsx',
      form: 'src/components/Form/index.tsx',
      space: 'src/components/Space.tsx',
      loading: 'src/components/Loading.tsx',
      divider: 'src/components/Divider.tsx',
      select: 'src/components/Select.tsx',
      listbox: 'src/components/Listbox/index.tsx',
      checkbox: 'src/components/Checkbox/index.tsx',
      input: 'src/components/Input.tsx',
      radio: 'src/components/Radio/index.tsx',
      toggle: 'src/components/Toggle/index.tsx',
      // upload: 'src/components/Upload/index.tsx',
      // auth: 'src/components/Auth/index.tsx',
      // auth: 'src/theme/Provider/index.tsx',
      ...icons,
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      './src',
    ],
    output: [
      {
        dir: 'lib/cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      },
      {
        dir: 'lib/esm',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      },
    ],
    plugins: [
      external(),
      typescript(),
      // so JS can be rolled with TS
      // remove when JS files have been removed
      nodeResolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        extensions,
        // skip: keys(EXTERNALS), // <<-- skip: ['react', 'react-dom']
      }),
      commonjs({
        ignoreGlobal: false,
        include: 'node_modules/**',
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
      del({ targets: ['lib/*'] }),
      copy({
        targets: [
          {
            src: 'src/theme/globalTheme.ts',
            dest: 'lib/theme',
            rename: () => 'global-theme.js',
          },
        ],
      }),
    ],
  },
]
