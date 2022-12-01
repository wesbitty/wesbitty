# Contributing

When contributing to this repository, please first discuss the change you wish to make via [GitHub Discussions](https://github.com/wesbitty/wesbitty/discussions/new) with the owners of this repository before submitting a Pull Request.

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) and follow it in all your interactions with the project.

## Local development

This project is configured in a lerna monorepo, where one repository contains multiple npm packages. Dependencies are installed and managed with `npm` CLI.

To get started, execute the following:

```
git clone https://github.com/wesbitty/wesbitty
cd wesbitty
corepack enable
npm install
npm run build
npm run format:prettier
npm run test
```

Make sure all the tests pass before making changes.
