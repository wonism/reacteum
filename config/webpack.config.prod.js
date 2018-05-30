const webpack = require('webpack');
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
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  externals: {
    react: true,
    'react-dom': true,
  },
  devtool: false,
};

const config = Object.assign(webpackConfig, prodConfig);

module.exports = config;
