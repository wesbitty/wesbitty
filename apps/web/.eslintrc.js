module.exports = {
  root: true,
  extends: ['plugin:react-hooks/recommended', 'next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/jsx-key': 'off',
    'jsx-a11y/alt-text': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
}
