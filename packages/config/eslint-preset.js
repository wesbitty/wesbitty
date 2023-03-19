module.exports = {
  extends: ["next", "turbo", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-page-custom-font": "off",
    "react/jsx-key": "off",
    "react/no-unescaped-entities": "off"
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
