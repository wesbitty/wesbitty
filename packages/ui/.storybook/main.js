const babel = require('@babel/core')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/stories/*.stories.tsx',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    'storybook-dark-mode/register',
    '@wesbitty/postcss-preset-modules',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@emotion/styled/base': '@emotion/styled-base',
    }

    return config
  },
}
