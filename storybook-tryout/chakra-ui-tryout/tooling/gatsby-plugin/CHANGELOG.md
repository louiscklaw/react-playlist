# Change Log

## 2.0.2

### Patch Changes

- [`f44a66c42`](https://github.com/chakra-ui/chakra-ui/commit/f44a66c42f75f66fdb73e08fe6bdcc9129a98c27)
  [#4898](https://github.com/chakra-ui/chakra-ui/pull/4898) Thanks
  [@LekoArts](https://github.com/LekoArts)! - fix(gatsby-plugin): Update
  peerDependencies

  Update `peerDependencies` to include Gatsby 4

## 2.0.1

### Patch Changes

- [`dee5a15c8`](https://github.com/chakra-ui/chakra-ui/commit/dee5a15c8964607f889a83ebda9bb0e063e034cc)
  [#4017](https://github.com/chakra-ui/chakra-ui/pull/4017) Thanks
  [@LekoArts](https://github.com/LekoArts)! - Pass `pluginOptions` correctly to
  the `ChakraProvider`. Fixes https://github.com/chakra-ui/chakra-ui/issues/4014

## 2.0.0

### Major Changes

- [`e7261d536`](https://github.com/chakra-ui/chakra-ui/commit/e7261d536caf95ced36bf20931cdcd3bc7b31a4e)
  [#3841](https://github.com/chakra-ui/chakra-ui/pull/3841) Thanks
  [@LekoArts](https://github.com/LekoArts)! - Upgrading to this new major
  version is recommended for everyone as it fixes hot reloading in Gatsby (Fast
  Refresh). In the previous version changes to the shadowed `theme.js` file
  didn't trigger automatic reloading, and a manual reload was necessary.

  ## Breaking Changes

  - The `isUsingColorMode` option was removed. The `ChakraProvider` will always
    use the `ColorModeProvider`
  - The `isResettingCSS` option was renamed to `resetCSS`

  Those changes were made to use the current `ChakraProvider` and align the prop
  names.

  ## Improvements

  - Use `ChakraProvider` instead of the outdated `ThemeProvider` pattern
  - Add `initialColorMode` to the `ColorModeScript`
  - Allow Fast Refresh reloading of all theme files
  - Set stricter `peerDependency` on `gatsby` (to `^2.29.3 || ^3.0.0`)

## 1.0.2

### Patch Changes

- [`efd32c982`](https://github.com/chakra-ui/chakra-ui/commit/efd32c982cd58c1e53468743346a3b8f482b1ae3)
  Thanks [@segunadebayo](https://github.com/segunadebayo)! - - Update
  peer-dependency for gatsby
  - Remove `@chakra-ui/theme` from peer-dependency. The theme already exists in
    `@chakra-ui/react`

## 1.0.1

### Patch Changes

- [`69b9db6e`](https://github.com/chakra-ui/chakra-ui/commit/69b9db6ef1deb3070374088228c9fbb0abedfb8d)
  [#2844](https://github.com/chakra-ui/chakra-ui/pull/2844) Thanks
  [@jmiazga](https://github.com/jmiazga)! - The readme was updated but never
  published.

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0 (2020-11-13)

**Note:** Version bump only for package @chakra-ui/gatsby-plugin

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.8 (2020-10-29)

### Bug Fixes

- **toast:** allow custom render in update
  ([eb8bff9](https://github.com/chakra-ui/chakra-ui/commit/eb8bff911e6ec9de0165ab1e8f5ca10d5e022459)),
  closes [#2362](https://github.com/chakra-ui/chakra-ui/issues/2362)

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.7 (2020-10-25)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# 1.0.0-rc.6 (2020-10-25)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# 1.0.0-rc.5 (2020-09-27)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# 1.0.0-rc.4 (2020-09-25)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# 1.0.0-rc.3 (2020-08-30)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.2 (2020-08-09)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.1](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@1.0.0-rc.0...gatsby-plugin-chakra-ui@1.0.0-rc.1) (2020-08-06)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.0](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@1.0.0-next.7...gatsby-plugin-chakra-ui@1.0.0-rc.0) (2020-07-26)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.7](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@1.0.0-next.6...gatsby-plugin-chakra-ui@1.0.0-next.7) (2020-07-26)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.6](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@1.0.0-next.5...gatsby-plugin-chakra-ui@1.0.0-next.6) (2020-07-15)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.5](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@1.0.0-next.4...gatsby-plugin-chakra-ui@1.0.0-next.5) (2020-07-15)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.4](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@0.1.4...gatsby-plugin-chakra-ui@1.0.0-next.4) (2020-07-01)

### Bug Fixes

- **gatsby-plugin:** add react import to gatsby-ssr
  ([055e359](https://github.com/chakra-ui/chakra-ui/commit/055e3592b93a1e79ab938bf797829aba9a23671f))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.3](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@0.1.4...gatsby-plugin-chakra-ui@1.0.0-next.3) (2020-06-28)

### Bug Fixes

- **gatsby-plugin:** add react import to gatsby-ssr
  ([055e359](https://github.com/chakra-ui/chakra-ui/commit/055e3592b93a1e79ab938bf797829aba9a23671f))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.2](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@0.1.4...gatsby-plugin-chakra-ui@1.0.0-next.2) (2020-06-21)

### Bug Fixes

- **gatsby-plugin:** add react import to gatsby-ssr
  ([055e359](https://github.com/chakra-ui/chakra-ui/commit/055e3592b93a1e79ab938bf797829aba9a23671f))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.4](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@0.1.3...gatsby-plugin-chakra-ui@0.1.4) (2020-02-26)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.3](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@0.1.2...gatsby-plugin-chakra-ui@0.1.3) (2020-02-25)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.2](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@0.1.1...gatsby-plugin-chakra-ui@0.1.2) (2019-12-25)

**Note:** Version bump only for package gatsby-plugin-chakra-ui

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.1](https://github.com/chakra-ui/chakra-ui/compare/gatsby-plugin-chakra-ui@0.1.0...gatsby-plugin-chakra-ui@0.1.1) (2019-12-13)

**Note:** Version bump only for package gatsby-plugin-chakra-ui