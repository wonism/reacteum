const { __ROOT__, __SRC__, __APP__, __PACKAGE__ } = require('./paths');

const config = {
  entry: {
    app: __APP__,
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-saga', 'react-router-dom', 'react-router-redux'],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': __SRC__,
      _: __ROOT__,
      package: __PACKAGE__,
    },
    modules: ['node_modules', __SRC__],
  },
  module: {
    rules: [
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
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules|bower_components/,
      },
    ],
  },
};

module.exports = config;
