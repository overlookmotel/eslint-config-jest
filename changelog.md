# Changelog

## 5.0.1

Dev:

* Fix `package-lock.json` version
* Update dev dependencies

Docs:

* Correct supported Node version
* Correct changelog

## 5.0.0

Features:

* Drop support for Node v10

Dependencies:

* Update peer dependencies

No code:

* Linting fixes

Dev:

* Use NPM v7 for development
* Use Github Actions for CI
* Update dev dependencies

Docs:

* Remove Greenkeeper badge
* Update license year
* Remove license indentation

## 4.1.1

Rules:

* `lowercase-name` relaxed with `ignoreTopLevelDescribe` option

Dependencies:

* Update peer dependencies

Docs:

* Correct changelog

## 4.1.0

Features:

* Drop support for Node v13

Dependencies:

* Update peer dependencies

Tests:

* Import module by name [refactor]
* Run tests in dev mode

Dev:

* Replace `.npmignore` with `files` list in `package.json`
* Update dev dependencies
* CI run tests on Node v14
* `.editorconfig` config
* Simplify lint scripts
* Simplify Jest config
* Remove `sudo` key from Travis CI config
* Travis CI cache NPM

## 4.0.1

Dev:

* NPM ignore `jest.config.js`

## 4.0.0

Breaking changes:

* Drop support for Node v8

Refactor:

* Import file extensions

Dependencies:

* Update ESLint peer dependencies

No code:

* Header code comments

Dev:

* CI run tests on Node v13
* Update dev dependencies
* Tab width 2 in `.editorconfig`
* ESLint ignore coverage dir
* Update `.gitignore` + `.npmignore`
* Remove `sudo` key from Travis CI config

Docs:

* Versioning policy
* Update license year

## 3.0.1

Dev:

* Test with Jest

Doc:

* Fix changelog

## 3.0.0

Breaking changes:

* Update peer dependencies

Dev:

* Update dev dependencies

## 2.1.0

Features:

* Update ESLint peer dependency

Dev:

* Update dev dependencies

## 2.0.1

Dev:

* Update dev dependencies

## 2.0.0

Breaking changes:

* Drop support for Node v6
* Update peer dependencies

Dev:

* CI run tests on Node v12
* `package-lock.json`
* Update dev dependencies

Doc:

* Correct README

## 1.1.1

Dev:

* Update dev dependency `@overlookmotel/eslint-config`
* Update dev dependency `@overlookmotel/eslint-config-tests`
* Git ignore package-lock.json

## 1.1.0

Rules:

* `no-disabled-tests` rule is error not warn

Other:

* Update dev dependency `@overlookmotel/eslint-config`

## 1.0.2

* Update dependencies
* Tests: Fix lint error [refactor]

## 1.0.1

* Add dev dependency `eslint-plugin-jest` [fix]
* Update dev dependency `@overlookmotel/eslint-config`

## 1.0.0

* Initial release
