const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CompressionPlugin = require('compression-webpack-plugin');
const webpackConfig = require('./webpack.config.base');
const { __PUBLIC__ } = require('./paths');

const prodConfig = {
  mode: 'production',
  output: {
    path: __PUBLIC__,
    publicPath: '/',
    filename: 'assets/javascripts/[hash]/bundle-[name].js',
    chunkFilename: 'assets/javascripts/[hash]/bundle-[name].chunk.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    new WebpackAssetsManifest({}),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
          BROWSER: true,
        },
      },
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
    }),
  ],
  optimization: {
    minimize: true,
  },
  devtool: false,
};

const config = Object.assign(webpackConfig, prodConfig);

module.exports = config;
