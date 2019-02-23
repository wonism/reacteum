# Reacteum

[![npm version](https://badge.fury.io/js/reacteum.svg)](https://badge.fury.io/js/reacteum)
[![Build Status](https://travis-ci.org/wonism/reacteum.svg)](https://travis-ci.org/wonism/reacteum)

## Usage

### Create project with Reacteum CLI
```
# install the Reacteum CLI globally
$ npm i -g reacteum-cli

# create project
$ reacteum new <<PROJECT_NAME>>
```

### Run server
```
# webpack-dev-server
$ npm run dev:client

# express server
$ npm run dev:server
```

### Build
```
# client
$ npm run build:client

# server
$ npm run build:server
```

## Features
- Redux design with ducks modula redux
  - Refer https://github.com/erikras/ducks-modular-redux
- Asynchronous redux with `redux-saga`
- Selectors pattern with `reselector`
- CSS in JS with `styled-components`
- Client side routing with `react-router-dom`
- Code splitting
- Handing meta tags with `react-helmet`
- Server side rendering
- Test with `jest`
- Formatting codes with `eslint` & `prettier`
- Interactive UI test with `storybook`

## Provides
- react ^16.3
- react-dom ^16.3
- prop-types ^15.x
- redux ^4.x
- react-redux ^6.x
- redux-saga ^0.16.x
- reselect ^4.x
- react-router-dom ^4.x
- react-router-redux ^4.x
- styled-components ^4.x
  - css-in-js
- react-helmet ^5.x
  - meta

## Bundling
- webpack ^4.x
- webpack-cli ^3.x

## Test
- jest ^23.x

## Lint
- eslint ^4.x
- prettier-eslint-cli ^4.x
