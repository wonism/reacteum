# Reacteum

[![npm version](https://badge.fury.io/js/reacteum.svg)](https://badge.fury.io/js/reacteum)
[![Build Status](https://travis-ci.org/wonism/reacteum.svg)](https://travis-ci.org/wonism/reacteum)

## Usage

Step 1. Clone this repository
```
$ git clone https://github.com/wonism/reacteum.git
$ cd reacteum
```

Step 2. Install the packages
```
$ npm i
```

Step 3. Run server
```
# webpack-dev-server
$ npm run dev:client
# express server
$ npm run dev:server
```

Step 4. Build
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
- CSS in JS with `react-emotion`
- Client side routing with `react-router-dom`
- Code splitting
- Handing meta tags with `react-helmet`
- Server side rendering
- Test with `jest`
- Formatting codes with `eslint` & `prettier`

## Provides
- react ^15.x || ^16.x
- react-dom ^15.x || ^16.x
- prop-types ^15.x
- redux ^4.x
- react-redux ^5.x
- redux-saga ^0.16.x
- reselect ^3.x
- react-router-dom ^4.x
- react-router-redux ^4.x
- react-emotion ^9.x
  - css-in-js
- react-helmet ^5.x
  - meta

## Bundling
- webpack ^4.x
- webpack-cli ^2.x

## Test
- jest ^23.x

## Lint
- eslint ^4.x
- prettier-eslint-cli ^4.x
