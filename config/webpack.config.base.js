const { __ROOT__, __SRC__, __APP__, __PACKAGE__ } = require('./paths');

const config = {
  entry: {
    app: __APP__,
    vendor: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': __SRC__,
      _: __ROOT__,
      package: __PACKAGE__,
    },
    modules: ['node_modules', __SRC__],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.jsx?$/, loader: 'source-map-loader' },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: __SRC__,
        options: {
          failOnWarning: true,
          failOnError: true,
          emitWarning: true,
        },
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
};

module.exports = config;
