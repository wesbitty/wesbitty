module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['react-app', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {},
}
