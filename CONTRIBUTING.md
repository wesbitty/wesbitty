# Contributing

When contributing to this repository, please first discuss the change you wish to make via [GitHub Discussions](https://github.com/wesbitty/wesbitty/discussions/new) with the owners of this repository before submitting a Pull Request.

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) and follow it in all your interactions with the project.

# Developing Wesbitty, Inc.

1. [Getting Started](#getting-started)
   - [Install Dependencies](#install-dependencies)
2. [Local Development](#local-development)
   - [Fork the Repository](#fork-the-repository)
   - [Clone the Repository](#clone-the-repository)
   - [Developing](#developing)
     - [Shared components](#shared-components)
     - [Installing packages](#installing-packages)
3. [Create a pull request](#create-a-pull-request)

- [Community channels](#community-channels)

## Getting Started

Thanks for your interest in [Wesbitty](https://wesbitty.org) and for wanting to contribute! Before you begin, read the
[code of conduct](./CODE_OF_CONDUCT.md) and check out the
[existing issues](https://github.com/wesbitty/wesbitty/issues).
This document describes how to set up your development environment to build and test [Wesbitty](https://wesbitty.org).

### Install Dependencies

You need to install and configure the following dependencies on your machine to build [Wesbitty](https://wesbitty.org):

- [Git](http://git-scm.com/)
- [Node.js v18.x (LTS)](http://nodejs.org)
- [Npm](https://www.npmjs.com/) version 7+ or [Npm](https://npmjs.org/)

## Local Development

This project is configured in a lerna monorepo, where one repository contains multiple npm packages. Dependencies are installed and managed with `npm` CLI.

Make sure all the tests pass before making changes.

### Fork the Repository

To contribute code to [Wesbitty](https://wesbitty.org), you must fork the [Wesbitty Repository](https://github.com/wesbitty/wesbitty).

### Clone the Repository

To get started, execute the following:

1. Clone your GitHub forked repository

   ```sh
   git clone https://github.com/[user]/wesbitty.git
   ```

1. Go to the wesbitty directory:
   ```sh
   cd wesbitty
   ```

### Developing

[Wesbitty](https://wesbitty.org) uses [Turbo](https://turbo.build) & [Npm](https://docs.npmjs.com) to manage and run this monorepo.

1. Install the dependences in the root of the repo.

   ```sh
   npm install
   ```

2. You can then run the apps simultaneously with the following.
   ```sh
   npm run dev
   ```

Then visit, and edit, any of the following sites:

| Site                                           | Directory                        | Scope name       | Description                          | Local development server   |
| ---------------------------------------------- | -------------------------------- | ---------------- | ------------------------------------ | -------------------------- |
| [wesbitty.org](https://wesbitty.org)           | `/apps/web`                      | web              | The main website                     | http://localhost:3000      |
| [app.wesbitty.org](https://app.wesbitty.org)   | `/apps/web/pages/app`            | In processing... | Platform Dashboard                   | http://app.localhost:3000  |
| [wesbitty.org/docs](https://wesbitty.org/docs) | `/apps/web/pages/brand/wesbitty` | docs             | Guides and Reference (Next.js based) | http://localhost:3000/docs |

#### Running sites individually

You can run any of the sites individually by using the scope name. For example:

```sh
npm run dev
```

#### Shared components

The Monorepo has a set of shared components under `/packages`:

- `/packages/ui`: Wesbitty UI Library.
- `/packages/tsconfig`: Shared Typescript Configuration settings

#### Installing packages

Installing a package with NPM workspaces requires you to add the `-w` flag to tell NPM which workspace you want to install into. Do not install dependencies in their local folder, install them from the route using the `-w` flag.

The format is: `npm install <package name> -w=<workspace to install in>`.

For example:

- `npm install @types/node -w ui`: installs into `./packages/ui`
- `npm install @types/node -w web`: installs into `./apps/web`

You do not need to install `devDependencies` in each workspace. These can all be installed in the root package.

---

## Create a pull request

After making your changes, open a pull request (PR). Once you submit your pull request, others from the Wesbitty Team/Community will review it with you.

Did you have an issue, like a merge conflict, or don't know how to open a pull request? Check out [GitHub's pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) tutorial on how to resolve merge conflicts and other issues. Once your PR has been merged, you will be proudly listed as a contributor in the [contributor chart](https://github.com/wesbitty/wesbitty/graphs/contributors).

---

## Community channels

Stuck somewhere? Have any questions? Join the [Discord Community Server](https://discord.wesbitty.org/) or the [Github Discussions](https://github.com/wesbitty/wesbitty/discussions). We are here to help!
