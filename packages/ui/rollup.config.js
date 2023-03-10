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
      // avatar: 'stories/components/Avatar.tsx',
      button: 'src/components/Button/index.tsx',
      // typography: 'stories/components/Typography/index.tsx',
      icon: 'src/components/Icon/index.tsx',
      // auth: 'stories/components/ThemeProvider/index.tsx',
      ...icons,
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      './src',
    ],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      },
      {
        dir: 'dist/esm',
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
      del({ targets: ['dist/*'] }),
      copy({
        targets: [
          { src: 'src/theme/config.js', dest: 'dist/theme' },
          {
            src: 'src/theme/globalTheme.ts',
            dest: 'dist/theme',
            rename: () => 'global-theme.js',
          },
        ],
      }),
    ],
  },
]
