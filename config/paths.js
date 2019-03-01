const { resolve } = require('path');

module.exports = {
  __ROOT__: resolve(__dirname, '..'),
  __APP__: resolve(__dirname, '../src/index.tsx'),
  __SRC__: resolve(__dirname, '../src'),
  __PUBLIC__: resolve(__dirname, '../public'),
  __DEV__: resolve(__dirname, '../dev'),
  __SERVER__: resolve(__dirname, '../server'),
  __SERVER_ENTRY__: resolve(__dirname, '../server/index.js'),
  __BUILD__: resolve(__dirname, '../build'),
  __PACKAGE__: resolve(__dirname, '../package.json'),
};
