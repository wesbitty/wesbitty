module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'standard-with-typescript'],
  ignorePatterns: [
    'packages/ui/lib/*',
    'examples/*',
    '**/.wesjet/*',
    'pacakages/ui/types/*',
    '**/.next/*',
    '**/.turbo/*',
    '**/storybook-static/*',
  ],
  overrides: [
    {
      files: ['*-test.js', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['apps/web/*'],
      extends: [
        'next/core-web-vitals',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
      ],
      rules: {
        'react/jsx-key': 'off',
        'react-hooks/rules-of-hooks': 'off',
        '@next/next/no-img-element': 'off',
        '@next/next/no-html-link-for-pages': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/imports': 'error',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
  },
}
