module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'standard-with-typescript',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  ignorePatterns: [
    'packages/ui/lib/*',
    'examples/*',
    '**/.wesjet/*',
    'pacakages/ui/types/*',
    '**/.next/*',
    '**/.turbo/*',
    '**/storybook-static/*',
  ],
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
    next: {
      rootDir: ['apps/*/'],
    },
  },
  overrides: [
    {
      files: ['*-test.js', '*.spec.js', '*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['apps/*/'],
      extends: [
        'next/core-web-vital',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-types': 'off',
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
  plugins: [
    'plugin:react-hooks/recommended',
    'simple-import-sort',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
  },
}
