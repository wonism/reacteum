const { resolve } = require('path');

module.exports = {
  __APP__: resolve(__dirname, '../src/index.jsx'),
  __SRC__: resolve(__dirname, '../src'),
  __PUBLIC__: resolve(__dirname, '../public'),
  __DEV__: resolve(__dirname, '../dev'),
  __PACKAGE__: resolve(__dirname, '../package.json'),
};
