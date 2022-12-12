# Developing Wesbitty, Inc.

1. [Getting started](#getting-started)
   - [Install dependencies](#install-dependencies)
2. [Local development](#local-development)
   - [Fork the repository](#fork-the-repository)
   - [Clone the repo](#clone-the-repo)
   - [Running Lerna](#running-lerna)
     - [Shared components](#shared-components)
     - [Installing packages](#installing-packages)
3. [Create a pull request](#create-a-pull-request)

- [Common tasks](#common-tasks)
  - [Add a redirect](#add-a-redirect)
- [Community channels](#community-channels)

## Getting started

Thanks for your interest in [Wesbitty](https://wesbitty.com) and for wanting to contribute! Before you begin, read the
[code of conduct](https://github.com/wesbitty/.github/blob/master/CODE_OF_CONDUCT.md) and check out the
[existing issues](https://github.com/wesbitty/wesbitty/issues).
This document describes how to set up your development environment to build and test [Wesbitty](https://wesbitty.com).

### Install dependencies

You need to install and configure the following dependencies on your machine to build [Wesbitty](https://wesbitty.com):

- [Git](http://git-scm.com/)
- [Node.js v18.x (LTS)](http://nodejs.org)
- [Npm](https://www.npmjs.com/) version 7+ or [Npm](https://npmjs.org/)

## Local development

We are in the process of migrating this repository to Monorepo, using [Lernarepo](https://lerna.org/docs).

Eventually, all the apps will be run using [Lerna](https://lerna.js), which will significantly improve the developer workflow.

If you are working on the ([docs site](https://wesbitty.com/docs)), please refer to this [developers guide](https://github.com/wesbitty/wesbitty/tree/master/apps/reference/DEVELOPERS.md).

### Fork the repository

To contribute code to [Wesbitty](https://wesbitty.com), you must fork the [Wesbitty Repository](https://github.com/wesbitty/wesbitty).

### Clone the repo

1. Clone your GitHub forked repository:

   ```sh
   git clone https://github.com/wesbitty/wesbitty.git
   ```

1. Go to the Wesbitty directory:
   ```sh
   cd wesbitty
   ```

### Running Lerna

[Wesbitty](https://wesbitty.com) uses [Lerna](https://lerna.js.org) to manage and run this monorepo.

1. Install the dependences in the root of the repo.

   ```sh
   npm install
   ```

2. You can then run the apps simultaneously with the following.
   ```sh
   npm run dev # start all the applications
   ```

Then visit, and edit, any of the following sites:

| Site                                           | Directory   | Scope name       | Description                          | Local development server |
| ---------------------------------------------- | ----------- | ---------------- | ------------------------------------ | ------------------------ |
| [wesbitty.com](https://wesbitty.com)           | `/apps/www` | www              | The main website                     | http://localhost:8080    |
| [app.wesbitty.com](https://app.wesbitty.com)   | `/#`        | In processing... | Studio dashboard                     | http://localhost:3000    |
| [wesbitty.com/docs](https://wesbitty.com/docs) | `/about`    | docs             | Guides and Reference (Next.js based) | http://localhost:4000    |

#### Running sites individually

You can run any of the sites individually by using the scope name. For example:

```sh
npm run dev
```

#### Shared components

The Monorepo has a set of shared components under `/packages`:

- `/packages/config`: All shared config
- `/packages/framework`: Wesbitty Api.
- `/packages/eslint-custom-config`: Shared Eslint Configuration settings

#### Installing packages

Installing a package with NPM workspaces requires you to add the `-w` flag to tell NPM which workspace you want to install into. Do not install dependencies in their local folder, install them from the route using the `-w` flag.

The format is: `npm install <package name> -w=<workspace to install in>`.

For example:

- `npm install react -w config`: installs into `./packages/config`
- `npm install react -w www`: installs into `./apps/www`
- `npm install react -w tests`: installs into `./tests`

You do not need to install `devDependencies` in each workspace. These can all be installed in the root package.

---

## Create a pull request

After making your changes, open a pull request (PR). Once you submit your pull request, others from the Wesbitty team/community will review it with you.

Did you have an issue, like a merge conflict, or don't know how to open a pull request? Check out [GitHub's pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) tutorial on how to resolve merge conflicts and other issues. Once your PR has been merged, you will be proudly listed as a contributor in the [contributor chart](https://github.com/wesbitty/wesbitty/graphs/contributors).

---

## Common tasks

### Add a redirect

Create a new entry in the [`redirects.js`](https://github.com/wesbitty/wesbitty/blob/master/apps/www/lib/redirects.js) file in our main site.

---

## Community channels

Stuck somewhere? Have any questions? Join the [Discord Community Server](https://discord.wesbitty.com/) or the [Github Discussions](https://github.com/wesbitty/wesbitty/discussions). We are here to help!
