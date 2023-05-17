/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'tests/coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov'],
  // setupFiles: ['<rootDir>/tests/jest-env'],
  testMatch: [
    '<rootDir>/tests/**/*.test.ts',
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
