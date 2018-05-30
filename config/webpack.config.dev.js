const webpack = require('webpack');
const webpackConfig = require('./webpack.config.base');
const { __DEV__ } = require('./paths');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: __DEV__,
    hot: true,
    inline: true,
    port: 7777,
    historyApiFallback: true,
    compress: false,
  },
  output: {
    path: __DEV__,
    publicPath: '/',
    filename: 'assets/javascripts/bundle-[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('development'),
        },
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: 'eval-source-map',
};

const config = Object.assign(webpackConfig, devConfig);

module.exports = config;
