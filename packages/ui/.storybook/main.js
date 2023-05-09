module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@wesbitty/postcss-preset-modules',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // OR whatever framework you're using
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
}
