const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.config.base');
const { __SERVER_ENTRY__, __BUILD__ } = require('./paths');

const prodConfig = {
  mode: 'production',
  entry: __SERVER_ENTRY__,
  output: {
    path: __BUILD__,
    publicPath: '/',
    filename: 'server.js',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
          BROWSER: false,
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  devtool: false,
};

const config = Object.assign(webpackConfig, prodConfig);

module.exports = config;
