module.exports = {
  roots: ['<rootDir>', '<rootDir>/src'],
  coverageDirectory: '.reports',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  /*
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^outer(.*)$': '<rootDir>/$1',
  },
  */
  // setupFiles: ['<rootDir>/jest.setup.js'],
  // testEnvironment: 'jest-environment-jsdom-global',
  testMatch: ['**/__tests__/*.(ts|tsx)', '**/*.test.(ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**', '!**src/**/*.d.ts'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
