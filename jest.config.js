module.exports = {
  cacheDirectory: '<rootDir>/.tmp/jest',
  coverageDirectory: './.tmp/coverage',
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    NODE_ENV: 'test',
    __DEV__: 'development'
  },
  verbose: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/mocks/.*', '/cypress/'],
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['typings.d.ts'],
  transformIgnorePatterns: ['.*(node_modules).*$'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
