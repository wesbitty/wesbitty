import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import icons from './src/static/icons'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: {
      index: 'src/index.tsx',
      accordion: 'src/components/Accordion.tsx',
      alert: 'src/components/Alert.tsx',
      badge: 'src/components/Badge.tsx',
      button: 'src/components/Button.tsx',
      card: 'src/components/Card/index.tsx',
      checkbox: 'src/components/Checkbox.tsx',
      contextmenu: 'src/components/ContextMenu/index.tsx',
      divider: 'src/components/Divider.tsx',
      dropdown: 'src/components/Dropdown/index.tsx',
      form: 'src/components/Form/index.tsx',
      input: 'src/components/Input/index.tsx',
      icon: 'src/components/Icon/index.tsx',
      listbox: 'src/components/Listbox/index.tsx',
      loading: 'src/components/Loading/index.tsx',
      menu: 'src/components/Menu/index.tsx',
      modal: 'src/components/Modal/index.tsx',
      modal: 'src/components/Popover/index.tsx',
      radio: 'src/components/Radio/index.tsx',
      sidepanel: 'src/components/SidePanel/index.tsx',
      space: 'src/components/Space.tsx',
      select: 'src/components/Select/index.tsx',
      tabs: 'src/components/Tabs/index.tsx',
      toggle: 'src/components/Toggle/index.tsx',
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
      nodeResolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        extensions,
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
          { src: 'src/theme/config.js', dest: 'lib/theme' },
          { src: 'src/theme/colors.js', dest: 'lib/theme' },
          {
            src: 'src/theme/default.ts',
            dest: 'lib/theme',
            rename: () => 'default.js',
          },
        ],
      }),
    ],
  },
]
