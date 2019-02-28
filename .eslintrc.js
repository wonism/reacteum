const isProduction = process.env.NODE_ENV === 'production';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['react-hooks', 'import', 'babel'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    '$Diff': true,
  },
  rules: {
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'function-paren-newline': [error, 'consistent'],
    'global-require': off,
    'import/extensions': off,
    'import/no-deprecated': warn,
    'import/no-unresolved': off,
    'import/prefer-default-export': off,
    indent: off,
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': error,
    'max-len': [error, { code: 150 }],
    'no-console': isProduction ? error : off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-implicit-coercion': error,
    'no-undef': off,
    'no-underscore-dangle': off,
    'no-unused-vars': [
      error, {
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: 'createElement|Fragment',
      },
    ],
    'object-curly-newline': [error, { consistent: true }],
    'prefer-spread': off,
    'quotes': off,
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': error,
    'react/jsx-one-expression-per-line': off,
    'react/no-typos': error,
    'react/no-unescaped-entities': off,
    'react/react-in-jsx-scope': off,
    'react-hooks/rules-of-hooks': error,
  },
  parser: 'babel-eslint',
  overrides: [
    {
      files: ['server/app.js', 'build/server.js'],
      rules: {
        'react/prop-types': off,
      },
    },
    {
      files: ['src/**/*.test.js'],
      rules: {
        'max-len': off,
        'no-undef': off,
      },
    },
  ],
};
