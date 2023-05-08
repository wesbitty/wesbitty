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
      // avatar: 'src/components/Avatar/index.tsx',
      button: 'src/components/Button/index.tsx',
      // typography: 'src/components/Typography/index.tsx',
      icon: 'src/components/Icon/index.tsx',
      // image: 'src/components/Image/index.tsx',
      card: 'src/components/Card/index.tsx',
      badge: 'src/components/Badge/index.tsx',
      alert: 'src/components/Alert/index.tsx',
      accordion: 'src/components/Accordion/index.tsx',
      tabs: 'src/components/Tabs/index.tsx',
      menu: 'src/components/Menu/index.tsx',
      modal: 'src/components/Modal/index.tsx',
      modal: 'src/components/Popover/index.tsx',
      sidepanel: 'src/components/SidePanel/index.tsx',
      dropdown: 'src/components/Dropdown/index.tsx',
      form: 'src/components/Form/index.tsx',
      contextmenu: 'src/components/ContextMenu/index.tsx',
      space: 'src/components/Space/index.tsx',
      loading: 'src/components/Loading/index.tsx',
      divider: 'src/components/Divider/index.tsx',
      select: 'src/components/Select/index.tsx',
      listbox: 'src/components/Listbox/index.tsx',
      checkbox: 'src/components/Checkbox/index.tsx',
      input: 'src/components/Input/index.tsx',
      radio: 'src/components/Radio/index.tsx',
      toggle: 'src/components/Toggle/index.tsx',
      // upload: 'src/components/Upload/index.tsx',
      // auth: 'src/components/Auth/index.tsx',
      // auth: 'src/components/ThemeProvider/index.tsx',
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
          { src: 'styles/config.js', dest: 'lib/theme' },
          { src: 'styles/colors.js', dest: 'lib/theme' },
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
